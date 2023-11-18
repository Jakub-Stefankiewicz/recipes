"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);



// const fakeProducts = [
//   {id: 1, name: "Pomidory"},
//   {id: 2, name: "Przyprawa curry"},
//   {id: 3, name: "Olej"},
//   {id: 4, name: "Wołowina 500g"},
//   {id: 5, name: "Ziemniaki"}
// ];

var LastProducts = function LastProducts(_ref) {
  var products = _ref.products;
  var lastFive = [];
  if (products.length > 4) products.slice(products.length - 5, products.length);
  console.log(lastFive);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: products.slice(products.length - 5, products.length)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony import */ var _components_Home_LastProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);



var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], _components_Home_LastProducts__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _components_Home_LastProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);


var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Home_LastProducts__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d03939a520c3c5ad331a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNDVhODI2ODViMDUwMDQ1MjU4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBZkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFFaEMsSUFBTUMsUUFBUSxHQUFDLEVBQUU7RUFFakIsSUFBR0QsUUFBUSxDQUFDRSxNQUFNLEdBQUMsQ0FBQyxFQUVwQkYsUUFBUSxDQUFDRyxLQUFLLENBQUNILFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRUYsUUFBUSxDQUFDRSxNQUFNLENBQUM7RUFFcERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUM7RUFHbkIsb0JBQ0VQLDBEQUFBLENBQUNHLDhDQUFLO0lBQ0pVLEtBQUssRUFBQyxtQkFBbUI7SUFDekJDLEtBQUssRUFBQyxXQUFXO0lBQ2pCQyxJQUFJLEVBQUMsVUFBVTtJQUNmQyxRQUFRLEVBQUMsYUFBYTtJQUN0QkMsWUFBWSxFQUFFWCxRQUFRLENBQUNHLEtBQUssQ0FBQ0gsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFRixRQUFRLENBQUNFLE1BQU07RUFBRSxDQUNwRSxDQUFDO0FBRU4sQ0FBQztBQUVELGlFQUFlSixZQUFZOzs7Ozs7Ozs7Ozs7OztBQ2pDVztBQUNXO0FBQ1M7QUFFMUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTGYsUUFBUSxFQUFFZSxLQUFLLENBQUNmO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVZLG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDRCw0REFBVyxFQUFFZixxRUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVjVCO0FBQ29CO0FBRTFELElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUNqQyxPQUFPO0lBQ0xmLFFBQVEsRUFBRWUsS0FBSyxDQUFDZjtFQUNsQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlWSxvREFBTyxDQUFDRSxlQUFlLENBQUMsQ0FBQ2hCLHFFQUFZLENBQUM7Ozs7Ozs7O1VDVHJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbnRhaW5lcnMvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xyXG5cclxuLy8gY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4vLyAgIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuLy8gICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4vLyAgIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4vLyAgIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuLy8gICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbi8vIF07XHJcblxyXG5jb25zdCBMYXN0UHJvZHVjdHMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcblxyXG5jb25zdCBsYXN0Rml2ZT1bXTtcclxuXHJcbmlmKHByb2R1Y3RzLmxlbmd0aD40KVxyXG5cclxucHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKGxhc3RGaXZlKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtZGFuZ2VyXCJcclxuICAgICAgcGF0aD1cInByb2R1Y3RzXCJcclxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXHJcbiAgICAgIGxpc3RFbGVtZW50cz17cHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0cztcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUHJvZHVjdHMsIExhc3RQcm9kdWN0cyk7XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGFzdFByb2R1Y3RzKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMDM5MzlhNTIwYzNjNWFkMzMxYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJsYXN0Rml2ZSIsImxlbmd0aCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiY29ubmVjdCIsIkFsbFByb2R1Y3RzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9