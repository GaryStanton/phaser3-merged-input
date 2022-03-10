export default class MergedInput extends Phaser.Plugins.ScenePlugin {

	/**
	 * The Merged Input plugin is designed to run in the background and handle input.
	 * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
	 *
	 * @extends Phaser.Scene
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

		this.bearings = {
			'-180': 'W',
			'-168.75': 'WBN',
			'-157.5': 'WNW',
			'-146.25': 'NWBW',
			'-135': 'NW',
			'-123.75': 'NWBN',
			'-112.5': 'NNW',
			'-101.25': 'NBW',
			'-90': 'N',
			'-78.75': 'NBE',
			'-67.5': 'NNE',
			'-56.25': 'NEBN',
			'-45': 'NE',
			'-33.75': 'NEBE',
			'-22.5': 'EBE',
			'-11.25': 'EBN',
			'0': 'E',
			'11.25': 'EBS',
			'22.5': 'ESE',
			'33.75': 'SEBE',
			'45': 'SE',
			'56.25': 'SEBS',
			'67.5': 'SSE',
			'78.75': 'SBE',
			'90': 'S',
			'101.25': 'SBW',
			'112.5': 'SSW',
			'123.75': 'SWBS',
			'135': 'SW',
			'146.25': 'SWBW',
			'157.5': 'WSW',
			'168.75': 'WBS',
			'180': 'W'
		};
	}

	refreshGamepads() {
		// Sometimes, gamepads are undefined. For some reason.
		this.gamepads = this.systems.input.gamepad.gamepads.filter(function (el) {
			return el != null;
		});

		for (const [index, thisGamepad] of this.gamepads.entries()) {
			thisGamepad.index = index; // Overwrite the gamepad index, in case we had undefined gamepads earlier
		}
	}

	boot() {
		this.eventEmitter = this.systems.events;
		this.eventEmitter.on('preupdate', this.preupdate, this);
		this.eventEmitter.on('postupdate', this.postupdate, this);

		// Gamepad
		if (typeof this.systems.input.gamepad !== 'undefined') {
			this.systems.input.gamepad.once('connected', function (thisGamepad) {
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

	preupdate() {
		// Loop through players and handle input
		for (let thisPlayer of this.players) {
			// If the pointer hasn't moved, and the scene has changed, this can end up as undefined
			thisPlayer.pointer.BEARING = typeof thisPlayer.pointer.BEARING != 'undefined' ? thisPlayer.pointer.BEARING : '';
			thisPlayer.pointer.BEARING_DEGREES = typeof thisPlayer.pointer.BEARING_DEGREES != 'undefined' ? thisPlayer.pointer.BEARING_DEGREES : 0;
			thisPlayer.pointer.ANGLE = typeof thisPlayer.pointer.ANGLE != 'undefined' ? thisPlayer.pointer.ANGLE : '';


			thisPlayer.direction.BEARING = this.mapDirectionsToBearing(thisPlayer.direction);
			thisPlayer.direction.BEARING_LAST = thisPlayer.direction.BEARING != '' ? thisPlayer.direction.BEARING : thisPlayer.direction.BEARING_LAST;
			thisPlayer.direction.DEGREES = thisPlayer.direction.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING)) : 0;
			thisPlayer.direction.DEGREES_LAST = thisPlayer.direction.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING_LAST)) : 0;
			thisPlayer.direction_secondary.BEARING = this.mapDirectionsToBearing(thisPlayer.direction_secondary);
			thisPlayer.direction_secondary.BEARING_LAST = thisPlayer.direction_secondary.BEARING != '' ? thisPlayer.direction_secondary.BEARING : thisPlayer.direction_secondary.BEARING_LAST;
			thisPlayer.direction_secondary.DEGREES = thisPlayer.direction_secondary.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING)) : 0;
			thisPlayer.direction_secondary.DEGREES_LAST = thisPlayer.direction_secondary.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING_LAST)) : 0;
		}

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
	 * Set up the gamepad and associate with a player object
	 */
	setupGamepad(thisGamepad) {
		this.eventEmitter.emit('mergedInput', { device: 'gamepad', id: thisGamepad.id, player: thisGamepad.index, action: 'Connected' });

		if (typeof this.players[thisGamepad.index] === 'undefined') {
			this.addPlayer();
		}
		this.players[thisGamepad.index].gamepad = thisGamepad;
	}

	/**
	 * Add a new player object to the players array
	 * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
	 */
	addPlayer(index) {
		if (typeof Number.isInteger(index) && typeof this.players[index] !== 'undefined') {
			return this.players[index];
		}
		else {
			this.players.push(this.setupControls());
			this.players[this.players.length - 1].index = this.players.length - 1;
			return this.players[this.players.length - 1];
		}
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
						return thisKey;
					}
				}
			}
		}
		return '';
	}

	/**
	 * Returns a struct to hold input control information
	 * Set up a struct for each player in the game
	 * Direction and Buttons contain the input from the devices
	 * The keys struct contains arrays of keyboard characters that will trigger the action
	 */
	setupControls() {
		let controls = {
			'direction': {
				'UP': 0,
				'DOWN': 0,
				'LEFT': 0,
				'RIGHT': 0,
				'BEARING': '',
				'BEARING_LAST': '',
				'DEGREES': 0,
				'DEGREES_LAST': 0,
				'TIMESTAMP': 0
			},
			'direction_secondary': {
				'UP': 0,
				'DOWN': 0,
				'LEFT': 0,
				'RIGHT': 0,
				'BEARING': '',
				'DEGREES': 0,
				'BEARING_LAST': '',
				'DEGREES_LAST': 0,
				'TIMESTAMP': 0
			},
			'buttons': {},
			'pointer': {
				'M1': 0,
				'M2': 0,
				'M3': 0,
				'M4': 0,
				'M5': 0,
				'BEARING': '',
				'BEARING_DEGREES': 0,
				'ANGLE': 0,
				'TIMESTAMP': 0
			},
			'position': {},
			'interaction': {},
			'gamepad': {},
			'keys': {
				'UP': [],
				'DOWN': [],
				'LEFT': [],
				'RIGHT': [],
			}
		}
		for (let i = 1; i <= 16; i++) {
			controls.buttons['B' + i] = 0;
			controls.keys['B' + i] = [];
		}

		controls.interaction.buffer = '';
		controls.interaction.pressed = '';
		controls.interaction.last = '';
		controls.interaction.lastPressed = '';
		controls.interaction.lastReleased = '';
		controls.interaction.device = '';

		return controls;
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

		if (['UP', 'DOWN', 'LEFT', 'RIGHT', 'ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16'].includes(action)) {
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
		// Loop through players and check for keypresses - use of 'entries()' gives us an index to use for the player
		for (let [playerIndex, thisPlayer] of this.players.entries()) {
			// Loop through all the keys assigned to this player
			for (var thisKey in thisPlayer.keys) {
				let action = 0;
				for (var thisValue of thisPlayer.keys[thisKey]) {
					// Check if the key is down
					action = (this.keys[thisValue].isDown) ? 1 : action;
				}

				// Set the action in the player object
				if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
					thisPlayer.direction[thisKey] = action;
					thisPlayer.direction.TIMESTAMP = this.scene.sys.time.now;
				}
				else if (['ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'].includes(thisKey)) {
					thisPlayer.direction_secondary[thisKey.replace('ALT_', '')] = action;
					if (action == 1) {
						thisPlayer.direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					}
				}
				else {
					thisPlayer.buttons[thisKey] = action;
					if (action == 1) {
						thisPlayer.buttons.TIMESTAMP = this.scene.sys.time.now;
					}
				}

				// Set the latest interaction flag
				if (action == 1) {
					thisPlayer.interaction.device = 'keyboard';
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

			thisPlayer.interaction.device = 'keyboard';
			thisPlayer.interaction.pressed = playerAction;
			thisPlayer.interaction.buffer = playerAction;
			thisPlayer.interaction.last = playerAction;
			thisPlayer.interaction.lastPressed = playerAction;
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
			this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: keyCode, state: 'DOWN' });

			thisPlayer.interaction.device = 'keyboard';
			thisPlayer.interaction.released = playerAction;
			thisPlayer.interaction.lastReleased = playerAction;
		}
	}


	/**
	 * Iterate through players and check for interaction with defined pointer buttons
	 */
	checkPointerInput() {
		// Loop through players and check for button presses - use of 'entries()' gives us an index to use for the player
		for (let [playerIndex, thisPlayer] of this.players.entries()) {
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
		this.players[pad.index].interaction.device = 'gamepad';

		this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'DOWN' });

		// DPad mapping
		if (button.index === 12) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'UP', state: 'DOWN' });
			this.players[pad.index].interaction.pressed = 'UP';
			this.players[pad.index].interaction.last = 'UP';
			this.players[pad.index].interaction.lastPressed = 'UP';
			this.players[pad.index].interaction.buffer = 'UP';
		}
		if (button.index === 13) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'DOWN', state: 'DOWN' });
			this.players[pad.index].interaction.pressed = 'DOWN';
			this.players[pad.index].interaction.last = 'DOWN';
			this.players[pad.index].interaction.lastPressed = 'DOWN';
			this.players[pad.index].interaction.buffer = 'DOWN';
		}
		if (button.index === 14) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'LEFT', state: 'DOWN' });
			this.players[pad.index].interaction.pressed = 'LEFT';
			this.players[pad.index].interaction.last = 'LEFT';
			this.players[pad.index].interaction.lastPressed = 'LEFT';
			this.players[pad.index].interaction.buffer = 'LEFT';
		}
		if (button.index === 15) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'RIGHT', state: 'DOWN' });
			this.players[pad.index].interaction.pressed = 'RIGHT';
			this.players[pad.index].interaction.last = 'RIGHT';
			this.players[pad.index].interaction.lastPressed = 'RIGHT';
			this.players[pad.index].interaction.buffer = 'RIGHT';
		}

		// Last button pressed
		if (![12, 13, 14, 15].includes(button.index)) {
			// Update the last button state
			this.players[pad.index].interaction.pressed = 'B' + button.index;
			this.players[pad.index].interaction.last = 'B' + button.index;
			this.players[pad.index].interaction.lastPressed = 'B' + button.index;
			this.players[pad.index].interaction.buffer = 'B' + button.index;
			this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
		}
		else {
			this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;
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
		this.players[pad.index].interaction.device = 'gamepad';
		this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'UP' });
		// DPad mapping
		if (button.index === 12) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'UP', state: 'UP' });
			this.players[pad.index].interaction.lastReleased = 'UP';
		}
		if (button.index === 13) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'DOWN', state: 'UP' });
			this.players[pad.index].interaction.lastReleased = 'DOWN';
		}
		if (button.index === 14) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'LEFT', state: 'UP' });
			this.players[pad.index].interaction.lastReleased = 'LEFT';
		}
		if (button.index === 15) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'RIGHT', state: 'UP' });
			this.players[pad.index].interaction.lastReleased = 'RIGHT';
		}

		if (![12, 13, 14, 15].includes(button.index)) {
			// Update the last button state
			this.players[pad.index].interaction.lastReleased = 'B' + button.index;
			this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
		}
		else {
			this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;
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

			// Directions
			if (thisGamepad.leftStick.y < -0.5) {
				this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y)
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.leftStick.y > 0.5) {
				this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
				// DPad
				this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
				this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
			}

			if (thisGamepad.leftStick.x < -0.5) {
				this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x)
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.leftStick.x > 0.5) {
				this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x
				this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
				// DPad
				this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
				this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
			}

			// Secondary
			if (thisGamepad.rightStick.y < -0.5) {
				this.players[thisGamepad.index].direction_secondary.UP = Math.abs(thisGamepad.rightStick.y)
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.rightStick.y > 0.5) {
				this.players[thisGamepad.index].direction_secondary.DOWN = thisGamepad.rightStick.y
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else {
				this.players[thisGamepad.index].direction_secondary.UP = 0;
				this.players[thisGamepad.index].direction_secondary.DOWN = 0;
			}

			if (thisGamepad.rightStick.x < -0.5) {
				this.players[thisGamepad.index].direction_secondary.LEFT = Math.abs(thisGamepad.rightStick.x)
				this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
			}
			else if (thisGamepad.rightStick.x > 0.5) {
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
				}
			}
		}
	}


	/**
	 * Function to run on pointer move.
	 * @param {*} pointer - The pointer object
	 */
	pointerMove(pointer, threshold) {
		var threshold = threshold || 0;
		if (pointer.distance > threshold) {
			let pointerDirection = this.getBearingFromAngle(pointer.angle, 8);
			// this.players[0].direction_secondary = this.mapBearingToDirections(pointerDirection);

			// If we've been given a player position, return bearings and angles
			if (typeof this.players[0] !== 'undefined' && this.players[0].position.x !== 'undefined') {
				let position = this.players[0].position;
				let angleToPointer = Phaser.Math.Angle.Between(position.x, position.y, pointer.worldX, pointer.worldY);
				let pointerDirection = this.getBearingFromAngle(angleToPointer, 8);
				let pointerAngle = Number(this.mapBearingToDegrees(pointerDirection));

				this.players[0].pointer.BEARING = pointerDirection;
				this.players[0].pointer.ANGLE = angleToPointer;
				this.players[0].pointer.BEARING_DEGREES = pointerAngle;
				this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
			}
		}
	}


	/**
	 * Function to run on pointer down. Indicates that Mx has been pressed, which should be listened to by the player object
	 * @param {*} pointer - The pointer object
	 */
	pointerDown(pointer) {
		let action = '';
		this.players[0].interaction.device = 'pointer';
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

		this.players[0].pointer[action] = 1;

		// Update the last button state
		this.players[0].interaction.pressed = action;
		this.players[0].interaction.last = action;
		this.players[0].interaction.lastPressed = action;
		this.players[0].interaction.buffer = action;
		this.players[0].pointer.TIMESTAMP = pointer.moveTime;
	}


	/**
	 * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
	 * @param {*} pointer - The pointer object
	 */
	pointerUp(pointer) {
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

		this.players[0].pointer[action] = 0;
		this.players[0].interaction.lastReleased = action;
		this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
	}


	/**
	 * Get the bearing from a given angle
	 * @param {float} angle - Angle to use
	 * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
	 */
	getBearingFromAngle(angle, numDirections, threshold) {
		var numDirections = numDirections || 8;

		var snap_interval = Phaser.Math.PI2 / numDirections;

		var angleSnap = Phaser.Math.Snap.To(angle, snap_interval);
		var angleSnapDeg = Phaser.Math.RadToDeg(angleSnap);
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
	mapDirectionsToBearing(directions, threshold) {
		var threshold = threshold || -.5
		if (directions.UP && !(directions.LEFT || directions.RIGHT)) {
			return 'N';
		}
		if (directions.RIGHT && directions.UP) {
			return 'NE';
		}
		if (directions.RIGHT && !(directions.UP || directions.DOWN)) {
			return 'E';
		}
		if (directions.RIGHT && directions.DOWN) {
			return 'SE';
		}
		if (directions.DOWN && !(directions.LEFT || directions.RIGHT)) {
			return 'S';
		}
		if (directions.LEFT && directions.DOWN) {
			return 'SW';
		}
		if (directions.LEFT && !(directions.UP || directions.DOWN)) {
			return 'W';
		}
		if (directions.LEFT && directions.UP) {
			return 'NW';
		}
		return '';
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
				'device': thisPlayer.device,
				'buttons': thisPlayer.buttons,
				'pointer': thisPlayer.pointer,
				'direction': thisPlayer.direction,
				'direction_secondary': thisPlayer.direction_secondary,
				'keys': thisPlayer.keys
			})
		}

		return debug;
	}
}
