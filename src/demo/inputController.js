import MergedInput from "../main";

export default class InputController extends Phaser.Scene {
    /**
    * The Input scene is designed to run in the background and handle input.
    * We're thus able to reference the MergedInput plugin instance on this scene from multiple scenes within our project.
    * We could also use events in the global events registry to listen to input events on other scenes.
    * However, by making the plugin scene based, we're free to have multiple instances set up if we wish.
    *
    *  @extends Phaser.Scene
    */
    constructor() {
        super({key: 'InputController'});
    }

    preload() {
        // Merged input plugin
        this.load.scenePlugin('mergedInput', MergedInput);

        /**
         * Here we'll launch a separate scene for debugging. 
         **/
        this.scene.launch('Debug')
        this.debugScene = this.scene.get('Debug');
    }

    /**
     *  @protected
     */
    create() {
       // Setup player objects
        this.player1 = this.mergedInput.addPlayer(0);
        this.player2 = this.mergedInput.addPlayer(1);
        
        /**
         * Define keys (player, action, key, append)
         * This scene would also be a good place to handle updates of key definitions, so that a player can redefine keys or gamepad mappings.
         */
		this.mergedInput
			.defineKey(0, 'UP', 'W')
			.defineKey(0, 'DOWN', 'S')
			.defineKey(0, 'LEFT', 'A')
            .defineKey(0, 'RIGHT', 'D')

            .defineKey(1, 'UP', 'UP')
            .defineKey(1, 'DOWN', 'DOWN')
            .defineKey(1, 'LEFT', 'LEFT')
            .defineKey(1, 'RIGHT', 'RIGHT')

            // We can define keys using friendly names - These map to button numbers behind the scenes, and attempt to do so for different types of gamepad
            .defineKey(0, 'RC_S', 'ONE')
            .defineKey(0, 'RC_E', 'TWO')
            .defineKey(0, 'RC_W', 'THREE')
            .defineKey(0, 'RC_N', 'FOUR')
            .defineKey(0, 'LB', 'FIVE')
            .defineKey(0, 'RB', 'SIX')
            .defineKey(0, 'LT', 'SEVEN')
            .defineKey(0, 'RT', 'EIGHT')
            .defineKey(0, 'START', 'NINE')
            .defineKey(0, 'SELECT', 'ZERO')

            .defineKey(0, 'B12', 'ESC') // Debug key

            // Or we can use the button numbers from our gamepad
            .defineKey(1, 'B0', 'NUMPAD_ONE')
            .defineKey(1, 'B1', 'NUMPAD_TWO')
            .defineKey(1, 'B2', 'NUMPAD_THREE')
            .defineKey(1, 'B3', 'NUMPAD_FOUR')
            .defineKey(1, 'B4', 'NUMPAD_FIVE')
            .defineKey(1, 'B5', 'NUMPAD_SIX')
            .defineKey(1, 'B6', 'NUMPAD_SEVEN')
            .defineKey(1, 'B7', 'NUMPAD_EIGHT')
            .defineKey(1, 'B8', 'NUMPAD_NINE')
            .defineKey(1, 'B9', 'NUMPAD_ZERO')
            ;
    }

    /**
     * We could handle input events in this scene's update method, or reference the instance of MergedInput from other scenes.
     **/ 
	update(){
	}
}
