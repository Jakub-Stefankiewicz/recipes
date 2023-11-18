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
  if (products.length) products.slice(products.length - 5, products.length);
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
/******/ 	__webpack_require__.h = () => ("65606f6be94ff0cdcd4e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NTYyMDQ2OWZmNDgzNmMxNjhhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBZkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFFaEMsSUFBTUMsUUFBUSxHQUFDLEVBQUU7RUFFakIsSUFBR0QsUUFBUSxDQUFDRSxNQUFNLEVBRWxCRixRQUFRLENBQUNHLEtBQUssQ0FBQ0gsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFRixRQUFRLENBQUNFLE1BQU0sQ0FBQztFQUVwREUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztFQUduQixvQkFDRVAsMERBQUEsQ0FBQ0csOENBQUs7SUFDSlUsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFdBQVc7SUFDakJDLElBQUksRUFBQyxVQUFVO0lBQ2ZDLFFBQVEsRUFBQyxhQUFhO0lBQ3RCQyxZQUFZLEVBQUVYLFFBQVEsQ0FBQ0csS0FBSyxDQUFDSCxRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUVGLFFBQVEsQ0FBQ0UsTUFBTTtFQUFFLENBQ3BFLENBQUM7QUFFTixDQUFDO0FBRUQsaUVBQWVKLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDakNXO0FBQ1c7QUFDUztBQUUxRCxJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7RUFDakMsT0FBTztJQUNMZixRQUFRLEVBQUVlLEtBQUssQ0FBQ2Y7RUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVksb0RBQU8sQ0FBQ0UsZUFBZSxDQUFDLENBQUNELDREQUFXLEVBQUVmLHFFQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNWNUI7QUFDb0I7QUFFMUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTGYsUUFBUSxFQUFFZSxLQUFLLENBQUNmO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVZLG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDaEIscUVBQVksQ0FBQzs7Ozs7Ozs7VUNUckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9BbGxQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuXHJcbmNvbnN0IGxhc3RGaXZlPVtdO1xyXG5cclxuaWYocHJvZHVjdHMubGVuZ3RoKVxyXG5cclxucHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKTtcclxuXHJcbmNvbnNvbGUubG9nKGxhc3RGaXZlKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtZGFuZ2VyXCJcclxuICAgICAgcGF0aD1cInByb2R1Y3RzXCJcclxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXHJcbiAgICAgIGxpc3RFbGVtZW50cz17cHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0cztcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUHJvZHVjdHMsIExhc3RQcm9kdWN0cyk7XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGFzdFByb2R1Y3RzKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NTYwNmY2YmU5NGZmMGNkY2Q0ZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJsYXN0Rml2ZSIsImxlbmd0aCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiY29ubmVjdCIsIkFsbFByb2R1Y3RzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9