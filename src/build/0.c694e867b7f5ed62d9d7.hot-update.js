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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLastProducts(products.slice(products.length - 6, products.length - 1));
    console.log(products.slice(products.length - 6, products.length));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: products.slice(products.length - 6, products.length - 1)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d918f25230faacbb4a1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNjk0ZTg2N2I3ZjVlZDYyZDlkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDN0IsSUFBQUMsU0FBQSxHQUFxQ0wsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFFckNQLGdEQUFTLENBQUMsWUFBSTtJQUNaVSxlQUFlLENBQUNMLFFBQVEsQ0FBQ00sS0FBSyxDQUFDTixRQUFRLENBQUNPLE1BQU0sR0FBQyxDQUFDLEVBQUVQLFFBQVEsQ0FBQ08sTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDTSxLQUFLLENBQUNOLFFBQVEsQ0FBQ08sTUFBTSxHQUFDLENBQUMsRUFBRVAsUUFBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUNqRSxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBRUgsb0JBQ0ViLDBEQUFBLENBQUNHLDhDQUFLO0lBQ0pjLEtBQUssRUFBQyxtQkFBbUI7SUFDekJDLEtBQUssRUFBQyxXQUFXO0lBQ2pCQyxJQUFJLEVBQUMsVUFBVTtJQUNmQyxRQUFRLEVBQUMsYUFBYTtJQUN0QkMsWUFBWSxFQUFFZixRQUFRLENBQUNNLEtBQUssQ0FBQ04sUUFBUSxDQUFDTyxNQUFNLEdBQUMsQ0FBQyxFQUFFUCxRQUFRLENBQUNPLE1BQU0sR0FBQyxDQUFDO0VBQUUsQ0FBRSxDQUFDO0FBRTVFLENBQUM7QUFFRCxpRUFBZVQsWUFBWTs7Ozs7Ozs7VUM3QjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG4vLyBjb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbi8vICAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4vLyAgIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbi8vICAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbi8vICAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4vLyAgIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuLy8gXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcbiAgY29uc3RbbGFzdFByb2R1Y3RzLCBzZXRMYXN0UHJvZHVjdHNdPXVzZVN0YXRlKFtdKTtcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldExhc3RQcm9kdWN0cyhwcm9kdWN0cy5zbGljZShwcm9kdWN0cy5sZW5ndGgtNiwgcHJvZHVjdHMubGVuZ3RoLTEpKVxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzLnNsaWNlKHByb2R1Y3RzLmxlbmd0aC02LCBwcm9kdWN0cy5sZW5ndGgpKTtcclxufSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYW5lbFxyXG4gICAgICB0aXRsZT1cIk9zdGF0bmllIHByb2R1a3R5XCJcclxuICAgICAgdGhlbWU9XCJpcy1kYW5nZXJcIlxyXG4gICAgICBwYXRoPVwicHJvZHVjdHNcIlxyXG4gICAgICBpY29uTmFtZT1cInBpenphLXNsaWNlXCJcclxuICAgICAgbGlzdEVsZW1lbnRzPXtwcm9kdWN0cy5zbGljZShwcm9kdWN0cy5sZW5ndGgtNiwgcHJvZHVjdHMubGVuZ3RoLTEpfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UHJvZHVjdHM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDkxOGYyNTIzMGZhYWNiYjRhMWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhbmVsIiwiTGFzdFByb2R1Y3RzIiwiX3JlZiIsInByb2R1Y3RzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGFzdFByb2R1Y3RzIiwic2V0TGFzdFByb2R1Y3RzIiwic2xpY2UiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwidGhlbWUiLCJwYXRoIiwiaWNvbk5hbWUiLCJsaXN0RWxlbWVudHMiXSwic291cmNlUm9vdCI6IiJ9