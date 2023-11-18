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
  if (products.length > 4) {
    lastFive = products.slice(products.length - 5, products.length);
  }
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
/******/ 	__webpack_require__.h = () => ("55cc3bda292abdfeb8e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZDk0NDE5M2I1MDg0M2I0M2MxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBZkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFFaEMsSUFBSUMsUUFBUSxHQUFDLEVBQUU7RUFFZixJQUFHRCxRQUFRLENBQUNFLE1BQU0sR0FBQyxDQUFDLEVBQUM7SUFDckJELFFBQVEsR0FBQ0QsUUFBUSxDQUFDRyxLQUFLLENBQUNILFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRUYsUUFBUSxDQUFDRSxNQUFNLENBQUM7RUFDN0Q7RUFJQUUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztFQUduQixvQkFDRVAsMERBQUEsQ0FBQ0csOENBQUs7SUFDSlUsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFdBQVc7SUFDakJDLElBQUksRUFBQyxVQUFVO0lBQ2ZDLFFBQVEsRUFBQyxhQUFhO0lBQ3RCQyxZQUFZLEVBQUVYLFFBQVEsQ0FBQ0csS0FBSyxDQUFDSCxRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUVGLFFBQVEsQ0FBQ0UsTUFBTTtFQUFFLENBQ3BFLENBQUM7QUFFTixDQUFDO0FBRUQsaUVBQWVKLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDbkNXO0FBQ1c7QUFDUztBQUUxRCxJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7RUFDakMsT0FBTztJQUNMZixRQUFRLEVBQUVlLEtBQUssQ0FBQ2Y7RUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVksb0RBQU8sQ0FBQ0UsZUFBZSxDQUFDLENBQUNELDREQUFXLEVBQUVmLHFFQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNWNUI7QUFDb0I7QUFFMUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTGYsUUFBUSxFQUFFZSxLQUFLLENBQUNmO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVZLG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDaEIscUVBQVksQ0FBQzs7Ozs7Ozs7VUNUckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9BbGxQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuXHJcbmxldCBsYXN0Rml2ZT1bXTtcclxuXHJcbmlmKHByb2R1Y3RzLmxlbmd0aD40KXtcclxubGFzdEZpdmU9cHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyhsYXN0Rml2ZSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e3Byb2R1Y3RzLnNsaWNlKHByb2R1Y3RzLmxlbmd0aCAtIDUsIHByb2R1Y3RzLmxlbmd0aCl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UHJvZHVjdHM7XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCBMYXN0UHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHNcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFsbFByb2R1Y3RzLCBMYXN0UHJvZHVjdHMpO1xyXG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMYXN0UHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHNcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExhc3RQcm9kdWN0cyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTVjYzNiZGEyOTJhYmRmZWI4ZTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhbmVsIiwiTGFzdFByb2R1Y3RzIiwiX3JlZiIsInByb2R1Y3RzIiwibGFzdEZpdmUiLCJsZW5ndGgiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0aGVtZSIsInBhdGgiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyIsImNvbm5lY3QiLCJBbGxQcm9kdWN0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==