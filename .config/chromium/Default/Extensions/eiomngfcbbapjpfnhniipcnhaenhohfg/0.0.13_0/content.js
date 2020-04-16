/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

exports.getColorFromVar = getColorFromVar;
exports.parse = parse;
exports.getValFromCache = getValFromCache;
exports.setValToCache = setValToCache;

var _helpers = __webpack_require__(1);

var rgbMatch = /^rgba?\([^\(\)]+\)$/;
var hslMatch = /^hsla?\([^\(\)]+\)$/;
var hexMatch = /^#[0-9a-f]+$/i;
var hslSplitter = /hsla?|\(|\)|\/|,|\s/ig;
var hslRange = [360, 1, 1, 1];
var hslUnits = { '%': 100, 'deg': 360, 'rad': 2 * Math.PI, 'turn': 1 };
var rgbSplitter = /rgba?|\(|\)|\/|,|\s/ig;
var rgbRange = [255, 255, 255, 1];
var rgbUnits = { '%': 100 };
var knownColors = new Map(Object.entries({
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgrey: 0xa9a9a9,
    darkgreen: 0x006400,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    grey: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgrey: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
}));
var systemColors = new Map(Object.entries({
    ActiveBorder: 0x3b99fc,
    ActiveCaption: 0x000000,
    AppWorkspace: 0xaaaaaa,
    Background: 0x6363ce,
    ButtonFace: 0xffffff,
    ButtonHighlight: 0xe9e9e9,
    ButtonShadow: 0x9fa09f,
    ButtonText: 0x000000,
    CaptionText: 0x000000,
    GrayText: 0x7f7f7f,
    Highlight: 0xb2d7ff,
    HighlightText: 0x000000,
    InactiveBorder: 0xffffff,
    InactiveCaption: 0xffffff,
    InactiveCaptionText: 0x000000,
    InfoBackground: 0xfbfcc5,
    InfoText: 0x000000,
    Menu: 0xf6f6f6,
    MenuText: 0xffffff,
    Scrollbar: 0xaaaaaa,
    ThreeDDarkShadow: 0x000000,
    ThreeDFace: 0xc0c0c0,
    ThreeDHighlight: 0xffffff,
    ThreeDLightShadow: 0xffffff,
    ThreeDShadow: 0x000000,
    Window: 0xececec,
    WindowFrame: 0xaaaaaa,
    WindowText: 0x000000,
    '-webkit-focus-ring-color': 0xe59700
}).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key.toLowerCase(), value];
}));

var colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;

function parseRGB($rgb) {
    var _getNumbersFromString = getNumbersFromString($rgb, rgbSplitter, rgbRange, rgbUnits),
        _getNumbersFromString2 = _slicedToArray(_getNumbersFromString, 4),
        r = _getNumbersFromString2[0],
        g = _getNumbersFromString2[1],
        b = _getNumbersFromString2[2],
        _getNumbersFromString3 = _getNumbersFromString2[3],
        a = _getNumbersFromString3 === undefined ? 1 : _getNumbersFromString3;

    return { r: r, g: g, b: b, a: a };
}

function parseHSL($hsl) {
    var _getNumbersFromString4 = getNumbersFromString($hsl, hslSplitter, hslRange, hslUnits),
        _getNumbersFromString5 = _slicedToArray(_getNumbersFromString4, 4),
        h = _getNumbersFromString5[0],
        s = _getNumbersFromString5[1],
        l = _getNumbersFromString5[2],
        _getNumbersFromString6 = _getNumbersFromString5[3],
        a = _getNumbersFromString6 === undefined ? 1 : _getNumbersFromString6;

    return (0, _helpers.hslToRGB)({ h: h, s: s, l: l, a: a });
}

function parseHex($hex) {
    var h = $hex.substring(1);
    switch (h.length) {
        case 3:
        case 4:
            {
                var _map = [0, 1, 2].map(function (i) {
                    return parseInt('' + h[i] + h[i], 16);
                }),
                    _map2 = _slicedToArray(_map, 3),
                    r = _map2[0],
                    g = _map2[1],
                    b = _map2[2];

                var a = h.length === 3 ? 1 : parseInt('' + h[3] + h[3], 16) / 255;
                return { r: r, g: g, b: b, a: a };
            }
        case 6:
        case 8:
            {
                var _map3 = [0, 2, 4].map(function (i) {
                    return parseInt(h.substring(i, i + 2), 16);
                }),
                    _map4 = _slicedToArray(_map3, 3),
                    _r = _map4[0],
                    _g = _map4[1],
                    _b = _map4[2];

                var _a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
                return { r: _r, g: _g, b: _b, a: _a };
            }
    }
    throw new Error('Unable to parse ' + $hex);
}

function getNumbersFromString(str, splitter, range, units) {
    var raw = str.split(splitter).filter(function (x) {
        return x;
    });
    var unitsList = Object.entries(units);
    var numbers = raw.map(function (r) {
        return r.trim();
    }).map(function (r, i) {
        var n = void 0;
        var unit = unitsList.find(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                u = _ref4[0];

            return r.endsWith(u);
        });
        if (unit) {
            n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
        } else {
            n = parseFloat(r);
        }
        if (range[i] > 1) {
            return Math.round(n);
        }
        return n;
    });
    return numbers;
}

function getColorByName($color) {
    var n = knownColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getSystemColor($color) {
    var n = systemColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getColorFromVar(string, stringVar) {
    var cssVar = stringVar.trim();

    try {
        var style = getComputedStyle(document.body);
        var prop = style.getPropertyValue(cssVar);

        var color = string.replace(/var\(.*?\)/, prop).replace(' ', '');

        return color;
    } catch (e) {
        return stringVar;
    }
}

function parse($color) {
    var c = $color.trim().toLowerCase();

    return parseColor(c);
}

function parseColor(c) {

    if (c.match(rgbMatch)) {
        return parseRGB(c);
    }

    if (c.match(hslMatch)) {
        return parseHSL(c);
    }

    if (c.match(hexMatch)) {
        return parseHex(c);
    }

    if (knownColors.has(c)) {
        return getColorByName(c);
    }

    if (systemColors.has(c)) {
        return getSystemColor(c);
    }

    return c;
}

function getValFromCache(cssVar) {
    return localStorage[cssVar] ? JSON.parse(localStorage[cssVar]) : localStorage[cssVar];
}

function setValToCache(cssVar, valCss) {
    localStorage[cssVar] = JSON.stringify(valCss);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.rgbToHSL = rgbToHSL;
exports.rgbToString = rgbToString;
exports.rgbToHexString = rgbToHexString;
exports.hslToRGB = hslToRGB;
exports.getMatches = getMatches;
function rgbToHSL(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b,
        _ref$a = _ref.a,
        a = _ref$a === undefined ? 1 : _ref$a;

    r = r / 255;
    g = g / 255;
    b = b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;

    var l = (max + min) / 2;

    if (c === 0) {
        return { h: 0, s: 0, l: l, a: a };
    }

    var h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
    if (h < 0) {
        h += 360;
    }

    var s = c / (1 - Math.abs(2 * l - 1));

    return { h: h, s: s, l: l, a: a };
}

function rgbToString(rgb) {
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b,
        a = rgb.a;

    if (a != null && a < 1) {
        return 'rgba(' + toFixed(r) + ', ' + toFixed(g) + ', ' + toFixed(b) + ', ' + toFixed(a, 2) + ')';
    }
    return 'rgb(' + toFixed(r) + ', ' + toFixed(g) + ', ' + toFixed(b) + ')';
}

function rgbToHexString(_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b,
        a = _ref2.a;

    return '#' + (a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map(function (x) {
        return '' + (x < 16 ? '0' : '') + x.toString(16);
    }).join('');
}

function hslToRGB(_ref3) {
    var h = _ref3.h,
        s = _ref3.s,
        l = _ref3.l,
        _ref3$a = _ref3.a,
        a = _ref3$a === undefined ? 1 : _ref3$a;

    if (s === 0) {
        var _map = [l, l, l].map(function (x) {
            return Math.round(x * 255);
        }),
            _map2 = _slicedToArray(_map, 3),
            _r = _map2[0],
            _b = _map2[1],
            _g = _map2[2];

        return { r: _r, g: _g, b: _b, a: a };
    }

    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(h / 60 % 2 - 1));
    var m = l - c / 2;

    var _map3 = (h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map(function (n) {
        return Math.round((n + m) * 255);
    }),
        _map4 = _slicedToArray(_map3, 3),
        r = _map4[0],
        g = _map4[1],
        b = _map4[2];

    return { r: r, g: g, b: b, a: a };
}

function getMatches(regex, input) {
    var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var matches = [];
    var m = void 0;
    while (m = regex.exec(input)) {
        matches.push(m[group]);
    }
    return matches;
}

function toFixed(n) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var fixed = n.toFixed(digits);
    if (digits === 0) {
        return fixed;
    }
    var dot = fixed.indexOf('.');
    if (dot >= 0) {
        var zerosMatch = fixed.match(/0+$/);
        if (zerosMatch) {
            if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
            }
            return fixed.substring(0, zerosMatch.index);
        }
    }
    return fixed;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colorMatch = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.modifyBgHSL = modifyBgHSL;
exports.modifyFgHSL = modifyFgHSL;
exports.modifyBorderHSL = modifyBorderHSL;
exports.modifyColor = modifyColor;
exports.findAndReplaceColor = findAndReplaceColor;

var _math = __webpack_require__(5);

var _helpers = __webpack_require__(1);

var _parsers = __webpack_require__(0);

var filter = {
    mode: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    useFont: false,
    fontFamily: "Hiragino Kaku Gothic Pro",
    textStroke: 0,
    stylesheet: ""
};

var colorMatch = exports.colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;

function modifyBgHSL(_ref) {
    var h = _ref.h,
        s = _ref.s,
        l = _ref.l,
        a = _ref.a;

    var lMin = 0.1;
    var lMaxS0 = 0.25;
    var lMaxS1 = 0.4;
    var sNeutralLim = 0.12;
    var lNeutralLight = 0.8;
    var sColored = 0.05;
    var hColored = 205;
    var hBlue0 = 200;
    var hBlue1 = 280;

    var lMax = (0, _math.scale)(s, 0, 1, lMaxS0, lMaxS1);
    var lx = l < lMax ? l : l < 0.5 ? lMax : (0, _math.scale)(l, 0.5, 1, lMax, lMin);

    var isNeutral = l >= lNeutralLight && h > hBlue0 && h < hBlue1 || s < sNeutralLim;
    var hx = h;
    var sx = s;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a: a };
}

function modifyFgHSL(_ref2) {
    var h = _ref2.h,
        s = _ref2.s,
        l = _ref2.l,
        a = _ref2.a;

    var lMax = 0.9;
    var lMinS0 = 0.7;
    var lMinS1 = 0.6;
    var sNeutralLim = 0.24;
    var lNeutralDark = 0.2;
    var sColored = 0.10;
    var hColored = 40;
    var hBlue0 = 205;
    var hBlue1 = 245;
    var hBlueMax = 220;
    var lBlueMin = 0.7;

    var isBlue = h > hBlue0 && h <= hBlue1;

    var lMin = (0, _math.scale)(s, 0, 1, isBlue ? (0, _math.scale)(h, hBlue0, hBlue1, lMinS0, lBlueMin) : lMinS0, lMinS1);
    var lx = l < 0.5 ? (0, _math.scale)(l, 0, 0.5, lMax, lMin) : l < lMin ? lMin : l;
    var hx = h;
    var sx = s;
    if (isBlue) {
        hx = (0, _math.scale)(hx, hBlue0, hBlue1, hBlue0, hBlueMax);
    }
    var isNeutral = l < lNeutralDark || s < sNeutralLim;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a: a };
}

function modifyBorderHSL(_ref3) {
    var h = _ref3.h,
        s = _ref3.s,
        l = _ref3.l,
        a = _ref3.a;

    var lMinS0 = 0.2;
    var lMinS1 = 0.3;
    var lMaxS0 = 0.4;
    var lMaxS1 = 0.5;

    var lMin = (0, _math.scale)(s, 0, 1, lMinS0, lMinS1);
    var lMax = (0, _math.scale)(s, 0, 1, lMaxS0, lMaxS1);
    var lx = (0, _math.scale)(l, 0, 1, lMax, lMin);

    return { h: h, s: s, l: lx, a: a };
}

function modifyColor(rgb, modifyHSL) {

    if (rgb == '0px' || rgb == '0px 0px' || rgb == '0 0' || rgb == 'none') {
        return rgb;
    }

    var hsl = (0, _helpers.rgbToHSL)(rgb);
    var modified = modifyHSL(hsl);

    var _hslToRGB = (0, _helpers.hslToRGB)(modified),
        r = _hslToRGB.r,
        g = _hslToRGB.g,
        b = _hslToRGB.b,
        a = _hslToRGB.a;

    var matrix = (0, _math.createFilterMatrix)(filter);

    var _applyColorMatrix = (0, _math.applyColorMatrix)([r, g, b], matrix),
        _applyColorMatrix2 = _slicedToArray(_applyColorMatrix, 3),
        rf = _applyColorMatrix2[0],
        gf = _applyColorMatrix2[1],
        bf = _applyColorMatrix2[2];

    var color = a === 1 ? (0, _helpers.rgbToHexString)({ r: rf, g: gf, b: bf }) : (0, _helpers.rgbToString)({ r: rf, g: gf, b: bf, a: a });

    return color.trim();
}

function findAndReplaceColor(value, modifier) {

    try {

        if (value == '0px' || value == '0px 0px' || value == '0 0' || value == 'none') {
            return value;
        }

        var matchess = value.match(/var\(.*?--(.+?)(?=\)|,).*?\)/g);

        if (matchess) {

            Array.from(matchess, function (matches) {

                var matcher = matches.match(/--(.+?)(?=\)|,)/g);

                Array.from(matcher, function (match) {

                    var cssVar = match.trim();
                    var reserve = value.replace(cssVar, '').match(/var\(.*?\)/);

                    if (reserve && reserve[0] !== "var()" && reserve[0] !== "var( )") {

                        var newReserve = reserve[0].replace('var(', '').replace(')', '').replace(/^,/, '');
                        var color = value.replace(/var\(.*?\)/, newReserve);

                        if (color) {
                            value = color;
                        }
                    } else {

                        var newMatch = value.match(/--(.+?)(?=\)|,)/);

                        if (newMatch) {
                            var valCss = (0, _parsers.getValFromCache)(newMatch[0]);

                            if (valCss) {
                                value = valCss;
                            } else {
                                var _valCss = (0, _parsers.getColorFromVar)(value, newMatch[0]);

                                if (_valCss) {
                                    (0, _parsers.setValToCache)(newMatch[0], _valCss);
                                    value = _valCss;
                                }
                            }
                        }
                    }
                });
            });
        }

        var new_value = value.replace(/url\(.*?\)/g, '');

        var colors = new_value.match(colorMatch);

        if (colors) {

            Array.from(colors).forEach(function (color) {
                var rgb = (0, _parsers.parse)(color);
                var modifyCol = modifyColor(rgb, modifier);

                value = value.replace(color, modifyCol);
            });
        }

        return value;
    } catch (e) {
        var modifyCol = modifyColor(value, modifier);

        return modifyCol;
    }
}

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modify = __webpack_require__(2);

var _parsers = __webpack_require__(0);

var currentLoadedStyles = [];
var styleDark = Object;
var firstTemporaryStyle = Object;
var darkSheet = null;
var lastDate = 0;
var stylenodes = ["STYLE", "LINK"];
var stringStyle = 'html, body, input, textarea, select {color: #e8e6e3; background: #181a1b;} input[type="text"], textarea, select {color: #e8e6e3!important; background: #181a1b!important;} ';
var cssImportRegex = /@import (url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
var unparsableColors = ["inherit", "transparent", "initial", "currentcolor", "none"];

chrome.storage.local.get(['active'], function (item) {
    if (item.active) {
        activate();
    }
});

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {

    if (!msg.active) {
        styleDark = document.getElementById('dark-theme');
        styleDark.remove();
        currentLoadedStyles = [];
        stringStyle = 'html, body, input, textarea, select {color: #e8e6e3; background: #181a1b;} input[type="text"], textarea, select {color: #e8e6e3!important; background: #181a1b!important;} ';
        localStorage['active'] = false;
    } else {
        createStyleDark();
        activate();
        load();
        additionaLoad(document);
        localStorage['active'] = true;
    }
});

function activate() {
    createTemporaryStyle();
    createStyleDark();

    var mutationObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                var nodeName = node.nodeName.toUpperCase();

                if (stylenodes.indexOf(nodeName) !== -1) {

                    try {

                        if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                            pushCurrentLoadedStyles(node.sheet);

                            if (node instanceof HTMLStyleElement) {
                                subscribeToSheetChanges(node.sheet, node.sheet.cssRules.length);
                            }

                            interval(node.sheet.cssRules);
                            styleDark.innerText = stringStyle;
                        } else if (currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                            node.addEventListener('load', function () {
                                try {

                                    if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1) {

                                        pushCurrentLoadedStyles(node.sheet);
                                        interval(node.sheet.cssRules);
                                        styleDark.innerText = stringStyle;
                                    }
                                } catch (e) {

                                    if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1) {
                                        pushCurrentLoadedStyles(node.sheet);
                                        loadCssFile(node.sheet.href);
                                    }
                                }
                            });
                        }
                    } catch (e) {
                        if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {
                            pushCurrentLoadedStyles(node.sheet);
                            loadCssFile(node.sheet.href);
                        }
                    }
                }

                if (node.nodeType == 1) {
                    lastDate = lastDate + 1;
                    var ity = setTimeout(function () {
                        lastDate = lastDate - 1;
                        if (lastDate == 0) {
                            additionaLoad(document);
                            styleDark.innerText = stringStyle;
                            clearInterval(ity);
                        }
                    }, 250);
                }
            });
        });
    });

    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    document.addEventListener("DOMContentLoaded", function () {

        for (var j = 0; j < document.styleSheets.length; ++j) {
            handlerSheet(document.styleSheets[j]);
        }

        loadImport();
        additionaLoad(document);
        styleDark.innerText = stringStyle;

        setTimeout(function () {
            if (firstTemporaryStyle) {
                firstTemporaryStyle.remove();
            }
        }, 2000);
    });

    window.addEventListener("load", load);
}

function load() {

    for (var j = 0; j < document.styleSheets.length; ++j) {
        handlerSheet(document.styleSheets[j]);
    }

    loadImport();
    setTimeout(function () {
        additionaLoad(document);
    }, 1000);

    setTimeout(function () {
        (0, _parsers.setValToCache)('old-stylesheet-string-mode', stringStyle);
    }, 2000);

    styleDark.innerText = stringStyle;
}

function handlerSheet(sheet) {
    try {
        if (sheet.cssRules && sheet.cssRules.length > 0 && currentLoadedStyles.indexOf(sheet) == -1 && sheet.ownerNode.id != 'dark-theme' && sheet.ownerNode.id != 'temporary-dark-theme') {
            pushCurrentLoadedStyles(sheet);

            if (sheet.ownerNode instanceof HTMLStyleElement) {
                subscribeToSheetChanges(sheet, sheet.cssRules.length);
            }

            interval(sheet.cssRules);
        }
    } catch (e) {
        if (sheet.href && currentLoadedStyles.indexOf(sheet) == -1) {
            pushCurrentLoadedStyles(sheet);
            loadCssFile(sheet.href);
        }
    }
}

function interval(rules) {

    if (rules && rules.length) {

        for (var k = 0; k < rules.length; k++) {

            if (rules[k] instanceof CSSMediaRule && rules[k].type == 4 && rules[k].conditionText == 'not all') {} else {
                try {
                    if (rules[k] instanceof CSSImportRule && rules[k].styleSheet && rules[k].styleSheet.cssRules) {
                        interval(rules[k].styleSheet.cssRules);
                    } else {
                        addNewRule(rules[k]);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
}

function subscribeToSheetChanges(element, length) {

    var callb = function callb() {
        if (element.cssRules.length != length) {

            for (var k = length - 1; k < element.cssRules.length - 1; k++) {
                addNewRule(element.cssRules[k]);
            }
            length = element.cssRules.length;
        }
        requestAnimationFrame(callb);
    };

    callb();
}

function loadImport() {

    var docs = document.querySelectorAll('link[rel="import"]');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = docs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            var doc = i.import;
            for (var j = 0; j < doc.styleSheets.length; ++j) {
                try {
                    if (doc.styleSheets[j].cssRules && doc.styleSheets[j].cssRules.length > 0 && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1 && doc.styleSheets[j].ownerNode.id != 'dark-theme' && doc.styleSheets[j].ownerNode.id != 'temporary-dark-theme') {
                        pushCurrentLoadedStyles(doc.styleSheets[j]);

                        for (var k = 0; k < doc.styleSheets[j].cssRules.length; k++) {
                            addNewRule(doc.styleSheets[j].cssRules[k]);
                        }
                    }
                } catch (e) {
                    if (doc.styleSheets[j].href && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1) {
                        pushCurrentLoadedStyles(doc.styleSheets[j]);
                        loadCssFile(doc.styleSheets[j].href);
                    }
                }
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

    styleDark.innerText = stringStyle;
}

function additionaLoad(dom) {

    var svgs = dom.getElementsByTagName("svg");

    for (var i = 0; i < svgs.length; i++) {
        var fill = svgs[i].getAttribute("fill");
        if (fill) {
            var currentStyle = (0, _parsers.parse)(fill);
            var finishStyle = (0, _modify.modifyColor)(currentStyle, _modify.modifyFgHSL);
            svgs[i].setAttribute("fill", finishStyle);
        }
    }

    var bgcolors = dom.querySelectorAll("[bgcolor]");

    for (var _i = 0; _i < bgcolors.length; _i++) {
        var bgcolor = bgcolors[_i].getAttribute("bgcolor");
        if (bgcolor) {
            var _currentStyle = (0, _parsers.parse)(bgcolor);
            var _finishStyle = (0, _modify.modifyColor)(_currentStyle, _modify.modifyBgHSL);
            bgcolors[_i].setAttribute("bgcolor", _finishStyle);
        }
    }

    var colors = dom.querySelectorAll("[color]");

    for (var _i2 = 0; _i2 < colors.length; _i2++) {
        var color = colors[_i2].getAttribute("bgcolor");
        if (color) {
            var _currentStyle2 = (0, _parsers.parse)(color);
            var _finishStyle2 = (0, _modify.modifyColor)(_currentStyle2, _modify.modifyFgHSL);
            colors[_i2].setAttribute("color", _finishStyle2);
        }
    }

    var styles = dom.querySelectorAll("[style]");

    for (var _i3 = 0; _i3 < styles.length; _i3++) {
        addNewStyle(styles[_i3].style, styles[_i3]);
    }
}

function addNewStyle(sty, st) {

    if (sty && sty.cssText.indexOf('background') !== -1) {

        if (sty.backgroundImage && sty.backgroundImage.indexOf('data:image/png') == -1) {

            if (sty.backgroundRepeatX == 'repeat' || sty.backgroundRepeatY == 'repeat' || sty.backgroundRepeat == 'repeat') {

                if (sty.backgroundImage.match(_modify.colorMatch)) {
                    var start = sty.backgroundImage.trim();
                    var finish = (0, _modify.findAndReplaceColor)(start, _modify.modifyBgHSL);

                    if (start != finish) {
                        if (sty.getPropertyPriority('background-image') || sty.background) {
                            addStyle(finish + '!important', 'background-image', st);
                        } else {
                            addStyle(finish, 'background-image', st);
                        }
                    }
                } else {
                    addStyle('#181a1b!important', 'background', st);
                }
            } else {

                var _start = sty.backgroundImage.trim();
                var _finish = (0, _modify.findAndReplaceColor)(_start, _modify.modifyBgHSL);

                if (_start != _finish) {
                    if (sty.getPropertyPriority('background-image') || sty.background) {
                        addStyle(_finish + '!important', 'background-image', st);
                    } else {
                        addStyle(_finish, 'background-image', st);
                    }
                } else if (_finish == 'none') {
                    addStyle(_finish, 'background-image', st);
                } else if (sty.backgroundImage.indexOf('.gif') !== -1) {
                    addStyle('none', 'background-image', st);
                }
            }
        }

        if (sty.backgroundColor) {

            var _start2 = sty.backgroundColor.trim();

            if (_start2) {
                var _finish2 = (0, _modify.findAndReplaceColor)(_start2, _modify.modifyBgHSL);
                if (_start2 != _finish2) {

                    if (sty.backgroundImage && sty.backgroundImage.indexOf('url(') !== -1 && sty.backgroundImage.indexOf('.png') == -1 && sty.backgroundImage.indexOf('data:image/png') == -1) {
                        if (sty.getPropertyPriority('background-color') || sty.background) {
                            addStyle(_finish2 + '!important', 'background', st);
                        } else {
                            addStyle(_finish2, 'background', st);
                        }
                    } else if (sty.getPropertyPriority('background-color') || sty.background) {
                        addStyle(_finish2 + '!important', 'background-color', st);
                    } else {
                        addStyle(_finish2, 'background-color', st);
                    }
                }
            }
        }

        if (sty.background && (sty.backgroundImage == '' || sty.backgroundImage == 'initial') && (sty.backgroundColor == '' || sty.backgroundColor == 'initial')) {

            if (sty.background.indexOf('url(') !== -1) {

                var sed = sty.background.match(_modify.colorMatch);
                if (sed) {
                    var col = (0, _parsers.parse)(sed[0]);
                    var color = (0, _modify.modifyColor)(col, _modify.modifyBgHSL);
                    addStyle(color + '!important', 'background', st);
                } else {
                    addStyle('#181a1b!important', 'background', st);
                }
            } else {

                var _start3 = sty.background.trim();
                if (_start3) {
                    var _finish3 = (0, _modify.findAndReplaceColor)(_start3, _modify.modifyBgHSL);
                    if (_start3 != _finish3) {
                        if (sty.getPropertyPriority('background')) {
                            addStyle(_finish3 + '!important', 'background', st);
                        } else {
                            addStyle(_finish3, 'background', st);
                        }
                    }
                }
            }
        } else {
            var _start4 = sty.background.trim();
            if (_start4) {
                var _finish4 = (0, _modify.findAndReplaceColor)(_start4, _modify.modifyBgHSL);
                if (_start4 != _finish4) {
                    if (sty.getPropertyPriority('background')) {
                        addStyle(_finish4 + '!important', 'background', st);
                    } else {
                        addStyle(_finish4, 'background', st);
                    }
                }
            }
        }
    }

    if (sty && sty.cssText.indexOf('border') !== -1) {

        if (sty.borderColor && unparsableColors.indexOf(sty.borderColor) == -1) {

            var _start5 = sty.borderColor.trim();

            if (_start5) {
                var _finish5 = (0, _modify.findAndReplaceColor)(_start5, _modify.modifyBorderHSL);
                if (_start5 != _finish5) {

                    if (sty.getPropertyPriority('border-color')) {
                        addStyle(_finish5 + '!important', 'border-color', st);
                    } else {
                        addStyle(_finish5, 'border-color', st);
                    }
                }
            }
        }

        if (sty.border && unparsableColors.indexOf(sty.border) == -1) {

            var _start6 = sty.border.trim();

            if (_start6) {
                var _finish6 = (0, _modify.findAndReplaceColor)(_start6, _modify.modifyBorderHSL);
                if (_start6 != _finish6) {

                    if (sty.getPropertyPriority('border')) {
                        addStyle(_finish6 + '!important', 'border', st);
                    } else {
                        addStyle(_finish6, 'border', st);
                    }
                }
            }
        }

        if (sty.borderBottom && unparsableColors.indexOf(sty.borderBottom) == -1) {

            var _start7 = sty.borderBottom.trim();

            if (_start7) {
                var _finish7 = (0, _modify.findAndReplaceColor)(_start7, _modify.modifyBorderHSL);
                if (_start7 != _finish7) {

                    if (sty.getPropertyPriority('border-bottom')) {
                        addStyle(_finish7 + '!important', 'border-bottom', st);
                    } else {
                        addStyle(_finish7, 'border-bottom', st);
                    }
                }
            }
        }

        if (sty.borderTop && unparsableColors.indexOf(sty.borderTop) == -1) {

            var _start8 = sty.borderTop.trim();

            if (_start8) {
                var _finish8 = (0, _modify.findAndReplaceColor)(_start8, _modify.modifyBorderHSL);
                if (_start8 != _finish8) {

                    if (sty.getPropertyPriority('border-top')) {
                        addStyle(_finish8 + '!important', 'border-top', st);
                    } else {
                        addStyle(_finish8, 'border-top', st);
                    }
                }
            }
        }

        if (sty.borderLeft && unparsableColors.indexOf(sty.borderLeft) == -1) {

            var _start9 = sty.borderLeft.trim();

            if (_start9) {
                var _finish9 = (0, _modify.findAndReplaceColor)(_start9, _modify.modifyBorderHSL);
                if (_start9 != _finish9) {

                    if (sty.getPropertyPriority('border-left')) {
                        addStyle(_finish9 + '!important', 'border-left', st);
                    } else {
                        addStyle(_finish9, 'border-left', st);
                    }
                }
            }
        }

        if (sty.borderRight && unparsableColors.indexOf(sty.borderRight) == -1) {

            var _start10 = sty.borderRight.trim();

            if (_start10) {
                var _finish10 = (0, _modify.findAndReplaceColor)(_start10, _modify.modifyBorderHSL);
                if (_start10 != _finish10) {

                    if (sty.getPropertyPriority('border-right')) {
                        addStyle(_finish10 + '!important', 'border-right', st);
                    } else {
                        addStyle(_finish10, 'border-right', st);
                    }
                }
            }
        }
    }

    if (sty && sty.outline && unparsableColors.indexOf(sty.outline) == -1) {

        var _start11 = sty.outline.trim();

        if (_start11) {
            var _finish11 = (0, _modify.findAndReplaceColor)(_start11, _modify.modifyBorderHSL);
            if (_start11 != _finish11) {

                if (sty.getPropertyPriority('outline')) {
                    addStyle(_finish11 + '!important', 'outline', st);
                } else {
                    addStyle(_finish11, 'outline', st);
                }
            }
        }
    }

    if (sty && sty.boxShadow && unparsableColors.indexOf(sty.boxShadow) == -1) {

        var _start12 = sty.boxShadow.trim();

        if (_start12) {
            var _finish12 = (0, _modify.findAndReplaceColor)(_start12, _modify.modifyBorderHSL);
            if (_start12 != _finish12) {

                if (sty.getPropertyPriority('box-shadow')) {
                    addStyle(_finish12 + '!important', 'box-shadow', st);
                } else {
                    addStyle(_finish12, 'box-shadow', st);
                }
            }
        }
    }

    if (sty && sty.textShadow && unparsableColors.indexOf(sty.textShadow) == -1) {

        var _start13 = sty.textShadow.trim();

        if (_start13) {
            var _finish13 = (0, _modify.findAndReplaceColor)(_start13, _modify.modifyBorderHSL);
            if (_start13 != _finish13) {
                if (sty.getPropertyPriority('text-shadow')) {
                    addStyle(_finish13 + '!important', 'text-shadow', st);
                } else {
                    addStyle(_finish13, 'text-shadow', st);
                }
            }
        }
    }

    if (sty && sty.color && unparsableColors.indexOf(sty.color) == -1) {

        var _start14 = sty.color.trim();

        if (_start14 && st != '*, ::before, ::after') {
            var _finish14 = (0, _modify.findAndReplaceColor)(_start14, _modify.modifyFgHSL);
            if (_start14 != _finish14) {
                if (sty.getPropertyPriority('color')) {
                    addStyle(_finish14 + '!important', 'color', st);
                } else {
                    addStyle(_finish14, 'color', st);
                }
            }
        }
    }
}

function addNewRule(rule) {

    if (rule && rule.selectorText == undefined && rule.cssRules) {
        for (var kk = 0; kk < rule.cssRules.length; kk++) {

            var sty = rule.cssRules[kk].style;
            var st = rule.cssRules[kk].selectorText;

            addNewStyle(sty, st);
        }
    } else if (rule) {

        var _sty = rule.style;
        var _st = rule.selectorText;

        addNewStyle(_sty, _st);
    }
}

function addStyle(finishStyle, styleName, st) {

    if (typeof st === 'string') {
        stringStyle = stringStyle + (' ' + st + ' {' + styleName + ':' + finishStyle + ';}');
    } else if (st) {
        st.style[styleName] = finishStyle;
    }
}

function createTemporaryStyle() {
    var oldString = (0, _parsers.getValFromCache)('old-stylesheet-string-mode');
    var stringStyle = 'html, body, input, textarea, select {color: #e8e6e3; background: #181a1b;} body * {color: #e8e6e3; background-color: #181a1b;} input[type="text"], textarea, select {color: #e8e6e3!important; background: #181a1b!important;} ';

    if (document.body) {
        firstTemporaryStyle = document.createElement('style');
        firstTemporaryStyle.id = 'temporary-dark-theme';
        document.documentElement.appendChild(firstTemporaryStyle);
        firstTemporaryStyle.innerText = stringStyle + oldString;
    } else {
        var ii = setInterval(function () {
            if (document.body) {
                firstTemporaryStyle = document.createElement('style');
                firstTemporaryStyle.id = 'temporary-dark-theme';
                document.documentElement.appendChild(firstTemporaryStyle);
                firstTemporaryStyle.innerText = stringStyle + oldString;
                clearInterval(ii);
            }
        });
    }
}

function createStyleDark() {

    if (document.body) {
        styleDark = document.createElement('style');
        styleDark.id = 'dark-theme';
        document.documentElement.appendChild(styleDark);
        darkSheet = styleDark.sheet;
    } else {

        styleDark = document.createElement('style');
        styleDark.id = 'dark-theme';
        document.documentElement.appendChild(styleDark);
        darkSheet = styleDark.sheet;

        var ii = setInterval(function () {
            if (document.body) {
                document.documentElement.appendChild(styleDark);
                clearInterval(ii);
            }
        });
    }
}

function loadCssFile(href) {

    var request = async function request() {
        var response = await fetch(href);
        var data = await response.text();

        data = data.trim().replace(cssImportRegex, '');

        var newStyleSync = createCssSync(href);
        newStyleSync.textContent = data;

        return newStyleSync;
    };

    (async function () {
        var newStyleSync = await request();

        try {
            newStyleSync.remove();
        } catch (e) {
            console.log('Error load', e);
        }
    })();
}

function pushCurrentLoadedStyles(item) {
    currentLoadedStyles.push(item);
    var styleTags = document.getElementsByTagName('style');
    var styleLinks = document.querySelectorAll("[rel='stylesheet']");
    var count = parseInt(styleTags.length) + parseInt(styleLinks.length);

    if (currentLoadedStyles.length >= count - 2 && (document.readyState === 'interactive' || document.readyState === 'complete')) {

        if (window == window.top) {
            (0, _parsers.setValToCache)('old-stylesheet-string-mode', stringStyle);
        }

        // if(firstTemporaryStyle){
        //     firstTemporaryStyle.remove();
        // }
    }
}

function createCssSync(href) {
    var styleSync = document.createElement('style');
    styleSync.id = href;
    document.head.appendChild(styleSync);
    return styleSync;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.scale = scale;
exports.createFilterMatrix = createFilterMatrix;
exports.multiplyMatrices = multiplyMatrices;
exports.applyColorMatrix = applyColorMatrix;
exports.clamp = clamp;
var Matrix = {
    identity: function identity() {
        return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    invertNHue: function invertNHue() {
        return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    brightness: function brightness(v) {
        return [[v, 0, 0, 0, 0], [0, v, 0, 0, 0], [0, 0, v, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    contrast: function contrast(v) {
        var t = (1 - v) / 2;
        return [[v, 0, 0, 0, t], [0, v, 0, 0, t], [0, 0, v, 0, t], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    sepia: function sepia(v) {
        return [[0.393 + 0.607 * (1 - v), 0.769 - 0.769 * (1 - v), 0.189 - 0.189 * (1 - v), 0, 0], [0.349 - 0.349 * (1 - v), 0.686 + 0.314 * (1 - v), 0.168 - 0.168 * (1 - v), 0, 0], [0.272 - 0.272 * (1 - v), 0.534 - 0.534 * (1 - v), 0.131 + 0.869 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    grayscale: function grayscale(v) {
        return [[0.2126 + 0.7874 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 + 0.2848 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 + 0.9278 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    }
};

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

function createFilterMatrix(config) {
    var m = Matrix.identity();
    if (config.sepia !== 0) {
        m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
    }
    if (config.grayscale !== 0) {
        m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
    }
    if (config.contrast !== 100) {
        m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
    }
    if (config.brightness !== 100) {
        m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
    }
    if (config.mode === 1) {
        m = multiplyMatrices(m, Matrix.invertNHue());
    }
    return m;
}

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function applyColorMatrix(_ref, matrix) {
    var _ref2 = _slicedToArray(_ref, 3),
        r = _ref2[0],
        g = _ref2[1],
        b = _ref2[2];

    var rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
    var result = multiplyMatrices(matrix, rgb);
    return [0, 1, 2].map(function (i) {
        return clamp(Math.round(result[i][0] * 255), 0, 255);
    });
}

function clamp(x, min, max) {
    return Math.min(max, Math.max(min, x));
}

/***/ })
/******/ ]);