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

var _bearings = __webpack_require__(1);

var _bearings2 = _interopRequireDefault(_bearings);

var _controlManager = __webpack_require__(2);

var _controlManager2 = _interopRequireDefault(_controlManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MergedInput = function (_Phaser$Plugins$Scene) {
	_inherits(MergedInput, _Phaser$Plugins$Scene);

	/**
  * The Merged Input plugin is designed to run in the background and handle input.
  * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
  *
  * @extends Phaser.Plugins.ScenePlugin
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

		_this.bearings = _bearings2.default;

		_this.dpadMappings = {
			'UP': 12,
			'DOWN': 13,
			'LEFT': 14,
			'RIGHT': 15
		};

		_this.controlManager = new _controlManager2.default();
		return _this;
	}

	_createClass(MergedInput, [{
		key: 'boot',
		value: function boot() {
			var _this2 = this;

			this.eventEmitter = this.systems.events;
			this.game.events.on(Phaser.Core.Events.PRE_STEP, this.preupdate, this);
			this.game.events.on(Phaser.Core.Events.POST_STEP, this.postupdate, this);
			// Handle the game losing focus
			this.game.events.on(Phaser.Core.Events.BLUR, function () {
				_this2.loseFocus();
			});

			// Gamepad
			if (typeof this.systems.input.gamepad !== 'undefined') {
				this.systems.input.gamepad.on('connected', function (thisGamepad) {
					this.refreshGamepads();
					this.setupGamepad(thisGamepad);
				}, this);

				// Check to see if the gamepad has already been setup by the browser
				this.systems.input.gamepad.refreshPads();
				if (this.systems.input.gamepad.total) {
					this.refreshGamepads();
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = this.gamepads[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var thisGamepad = _step.value;

							this.systems.input.gamepad.emit('connected', thisGamepad);
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

				this.systems.input.gamepad.on('down', this.gamepadButtonDown, this);
				this.systems.input.gamepad.on('up', this.gamepadButtonUp, this);
			}

			// Keyboard
			this.systems.input.keyboard.on('keydown', this.keyboardKeyDown, this);
			this.systems.input.keyboard.on('keyup', this.keyboardKeyUp, this);

			// Pointer
			this.systems.input.mouse.disableContextMenu();
		}
	}, {
		key: 'preupdate',
		value: function preupdate() {
			// Loop through players and handle input
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.players[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var thisPlayer = _step2.value;

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

			this.checkKeyboardInput();
			this.checkGamepadInput();
			this.checkPointerInput();
		}
	}, {
		key: 'postupdate',
		value: function postupdate() {
			// Loop through players and manage buffered input
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.players[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var thisPlayer = _step3.value;

					// Clear the interaction buffer
					this.clearBuffer(thisPlayer);
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
		}

		/**
   * Clear the interaction buffer for the given player
   * In the case of 'fake' DPad presses, we're using some convoluted buffers to keep the 'pressed' and 'released' values around for an extra tick
   * As they're created in this update loop, they're otherwise cleared before the consumer can use them.
   * @param {*} thisPlayer 
   */

	}, {
		key: 'clearBuffer',
		value: function clearBuffer(thisPlayer) {
			if (thisPlayer.interaction.pressed.length > 0 && thisPlayer.internal.fakedpadPressed.length == 0) {
				thisPlayer.interaction.buffer = [];
			}
			if (thisPlayer.interaction.buffer.length == 0) {
				thisPlayer.interaction.pressed = [];
				thisPlayer.interaction_mapped.pressed = [];
				if (thisPlayer.internal.fakedpadReleased.length == 0) {
					thisPlayer.interaction.released = [];
					thisPlayer.interaction_mapped.released = [];
				}
			}

			thisPlayer.internal.fakedpadPressed = [];
			thisPlayer.internal.fakedpadReleased = [];
		}

		/**
   * Function to run when the game loses focus
   * We want to fake releasing the buttons here, so that they're not stuck down without an off event when focus returns to the game
   */

	}, {
		key: 'loseFocus',
		value: function loseFocus() {
			// Loop through defined keys and reset them
			for (var thisKey in this.keys) {
				this.keys[thisKey].reset();
			}
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

			var gamepadID = thisGamepad.id.toLowerCase();
			this.players[thisGamepad.index].gamepad = thisGamepad;

			// Map the gamepad buttons
			var mappedPad = this.controlManager.mapGamepad(gamepadID);
			this.players[thisGamepad.index].gamepadMapping = mappedPad.gamepadMapping;
			this.players[thisGamepad.index].interaction_mapped.gamepadType = mappedPad.padType;
			for (var thisButton in this.players[thisGamepad.index].gamepadMapping) {
				this.players[thisGamepad.index].buttons_mapped[thisButton] = 0;
			}
		}
	}, {
		key: 'refreshGamepads',
		value: function refreshGamepads() {
			// Sometimes, gamepads are undefined. For some reason.
			this.gamepads = this.systems.input.gamepad.gamepads.filter(function (el) {
				return el != null;
			});

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.gamepads.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _step4$value = _slicedToArray(_step4.value, 2),
					    index = _step4$value[0],
					    thisGamepad = _step4$value[1];

					thisGamepad.index = index; // Overwrite the gamepad index, in case we had undefined gamepads earlier

					/**
      * Some cheap gamepads use the first axis as a dpad, in which case we won't have the dpad buttons 12-15
      */
					thisGamepad.fakedpad = thisGamepad.buttons.length < 15;
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
		}

		/**
   * Add a new player object to the players array
   * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
   * @param {number} numberOfButtons The number of buttons to assign to the player object. Defaults to 16. Fewer than 16 is not recommended, as gamepad DPads typically map to buttons 12-15
   */

	}, {
		key: 'addPlayer',
		value: function addPlayer(index, numberOfButtons) {
			numberOfButtons = numberOfButtons || 16;
			if (_typeof(Number.isInteger(index)) && typeof this.players[index] !== 'undefined') {
				return this.players[index];
			} else {
				// Set up player object
				var newPlayer = this.controlManager.setupControls(numberOfButtons);

				// Add helper functions to the player object
				this.addPlayerHelperFunctions(newPlayer);

				// Push new player to players array
				this.players.push(newPlayer);

				this.players[this.players.length - 1].index = this.players.length - 1;

				// If this is the first player, add the pointer events
				if (this.players.length == 1) {
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

				return this.players[this.players.length - 1];
			}
		}

		/**
   * Add helper functions to the player object
   * @param {*} player 
   */

	}, {
		key: 'addPlayerHelperFunctions',
		value: function addPlayerHelperFunctions(player) {
			/**
    * Pass a button name, or an array of button names to check if any were pressed in this update step.
    * Returns the name of the matched button(s), in case you need it.
    */
			player.interaction.isPressed = function (button) {
				button = typeof button === 'string' ? Array(button) : button;
				var matchedButtons = button.filter(function (x) {
					return player.interaction.pressed.includes(x);
				});
				return matchedButtons.length ? matchedButtons : false;
			},
			/**
    * Pass a button name, or an array of button names to check if any were released in this update step.
    * Returns the name of the matched button(s), in case you need it.
    */
			player.interaction.isReleased = function (button) {
				button = typeof button === 'string' ? Array(button) : button;
				var matchedButtons = button.filter(function (x) {
					return player.interaction.released.includes(x);
				});
				return matchedButtons.length ? matchedButtons : false;
			};

			/**
    * Pass a mapped button name, or an array of mapped button names to check if any were pressed in this update step.
    * Returns the name of the matched mapped button(s), in case you need it.
    */
			player.interaction_mapped.isPressed = function (button) {
				button = typeof button === 'string' ? Array(button) : button;
				var matchedButtons = button.filter(function (x) {
					return player.interaction_mapped.pressed.includes(x);
				});
				return matchedButtons.length ? matchedButtons : false;
			},

			/**
    * Pass a mapped button name, or an array of mapped button names to check if any were released in this update step.
    * Returns the name of the matched mapped button(s), in case you need it.
    */
			player.interaction_mapped.isReleased = function (button) {
				button = typeof button === 'string' ? Array(button) : button;
				var matchedButtons = button.filter(function (x) {
					return player.interaction_mapped.released.includes(x);
				});
				return matchedButtons.length ? matchedButtons : false;
			};

			return this;
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
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.players[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var thisPlayer = _step5.value;

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var _iteratorNormalCompletion6 = true;
						var _didIteratorError6 = false;
						var _iteratorError6 = undefined;

						try {
							for (var _iterator6 = thisPlayer.keys[thisKey][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
								var thisValue = _step6.value;

								if (thisValue == key) {
									return thisPlayer.index;
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

			return -1;
		}
	}, {
		key: 'getPlayerButtonFromKey',
		value: function getPlayerButtonFromKey(key) {
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = this.players[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var thisPlayer = _step7.value;

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var _iteratorNormalCompletion8 = true;
						var _didIteratorError8 = false;
						var _iteratorError8 = undefined;

						try {
							for (var _iterator8 = thisPlayer.keys[thisKey][Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
								var thisValue = _step8.value;

								if (thisValue == key) {
									// Now we have a matching button value, check to see if it's in our mapped buttons, in which case we want to return the button number it matches to
									if (typeof thisPlayer.gamepadMapping[thisKey] !== "undefined") {
										return 'B' + thisPlayer.gamepadMapping[thisKey];
									} else {
										return thisKey;
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
				}
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

			return '';
		}

		/**
   * Return an array of actions that a player may use
   * @param {number} player 
   * @returns 
   */

	}, {
		key: 'getPlayerActions',
		value: function getPlayerActions(player) {
			var actions = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'];
			actions.push.apply(actions, _toConsumableArray(Object.keys(this.players[player].gamepadMapping)));
			actions.push.apply(actions, _toConsumableArray(Object.keys(this.players[player].buttons)));

			return actions;
		}

		/**
   * Given a player and a button ID, return the mapped button name, e.g. 0 = 'RC_S' (Right cluster, South - X on an xbox gamepad)
   * @param {*} player 
   * @param {*} buttonID 
   */

	}, {
		key: 'getMappedButton',
		value: function getMappedButton(player, buttonID) {
			buttonID = buttonID.toString().replace(/\D/g, '');
			return Object.keys(player.gamepadMapping).find(function (key) {
				return player.gamepadMapping[key] == buttonID;
			});
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

			if (this.getPlayerActions(player).includes(action)) {
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
			// Loop through players and check for keypresses
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = this.players[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var thisPlayer = _step9.value;

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var action = 0;
						var _iteratorNormalCompletion10 = true;
						var _didIteratorError10 = false;
						var _iteratorError10 = undefined;

						try {
							for (var _iterator10 = thisPlayer.keys[thisKey][Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
								var thisValue = _step10.value;

								// Check if the key is down
								action = this.keys[thisValue].isDown ? 1 : action;
							}

							// Set the action in the player object

							// Dpad
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

						if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
							thisPlayer.direction[thisKey] = action;
							thisPlayer.direction.TIMESTAMP = this.scene.sys.time.now;
						}
						// Alternative direction
						else if (['ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT'].includes(thisKey)) {
								thisPlayer.direction_secondary[thisKey.replace('ALT_', '')] = action;
								if (action == 1) {
									thisPlayer.direction_secondary.TIMESTAMP = this.scene.sys.time.now;
								}
							}
							// Friendly button names
							else if (thisKey in thisPlayer.gamepadMapping) {
									// Get the button number from the gamepad mapping
									thisPlayer.buttons['B' + thisPlayer.gamepadMapping[thisKey]] = action;
									thisPlayer.buttons_mapped[thisKey] = action;
									if (action == 1) {
										thisPlayer.buttons.TIMESTAMP = this.scene.sys.time.now;
									}
								}
								// Numbered buttons
								else {
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

		/**
   * When a keyboard button is pressed down, this function will emit a mergedInput event in the global registry.
   * The event contains a reference to the player assigned to the key, and passes a mapped action and value
   */

	}, {
		key: 'keyboardKeyDown',
		value: function keyboardKeyDown(event) {
			var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
				return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
			});
			var playerIndex = this.getPlayerIndexFromKey(keyCode);
			var playerAction = this.getPlayerButtonFromKey(keyCode);

			if (playerIndex > -1 && playerAction != '') {
				var thisPlayer = this.getPlayer(playerIndex);
				this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: keyCode, state: 'DOWN' });

				thisPlayer.interaction.device = 'keyboard';
				thisPlayer.interaction.pressed.push(playerAction);
				thisPlayer.interaction.buffer.push(playerAction);
				thisPlayer.interaction.last = playerAction;
				thisPlayer.interaction.lastPressed = playerAction;

				// Update mapped button object
				if (typeof this.dpadMappings[playerAction] !== "undefined") {
					playerAction = 'B' + this.dpadMappings[playerAction];
				}
				if (typeof thisPlayer.buttons[playerAction] !== "undefined") {
					var mappedButton = this.getMappedButton(thisPlayer, playerAction);
					if (typeof mappedButton !== "undefined") {
						thisPlayer.buttons_mapped[mappedButton] = 1;
						thisPlayer.interaction_mapped.pressed.push(mappedButton);
						thisPlayer.interaction_mapped.last = mappedButton;
						thisPlayer.interaction_mapped.lastPressed = mappedButton;
						thisPlayer.interaction_mapped.gamepadType = 'keyboard';
					}
				}
			}
		}

		/**
   * When a keyboard button is released, this function will emit a mergedInput event in the global registry.
   * The event contains a reference to the player assigned to the key, and passes a mapped action and value
   */

	}, {
		key: 'keyboardKeyUp',
		value: function keyboardKeyUp(event) {
			var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
				return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
			});
			var playerIndex = this.getPlayerIndexFromKey(keyCode);
			var playerAction = this.getPlayerButtonFromKey(keyCode);

			if (playerIndex > -1 && playerAction != '') {
				var thisPlayer = this.getPlayer(playerIndex);
				this.eventEmitter.emit('mergedInput', { device: 'keyboard', value: 1, player: playerIndex, action: keyCode, state: 'DOWN' });

				thisPlayer.interaction.device = 'keyboard';
				thisPlayer.interaction.released.push(playerAction);
				thisPlayer.interaction.lastReleased = playerAction;

				// Update mapped button object
				if (typeof this.dpadMappings[playerAction] !== "undefined") {
					playerAction = 'B' + this.dpadMappings[playerAction];
				}
				if (typeof thisPlayer.buttons[playerAction] !== "undefined") {
					var mappedButton = this.getMappedButton(thisPlayer, playerAction);
					if (typeof mappedButton !== "undefined") {
						thisPlayer.buttons_mapped[mappedButton] = 0;
						thisPlayer.interaction_mapped.released = mappedButton;
						thisPlayer.interaction_mapped.lastReleased = mappedButton;
						thisPlayer.interaction_mapped.gamepadType = 'keyboard';
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
			// Loop through players and check for button presses
			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = this.players[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var thisPlayer = _step11.value;

					// Loop through all the keys assigned to this player
					for (var thisKey in thisPlayer.keys) {
						var _iteratorNormalCompletion12 = true;
						var _didIteratorError12 = false;
						var _iteratorError12 = undefined;

						try {
							for (var _iterator12 = thisPlayer.keys[thisKey][Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
								var thisValue = _step12.value;
								// Each definition for this key action
								if (['M1', 'M2', 'M3', 'M4', 'M5'].includes(thisValue[0])) {
									// Check to see if button is pressed (stored in P1, can't have two mice...)
									if (this.players[0].pointer[thisValue] == 1) {
										thisPlayer.buttons[thisKey] = 1;
									}
								}
							}
						} catch (err) {
							_didIteratorError12 = true;
							_iteratorError12 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion12 && _iterator12.return) {
									_iterator12.return();
								}
							} finally {
								if (_didIteratorError12) {
									throw _iteratorError12;
								}
							}
						}
					}
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
			this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'DOWN' });

			// Buttons
			if (![12, 13, 14, 15].includes(button.index)) {
				// Update the last button state
				this.players[pad.index].interaction.pressed.push('B' + button.index);
				this.players[pad.index].interaction.last = 'B' + button.index;
				this.players[pad.index].interaction.lastPressed = 'B' + button.index;
				this.players[pad.index].interaction.buffer.push('B' + button.index);

				// Update mapped button object
				var mappedButton = this.getMappedButton(this.players[pad.index], button.index);
				if (typeof mappedButton !== "undefined") {
					this.players[pad.index].interaction_mapped.pressed.push(mappedButton);
					this.players[pad.index].interaction_mapped.last = mappedButton;
					this.players[pad.index].interaction_mapped.lastPressed = mappedButton;
				}
			}
			// DPad
			else {
					var dpadMapping = this.dpadMappings;
					var direction = Object.keys(dpadMapping).find(function (key) {
						return dpadMapping[key] == button.index;
					});
					this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: direction, state: 'DOWN' });
					this.players[pad.index].interaction.pressed.push(direction);
					this.players[pad.index].interaction.last = direction;
					this.players[pad.index].interaction.lastPressed = direction;
					this.players[pad.index].interaction.buffer.push(direction);
					this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;

					// Update mapped button object
					var _mappedButton = this.getMappedButton(this.players[pad.index], button.index);
					if (typeof _mappedButton !== "undefined") {
						this.players[pad.index].interaction_mapped.pressed.push(_mappedButton);
						this.players[pad.index].interaction_mapped.last = _mappedButton;
						this.players[pad.index].interaction_mapped.lastPressed = _mappedButton;
					}
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
			this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;

			this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: pad.index, action: 'B' + button.index, state: 'UP' });

			// Buttons
			if (![12, 13, 14, 15].includes(button.index)) {
				// Update the last button state
				this.players[pad.index].interaction.released.push('B' + button.index);
				this.players[pad.index].interaction.lastReleased = 'B' + button.index;

				// Update mapped button object
				var mappedButton = this.getMappedButton(this.players[pad.index], button.index);
				if (typeof mappedButton !== "undefined") {
					this.players[pad.index].interaction_mapped.released = mappedButton;
					this.players[pad.index].interaction_mapped.lastReleased = mappedButton;
				}
			}
			// DPad
			else {
					var dpadMapping = this.dpadMappings;
					var direction = Object.keys(dpadMapping).find(function (key) {
						return dpadMapping[key] == button.index;
					});
					this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: pad.index, action: direction, state: 'UP' });
					this.players[pad.index].interaction.released.push(direction);
					this.players[pad.index].interaction.lastReleased = direction;

					// Update mapped button object
					var _mappedButton2 = this.getMappedButton(this.players[pad.index], button.index);
					if (typeof _mappedButton2 !== "undefined") {
						this.players[pad.index].interaction_mapped.released = _mappedButton2;
						this.players[pad.index].interaction_mapped.lastReleased = _mappedButton2;
					}
				}
		}

		/**
   * Some gamepads map dpads to axis, which are handled differently to buttons.
   * This function mimics a gamepad push and fires an event.
   * We also insert the direction into a buffer so that we know what buttons are pressed in the gamepadFakeDPadRelease function
   * We use an array for the buffer and pressed vars, as more than one button may be pressed at the same time, within the same step.
   */

	}, {
		key: 'gamepadFakeDPadPress',
		value: function gamepadFakeDPadPress(gamepad, direction) {
			if (!this.players[gamepad.index].internal.fakedpadBuffer.includes(direction)) {
				this.players[gamepad.index].internal.fakedpadBuffer.push(direction);
				this.players[gamepad.index].internal.fakedpadPressed.push(direction);

				var thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction]);
				thisButton.value = 1;
				thisButton.pressed = true;
				thisButton.events.emit('down', gamepad, thisButton, 1);
				// this.systems.input.gamepad.emit('down', gamepad, thisButton, 1);
			}
		}

		/**
   * When the axis is blank, we know we've released all buttons.
   */

	}, {
		key: 'gamepadFakeDPadRelease',
		value: function gamepadFakeDPadRelease(gamepad) {
			if (this.players[gamepad.index].internal.fakedpadBuffer.length > 0) {
				var _iteratorNormalCompletion13 = true;
				var _didIteratorError13 = false;
				var _iteratorError13 = undefined;

				try {

					for (var _iterator13 = this.players[gamepad.index].internal.fakedpadBuffer[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
						var direction = _step13.value;

						this.players[gamepad.index].internal.fakedpadReleased = direction;

						var thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction]);
						thisButton.value = 0;
						thisButton.pressed = false;
						thisButton.events.emit('up', gamepad, thisButton, 0);
						// this.systems.input.gamepad.emit('up', gamepad, thisButton, 0);
					}
				} catch (err) {
					_didIteratorError13 = true;
					_iteratorError13 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion13 && _iterator13.return) {
							_iterator13.return();
						}
					} finally {
						if (_didIteratorError13) {
							throw _iteratorError13;
						}
					}
				}

				this.players[gamepad.index].internal.fakedpadBuffer = [];
			}
		}

		/**
   * Iterate through gamepads and handle interactions
   */

	}, {
		key: 'checkGamepadInput',
		value: function checkGamepadInput() {
			// Check for gamepad input
			var _iteratorNormalCompletion14 = true;
			var _didIteratorError14 = false;
			var _iteratorError14 = undefined;

			try {
				for (var _iterator14 = this.gamepads[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
					var thisGamepad = _step14.value;


					// Set up a player if we don't have one, presumably due to race conditions in detecting gamepads
					if (typeof this.players[thisGamepad.index] === 'undefined') {
						this.addPlayer();
					}

					var direction = '';

					// Directions
					if (thisGamepad.leftStick.y < -0.5) {
						this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y);
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

						if (thisGamepad.fakedpad) {
							this.gamepadFakeDPadPress(thisGamepad, 'UP');
							direction = 'UP';
						}
					} else if (thisGamepad.leftStick.y > 0.5) {
						this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y;
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

						if (thisGamepad.fakedpad) {
							this.gamepadFakeDPadPress(thisGamepad, 'DOWN');
							direction = 'DOWN';
						}
					} else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
						// DPad
						this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
						this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
					}

					if (thisGamepad.leftStick.x < -0.5) {
						this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x);
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

						if (thisGamepad.fakedpad) {
							this.gamepadFakeDPadPress(thisGamepad, 'LEFT');
							direction = 'LEFT';
						}
					} else if (thisGamepad.leftStick.x > 0.5) {
						this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x;
						this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;

						if (thisGamepad.fakedpad) {
							this.gamepadFakeDPadPress(thisGamepad, 'RIGHT');
							direction = 'RIGHT';
						}
					} else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
						// DPad
						this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
						this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
					}

					if (thisGamepad.fakedpad && direction == '') {
						this.gamepadFakeDPadRelease(thisGamepad);
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

							// Get mapped name for this button number and artificially update the relevant buttons_mapped key
							var mappedButton = this.getMappedButton(this.players[thisGamepad.index], b);
							if (typeof mappedButton !== "undefined") {
								this.players[thisGamepad.index].buttons_mapped[mappedButton] = button.value;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError14 = true;
				_iteratorError14 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion14 && _iterator14.return) {
						_iterator14.return();
					}
				} finally {
					if (_didIteratorError14) {
						throw _iteratorError14;
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
			if (this.players.length) {
				threshold = threshold || 0;
				if (pointer.distance > threshold) {
					var pointerDirection = this.getBearingFromAngle(pointer.angle, 8);

					// If we've been given a player position, return bearings and angles
					if (typeof this.players[0] !== 'undefined' && this.players[0].position.x !== 'undefined') {
						var position = this.players[0].position;
						var angleToPointer = Phaser.Math.Angle.Between(position.x, position.y, pointer.worldX, pointer.worldY);
						pointerDirection = this.getBearingFromAngle(angleToPointer, 8);
						var pointerAngle = Number(this.mapBearingToDegrees(pointerDirection));

						this.players[0].pointer.BEARING = pointerDirection;
						this.players[0].pointer.ANGLE = angleToPointer;
						this.players[0].pointer.BEARING_DEGREES = pointerAngle;
						this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
					}
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
			if (this.players.length) {
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
				this.players[0].interaction.pressed.push(action);
				this.players[0].interaction.last = action;
				this.players[0].interaction.lastPressed = action;
				this.players[0].interaction.buffer.push(action);
				this.players[0].pointer.TIMESTAMP = pointer.moveTime;
			}
		}

		/**
   * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
   * @param {*} pointer - The pointer object
   */

	}, {
		key: 'pointerUp',
		value: function pointerUp(pointer) {
			if (this.players.length) {
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
				this.players[0].interaction.released.push(action);
				this.players[0].interaction.lastReleased = action;
				this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
			}
		}

		/**
   * Get the bearing from a given angle
   * @param {float} angle - Angle to use
   * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
   */

	}, {
		key: 'getBearingFromAngle',
		value: function getBearingFromAngle(angle, numDirections) {
			numDirections = numDirections || 8;

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
			var _this3 = this;

			if (bearing != '') {
				return Object.keys(this.bearings).find(function (key) {
					return _this3.bearings[key] === bearing;
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
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = this.players[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var _debug$players$push;

					var thisPlayer = _step15.value;

					debug.players.push((_debug$players$push = {
						'interaction': thisPlayer.interaction,
						'interaction_mapped': thisPlayer.interaction_mapped,
						//				'device': thisPlayer.interaction.device,
						'buttons': thisPlayer.buttons,
						'buttons_mapped': thisPlayer.buttons_mapped
					}, _defineProperty(_debug$players$push, 'interaction_mapped', thisPlayer.interaction_mapped), _defineProperty(_debug$players$push, 'pointer', thisPlayer.pointer), _defineProperty(_debug$players$push, 'direction', thisPlayer.direction), _defineProperty(_debug$players$push, 'direction_secondary', thisPlayer.direction_secondary), _defineProperty(_debug$players$push, 'keys', thisPlayer.keys), _debug$players$push));
				}
			} catch (err) {
				_didIteratorError15 = true;
				_iteratorError15 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion15 && _iterator15.return) {
						_iterator15.return();
					}
				} finally {
					if (_didIteratorError15) {
						throw _iteratorError15;
					}
				}
			}

			return debug;
		}
	}]);

	return MergedInput;
}(Phaser.Plugins.ScenePlugin);

exports.default = MergedInput;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bearings = {
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

module.exports = bearings;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pad_generic = __webpack_require__(3);

var _pad_generic2 = _interopRequireDefault(_pad_generic);

var _pad_unlicensedSNES = __webpack_require__(4);

var _pad_unlicensedSNES2 = _interopRequireDefault(_pad_unlicensedSNES);

var _pad_xbox = __webpack_require__(5);

var _pad_xbox2 = _interopRequireDefault(_pad_xbox);

var _pad_dualshock = __webpack_require__(6);

var _pad_dualshock2 = _interopRequireDefault(_pad_dualshock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controlManager = function () {
    function controlManager() {
        _classCallCheck(this, controlManager);
    }

    _createClass(controlManager, [{
        key: 'mapGamepad',
        value: function mapGamepad(id) {
            id = id.toLowerCase();
            var padConfig = _pad_generic2.default;

            if (id.includes('081f') && id.includes('e401')) {
                padConfig = _pad_unlicensedSNES2.default;
            } else if (id.includes('xbox') && id.includes('360')) {
                padConfig = _pad_xbox2.default;
            } else if (id.includes('054c')) {
                padConfig = _pad_dualshock2.default;
            } else {}

            return padConfig;
        }
    }, {
        key: 'getBaseControls',
        value: function getBaseControls() {
            return {
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
                'gamepadMapping': {
                    RC_S: 0,
                    RC_E: 1,
                    RC_W: 2,
                    RC_N: 3,
                    START: 9,
                    SELECT: 8,
                    LB: 4,
                    RB: 5,
                    LT: 6,
                    RT: 7,
                    LS: 10,
                    RS: 11,
                    LC_N: 12,
                    LC_S: 13,
                    LC_W: 14,
                    LC_E: 15,
                    MENU: 16
                },
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
                'position': { x: 0, y: 0 },
                'gamepad': {},
                'keys': {
                    'UP': [],
                    'DOWN': [],
                    'LEFT': [],
                    'RIGHT': []
                },
                'internal': {
                    'fakedpadBuffer': [],
                    'fakedpadPressed': [],
                    'fakedpadReleased': []
                },
                'interaction': {
                    'buffer': [],
                    'pressed': [],
                    'released': [],
                    'last': '',
                    'lastPressed': '',
                    'lastReleased': '',
                    'device': ''
                },
                'interaction_mapped': {
                    'pressed': [],
                    'released': [],
                    'last': '',
                    'lastPressed': '',
                    'lastReleased': '',
                    'gamepadType': ''
                },
                'buttons_mapped': {
                    RC_S: 0,
                    RC_E: 0,
                    RC_W: 0,
                    RC_N: 0,
                    START: 0,
                    SELECT: 0,
                    MENU: 0,
                    LB: 0,
                    RB: 0,
                    LT: 0,
                    RT: 0,
                    LS: 0,
                    RS: 0,
                    LC_N: 0,
                    LC_S: 0,
                    LC_W: 0,
                    LC_E: 0
                }
            };
        }

        /**
         * Returns a struct to hold input control information
         * Set up a struct for each player in the game
         * Direction and Buttons contain the input from the devices
         * The keys struct contains arrays of keyboard characters that will trigger the action
         */

    }, {
        key: 'setupControls',
        value: function setupControls(numberOfButtons) {
            numberOfButtons = numberOfButtons || 16;

            var controls = this.getBaseControls();

            // Add buttons
            for (var i = 0; i <= numberOfButtons; i++) {
                controls.buttons['B' + i] = 0;
                controls.keys['B' + i] = [];
            }

            controls.setPosition = function (x, y) {
                this.position.x = x;
                this.position.y = y;
            };

            return controls;
        }
    }]);

    return controlManager;
}();

exports.default = controlManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Generic pad mapping
 */
module.exports = {
    padID: 'Generic',
    padType: 'generic',
    gamepadMapping: {
        RC_S: 0,
        RC_E: 1,
        RC_W: 2,
        RC_N: 3,
        START: 9,
        SELECT: 8,
        LB: 4,
        RB: 5,
        LT: 6,
        RT: 7,
        LS: 10,
        RS: 11,
        LC_N: 12,
        LC_S: 13,
        LC_W: 14,
        LC_E: 15
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 081f-e401 - UnlicensedSNES
 */
module.exports = {
    padID: '081f-e401',
    padType: 'snes',
    gamepadMapping: {
        RC_S: 2,
        RC_E: 1,
        RC_W: 3,
        RC_N: 0,
        START: 9,
        SELECT: 8,
        LB: 4,
        RB: 5,
        LC_N: 12,
        LC_S: 13,
        LC_W: 14,
        LC_E: 15
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Generic pad mapping
 */
module.exports = {
    padID: 'Xbox 360 controller (XInput STANDARD GAMEPAD)',
    padType: 'xbox',
    gamepadMapping: {
        RC_S: 0,
        RC_E: 1,
        RC_W: 2,
        RC_N: 3,
        START: 9,
        SELECT: 8,
        LB: 4,
        RB: 5,
        LT: 6,
        RT: 7,
        LS: 10,
        RS: 11,
        LC_N: 12,
        LC_S: 13,
        LC_W: 14,
        LC_E: 15,
        MENU: 16
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dualshock mapping
 */
module.exports = {
    padID: 'Dualshock',
    padType: 'Sony',
    gamepadMapping: {
        RC_S: 0,
        RC_E: 1,
        RC_W: 2,
        RC_N: 3,
        START: 9, // Options
        SELECT: 8, // Share
        LB: 4,
        RB: 5,
        LT: 6,
        RT: 7,
        LS: 10,
        RS: 11,
        LC_N: 12,
        LC_S: 13,
        LC_W: 14,
        LC_E: 15,
        MENU: 16,
        TOUCH: 17
    }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=MergedInput.min.map