import Demo from './demo.js';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
	input: {
		gamepad: true
	},
    scene: [
        Demo
    ]
};

const game = new Phaser.Game(config);