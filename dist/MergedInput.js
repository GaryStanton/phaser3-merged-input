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

        return _this;
    }

    _createClass(MergedInput, [{
        key: 'boot',
        value: function boot() {
            this.eventEmitter = this.systems.events;
            this.eventEmitter.on('update', this.update, this);

            // Gamepad
            if (typeof this.systems.input.gamepad !== 'undefined') {
                this.systems.input.gamepad.once('connected', function (thisGamepad) {
                    thisGamepad.on('down', this.gamepadButtonDown, this);
                    thisGamepad.on('up', this.gamepadButtonUp, this);
                    this.eventEmitter.emit('mergedInput', { device: 'gamepad', id: thisGamepad.id, player: thisGamepad.index, action: 'Connected' });
                    if (typeof this.players[thisGamepad.index] === 'undefined') {
                        this.addPlayer();
                    }
                    this.players[thisGamepad.index].gamepad = thisGamepad;
                }, this);
                this.gamepads = this.systems.input.gamepad.gamepads;
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
        }
    }, {
        key: 'update',
        value: function update() {
            // Loop through players and manage buffered input
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var thisPlayer = _step.value;

                    if (thisPlayer.interaction.buffer == '') {
                        thisPlayer.interaction.pressed = '';
                    }
                    if (thisPlayer.interaction.pressed != '') {
                        thisPlayer.interaction.buffer = '';
                    }
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

            this.checkKeyboardInput();
            this.checkGamepadInput();
        }

        /**
         * Add a new player object to the players array
         */

    }, {
        key: 'addPlayer',
        value: function addPlayer() {
            this.players.push(this.setupControls());
            this.players[this.players.length - 1].index = this.players.length - 1;
            return this.players[this.players.length - 1];
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.players[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var thisPlayer = _step2.value;

                    // Loop through all the keys assigned to this player
                    for (var thisKey in thisPlayer.keys) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = thisPlayer.keys[thisKey][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var thisValue = _step3.value;

                                if (thisValue == key) {
                                    return thisPlayer.index;
                                }
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
                    'RIGHT': 0
                },
                'buttons': {},
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

            if (['UP', 'DOWN', 'LEFT', 'RIGHT', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16'].includes(action)) {
                if (append) {
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
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.players.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _step4$value = _slicedToArray(_step4.value, 2),
                        playerIndex = _step4$value[0],
                        thisPlayer = _step4$value[1];

                    // Loop through all the keys assigned to this player
                    for (var thisKey in thisPlayer.keys) {
                        var action = 0;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = thisPlayer.keys[thisKey][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var thisValue = _step5.value;

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

                        if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
                            thisPlayer.direction[thisKey] = action;
                        } else {
                            thisPlayer.buttons[thisKey] = action;
                        }

                        // Set the latest interaction flag
                        if (action == 1) {
                            thisPlayer.interaction.device = 'keyboard';
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
        value: function gamepadButtonDown(index, value, button) {
            this.players[button.pad.index].interaction.device = 'gamepad';
            this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: button.pad.index, action: 'B' + index, state: 'DOWN' });
            // DPad mapping
            if (index === 12) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'UP', state: 'DOWN' });
            }
            if (index === 13) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'DOWN', state: 'DOWN' });
            }
            if (index === 14) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'LEFT', state: 'DOWN' });
            }
            if (index === 15) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'RIGHT', state: 'DOWN' });
            }

            // Last button pressed
            if (![12, 13, 14, 15].includes(index)) {
                // Update the last button state
                this.players[button.pad.index].interaction.pressed = 'B' + index;
                this.players[button.pad.index].interaction.last = 'B' + index;
                this.players[button.pad.index].interaction.buffer = 'B' + index;
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
        value: function gamepadButtonUp(index, value, button) {
            this.players[button.pad.index].interaction.device = 'gamepad';
            this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: value, player: button.pad.index, action: 'B' + index, state: 'UP' });
            // DPad mapping
            if (index === 12) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'UP' + index, state: 'UP' });
            }
            if (index === 13) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'DOWN' + index, state: 'UP' });
            }
            if (index === 14) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'LEFT' + index, state: 'UP' });
            }
            if (index === 15) {
                this.eventEmitter.emit('mergedInput', { device: 'gamepad', value: 1, player: button.pad.index, action: 'RIGHT' + index, state: 'UP' });
            }
        }

        /**
         * Iterate through gamepads and handle interactions
         */

    }, {
        key: 'checkGamepadInput',
        value: function checkGamepadInput() {
            // Check for gamepad input
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.gamepads[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var thisGamepad = _step6.value;


                    // Directions
                    if (thisGamepad.leftStick.y < -0.5) {
                        this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y);
                    } else if (thisGamepad.leftStick.y > 0.5) {
                        this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y;
                    } else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
                        // DPad
                        this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
                        this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
                    }

                    if (thisGamepad.leftStick.x < -0.5) {
                        this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x);
                    } else if (thisGamepad.leftStick.x > 0.5) {
                        this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x;
                    } else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
                        // DPad
                        this.players[thisGamepad.index].direction.LEFT = thisGamepad.left ? 1 : 0;
                        this.players[thisGamepad.index].direction.RIGHT = thisGamepad.right ? 1 : 0;
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

            debug.players = this.players;

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