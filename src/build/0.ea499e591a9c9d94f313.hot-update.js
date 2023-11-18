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
  console.log;
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
/******/ 	__webpack_require__.h = () => ("eca1bea2c59b0f3f37e7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYTQ5OWU1OTFhOWM5ZDk0ZjMxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBLElBQWRDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzdCLElBQUFDLFNBQUEsR0FBcUNMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBRW5DLElBQUlJLEdBQUcsR0FBRyxFQUFFO0VBRVosS0FBSSxJQUFJQyxDQUFDLEdBQUNQLFFBQVEsQ0FBQ1EsTUFBTSxHQUFDLENBQUMsRUFBRUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDckNELEdBQUcsTUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLSixHQUFHLElBQUVOLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLEVBQUM7RUFDM0I7RUFFQUksT0FBTyxDQUFDQyxHQUFHO0VBRVhQLGVBQWUsQ0FBQyxDQUFDO0VBRWpCLG9CQUNFWCwwREFBQSxDQUFDRyw4Q0FBSztJQUNKaUIsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFDLFdBQVc7SUFDakJDLElBQUksRUFBQyxVQUFVO0lBQ2ZDLFFBQVEsRUFBQyxhQUFhO0lBQ3RCQyxZQUFZLEVBQUVsQjtFQUFTLENBQUUsQ0FBQztBQUVoQyxDQUFDO0FBRUQsaUVBQWVGLFlBQVk7Ozs7Ozs7O1VDbEMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL0hvbWUvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xyXG5cclxuLy8gY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4vLyAgIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuLy8gICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4vLyAgIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4vLyAgIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuLy8gICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbi8vIF07XHJcblxyXG5jb25zdCBMYXN0UHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xyXG4gIGNvbnN0W2xhc3RQcm9kdWN0cywgc2V0TGFzdFByb2R1Y3RzXT11c2VTdGF0ZShbXSk7XHJcblxyXG4gIHZhciBhcnIgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpPXByb2R1Y3RzLmxlbmd0aC0xOyBpPTA7IGktLSApe1xyXG4gICAgYXJyPVsuLi5hcnIsIHByb2R1Y3RzW2ldXTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nXHJcblxyXG4gIHNldExhc3RQcm9kdWN0cygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtZGFuZ2VyXCJcclxuICAgICAgcGF0aD1cInByb2R1Y3RzXCJcclxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXHJcbiAgICAgIGxpc3RFbGVtZW50cz17cHJvZHVjdHN9IC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0czsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlY2ExYmVhMmM1OWIwZjNmMzdlN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFuZWwiLCJMYXN0UHJvZHVjdHMiLCJfcmVmIiwicHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0UHJvZHVjdHMiLCJzZXRMYXN0UHJvZHVjdHMiLCJhcnIiLCJpIiwibGVuZ3RoIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==