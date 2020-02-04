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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ "./src/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);

var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext('2d');
var inputColor = document.getElementById("inputColor");
var inputRange = document.getElementById("inputRange");
var xValue = document.getElementById("xValue");
var yValue = document.getElementById("yValue");
var sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", sendCoordinates);
var isDraw = false;
ctx.lineWidth = 10;
inputColor.addEventListener("change", getColor);
inputRange.addEventListener("change", function (e) {
  ctx.lineWidth = e.target.value;
});

function getColor() {
  ctx.strokeStyle = inputColor.value;
}

canvas.onmousedown = function (e) {
  ctx.beginPath();
  isDraw = true;
};

canvas.addEventListener("mouseout", function () {
  isDraw = false;
  yValue.innerText = "0 px";
  xValue.innerText = "0 px";
});

canvas.onmousemove = function (e) {
  var x = e.offsetX;
  var xValue = document.getElementById("xValue");
  xValue.innerText = "".concat(x, " px");
  var y = e.offsetY;
  var yValue = document.getElementById("yValue");
  yValue.innerText = "".concat(y, " px");
  console.log(x, y, e.buttons);

  if (e.buttons === 1 && isDraw) {
    ctx.width = 20;
    ctx.lineCap = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

function sendCoordinates() {
  var coordinates = {
    x: xValue,
    y: yValue
  };
  var xhr = new XMLHttpRequest();
  xhr.open("post", "https://thawing-oasis-04853.herokuapp.com/");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(coordinates));
  xhr.onload(function () {
    if (xhr.status === 401) {
      console.log("error");
    } else {
      localStorage.setItem("coordinates", "".concat(coordinates));
      console.log("HELL fire");
    }
  });
}

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5sZXNzPzkwNzAiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpbnB1dENvbG9yIiwiaW5wdXRSYW5nZSIsInhWYWx1ZSIsInlWYWx1ZSIsInNlbmRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwic2VuZENvb3JkaW5hdGVzIiwiaXNEcmF3IiwibGluZVdpZHRoIiwiZ2V0Q29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHJva2VTdHlsZSIsIm9ubW91c2Vkb3duIiwiYmVnaW5QYXRoIiwiaW5uZXJUZXh0Iiwib25tb3VzZW1vdmUiLCJ4Iiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbnMiLCJ3aWR0aCIsImxpbmVDYXAiLCJsaW5lVG8iLCJzdHJva2UiLCJjb29yZGluYXRlcyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ubG9hZCIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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O0FBb0JBLFNBQVN0QixlQUFULEdBQTJCO0FBQ3pCLE1BQUl1QixXQUFXLEdBQUc7QUFBQ1gsS0FBQyxFQUFFaEIsTUFBSjtBQUFZa0IsS0FBQyxFQUFFakI7QUFBZixHQUFsQjtBQUNBLE1BQU0yQixHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsSUFBSixDQUFTLE1BQVQsRUFBZ0IsNENBQWhCO0FBQ0FGLEtBQUcsQ0FBQ0csZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0FILEtBQUcsQ0FBQ0ksSUFBSixDQUFTQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsV0FBZixDQUFUO0FBQ0FDLEtBQUcsQ0FBQ08sTUFBSixDQUFXLFlBQVk7QUFDckIsUUFBR1AsR0FBRyxDQUFDUSxNQUFKLEtBQWUsR0FBbEIsRUFBdUI7QUFDckJoQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsS0FGRCxNQUVNO0FBQ0pnQixrQkFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLFlBQXVDWCxXQUF2QztBQUNBUCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQzs7Ozs7Ozs7Ozs7QUNwRUQsdUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGUvaW5kZXgubGVzc1wiXHJcblxyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKTtcclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5sZXQgaW5wdXRDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRDb2xvclwiKTtcclxubGV0IGlucHV0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UmFuZ2VcIik7XHJcbmxldCB4VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhWYWx1ZVwiKTtcclxubGV0IHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieVZhbHVlXCIpO1xyXG5sZXQgc2VuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZEJ0blwiKTtcclxuc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZENvb3JkaW5hdGVzKTtcclxuXHJcbmxldCBpc0RyYXcgPSBmYWxzZTtcclxuY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG5cclxuaW5wdXRDb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGdldENvbG9yKTtcclxuaW5wdXRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IGUudGFyZ2V0LnZhbHVlO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldENvbG9yKCkge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGlucHV0Q29sb3IudmFsdWU7XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNlZG93biA9IChlKSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGlzRHJhdyA9IHRydWU7XHJcbn07XHJcblxyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICBpc0RyYXcgPSBmYWxzZTtcclxuICB5VmFsdWUuaW5uZXJUZXh0ID0gYDAgcHhgO1xyXG4gIHhWYWx1ZS5pbm5lclRleHQgPSBgMCBweGA7XHJcbn0pO1xyXG5cclxuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcclxuICBsZXQgeCA9IGUub2Zmc2V0WDtcclxuICBsZXQgeFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4VmFsdWVcIik7XHJcbiAgeFZhbHVlLmlubmVyVGV4dCA9IGAke3h9IHB4YDtcclxuICBsZXQgeSA9IGUub2Zmc2V0WTtcclxuICBsZXQgeVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5VmFsdWVcIik7XHJcbiAgeVZhbHVlLmlubmVyVGV4dCA9IGAke3l9IHB4YDtcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHgsIHksIGUuYnV0dG9ucyApO1xyXG4gIGlmKGUuYnV0dG9ucyA9PT0gMSAmJiBpc0RyYXcpIHtcclxuICAgIGN0eC53aWR0aCA9IDIwO1xyXG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgY3R4LmxpbmVUbyh4LHkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2VuZENvb3JkaW5hdGVzKCkge1xyXG4gIGxldCBjb29yZGluYXRlcyA9IHt4OiB4VmFsdWUsIHk6IHlWYWx1ZX07XHJcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgeGhyLm9wZW4oXCJwb3N0XCIsXCJodHRwczovL3RoYXdpbmctb2FzaXMtMDQ4NTMuaGVyb2t1YXBwLmNvbS9cIik7XHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSk7XHJcbiAgeGhyLm9ubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZih4aHIuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb3JkaW5hdGVzXCIsIGAke2Nvb3JkaW5hdGVzfWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkhFTEwgZmlyZVwiKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==