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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, _defineProperty({
    to: "/recipes",
    className: "navbar-item"
  }, "className", {
    isActive: isActive
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("c683d4eea3a22b30176e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxlQUNwRHZCLDBEQUFBLENBQUNrQixvREFBSztJQUFDWSxJQUFJLEVBQUM7RUFBVyxnQkFDckI5QiwwREFBQSxDQUFDa0Isb0RBQUs7SUFBQ1ksSUFBSSxFQUFDLEtBQUs7SUFBQ0QsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQzBCLDhEQUFhLE1BQUU7RUFBRSxDQUFDLENBQ3pDLENBQUMsZUFDUjFCLDBEQUFBLENBQUNrQixvREFBSztJQUFDWSxJQUFJLEVBQUMsZUFBZTtJQUFDRCxPQUFPLGVBQUU3QiwwREFBQSxDQUFDd0IsOERBQVcsTUFBRTtFQUFFLENBQUUsQ0FDakQsQ0FDRixDQUNLLENBQ1AsQ0FDVixDQUFDO0FBRVAsQ0FBQztBQUVELGlFQUFlRyxJQUFJOzs7Ozs7OztVQ25DbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCIzcmVtXCJcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaGFzLXNoYWRvdyBpcy1zcGFjZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIHRpdGxlIGlzLTRcIj5Ud29qZVByemVwaXN5LnBsPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxyXG4gICAgICAgICAgICB7LyogPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+ICovfVxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9yZWNpcGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBjbGFzc05hbWU9eyh7aXNBY3RpdmV9KX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZvbGRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByemVwaXN5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWt0eTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjRyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgUG9kc3Ryb255XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+U3Ryb25hIGfFgsOzd25hPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJ6ZXBpc3k8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJvZHVrdHk8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIEFrY2plXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlcy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcnplcGlzPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0cy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcm9kdWt0PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mb3VyLWZpZnRoc1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuLi9jb250YWluZXJzL0FsbFJlY2lwZXNcIjtcclxuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRSZWNpcGVcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL0FsbFByb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRQcm9kdWN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vUmVjaXBlcy9TaW5nbGVQcm9kdWN0XCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8QWxsUmVjaXBlcyAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59Lz5cclxuICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzY4M2Q0ZWVhM2EyMmIzMDE3NmVcIikiXSwibmFtZXMiOlsiTmF2TGluayIsIlJlYWN0IiwiTGF5b3V0IiwiX3JlZiIsImNoaWxkcmVuIiwic3R5bGVzIiwibWFpbiIsIm1hcmdpblRvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRvIiwiaXNBY3RpdmUiLCJhY3RpdmVDbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJIb21lIiwiQWxsUmVjaXBlcyIsIkFkZFJlY2lwZSIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdHMiLCJzdG9yZSIsIlNpbmdsZVByb2R1Y3QiLCJNYWluIiwiaW5kZXgiLCJlbGVtZW50IiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=