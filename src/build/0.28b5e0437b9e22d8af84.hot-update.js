"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var _containers_AllProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(118);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(103);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);










var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AllProducts__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}, {
  id: 6,
  name: "Pomidory"
}, {
  id: 7,
  name: "Przyprawa curry"
}, {
  id: 8,
  name: "Olej"
}, {
  id: 9,
  name: "Wołowina 500g"
}, {
  id: 10,
  name: "Ziemniaki"
}];
var AllProducts = function AllProducts(_ref) {
  var products = _ref.products;
  console.log(products);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie produkty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "products",
    listElements: fakeProducts,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProducts);

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);


var mapStateToProps = function mapStateToProps(state) {
  console.log("tu");
  return {
    products: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db04facb7639a6214d6f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOGI1ZTA0MzdiOWUyMmQ4YWY4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUN5QjtBQUNsQztBQUNKO0FBQ1E7QUFDRztBQUNjO0FBQ1g7QUFDTDtBQUluQyxJQUFNWSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2pCLG9CQUFPWiwwREFBQSxDQUFBQSx1REFBQSxxQkFDTEEsMERBQUEsQ0FBQ0MsaURBQVE7SUFBQ1UsS0FBSyxFQUFFQSxvREFBS0E7RUFBQyxnQkFDcEJYLDBEQUFBLENBQUNFLDJEQUFhLHFCQUNaRiwwREFBQSxDQUFDSywrQ0FBTSxxQkFDTkwsMERBQUEsQ0FBQ0kscURBQU0scUJBQ0xKLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNZLEtBQUs7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ00sNkNBQUksTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNsQ04sMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLFVBQVU7SUFBQ0QsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ08sZ0RBQVUsTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNsRFAsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLGNBQWM7SUFBQ0QsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1Esb0RBQVMsTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNyRFIsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLFdBQVc7SUFBQ0QsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1MsK0RBQVcsTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUNwRFQsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2MsSUFBSSxFQUFDLGVBQWU7SUFBQ0QsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1UscURBQVcsTUFBRTtFQUFFLENBQUUsQ0FDakQsQ0FDRCxDQUNLLENBQ1IsQ0FDVixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNHO0FBRTdCLElBQU1PLFlBQVksR0FBRyxDQUNuQjtFQUFFQyxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBVyxDQUFDLEVBQzNCO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ2xDO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFPLENBQUMsRUFDdkI7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWdCLENBQUMsRUFDaEM7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQVksQ0FBQyxFQUM1QjtFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBVyxDQUFDLEVBQzNCO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFrQixDQUFDLEVBQ2xDO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFPLENBQUMsRUFDdkI7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWdCLENBQUMsRUFDaEM7RUFBRUQsRUFBRSxFQUFFLEVBQUU7RUFBRUMsSUFBSSxFQUFFO0FBQVksQ0FBQyxDQUM5QjtBQUVELElBQU1aLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBYSxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFFNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7RUFFckIsb0JBQ0V2QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFPLEdBQUMsb0JBQXNCLENBQUMsZUFDN0MxQiwwREFBQSxDQUFDa0IsOENBQUs7SUFBQ1MsUUFBUSxFQUFFLFFBQVM7SUFBQ1YsSUFBSSxFQUFFLFVBQVc7SUFBQ1csWUFBWSxFQUFFVCxZQUFhO0lBQUNVLE9BQU8sRUFBRSxLQUFNO0lBQUNDLE1BQU0sRUFBRTtFQUFNLENBQUUsQ0FDekcsQ0FBQztBQUVQLENBQUM7QUFFRCxpRUFBZXJCLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUM1Qlc7QUFDVztBQUVoRCxJQUFNdUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7RUFFL0JULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUVqQixPQUFPO0lBQ0hGLFFBQVEsRUFBRVUsS0FBSyxDQUFDVjtFQUNwQixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlUSxvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQ3ZCLDREQUFXLENBQUM7Ozs7Ozs7O1VDWnBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29udGFpbmVycy9BbGxQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4vUmVjaXBlc1wiXHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIlxyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHNcIlxyXG5pbXBvcnQgQWRkUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHMvQWRkXCJcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybiA8PlxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICA8QnJvd3NlclJvdXRlcj4gXHJcbiAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8QWxsUmVjaXBlcyAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3RzIC8+fSAvPlxyXG4gICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgPC9Ccm93c2VyUm91dGVyPiBcclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgPC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogXCJQb21pZG9yeVwiIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIiB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6IFwiT2xlalwiIH0sXHJcbiAgeyBpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wiIH0sXHJcbiAgeyBpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIiB9LFxyXG4gIHsgaWQ6IDYsIG5hbWU6IFwiUG9taWRvcnlcIiB9LFxyXG4gIHsgaWQ6IDcsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCIgfSxcclxuICB7IGlkOiA4LCBuYW1lOiBcIk9sZWpcIiB9LFxyXG4gIHsgaWQ6IDksIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIiB9LFxyXG4gIHsgaWQ6IDEwLCBuYW1lOiBcIlppZW1uaWFraVwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBBbGxQcm9kdWN0cyA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPldzenlzdGtpZSBwcm9kdWt0eTwvaDE+XHJcbiAgICAgIDxQYW5lbCBpY29uTmFtZT17XCJmb2xkZXJcIn0gcGF0aD17XCJwcm9kdWN0c1wifSBsaXN0RWxlbWVudHM9e2Zha2VQcm9kdWN0c30gaGVhZGluZz17ZmFsc2V9IGZvb3Rlcj17ZmFsc2V9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvZHVjdHM7IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInR1XCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBbGxQcm9kdWN0cykiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYjA0ZmFjYjc2MzlhNjIxNGQ2ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGF5b3V0IiwiSG9tZSIsIkFsbFJlY2lwZXMiLCJBZGRSZWNpcGUiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3RzIiwic3RvcmUiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiaW5kZXgiLCJlbGVtZW50IiwicGF0aCIsIlBhbmVsIiwiZmFrZVByb2R1Y3RzIiwiaWQiLCJuYW1lIiwiX3JlZiIsInByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiaGVhZGluZyIsImZvb3RlciIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=