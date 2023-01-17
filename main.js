/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weatherApp/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weatherApp/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weatherApp/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weatherApp/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/getlocation.js":
/*!****************************!*\
  !*** ./src/getlocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLoc)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* harmony import */ var _pageSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup */ \"./src/pageSetup.js\");\n\n\n\nfunction weekForecast(forecastData) {\n    forecastData.forEach((element) => {\n        const { pop } = element\n        const { temp } = element.main\n        const { description } = element.weather[0]\n        const { icon } = element.weather[0]\n\n        const currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element.dt)\n        const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')\n\n        const dateArray = currentDate.toString().split(' ')\n        const time = dateArray[4].split(':')\n\n        if (time[0] === '01') {\n            (0,_pageSetup__WEBPACK_IMPORTED_MODULE_0__.nextWeather)(\n                newDate,\n                icon,\n                temp,\n                description,\n                (pop * 100).toFixed(1)\n            )\n        }\n    })\n}\n\nfunction addInput() {\n    const input = document.querySelector('input')\n    input.placeholder = 'City Name, Country'\n    input.addEventListener('keydown', (e) => {\n        if (e.key === 'Enter') {\n            onInput(input.value).catch((element) => {\n                (0,_pageSetup__WEBPACK_IMPORTED_MODULE_0__.currentWeather)(\n                    'error',\n                    'error',\n                    'error',\n                    'error',\n                    'error',\n                    'error'\n                )\n                addInput()\n            })\n        }\n    })\n}\n\nasync function onInput(value) {\n    const next = document.querySelectorAll('.next')\n    next.forEach((element) => {\n        element.remove()\n    })\n    const current = document.querySelector('.current').remove()\n    const title = document.querySelector('.title').remove()\n\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n    const weatherData = await response.json()\n\n    const place = weatherData.name\n    const { country } = weatherData.sys\n\n    const currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData.dt)\n    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')\n    const { icon } = weatherData.weather[0]\n    const { temp } = weatherData.main\n    const { description } = weatherData.weather[0]\n\n    ;(0,_pageSetup__WEBPACK_IMPORTED_MODULE_0__.currentWeather)(newDate, icon, temp, description, place, country)\n\n    const forecastResponse = await fetch(\n        `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n\n    const forecastData = await forecastResponse.json()\n\n    weekForecast(forecastData.list)\n\n    addInput()\n}\n\nasync function success(position) {\n    const lat = position.coords.latitude\n    const lon = position.coords.longitude\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n    const weatherData = await response.json()\n\n    const forecastResponse = await fetch(\n        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n\n    const forecastData = await forecastResponse.json()\n\n    weekForecast(forecastData.list)\n\n    const place = weatherData.name\n    const { country } = weatherData.sys\n\n    const currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData.dt)\n    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')\n    const { icon } = weatherData.weather[0]\n    const { temp } = weatherData.main\n    const { description } = weatherData.weather[0]\n\n    ;(0,_pageSetup__WEBPACK_IMPORTED_MODULE_0__.currentWeather)(newDate, icon, temp, description, place, country)\n\n    addInput()\n}\n\nasync function error() {\n    console.log('Unable to retrieve location')\n\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n    const weatherData = await response.json()\n\n    const place = weatherData.name\n    const { country } = weatherData.sys\n\n    const currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData.dt)\n    const newDate = currentDate.toString().split(' ').splice(0, 3).join(' ')\n    const { icon } = weatherData.weather[0]\n    const { temp } = weatherData.main\n    const { description } = weatherData.weather[0]\n\n    ;(0,_pageSetup__WEBPACK_IMPORTED_MODULE_0__.currentWeather)(newDate, icon, temp, description, place, country)\n\n    const forecastResponse = await fetch(\n        `http://api.openweathermap.org/data/2.5/forecast?q=New York&appid=947493e6333f4b1eeafa156080de17a6&units=imperial`,\n        { mode: 'cors' }\n    )\n\n    const forecastData = await forecastResponse.json()\n\n    weekForecast(forecastData.list)\n\n    addInput()\n}\n\nfunction getLoc() {\n    if ('geolocation' in navigator) {\n        navigator.geolocation.getCurrentPosition(success, error)\n    } else {\n        console.log('Geolocation not supported/denied')\n    }\n}\n\n// add a location to the thing input and since the location doesnt work just have it by default to new york\n\n\n//# sourceURL=webpack://weatherApp/./src/getlocation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getlocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getlocation */ \"./src/getlocation.js\");\n/* harmony import */ var _pageSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageSetup */ \"./src/pageSetup.js\");\n\n\n\n(0,_getlocation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_pageSetup__WEBPACK_IMPORTED_MODULE_1__.background)()\n\n\n//# sourceURL=webpack://weatherApp/./src/index.js?");

/***/ }),

/***/ "./src/pageSetup.js":
/*!**************************!*\
  !*** ./src/pageSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"background\": () => (/* binding */ background),\n/* harmony export */   \"currentWeather\": () => (/* binding */ currentWeather),\n/* harmony export */   \"nextWeather\": () => (/* binding */ nextWeather)\n/* harmony export */ });\n/* harmony import */ var _sky_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sky.jpeg */ \"./src/sky.jpeg\");\n\n\nconst content = document.getElementById('content')\n\nfunction background() {\n    const backgroundIMG = document.createElement('img')\n    backgroundIMG.classList.add('backgroundIMG')\n    backgroundIMG.src = _sky_jpeg__WEBPACK_IMPORTED_MODULE_0__\n    content.appendChild(backgroundIMG)\n\n    const nextContainer = document.createElement('div')\n    nextContainer.classList.add('nextContainer')\n    content.appendChild(nextContainer)\n}\n\nfunction currentWeather(day, icon, temp, condition, place, country) {\n    const current = document.createElement('div')\n    current.classList.add('current')\n\n    content.appendChild(current)\n\n    const weekDay = document.createElement('h3')\n    weekDay.textContent = `${day}`\n    current.appendChild(weekDay)\n\n    const tempImgCov = document.createElement('div')\n    tempImgCov.classList.add('tempImgCov')\n    current.appendChild(tempImgCov)\n\n    const img = document.createElement('img')\n    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`\n    tempImgCov.appendChild(img)\n\n    const temperature = document.createElement('h1')\n    temperature.textContent = `${temp}°`\n    tempImgCov.appendChild(temperature)\n\n    const currentCondition = document.createElement('h3')\n    currentCondition.textContent = `${condition}`\n    current.appendChild(currentCondition)\n\n    const filterCirc = document.createElement('div')\n    filterCirc.classList.add('filterCirc')\n    current.appendChild(filterCirc)\n\n    const titleHeader = document.createElement('div')\n    titleHeader.classList.add('title')\n    content.appendChild(titleHeader)\n\n    const title = document.createElement('h1')\n    title.textContent = `${place}, ${country}`\n    titleHeader.appendChild(title)\n\n    const input = document.createElement('input')\n    titleHeader.appendChild(input)\n}\n\nfunction nextWeather(day, icon, temp, condition, pop) {\n    const nextContainer = document.querySelector('.nextContainer')\n\n    const next = document.createElement('div')\n    next.classList.add('next')\n    nextContainer.appendChild(next)\n\n    const weekDay = document.createElement('h3')\n    weekDay.textContent = `${day}`\n    next.appendChild(weekDay)\n\n    const tempImgCov = document.createElement('div')\n    tempImgCov.classList.add('tempImgCov')\n    next.appendChild(tempImgCov)\n\n    const img = document.createElement('img')\n    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`\n    tempImgCov.appendChild(img)\n\n    const temperature = document.createElement('h1')\n    temperature.textContent = `${temp}°`\n    tempImgCov.appendChild(temperature)\n\n    const precip = document.createElement('h3')\n    precip.textContent = `Chance of rain: ${pop}%`\n    next.appendChild(precip)\n\n    const currentCondition = document.createElement('h3')\n    currentCondition.textContent = `${condition}`\n    next.appendChild(currentCondition)\n}\n\n\n//# sourceURL=webpack://weatherApp/./src/pageSetup.js?");

/***/ }),

/***/ "./src/sky.jpeg":
/*!**********************!*\
  !*** ./src/sky.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdd5a126cda2eedc24f7.jpeg\";\n\n//# sourceURL=webpack://weatherApp/./src/sky.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;