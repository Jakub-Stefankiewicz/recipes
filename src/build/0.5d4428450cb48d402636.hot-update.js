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
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);

// import { addRecipe, addProduct } from "../actions/recipes";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  addRecipe: _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.addRecipe,
  addProduct: addProduct
}));

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
/******/ 	__webpack_require__.h = () => ("3ee90fcaf8e95d2eed57")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDQ0Mjg0NTBjYjQ4ZDQwMjYzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFDLFlBQVk7QUFFN0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE1BQU0sRUFBSztFQUMxQixPQUFNO0lBQ0ZDLElBQUksRUFBRUgsVUFBVTtJQUNoQkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1B1QztBQUN4QztBQUMrQztBQUUvQyxpRUFBZUcsc0RBQWUsQ0FBQztFQUMzQkosU0FBUyxFQUFUQSx1REFBUztFQUNUSyxVQUFVLEVBQVZBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUGtDO0FBQ0k7QUFFeEMsSUFBTUcsS0FBSyxHQUFHRixrREFBVyxDQUFDQyx1REFBTyxDQUFDO0FBRWxDLGlFQUFlQyxLQUFLOzs7Ozs7OztVQ0xwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9hY3Rpb25zL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFERF9SRUNJUEU9XCJBRERfUkVDSVBFXCI7XHJcblxyXG5jb25zdCBhZGRSZWNpcGUgPSAocmVjaXBlKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX1JFQ0lQRSwgXHJcbiAgICAgICAgcGF5bG9hZDogcmVjaXBlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7QUREX1JFQ0lQRSwgYWRkUmVjaXBlfSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBhZGRSZWNpcGUsIGFkZFByb2R1Y3QgfSBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVzXCI7XHJcbmltcG9ydCB7IGFkZFJlY2lwZSB9IGZyb20gXCIuLi9hY3Rpb25zL3JlY2lwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBhZGRSZWNpcGUsXHJcbiAgICBhZGRQcm9kdWN0XHJcbn0pOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlZTkwZmNhZjhlOTVkMmVlZDU3XCIpIl0sIm5hbWVzIjpbIkFERF9SRUNJUEUiLCJhZGRSZWNpcGUiLCJyZWNpcGUiLCJ0eXBlIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=