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
        // We can check for button numbers, or mapped button names, and to illustrate this point, Player 1 uses button numbers and Player 2 uses button names
        this.player1.sprites = {
            'dpad': this.add.image(100, 350, 'gamepad', 'XboxOne_Dpad').setScale(2),
            'B0':   this.add.image(370, 420, 'gamepad', 'XboxOne_A'),
            'B1':   this.add.image(440, 350, 'gamepad', 'XboxOne_B'),
            'B2':   this.add.image(300, 350, 'gamepad', 'XboxOne_X'),
            'B3':   this.add.image(370, 280, 'gamepad', 'XboxOne_Y'),
            'B4':   this.add.image(70, 200, 'gamepad', 'XboxOne_LB'),
            'B5':   this.add.image(430, 200, 'gamepad', 'XboxOne_RB'),
            'B6':   this.add.image(70, 130, 'gamepad', 'XboxOne_LT'),
            'B7':   this.add.image(430, 130, 'gamepad', 'XboxOne_RT')
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

        // Set up some debug text
        this.player1Text = this.add.text(50, 500, '', {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#00ff00'
        });

        this.player2Text = this.add.text(50, 600, '', {
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
        // Loop through player object
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
        }

        // Player 1 checks for button numbers using the player's 'buttons' object
        for (let thisButton in this.player1.buttons) {
            if (typeof this.player1.sprites[thisButton] !== 'undefined') {
                if (this.player1.buttons[thisButton] > 0) {
                    this.tintButton(this.player1, thisButton);
                }
                else {
                    this.player1.sprites[thisButton].clearTint();
                }
            }
        }

        // Player 2 checks for button names using the players 'buttons_mapped' object
        for (let thisButton in this.player2.buttons_mapped) {
            if (typeof this.player2.sprites[thisButton] !== 'undefined') {
                if (this.player2.buttons_mapped[thisButton] > 0) {
                    this.tintButton(this.player2, thisButton);
                }
                else {
                    this.player2.sprites[thisButton].clearTint();
                }
            }
        }


        this.player1Text.setText([
            'Player 1', 'Gamepad: ' + (typeof this.player1.gamepad.index === 'undefined' ? 'Press a button to connect' : this.player1.gamepad.id),
            'Directions: ' + JSON.stringify(this.player1.direction),
            'Buttons: ' + JSON.stringify(this.player1.buttons),
            'Interaction: ' + JSON.stringify(this.player1.interaction)
        ]);
        this.player2Text.setText([
            'Player 2', 'Gamepad: ' + (typeof this.player2.gamepad.index === 'undefined' ? 'Press a button to connect' : this.player2.gamepad.id),
            'Directions: ' + JSON.stringify(this.player2.direction),
            'Buttons: ' + JSON.stringify(this.player2.buttons),
            'Interaction: ' + JSON.stringify(this.player2.interaction)
        ]);


        // this.debugView.value = this.inputController.mergedInput.debug().input;
    }

    tintButton(player, button){
        player.sprites[button].setTint('0xff0000');
    }

}
