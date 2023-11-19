"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Layout = function Layout(_ref) {
  var children = _ref.children;
  var styles = {
    main: {
      marginTop: "3rem"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar has-shadow is-spaced"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "navbar-item title is-4"
  }, "TwojePrzepisy.pl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes",
    className: "navbar-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon has-text-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-folder"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Przepisy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products",
    className: "navbar-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon has-text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Produkty")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "container",
    style: styles.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-fifth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "menu",
    style: {
      marginRight: "4rem",
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "menu-label"
  }, "Podstrony"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/",
    className: function className(_ref2) {
      var isActive = _ref2.isActive;
      return isActive ? 'is-active' : undefined;
    }
  }, "Strona g\u0142\xF3wna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes",
    activeClassName: "is-active"
  }, "Przepisy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products",
    activeClassName: "is-active"
  }, "Produkty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "menu-label"
  }, "Akcje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes/add",
    activeClassName: "is-active"
  }, "Dodaj Przepis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products/add",
    activeClassName: "is-active"
  }, "Dodaj Produkt"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-four-fifths"
  }, children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _containers_AllRecipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var _containers_AddRecipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _containers_AllProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(106);
/* harmony import */ var _containers_AddProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(111);
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);











var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AllRecipes__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AddRecipe__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AllProducts__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: ":id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_AddProduct__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe93d5307c60350f18ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFBLENBQUN3QiwrREFBVyxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQ3BEeEIsMERBQUEsQ0FBQ21CLG9EQUFLO0lBQUNZLElBQUksRUFBQztFQUFXLGdCQUNyQi9CLDBEQUFBLENBQUNtQixvREFBSztJQUFDWSxJQUFJLEVBQUMsS0FBSztJQUFDRCxPQUFPLGVBQUU5QiwwREFBQSxDQUFDMkIsOERBQWEsTUFBRTtFQUFFLENBQUMsQ0FDekMsQ0FBQyxlQUNSM0IsMERBQUEsQ0FBQ21CLG9EQUFLO0lBQUNZLElBQUksRUFBQyxlQUFlO0lBQUNELE9BQU8sZUFBRTlCLDBEQUFBLENBQUN5Qiw4REFBVyxNQUFFO0VBQUUsQ0FBRSxDQUNqRCxDQUNGLENBQ0ssQ0FDUCxDQUNWLENBQUM7QUFFUCxDQUFDO0FBRUQsaUVBQWVHLElBQUk7Ozs7Ozs7O1VDbkNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1haW46IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBoYXMtc2hhZG93IGlzLXNwYWNlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gdGl0bGUgaXMtNFwiPlR3b2plUHJ6ZXBpc3kucGw8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mb2xkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QcnplcGlzeTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJvZHVrdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtZmlmdGhcIj5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI0cmVtXCIsIG1hcmdpblRvcDogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIFBvZHN0cm9ueVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifSBjbGFzc05hbWU9eyh7aXNBY3RpdmV9KSA9PiBpc0FjdGl2ZSA/ICdpcy1hY3RpdmUnIDogdW5kZWZpbmVkfT5TdHJvbmEgZ8WCw7N3bmE8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3JlY2lwZXNcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5QcnplcGlzeTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcHJvZHVjdHNcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Qcm9kdWt0eTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgQWtjamVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzL2FkZFwifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PkRvZGFqIFByemVwaXM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzL2FkZFwifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PkRvZGFqIFByb2R1a3Q8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZvdXItZmlmdGhzXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWxsUmVjaXBlc1wiO1xyXG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuLi9jb250YWluZXJzL0FkZFJlY2lwZVwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL0FkZFByb2R1Y3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9SZWNpcGVzL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0vPlxyXG4gICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3RzIC8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZTkzZDUzMDdjNjAzNTBmMThjYVwiKSJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiUmVhY3QiLCJMYXlvdXQiLCJfcmVmIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJtYWluIiwibWFyZ2luVG9wIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiX3JlZjIiLCJpc0FjdGl2ZSIsInVuZGVmaW5lZCIsImFjdGl2ZUNsYXNzTmFtZSIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiSG9tZSIsIkFsbFJlY2lwZXMiLCJBZGRSZWNpcGUiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3RzIiwic3RvcmUiLCJTaW5nbGVQcm9kdWN0IiwiTWFpbiIsImluZGV4IiwiZWxlbWVudCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9