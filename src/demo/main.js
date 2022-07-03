import Demo from './demo.js';
import InputController from './inputController.js';
import Debug from './debug.js';

const config = {
    type: Phaser.AUTO,
    width: '100%',
    height: '100%',
    parent: 'game',
	input: {
		gamepad: true
	},
    scene: [
        Demo, InputController, Debug, 
    ],
    dom: {
        createContainer: true
    }
};


const game = new Phaser.Game(config);