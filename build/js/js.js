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

eval("$(function () {\n  var mobileBtn = document.querySelector('.mobile-menu');\n  var menu = document.querySelector('.menu');\n  mobileBtn.addEventListener('click', function () {\n    menu.classList.toggle('isOpened');\n    mobileBtn.classList.toggle('closer');\n  });\n  menu.addEventListener('click', function () {\n    menu.classList.remove('isOpened');\n    mobileBtn.classList.remove('closer');\n  });\n  /* Jquery */\n\n  var btnModals = $('.btn_modal');\n  btnModals.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var link = target.attr('href');\n    var content = $(link);\n    content.addClass('active');\n    var container = content.parents('.modal-container');\n    container.removeClass('d-n');\n  });\n  var infoBtnModals = $('.info__btn');\n  infoBtnModals.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var link = target.attr('href');\n    var content = $(link);\n    content.addClass('active');\n    var container = content.parents('.modal-container');\n    container.removeClass('d-n');\n  });\n  /* кнопка клоузер */\n\n  var closer = $('.closer');\n  closer.on('click', function (event) {\n    var target = $(event.target);\n    var container = target.parents('.modal-container');\n    container.addClass('d-n');\n    var active = $('.modal-container .active');\n    active.removeClass('active');\n  });\n  $('.slider').slick({\n    prevArrow: $('.slider-container__btn_back'),\n    nextArrow: $('.slider-container__btn_next')\n  });\n  /* Tabs */\n\n  var tabHeads = $('.product-tab__link');\n  tabHeads.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var link = target.attr('href');\n    var content = $(link);\n    var active = $('.product-tab .active, .product-content .active');\n    active.removeClass('active');\n    target.parent().addClass('active');\n    content.addClass('active');\n  });\n  /* Easy scroll */\n\n  var navLinks = $('.navigation__a');\n  navLinks.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr('href');\n    var elemToScroll = $(href);\n    $('html, body').animate({\n      scrollTop: elemToScroll.offset().top\n    }, 500);\n  });\n  /* кнопка возврата на верх страницы. сделал ее появление*/\n\n  $(window).on('scroll', function (event) {\n    var target = $(event.target);\n    var scrollTop = target.scrollTop();\n    var btn = $('.btn-menu');\n\n    if (scrollTop > 800) {\n      btn.addClass('scroll');\n    } else {\n      btn.removeClass('scroll');\n    }\n  });\n  /* Кнопка возврата на верх страницы, сделал чтобы она работала */\n\n  var btnMenu = $('.btn-menu');\n  btnMenu.on('click', function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr('href');\n    var menuBtn = $(href);\n    $('html, body').animate({\n      scrollTop: menuBtn.offset().top - 50\n    }, 500);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiICQoZnVuY3Rpb24oKXtcclxuXHJcbiBcdHZhciBtb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcclxuIFx0dmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxuIFx0bW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuIFx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzT3BlbmVkJyk7XHJcbiBcdFx0bW9iaWxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlcicpO1xyXG4gXHR9KTtcclxuIFx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiBcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW5lZCcpO1xyXG4gXHRcdG1vYmlsZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZXInKTtcclxuIFx0fSk7XHJcblxyXG4gXHRcdC8qIEpxdWVyeSAqL1xyXG5cclxuIFx0IHZhciBidG5Nb2RhbHMgPSAkKCcuYnRuX21vZGFsJyk7XHJcbiBcdFxyXG5cclxuIFx0XHRidG5Nb2RhbHMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuIFx0XHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiBcdFx0XHR2YXIgbGluayA9IHRhcmdldC5hdHRyKCdocmVmJyk7XHJcblxyXG4gXHRcdFx0dmFyIGNvbnRlbnQgPSAkKGxpbmspO1xyXG4gXHRcdFx0Y29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gXHRcdFx0dmFyIGNvbnRhaW5lciA9IGNvbnRlbnQucGFyZW50cygnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG4gXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdkLW4nKTtcclxuIFx0XHR9KTtcclxuIFx0XHR2YXIgaW5mb0J0bk1vZGFscyA9ICQoJy5pbmZvX19idG4nKTtcclxuIFx0XHRpbmZvQnRuTW9kYWxzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuIFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gXHRcdFx0dmFyIGxpbmsgPSB0YXJnZXQuYXR0cignaHJlZicpO1xyXG5cclxuIFx0XHRcdHZhciBjb250ZW50ID0gJChsaW5rKTtcclxuIFx0XHRcdGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuIFx0XHRcdHZhciBjb250YWluZXIgPSBjb250ZW50LnBhcmVudHMoJy5tb2RhbC1jb250YWluZXInKTtcclxuIFx0XHRcdGNvbnRhaW5lci5yZW1vdmVDbGFzcygnZC1uJyk7XHJcblxyXG4gXHRcdH0pO1xyXG5cclxuXHJcblxyXG5cclxuIFx0XHQvKiDQutC90L7Qv9C60LAg0LrQu9C+0YPQt9C10YAgKi9cclxuXHJcbiBcdFx0dmFyIGNsb3NlciA9ICQoJy5jbG9zZXInKTtcclxuXHJcbiBcdFx0Y2xvc2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuIFx0XHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiBcdFx0XHR2YXIgY29udGFpbmVyID0gdGFyZ2V0LnBhcmVudHMoJy5tb2RhbC1jb250YWluZXInKTtcclxuIFx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnZC1uJyk7XHJcbiBcdFx0XHR2YXIgYWN0aXZlID0gJCgnLm1vZGFsLWNvbnRhaW5lciAuYWN0aXZlJyk7XHJcbiBcdFx0XHRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gXHRcdH0pO1xyXG5cclxuIFx0XHQkKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gXHRcdFx0cHJldkFycm93OiAkKCcuc2xpZGVyLWNvbnRhaW5lcl9fYnRuX2JhY2snKSxcclxuIFx0XHRcdG5leHRBcnJvdzogJCgnLnNsaWRlci1jb250YWluZXJfX2J0bl9uZXh0JylcclxuXHJcbiBcdFx0fSk7XHJcblxyXG5cclxuIFx0XHQvKiBUYWJzICovXHJcblxyXG5cclxuIFx0XHR2YXIgdGFiSGVhZHMgPSAkKCcucHJvZHVjdC10YWJfX2xpbmsnKTtcclxuIFx0XHQgdGFiSGVhZHMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gXHRcdCBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0IFx0IHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiBcdFx0IFx0IHZhciBsaW5rID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuXHJcbiBcdFx0IFx0IHZhciBjb250ZW50ID0gJChsaW5rKTtcclxuIFx0XHQgXHQgdmFyIGFjdGl2ZSA9ICQoJy5wcm9kdWN0LXRhYiAuYWN0aXZlLCAucHJvZHVjdC1jb250ZW50IC5hY3RpdmUnKTtcclxuIFx0XHQgXHQgYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuIFx0XHQgXHQgdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuIFx0XHQgXHQgY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiBcdFx0IH0pXHJcblxyXG5cclxuIFx0XHQvKiBFYXN5IHNjcm9sbCAqL1xyXG5cclxuIFx0XHR2YXIgbmF2TGlua3MgPSAkKCcubmF2aWdhdGlvbl9fYScpO1xyXG5cclxuIFx0XHRuYXZMaW5rcy5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiBcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHRcdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuIFx0XHRcdHZhciBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuXHJcbiBcdFx0XHR2YXIgZWxlbVRvU2Nyb2xsID0gJChocmVmKTtcclxuIFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuIFx0XHRcdFx0c2Nyb2xsVG9wOiBlbGVtVG9TY3JvbGwub2Zmc2V0KCkudG9wXHJcbiBcdFx0XHR9LCA1MDApXHJcbiBcdFx0fSk7XHJcblxyXG5cclxuXHJcblxyXG4gXHRcdC8qINC60L3QvtC/0LrQsCDQstC+0LfQstGA0LDRgtCwINC90LAg0LLQtdGA0YUg0YHRgtGA0LDQvdC40YbRiy4g0YHQtNC10LvQsNC7INC10LUg0L/QvtGP0LLQu9C10L3QuNC1Ki9cclxuXHJcbiBcdFx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudCl7XHJcbiBcdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gXHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3AoKTtcclxuIFx0XHRcdHZhciBidG4gPSAkKCcuYnRuLW1lbnUnKTtcclxuIFx0XHRcdGlmKHNjcm9sbFRvcCA+IDgwMCl7XHJcbiBcdFx0XHRcdGJ0bi5hZGRDbGFzcygnc2Nyb2xsJylcclxuIFx0XHRcdH0gZWxzZXtcclxuIFx0XHRcdFx0YnRuLnJlbW92ZUNsYXNzKCdzY3JvbGwnKVxyXG4gXHRcdFx0fSBcdFx0XHRcclxuXHJcbiBcdFx0fSk7IFxyXG5cclxuIFx0XHQvKiDQmtC90L7Qv9C60LAg0LLQvtC30LLRgNCw0YLQsCDQvdCwINCy0LXRgNGFINGB0YLRgNCw0L3QuNGG0YssINGB0LTQtdC70LDQuyDRh9GC0L7QsdGLINC+0L3QsCDRgNCw0LHQvtGC0LDQu9CwICovXHJcbiBcdFx0dmFyIGJ0bk1lbnUgPSAkKCcuYnRuLW1lbnUnKTtcclxuIFx0XHRidG5NZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuIFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gXHRcdFx0dmFyIGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpO1xyXG4gXHRcdFx0dmFyIG1lbnVCdG4gPSAkKGhyZWYpO1xyXG4gXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gXHRcdFx0XHRzY3JvbGxUb3A6IG1lbnVCdG4ub2Zmc2V0KCkudG9wIC01MFxyXG4gXHRcdFx0fSwgNTAwKVxyXG4gXHRcdH0pXHJcblxyXG5cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });