import * as dat from 'dat.gui';
export default class Debug extends Phaser.Scene {
	/**
	 * Debug scene
	 *
	 * @extends Phaser.Scene
	*/
	constructor() {
		super({ key: 'Debug' });
	}

	/**
	 * Init
	 * @param {*} data
	 */
	init(data) {

	}

    preload() {

    }

	/**
	*  @protected
	*  @param {object} data Initialization parameters.
	*/
	create() {
		// Debug gui object
		this.gui = new dat.GUI();

		// Reference to systems events emitter
		this.eventEmitter = this.scene.events;

		// Input
		this.inputController = this.scene.get('InputController');
		this.inputType = '';

		// Add controls to dat.gui
		this.buildGUI(this.inputController.mergedInput.debug().players[0], 'Player 1');
		this.buildGUI(this.inputController.mergedInput.debug().players[1], 'Player 2');

		// Merged input events occur on the scene that the plugin is associated with
		this.inputController.events.on('mergedInput', function(MIEvent){
			if (MIEvent.action == 'Connected') {
				this.buildGUI(this.inputController.mergedInput.debug().input.gamepads[MIEvent.player], `Gamepad ${MIEvent.player}`);
			}
		}, this)
	}


	update() {
    }

	buildGUI(thisObject, folderName) {
		this.guiFolder = this.gui.addFolder(folderName);
		this.gui.remember(thisObject);
		this.addToGui(thisObject, this.guiFolder);
	}

	addToGui(obj, folder, parent) {
		if (parent !== undefined) {
			folder = parent.addFolder(folder);
		}
		for (const key in obj) { //for each key in your object
			if (obj.hasOwnProperty(key)) {
				let val = obj[key];
				if (typeof val == 'number') { //if the value of the object key is a number, establish limits and step
					const numDigits = this.getNumDigits(val);
					let step, limit;
					if (val > -1 && val < 1) { //if it's a small decimal number, give it a GUI range of -1,1 with a step of 0.1...
						step = 0.1;
						limit = 1;
					} else { //otherwise, calculate the limits and step based on # of digits in the number
						const numDigits = this.getNumDigits(Math.round(val)); //to establish a step and limit, we'll use a base number that is an integer
						limit = Math.pow(10, numDigits); //make the limit one digit higher than the number of digits of the itself, i.e. '150' would have a range of -1000 to 1000...
						step = Math.pow(10, numDigits - 2); //...with a step one less than the number of digits, i.e. '10'
					}
					folder.add(obj, key, -limit, limit).step(step).listen(); //add the value to your GUI folder
				} else if (typeof val === 'object') {
					this.addToGui(val, key, folder); //if the key is an object itself, call this function again to loop through that subobject, assigning it to the same folder
				} else {
					folder.add(obj, key).listen(); //...this would include things like boolean values as checkboxes, and strings as text fields
				}
			}
		}
	}

	getNumDigits(val) {
		return (`${val}`.match(/\d/g) || []).length //a regex to compute the number of digits in a number. Note that decimals will get counted as digits, which is why to establish our limit and step we rounded
	}

}
