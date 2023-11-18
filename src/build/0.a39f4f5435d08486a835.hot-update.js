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
/******/ 	__webpack_require__.h = () => ("ea499e591a9c9d94f313")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMzlmNGY1NDM1ZDA4NDg2YTgzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBLElBQWRDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzdCLElBQUFDLFNBQUEsR0FBcUNMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBRW5DLElBQUlJLEdBQUcsR0FBRyxFQUFFO0VBRVosS0FBSSxJQUFJQyxDQUFDLEdBQUNQLFFBQVEsQ0FBQ1EsTUFBTSxHQUFDLENBQUMsRUFBRUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDckNELEdBQUcsTUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLSixHQUFHLElBQUVOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLEVBQUM7RUFDM0I7RUFFQUYsZUFBZSxDQUFDLENBQUM7RUFFakIsb0JBQ0VYLDBEQUFBLENBQUNHLDhDQUFLO0lBQ0plLEtBQUssRUFBQyxtQkFBbUI7SUFDekJDLEtBQUssRUFBQyxXQUFXO0lBQ2pCQyxJQUFJLEVBQUMsVUFBVTtJQUNmQyxRQUFRLEVBQUMsYUFBYTtJQUN0QkMsWUFBWSxFQUFFaEI7RUFBUyxDQUFFLENBQUM7QUFFaEMsQ0FBQztBQUVELGlFQUFlRixZQUFZOzs7Ozs7OztVQ2hDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcclxuXHJcbi8vIGNvbnN0IGZha2VQcm9kdWN0cyA9IFtcclxuLy8gICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXHJcbi8vICAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcclxuLy8gICB7aWQ6IDMsIG5hbWU6IFwiT2xlalwifSxcclxuLy8gICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXHJcbi8vICAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxyXG4vLyBdO1xyXG5cclxuY29uc3QgTGFzdFByb2R1Y3RzID0gKHtwcm9kdWN0c30pID0+IHtcclxuICBjb25zdFtsYXN0UHJvZHVjdHMsIHNldExhc3RQcm9kdWN0c109dXNlU3RhdGUoW10pO1xyXG5cclxuICB2YXIgYXJyID0gW107XHJcblxyXG4gIGZvcihsZXQgaT1wcm9kdWN0cy5sZW5ndGgtMTsgaT0wOyBpLS0gKXtcclxuICAgIGFycj1bLi4uYXJyLCBwcm9kdWN0c1tpXV07XHJcbiAgfVxyXG5cclxuICBzZXRMYXN0UHJvZHVjdHMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e3Byb2R1Y3RzfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UHJvZHVjdHM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWE0OTllNTkxYTljOWQ5NGYzMTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhbmVsIiwiTGFzdFByb2R1Y3RzIiwiX3JlZiIsInByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGFzdFByb2R1Y3RzIiwic2V0TGFzdFByb2R1Y3RzIiwiYXJyIiwiaSIsImxlbmd0aCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==