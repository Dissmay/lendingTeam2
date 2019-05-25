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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var menu = document.querySelector('.menu');\n  mobileBtn.addEventListener('click', function () {\n    menu.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  menu.addEventListener('click', function () {\n    menu.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  var active = document.querySelector('.active');\n  var snacks = document.querySelector('#snacks');\n  var sweets = document.querySelector('#sweets');\n  var coffee = document.querySelector('#coffee');\n  var coffeeTab = document.querySelector('#coffeeTab');\n  var sweetsTab = document.querySelector('#sweetsTab');\n  var snacksTab = document.querySelector('#snacksTab');\n  coffeeTab.addEventListener('click', function () {\n    coffeeTab.classList.add('active');\n    sweetsTab.classList.remove('active');\n    snacksTab.classList.remove('active');\n    coffee.classList.add('active');\n    sweets.classList.remove('active');\n    snacks.classList.remove('active');\n  });\n  sweetsTab.addEventListener('click', function () {\n    sweetsTab.classList.add('active');\n    coffeeTab.classList.remove('active');\n    snacksTab.classList.remove('active');\n    sweets.classList.add('active');\n    coffee.classList.remove('active');\n    snacks.classList.remove('active');\n  });\n  snacksTab.addEventListener('click', function () {\n    snacksTab.classList.add('active');\n    sweetsTab.classList.remove('active');\n    coffeeTab.classList.remove('active');\n    snacks.classList.add('active');\n    sweets.classList.remove('active');\n    coffee.classList.remove('active');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyAsIGZ1bmN0aW9uKCl7XHJcblxyXG4gXHR2YXIgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XHJcbiBcdHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbiBcdG1vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiBcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW5lZCcpO1xyXG4gXHRcdG1vYmlsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZXInKTtcclxuIFx0fSk7XHJcbiBcdG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gXHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuZWQnKTtcclxuIFx0XHRtb2JpbGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VyJyk7XHJcblxyXG4gXHR9KTtcclxuXHJcbiBcdHZhciBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiBcdHZhciBzbmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25hY2tzJyk7XHJcbiAgXHR2YXIgc3dlZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3ZWV0cycpO1xyXG4gIFx0dmFyIGNvZmZlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2ZmZWUnKTtcclxuIFx0dmFyIGNvZmZlZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2ZmZWVUYWInKTtcclxuIFx0dmFyIHN3ZWV0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2VldHNUYWInKTtcclxuIFx0dmFyIHNuYWNrc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbmFja3NUYWInKTtcclxuIFx0XHJcblx0Y29mZmVlVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQgXHRcdGNvZmZlZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHQgXHRcdHN3ZWV0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHQgXHRcdHNuYWNrc1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHQgXHRcdGNvZmZlZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHQgXHRcdHN3ZWV0cy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHQgXHRcdHNuYWNrcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHQgXHR9KTtcclxuXHJcblxyXG4gXHRzd2VldHNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gXHRcdHN3ZWV0c1RhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuIFx0XHRjb2ZmZWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiBcdFx0c25hY2tzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gXHRcdHN3ZWV0cy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuIFx0XHRjb2ZmZWUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiBcdFx0c25hY2tzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuIFx0fSk7XHJcblxyXG4gXHRcclxuXHJcbiBcdHNuYWNrc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiBcdFx0c25hY2tzVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gXHRcdHN3ZWV0c1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuIFx0XHRjb2ZmZWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiBcdFx0c25hY2tzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gXHRcdHN3ZWV0cy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuIFx0XHRjb2ZmZWUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiBcdH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });