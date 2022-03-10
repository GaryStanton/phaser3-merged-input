declare module 'phaser3-merged-input' {
  import * as Phaser from "phaser";

  export type KeyCode = keyof typeof Phaser.Input.Keyboard.KeyCodes;
  export type Bearing = "" | "W" | "NW" | "N" | "NE" | "E" | "SE" | "S" | "SW";
  export interface Player {
    direction: {
      'UP': 0 | 1,
      'DOWN': 0 | 1,
      'LEFT': 0 | 1,
      'RIGHT': 0 | 1,
      'BEARING': Bearing,
      'BEARING_LAST': Bearing,
      'DEGREES': number,
      'DEGREES_LAST': number,
      'TIMESTAMP': number
    };

    direction_secondary: {
      'UP': 0 | 1,
      'DOWN': 0 | 1,
      'LEFT': 0 | 1,
      'RIGHT': 0 | 1,
      'BEARING': Bearing,
      'BEARING_LAST': Bearing,
      'DEGREES': number,
      'DEGREES_LAST': number,
      'TIMESTAMP': number
    };

    'buttons': {
      B1: 0 | 1;
      B2: 0 | 1;
      B3: 0 | 1;
      B4: 0 | 1;
      B5: 0 | 1;
      B6: 0 | 1;
      B7: 0 | 1;
      B8: 0 | 1;
      B9: 0 | 1;
      B10: 0 | 1;
      B11: 0 | 1;
      B12: 0 | 1;
      B13: 0 | 1;
      B14: 0 | 1;
      B15: 0 | 1;
      B16: 0 | 1;
    };

    'pointer': {
      'M1': 0 | 1,
      'M2': 0 | 1,
      'M3': 0 | 1,
      'M4': 0 | 1,
      'M5': 0 | 1,
      'BEARING': Bearing,
      'BEARING_DEGREES': number,
      'ANGLE': number,
      'TIMESTAMP': number
    };

    'position': {};
    'interaction': {
      buffer: string;
      device: string;
      pressed: string;
	    released: string;
	    lastPressed: string;
	    lastReleased: string;
    };
    'gamepad': {};
    'keys': {
      'UP': [],
      'DOWN': [],
      'LEFT': [],
      'RIGHT': [],
      B1: [];
      B2: [];
      B3: [];
      B4: [];
      B5: [];
      B6: [];
      B7: [];
      B8: [];
      B9: [];
      B10: [];
      B11: [];
      B12: [];
      B13: [];
      B14: [];
      B15: [];
      B16: [];
    }
  }

  export default class MergedInput {
    /**
     * The Merged Input plugin is designed to run in the background and handle input.
     * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
     *
     * @extends Phaser.Scene
     * @param {*} scene
     * @param {*} pluginManager
     */
    constructor(scene: any, pluginManager: any);
    scene: any;
    players: Player[];
    gamepads: any[];
    keys: {};
    bearings: {
      '-180': string;
      '-168.75': string;
      '-157.5': string;
      '-146.25': string;
      '-135': string;
      '-123.75': string;
      '-112.5': string;
      '-101.25': string;
      '-90': string;
      '-78.75': string;
      '-67.5': string;
      '-56.25': string;
      '-45': string;
      '-33.75': string;
      '-22.5': string;
      '-11.25': string;
      '0': string;
      '11.25': string;
      '22.5': string;
      '33.75': string;
      '45': string;
      '56.25': string;
      '67.5': string;
      '78.75': string;
      '90': string;
      '101.25': string;
      '112.5': string;
      '123.75': string;
      '135': string;
      '146.25': string;
      '157.5': string;
      '168.75': string;
      '180': string;
    };
    refreshGamepads(): void;
    boot(): void;
    eventEmitter: any;
    preupdate(): void;
    postupdate(): void;
    /**
     * Set up the gamepad and associate with a player object
     */
    setupGamepad(thisGamepad: any): void;
    /**
     * Add a new player object to the players array
     * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
     */
    addPlayer(index: number): Player;
    /**
     * Get player object
     * @param {number} index Player index
     */
    getPlayer(index: number): any;
    getPlayerIndexFromKey(key: any): any;
	  getPlayerButtonFromKey(key): any;
    /**
     * Returns a struct to hold input control information
     * Set up a struct for each player in the game
     * Direction and Buttons contain the input from the devices
     * The keys struct contains arrays of keyboard characters that will trigger the action
     */
    setupControls(): {
      direction: {
        UP: number;
        DOWN: number;
        LEFT: number;
        RIGHT: number;
        BEARING: string;
        BEARING_LAST: string;
        DEGREES: number;
        DEGREES_LAST: number;
        TIMESTAMP: number;
      };
      direction_secondary: {
        UP: number;
        DOWN: number;
        LEFT: number;
        RIGHT: number;
        BEARING: string;
        DEGREES: number;
        BEARING_LAST: string;
        DEGREES_LAST: number;
        TIMESTAMP: number;
      };
      buttons: {};
      pointer: {
        M1: number;
        M2: number;
        M3: number;
        M4: number;
        M5: number;
        BEARING: string;
        BEARING_DEGREES: number;
        ANGLE: number;
        TIMESTAMP: number;
      };
      position: {};
      'interaction': {
        buffer: string;
        device: string;
        pressed: string;
		    released: string;
		    lastPressed: string;
		    lastReleased: string;
      };
      gamepad: {};
      keys: {
        UP: any[];
        DOWN: any[];
        LEFT: any[];
        RIGHT: any[];
      };
    };
    /**
     * Define a key for a player/action combination
     * @param {number} player The player on which we're defining a key
     * @param {string} action The action to define
     * @param {string} value The key to use
     * @param {boolean} append When true, this key definition will be appended to the existing key(s) for this action
     */
    defineKey(player: number, action: string, value: KeyCode, append?: boolean): MergedInput;
    /**
     * Iterate through players and check for interaction with defined keys
     */
    checkKeyboardInput(): void;
    /**
     * When a keyboard button is pressed down, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the key, and passes a mapped action and value
     */
    keyboardKeyDown(event: KeyboardEvent): void;
    /**
     * When a keyboard button is released, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the key, and passes a mapped action and value
     */
    keyboardKeyUp(event: KeyboardEvent): void;
    /**
     * Iterate through players and check for interaction with defined pointer buttons
     */
    checkPointerInput(): void;
    /**
     * When a gamepad button is pressed down, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
     * @param {number} index Button index
     * @param {number} value Button value
     * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
     */
    gamepadButtonDown(pad: any, button: Phaser.Input.Gamepad.Button, value: number): void;
    /**
     * When a gamepad button is released, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
     * @param {number} index Button index
     * @param {number} value Button value
     * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
     */
    gamepadButtonUp(pad: any, button: Phaser.Input.Gamepad.Button, value: number): void;
    /**
     * Iterate through gamepads and handle interactions
     */
    checkGamepadInput(): void;
    /**
     * Function to run on pointer move.
     * @param {*} pointer - The pointer object
     */
    pointerMove(pointer: any, threshold: any): void;
    /**
     * Function to run on pointer down. Indicates that Mx has been pressed, which should be listened to by the player object
     * @param {*} pointer - The pointer object
     */
    pointerDown(pointer: any): void;
    /**
     * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
     * @param {*} pointer - The pointer object
     */
    pointerUp(pointer: any): void;
    /**
     * Get the bearing from a given angle
     * @param {float} angle - Angle to use
     * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
     */
    getBearingFromAngle(angle: number, numDirections: number, threshold: any): any;
    /**
     * Given a bearing, return a direction object containing boolean flags for the four directions
     * @param {*} bearing
     */
    mapBearingToDirections(bearing: any): {
      UP: number;
      DOWN: number;
      LEFT: number;
      RIGHT: number;
      BEARING: any;
    };
    /**
     * Given a directions object, return the applicable bearing (8 way only)
     * @param {*} directions
     */
    mapDirectionsToBearing(directions: any, threshold: any): Bearing;
    /**
     * Given a bearing, return the snapped angle in degrees
     * @param {*} bearing
     */
    mapBearingToDegrees(bearing: any): any;
    destroy(): void;
    /**
     * Return debug object
     */
    debug(): {
      input: {};
    };
  }
}
