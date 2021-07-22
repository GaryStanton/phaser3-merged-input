(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MergedInput", [], factory);
	else if(typeof exports === 'object')
		exports["MergedInput"] = factory();
	else
		root["MergedInput"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MergedInput = function (_Phaser$Plugins$Scene) {
	_inherits(MergedInput, _Phaser$Plugins$Scene);

	/**
  * The Merged Input plugin is designed to run in the background and handle input.
  * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
  *
  * @extends Phaser.Scene
  * @param {*} scene
  * @param {*} pluginManager
  */
	function MergedInput(scene, pluginManager) {
		_classCallCheck(this, MergedInput);

		var _this = _possibleConstructorReturn(this, (MergedInput.__proto__ || Object.getPrototypeOf(MergedInput)).call(this, scene, pluginManager));

		_this.scene = scene;

		// Players
		_this.players = [];
		// Gamepads
		_this.gamepads = [];
		// Keys object to store Phaser key objects. We'll check these during update
		_this.keys = {};

		_this.bearings = {
			'-180': 'W',
			'-168.75': 'WBN',
			'-157.5': 'WNW',
			'-146.25': 'NWBW',
			'-135': 'NW',
			'-123.75': 'NWBN',
			'-112.5': 'NNW',
			'-101.25': 'NBW',
			'-90': 'N',
			'-78.75': 'NBE',
			'-67.5': 'NNE',
			'-56.25': 'NEBN',
			'-45': 'NE',
			'-33.75': 'NEBE',
			'-22.5': 'EBE',
			'-11.25': 'EBN',
			'0': 'E',
			'11.25': 'EBS',
			'22.5': 'ESE',
			'33.75': 'SEBE',
			'45': 'SE',
			'56.25': 'SEBS',
			'67.5': 'SSE',
			'78.75': 'SBE',
			'90': 'S',
			'101.25': 'SBW',
			'112.5': 'SSW',
			'123.75': 'SWBS',
			'135': 'SW',
			'146.25': 'SWBW',
			'157.5': 'WSW',
			'168.75': 'WBS',
			'180': 'W'
		};
		return _this;
	}

	_createClass(MergedInput, [{
		key: 'refreshGamepads',
		value: function refreshGamepads() {
			// Sometimes, gamepads are undefined. For some reason.
			this.gamepads = this.systems.input.gamepad.gamepads.filter(function (el) {
				return el != null;
			});

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.gamepads.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2),
					    index = _step$value[0],
					    thisGamepad = _step$value[1];

					thisGamepad.index = index; // Overwrite the gamepad index, in case we had undefined gamepads earlier
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'boot',
		value: function boot() {
			this.eventEmitter = this.systems.events;
			this.eventEmitter.on('update', this.update, this);

			// Gamepad
			if (typeof this.systems.input.gamepad !== 'undefined') {
				this.systems.input.gamepad.once('connected', function (thisGamepad) {
					this.refreshGamepads();
					this.setupGamepad(thisGamepad);
				}, this);

				// Check to see if the gamepad has already been setup by the browser
				this.systems.input.gamepad.refreshPads();
				if (this.systems.input.gamepad.total) {
					this.refreshGamepads();
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = this.gamepads[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var thisGamepad = _step2.value;

							this.systems.input.gamepad.emit('connected', thisGamepad);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}

				this.systems.input.gamepad.on('down', this.gamepadButtonDown, this);
				this.systems.input.gamepad.on('up', this.gamepadButtonUp, this);
			}

			// Keyboard
			this.systems.input.keyboard.on('keydown', function (event) {
				var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
					return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
				});
				var playerIndex = this.getPlayerIndexFromKey(keyCode);
				if (playerIndex > -1) {
					this.getPlayer(playerIndex).interaction.device = 'keyboard';
				}
			}, this);
			this.systems.input.keyboard.on('keyup', function () {
				var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
					return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
				});
				var playerIndex = this.getPlayerIndexFromKey(keyCode);
				if (playerIndex > -1) {
					this.getPlayer(playerIndex).interaction.device = 'keyboard';
				}
			}, this);

			// Pointer
			this.systems.input.mouse.disableContextMenu();

			this.systems.input.on('pointermove', function (pointer) {
				this.pointerMove(pointer);
			}, this);

			this.systems.input.on('pointerdown', function (pointer) {
				this.pointerDown(pointer);
			}, this);

			this.systems.input.on('pointerup', function (pointer) {
				this.pointerUp(pointer);
			}, this);
		}
	}, {
		key: 'update',
		value: function update() {
			// Loop through players and manage buffered input
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.players[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var thisPlayer = _step3.value;

					if (thisPlayer.interaction.pressed != '') {
						thisPlayer.interaction.buffer = '';
					}
					if (thisPlayer.interaction.buffer == '') {
						thisPlayer.interaction.pressed = '';
					}

					// If the pointer hasn't moved, and the scene has changed, this can end up as undefined
					thisPlayer.pointer.BEARING = typeof thisPlayer.pointer.BEARING != 'undefined' ? thisPlayer.pointer.BEARING : '';
					thisPlayer.pointer.BEARING_DEGREES = typeof thisPlayer.pointer.BEARING_DEGREES != 'undefined' ? thisPlayer.pointer.BEARING_DEGREES : 0;
					thisPlayer.pointer.ANGLE = typeof thisPlayer.pointer.ANGLE != 'undefined' ? thisPlayer.pointer.ANGLE : '';

					thisPlayer.direction.BEARING = this.mapDirectionsToBearing(thisPlayer.direction);
					thisPlayer.direction.BEARING_LAST = thisPlayer.direction.BEARING != '' ? thisPlayer.direction.BEARING : thisPlayer.direction.BEARING_LAST;
					thisPlayer.direction.DEGREES = thisPlayer.direction.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING)) : 0;
					thisPlayer.direction.DEGREES_LAST = thisPlayer.direction.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING_LAST)) : 0;
					thisPlayer.direction_secondary.BEARING = this.mapDirectionsToBearing(thisPlayer.direction_secondary);
					thisPlayer.direction_secondary.BEARING_LAST = thisPlayer.direction_secondary.BEARING != '' ? thisPlayer.direction_secondary.BEARING : thisPlayer.direction_secondary.BEARING_LAST;
					thisPlayer.direction_secondary.DEGREES = thisPlayer.direction_secondary.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING)) : 0;
					thisPlayer.direction_secondary.DEGREES_LAST = thisPlayer.direction_secondary.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING_LAST)) : 0;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			this.checkKeyboardInput();
			this.checkGamepadInput();
			this.checkPointerInput();
		}

		/**
   * Set up the gamepad and associate with a player object
   */

	}, {
		key: 'setupGamepad',
		value: function setupGamepad(thisGamepad) {
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', id: thisGamepad.id, player: thisGamepad.index, action: 'Connected' });

			if (typeof this.players[thisGamepad.index] === 'undefined') {
				this.addPlayer();
			}
			this.players[thisGamepad.index].gamepad = thisGamepad;
		}

		/**
   * Add a new player object to the players array
   * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
   */

	}, {
		key: 'addPlayer',
		value: function addPlayer(index) {
			if (_typeof(Number.isInteger(index)) && typeof this.players[index] !== 'undefined') {
				return this.players[index];
			} else {
				this.players.push(this.setupControls());
				this.players[this.players.length - 1].index = this.players.length - 1;
				return this.players[this.players.length - 1];
			}
		}

		/**
   * Get player object
   * @param {number} index Player index
   */

	}, {
		key: 'getPlayer',
		value: function getPlayer(index) {
			return typeof this.players[index] !== 'undefined' ? this.players[index] : '';
		}
	}, {
		key: 'getPlayerIndexFromKey',
		value: function getPlayerIndexFromKey(key) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.players[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var thisPlayer = _step4.value;

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var _iteratorNormalCompletion5 = true;
						var _didIteratorError5 = false;
						var _iteratorError5 = undefined;

						try {
							for (var _iterator5 = thisPlayer.keys[thisKey][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
								var thisValue = _step5.value;

								if (thisValue == key) {
									return thisPlayer.index;
								}
							}
						} catch (err) {
							_didIteratorError5 = true;
							_iteratorError5 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion5 && _iterator5.return) {
									_iterator5.return();
								}
							} finally {
								if (_didIteratorError5) {
									throw _iteratorError5;
								}
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return -1;
		}

		/**
   * Returns a struct to hold input control information
   * Set up a struct for each player in the game
   * Direction and Buttons contain the input from the devices
   * The keys struct contains arrays of keyboard characters that will trigger the action
   */

	}, {
		key: 'setupControls',
		value: function setupControls() {
			var controls = {
				'direction': {
					'UP': 0,
					'DOWN': 0,
					'LEFT': 0,
					'RIGHT': 0,
					'BEARING': '',
					'BEARING_LAST': '',
					'DEGREES': 0,
					'DEGREES_LAST': 0,
					'TIMESTAMP': 0
				},
				'direction_secondary': {
					'UP': 0,
					'DOWN': 0,
					'LEFT': 0,
					'RIGHT': 0,
					'BEARING': '',
					'DEGREES': 0,
					'BEARING_LAST': '',
					'DEGREES_LAST': 0,
					'TIMESTAMP': 0
				},
				'buttons': {},
				'pointer': {
					'M1': 0,
					'M2': 0,
					'M3': 0,
					'M4': 0,
					'M5': 0,
					'BEARING': '',
					'BEARING_DEGREES': 0,
					'ANGLE': 0,
					'TIMESTAMP': 0
				},
				'position': {},
				'interaction': {},
				'gamepad': {},
				'keys': {
					'UP': [],
					'DOWN': [],
					'LEFT': [],
					'RIGHT': []
				}
			};
			for (var i = 1; i <= 16; i++) {
				controls.buttons['B' + i] = 0;
				controls.keys['B' + i] = [];
			}

			controls.interaction.buffer = '';
			controls.interaction.pressed = '';
			controls.interaction.last = '';
			controls.interaction.device = '';

			return controls;
		}

		// Keyboard functions

		/**
   * Define a key for a player/action combination
   * @param {number} player The player on which we're defining a key
   * @param {string} action The action to define
   * @param {string} value The key to use
   * @param {boolean} append When true, this key definition will be appended to the existing key(s) for this action
   */

	}, {
		key: 'defineKey',
		value: function defineKey() {
			var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var action = arguments[1];
			var value = arguments[2];
			var append = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

			// Set up a new player if none defined
			if (typeof this.players[player] === 'undefined') {
				this.addPlayer();
			}

			if (['UP', 'DOWN', 'LEFT', 'RIGHT', 'ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16'].includes(action)) {
				if (append && typeof this.players[player].keys[action] !== 'undefined') {
					this.players[player].keys[action].push([value]);
				} else {
					this.players[player].keys[action] = [];
					this.players[player].keys[action].push([value]);
				}

				this.keys[[value]] = this.systems.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[value]);
			}

			return this;
		}

		/**
   * Iterate through players and check for interaction with defined keys
   */

	}, {
		key: 'checkKeyboardInput',
		value: function checkKeyboardInput() {
			// Loop through players and check for keypresses - use of 'entries()' gives us an index to use for the player
			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = this.players.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var _step6$value = _slicedToArray(_step6.value, 2),
					    playerIndex = _step6$value[0],
					    thisPlayer = _step6$value[1];

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var action = 0;
						var _iteratorNormalCompletion7 = true;
						var _didIteratorError7 = false;
						var _iteratorError7 = undefined;

						try {
							for (var _iterator7 = thisPlayer.keys[thisKey][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
								var thisValue = _step7.value;

								// Check if the key is down
								action = this.keys[thisValue].isDown ? 1 : action;

								// Emit events based on the key down and up values
								if (Phaser.Input.Keyboard.JustDown(this.keys[thisValue])) {
									this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: thisKey, state: 'DOWN' });
									// Update the last button state
									thisPlayer.interaction.pressed = thisKey;
									thisPlayer.interaction.buffer = thisKey;
									thisPlayer.interaction.last = thisKey;
								}
								if (Phaser.Input.Keyboard.JustUp(this.keys[thisValue])) {
									this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: thisKey, state: 'UP' });
								}
							}

							// Set the action in the player object
						} catch (err) {
							_didIteratorError7 = true;
							_iteratorError7 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion7 && _iterator7.return) {
									_iterator7.return();
								}
							} finally {
								if (_didIteratorError7) {
									throw _iteratorError7;
								}
							}
						}

						if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
							thisPlayer.direction[thisKey] = action;
							thisPlayer.direction.TIMESTAMP = this.scene.sys.time.now;
						} else if (['ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'].includes(thisKey)) {
							thisPlayer.direction_secondary[thisKey.replace('ALT_', '')] = action;
							if (action == 1) {
								thisPlayer.direction_secondary.TIMESTAMP = this.scene.sys.time.now;
							}
						} else {
							thisPlayer.buttons[thisKey] = action;
							if (action == 1) {
								thisPlayer.buttons.TIMESTAMP = this.scene.sys.time.now;
							}
						}

						// Set the latest interaction flag
						if (action == 1) {
							thisPlayer.interaction.device = 'keyboard';
						}
					}
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}
		}

		/**
   * Iterate through players and check for interaction with defined pointer buttons
   */

	}, {
		key: 'checkPointerInput',
		value: function checkPointerInput() {
			// Loop through players and check for button presses - use of 'entries()' gives us an index to use for the player
			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = this.players.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var _step8$value = _slicedToArray(_step8.value, 2),
					    playerIndex = _step8$value[0],
					    thisPlayer = _step8$value[1];

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var _iteratorNormalCompletion9 = true;
						var _didIteratorError9 = false;
						var _iteratorError9 = undefined;

						try {
							for (var _iterator9 = thisPlayer.keys[thisKey][Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
								var thisValue = _step9.value;
								// Each definition for this key action
								if (['M1', 'M2', 'M3', 'M4', 'M5'].includes(thisValue[0])) {
									// Check to see if button is pressed (stored in P1, can't have two mice...)
									if (this.players[0].pointer[thisValue] == 1) {
										thisPlayer.buttons[thisKey] = 1;
									}
								}
							}
						} catch (err) {
							_didIteratorError9 = true;
							_iteratorError9 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion9 && _iterator9.return) {
									_iterator9.return();
								}
							} finally {
								if (_didIteratorError9) {
									throw _iteratorError9;
								}
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		}

		// Gamepad functions

		/**
   * When a gamepad button is pressed down, this function will emit a mergedInput event in the global registry.
   * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
   * @param {number} index Button index
   * @param {number} value Button value
   * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
   */

	}, {
		key: 'gamepadButtonDown',
		value: function gamepadButtonDown(pad, button, value) {
			this.players[pad.index].interaction.device = 'gamepad';

			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'DOWN' });

			// DPad mapping
			if (button.index === 12) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'UP', state: 'DOWN' });
				this.players[pad.index].interaction.pressed = 'UP';
				this.players[pad.index].interaction.last = 'UP';
				this.players[pad.index].interaction.buffer = 'UP';
			}
			if (button.index === 13) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'DOWN', state: 'DOWN' });
				this.players[pad.index].interaction.pressed = 'DOWN';
				this.players[pad.index].interaction.last = 'DOWN';
				this.players[pad.index].interaction.buffer = 'DOWN';
			}
			if (button.index === 14) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'LEFT', state: 'DOWN' });
				this.players[pad.index].interaction.pressed = 'LEFT';
				this.players[pad.index].interaction.last = 'LEFT';
				this.players[pad.index].interaction.buffer = 'LEFT';
			}
			if (button.index === 15) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'RIGHT', state: 'DOWN' });
				this.players[pad.index].interaction.pressed = 'RIGHT';
				this.players[pad.index].interaction.last = 'RIGHT';
				this.players[pad.index].interaction.buffer = 'RIGHT';
			}

			// Last button pressed
			if (![12, 13, 14, 15].includes(button.index)) {
				// Update the last button state
				this.players[pad.index].interaction.pressed = 'B' + button.index;
				this.players[pad.index].interaction.last = 'B' + button.index;
				this.players[pad.index].interaction.buffer = 'B' + button.index;
				this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
			} else {
				this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
		}

		/**
   * When a gamepad button is released, this function will emit a mergedInput event in the global registry.
   * The event contains a reference to the player assigned to the gamepad, and passes a mapped action and value
   * @param {number} index Button index
   * @param {number} value Button value
   * @param {Phaser.Input.Gamepad.Button} button Phaser Button object
   */

	}, {
		key: 'gamepadButtonUp',
		value: function gamepadButtonUp(pad, button, value) {
			this.players[pad.index].interaction.device = 'gamepad';
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'UP' });
			// DPad mapping
			if (button.index === 12) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'UP', state: 'UP' });
			}
			if (button.index === 13) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'DOWN', state: 'UP' });
			}
			if (button.index === 14) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'LEFT', state: 'UP' });
			}
			if (button.index === 15) {
				this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: 'RIGHT', state: 'UP' });
			}

			if (![12, 13, 14, 15].includes(button.index)) {
				// Update the last button state
				this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
			} else {
				this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;
			}
		}

		/**
   * Iterate through gamepads and handle interactions
   */

	}, {
		key: 'checkGamepadInput',
		value: function checkGamepadInput() {
			// Check for gamepad input
			var _iteratorNormalCompletion10 = true;
			var _didIteratorError10 = false;
			var _iteratorError10 = undefined;

			try {
				for (var _iterator10 = this.gamepads[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
					var thisGamepad = _step10.value;


					// Set up a player if we don't have one, presumably due to race conditions in detecting gamepads
					if (typeof this.players[thisGamepad.index] === 'undefined') {
						this.addPlayer();
					}

					// Directions
					if (thisGamepad.leftStick.y < -0.5) {
						this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y);
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
					} else if (thisGamepad.leftStick.y > 0.5) {
						this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y;
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
					} else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
						// DPad
						this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
						this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
					}

					if (thisGamepad.leftStick.x < -0.5) {
						this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x);
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
					} else if (thisGamepad.leftStick.x > 0.5) {
						this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x;
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
					} else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
						// DPad
						this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
						this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
					}

					// Secondary
					if (thisGamepad.rightStick.y < -0.5) {
						this.players[thisGamepad.index].direction_secondary.UP = Math.abs(thisGamepad.rightStick.y);
						this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					} else if (thisGamepad.rightStick.y > 0.5) {
						this.players[thisGamepad.index].direction_secondary.DOWN = thisGamepad.rightStick.y;
						this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					} else {
						this.players[thisGamepad.index].direction_secondary.UP = 0;
						this.players[thisGamepad.index].direction_secondary.DOWN = 0;
					}

					if (thisGamepad.rightStick.x < -0.5) {
						this.players[thisGamepad.index].direction_secondary.LEFT = Math.abs(thisGamepad.rightStick.x);
						this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					} else if (thisGamepad.rightStick.x > 0.5) {
						this.players[thisGamepad.index].direction_secondary.RIGHT = thisGamepad.rightStick.x;
						this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
					} else {
						this.players[thisGamepad.index].direction_secondary.LEFT = 0;
						this.players[thisGamepad.index].direction_secondary.RIGHT = 0;
					}

					if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
						// Buttons

						for (var b = 0; b < thisGamepad.buttons.length; b++) {
							var button = thisGamepad.buttons[b];
							this.players[thisGamepad.index].buttons['B' + b] = button.value;
						}
					}
				}
			} catch (err) {
				_didIteratorError10 = true;
				_iteratorError10 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion10 && _iterator10.return) {
						_iterator10.return();
					}
				} finally {
					if (_didIteratorError10) {
						throw _iteratorError10;
					}
				}
			}
		}

		/**
   * Function to run on pointer move.
   * @param {*} pointer - The pointer object
   */

	}, {
		key: 'pointerMove',
		value: function pointerMove(pointer, threshold) {
			var threshold = threshold || 0;
			if (pointer.distance > threshold) {
				var pointerDirection = this.getBearingFromAngle(pointer.angle, 8);
				// this.players[0].direction_secondary = this.mapBearingToDirections(pointerDirection);

				// If we've been given a player position, return bearings and angles
				if (typeof this.players[0] !== 'undefined' && this.players[0].position.x !== 'undefined') {
					var position = this.players[0].position;
					var angleToPointer = Phaser.Math.Angle.Between(position.x, position.y, pointer.worldX, pointer.worldY);
					var _pointerDirection = this.getBearingFromAngle(angleToPointer, 8);
					var pointerAngle = Number(this.mapBearingToDegrees(_pointerDirection));

					this.players[0].pointer.BEARING = _pointerDirection;
					this.players[0].pointer.ANGLE = angleToPointer;
					this.players[0].pointer.BEARING_DEGREES = pointerAngle;
					this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
				}
			}
		}

		/**
   * Function to run on pointer down. Indicates that Mx has been pressed, which should be listened to by the player object
   * @param {*} pointer - The pointer object
   */

	}, {
		key: 'pointerDown',
		value: function pointerDown(pointer) {
			var action = '';
			this.players[0].interaction.device = 'pointer';
			if (pointer.leftButtonDown()) {
				action = 'M1';
			}
			if (pointer.rightButtonDown()) {
				action = 'M2';
			}
			if (pointer.middleButtonDown()) {
				action = 'M3';
			}
			if (pointer.backButtonDown()) {
				action = 'M4';
			}
			if (pointer.forwardButtonDown()) {
				action = 'M5';
			}

			this.eventEmitter.emit('mergedInput', { device: 'pointer', value: 1, player: 0, action: action, state: 'DOWN' });

			this.players[0].pointer[action] = 1;

			// Update the last button state
			this.players[0].interaction.pressed = action;
			this.players[0].interaction.last = action;
			this.players[0].interaction.buffer = action;
			this.players[0].pointer.TIMESTAMP = pointer.moveTime;
		}

		/**
   * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
   * @param {*} pointer - The pointer object
   */

	}, {
		key: 'pointerUp',
		value: function pointerUp(pointer) {
			var action = '';
			if (pointer.leftButtonReleased()) {
				action = 'M1';
			}
			if (pointer.rightButtonReleased()) {
				action = 'M2';
			}
			if (pointer.middleButtonReleased()) {
				action = 'M3';
			}
			if (pointer.backButtonReleased()) {
				action = 'M4';
			}
			if (pointer.forwardButtonReleased()) {
				action = 'M5';
			}

			this.eventEmitter.emit('mergedInput', { device: 'pointer', value: 1, player: 0, action: action, state: 'UP' });

			this.players[0].pointer[action] = 0;
			this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
		}

		/**
   * Get the bearing from a given angle
   * @param {float} angle - Angle to use
   * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
   */

	}, {
		key: 'getBearingFromAngle',
		value: function getBearingFromAngle(angle, numDirections, threshold) {
			var numDirections = numDirections || 8;

			var snap_interval = Phaser.Math.PI2 / numDirections;

			var angleSnap = Phaser.Math.Snap.To(angle, snap_interval);
			var angleSnapDeg = Phaser.Math.RadToDeg(angleSnap);
			var angleSnapDir = this.bearings[angleSnapDeg];

			return angleSnapDir;
		}

		/**
   * Given a bearing, return a direction object containing boolean flags for the four directions
   * @param {*} bearing
   */

	}, {
		key: 'mapBearingToDirections',
		value: function mapBearingToDirections(bearing) {
			var thisDirection = {
				'UP': 0,
				'DOWN': 0,
				'LEFT': 0,
				'RIGHT': 0,
				'BEARING': bearing.toUpperCase()
			};

			if (bearing.toUpperCase().includes('W')) {
				thisDirection.LEFT = 1;
			}
			if (bearing.toUpperCase().includes('E')) {
				thisDirection.RIGHT = 1;
			}
			if (bearing.toUpperCase().includes('S')) {
				thisDirection.DOWN = 1;
			}
			if (bearing.toUpperCase().includes('N')) {
				thisDirection.UP = 1;
			}

			return thisDirection;
		}

		/**
   * Given a directions object, return the applicable bearing (8 way only)
   * @param {*} directions
   */

	}, {
		key: 'mapDirectionsToBearing',
		value: function mapDirectionsToBearing(directions, threshold) {
			var threshold = threshold || -.5;
			if (directions.UP && !(directions.LEFT || directions.RIGHT)) {
				return 'N';
			}
			if (directions.RIGHT && directions.UP) {
				return 'NE';
			}
			if (directions.RIGHT && !(directions.UP || directions.DOWN)) {
				return 'E';
			}
			if (directions.RIGHT && directions.DOWN) {
				return 'SE';
			}
			if (directions.DOWN && !(directions.LEFT || directions.RIGHT)) {
				return 'S';
			}
			if (directions.LEFT && directions.DOWN) {
				return 'SW';
			}
			if (directions.LEFT && !(directions.UP || directions.DOWN)) {
				return 'W';
			}
			if (directions.LEFT && directions.UP) {
				return 'NW';
			}
			return '';
		}

		/**
   * Given a bearing, return the snapped angle in degrees
   * @param {*} bearing
   */

	}, {
		key: 'mapBearingToDegrees',
		value: function mapBearingToDegrees(bearing) {
			var _this2 = this;

			if (bearing != '') {
				return Object.keys(this.bearings).find(function (key) {
					return _this2.bearings[key] === bearing;
				});
			} else {
				return '';
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.shutdown();
			this.scene = undefined;
		}

		/**
   * Return debug object
   */

	}, {
		key: 'debug',
		value: function debug() {
			// Debug variables
			var debug = {
				'input': {}
			};
			debug.input.gamepads = [];
			for (var i = 0; i < this.gamepads.length; i++) {
				var pad = this.gamepads[i];
				var buttons = {};
				var axes = {};

				for (var b = 0; b < pad.buttons.length; b++) {
					var button = pad.buttons[b];
					buttons['B' + button.index] = button.value;
				}

				for (var a = 0; a < pad.axes.length; a++) {
					var axis = pad.axes[a];
					axes['A' + axis.index] = axis.getValue();
				}

				debug.input.gamepads.push({
					'ID': pad.id,
					'Index': pad.index,
					'Buttons': buttons,
					'Axes': axes
				});
			}

			debug.players = [];
			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = this.players[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var thisPlayer = _step11.value;

					debug.players.push({
						'interaction': thisPlayer.interaction,
						'device': thisPlayer.device,
						'buttons': thisPlayer.buttons,
						'pointer': thisPlayer.pointer,
						'direction': thisPlayer.direction,
						'direction_secondary': thisPlayer.direction_secondary,
						'keys': thisPlayer.keys
					});
				}
			} catch (err) {
				_didIteratorError11 = true;
				_iteratorError11 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion11 && _iterator11.return) {
						_iterator11.return();
					}
				} finally {
					if (_didIteratorError11) {
						throw _iteratorError11;
					}
				}
			}

			return debug;
		}
	}]);

	return MergedInput;
}(Phaser.Plugins.ScenePlugin);

exports.default = MergedInput;

/***/ })
/******/ ]);
});
//# sourceMappingURL=MergedInput.min.map