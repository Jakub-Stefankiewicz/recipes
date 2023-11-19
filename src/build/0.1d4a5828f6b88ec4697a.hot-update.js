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
    className: "navbar-item",
    activeClassName: "is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon has-text-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-folder"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Przepisy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products",
    className: "navbar-item",
    activeClassName: "is-active"
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
    activeClassName: "is-active"
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
/******/ 	__webpack_require__.h = () => ("a182f9d1b4fbba1f0918")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSztJQUFDWSxJQUFJLEVBQUM7RUFBVyxnQkFDckI1QiwwREFBQSxDQUFDZ0Isb0RBQUs7SUFBQ1ksSUFBSSxFQUFDLEtBQUs7SUFBQ0QsT0FBTyxlQUFFM0IsMERBQUEsQ0FBQ3dCLDhEQUFhLE1BQUU7RUFBRSxDQUFDLENBQ3pDLENBQUMsZUFDUnhCLDBEQUFBLENBQUNnQixvREFBSztJQUFDWSxJQUFJLEVBQUMsZUFBZTtJQUFDRCxPQUFPLGVBQUUzQiwwREFBQSxDQUFDc0IsOERBQVcsTUFBRTtFQUFFLENBQUUsQ0FDakQsQ0FDRixDQUNLLENBQ1AsQ0FDVixDQUFDO0FBRVAsQ0FBQztBQUVELGlFQUFlRyxJQUFJOzs7Ozs7OztVQ25DbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCIzcmVtXCJcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaGFzLXNoYWRvdyBpcy1zcGFjZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIHRpdGxlIGlzLTRcIj5Ud29qZVByemVwaXN5LnBsPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICB7LyogPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+ICovfVxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9yZWNpcGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaGFzLXRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZm9sZGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJ6ZXBpc3k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3Byb2R1Y3RzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaGFzLXRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByb2R1a3R5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLWZpZnRoXCI+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNHJlbVwiLCBtYXJnaW5Ub3A6IFwiMXJlbVwifX0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICBQb2RzdHJvbnlcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9cIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5TdHJvbmEgZ8WCw7N3bmE8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3JlY2lwZXNcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5QcnplcGlzeTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcHJvZHVjdHNcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Qcm9kdWt0eTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgQWtjamVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzL2FkZFwifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PkRvZGFqIFByemVwaXM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzL2FkZFwifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PkRvZGFqIFByb2R1a3Q8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWZvdXItZmlmdGhzXCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWxsUmVjaXBlc1wiO1xyXG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuLi9jb250YWluZXJzL0FkZFJlY2lwZVwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWxsUHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL0FkZFByb2R1Y3RcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9SZWNpcGVzL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdCAvPn0vPlxyXG4gICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3RzIC8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMTgyZjlkMWI0ZmJiYTFmMDkxOFwiKSJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiUmVhY3QiLCJMYXlvdXQiLCJfcmVmIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJtYWluIiwibWFyZ2luVG9wIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJhY3RpdmVDbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJIb21lIiwiQWxsUmVjaXBlcyIsIkFkZFJlY2lwZSIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdHMiLCJzdG9yZSIsIlNpbmdsZVByb2R1Y3QiLCJNYWluIiwiaW5kZXgiLCJlbGVtZW50IiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=