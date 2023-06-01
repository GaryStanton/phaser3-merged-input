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

        this.player2Text = this.add.text(50, 700, '', {
            fontFamily: 'Arial',
            fontSize: 14,
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
            'Interaction: ' + JSON.stringify(this.player1.interaction),
            'Internal: ' + JSON.stringify(this.player1.internal)
        ]);
        this.player2Text.setText([
            'Player 2', 'Gamepad: ' + (typeof this.player2.gamepad.index === 'undefined' ? 'Press a button to connect' : this.player2.gamepad.id),
            'Directions: ' + JSON.stringify(this.player2.direction),
            'Buttons: ' + JSON.stringify(this.player2.buttons),
            'Interaction: ' + JSON.stringify(this.player2.interaction),
            'Internal: ' + JSON.stringify(this.player2.internal)
        ]);
        

        // Here we check if certain buttons were pressed in this update step.
        if (this.player1.interaction_mapped.isPressed(['START','RC_S','RC_N'])) {
            console.log(this.player1.interaction_mapped.isPressed(['START', 'RC_S', 'RC_N'])[0])
        }

        if (this.player1.interaction.isPressed(['M1', 'M2'])) {
            console.log(this.player1.interaction.isPressed(['M1', 'M2'])[0])
        }

        // Set a position for the player
        this.player1.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);


        // this.debugView.value = this.inputController.mergedInput.debug().input;
    }

    tintButton(player, button){
        player.sprites[button].setTint(0xff0000);
    }

}
