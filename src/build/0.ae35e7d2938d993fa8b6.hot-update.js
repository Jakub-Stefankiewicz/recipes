"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_RECIPE: () => (/* binding */ ADD_RECIPE),
/* harmony export */   addRecipe: () => (/* binding */ addRecipe)
/* harmony export */ });
var ADD_RECIPE = "ADD_RECIPE";
var addRecipe = function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe
  };
};


/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  recipe: _recipes__WEBPACK_IMPORTED_MODULE_0__.recipe,
  product: product
}));

/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recipe: () => (/* binding */ recipe)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initialState = [];
var recipe = function recipe() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      return [].concat(_toConsumableArray(state), [payload]);
    default:
      return state;
  }
};


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7f34529154f09312dc33")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZTM1ZTdkMjkzOGQ5OTNmYThiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFDLFlBQVk7QUFFN0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE1BQU0sRUFBSztFQUMxQixPQUFNO0lBQ0ZDLElBQUksRUFBRUgsVUFBVTtJQUNoQkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1B1QztBQUNMO0FBR25DLGlFQUFlRyxzREFBZSxDQUFDO0VBQzNCSCxNQUFNLEVBQU5BLDRDQUFNO0VBQ05JLE9BQU8sRUFBUEE7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4QztBQUVoRCxJQUFNQyxZQUFZLEdBQUcsRUFBRTtBQUV2QixJQUFNTCxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFnRDtFQUFBLElBQTVDTSxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHRixZQUFZO0VBQUEsSUFBQUssSUFBQSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0lBQUlSLElBQUksR0FBQVMsSUFBQSxDQUFKVCxJQUFJO0lBQUVDLE9BQU8sR0FBQVEsSUFBQSxDQUFQUixPQUFPO0VBQ25ELFFBQVFELElBQUk7SUFDVixLQUFLSCx3REFBVTtNQUNiLFVBQUFhLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV04sS0FBSyxJQUFFSixPQUFPO0lBQzNCO01BQ0UsT0FBT0ksS0FBSztFQUNoQjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDWG1DO0FBQ0k7QUFFeEMsSUFBTVMsS0FBSyxHQUFHRixrREFBVyxDQUFDQyx1REFBTyxDQUFDO0FBRWxDLGlFQUFlQyxLQUFLOzs7Ozs7OztVQ0xwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9hY3Rpb25zL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9yZWR1Y2Vycy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFERF9SRUNJUEU9XCJBRERfUkVDSVBFXCI7XHJcblxyXG5jb25zdCBhZGRSZWNpcGUgPSAocmVjaXBlKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX1JFQ0lQRSwgXHJcbiAgICAgICAgcGF5bG9hZDogcmVjaXBlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7QUREX1JFQ0lQRSwgYWRkUmVjaXBlfSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyByZWNpcGUgfSBmcm9tIFwiLi9yZWNpcGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHJlY2lwZSxcclxuICAgIHByb2R1Y3RcclxufSk7IiwiaW1wb3J0IHsgQUREX1JFQ0lQRSB9IGZyb20gXCIuLi9hY3Rpb25zL3JlY2lwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xyXG5cclxuY29uc3QgcmVjaXBlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBBRERfUkVDSVBFOlxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge3JlY2lwZX0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZjM0NTI5MTU0ZjA5MzEyZGMzM1wiKSJdLCJuYW1lcyI6WyJBRERfUkVDSVBFIiwiYWRkUmVjaXBlIiwicmVjaXBlIiwidHlwZSIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0IiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9