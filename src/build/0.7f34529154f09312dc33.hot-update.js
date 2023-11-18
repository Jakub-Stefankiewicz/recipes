"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_PRODUCT: () => (/* binding */ ADD_PRODUCT),
/* harmony export */   addProduct: () => (/* binding */ addProduct)
/* harmony export */ });
var ADD_PRODUCT = "ADD_PRODUCT";
var addProduct = function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};


/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  recipe: _recipes__WEBPACK_IMPORTED_MODULE_0__.recipe,
  product: _products__WEBPACK_IMPORTED_MODULE_1__.product
}));

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   product: () => (/* binding */ product)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initialState = [];
var product = function product() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    payload = _ref.payload;
  switch (type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [payload]);
    default:
      return state;
  }
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("016bf332e54178a53e25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZjM0NTI5MTU0ZjA5MzEyZGMzMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFDLGFBQWE7QUFFL0IsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE9BQU8sRUFBSztFQUM1QixPQUFPO0lBQ0hDLElBQUksRUFBRUgsV0FBVztJQUNqQkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQdUM7QUFDTDtBQUNFO0FBR3JDLGlFQUFlRyxzREFBZSxDQUFDO0VBQzNCQyxNQUFNLEVBQU5BLDRDQUFNO0VBQ05KLE9BQU8sRUFBUEEsOENBQU9BO0FBQ1gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0Q7QUFFbEQsSUFBTUssWUFBWSxHQUFHLEVBQUU7QUFFdkIsSUFBTUwsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBZ0Q7RUFBQSxJQUE1Q00sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0YsWUFBWTtFQUFBLElBQUFLLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFJUixJQUFJLEdBQUFTLElBQUEsQ0FBSlQsSUFBSTtJQUFFQyxPQUFPLEdBQUFRLElBQUEsQ0FBUFIsT0FBTztFQUNwRCxRQUFRRCxJQUFJO0lBQ1YsS0FBS0gsMERBQVc7TUFDZCxVQUFBYSxNQUFBLENBQUFDLGtCQUFBLENBQVdOLEtBQUssSUFBRUosT0FBTztJQUMzQjtNQUNFLE9BQU9JLEtBQUs7RUFDaEI7QUFDRixDQUFDOzs7Ozs7Ozs7VUNYRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBRERfUFJPRFVDVD1cIkFERF9QUk9EVUNUXCI7XHJcblxyXG5jb25zdCBhZGRQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX1BST0RVQ1QsXHJcbiAgICAgICAgcGF5bG9hZDogcHJvZHVjdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0FERF9QUk9EVUNULCBhZGRQcm9kdWN0fSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyByZWNpcGUgfSBmcm9tIFwiLi9yZWNpcGVzXCI7XHJcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICByZWNpcGUsXHJcbiAgICBwcm9kdWN0XHJcbn0pOyIsImltcG9ydCB7IEFERF9QUk9EVUNUIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xyXG5cclxuY29uc3QgcHJvZHVjdCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7cHJvZHVjdH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMTZiZjMzMmU1NDE3OGE1M2UyNVwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwidHlwZSIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWNpcGUiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9yZWYiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9