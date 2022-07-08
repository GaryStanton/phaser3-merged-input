export default class circleButton extends Phaser.GameObjects.Container {
    /**
     * Generic button graphic
     * 
     * @constructor
     * @param {object} config - The configuration for the object
     * @param {Phaser.Scene} config.scene - The scene on which to add the button
     * @param {number} config.x - The horizontal coordinate relative to the scene viewport
     * @param {number} config.y - The vertical coordinate relative to the scene viewport
     * @param {number} config.text - Text to sit inside the button
     */

    constructor(config) {
        // Assign some defaults for anything not passed
        let defaults = {
                x: 0
            ,   y: 0
            ,   text: ''
        };
        config = Object.assign({}, defaults, config);

        super(config.scene, config.x, config.y, []);
        this.config = config;

        this.create();
    }

    create() {
        // circle
        this.circle = this.scene.add.circle(0, 0, 20, 0x6666ff);
        this.add(this.circle);

        // Text
        if (this.config.text.toString.length > 0) {
            this.setText(this.config.text)
        }
    }

    /**
     * Set the text content of this button
     * @param {string} text 
     */
    setText(text) {
        if (typeof this.text !== 'undefined') {
            this.text.setText(text)
        }
        else {
            var style = {
                fontSize: '18px',
                fontFamily: 'Arial',
                color: '#ffffff',
            };
            //  The same again but specified in an object
            this.text = this.scene.add.text(0,0, text, style).setPadding({ x: 10, y: 10 }).setOrigin(0.5, 0.5)
            this.add(this.text)
        }

        return this;
    }
}