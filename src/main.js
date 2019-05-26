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

    }    

    boot() {
        this.eventEmitter = this.systems.events;
        this.eventEmitter.on('update', this.update, this);

        // Gamepad
        if (typeof this.systems.input.gamepad !== 'undefined') {
            this.systems.input.gamepad.once('connected', function (thisGamepad) {
                thisGamepad.on('down', this.gamepadButtonDown, this);
                thisGamepad.on('up', this.gamepadButtonUp, this);
                this.eventEmitter.emit('mergedInput', {device:'gamepad', id:thisGamepad.id, player:thisGamepad.index, action:'Connected'});
                if (typeof this.players[thisGamepad.index] === 'undefined') {
                    this.addPlayer();
                }
                this.players[thisGamepad.index].gamepad = thisGamepad;
            }, this);
            this.gamepads = this.systems.input.gamepad.gamepads;
        }

        // Keyboard
        this.systems.input.keyboard.on('keydown', function (event){
            let keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(key => Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode);
            let playerIndex = this.getPlayerIndexFromKey(keyCode);
            if (playerIndex > -1) {
                this.getPlayer(playerIndex).interaction.device = 'keyboard';
            }
        }, this);
        this.systems.input.keyboard.on('keyup', function (){
            let keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(key => Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode);
            let playerIndex = this.getPlayerIndexFromKey(keyCode);
            if (playerIndex > -1) {
                this.getPlayer(playerIndex).interaction.device = 'keyboard';
            }
        }, this);
    }

    update() {
        // Loop through players and manage buffered input
        for (let thisPlayer of this.players) {
            if (thisPlayer.interaction.buffer == '') {
                thisPlayer.interaction.pressed = '';
            }
            if (thisPlayer.interaction.pressed != '') {
                thisPlayer.interaction.buffer = '';
            }
        }

        this.checkKeyboardInput();
        this.checkGamepadInput();
    }

    
 

    /**
     * Add a new player object to the players array
     */
    addPlayer() {
        this.players.push(this.setupControls());
        this.players[this.players.length-1].index = this.players.length-1;
        return this.players[this.players.length-1];
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
                'RIGHT': 0
            },
            'buttons': {},
            'interaction': {},
            'gamepad': {},
            'keys': {
                'UP': [],
                'DOWN': [],
                'LEFT': [],
                'RIGHT': [],
            }
        }
        for (let i=1; i<=16; i++) {
            controls.buttons['B'+i] = 0;
            controls.keys['B'+i] = [];
        }

        controls.interaction.buffer = '';
        controls.interaction.pressed = '';
        controls.interaction.last = '';
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

        if (['UP','DOWN','LEFT','RIGHT','B0','B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12','B13','B14','B15','B16'].includes(action)) {
            if (append) {
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

                    // Emit events based on the key down and up values
                    if(Phaser.Input.Keyboard.JustDown(this.keys[thisValue])) {
                        this.eventEmitter.emit('mergedInput', {device:'keyboard', value:1, player:playerIndex, action:thisKey, state: 'DOWN'});
                        // Update the last button state
                        thisPlayer.interaction.pressed = thisKey;
                        thisPlayer.interaction.buffer = thisKey;
                        thisPlayer.interaction.last = thisKey;
                    }
                    if(Phaser.Input.Keyboard.JustUp(this.keys[thisValue])) {
                        this.eventEmitter.emit('mergedInput', {device:'keyboard', value:1, player:playerIndex, action:thisKey, state: 'UP'});
                    }
                }

                // Set the action in the player object
                if (['UP','DOWN','LEFT','RIGHT'].includes(thisKey)) {
                    thisPlayer.direction[thisKey] = action;
                }
                else {
                    thisPlayer.buttons[thisKey] = action;
                }

                // Set the latest interaction flag
                if (action == 1) {
                    thisPlayer.interaction.device = 'keyboard';
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
    gamepadButtonDown(index, value, button){
        this.players[button.pad.index].interaction.device = 'gamepad';
        this.eventEmitter.emit('mergedInput', {device:'gamepad', value:value, player:button.pad.index, action:'B' + index, state: 'DOWN'});
        // DPad mapping
        if (index === 12) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'UP', state: 'DOWN'});
        }
        if (index === 13) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'DOWN', state: 'DOWN'});
        }
        if (index === 14) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'LEFT', state: 'DOWN'});
        }
        if (index === 15) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'RIGHT', state: 'DOWN'});
        }

        // Last button pressed
        if (![12,13,14,15].includes(index)) {
            // Update the last button state
            this.players[button.pad.index].interaction.pressed = 'B' + index;
            this.players[button.pad.index].interaction.last = 'B' + index;
            this.players[button.pad.index].interaction.buffer = 'B' + index;
        }
    }

    /**
     * When a gamepad button is released, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
     * @param {number} index Button index
     * @param {number} value Button value
     * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
     */
    gamepadButtonUp(index, value, button){
        this.players[button.pad.index].interaction.device = 'gamepad';
        this.eventEmitter.emit('mergedInput', {device:'gamepad', value:value, player:button.pad.index, action:'B' + index, state: 'UP'});
        // DPad mapping
        if (index === 12) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'UP' + index, state: 'UP'});
        }
        if (index === 13) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'DOWN' + index, state: 'UP'});
        }
        if (index === 14) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'LEFT' + index, state: 'UP'});
        }
        if (index === 15) {
            this.eventEmitter.emit('mergedInput', {device:'gamepad', value:1, player:button.pad.index, action:'RIGHT' + index, state: 'UP'});
        }
    }

    /**
     * Iterate through gamepads and handle interactions
     */
    checkGamepadInput() {
        // Check for gamepad input
        for (var thisGamepad of this.gamepads) {

            // Directions
            if (thisGamepad.leftStick.y < -0.5) {
                this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y)
            }
            else if (thisGamepad.leftStick.y > 0.5) {
                this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y
            }
            else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
                // DPad
                this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
                this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
            }

            if (thisGamepad.leftStick.x < -0.5) {
                this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x)
            }
            else if (thisGamepad.leftStick.x > 0.5) {
                this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x
            }
            else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
                // DPad
                this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
                this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
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
            'input' : {}
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
                'ID':       pad.id,
                'Index':    pad.index,
                'Buttons':  buttons,
                'Axes':     axes
            });
        }
        
        debug.players = this.players;

		return debug;
    }
}