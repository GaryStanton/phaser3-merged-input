(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MergedInput", [], factory);
	else if(typeof exports === 'object')
		exports["MergedInput"] = factory();
	else
		root["MergedInput"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 348:
/***/ ((module) => {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Used internally by the KeyCombo class.
 * Return `true` if it reached the end of the combo, `false` if not.
 *
 * @function Phaser.Input.Keyboard.AdvanceKeyCombo
 * @private
 * @since 3.0.0
 *
 * @param {KeyboardEvent} event - The native Keyboard Event.
 * @param {Phaser.Input.Keyboard.KeyCombo} combo - The KeyCombo object to advance.
 *
 * @return {boolean} `true` if it reached the end of the combo, `false` if not.
 */
var AdvanceKeyCombo = function (event, combo)
{
    combo.timeLastMatched = event.timeStamp;
    combo.index++;

    if (combo.index === combo.size)
    {
        return true;
    }
    else
    {
        combo.current = combo.keyCodes[combo.index];
        return false;
    }
};

module.exports = AdvanceKeyCombo;


/***/ }),

/***/ 353:
/***/ ((module) => {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Used internally by the KeyCombo class.
 *
 * @function Phaser.Input.Keyboard.ResetKeyCombo
 * @private
 * @since 3.0.0
 *
 * @param {Phaser.Input.Keyboard.KeyCombo} combo - The KeyCombo to reset.
 *
 * @return {Phaser.Input.Keyboard.KeyCombo} The KeyCombo.
 */
var ResetKeyCombo = function (combo)
{
    combo.current = combo.keyCodes[0];
    combo.index = 0;
    combo.timeLastMatched = 0;
    combo.matched = false;
    combo.timeMatched = 0;

    return combo;
};

module.exports = ResetKeyCombo;


/***/ }),

/***/ 399:
/***/ ((module) => {

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

/***/ 436:
/***/ ((module) => {

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

/***/ 518:
/***/ ((module) => {

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

/***/ 635:
/***/ ((module) => {

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
    START: 9,
    // Options
    SELECT: 8,
    // Share
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

/***/ }),

/***/ 806:
/***/ ((module) => {

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
  '-22.5': 'ENE',
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MergedInput)
});

// EXTERNAL MODULE: ./configs/bearings.js
var bearings = __webpack_require__(806);
var bearings_default = /*#__PURE__*/__webpack_require__.n(bearings);
// EXTERNAL MODULE: ./configs/pad_generic.js
var pad_generic = __webpack_require__(518);
var pad_generic_default = /*#__PURE__*/__webpack_require__.n(pad_generic);
// EXTERNAL MODULE: ./configs/pad_unlicensedSNES.js
var pad_unlicensedSNES = __webpack_require__(436);
var pad_unlicensedSNES_default = /*#__PURE__*/__webpack_require__.n(pad_unlicensedSNES);
// EXTERNAL MODULE: ./configs/pad_xbox360.js
var pad_xbox360 = __webpack_require__(399);
var pad_xbox360_default = /*#__PURE__*/__webpack_require__.n(pad_xbox360);
// EXTERNAL MODULE: ./configs/pad_dualshock.js
var pad_dualshock = __webpack_require__(635);
var pad_dualshock_default = /*#__PURE__*/__webpack_require__.n(pad_dualshock);
;// ./controlManager.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var controlManager = /*#__PURE__*/function () {
  function controlManager() {
    _classCallCheck(this, controlManager);
  }
  return _createClass(controlManager, [{
    key: "mapGamepad",
    value: function mapGamepad(id) {
      id = id.toLowerCase();
      var padConfig = (pad_generic_default());
      if (id.includes('081f') && id.includes('e401')) {
        padConfig = (pad_unlicensedSNES_default());
      } else if (id.includes('xbox') && id.includes('360')) {
        padConfig = (pad_xbox360_default());
      } else if (id.includes('054c')) {
        padConfig = (pad_dualshock_default());
      } else {}
      return padConfig;
    }
  }, {
    key: "getBaseControls",
    value: function getBaseControls() {
      return {
        'direction': {
          'UP': 0,
          'DOWN': 0,
          'LEFT': 0,
          'RIGHT': 0,
          'ANGLE': 0,
          'ANGLE_LAST': 0,
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
          'ANGLE': 0,
          'ANGLE_LAST': 0,
          'BEARING': '',
          'DEGREES': 0,
          'BEARING_LAST': '',
          'DEGREES_LAST': 0,
          'TIMESTAMP': 0
        },
        'buttons': {},
        'timers': {},
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
        'position': {
          x: 0,
          y: 0
        },
        'position_last': {
          x: 0,
          y: 0
        },
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
    key: "setupControls",
    value: function setupControls(numberOfButtons) {
      numberOfButtons = numberOfButtons || 16;
      var controls = this.getBaseControls();

      // Add buttons
      for (var i = 0; i <= numberOfButtons; i++) {
        controls.buttons['B' + i] = 0;
        controls.keys['B' + i] = [];
      }

      // Add timers
      for (var _i = 0; _i <= numberOfButtons; _i++) {
        controls.timers['B' + _i] = {
          'pressed': 0,
          'released': 0,
          'duration': 0
        };
      }
      for (var _i2 = 0, _arr = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'ALT_UP', 'ALT_DOWN', 'ALT_LEFT', 'ALT_RIGHT']; _i2 < _arr.length; _i2++) {
        var thisDirection = _arr[_i2];
        controls.timers[thisDirection] = {
          'pressed': 0,
          'released': 0,
          'duration': 0
        };
      }
      for (var _i3 = 0, _arr2 = ['M1', 'M2', 'M3', 'M4', 'M5']; _i3 < _arr2.length; _i3++) {
        var thisPointer = _arr2[_i3];
        controls.timers[thisPointer] = {
          'pressed': 0,
          'released': 0,
          'duration': 0
        };
      }
      controls.setPosition = function (x, y) {
        this.position.x = x;
        this.position.y = y;
      };
      return controls;
    }
  }]);
}();

// EXTERNAL MODULE: ../node_modules/phaser/src/input/keyboard/combo/AdvanceKeyCombo.js
var AdvanceKeyCombo = __webpack_require__(348);
var AdvanceKeyCombo_default = /*#__PURE__*/__webpack_require__.n(AdvanceKeyCombo);
// EXTERNAL MODULE: ../node_modules/phaser/src/input/keyboard/combo/ResetKeyCombo.js
var ResetKeyCombo = __webpack_require__(353);
var ResetKeyCombo_default = /*#__PURE__*/__webpack_require__.n(ResetKeyCombo);
;// ./ButtonCombo.js
function ButtonCombo_typeof(o) { "@babel/helpers - typeof"; return ButtonCombo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ButtonCombo_typeof(o); }
function ButtonCombo_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function ButtonCombo_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ButtonCombo_toPropertyKey(o.key), o); } }
function ButtonCombo_createClass(e, r, t) { return r && ButtonCombo_defineProperties(e.prototype, r), t && ButtonCombo_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ButtonCombo_toPropertyKey(t) { var i = ButtonCombo_toPrimitive(t, "string"); return "symbol" == ButtonCombo_typeof(i) ? i : i + ""; }
function ButtonCombo_toPrimitive(t, r) { if ("object" != ButtonCombo_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ButtonCombo_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == ButtonCombo_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var ButtonCombo = /*#__PURE__*/function (_Phaser$Input$Keyboar) {
  function ButtonCombo(mergedInput, player, buttons, config) {
    var _this;
    ButtonCombo_classCallCheck(this, ButtonCombo);
    _this = _callSuper(this, ButtonCombo, [mergedInput.systems.input.keyboard, buttons, config]);
    _this.player = player;
    _this.mergedInput = mergedInput;
    _this.keyCodes = buttons; // KeyCombo expects this to be an array of keycodes, we'll be checking against button names

    mergedInput.events.on('gamepad_buttondown', _this.onButtonDown, _this);
    _this.current = _this.keyCodes[0];
    return _this;
  }
  _inherits(ButtonCombo, _Phaser$Input$Keyboar);
  return ButtonCombo_createClass(ButtonCombo, [{
    key: "onButtonDown",
    value: function onButtonDown(event) {
      if (this.matched || !this.enabled) {
        return;
      }
      var matched = this.ProcessButtonCombo(event, this);
      if (matched) {
        this.mergedInput.eventEmitter.emit('mergedInput', {
          combo: this,
          player: this.player,
          action: 'Button combo matched'
        });
        this.mergedInput.events.emit('buttoncombomatch', {
          player: this.player,
          combo: this
        });
        if (this.resetOnMatch) {
          ResetKeyCombo_default()(this);
        } else if (this.deleteOnMatch) {
          this.destroy();
        }
      }
    }
  }, {
    key: "ProcessButtonCombo",
    value: function ProcessButtonCombo(event, combo) {
      // Set a timestamp from the gamepad
      event.timeStamp = this.mergedInput.systems.time.now;

      // Don't check buttons on a different pad
      if (combo.player.index !== event.player) {
        return false;
      }

      // Check matched
      if (combo.matched) {
        return true;
      }

      // Compare the current action with the button pressed
      var buttonMatch = false;
      if (event.button === combo.current) {
        buttonMatch = true;
      }
      var mappedButton = this.mergedInput.getMappedButton(combo.player, event.button);
      if (mappedButton === combo.current) {
        buttonMatch = true;
      }
      var unMappedButton = this.mergedInput.getUnmappedButton(combo.player, mappedButton);
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
            comboMatched = AdvanceKeyCombo_default()(event, combo);
          }
        } else {
          keyMatched = true;

          //  We don't check the time for the first key pressed, so just advance it
          comboMatched = AdvanceKeyCombo_default()(event, combo);
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
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.mergedInput.events.off('gamepad_buttondown', this.onButtonDown);
      _superPropGet(ButtonCombo, "destroy", this, 3)([]);
    }
  }]);
}(Phaser.Input.Keyboard.KeyCombo);

;// ./main.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function main_typeof(o) { "@babel/helpers - typeof"; return main_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, main_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function main_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function main_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, main_toPropertyKey(o.key), o); } }
function main_createClass(e, r, t) { return r && main_defineProperties(e.prototype, r), t && main_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function main_toPropertyKey(t) { var i = main_toPrimitive(t, "string"); return "symbol" == main_typeof(i) ? i : i + ""; }
function main_toPrimitive(t, r) { if ("object" != main_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != main_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function main_callSuper(t, o, e) { return o = main_getPrototypeOf(o), main_possibleConstructorReturn(t, main_isNativeReflectConstruct() ? Reflect.construct(o, e || [], main_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function main_possibleConstructorReturn(t, e) { if (e && ("object" == main_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return main_assertThisInitialized(t); }
function main_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function main_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (main_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function main_getPrototypeOf(t) { return main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, main_getPrototypeOf(t); }
function main_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && main_setPrototypeOf(t, e); }
function main_setPrototypeOf(t, e) { return main_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, main_setPrototypeOf(t, e); }



var MergedInput = /*#__PURE__*/function (_Phaser$Plugins$Scene) {
  /**
   * The Merged Input plugin is designed to run in the background and handle input.
   * Upon detecting a keypress or gamepad interaction, the plugin will update a player object and emit global events.
   *
   * @extends Phaser.Plugins.ScenePlugin
   * @param {*} scene
   * @param {*} pluginManager
   */
  function MergedInput(scene, pluginManager) {
    var _this;
    main_classCallCheck(this, MergedInput);
    _this = main_callSuper(this, MergedInput, [scene, pluginManager]);
    _this.scene = scene;

    // Players
    _this.players = [];
    // Gamepads
    _this.gamepads = [];
    // Keys object to store Phaser key objects. We'll check these during update
    _this.keys = {};
    _this.bearings = (bearings_default());
    _this.dpadMappings = {
      'UP': 12,
      'DOWN': 13,
      'LEFT': 14,
      'RIGHT': 15
    };

    // A threshold (between 0 and 1) below which analog stick input will be ignored
    _this.axisThreshold = 0;

    // The number of directions to snap to when mapping input to bearings (Defaults to 32)
    _this.numDirections = Object.keys(_this.bearings).length - 1;
    _this.controlManager = new controlManager();
    return _this;
  }
  main_inherits(MergedInput, _Phaser$Plugins$Scene);
  return main_createClass(MergedInput, [{
    key: "boot",
    value: function boot() {
      var _this2 = this;
      // Scene event emitter
      this.eventEmitter = this.systems.events;
      // Plugin event emitter
      this.events = new Phaser.Events.EventEmitter();
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
          var _iterator = _createForOfIteratorHelper(this.gamepads),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var thisGamepad = _step.value;
              this.systems.input.gamepad.emit('connected', thisGamepad);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
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
    key: "preupdate",
    value: function preupdate() {
      // If the first player has moved, we want to update the pointer position
      if (typeof this.players[0] !== 'undefined') {
        if (this.players[0].position.x !== this.players[0].position_last.x || this.players[0].position.y !== this.players[0].position_last.y) {
          this.pointerMove(this.systems.input.activePointer);
        }
      }
      this.players[0].position_last.x = this.players[0].position.x;
      this.players[0].position_last.y = this.players[0].position.y;
      this.checkKeyboardInput();
      this.checkGamepadInput();
      this.checkPointerInput();

      // Loop through players and handle input
      var _iterator2 = _createForOfIteratorHelper(this.players),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var thisPlayer = _step2.value;
          // If the pointer hasn't moved, and the scene has changed, this can end up as undefined
          thisPlayer.pointer.BEARING = typeof thisPlayer.pointer.BEARING != 'undefined' ? thisPlayer.pointer.BEARING : '';
          thisPlayer.pointer.BEARING_DEGREES = typeof thisPlayer.pointer.BEARING_DEGREES != 'undefined' ? thisPlayer.pointer.BEARING_DEGREES : 0;
          thisPlayer.pointer.ANGLE = typeof thisPlayer.pointer.ANGLE != 'undefined' ? thisPlayer.pointer.ANGLE : '';
          thisPlayer.pointer.DEGREES = typeof thisPlayer.pointer.DEGREES != 'undefined' ? thisPlayer.pointer.DEGREES : 0;
          thisPlayer.pointer.POINTERANGLE = typeof thisPlayer.pointer.POINTERANGLE != 'undefined' ? thisPlayer.pointer.POINTERANGLE : '';
          thisPlayer.pointer.POINTERDIRECTION = typeof thisPlayer.pointer.POINTERDIRECTION != 'undefined' ? thisPlayer.pointer.POINTERDIRECTION : '';
          thisPlayer.pointer.PLAYERPOS = typeof thisPlayer.pointer.PLAYERPOS != 'undefined' ? thisPlayer.pointer.PLAYERPOS : '';
          thisPlayer.direction.ANGLE = this.mapDirectionsToAngle(thisPlayer.direction, this.axisThreshold, thisPlayer.gamepad && thisPlayer.gamepad.leftStick ? thisPlayer.gamepad.leftStick : null);
          thisPlayer.direction.ANGLE_LAST = thisPlayer.direction.ANGLE != '' ? thisPlayer.direction.ANGLE : thisPlayer.direction.ANGLE_LAST;
          thisPlayer.direction.DEGREES = thisPlayer.direction.ANGLE !== -1 ? Math.round(Phaser.Math.RadToDeg(thisPlayer.direction.ANGLE) * 100) / 100 : -1;
          thisPlayer.direction.DEGREES_LAST = thisPlayer.direction.DEGREES != -1 ? thisPlayer.direction.DEGREES : thisPlayer.direction.DEGREES_LAST;
          thisPlayer.direction.BEARING = thisPlayer.direction.ANGLE !== -1 ? this.getBearingFromAngle(thisPlayer.direction.ANGLE) : '';
          thisPlayer.direction.BEARING_LAST = thisPlayer.direction.BEARING != '' ? thisPlayer.direction.BEARING : thisPlayer.direction.BEARING_LAST;
          thisPlayer.direction.BEARING_DEGREES = thisPlayer.direction.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING)) : 0;
          thisPlayer.direction.BEARING_DEGREES_LAST = thisPlayer.direction.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction.BEARING_LAST)) : 0;
          thisPlayer.direction_secondary.ANGLE = this.mapDirectionsToAngle(thisPlayer.direction_secondary, this.axisThreshold, thisPlayer.gamepad && thisPlayer.gamepad.rightStick ? thisPlayer.gamepad.rightStick : null);
          thisPlayer.direction_secondary.ANGLE_LAST = thisPlayer.direction_secondary.ANGLE != '' ? thisPlayer.direction_secondary.ANGLE : thisPlayer.direction_secondary.ANGLE_LAST;
          thisPlayer.direction_secondary.DEGREES = thisPlayer.direction_secondary.ANGLE !== -1 ? Math.round(Phaser.Math.RadToDeg(thisPlayer.direction_secondary.ANGLE) * 100) / 100 : -1;
          thisPlayer.direction_secondary.DEGREES_LAST = thisPlayer.direction_secondary.DEGREES != -1 ? thisPlayer.direction_secondary.DEGREES : thisPlayer.direction_secondary.DEGREES_LAST;
          thisPlayer.direction_secondary.BEARING = thisPlayer.direction_secondary.ANGLE !== -1 ? this.getBearingFromAngle(thisPlayer.direction_secondary.ANGLE) : '';
          thisPlayer.direction_secondary.BEARING_LAST = thisPlayer.direction_secondary.BEARING != '' ? thisPlayer.direction_secondary.BEARING : thisPlayer.direction_secondary.BEARING_LAST;
          thisPlayer.direction_secondary.BEARING_DEGREES = thisPlayer.direction_secondary.BEARING != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING)) : 0;
          thisPlayer.direction_secondary.BEARING_DEGREES_LAST = thisPlayer.direction_secondary.BEARING_LAST != '' ? parseFloat(this.mapBearingToDegrees(thisPlayer.direction_secondary.BEARING_LAST)) : 0;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "postupdate",
    value: function postupdate() {
      // Loop through players and manage buffered input
      var _iterator3 = _createForOfIteratorHelper(this.players),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var thisPlayer = _step3.value;
          // Clear the interaction buffer
          this.clearBuffer(thisPlayer);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    /**
     * Clear the interaction buffer for the given player
     * In the case of 'fake' DPad presses, we're using some convoluted buffers to keep the 'pressed' and 'released' values around for an extra tick
     * As they're created in this update loop, they're otherwise cleared before the consumer can use them.
     * @param {*} thisPlayer
     */
  }, {
    key: "clearBuffer",
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
    key: "loseFocus",
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
    key: "setupGamepad",
    value: function setupGamepad(thisGamepad) {
      this.eventEmitter.emit('mergedInput', {
        device: 'gamepad',
        id: thisGamepad.id,
        player: thisGamepad.index,
        action: 'Connected'
      });
      this.events.emit('gamepad_connected', thisGamepad);
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

    /**
     * Set a threshold (between 0 and 1) below which analog stick input will be ignored
     * @param {*} value
     * @returns
     */
  }, {
    key: "setAxisThreshold",
    value: function setAxisThreshold(value) {
      this.axisThreshold = value;
      return this;
    }

    /**
     * Set the number of directions to snap to when mapping input to bearings
     */
  }, {
    key: "setNumDirections",
    value: function setNumDirections(value) {
      if (typeof value === 'number' && value > 0) {
        this.numDirections = value;
      }
      return this;
    }
  }, {
    key: "refreshGamepads",
    value: function refreshGamepads() {
      // Sometimes, gamepads are undefined. For some reason.
      this.gamepads = this.systems.input.gamepad.gamepads.filter(function (el) {
        return el != null;
      });
      var _iterator4 = _createForOfIteratorHelper(this.gamepads.entries()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
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
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    /**
     * Add a new player object to the players array
     * @param {number} index Player index - if a player object at this index already exists, it will be returned instead of creating a new player object
     * @param {number} numberOfButtons The number of buttons to assign to the player object. Defaults to 16. Fewer than 16 is not recommended, as gamepad DPads typically map to buttons 12-15
     */
  }, {
    key: "addPlayer",
    value: function addPlayer(index, numberOfButtons) {
      numberOfButtons = numberOfButtons || 16;
      if (main_typeof(Number.isInteger(index)) && typeof this.players[index] !== 'undefined') {
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
    key: "addPlayerHelperFunctions",
    value: function addPlayerHelperFunctions(player) {
      var _this3 = this;
      /**
       * Pass a button name, or an array of button names to check if any were pressed in this update step.
       * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
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
       * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
       * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
       * Returns the name of the matched button(s), in case you need it.
       */
      player.interaction.isDown = function (button) {
        button = typeof button === 'string' ? Array(button) : button;
        var matchedButtons = button.filter(function (x) {
          return player.buttons[x];
        });
        var matchedDirections = button.filter(function (x) {
          return player.direction[x];
        });
        var matchedPointer = button.filter(function (x) {
          return player.pointer[x];
        });
        var matchedAll = [].concat(_toConsumableArray(matchedButtons), _toConsumableArray(matchedDirections), _toConsumableArray(matchedPointer));
        return matchedAll.length ? matchedAll : false;
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
       * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
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
       * Pass a mapped button name, or an array of mapped button names to check if any are currently pressed in this update step.
       * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
       * Returns the name of the matched button(s), in case you need it.
       */
      player.interaction_mapped.isDown = function (button) {
        button = typeof button === 'string' ? Array(button) : button;
        var matchedButtons = button.filter(function (x) {
          return player.buttons_mapped[x];
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

      /**
       * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
       * Similar to Phaser's keyboard plugin, the checkDown function can accept a 'duration' parameter, and will only register a press once every X milliseconds.
       * Returns the name of the matched button(s)
       *
       * @param {string|array} button Array of buttons to check
       * @param {number} duration The duration which must have elapsed before this button is considered as being down.
       * @param {boolean} includeFirst - When true, the initial press of the button will be included in the results. Defaults to false.
       */
      player.interaction.checkDown = function (button, duration, includeFirst) {
        if (includeFirst === undefined) {
          includeFirst = false;
        }
        if (duration === undefined) {
          duration = 0;
        }
        var matchedButtons = [];
        var downButtons = player.interaction.isDown(button);
        if (downButtons.length) {
          var _iterator5 = _createForOfIteratorHelper(downButtons),
            _step5;
          try {
            var _loop = function _loop() {
              var thisButton = _step5.value;
              if (typeof player.timers[thisButton]._tick === 'undefined') {
                player.timers[thisButton]._tick = 0;
                if (includeFirst) {
                  matchedButtons.push(thisButton);
                }
              }
              var t = Phaser.Math.Snap.Floor(_this3.scene.sys.time.now - player.timers[thisButton].pressed, duration);
              if (t > player.timers[thisButton]._tick) {
                _this3.game.events.once(Phaser.Core.Events.POST_STEP, function () {
                  player.timers[thisButton]._tick = t;
                });
                matchedButtons.push(thisButton);
              }
            };
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        return matchedButtons.length ? matchedButtons : false;
      },
      /**
       * Mapped version of the checkDown version - resolves mapped button names and calls the checkDown function
       */
      player.interaction_mapped.checkDown = function (button, duration, includeFirst) {
        if (includeFirst === undefined) {
          includeFirst = false;
        }
        var unmappedButtons = [];

        // Resolve the unmapped button names to a new array
        var _iterator6 = _createForOfIteratorHelper(button),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var thisButton = _step6.value;
            var unmappedButton = _this3.getUnmappedButton(player, thisButton);
            if (unmappedButton) {
              unmappedButtons.push(unmappedButton);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        var downButtons = player.interaction.checkDown(unmappedButtons, duration, includeFirst);
        return downButtons.length ? downButtons.map(function (x) {
          return _this3.getMappedButton(player, x);
        }) : false;
      };

      /**
       * The previous functions are specific to the interaction and interaction_mapped definition of buttons.
       * In general you would pick a definition scheme and query that object (interaction or interaction_mapped), just for ease though, we'll add some functions that accept either type of convention
       */

      /**
       * Pass a button name, or an array of button names to check if any were pressed in this update step.
       * This will only fire once per button press. If you need to check for a button being held down, use isDown instead.
       * Returns the name of the matched button(s), in case you need it.
       */
      player.isPressed = function (button) {
        var interaction = player.interaction.isPressed(button) || [];
        var interaction_mapped = player.interaction_mapped.isPressed(button) || [];
        var matchedButtons = [].concat(_toConsumableArray(interaction), _toConsumableArray(interaction_mapped));
        return matchedButtons.length ? matchedButtons : false;
      },
      /**
       * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
       * This differs from the isPressed function in that it will return true if the button is currently pressed, even if it was pressed in a previous update step.
       * Returns the name of the button(s), in case you need it.
       */
      player.isDown = function (button) {
        var interaction = player.interaction.isDown(button) || [];
        var interaction_mapped = player.interaction_mapped.isDown(button) || [];
        var matchedButtons = [].concat(_toConsumableArray(interaction), _toConsumableArray(interaction_mapped));
        return matchedButtons.length ? matchedButtons : false;
      },
      /**
       * Pass a button name, or an array of button names to check if any were released in this update step.
       * Returns the name of the matched button(s), in case you need it.
       */
      player.isReleased = function (button) {
        var interaction = player.interaction.isReleased(button) || [];
        var interaction_mapped = player.interaction_mapped.isReleased(button) || [];
        var matchedButtons = [].concat(_toConsumableArray(interaction), _toConsumableArray(interaction_mapped));
        return matchedButtons.length ? matchedButtons : false;
      };

      /**
       * Pass a button name, or an array of button names to check if any are currently pressed in this update step.
       * Similar to Phaser's keyboard plugin, the checkDown function can accept a 'duration' parameter, and will only register a press once every X milliseconds.
       * Returns the name of the matched button(s)
       *
       * @param {string|array} button Array of buttons to check
       * @param {number} - The duration which must have elapsed before this button is considered as being down.
       */
      player.checkDown = function (button, duration, includeFirst) {
        if (includeFirst === undefined) {
          includeFirst = false;
        }
        var interaction = player.interaction.checkDown(button, duration, includeFirst) || [];
        var interaction_mapped = player.interaction_mapped.checkDown(button, duration, includeFirst) || [];
        var matchedButtons = [].concat(_toConsumableArray(interaction), _toConsumableArray(interaction_mapped));
        return matchedButtons.length ? matchedButtons : false;
      };
      player.setDevice = function (device) {
        if (player.interaction.device != device) {
          _this3.eventEmitter.emit('mergedInput', {
            device: device,
            player: player.index,
            action: 'Device Changed'
          });
          _this3.events.emit('device_changed', {
            player: player.index,
            device: device
          });
        }
        player.interaction.device = device;
        return _this3;
      };
      return this;
    }

    /**
     * Get player object
     * @param {number} index Player index
     */
  }, {
    key: "getPlayer",
    value: function getPlayer(index) {
      return typeof this.players[index] !== 'undefined' ? this.players[index] : '';
    }
  }, {
    key: "getPlayerIndexFromKey",
    value: function getPlayerIndexFromKey(key) {
      var _iterator7 = _createForOfIteratorHelper(this.players),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var thisPlayer = _step7.value;
          // Loop through all the keys assigned to this player
          for (var thisKey in thisPlayer.keys) {
            var _iterator8 = _createForOfIteratorHelper(thisPlayer.keys[thisKey]),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var thisValue = _step8.value;
                if (thisValue == key) {
                  return thisPlayer.index;
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return -1;
    }
  }, {
    key: "getPlayerButtonFromKey",
    value: function getPlayerButtonFromKey(key) {
      var _iterator9 = _createForOfIteratorHelper(this.players),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var thisPlayer = _step9.value;
          // Loop through all the keys assigned to this player
          for (var thisKey in thisPlayer.keys) {
            var _iterator10 = _createForOfIteratorHelper(thisPlayer.keys[thisKey]),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var thisValue = _step10.value;
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
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return '';
    }

    /**
     * Return an array of actions that a player may use
     * @param {number} player
     * @returns
     */
  }, {
    key: "getPlayerActions",
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
    key: "getMappedButton",
    value: function getMappedButton(player, buttonID) {
      buttonID = buttonID.toString().replace(/\D/g, '');
      return Object.keys(player.gamepadMapping).find(function (key) {
        return player.gamepadMapping[key] == buttonID;
      });
    }

    /**
     * Given a player and a mapped button name, return the button ID that it resolves to, e.g. 'RC_S' (Right cluster, South - X on an xbox gamepad) = B0.
     * This takes directions into account and will thus return 'LEFT' for LC_W, instead of the button ID that can be found in the gamepadMapping.
     * @param {*} player
     * @param {*} mappedButton
     */
  }, {
    key: "getUnmappedButton",
    value: function getUnmappedButton(player, mappedButton) {
      var buttonNo = player.gamepadMapping[mappedButton];
      var dpadMapping = this.dpadMappings;
      var direction = Object.keys(dpadMapping).find(function (key) {
        return dpadMapping[key] == buttonNo;
      });
      return direction ? direction : 'B' + player.gamepadMapping[mappedButton];
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
    key: "defineKey",
    value: function defineKey() {
      var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var value = arguments.length > 2 ? arguments[2] : undefined;
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
    key: "checkKeyboardInput",
    value: function checkKeyboardInput() {
      // Loop through players and check for keypresses
      var _iterator11 = _createForOfIteratorHelper(this.players),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var thisPlayer = _step11.value;
          // Loop through all the keys assigned to this player
          for (var thisKey in thisPlayer.keys) {
            var action = 0;
            var _iterator12 = _createForOfIteratorHelper(thisPlayer.keys[thisKey]),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var thisValue = _step12.value;
                // Check if the key is down
                action = this.keys[thisValue].isDown ? 1 : action;
              }

              // Set the action in the player object

              // Dpad
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
            if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(thisKey)) {
              thisPlayer.direction[thisKey] = action;
              if (action == 1) {
                thisPlayer.direction.TIMESTAMP = this.scene.sys.time.now;
              }
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
              thisPlayer.setDevice('keyboard');
            }
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }

    /**
     * When a keyboard button is pressed down, this function will emit a mergedInput event in the global registry.
     * The event contains a reference to the player assigned to the key, and passes a mapped action and value
     */
  }, {
    key: "keyboardKeyDown",
    value: function keyboardKeyDown(event) {
      var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
        return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
      });
      var playerIndex = this.getPlayerIndexFromKey(keyCode);
      var playerAction = this.getPlayerButtonFromKey(keyCode);
      if (playerIndex > -1 && playerAction != '') {
        var thisPlayer = this.getPlayer(playerIndex);
        this.eventEmitter.emit('mergedInput', {
          device: 'keyboard',
          value: 1,
          player: playerIndex,
          action: keyCode,
          state: 'DOWN'
        });
        this.events.emit('keyboard_keydown', {
          player: playerIndex,
          key: keyCode
        });
        thisPlayer.setDevice('keyboard');
        thisPlayer.interaction.pressed.push(playerAction);
        thisPlayer.interaction.buffer.push(playerAction);
        thisPlayer.interaction.last = playerAction;
        thisPlayer.interaction.lastPressed = playerAction;

        // Update timers
        thisPlayer.timers[playerAction].pressed = this.scene.sys.time.now;
        thisPlayer.timers[playerAction].released = 0;
        thisPlayer.timers[playerAction].duration = 0;

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
    key: "keyboardKeyUp",
    value: function keyboardKeyUp(event) {
      var keyCode = Object.keys(Phaser.Input.Keyboard.KeyCodes).find(function (key) {
        return Phaser.Input.Keyboard.KeyCodes[key] === event.keyCode;
      });
      var playerIndex = this.getPlayerIndexFromKey(keyCode);
      var playerAction = this.getPlayerButtonFromKey(keyCode);
      if (playerIndex > -1 && playerAction != '') {
        var thisPlayer = this.getPlayer(playerIndex);
        this.eventEmitter.emit('mergedInput', {
          device: 'keyboard',
          value: 1,
          player: playerIndex,
          action: keyCode,
          state: 'UP'
        });
        this.events.emit('keyboard_keyup', {
          player: playerIndex,
          key: keyCode
        });
        thisPlayer.setDevice('keyboard');
        thisPlayer.interaction.released.push(playerAction);
        thisPlayer.interaction.lastReleased = playerAction;

        // Update timers
        thisPlayer.timers[playerAction].released = this.scene.sys.time.now;
        thisPlayer.timers[playerAction].duration = thisPlayer.timers[playerAction].released - thisPlayer.timers[playerAction].pressed;
        delete thisPlayer.timers[playerAction]._tick;

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
    key: "checkPointerInput",
    value: function checkPointerInput() {
      // Check for pointer movement
      if (this.systems.input.activePointer.velocity.x != 0 || this.systems.input.activePointer.velocity.y != 0) {
        this.players[0].setDevice('pointer');
      }

      // Loop through players and check for button presses
      var _iterator13 = _createForOfIteratorHelper(this.players),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var thisPlayer = _step13.value;
          // Loop through all the keys assigned to this player
          for (var thisKey in thisPlayer.keys) {
            var _iterator14 = _createForOfIteratorHelper(thisPlayer.keys[thisKey]),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var thisValue = _step14.value;
                // Each definition for this key action
                if (['M1', 'M2', 'M3', 'M4', 'M5'].includes(thisValue[0])) {
                  // Check to see if button is pressed (stored in P1, can't have two mice...)
                  if (this.players[0].pointer[thisValue] == 1) {
                    thisPlayer.buttons[thisKey] = 1;
                  }
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
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
    key: "gamepadButtonDown",
    value: function gamepadButtonDown(pad, button, value) {
      this.players[pad.index].setDevice('gamepad');
      this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
      this.eventEmitter.emit('mergedInput', {
        device: 'gamepad',
        value: value,
        player: pad.index,
        action: 'B' + button.index,
        state: 'DOWN'
      });
      this.events.emit('gamepad_buttondown', {
        player: pad.index,
        button: "B".concat(button.index)
      });

      // Buttons
      if (![12, 13, 14, 15].includes(button.index)) {
        var playerAction = 'B' + button.index;

        // Update the last button state
        this.players[pad.index].interaction.pressed.push(playerAction);
        this.players[pad.index].interaction.last = playerAction;
        this.players[pad.index].interaction.lastPressed = playerAction;
        this.players[pad.index].interaction.buffer.push(playerAction);

        // Update timers
        this.players[pad.index].timers[playerAction].pressed = this.scene.sys.time.now;
        this.players[pad.index].timers[playerAction].released = 0;
        this.players[pad.index].timers[playerAction].duration = 0;

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
        this.eventEmitter.emit('mergedInput', {
          device: 'gamepad',
          value: 1,
          player: pad.index,
          action: direction,
          state: 'DOWN'
        });
        this.events.emit('gamepad_directiondown', {
          player: pad.index,
          button: direction
        });
        this.players[pad.index].interaction.pressed.push(direction);
        this.players[pad.index].interaction.last = direction;
        this.players[pad.index].interaction.lastPressed = direction;
        this.players[pad.index].interaction.buffer.push(direction);
        this.players[pad.index].direction.TIMESTAMP = this.scene.sys.time.now;

        // Update timers
        this.players[pad.index].timers[direction].pressed = this.scene.sys.time.now;
        this.players[pad.index].timers[direction].released = 0;
        this.players[pad.index].timers[direction].duration = 0;

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
    key: "gamepadButtonUp",
    value: function gamepadButtonUp(pad, button, value) {
      this.players[pad.index].setDevice('gamepad');
      this.players[pad.index].buttons.TIMESTAMP = this.scene.sys.time.now;
      this.eventEmitter.emit('mergedInput', {
        device: 'gamepad',
        value: value,
        player: pad.index,
        action: 'B' + button.index,
        state: 'UP'
      });
      this.events.emit('gamepad_buttonup', {
        player: pad.index,
        button: "B".concat(button.index)
      });

      // Buttons
      if (![12, 13, 14, 15].includes(button.index)) {
        var playerAction = 'B' + button.index;

        // Update the last button state
        this.players[pad.index].interaction.released.push(playerAction);
        this.players[pad.index].interaction.lastReleased = playerAction;

        // Update timers
        this.players[pad.index].timers[playerAction].released = this.scene.sys.time.now;
        this.players[pad.index].timers[playerAction].duration = this.players[pad.index].timers[playerAction].released - this.players[pad.index].timers[playerAction].pressed;
        delete this.players[pad.index].timers[playerAction]._tick;

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
        this.eventEmitter.emit('mergedInput', {
          device: 'gamepad',
          value: 1,
          player: pad.index,
          action: direction,
          state: 'UP'
        });
        this.events.emit('gamepad_directionup', {
          player: pad.index,
          button: direction
        });
        this.players[pad.index].interaction.released.push(direction);
        this.players[pad.index].interaction.lastReleased = direction;

        // Update timers
        this.players[pad.index].timers[direction].released = this.scene.sys.time.now;
        this.players[pad.index].timers[direction].duration = this.players[pad.index].timers[direction].released - this.players[pad.index].timers[direction].pressed;
        delete this.players[pad.index].timers[direction]._tick;

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
    key: "gamepadFakeDPadPress",
    value: function gamepadFakeDPadPress(gamepad, direction) {
      if (!this.players[gamepad.index].internal.fakedpadBuffer.includes(direction)) {
        this.players[gamepad.index].internal.fakedpadBuffer.push(direction);
        this.players[gamepad.index].internal.fakedpadPressed.push(direction);
        var thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction]);
        thisButton.value = 1;
        thisButton.pressed = true;
        thisButton.events.emit('down', gamepad, thisButton, 1);
      }
    }

    /**
     * When the axis is blank, we know we've released all buttons.
     */
  }, {
    key: "gamepadFakeDPadRelease",
    value: function gamepadFakeDPadRelease(gamepad) {
      if (this.players[gamepad.index].internal.fakedpadBuffer.length > 0) {
        var _iterator15 = _createForOfIteratorHelper(this.players[gamepad.index].internal.fakedpadBuffer),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var direction = _step15.value;
            this.players[gamepad.index].internal.fakedpadReleased = direction;
            var thisButton = new Phaser.Input.Gamepad.Button(gamepad, this.dpadMappings[direction]);
            thisButton.value = 0;
            thisButton.pressed = false;
            thisButton.events.emit('up', gamepad, thisButton, 0);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        this.players[gamepad.index].internal.fakedpadBuffer = [];
      }
    }

    /**
     * Iterate through gamepads and handle interactions
     */
  }, {
    key: "checkGamepadInput",
    value: function checkGamepadInput() {
      // Check for gamepad input
      var _iterator16 = _createForOfIteratorHelper(this.gamepads),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var thisGamepad = _step16.value;
          // Set up a player if we don't have one, presumably due to race conditions in detecting gamepads
          if (typeof this.players[thisGamepad.index] === 'undefined') {
            this.addPlayer();
          }
          var direction = '';

          // Directions
          if (thisGamepad.leftStick.y < -this.axisThreshold) {
            this.players[thisGamepad.index].direction.UP = Math.abs(thisGamepad.leftStick.y);
            this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
            if (thisGamepad.fakedpad) {
              this.gamepadFakeDPadPress(thisGamepad, 'UP');
              direction = 'UP';
            }
          } else if (thisGamepad.leftStick.y > this.axisThreshold) {
            this.players[thisGamepad.index].direction.DOWN = thisGamepad.leftStick.y;
            this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
            if (thisGamepad.fakedpad) {
              this.gamepadFakeDPadPress(thisGamepad, 'DOWN');
              direction = 'DOWN';
            }
          } else if (this.players[thisGamepad.index].interaction.device === 'gamepad') {
            // DPad
            this.players[thisGamepad.index].direction.UP = thisGamepad.up ? 1 : 0;
            this.players[thisGamepad.index].direction.DOWN = thisGamepad.down ? 1 : 0;
          }
          if (thisGamepad.leftStick.x < -this.axisThreshold) {
            this.players[thisGamepad.index].direction.LEFT = Math.abs(thisGamepad.leftStick.x);
            this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
            if (thisGamepad.fakedpad) {
              this.gamepadFakeDPadPress(thisGamepad, 'LEFT');
              direction = 'LEFT';
            }
          } else if (thisGamepad.leftStick.x > this.axisThreshold) {
            this.players[thisGamepad.index].direction.RIGHT = thisGamepad.leftStick.x;
            this.players[thisGamepad.index].direction.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
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
          if (thisGamepad.rightStick.y < -this.axisThreshold) {
            this.players[thisGamepad.index].direction_secondary.UP = Math.abs(thisGamepad.rightStick.y);
            this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
          } else if (thisGamepad.rightStick.y > this.axisThreshold) {
            this.players[thisGamepad.index].direction_secondary.DOWN = thisGamepad.rightStick.y;
            this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
          } else {
            this.players[thisGamepad.index].direction_secondary.UP = 0;
            this.players[thisGamepad.index].direction_secondary.DOWN = 0;
          }
          if (thisGamepad.rightStick.x < -this.axisThreshold) {
            this.players[thisGamepad.index].direction_secondary.LEFT = Math.abs(thisGamepad.rightStick.x);
            this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
          } else if (thisGamepad.rightStick.x > this.axisThreshold) {
            this.players[thisGamepad.index].direction_secondary.RIGHT = thisGamepad.rightStick.x;
            this.players[thisGamepad.index].direction_secondary.TIMESTAMP = this.scene.sys.time.now;
            this.players[thisGamepad.index].setDevice('gamepad');
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

            // If we're faking the d-pad, we won't have the extra buttons so we'll have to manually update the button objects
            if (thisGamepad.fakedpad) {
              if (direction == '') {
                this.players[thisGamepad.index].buttons['B12'] = 0;
                this.players[thisGamepad.index].buttons['B13'] = 0;
                this.players[thisGamepad.index].buttons['B14'] = 0;
                this.players[thisGamepad.index].buttons['B15'] = 0;
                this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B12')] = 0;
                this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B13')] = 0;
                this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B14')] = 0;
                this.players[thisGamepad.index].buttons_mapped[this.getMappedButton(this.players[thisGamepad.index], 'B15')] = 0;
              } else {
                this.players[thisGamepad.index].buttons['B' + this.dpadMappings[direction]] = 1;
                var _mappedButton3 = this.getMappedButton(this.players[thisGamepad.index], 'B' + this.dpadMappings[direction]);
                this.players[thisGamepad.index].buttons_mapped[_mappedButton3] = 1;
              }
            }
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }

    /**
     * Function to run on pointer move.
     * @param {*} pointer - The pointer object
     */
  }, {
    key: "pointerMove",
    value: function pointerMove(pointer, threshold, numDirections) {
      if (this.players.length) {
        threshold = threshold || -1;
        numDirections = numDirections || this.numDirections;
        if (pointer.distance > threshold) {
          var pointerDirection = this.getBearingFromAngle(pointer.angle, numDirections);

          // If we've been given a player position, return bearings and angles
          if (typeof this.players[0] !== 'undefined' && this.players[0].position.x !== 'undefined') {
            var position = this.players[0].position;
            var angleToPointer = Math.round(Phaser.Math.Angle.Between(position.x, position.y, pointer.x, pointer.y) * 100) / 100;
            var angleDegrees = Math.round(Phaser.Math.RadToDeg(angleToPointer) * 100) / 100;
            pointerDirection = this.getBearingFromAngle(angleToPointer, numDirections);
            var pointerAngle = Number(this.mapBearingToDegrees(pointerDirection));
            this.players[0].pointer.BEARING = pointerDirection;
            this.players[0].pointer.ANGLE = angleToPointer;
            this.players[0].pointer.DEGREES = angleDegrees;
            this.players[0].pointer.BEARING_DEGREES = pointerAngle;
            this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;
            this.players[0].pointer.POINTERANGLE = pointerAngle;
            this.players[0].pointer.POINTERDIRECTION = pointerDirection;
            this.players[0].pointer.PLAYERPOS = position;
          }
        }
      }
    }

    /**
     * Function to run on pointer down. Indicates that Mx has been pressed, which should be listened to by the player object
     * @param {*} pointer - The pointer object
     */
  }, {
    key: "pointerDown",
    value: function pointerDown(pointer) {
      if (this.players.length) {
        var action = '';
        this.players[0].setDevice('pointer');
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
        this.eventEmitter.emit('mergedInput', {
          device: 'pointer',
          value: 1,
          player: 0,
          action: action,
          state: 'DOWN'
        });
        this.events.emit('pointer_down', action);
        this.players[0].pointer[action] = 1;

        // Update the last button state
        this.players[0].interaction.pressed.push(action);
        this.players[0].interaction.last = action;
        this.players[0].interaction.lastPressed = action;
        this.players[0].interaction.buffer.push(action);
        this.players[0].pointer.TIMESTAMP = pointer.moveTime;

        // Update timers
        this.players[0].timers[action].pressed = this.scene.sys.time.now;
        this.players[0].timers[action].released = 0;
        this.players[0].timers[action].duration = 0;
      }
    }

    /**
     * Function to run on pointer up. Indicates that Mx has been released, which should be listened to by the player object
     * @param {*} pointer - The pointer object
     */
  }, {
    key: "pointerUp",
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
        this.eventEmitter.emit('mergedInput', {
          device: 'pointer',
          value: 1,
          player: 0,
          action: action,
          state: 'UP'
        });
        this.events.emit('pointer_up', action);
        this.players[0].pointer[action] = 0;
        this.players[0].interaction.released.push(action);
        this.players[0].interaction.lastReleased = action;
        this.players[0].pointer.TIMESTAMP = this.scene.sys.time.now;

        // Update timers
        this.players[0].timers[action].released = this.scene.sys.time.now;
        this.players[0].timers[action].duration = this.players[0].timers[action].released - this.players[0].timers[action].pressed;
        delete this.players[0].timers[action]._tick;
      }
    }

    /**
        * Create new button combo.
     * Combos extend Phaser's keyboard combo and mimic their functionality for gamepad/player combinations.
     * If you requrie a keyboard entered combo, use the native Phaser.Input.Keyboard.KeyboardPlugin.createCombo function.
     *
     * @param {player} player - A player object. If more than one player should be able to execute the combo, you should create multiple buttonCombo instances.
        * @param {(object[])} buttons - An array of buttons that comprise this combo. Use button IDs, mapped buttons or directions, e.g. ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'RC_E', 'RC_S']
        * @param {Phaser.Types.Input.Keyboard.KeyComboConfig} [config] - A Key Combo configuration object.
        */
  }, {
    key: "createButtonCombo",
    value: function createButtonCombo(player, buttons, config) {
      return new ButtonCombo(this, player, buttons, config);
    }

    /**
     * Get the bearing from a given angle
     * @param {float} angle - Angle to use
     * @param {number} numDirections - Number of possible directions (e.g. 4 for N/S/E/W)
     */
  }, {
    key: "getBearingFromAngle",
    value: function getBearingFromAngle(angle, numDirections) {
      numDirections = numDirections || this.numDirections;
      var snap_interval = Phaser.Math.PI2 / numDirections;
      var angleSnap = Phaser.Math.Snap.To(angle, snap_interval);
      var angleSnapDeg = Number(Phaser.Math.RadToDeg(angleSnap).toFixed(2));
      var angleSnapDir = this.bearings[angleSnapDeg];
      return angleSnapDir;
    }

    /**
     * Given a bearing, return a direction object containing boolean flags for the four directions
     * @param {*} bearing
     */
  }, {
    key: "mapBearingToDirections",
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
     * Given a directions object corresponding to analogue input, return an angle
     * @param {*} directions - Direction object containing UP, DOWN, LEFT, RIGHT values
     * @param {number} threshold - Threshold for analog input, e.g. 0.1
     * @param {object} rawStick - Optional raw stick object with x,y values for better precision
     * @returns {number} Calulated angle
     */
  }, {
    key: "mapDirectionsToAngle",
    value: function mapDirectionsToAngle(directions, threshold, rawStick) {
      threshold = threshold || this.axisThreshold;

      // If we have raw stick data, use that for better precision
      if (rawStick && (Math.abs(rawStick.x) > threshold || Math.abs(rawStick.y) > threshold)) {
        var _angle = Math.atan2(rawStick.y, rawStick.x);
        return _angle;
      }

      // Fallback to direction object processing
      // Get the analog values for each direction
      var up = directions.UP || 0;
      var down = directions.DOWN || 0;
      var left = directions.LEFT || 0;
      var right = directions.RIGHT || 0;

      // Apply threshold
      up = Math.abs(up) > threshold ? up : 0;
      down = Math.abs(down) > threshold ? down : 0;
      left = Math.abs(left) > threshold ? left : 0;
      right = Math.abs(right) > threshold ? right : 0;

      // Calculate net direction values
      var x = right - left; // Positive = right, negative = left
      var y = down - up; // Positive = down, negative = up

      // If no input, return null
      if (x === 0 && y === 0) {
        return -1;
      }

      // Calculate angle using atan2 (returns angle in radians from -π to π)
      var angle = Math.atan2(y, x);
      return angle;
    }

    /**
     * Given a directions object, return the applicable bearing
     * @param {*} directions
     * @param {number} threshold - Threshold for analog input, e.g. 0.1
     * @param {number} numDirections - Number of directions to snap to, 4/8/16/32.
     * @returns {string} Bearing, e.g. 'N', 'NE', 'E', etc.
     */
  }, {
    key: "mapDirectionsToBearing",
    value: function mapDirectionsToBearing(directions, threshold, numDirections) {
      threshold = threshold || 0;
      numDirections = numDirections || this.numDirections;

      // Get the analog values for each direction
      var up = directions.UP || 0;
      var down = directions.DOWN || 0;
      var left = directions.LEFT || 0;
      var right = directions.RIGHT || 0;

      // Apply threshold
      up = Math.abs(up) > threshold ? up : 0;
      down = Math.abs(down) > threshold ? down : 0;
      left = Math.abs(left) > threshold ? left : 0;
      right = Math.abs(right) > threshold ? right : 0;

      // Calculate net direction values
      var x = right - left; // Positive = right, negative = left
      var y = down - up; // Positive = down, negative = up

      // If no input, return empty bearing
      if (x === 0 && y === 0) {
        return '';
      }

      // Calculate angle using atan2 (returns angle in radians from -π to π)
      var angle = Math.atan2(y, x);

      // Convert to bearing
      return this.getBearingFromAngle(angle, numDirections);
    }

    /**
     * Given a bearing, return the snapped angle in degrees
     * @param {*} bearing
     */
  }, {
    key: "mapBearingToDegrees",
    value: function mapBearingToDegrees(bearing) {
      var _this4 = this;
      if (bearing != '') {
        return Object.keys(this.bearings).find(function (key) {
          return _this4.bearings[key] === bearing;
        });
      } else {
        return '';
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.shutdown();
      this.scene = undefined;
    }

    /**
     * Return debug object
     */
  }, {
    key: "debug",
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
      var _iterator17 = _createForOfIteratorHelper(this.players),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var thisPlayer = _step17.value;
          debug.players.push({
            'interaction': thisPlayer.interaction,
            'interaction_mapped': thisPlayer.interaction_mapped,
            //				'device': thisPlayer.interaction.device,
            'buttons': thisPlayer.buttons,
            'buttons_mapped': thisPlayer.buttons_mapped,
            'timers': thisPlayer.timers,
            'pointer': thisPlayer.pointer,
            'direction': thisPlayer.direction,
            'direction_secondary': thisPlayer.direction_secondary,
            'keys': thisPlayer.keys
          });
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return debug;
    }
  }]);
}(Phaser.Plugins.ScenePlugin);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=MergedInput.js.map