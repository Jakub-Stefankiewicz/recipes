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
    return arr.push(products[i]);
    console.log(products[i]);
  }
  console.log(arr);
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
/******/ 	__webpack_require__.h = () => ("6e624c1e92804968a5c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZTkwNGQxMjMxZDAyMWJlMzc3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDN0IsSUFBQUMsU0FBQSxHQUFxQ0wsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFFbkMsSUFBTUksR0FBRyxHQUFHLEVBQUU7RUFFZCxLQUFJLElBQUlDLENBQUMsR0FBQ1AsUUFBUSxDQUFDUSxNQUFNLEdBQUMsQ0FBQyxFQUFFRCxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUNyQyxPQUFPRCxHQUFHLENBQUNHLElBQUksQ0FBQ1QsUUFBUSxDQUFDTyxDQUFDLENBQUMsQ0FBQztJQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNYLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUM7RUFDMUI7RUFFQUcsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEdBQUcsQ0FBQztFQUdoQixvQkFDRVosMERBQUEsQ0FBQ0csOENBQUs7SUFDSmdCLEtBQUssRUFBQyxtQkFBbUI7SUFDekJDLEtBQUssRUFBQyxXQUFXO0lBQ2pCQyxJQUFJLEVBQUMsVUFBVTtJQUNmQyxRQUFRLEVBQUMsYUFBYTtJQUN0QkMsWUFBWSxFQUFFakI7RUFBUyxDQUFFLENBQUM7QUFFaEMsQ0FBQztBQUVELGlFQUFlRixZQUFZOzs7Ozs7OztVQ2xDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcclxuXHJcbi8vIGNvbnN0IGZha2VQcm9kdWN0cyA9IFtcclxuLy8gICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXHJcbi8vICAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcclxuLy8gICB7aWQ6IDMsIG5hbWU6IFwiT2xlalwifSxcclxuLy8gICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXHJcbi8vICAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxyXG4vLyBdO1xyXG5cclxuY29uc3QgTGFzdFByb2R1Y3RzID0gKHtwcm9kdWN0c30pID0+IHtcclxuICBjb25zdFtsYXN0UHJvZHVjdHMsIHNldExhc3RQcm9kdWN0c109dXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpPXByb2R1Y3RzLmxlbmd0aC0xOyBpPTA7IGktLSApe1xyXG4gICAgcmV0dXJuIGFyci5wdXNoKHByb2R1Y3RzW2ldKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzW2ldKVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYXJyKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtZGFuZ2VyXCJcclxuICAgICAgcGF0aD1cInByb2R1Y3RzXCJcclxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXHJcbiAgICAgIGxpc3RFbGVtZW50cz17cHJvZHVjdHN9IC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0czsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZTYyNGMxZTkyODA0OTY4YTVjOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0UHJvZHVjdHMiLCJzZXRMYXN0UHJvZHVjdHMiLCJhcnIiLCJpIiwibGVuZ3RoIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0aGVtZSIsInBhdGgiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=