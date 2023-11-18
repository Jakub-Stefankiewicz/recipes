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
  recipes: _recipes__WEBPACK_IMPORTED_MODULE_0__.recipes,
  products: _products__WEBPACK_IMPORTED_MODULE_1__.products
}));

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   products: () => (/* binding */ products)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initialState = [{
  id: 1,
  name: "nic"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}, {
  id: 6,
  name: "Pomidory"
}, {
  id: 7,
  name: "Przyprawa curry"
}, {
  id: 8,
  name: "Olej"
}, {
  id: 9,
  name: "Wołowina 500g"
}, {
  id: 10,
  name: "Ziemniaki"
}];
var products = function products() {
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
/******/ 	__webpack_require__.h = () => ("97d4f57ebbd7f9ad879f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MTM3MjEzMzczYzk2YTBjOTZhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFDLGFBQWE7QUFFL0IsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE9BQU8sRUFBSztFQUM1QixPQUFPO0lBQ0hDLElBQUksRUFBRUgsV0FBVztJQUNqQkksT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQdUM7QUFDSjtBQUNFO0FBR3RDLGlFQUFlRyxzREFBZSxDQUFDO0VBQzNCQyxPQUFPLEVBQVBBLDZDQUFPO0VBQ1BDLFFBQVEsRUFBUkEsK0NBQVFBO0FBQ1osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0Q7QUFFbEQsSUFBTUMsWUFBWSxHQUFHLENBQ25CO0VBQUVDLEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFNLENBQUMsRUFDdEI7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDbEM7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQU8sQ0FBQyxFQUN2QjtFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBZ0IsQ0FBQyxFQUNoQztFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBWSxDQUFDLEVBQzVCO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFXLENBQUMsRUFDM0I7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDbEM7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQU8sQ0FBQyxFQUN2QjtFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBZ0IsQ0FBQyxFQUNoQztFQUFFRCxFQUFFLEVBQUUsRUFBRTtFQUFFQyxJQUFJLEVBQUU7QUFBWSxDQUFDLENBQzlCO0FBRUQsSUFBTUgsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBZ0Q7RUFBQSxJQUE1Q0ksS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0osWUFBWTtFQUFBLElBQUFPLElBQUEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFJWCxJQUFJLEdBQUFZLElBQUEsQ0FBSlosSUFBSTtJQUFFQyxPQUFPLEdBQUFXLElBQUEsQ0FBUFgsT0FBTztFQUNyRCxRQUFRRCxJQUFJO0lBQ1YsS0FBS0gsMERBQVc7TUFDZCxVQUFBZ0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFXTixLQUFLLElBQUVQLE9BQU87SUFDM0I7TUFDRSxPQUFPTyxLQUFLO0VBQ2hCO0FBQ0YsQ0FBQzs7Ozs7Ozs7O1VDdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL3JlZHV4L2FjdGlvbnMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9yZWR1eC9yZWR1Y2Vycy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFERF9QUk9EVUNUPVwiQUREX1BST0RVQ1RcIjtcclxuXHJcbmNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVCxcclxuICAgICAgICBwYXlsb2FkOiBwcm9kdWN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7QUREX1BST0RVQ1QsIGFkZFByb2R1Y3R9IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tIFwiLi9yZWNpcGVzXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4vcHJvZHVjdHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcmVjaXBlcyxcclxuICAgIHByb2R1Y3RzXHJcbn0pOyIsImltcG9ydCB7IEFERF9QUk9EVUNUIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIm5pY1wiIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIiB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6IFwiT2xlalwiIH0sXHJcbiAgeyBpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wiIH0sXHJcbiAgeyBpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIiB9LFxyXG4gIHsgaWQ6IDYsIG5hbWU6IFwiUG9taWRvcnlcIiB9LFxyXG4gIHsgaWQ6IDcsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCIgfSxcclxuICB7IGlkOiA4LCBuYW1lOiBcIk9sZWpcIiB9LFxyXG4gIHsgaWQ6IDksIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIiB9LFxyXG4gIHsgaWQ6IDEwLCBuYW1lOiBcIlppZW1uaWFraVwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBwcm9kdWN0cyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHByb2R1Y3RzIH07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3ZDRmNTdlYmJkN2Y5YWQ4NzlmXCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJ0eXBlIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VycyIsInJlY2lwZXMiLCJwcm9kdWN0cyIsImluaXRpYWxTdGF0ZSIsImlkIiwibmFtZSIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX3JlZiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=