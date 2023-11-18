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
  var _useState = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState, 2),
    lastProducts = _useState[0],
    setLastProducts = _useState[1];
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
/******/ 	__webpack_require__.h = () => ("96fe2cdf3486cb1a9ae4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZmE4NzkzMDk1NThmNjViNjBkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWDs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUM3QixJQUFBQyxTQUFBLEdBQUFDLGNBQUEsQ0FBcUNOLDJDQUFRO0lBQXZDTyxZQUFZLEdBQUFGLFNBQUE7SUFBRUcsZUFBZSxHQUFBSCxTQUFBO0VBQ25DLG9CQUNFTiwwREFBQSxDQUFDRSw4Q0FBSztJQUNKUyxLQUFLLEVBQUMsbUJBQW1CO0lBQ3pCQyxLQUFLLEVBQUMsV0FBVztJQUNqQkMsSUFBSSxFQUFDLFVBQVU7SUFDZkMsUUFBUSxFQUFDLGFBQWE7SUFDdEJDLFlBQVksRUFBRVY7RUFBUyxDQUFFLENBQUM7QUFFaEMsQ0FBQztBQUVELGlFQUFlRixZQUFZOzs7Ozs7Ozs7Ozs7OztBQ3ZCVztBQUNXO0FBQ1M7QUFFMUQsSUFBTWUsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7RUFDakMsT0FBTztJQUNMZCxRQUFRLEVBQUVjLEtBQUssQ0FBQ2Q7RUFDbEIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVcsb0RBQU8sQ0FBQ0UsZUFBZSxDQUFDLENBQUNELDREQUFXLEVBQUVkLHFFQUFZLENBQUM7Ozs7Ozs7O1VDVmxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xyXG5cclxuLy8gY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4vLyAgIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuLy8gICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4vLyAgIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4vLyAgIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuLy8gICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbi8vIF07XHJcblxyXG5jb25zdCBMYXN0UHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xyXG4gIGNvbnN0W2xhc3RQcm9kdWN0cywgc2V0TGFzdFByb2R1Y3RzXT11c2VTdGF0ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtZGFuZ2VyXCJcclxuICAgICAgcGF0aD1cInByb2R1Y3RzXCJcclxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXHJcbiAgICAgIGxpc3RFbGVtZW50cz17cHJvZHVjdHN9IC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0czsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgTGFzdFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTGFzdFByb2R1Y3RzXCJcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBbGxQcm9kdWN0cywgTGFzdFByb2R1Y3RzKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTZmZTJjZGYzNDg2Y2IxYTlhZTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhbmVsIiwiTGFzdFByb2R1Y3RzIiwiX3JlZiIsInByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0UHJvZHVjdHMiLCJzZXRMYXN0UHJvZHVjdHMiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0aGVtZSIsInBhdGgiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyIsImNvbm5lY3QiLCJBbGxQcm9kdWN0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==