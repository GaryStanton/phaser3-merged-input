import AdvanceKeyCombo from 'phaser/src/input/keyboard/combo/AdvanceKeyCombo.js';
import ResetKeyCombo from 'phaser/src/input/keyboard/combo/ResetKeyCombo.js';

export default class ButtonCombo extends Phaser.Input.Keyboard.KeyCombo {
    constructor(mergedInput, player, buttons, config) {
        super(mergedInput.systems.input.keyboard, buttons, config);

        this.player = player;
        this.mergedInput = mergedInput;
        this.keyCodes = buttons; // KeyCombo expects this to be an array of keycodes, we'll be checking against button names

        mergedInput.events.on('gamepad_buttondown', this.onButtonDown, this);
        this.current = this.keyCodes[0];
    }

    onButtonDown(event) {
        if (this.matched || !this.enabled) {
            return;
        }

        var matched = this.ProcessButtonCombo(event, this);
        if (matched) {
            this.mergedInput.eventEmitter.emit('mergedInput', { combo: this, player: this.player, action: 'Button combo matched' });
            this.mergedInput.events.emit('buttoncombomatch', { player: this.player, combo: this });

            if (this.resetOnMatch) {
                ResetKeyCombo(this);
            }
            else if (this.deleteOnMatch) {
                this.destroy();
            }
        }
    }

    ProcessButtonCombo (event, combo) {
        // Set a timestamp from the gamepad
        event.timeStamp = this.mergedInput.systems.time.now

        // Don't check buttons on a different pad
        if (combo.player.index !== event.player) { 
            return false;
        }

        // Check matched
        if (combo.matched) {
            return true;
        }
        
        // Compare the current action with the button pressed
        let buttonMatch = false;
        if (event.button === combo.current) {
            buttonMatch = true;
        }

        let mappedButton = this.mergedInput.getMappedButton(combo.player, event.button);
        if (mappedButton === combo.current) {
            buttonMatch = true;
        }
         
        let unMappedButton = this.mergedInput.getUnmappedButton(combo.player, mappedButton);
        if (unMappedButton === combo.current) {
            buttonMatch = true;
        }

        var comboMatched = false;
        var keyMatched = false;

        if (buttonMatch) {
            //  Button was correct

            if (combo.index > 0 && combo.maxKeyDelay > 0) {
                //  We have to check to see if the delay between
                //  the new key and the old one was too long (if enabled)

                var timeLimit = combo.timeLastMatched + combo.maxKeyDelay;

                //  Check if they pressed it in time or not
                if (event.timeStamp <= timeLimit) {
                    keyMatched = true;
                    comboMatched = AdvanceKeyCombo(event, combo);
                }
            }
            else {
                keyMatched = true;

                //  We don't check the time for the first key pressed, so just advance it
                comboMatched = AdvanceKeyCombo(event, combo);
            }
        }

        if (!keyMatched && combo.resetOnWrongKey) {
            //  Wrong key was pressed
            combo.index = 0;
            combo.current = combo.keyCodes[0];
        }

        if (comboMatched) {
            combo.timeLastMatched = event.timeStamp;
            combo.matched = true;
            combo.timeMatched = event.timeStamp;
        }

        return comboMatched;
    };


    destroy() {
        this.mergedInput.events.off('gamepad_buttondown', this.onButtonDown);
        super.destroy();
    }
}