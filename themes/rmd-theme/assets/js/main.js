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
/******/ ({

/***/ "./themes/rmd-theme/src/js/back-to-top.js":
/*!************************************************!*\
  !*** ./themes/rmd-theme/src/js/back-to-top.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function() {\n  const backToTopButton = document.getElementById('back-to-top');\n  const toggleToTop = () => {\n    if ( window.scrollY >= 150 ) backToTopButton.classList.remove('back-to-top--hidden')\n    else backToTopButton.classList.add('back-to-top--hidden')\n  }\n\n  backToTopButton.onclick = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})\n  window.addEventListener( 'scroll', toggleToTop, { passive: true })\n})());\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/back-to-top.js?");

/***/ }),

/***/ "./themes/rmd-theme/src/js/contact-form.js":
/*!*************************************************!*\
  !*** ./themes/rmd-theme/src/js/contact-form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function() {\n  let cForm = document.forms.cForm;\n  if (!cForm) return;\n    \n  console.log('We are on page with Contact form');\n})());\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/contact-form.js?");

/***/ }),

/***/ "./themes/rmd-theme/src/js/cookie-alert.js":
/*!*************************************************!*\
  !*** ./themes/rmd-theme/src/js/cookie-alert.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function() {\n\n  const onLoadDelay = 3 // Cookie alert delay\n  const rmdCookie = {\n    name: 'rmdCookie',\n    value: '1', // 1 — analitycs, 2 - analytics + marketing\n    maxAge: 180 // days\n  };\n  const cookieCounter = document.querySelector('#cookie-counter');\n  const cookieAlert = document.querySelector('#cookie-alert');\n  const cookieAlertBtn = document.querySelector('#cookie-btn');\n  \n  const rmdCookieExist = document.cookie.split(';').filter(item => item.includes(`${rmdCookie.name}=${rmdCookie.value}`)).length;\n\n  const writeCookie = (name, value,  maxAge = 0) => {\n    document.cookie = `${name}=${value}; max-age=${maxAge && 60 * 60 * 24 * maxAge}; path=/;` // secure; samesite\"`;\n  }\n\n  const setCookieOk = event => {\n    cookieAlert.removeAttribute('style');\n    writeCookie(rmdCookie.name, rmdCookie.value, rmdCookie.maxAge);    \n    console.log(\"tevent\", event)\n    event && location.reload()\n  }\n  \n  const showAlert = (delay = 10 ) => {\n    console.log(`Cookie alert height ${cookieAlert.offsetHeight} px!`);\n    cookieAlert.style.bottom = -2 * cookieAlert.offsetHeight + 'px';\n    \n    cookieCounter.classList.remove('cookie-counter--hidden')\n    let cur = delay;\n    const countDown = () => {\n      if (cur > 0) {\n        cookieCounter.innerHTML = cur;\n        setTimeout(countDown, 1000);\n      }\n      else {\n        cookieCounter.classList.add('cookie-counter--hidden')\n        cookieAlert.style.bottom = '-1px' // Show cookie alert\n      }\n\n      cur--;\n    }\n  \n    setTimeout(countDown, 1000);\n  }\n  \n  if (!rmdCookieExist) {\n    cookieAlertBtn.addEventListener('click', setCookieOk, false);\n    window.onload = showAlert(onLoadDelay);\n  } else {\n    setCookieOk();\n  }\n\n})());\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/cookie-alert.js?");

/***/ }),

/***/ "./themes/rmd-theme/src/js/dark-mode.js":
/*!**********************************************!*\
  !*** ./themes/rmd-theme/src/js/dark-mode.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function() {\n\n  let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');\n  \n  const setColorScheme = e => {\n    if (e.matches) {\n      // Dark\n      console.log('Dark mode')\n    } else {\n      // Light\n      console.log('Light mode')\n    }\n  }\n  \n  setColorScheme(colorSchemeQueryList);\n  colorSchemeQueryList.addListener(setColorScheme);\n  \n})());\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/dark-mode.js?");

/***/ }),

/***/ "./themes/rmd-theme/src/js/nav-toggler.js":
/*!************************************************!*\
  !*** ./themes/rmd-theme/src/js/nav-toggler.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  const navOpenButton = document.getElementById('nav-toggle-open');\n  const navCloseButton = document.getElementById('nav-toggle-close');\n  const navWrapper = document.getElementById('nav-wrapper');\n\n  navOpenButton.addEventListener(\n    'click',\n    () => {\n      navWrapper.classList.remove('top-menu--close')\n    }, {\n      passive: true\n    }\n  );\n\n  navCloseButton.addEventListener(\n    'click',\n    () => {\n      navWrapper.classList.add('top-menu--close')\n    }, {\n      passive: true\n    }\n  );\n})());\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/nav-toggler.js?");

/***/ }),

/***/ "./themes/rmd-theme/src/js/start.js":
/*!******************************************!*\
  !*** ./themes/rmd-theme/src/js/start.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_toggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-toggler */ \"./themes/rmd-theme/src/js/nav-toggler.js\");\n/* harmony import */ var _back_to_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back-to-top */ \"./themes/rmd-theme/src/js/back-to-top.js\");\n/* harmony import */ var _cookie_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie-alert */ \"./themes/rmd-theme/src/js/cookie-alert.js\");\n/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form */ \"./themes/rmd-theme/src/js/contact-form.js\");\n/* harmony import */ var _dark_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dark-mode */ \"./themes/rmd-theme/src/js/dark-mode.js\");\n// <== === nav toggler === ==>\n\n\n// <== === back to top === ==>\n\n\n// <== === Cookie alert === ==>\n\n\n// <== === Contact form === ==>\n\n\n// <== === Dark made === ==>\n\n\n// <== === current active menu === ==>\n\n// const lastActive = document.querySelectorAll('.active')\n// lastActive.length && console.log(\"__Active: \", lastActive[lastActive.length - 1].textContent)\n\n//# sourceURL=webpack:///./themes/rmd-theme/src/js/start.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./themes/rmd-theme/src/js/start.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/kolya_ya/Hugo-One/RMD/rmd-bau/themes/rmd-theme/src/js/start.js */\"./themes/rmd-theme/src/js/start.js\");\n\n\n//# sourceURL=webpack:///multi_./themes/rmd-theme/src/js/start.js?");

/***/ })

/******/ });