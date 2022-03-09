import MergedInput from "../main";

export default class Demo extends Phaser.Scene {

    preload() {
        this.load.scenePlugin('mergedInput', MergedInput);
		this.load.multiatlas('gamepad', 'assets/gamepad.json', 'assets');
    }

    create() {
        // Setup player objects
        this.player1 = this.mergedInput.addPlayer(0);
        this.player2 = this.mergedInput.addPlayer(1);

        // Define keys (player, action, key, append)
		this.mergedInput
			.defineKey(0, 'UP', 'W')
			.defineKey(0, 'DOWN', 'S')
			.defineKey(0, 'LEFT', 'A')
            .defineKey(0, 'RIGHT', 'D')

            .defineKey(1, 'UP', 'UP')
            .defineKey(1, 'DOWN', 'DOWN')
            .defineKey(1, 'LEFT', 'LEFT')
            .defineKey(1, 'RIGHT', 'RIGHT')

            .defineKey(0, 'B0', 'ONE')
            .defineKey(0, 'B1', 'TWO')
            .defineKey(0, 'B2', 'THREE')
            .defineKey(0, 'B3', 'FOUR')
            .defineKey(0, 'B4', 'FIVE')
            .defineKey(0, 'B5', 'SIX')
            .defineKey(0, 'B6', 'SEVEN')
            .defineKey(0, 'B7', 'EIGHT')
            .defineKey(0, 'B8', 'NINE')
            .defineKey(0, 'B9', 'ZERO')

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

        // Set up some gamepad sprites for testing
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
            'B0':   this.add.image(1070, 420, 'gamepad', 'XboxOne_A'),
            'B1':   this.add.image(1140, 350, 'gamepad', 'XboxOne_B'),
            'B2':   this.add.image(1000, 350, 'gamepad', 'XboxOne_X'),
            'B3':   this.add.image(1070, 280, 'gamepad', 'XboxOne_Y'),
            'B4':   this.add.image(770, 200, 'gamepad', 'XboxOne_LB'),
            'B5':   this.add.image(1130, 200, 'gamepad', 'XboxOne_RB'),
            'B6':   this.add.image(770, 130, 'gamepad', 'XboxOne_LT'),
            'B7':   this.add.image(1130, 130, 'gamepad', 'XboxOne_RT')
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
        for (let thisPlayer of this.mergedInput.players) {

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

            for (let thisButton in thisPlayer.buttons) {
                if (typeof thisPlayer.sprites[thisButton] !== 'undefined') {
                    if (thisPlayer.buttons[thisButton] > 0) {
                        this.tintButton(thisPlayer, thisButton);
                    }
                    else {
                        thisPlayer.sprites[thisButton].clearTint();
                    }
                }
            }
        }

        if (this.mergedInput.getPlayer(0).interaction.pressed) {
            console.log(JSON.stringify(this.mergedInput.getPlayer(0).interaction))
        }

        if (this.mergedInput.getPlayer(0).interaction.released) {
            console.log(JSON.stringify(this.mergedInput.getPlayer(0).interaction))
        }

        this.player1Text.setText([
            'Player 1', 'Gamepad: ' + (typeof this.mergedInput.getPlayer(0).gamepad.index === 'undefined' ? 'Press a button to connect' : this.mergedInput.getPlayer(0).gamepad.id),
            'Directions: ' + JSON.stringify(this.mergedInput.getPlayer(0).direction),
            'Buttons: ' + JSON.stringify(this.mergedInput.getPlayer(0).buttons),
            'Interaction: ' + JSON.stringify(this.mergedInput.getPlayer(0).interaction)
        ]);
        this.player2Text.setText([
            'Player 2', 'Gamepad: ' + (typeof this.mergedInput.getPlayer(1).gamepad.index === 'undefined' ? 'Press a button to connect' : this.mergedInput.getPlayer(1).gamepad.id),
            'Directions: ' + JSON.stringify(this.mergedInput.getPlayer(1).direction),
            'Buttons: ' + JSON.stringify(this.mergedInput.getPlayer(1).buttons),
            'Interaction: ' + JSON.stringify(this.mergedInput.getPlayer(1).interaction)
        ]);

        // this.player2Text.setText(JSON.stringify(this.mergedInput.debug().players, null, "\t"));

    }

    tintButton(player, button){
        player.sprites[button].setTint('0xff0000');
    }

}
