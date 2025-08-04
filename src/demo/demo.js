import circlebutton from './button';
export default class Demo extends Phaser.Scene {

    preload() {
        // Input controller scene
        this.scene.launch('InputController')
        this.load.multiatlas('gamepad', 'assets/gamepad.json', 'assets');
    }

    create() {

        // Get the input controller scene, which contains our player objects
        this.inputController = this.scene.get('InputController');


        // Get our player objects
        this.player1 = this.inputController.player1;
        this.player2 = this.inputController.player2;

        // Set up an array of player objects
        this.players = [this.player1, this.player2]


        // Set up some gamepad sprites for testing
        // We can check for button numbers, or mapped button names. For the sprites, we'll use mapped button names.
        this.player1.sprites = {
            'dpad': this.add.image(100, 350, 'gamepad', 'XboxOne_Dpad').setScale(2),
            'RC_S': this.add.image(370, 420, 'gamepad', 'XboxOne_A'),
            'RC_E': this.add.image(440, 350, 'gamepad', 'XboxOne_B'),
            'RC_W': this.add.image(300, 350, 'gamepad', 'XboxOne_X'),
            'RC_N': this.add.image(370, 280, 'gamepad', 'XboxOne_Y'),
            'LB':   this.add.image(70, 200, 'gamepad', 'XboxOne_LB'),
            'RB':   this.add.image(430, 200, 'gamepad', 'XboxOne_RB'),
            'LT':   this.add.image(70, 130, 'gamepad', 'XboxOne_LT'),
            'RT':   this.add.image(430, 130, 'gamepad', 'XboxOne_RT')
        }

        this.player2.sprites = {
            'dpad': this.add.image(800, 350, 'gamepad', 'XboxOne_Dpad').setScale(2),
            'RC_S': this.add.image(1070, 420, 'gamepad', 'XboxOne_A'),
            'RC_E': this.add.image(1140, 350, 'gamepad', 'XboxOne_B'),
            'RC_W': this.add.image(1000, 350, 'gamepad', 'XboxOne_X'),
            'RC_N': this.add.image(1070, 280, 'gamepad', 'XboxOne_Y'),
            'LB':   this.add.image(770, 200, 'gamepad', 'XboxOne_LB'),
            'RB':   this.add.image(1130, 200, 'gamepad', 'XboxOne_RB'),
            'LT':   this.add.image(770, 130, 'gamepad', 'XboxOne_LT'),
            'RT':   this.add.image(1130, 130, 'gamepad', 'XboxOne_RT')
        }

        // Now we'll add some graphics to represent the actual button numbers.
        // How these map to friendly button names may differ per device, so the plugin attempts to map them according to the pad ID.
        this.player1.buttonGraphics = {}
        for (let i=0; i<=16; i++) {
            this.player1.buttonGraphics['B' + i] = new circlebutton({scene: this, x:100 + (i > 7 ? (i - 8.5) * 50 : (i * 50)), y:i > 7 ? 550 : 500, text:i});
            this.add.existing(this.player1.buttonGraphics['B' + i])
        }

        this.player2.buttonGraphics = {}
        for (let i=0; i<=16; i++) {
            this.player2.buttonGraphics['B' + i] = new circlebutton({scene: this, x:790 + (i > 7 ? (i - 8.5) * 50 : (i * 50)), y:i > 7 ? 550 : 500, text:i});
            this.add.existing(this.player2.buttonGraphics['B' + i])
        }


        // Set up some debug text
        this.player1Text = this.add.text(50, 600, '', {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });

        this.player1Combos = this.add.text(50, 730, '', {
            fontFamily: 'Arial',
            fontSize: 16,
            color: '#00ff00'
        });

        this.player2Text = this.add.text(50, 800, '', {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });

        this.player2Combos = this.add.text(50, 930, '', {
            fontFamily: 'Arial',
            fontSize: 16,
            color: '#00ff00'
        });


        // Instructions
        this.instructions1 = this.add.text(50, 20, ['Directions: WASD', 'Buttons: 1-0'], {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });
        this.instructions1 = this.add.text(740, 20, ['Directions: Cursors', 'Buttons: Numpad 1-0'], {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });


		// Set positions for the players
        this.player1.setPosition(250, 150);
		console.log(this.player1);

		// Draw a graphic to represent the players
		this.player1.sprites.player = this.add.graphics({x: this.player1.position.x, y: this.player1.position.y});
		this.player1.sprites.player.fillStyle(0x00ff00, 1);
		this.player1.sprites.player.fillCircle(0, 0, 20);
		// Text for bearing
		this.player1.sprites.bearingText = this.add.text(this.player1.position.x, this.player1.position.y - 30, '', {
			fontFamily: 'Arial',
			fontSize: 14,
			color: '#00ff00'
		});
		this.player1.sprites.bearingText.setOrigin(0.5, 0.5);
		// Set the bearing text
		this.player1.sprites.bearingText.setText('N');

		// Add an arrow to represent the direction
		this.player1.sprites.arrow = this.add.graphics({x: this.player1.position.x, y: this.player1.position.y});
		this.player1.sprites.arrow.fillStyle(0xff0000, 1);
		this.player1.sprites.arrow.fillTriangle(-10, -10, 10, -10, 0, 20);

		// Add a line graphic inside the arrow to show the snapped direction
		this.player1.sprites.line = this.add.graphics({x: this.player1.position.x, y: this.player1.position.y});
		this.player1.sprites.line.lineStyle(2, 0xffffff, 1);
		this.player1.sprites.line.lineBetween(0, 0, 0, 20);


		this.player2.setPosition(950, 150);

		// Draw a graphic to represent the players
		this.player2.sprites.player = this.add.graphics({x: this.player2.position.x, y: this.player2.position.y});
		this.player2.sprites.player.fillStyle(0x0000ff, 1);
		this.player2.sprites.player.fillCircle(0, 0, 20);

		// Add an arrow to represent the direction
		this.player2.sprites.arrow = this.add.graphics({x: this.player2.position.x, y: this.player2.position.y});
		this.player2.sprites.arrow.fillStyle(0xff0000, 1);
		this.player2.sprites.arrow.fillTriangle(-10, -10, 10, -10, 0, 20);

		// Add a line graphic inside the arrow to show the snapped direction
		this.player2.sprites.line = this.add.graphics({x: this.player2.position.x, y: this.player2.position.y});
		this.player2.sprites.line.lineStyle(2, 0xffffff, 1);
		this.player2.sprites.line.lineBetween(0, 0, 0, 20);

		// Text for bearing
		this.player2.sprites.bearingText = this.add.text(this.player2.position.x, this.player2.position.y - 30, '', {
			fontFamily: 'Arial',
			fontSize: 14,
			color: '#00ff00'
		});
		this.player2.sprites.bearingText.setOrigin(0.5, 0.5);
		// Set the bearing text
		this.player2.sprites.bearingText.setText('N');



        /**
         * Some examples of creating button combos
         */
        this.input.keyboard.createCombo([38, 38, 40, 40, 37, 39, 37, 39, 66, 65], { resetOnMatch: true }).name = 'Konami code - Keyboard';
        this.inputController.mergedInput.createButtonCombo(this.player1, ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'RC_E', 'RC_S'], { resetOnMatch: true }).name = 'Konami code - Gamepad';
        this.inputController.mergedInput.createButtonCombo(this.player1, ['B12', 'B13'], { resetOnMatch: true, maxKeyDelay: 1000, }).name = 'Button ID test';

        this.input.keyboard.on('keycombomatch', event => {
            this.player1Combos.setText(`KEY COMBO: ${event.name}`)
            console.log(`${event.name} entered!`);
        });

        this.inputController.mergedInput.events.on('buttoncombomatch', event => {
            this[`player${event.player.index + 1}Combos`].setText(`BUTTON COMBO: ${event.combo.name}`)
            console.log(`${event.combo.name} entered! - Player: ${event.player.index}`);
        });

    }



	/**
	 * Check player movement
	 */
	checkMovement() {

		return this;
	}


    update() {
        // Loop through player objects
        for (let thisPlayer of this.players) {
            // Reset dpad frame
            thisPlayer.sprites.dpad.setFrame('XboxOne_Dpad');

            // Show dpad frame for direction input. (Diagonal input is supported, but can't easily be shown with these sprites)
            if (thisPlayer.direction.UP > 0) {
                thisPlayer.sprites.dpad.setFrame('XboxOne_Dpad_Up');
            }
            if (thisPlayer.direction.RIGHT > 0) {
                thisPlayer.sprites.dpad.setFrame('XboxOne_Dpad_Right');
            }
            if (thisPlayer.direction.DOWN > 0) {
                thisPlayer.sprites.dpad.setFrame('XboxOne_Dpad_Down');
            }
            if (thisPlayer.direction.LEFT > 0) {
                thisPlayer.sprites.dpad.setFrame('XboxOne_Dpad_Left');
            }


            // Check the button NUMBER values to correspond with the button graphics
            for (let thisButton in thisPlayer.buttons) {
                if (typeof thisPlayer.buttonGraphics[thisButton] !== 'undefined') {
                    if (thisPlayer.buttons[thisButton] > 0) {
                        thisPlayer.buttonGraphics[thisButton].circle.setFillStyle(0xcc0000, 1)
                    }
                    else {
                        thisPlayer.buttonGraphics[thisButton].circle.setFillStyle(0x6666ff, 1)
                    }
                }
            }

            // Check the MAPPED button values to correspond with the sprites we created
            for (let thisButton in thisPlayer.buttons_mapped) {
                if (typeof thisPlayer.sprites[thisButton] !== 'undefined') {
                    if (thisPlayer.buttons_mapped[thisButton] > 0) {
                        this.tintButton(thisPlayer, thisButton);
                    }
                    else {
                        thisPlayer.sprites[thisButton].clearTint();
                    }
                }
            }
        }

        this.player1Text.setText([
            'Player 1', 'Gamepad: ' + (typeof this.player1.gamepad.index === 'undefined' ? 'Press a button to connect' : this.player1.gamepad.id),
            'Directions: ' + JSON.stringify(this.player1.direction),
            'Buttons: ' + JSON.stringify(this.player1.buttons),
            'Mouse: ' + JSON.stringify(this.player1.pointer),
            'Timers: ' + JSON.stringify(this.player1.timers),
            'Interaction: ' + JSON.stringify(this.player1.interaction),
            `isDown: ${this.player1.isDown(Object.keys(this.player1.buttons_mapped))}, ${this.player1.isDown(Object.keys(this.player1.buttons))}`,
            'Internal: ' + JSON.stringify(this.player1.internal)
        ]);

		// Check to see if the mouse is moving, in which case we'll use that for direction changes
		if (this.player1.pointer.TIMESTAMP > this.player1.direction.TIMESTAMP) {
			// Update the visual pointer
			this.player1.sprites.bearingText.setText(this.player1.pointer.BEARING || 'E');
			this.player1.sprites.arrow.rotation = Phaser.Math.DegToRad(this.player1.pointer.DEGREES - 90);
			this.player1.sprites.line.rotation = Phaser.Math.DegToRad(this.player1.pointer.BEARING_DEGREES - 90);
		}
		else {
			// Update the visual pointer
			this.player1.sprites.bearingText.setText(this.player1.direction.BEARING_LAST || 'E');
			this.player1.sprites.arrow.rotation = Phaser.Math.DegToRad(this.player1.direction.DEGREES_LAST - 90);
			this.player1.sprites.line.rotation = Phaser.Math.DegToRad(this.player1.direction.BEARING_DEGREES_LAST - 90);
		}

        this.player2Text.setText([
            'Player 2', 'Gamepad: ' + (typeof this.player2.gamepad.index === 'undefined' ? 'Press a button to connect' : this.player2.gamepad.id),
            'Directions: ' + JSON.stringify(this.player2.direction),
            'Buttons: ' + JSON.stringify(this.player2.buttons),
            'Mouse: ' + JSON.stringify(this.player2.pointer),
            'Timers: ' + JSON.stringify(this.player2.timers),
            'Interaction: ' + JSON.stringify(this.player2.interaction),
            `isDown: ${this.player2.isDown(Object.keys(this.player2.buttons_mapped))}, ${this.player2.isDown(Object.keys(this.player2.buttons))}`,
            'Internal: ' + JSON.stringify(this.player2.internal)
        ]);

		// Update the bearing text
		this.player2.sprites.bearingText.setText(this.player2.direction.BEARING_LAST || 'E');
		this.player2.sprites.arrow.rotation = Phaser.Math.DegToRad(this.player2.direction.DEGREES_LAST - 90);
		this.player2.sprites.line.rotation = Phaser.Math.DegToRad(this.player2.direction.BEARING_DEGREES_LAST - 90);



        /**
         * Some logging of player helper functions
         */
        /*
        // Here we check if certain buttons were pressed in this update step.
        if (this.player1.interaction_mapped.isPressed(['LC_N','START','RC_S','RC_N'])) {
            console.log(`mapped - isPressed: ${this.player1.interaction_mapped.isPressed(['LC_N', 'START', 'RC_S', 'RC_N'])}`)
        }

        // Here we check if certain buttons are held down in this update step.
        if (this.player1.interaction_mapped.isDown(['LC_N', 'RC_S', 'RC_N'])) {
            console.log(`mapped - isDown: ${this.player1.interaction_mapped.isDown(['LC_N', 'RC_S', 'RC_N'])}`)
        }

        // Here we check if certain buttons are held down for a given duration in this update step.
        if (this.player1.interaction_mapped.checkDown(['LC_N'], 1000)) {
            console.log(`mapped checkDown: ${this.player1.interaction_mapped.checkDown(['LC_N'], 1000)}`)
        }

        // Here we check if certain buttons are held down in this update step.
        if (this.player1.interaction.isPressed(['DOWN', 'B1'])) {
            console.log(`raw - isPressed: ${this.player1.interaction.isPressed(['DOWN', 'B1'])}`)
        }

        // Here we check if certain buttons are held down in this update step.
        if (this.player1.interaction.isDown(['DOWN', 'B1'])) {
            console.log(`raw - isDown: ${this.player1.interaction.isDown(['DOWN', 'B1'])}`)
        }

        // Here we check if certain buttons are held down for a given duration in this update step.
        if (this.player1.interaction.checkDown(['DOWN'], 1000, true)) {
            console.log(`raw checkDown: ${this.player1.interaction.checkDown(['DOWN'], 1000, true)}`)
        }


        // Generic button (mapped / unmapped) isPressed function
        if (this.player1.isPressed(['RIGHT', 'LC_W', 'B2'])) {
            console.log(`generic - isPressed: ${this.player1.isPressed(['RIGHT', 'LC_W', 'B2'])}`)
        }

        // Generic button (mapped / unmapped) isDown function
        if (this.player1.isDown(['RIGHT', 'LC_W', 'B2'])) {
            console.log(`generic - isDown: ${this.player1.isDown(['RIGHT', 'LC_W', 'B2'])}`)
        }

        // Generic button (mapped / unmapped) isReleased function
        if (this.player1.isReleased(['RIGHT', 'LC_W', 'B2'])) {
            console.log(`generic - isReleased: ${this.player1.isReleased(['RIGHT', 'LC_W', 'B2'])}`)
        }

        */

        // Here we check if certain buttons are held down for a given duration in this update step.
        if (this.player1.checkDown(['M1','LEFT'], 1000, false)) {
            console.log(`generic checkDown: LEFT`)
        }

        // Mouse pointer check
        /*
        if (this.player1.isPressed(['M1', 'M2'])) {
            console.log(`isPressed: ${this.player1.interaction.isPressed(['M1', 'M2'])}`)
        }
        */





        // this.debugView.value = this.inputController.mergedInput.debug().input;
    }

    tintButton(player, button){
        player.sprites[button].setTint(0xff0000);
    }

}
