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
  } else {
    lastFive = products.slice(0, products.length);
  }
  console.log(lastFive);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: la
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31de0e0427dc15eac135")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMGYzNDI2Mzk5Yjg2MzVhMWExMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBZkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDOUIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7RUFFakIsSUFBSUQsUUFBUSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3ZCRCxRQUFRLEdBQUdELFFBQVEsQ0FBQ0csS0FBSyxDQUFDSCxRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUVGLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDO0VBQ2pFLENBQUMsTUFBTTtJQUNMRCxRQUFRLEdBQUdELFFBQVEsQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRUgsUUFBUSxDQUFDRSxNQUFNLENBQUM7RUFDL0M7RUFFQUUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztFQUVyQixvQkFDRVAsMERBQUEsQ0FBQ0csOENBQUs7SUFDSlUsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFdBQVc7SUFDakJDLElBQUksRUFBQyxVQUFVO0lBQ2ZDLFFBQVEsRUFBQyxhQUFhO0lBQ3RCQyxZQUFZLEVBQUVDO0VBQUcsQ0FDbEIsQ0FBQztBQUVOLENBQUM7QUFFRCxpRUFBZWQsWUFBWTs7Ozs7Ozs7VUNqQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICBsZXQgbGFzdEZpdmUgPSBbXTtcclxuXHJcbiAgaWYgKHByb2R1Y3RzLmxlbmd0aCA+IDQpIHtcclxuICAgIGxhc3RGaXZlID0gcHJvZHVjdHMuc2xpY2UocHJvZHVjdHMubGVuZ3RoIC0gNSwgcHJvZHVjdHMubGVuZ3RoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGFzdEZpdmUgPSBwcm9kdWN0cy5zbGljZSgwLCBwcm9kdWN0cy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2cobGFzdEZpdmUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e2xhfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdFByb2R1Y3RzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMWRlMGUwNDI3ZGMxNWVhYzEzNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJsYXN0Rml2ZSIsImxlbmd0aCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwibGEiXSwic291cmNlUm9vdCI6IiJ9