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
  for (var i = products.length - 1; i = 0;) setLastProducts();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: products
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25ab9e22a34bd8918059")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZTI5MWRkODdlYTQzMzY4MTNkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDN0IsSUFBQUMsU0FBQSxHQUFxQ0wsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFFbkMsS0FBSSxJQUFJSSxDQUFDLEdBQUNOLFFBQVEsQ0FBQ08sTUFBTSxHQUFDLENBQUMsRUFBRUQsQ0FBQyxHQUFDLENBQUMsR0FFaENELGVBQWUsQ0FBQyxDQUFDO0VBRWpCLG9CQUNFWCwwREFBQSxDQUFDRyw4Q0FBSztJQUNKWSxLQUFLLEVBQUMsbUJBQW1CO0lBQ3pCQyxLQUFLLEVBQUMsV0FBVztJQUNqQkMsSUFBSSxFQUFDLFVBQVU7SUFDZkMsUUFBUSxFQUFDLGFBQWE7SUFDdEJDLFlBQVksRUFBRWI7RUFBUyxDQUFFLENBQUM7QUFFaEMsQ0FBQztBQUVELGlFQUFlRixZQUFZOzs7Ozs7Ozs7Ozs7OztBQzVCVztBQUNXO0FBQ1M7QUFFMUQsSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTGpCLFFBQVEsRUFBRWlCLEtBQUssQ0FBQ2pCO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVjLG9EQUFPLENBQUNFLGVBQWUsQ0FBQyxDQUFDRCw0REFBVyxFQUFFakIscUVBQVksQ0FBQzs7Ozs7Ozs7VUNWbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9BbGxQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcclxuXHJcbi8vIGNvbnN0IGZha2VQcm9kdWN0cyA9IFtcclxuLy8gICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIn0sXHJcbi8vICAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcclxuLy8gICB7aWQ6IDMsIG5hbWU6IFwiT2xlalwifSxcclxuLy8gICB7aWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIn0sXHJcbi8vICAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxyXG4vLyBdO1xyXG5cclxuY29uc3QgTGFzdFByb2R1Y3RzID0gKHtwcm9kdWN0c30pID0+IHtcclxuICBjb25zdFtsYXN0UHJvZHVjdHMsIHNldExhc3RQcm9kdWN0c109dXNlU3RhdGUoW10pO1xyXG5cclxuICBmb3IobGV0IGk9cHJvZHVjdHMubGVuZ3RoLTE7IGk9MDsgIClcclxuXHJcbiAgc2V0TGFzdFByb2R1Y3RzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYW5lbFxyXG4gICAgICB0aXRsZT1cIk9zdGF0bmllIHByb2R1a3R5XCJcclxuICAgICAgdGhlbWU9XCJpcy1kYW5nZXJcIlxyXG4gICAgICBwYXRoPVwicHJvZHVjdHNcIlxyXG4gICAgICBpY29uTmFtZT1cInBpenphLXNsaWNlXCJcclxuICAgICAgbGlzdEVsZW1lbnRzPXtwcm9kdWN0c30gLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdFByb2R1Y3RzOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCBMYXN0UHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHNcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFsbFByb2R1Y3RzLCBMYXN0UHJvZHVjdHMpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNWFiOWUyMmEzNGJkODkxODA1OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0UHJvZHVjdHMiLCJzZXRMYXN0UHJvZHVjdHMiLCJpIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwidGhlbWUiLCJwYXRoIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiLCJjb25uZWN0IiwiQWxsUHJvZHVjdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=