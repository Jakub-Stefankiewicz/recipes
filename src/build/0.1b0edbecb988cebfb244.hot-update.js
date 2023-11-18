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
/******/ 	__webpack_require__.h = () => ("c860e2d96684a0caa3cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYjBlZGJlY2I5ODhjZWJmYjI0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBLElBQWRDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzdCLElBQUFDLFNBQUEsR0FBcUNMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBRW5DLElBQUlJLEdBQUcsR0FBRyxFQUFFO0VBRVosS0FBSSxJQUFJQyxDQUFDLEdBQUNQLFFBQVEsQ0FBQ1EsTUFBTSxHQUFDLENBQUMsRUFBRUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDckNELEdBQUcsTUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLSixHQUFHLElBQUVOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLEVBQUM7RUFDM0I7RUFFQUksT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQztFQUdoQixvQkFDRVosMERBQUEsQ0FBQ0csOENBQUs7SUFDSmlCLEtBQUssRUFBQyxtQkFBbUI7SUFDekJDLEtBQUssRUFBQyxXQUFXO0lBQ2pCQyxJQUFJLEVBQUMsVUFBVTtJQUNmQyxRQUFRLEVBQUMsYUFBYTtJQUN0QkMsWUFBWSxFQUFFbEI7RUFBUyxDQUFFLENBQUM7QUFFaEMsQ0FBQztBQUVELGlFQUFlRixZQUFZOzs7Ozs7Ozs7Ozs7OztBQ2pDVztBQUNXO0FBQ1M7QUFFMUQsSUFBTXVCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTHRCLFFBQVEsRUFBRXNCLEtBQUssQ0FBQ3RCO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVtQixvREFBTyxDQUFDRSxlQUFlLENBQUMsQ0FBQ0QsNERBQVcsRUFBRXRCLHFFQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNWNUI7QUFDb0I7QUFFMUQsSUFBTXVCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pDLE9BQU87SUFDTHRCLFFBQVEsRUFBRXNCLEtBQUssQ0FBQ3RCO0VBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVtQixvREFBTyxDQUFDRSxlQUFlLENBQUMsQ0FBQ3ZCLHFFQUFZLENBQUM7Ozs7Ozs7O1VDVHJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbnRhaW5lcnMvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xyXG5cclxuLy8gY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4vLyAgIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuLy8gICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4vLyAgIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4vLyAgIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuLy8gICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbi8vIF07XHJcblxyXG5jb25zdCBMYXN0UHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xyXG4gIGNvbnN0W2xhc3RQcm9kdWN0cywgc2V0TGFzdFByb2R1Y3RzXT11c2VTdGF0ZShbXSk7XHJcblxyXG4gIGxldCBhcnIgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpPXByb2R1Y3RzLmxlbmd0aC0xOyBpPTA7IGktLSApe1xyXG4gICAgYXJyPVsuLi5hcnIsIHByb2R1Y3RzW2ldXTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGFycik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e3Byb2R1Y3RzfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UHJvZHVjdHM7IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUHJvZHVjdHMsIExhc3RQcm9kdWN0cyk7XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL0xhc3RQcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGFzdFByb2R1Y3RzKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjODYwZTJkOTY2ODRhMGNhYTNjZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0UHJvZHVjdHMiLCJzZXRMYXN0UHJvZHVjdHMiLCJhcnIiLCJpIiwibGVuZ3RoIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiY29ubmVjdCIsIkFsbFByb2R1Y3RzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9