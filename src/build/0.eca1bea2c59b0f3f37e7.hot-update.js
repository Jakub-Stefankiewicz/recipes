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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// const fakeProducts = [
//   {id: 1, name: "Pomidory"},
//   {id: 2, name: "Przyprawa curry"},
//   {id: 3, name: "Olej"},
//   {id: 4, name: "Wołowina 500g"},
//   {id: 5, name: "Ziemniaki"}
// ];

var LastProducts = function LastProducts(_ref) {
  var products = _ref.products;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    lastProducts = _useState2[0],
    setLastProducts = _useState2[1];
  var arr = [];
  for (var i = products.length - 1; i = 0; i--) {
    arr = [].concat(_toConsumableArray(arr), [products[i]]);
  }
  console.log(arr);
  setLastProducts();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: products
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("30aeba3ee6648d5c0489")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lY2ExYmVhMmM1OWIwZjNmMzdlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBLElBQWRDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzdCLElBQUFDLFNBQUEsR0FBcUNMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBRW5DLElBQUlJLEdBQUcsR0FBRyxFQUFFO0VBRVosS0FBSSxJQUFJQyxDQUFDLEdBQUNQLFFBQVEsQ0FBQ1EsTUFBTSxHQUFDLENBQUMsRUFBRUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDckNELEdBQUcsTUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLSixHQUFHLElBQUVOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLEVBQUM7RUFDM0I7RUFFQUksT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQztFQUVoQkQsZUFBZSxDQUFDLENBQUM7RUFFakIsb0JBQ0VYLDBEQUFBLENBQUNHLDhDQUFLO0lBQ0ppQixLQUFLLEVBQUMsbUJBQW1CO0lBQ3pCQyxLQUFLLEVBQUMsV0FBVztJQUNqQkMsSUFBSSxFQUFDLFVBQVU7SUFDZkMsUUFBUSxFQUFDLGFBQWE7SUFDdEJDLFlBQVksRUFBRWxCO0VBQVMsQ0FBRSxDQUFDO0FBRWhDLENBQUM7QUFFRCxpRUFBZUYsWUFBWTs7Ozs7Ozs7VUNsQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcbiAgY29uc3RbbGFzdFByb2R1Y3RzLCBzZXRMYXN0UHJvZHVjdHNdPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdmFyIGFyciA9IFtdO1xyXG5cclxuICBmb3IobGV0IGk9cHJvZHVjdHMubGVuZ3RoLTE7IGk9MDsgaS0tICl7XHJcbiAgICBhcnI9Wy4uLmFyciwgcHJvZHVjdHNbaV1dO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYXJyKVxyXG5cclxuICBzZXRMYXN0UHJvZHVjdHMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e3Byb2R1Y3RzfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UHJvZHVjdHM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzBhZWJhM2VlNjY0OGQ1YzA0ODlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhbmVsIiwiTGFzdFByb2R1Y3RzIiwiX3JlZiIsInByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGFzdFByb2R1Y3RzIiwic2V0TGFzdFByb2R1Y3RzIiwiYXJyIiwiaSIsImxlbmd0aCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0aGVtZSIsInBhdGgiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=