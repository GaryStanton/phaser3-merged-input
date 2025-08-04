import bearings from './configs/bearings'
import controlManager from './controlManager'
import ButtonCombo from './ButtonCombo'

export default class MergedInput extends Phaser.Plugins.ScenePlugin {

	/**
	 * The Merged Input plugin is designed to run in the background and handle input.
	 * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
	 *
	 * @extends Phaser.Plugins.ScenePlugin
	 * @param {*} scene
	 * @param {*} pluginManager
	 */
	constructor(scene, pluginManager) {
		super(scene, pluginManager);
		this.scene = scene;

		// Players
		this.players = [];
		// Gamepads
		this.gamepads = [];
		// Keys object to store Phaser key objects. We'll check these during update
		this.keys = {};

		this.bearings = bearings;

		this.dpadMappings = {
			'UP': 12,
			'DOWN': 13,
			'LEFT': 14,
			'RIGHT': 15
		}

		// A threshold (between 0 and 1) below which analog stick input will be ignored
		this.axisThreshold = 0;

		// The number of directions to snap to when mapping input to bearings (Defaults to 32)
		this.numDirections = Object.keys(this.bearings).length - 1;

		this.controlManager = new controlManager()
	}

	boot() {
		// Scene event emitter
		this.eventEmitter = this.systems.events;
		// Plugin event emitter
		this.events = new Phaser.Events.EventEmitter();

		this.game.events.on(Phaser.Core.Events.PRE_STEP, this.preupdate, this);
		this.game.events.on(Phaser.Core.Events.POST_STEP, this.postupdate, this);
		// Handle the game losing focus
		this.game.events.on(Phaser.Core.Events.BLUR, () => {
			this.loseFocus()
		})

		// Gamepad
		if (typeof this.systems.input.gamepad !== 'undefined') {
			this.systems.input.gamepad.on('connected', function (thisGamepad) {
				this.refreshGamepads();
				this.setupGamepad(thisGamepad)
			}, this);

			// Check to see if the gamepad has already been setup by the browser
			this.systems.input.gamepad.refreshPads();
			if (this.systems.input.gamepad.total) {
				this.refreshGamepads();
				for (const thisGamepad of this.gamepads) {
					this.systems.input.gamepad.emit('connected', thisGamepad);
				}
			}

			this.systems.input.gamepad.on('down', this.gamepadButtonDown, this);
			this.systems.input.gamepad.on('up', this.gamepadButtonUp, this);
		}

		// Keyboard
		this.systems.input.keyboard.on('keydown', this.keyboardKeyDown, this);
		this.systems.input.keyboard.on('keyup', this.keyboardKeyUp, this);


		// Pointer
		this.systems.input.mouse.disableContextMenu();
	}

	preupdate() {
		// Loop through players and handle input
		for (let thisPlayer of this.players) {
			// If the pointer hasn't moved, and the scene has changed, this can end up as undefined
			thisPlayer.pointer.BEARING = typeof thisPlayer.pointer.BEARING != 'undefined' ? thisPlayer.pointer.BEARING : '';
			thisPlayer.pointer.BEARING_DEGREES = typeof thisPlayer.pointer.BEARING_DEGREES != 'undefined' ? thisPlayer.pointer.BEARING_DEGREES : 0;
			thisPlayer.pointer.ANGLE = typeof thisPlayer.pointer.ANGLE != 'undefined' ? thisPlayer.pointer.ANGLE : '';
			thisPlayer.pointer.DEGREES = typeof thisPlayer.pointer.DEGREES != 'undefined' ? thisPlayer.pointer.DEGREES : 0;
			thisPlayer.pointer.POINTERANGLE = typeof thisPlayer.pointer.POINTERANGLE != 'undefined' ? thisPlayer.pointer.POINTERANGLE : ''
			thisPlayer.pointer.POINTERDIRECTION = typeof thisPlayer.pointer.POINTERDIRECTION != 'undefined' ? thisPlayer.pointer.POINTERDIRECTION : ''
			thisPlayer.pointer.PLAYERPOS = typeof thisPlayer.pointer.PLAYERPOS != 'undefined' ? thisPlayer.pointer.PLAYERPOS : ''

			thisPlayer.direction.BEARING = this.mapDirectionsToBearing(thisPlayer.direction);
			thisPlayer.direction.BEARING_LAST = thisPlayer.direction.BEARING != '' ? thisPlayer.direction.BEARING : thisPlayer.direction.BEARING_LAST;
			thisPlayer.direction.DEGREES = thisPlayer.direction.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING)) : 0;
			thisPlayer.direction.DEGREES_LAST = thisPlayer.direction.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING_LAST)) : 0;
			thisPlayer.direction_secondary.BEARING = this.mapDirectionsToBearing(thisPlayer.direction_secondary);
			thisPlayer.direction_secondary.BEARING_LAST = thisPlayer.direction_secondary.BEARING != '' ? thisPlayer.direction_secondary.BEARING : thisPlayer.direction_secondary.BEARING_LAST;
			thisPlayer.direction_secondary.DEGREES = thisPlayer.direction_secondary.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING)) : 0;
			thisPlayer.direction_secondary.DEGREES_LAST = thisPlayer.direction_secondary.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING_LAST)) : 0;
		}


		// If the first player has moved, we want to update the pointer position
		if (typeof this.players[0] !== 'undefined') {
			if (this.players[0].position.x !== this.players[0].position_last.x || this.players[0].position.y !== this.players[0].position_last.y) {
				this.pointerMove(this.systems.input.activePointer);
			}
		}
		this.players[0].position_last.x = this.players[0].position.x;
		this.players[0].position_last.y = this.players[0].position.y;


		this.checkKeyboardInput();
		this.checkGamepadInput();
		this.checkPointerInput();
	}

	postupdate() {
		// Loop through players and manage buffered input
		for (let thisPlayer of this.players) {
			// Clear the interaction buffer
			this.clearBuffer(thisPlayer);
		}
	}

	/**
	 * Clear the interaction buffer for the given player
	 * In the case of 'fake' DPad presses, we're using some convoluted buffers to keep the 'pressed' and 'released' values around for an extra tick
	 * As they're created in this update loop, they're otherwise cleared before the consumer can use them.
	 * @param {*} thisPlayer
	 */
	clearBuffer(thisPlayer) {
		if (thisPlayer.interaction.pressed.length > 0 && thisPlayer.internal.fakedpadPressed.length == 0) {
			thisPlayer.interaction.buffer = [];
		}
		if (thisPlayer.interaction.buffer.length == 0) {
			thisPlayer.interaction.pressed = [];
			thisPlayer.interaction_mapped.pressed = [];
			if (thisPlayer.internal.fakedpadReleased.length == 0) {
				thisPlayer.interaction.released = [];
				thisPlayer.interaction_mapped.released = [];
			}
		}

		thisPlayer.internal.fakedpadPressed = [];
		thisPlayer.internal.fakedpadReleased = [];
	}

	/**
	 * Function to run when the game loses focus
	 * We want to fake releasing the buttons here, so that they're not stuck down without an off event when focus returns to the game
	 */
	loseFocus() {
		// Loop through defined keys and reset them
		for (let thisKey in this.keys) {
			this.keys[thisKey].reset();
		}
	}

	/**
	 * Set up the gamepad and associate with a player object
	 */
	setupGamepad(thisGamepad) {
		this.eventEmitter.emit('mergedInput', { device: 'gamepad', id: thisGamepad.id, player: thisGamepad.index, action: 'Connected' });
		this.events.emit('gamepad_connected', thisGamepad)

		if (typeof this.players[thisGamepad.index] === 'undefined') {
			this.addPlayer();
		}

		let gamepadID = thisGamepad.id.toLowerCase();
		this.players[thisGamepad.index].gamepad = thisGamepad;

		// Map the gamepad buttons
		let mappedPad = this.controlManager.mapGamepad(gamepadID);
		this.players[thisGamepad.index].gamepadMapping = mappedPad.gamepadMapping;
		this.players[thisGamepad.index].interaction_mapped.gamepadType = mappedPad.padType;
		for (let thisButton in this.players[thisGamepad.index].gamepadMapping) {
			this.players[thisGamepad.index].buttons_mapped[thisButton] = 0;
		}
	}

	/**
	 * Set a threshold (between 0 and 1) below which analog stick input will be ignored
	 * @param {*} value
	 * @returns
	 */
	setAxisThreshold(value) {
		this.axisThreshold = value;
		return this;
	}

	/**
	 * Set the number of directions to snap to when mapping input to bearings
	 */
	setNumDirections(value) {
		if (typeof value === 'number' && value > 0) {
			this.numDirections = value;
		}
		return this;
	}


	refreshGamepads() {
		// Sometimes, gamepads are undefined. For some reason.
		this.gamepads = this.systems.input.gamepad.gamepads.filter(function (el) {
			return el != null;
		});

		for (const [index, thisGamepad] of this.gamepads.entries()) {
			thisGamepad.index = index; // Overwrite the gamepad index, in case we had undefined gamepads earlier

			/**
			 * Some cheap gamepads use the first axis as a dpad, in which case we won't have the dpad buttons 12-15
			 */
			thisGamepad.fakedpad = thisGamepad.buttons.length < 15;
		}
	}

	/**
	 * Add a new player object to the players array
	 * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
	 * @param {number} numberOfButtons The number of buttons to assign to the player object. Defaults to 16. Fewer than 16 is not recommended, as gamepad DPads typically map to buttons 12-15
	 */
	addPlayer(index, numberOfButtons) {
		numberOfButtons = numberOfButtons || 16;
		if (typeof Number.isInteger(index) && typeof this.players[index] !== 'undefined') {
			return this.players[index];
		}
		else {
			// Set up player object
			let newPlayer = this.controlManager.setupControls(numberOfButtons);

			// Add helper functions to the player object
			this.addPlayerHelperFunctions(newPlayer);

			// Push new player to players array
			this.players.push(newPlayer);

			this.players[this.players.length - 1].index = this.players.length - 1;

			// If this is the first player, add the pointer events
			if (this.players.length == 1) {
				this.systems.input.on('pointermove', function (pointer) {
					this.pointerMove(pointer);
				}, this);

				this.systems.input.on('pointerdown', function (pointer) {
					this.pointerDown(pointer);
				}, this);

				this.systems.input.on('pointerup', function (pointer) {
					this.pointerUp(pointer);
				}, this);
			}

			return this.players[this.players.length - 1];
		}
	}

	/**
	 * Add helper functions to the player object
	 * @param {*} player
	 */
	addPlayerHelperFunctions(player) {
		/**
		 * Pass a button name, or an array of button names to check if any were pressed in this update step.
		 * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.interaction.isPressed = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.interaction.pressed.includes(x))
			return matchedButtons.length ? matchedButtons : false;
		},

		/**
		 * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
		 * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.interaction.isDown = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.buttons[x])
			let matchedDirections = button.filter(x => player.direction[x])
			let matchedPointer = button.filter(x => player.pointer[x])
			let matchedAll = [...matchedButtons, ...matchedDirections, ...matchedPointer];

			return matchedAll.length ? matchedAll : false;
		},

		/**
		 * Pass a button name, or an array of button names to check if any were released in this update step.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.interaction.isReleased = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.interaction.released.includes(x))
			return matchedButtons.length ? matchedButtons : false;
		}

		/**
		 * Pass a mapped button name, or an array of mapped button names to check if any were pressed in this update step.
		 * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
		 * Returns the name of the matched mapped button(s), in case you need it.
		 */
		player.interaction_mapped.isPressed = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.interaction_mapped.pressed.includes(x))
			return matchedButtons.length ? matchedButtons : false;
		},

		/**
		 * Pass a mapped button name, or an array of mapped button names to check if any are currently pressed in this update step.
		 * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.interaction_mapped.isDown = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.buttons_mapped[x])
			return matchedButtons.length ? matchedButtons : false;
		},

		/**
		 * Pass a mapped button name, or an array of mapped button names to check if any were released in this update step.
		 * Returns the name of the matched mapped button(s), in case you need it.
		 */
		player.interaction_mapped.isReleased = (button) => {
			button = (typeof button === 'string') ? Array(button) : button;
			let matchedButtons = button.filter(x => player.interaction_mapped.released.includes(x))
			return matchedButtons.length ? matchedButtons : false;
		}

		/**
		 * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
		 * Similar to Phaser's keyboard plugin, the checkDown function can accept a 'duration' parameter, and will only register a press once every X milliseconds.
		 * Returns the name of the matched button(s)
		 *
		 * @param {string|array} button Array of buttons to check
		 * @param {number} duration The duration which must have elapsed before this button is considered as being down.
		 * @param {boolean} includeFirst - When true, the initial press of the button will be included in the results. Defaults to false.
		 */
		player.interaction.checkDown = (button, duration, includeFirst) => {
			if (includeFirst === undefined) { includeFirst = false; }
			if (duration === undefined) { duration = 0; }

			let matchedButtons = [];
			let downButtons = player.interaction.isDown(button)
			if (downButtons.length) {

				for (let thisButton of downButtons) {
					if (typeof player.timers[thisButton]._tick === 'undefined') {
						player.timers[thisButton]._tick = 0;
						if (includeFirst) {
							matchedButtons.push(thisButton);
						}
					}

					let t = Phaser.Math.Snap.Floor(this.scene.sys.time.now - player.timers[thisButton].pressed, duration);
					if (t > player.timers[thisButton]._tick) {
						this.game.events.once(Phaser.Core.Events.POST_STEP, ()=>{
							player.timers[thisButton]._tick = t;
						});
						matchedButtons.push(thisButton);
					}
				}
			}

			return matchedButtons.length ? matchedButtons : false;
		},

		/**
		 * Mapped version of the checkDown version - resolves mapped button names and calls the checkDown function
		 */
			player.interaction_mapped.checkDown = (button, duration, includeFirst) => {
			if (includeFirst === undefined) { includeFirst = false; }
			let unmappedButtons = [];

			// Resolve the unmapped button names to a new array
			for (let thisButton of button) {
				let unmappedButton = this.getUnmappedButton(player, thisButton);

				if (unmappedButton) {
					unmappedButtons.push(unmappedButton)
				}
			}

			let downButtons = player.interaction.checkDown(unmappedButtons, duration, includeFirst);
			return downButtons.length ? downButtons.map(x => this.getMappedButton(player, x)) : false;
 		}


		/**
		 * The previous functions are specific to the interaction and interaction_mapped definition of buttons.
		 * In general you would pick a definition scheme and query that object (interaction or interaction_mapped), just for ease though, we'll add some functions that accept either type of convention
		 */

		/**
		 * Pass a button name, or an array of button names to check if any were pressed in this update step.
		 * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.isPressed = (button) => {
			let interaction = player.interaction.isPressed(button) || [];
			let interaction_mapped = player.interaction_mapped.isPressed(button) || [];
			let matchedButtons = [...interaction, ...interaction_mapped];
			return matchedButtons.length ? matchedButtons : false
		},

		/**
		 * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
		 * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
		 * Returns the name of the button(s), in case you need it.
		 */
		player.isDown = (button) => {
			let interaction = player.interaction.isDown(button) || [];
			let interaction_mapped = player.interaction_mapped.isDown(button) || [];
			let matchedButtons = [...interaction, ...interaction_mapped];
			return matchedButtons.length ? matchedButtons : false
		},

		/**
		 * Pass a button name, or an array of button names to check if any were released in this update step.
		 * Returns the name of the matched button(s), in case you need it.
		 */
		player.isReleased = (button) => {
			let interaction = player.interaction.isReleased(button) || [];
			let interaction_mapped = player.interaction_mapped.isReleased(button) || [];
			let matchedButtons = [...interaction, ...interaction_mapped];
			return matchedButtons.length ? matchedButtons : false
		}


		/**
		 * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
		 * Similar to Phaser's keyboard plugin, the checkDown function can accept a 'duration' parameter, and will only register a press once every X milliseconds.
		 * Returns the name of the matched button(s)
		 *
		 * @param {string|array} button Array of buttons to check
		 * @param {number} - The duration which must have elapsed before this button is considered as being down.
		 */
		player.checkDown = (button, duration, includeFirst) => {
			if (includeFirst === undefined) { includeFirst = false; }
			let interaction = player.interaction.checkDown(button, duration, includeFirst) || [];
			let interaction_mapped = player.interaction_mapped.checkDown(button, duration, includeFirst) || [];
			let matchedButtons = [...interaction, ...interaction_mapped];
			return matchedButtons.length ? matchedButtons : false
		}


		player.setDevice = (device) => {
			if (player.interaction.device != device) {
				this.eventEmitter.emit('mergedInput', { device: device, player: player.index, action: 'Device Changed' });
				this.events.emit('device_changed', { player: player.index, device: device });
			}
			player.interaction.device = device;

			return this;
		}

		return this;
	}

	/**
	 * Get player object
	 * @param {number} index Player index
	 */
	getPlayer(index) {
		return typeof this.players[index] !== 'undefined' ? this.players[index] : ''
	}

	getPlayerIndexFromKey(key) {
		for (let thisPlayer of this.players) {
			// Loop through all the keys assigned to this player
			for (var thisKey in thisPlayer.keys) {
				for (var thisValue of thisPlayer.keys[thisKey]) {
					if (thisValue == key) {
						return thisPlayer.index;
					}
				}
			}
		}
		return -1;
	}

	getPlayerButtonFromKey(key) {
		for (let thisPlayer of this.players) {
			// Loop through all the keys assigned to this player
			for (var thisKey in thisPlayer.keys) {
				for (var thisValue of thisPlayer.keys[thisKey]) {
					if (thisValue == key) {
						// Now we have a matching button value, check to see if it's in our mapped buttons, in which case we want to return the button number it matches to
						if (typeof thisPlayer.gamepadMapping[thisKey] !== "undefined") {
							return 'B' + thisPlayer.gamepadMapping[thisKey];
						}
						else {
							return thisKey;
						}
					}
				}
			}
		}
		return '';
	}


	/**
	 * Return an array of actions that a player may use
	 * @param {number} player
	 * @returns
	 */
	getPlayerActions(player) {
		let actions = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'];
		actions.push(...Object.keys(this.players[player].gamepadMapping));
		actions.push(...Object.keys(this.players[player].buttons));

		return actions;
	}

	/**
	 * Given a player and a button ID, return the mapped button name, e.g. 0 = 'RC_S' (Right cluster, South - X on an xbox gamepad)
	 * @param {*} player
	 * @param {*} buttonID
	 */
	getMappedButton(player, buttonID) {
		buttonID = buttonID.toString().replace(/\D/g, '');
		return Object.keys(player.gamepadMapping).find(key => player.gamepadMapping[key] == buttonID);
	}

	/**
	 * Given a player and a mapped button name, return the button ID that it resolves to, e.g. 'RC_S' (Right cluster, South - X on an xbox gamepad) = B0.
	 * This takes directions into account and will thus return 'LEFT' for LC_W, instead of the button ID that can be found in the gamepadMapping.
	 * @param {*} player
	 * @param {*} mappedButton
	 */
	getUnmappedButton(player, mappedButton) {
		let buttonNo = player.gamepadMapping[mappedButton];
		let dpadMapping = this.dpadMappings;
		let direction = Object.keys(dpadMapping).find(key => dpadMapping[key] == buttonNo);

		return direction ? direction : 'B' + player.gamepadMapping[mappedButton];
	}

	// Keyboard functions

	/**
	 * Define a key for a player/action combination
	 * @param {number} player The player on which we're defining a key
	 * @param {string} action The action to define
	 * @param {string} value The key to use
	 * @param {boolean} append When true, this key definition will be appended to the existing key(s) for this action
	 */
	defineKey(player = 0, action, value, append = false) {
		// Set up a new player if none defined
		if (typeof this.players[player] === 'undefined') {
			this.addPlayer();
		}

		if (this.getPlayerActions(player).includes(action)) {
			if (append && (typeof this.players[player].keys[action] !== 'undefined')) {
				this.players[player].keys[action].push([value]);
			}
			else {
				this.players[player].keys[action] = [];
				this.players[player].keys[action].push([value]);
			}

			this.keys[[value]] = this.systems.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[value]);
		}

		return this;
	}

	/**
	 * Iterate through players and check for interaction with defined keys
	 */
	checkKeyboardInput() {
		// Loop through players and check for keypresses
		for (let thisPlayer of this.players) {
			// Loop through all the keys assigned to this player
			for (var thisKey in thisPlayer.keys) {
				let action = 0;
				for (var thisValue of thisPlayer.keys[thisKey]) {
					// Check if the key is down
					action = (this.keys[thisValue].isDown) ? 1 : action;
				}

				// Set the action in the player object

				// Dpad
				if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
					thisPlayer.direction[thisKey] = action;
					if (action == 1) {
						thisPlayer.direction.TIMESTAMP = this.scene.sys.time.now;
					}
				}
				// Alternative direction
				else if (['ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'].includes(thisKey)) {
					thisPlayer.direction_secondary[thisKey.replace('ALT_', '')] = action;
					if (action == 1) {
						thisPlayer.direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					}
				}
				// Friendly button names
				else if (thisKey in thisPlayer.gamepadMapping) {
					// Get the button number from the gamepad mapping
					thisPlayer.buttons['B' + thisPlayer.gamepadMapping[thisKey]] = action;
					thisPlayer.buttons_mapped[thisKey] = action;
					if (action == 1) {
						thisPlayer.buttons.TIMESTAMP = this.scene.sys.time.now;
					}
				}
				// Numbered buttons
				else {
					thisPlayer.buttons[thisKey] = action;
					if (action == 1) {
						thisPlayer.buttons.TIMESTAMP = this.scene.sys.time.now;
					}
				}

				// Set the latest interaction flag
				if (action == 1) {
					thisPlayer.setDevice('keyboard');
				}
			}
		}
	}

	/**
	 * When a keyboard button is pressed down, this function will emit a mergedInput event in the global registry.
	 * The event contains a reference to the player assigned to the key, and passes a mapped action and value
	 */
	keyboardKeyDown(event) {
		let keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(key => Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode);
		let playerIndex = this.getPlayerIndexFromKey(keyCode);
		let playerAction = this.getPlayerButtonFromKey(keyCode);

		if (playerIndex > -1 && playerAction != '') {
			let thisPlayer = this.getPlayer(playerIndex);
			this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: keyCode, state: 'DOWN' });
			this.events.emit('keyboard_keydown', { player: playerIndex, key: keyCode });

			thisPlayer.setDevice('keyboard');
			thisPlayer.interaction.pressed.push(playerAction);
			thisPlayer.interaction.buffer.push(playerAction);
			thisPlayer.interaction.last = playerAction;
			thisPlayer.interaction.lastPressed = playerAction;

			// Update timers
			thisPlayer.timers[playerAction].pressed = this.scene.sys.time.now;
			thisPlayer.timers[playerAction].released = 0;
			thisPlayer.timers[playerAction].duration = 0;

			// Update mapped button object
			if (typeof this.dpadMappings[playerAction] !== "undefined") {
				playerAction = 'B' + this.dpadMappings[playerAction];
			}
			if (typeof thisPlayer.buttons[playerAction] !== "undefined") {
				let mappedButton = this.getMappedButton(thisPlayer, playerAction);
				if (typeof mappedButton !== "undefined") {
					thisPlayer.buttons_mapped[mappedButton] = 1;
					thisPlayer.interaction_mapped.pressed.push(mappedButton);
					thisPlayer.interaction_mapped.last = mappedButton;
					thisPlayer.interaction_mapped.lastPressed = mappedButton;
					thisPlayer.interaction_mapped.gamepadType = 'keyboard';
				}
			}
		}
	}

	/**
	 * When a keyboard button is released, this function will emit a mergedInput event in the global registry.
	 * The event contains a reference to the player assigned to the key, and passes a mapped action and value
	 */
	keyboardKeyUp(event) {
		let keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(key => Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode);
		let playerIndex = this.getPlayerIndexFromKey(keyCode);
		let playerAction = this.getPlayerButtonFromKey(keyCode);

		if (playerIndex > -1 && playerAction != '') {
			let thisPlayer = this.getPlayer(playerIndex);
			this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: keyCode, state: 'UP' });
			this.events.emit('keyboard_keyup', { player: playerIndex, key: keyCode });

			thisPlayer.setDevice('keyboard');
			thisPlayer.interaction.released.push(playerAction);
			thisPlayer.interaction.lastReleased = playerAction;

			// Update timers
			thisPlayer.timers[playerAction].released = this.scene.sys.time.now;
			thisPlayer.timers[playerAction].duration = thisPlayer.timers[playerAction].released - thisPlayer.timers[playerAction].pressed;
			delete thisPlayer.timers[playerAction]._tick;

			// Update mapped button object
			if (typeof this.dpadMappings[playerAction] !== "undefined") {
				playerAction = 'B' + this.dpadMappings[playerAction];
			}
			if (typeof thisPlayer.buttons[playerAction] !== "undefined") {
				let mappedButton = this.getMappedButton(thisPlayer, playerAction);
				if (typeof mappedButton !== "undefined") {
					thisPlayer.buttons_mapped[mappedButton] = 0;
					thisPlayer.interaction_mapped.released = mappedButton;
					thisPlayer.interaction_mapped.lastReleased = mappedButton;
					thisPlayer.interaction_mapped.gamepadType = 'keyboard';
				}
			}
		}
	}


	/**
	 * Iterate through players and check for interaction with defined pointer buttons
	 */
	checkPointerInput() {
		// Loop through players and check for button presses
		for (let thisPlayer of this.players) {
			// Loop through all the keys assigned to this player
			for (var thisKey in thisPlayer.keys) {
				for (var thisValue of thisPlayer.keys[thisKey]) { // Each definition for this key action
					if (['M1', 'M2', 'M3', 'M4', 'M5'].includes(thisValue[0])) {
						// Check to see if button is pressed (stored in P1, can't have two mice...)
						if (this.players[0].pointer[thisValue] == 1) {
							thisPlayer.buttons[thisKey] = 1;
						}
					}
				}
			}
		}
	}


	// Gamepad functions

	/**
	 * When a gamepad button is pressed down, this function will emit a mergedInput event in the global registry.
	 * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
	 * @param {number} index Button index
	 * @param {number} value Button value
	 * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
	 */
	gamepadButtonDown(pad, button, value) {
		this.players[pad.index].setDevice('gamepad');
		this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
		this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'DOWN' });
		this.events.emit('gamepad_buttondown', { player: pad.index, button: `B${button.index}` });

		// Buttons
		if (![12, 13, 14, 15].includes(button.index)) {
			let playerAction = 'B' + button.index;

			// Update the last button state
			this.players[pad.index].interaction.pressed.push(playerAction);
			this.players[pad.index].interaction.last = playerAction;
			this.players[pad.index].interaction.lastPressed = playerAction;
			this.players[pad.index].interaction.buffer.push(playerAction);

			// Update timers
			this.players[pad.index].timers[playerAction].pressed = this.scene.sys.time.now;
			this.players[pad.index].timers[playerAction].released = 0;
			this.players[pad.index].timers[playerAction].duration = 0;

			// Update mapped button object
			let mappedButton = this.getMappedButton(this.players[pad.index], button.index);
			if (typeof mappedButton !== "undefined") {
				this.players[pad.index].interaction_mapped.pressed.push(mappedButton);
				this.players[pad.index].interaction_mapped.last = mappedButton;
				this.players[pad.index].interaction_mapped.lastPressed = mappedButton;
			}
		}
		// DPad
		else {
			let dpadMapping = this.dpadMappings;
			let direction = Object.keys(dpadMapping).find(key => dpadMapping[key] == button.index);
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: direction, state: 'DOWN' });
			this.events.emit('gamepad_directiondown', { player: pad.index, button: direction });

			this.players[pad.index].interaction.pressed.push(direction);
			this.players[pad.index].interaction.last = direction;
			this.players[pad.index].interaction.lastPressed = direction;
			this.players[pad.index].interaction.buffer.push(direction);
			this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;

			// Update timers
			this.players[pad.index].timers[direction].pressed = this.scene.sys.time.now;
			this.players[pad.index].timers[direction].released = 0;
			this.players[pad.index].timers[direction].duration = 0;


			// Update mapped button object
			let mappedButton = this.getMappedButton(this.players[pad.index], button.index);
			if (typeof mappedButton !== "undefined") {
				this.players[pad.index].interaction_mapped.pressed.push(mappedButton);
				this.players[pad.index].interaction_mapped.last = mappedButton;
				this.players[pad.index].interaction_mapped.lastPressed = mappedButton;
			}
		}
	}

	/**
	 * When a gamepad button is released, this function will emit a mergedInput event in the global registry.
	 * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
	 * @param {number} index Button index
	 * @param {number} value Button value
	 * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
	 */
	gamepadButtonUp(pad, button, value) {
		this.players[pad.index].setDevice('gamepad');
		this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;

		this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'UP' });
		this.events.emit('gamepad_buttonup', { player: pad.index, button: `B${button.index}` });

		// Buttons
		if (![12, 13, 14, 15].includes(button.index)) {
			let playerAction = 'B' + button.index;

			// Update the last button state
			this.players[pad.index].interaction.released.push(playerAction);
			this.players[pad.index].interaction.lastReleased = playerAction;

			// Update timers
			this.players[pad.index].timers[playerAction].released = this.scene.sys.time.now;
			this.players[pad.index].timers[playerAction].duration = this.players[pad.index].timers[playerAction].released - this.players[pad.index].timers[playerAction].pressed;
			delete this.players[pad.index].timers[playerAction]._tick;

			// Update mapped button object
			let mappedButton = this.getMappedButton(this.players[pad.index], button.index);
			if (typeof mappedButton !== "undefined") {
				this.players[pad.index].interaction_mapped.released = mappedButton;
				this.players[pad.index].interaction_mapped.lastReleased = mappedButton;
			}
		}
		// DPad
		else {
			let dpadMapping = this.dpadMappings;
			let direction = Object.keys(dpadMapping).find(key => dpadMapping[key] == button.index);
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: direction, state: 'UP' });
			this.events.emit('gamepad_directionup', { player: pad.index, button: direction });

			this.players[pad.index].interaction.released.push(direction);
			this.players[pad.index].interaction.lastReleased = direction;

			// Update timers
			this.players[pad.index].timers[direction].released = this.scene.sys.time.now;
			this.players[pad.index].timers[direction].duration = this.players[pad.index].timers[direction].released - this.players[pad.index].timers[direction].pressed;
			delete this.players[pad.index].timers[direction]._tick;

			// Update mapped button object
			let mappedButton = this.getMappedButton(this.players[pad.index], button.index);
			if (typeof mappedButton !== "undefined") {
				this.players[pad.index].interaction_mapped.released = mappedButton;
				this.players[pad.index].interaction_mapped.lastReleased = mappedButton;
			}
		}
	}

	/**
	 * Some gamepads map dpads to axis, which are handled differently to buttons.
	 * This function mimics a gamepad push and fires an event.
	 * We also insert the direction into a buffer so that we know what buttons are pressed in the gamepadFakeDPadRelease function
	 * We use an array for the buffer and pressed vars, as more than one button may be pressed at the same time, within the same step.
	 */
	gamepadFakeDPadPress(gamepad, direction) {
		if (!this.players[gamepad.index].internal.fakedpadBuffer.includes(direction)) {
			this.players[gamepad.index].internal.fakedpadBuffer.push(direction);
			this.players[gamepad.index].internal.fakedpadPressed.push(direction);

			let thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction])
			thisButton.value = 1;
			thisButton.pressed = true;
			thisButton.events.emit('down', gamepad, thisButton, 1)
		}
	}

	/**
	 * When the axis is blank, we know we've released all buttons.
	 */
	gamepadFakeDPadRelease(gamepad) {
		if (this.players[gamepad.index].internal.fakedpadBuffer.length > 0) {

			for (let direction of this.players[gamepad.index].internal.fakedpadBuffer) {
				this.players[gamepad.index].internal.fakedpadReleased = direction;

				let thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction])
				thisButton.value = 0;
				thisButton.pressed = false;
				thisButton.events.emit('up', gamepad, thisButton, 0)
			}

			this.players[gamepad.index].internal.fakedpadBuffer = [];
		}
	}

	/**
	 * Iterate through gamepads and handle interactions
	 */
	checkGamepadInput() {
		// Check for gamepad input
		for (var thisGamepad of this.gamepads) {

			// Set up a player if we don't have one, presumably due to race conditions in detecting gamepads
			if (typeof this.players[thisGamepad.index] === 'undefined') {
				this.addPlayer();
			}

			let direction = '';

			// Directions
			if (thisGamepad.leftStick.y < -this.axisThreshold) {
				this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y)
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

				if (thisGamepad.fakedpad) {
					this.gamepadFakeDPadPress(thisGamepad, 'UP');
					direction = 'UP'
				}
			}
			else if (thisGamepad.leftStick.y > this.axisThreshold) {
				this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

				if (thisGamepad.fakedpad) {
					this.gamepadFakeDPadPress(thisGamepad, 'DOWN');
					direction = 'DOWN'
				}
			}
			else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
				// DPad
				this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
				this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
			}

			if (thisGamepad.leftStick.x < -this.axisThreshold) {
				this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x)
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

				if (thisGamepad.fakedpad) {
					this.gamepadFakeDPadPress(thisGamepad, 'LEFT');
					direction = 'LEFT'
				}
			}
			else if (thisGamepad.leftStick.x > this.axisThreshold) {
				this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

				if (thisGamepad.fakedpad) {
					this.gamepadFakeDPadPress(thisGamepad, 'RIGHT');
					direction = 'RIGHT'
				}
			}
			else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
				// DPad
				this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
				this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
			}

			if (thisGamepad.fakedpad && direction == '') {
				this.gamepadFakeDPadRelease(thisGamepad);
			}

			// Secondary
			if (thisGamepad.rightStick.y < -this.axisThreshold) {
				this.players[thisGamepad.index].direction_secondary.UP = Math.abs(thisGamepad.rightStick.y)
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.rightStick.y > this.axisThreshold) {
				this.players[thisGamepad.index].direction_secondary.DOWN = thisGamepad.rightStick.y
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else {
				this.players[thisGamepad.index].direction_secondary.UP = 0;
				this.players[thisGamepad.index].direction_secondary.DOWN = 0;
			}

			if (thisGamepad.rightStick.x < -this.axisThreshold) {
				this.players[thisGamepad.index].direction_secondary.LEFT = Math.abs(thisGamepad.rightStick.x)
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.rightStick.x > this.axisThreshold) {
				this.players[thisGamepad.index].direction_secondary.RIGHT = thisGamepad.rightStick.x
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else {
				this.players[thisGamepad.index].direction_secondary.LEFT = 0;
				this.players[thisGamepad.index].direction_secondary.RIGHT = 0;
			}

			if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
				// Buttons
				for (var b = 0; b < thisGamepad.buttons.length; b++) {
					let button = thisGamepad.buttons[b];
					this.players[thisGamepad.index].buttons['B' + b] = button.value;
					// Get mapped name for this button number and artificially update the relevant buttons_mapped key
					let mappedButton = this.getMappedButton(this.players[thisGamepad.index], b);
					if (typeof mappedButton !== "undefined") {
						this.players[thisGamepad.index].buttons_mapped[mappedButton] = button.value;
					}
				}

				// If we're faking the d-pad, we won't have the extra buttons so we'll have to manually update the button objects
				if (thisGamepad.fakedpad) {
					if (direction == '') {
						this.players[thisGamepad.index].buttons['B12'] = 0;
						this.players[thisGamepad.index].buttons['B13'] = 0;
						this.players[thisGamepad.index].buttons['B14'] = 0;
						this.players[thisGamepad.index].buttons['B15'] = 0;
						this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B12')] = 0;
						this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B13')] = 0;
						this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B14')] = 0;
						this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B15')] = 0;
					}
					else {
						this.players[thisGamepad.index].buttons['B' + this.dpadMappings[direction]] = 1;
						let mappedButton = this.getMappedButton(this.players[thisGamepad.index], 'B' + this.dpadMappings[direction]);
						this.players[thisGamepad.index].buttons_mapped[mappedButton] = 1;
					}
				}
			}
		}
	}


	/**
	 * Function to run on pointer move.
	 * @param {*} pointer - The pointer object
	 */
	pointerMove(pointer, threshold, numDirections) {
		if (this.players.length) {
			threshold = threshold || -1;
			numDirections = numDirections || this.numDirections;

			if (pointer.distance > threshold) {
				let pointerDirection = this.getBearingFromAngle(pointer.angle, numDirections);

				// If we've been given a player position, return bearings and angles
				if (typeof this.players[0] !== 'undefined' && this.players[0].position.x !== 'undefined') {

					let position = this.players[0].position;
					let angleToPointer = Math.round(Phaser.Math.Angle.Between(position.x, position.y, pointer.x, pointer.y) * 100) / 100;
					let angleDegrees = Math.round(Phaser.Math.RadToDeg(angleToPointer) * 100) / 100;
					pointerDirection = this.getBearingFromAngle(angleToPointer, numDirections);
					let pointerAngle = Number(this.mapBearingToDegrees(pointerDirection));

					this.players[0].pointer.BEARING = pointerDirection;
					this.players[0].pointer.ANGLE = angleToPointer;
					this.players[0].pointer.DEGREES = angleDegrees;
					this.players[0].pointer.BEARING_DEGREES = pointerAngle;
					this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;

					this.players[0].pointer.POINTERANGLE = pointerAngle;
					this.players[0].pointer.POINTERDIRECTION = pointerDirection;
					this.players[0].pointer.PLAYERPOS = position;
				}
			}
		}
	}


	/**
	 * Function to run on pointer down. Indicates that Mx has been pressed, which should be listened to by the player object
	 * @param {*} pointer - The pointer object
	 */
	pointerDown(pointer) {
		if (this.players.length) {
			let action = '';
			this.players[0].setDevice('pointer');
			if (pointer.leftButtonDown()) {
				action = 'M1';
			}
			if (pointer.rightButtonDown()) {
				action = 'M2';
			}
			if (pointer.middleButtonDown()) {
				action = 'M3';
			}
			if (pointer.backButtonDown()) {
				action = 'M4';
			}
			if (pointer.forwardButtonDown()) {
				action = 'M5';
			}

			this.eventEmitter.emit('mergedInput', { device: 'pointer', value: 1, player: 0, action: action, state: 'DOWN' });
			this.events.emit('pointer_down', action);

			this.players[0].pointer[action] = 1;

			// Update the last button state
			this.players[0].interaction.pressed.push(action);
			this.players[0].interaction.last = action;
			this.players[0].interaction.lastPressed = action;
			this.players[0].interaction.buffer.push(action);
			this.players[0].pointer.TIMESTAMP = pointer.moveTime;

			// Update timers
			this.players[0].timers[action].pressed = this.scene.sys.time.now;
			this.players[0].timers[action].released = 0;
			this.players[0].timers[action].duration = 0;
		}
	}


	/**
	 * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
	 * @param {*} pointer - The pointer object
	 */
	pointerUp(pointer) {
		if (this.players.length) {
			let action = '';
			if (pointer.leftButtonReleased()) {
				action = 'M1';
			}
			if (pointer.rightButtonReleased()) {
				action = 'M2';
			}
			if (pointer.middleButtonReleased()) {
				action = 'M3';
			}
			if (pointer.backButtonReleased()) {
				action = 'M4';
			}
			if (pointer.forwardButtonReleased()) {
				action = 'M5';
			}

			this.eventEmitter.emit('mergedInput', { device: 'pointer', value: 1, player: 0, action: action, state: 'UP' });
			this.events.emit('pointer_up', action);

			this.players[0].pointer[action] = 0;
			this.players[0].interaction.released.push(action);
			this.players[0].interaction.lastReleased = action;
			this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;

			// Update timers
			this.players[0].timers[action].released = this.scene.sys.time.now;
			this.players[0].timers[action].duration = this.players[0].timers[action].released - this.players[0].timers[action].pressed;
			delete this.players[0].timers[action]._tick;
		}
	}


	/**
     * Create new button combo.
	 * Combos extend Phaser's keyboard combo and mimic their functionality for gamepad/player combinations.
	 * If you requrie a keyboard entered combo, use the native Phaser.Input.Keyboard.KeyboardPlugin.createCombo function.
	 *
	 * @param {player} player - A player object. If more than one player should be able to execute the combo, you should create multiple buttonCombo instances.
     * @param {(object[])} buttons - An array of buttons that comprise this combo. Use button IDs, mapped buttons or directions, e.g. ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'RC_E', 'RC_S']
     * @param {Phaser.Types.Input.Keyboard.KeyComboConfig} [config] - A Key Combo configuration object.
     */
    createButtonCombo(player, buttons, config) {
        return new ButtonCombo(this, player, buttons, config);
    }


	/**
	 * Get the bearing from a given angle
	 * @param {float} angle - Angle to use
	 * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
	 */
	getBearingFromAngle(angle, numDirections) {
		numDirections = numDirections || this.numDirections;

		var snap_interval = Phaser.Math.PI2 / numDirections;

		var angleSnap = Phaser.Math.Snap.To(angle, snap_interval);
		var angleSnapDeg = Number(Phaser.Math.RadToDeg(angleSnap).toFixed(2));
		var angleSnapDir = this.bearings[angleSnapDeg];

		return angleSnapDir;
	}


	/**
	 * Given a bearing, return a direction object containing boolean flags for the four directions
	 * @param {*} bearing
	 */
	mapBearingToDirections(bearing) {
		let thisDirection = {
			'UP': 0,
			'DOWN': 0,
			'LEFT': 0,
			'RIGHT': 0,
			'BEARING': bearing.toUpperCase()
		}

		if (bearing.toUpperCase().includes('W')) {
			thisDirection.LEFT = 1;
		}
		if (bearing.toUpperCase().includes('E')) {
			thisDirection.RIGHT = 1;
		}
		if (bearing.toUpperCase().includes('S')) {
			thisDirection.DOWN = 1;
		}
		if (bearing.toUpperCase().includes('N')) {
			thisDirection.UP = 1;
		}

		return thisDirection;
	}


	/**
	 * Given a directions object, return the applicable bearing (8 way only)
	 * @param {*} directions
	 */
	mapDirectionsToBearing(directions, threshold, numDirections) {
		threshold = threshold || 0;
		numDirections = numDirections || this.numDirections;

		// Get the analog values for each direction
		let up = directions.UP || 0;
		let down = directions.DOWN || 0;
		let left = directions.LEFT || 0;
		let right = directions.RIGHT || 0;

		// Apply threshold
		up = Math.abs(up) > threshold ? up : 0;
		down = Math.abs(down) > threshold ? down : 0;
		left = Math.abs(left) > threshold ? left : 0;
		right = Math.abs(right) > threshold ? right : 0;

		// Calculate net direction values
		let x = right - left;  // Positive = right, negative = left
		let y = down - up;     // Positive = down, negative = up

		// If no input, return empty bearing
		if (x === 0 && y === 0) {
			return '';
		}

		// Calculate angle using atan2 (returns angle in radians from -π to π)
		let angle = Math.atan2(y, x);

		// Convert to bearing using your existing function
		return this.getBearingFromAngle(angle, numDirections);
	}

	/**
	 * Given a bearing, return the snapped angle in degrees
	 * @param {*} bearing
	 */
	mapBearingToDegrees(bearing) {
		if (bearing != '') {
			return Object.keys(this.bearings).find(key => this.bearings[key] === bearing);
		}
		else {
			return '';
		}
	}

	destroy() {
		this.shutdown();
		this.scene = undefined;
	}

	/**
	 * Return debug object
	 */
	debug() {
		// Debug variables
		var debug = {
			'input': {}
		};
		debug.input.gamepads = [];

		for (var i = 0; i < this.gamepads.length; i++) {
			let pad = this.gamepads[i];
			let buttons = {};
			let axes = {};

			for (var b = 0; b < pad.buttons.length; b++) {
				let button = pad.buttons[b];
				buttons['B' + button.index] = button.value;
			}

			for (var a = 0; a < pad.axes.length; a++) {
				let axis = pad.axes[a];
				axes['A' + axis.index] = axis.getValue();
			}

			debug.input.gamepads.push({
				'ID': pad.id,
				'Index': pad.index,
				'Buttons': buttons,
				'Axes': axes
			});
		}

		debug.players = [];
		for (let thisPlayer of this.players) {
			debug.players.push({
				'interaction': thisPlayer.interaction,
				'interaction_mapped': thisPlayer.interaction_mapped,
//				'device': thisPlayer.interaction.device,
				'buttons': thisPlayer.buttons,
				'buttons_mapped': thisPlayer.buttons_mapped,
				'timers': thisPlayer.timers,
				'pointer': thisPlayer.pointer,
				'direction': thisPlayer.direction,
				'direction_secondary': thisPlayer.direction_secondary,
				'keys': thisPlayer.keys
			})
		}

		return debug;
	}
}
