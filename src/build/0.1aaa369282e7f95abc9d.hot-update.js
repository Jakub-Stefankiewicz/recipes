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
  }, "className", function className(_ref2) {
    var isActive = _ref2.isActive;
    return isActive ? "is-active" : undefined;
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
/******/ 	__webpack_require__.h = () => ("d8e0ebefc9a0ba2aebad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQ1ksSUFBSSxFQUFDLFdBQVc7SUFBQ0QsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ3lCLCtEQUFXLE1BQUU7RUFBRSxDQUFFLENBQUMsZUFDcER6QiwwREFBQSxDQUFDb0Isb0RBQUs7SUFBQ1ksSUFBSSxFQUFDO0VBQVcsZ0JBQ3JCaEMsMERBQUEsQ0FBQ29CLG9EQUFLO0lBQUNZLElBQUksRUFBQyxLQUFLO0lBQUNELE9BQU8sZUFBRS9CLDBEQUFBLENBQUM0Qiw4REFBYSxNQUFFO0VBQUUsQ0FBQyxDQUN6QyxDQUFDLGVBQ1I1QiwwREFBQSxDQUFDb0Isb0RBQUs7SUFBQ1ksSUFBSSxFQUFDLGVBQWU7SUFBQ0QsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQzBCLDhEQUFXLE1BQUU7RUFBRSxDQUFFLENBQ2pELENBQ0YsQ0FDSyxDQUNQLENBQ1YsQ0FBQztBQUVQLENBQUM7QUFFRCxpRUFBZUcsSUFBSTs7Ozs7Ozs7VUNuQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGhhcy1zaGFkb3cgaXMtc3BhY2VkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSB0aXRsZSBpcy00XCI+VHdvamVQcnplcGlzeS5wbDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cclxuICAgICAgICAgICAgey8qIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPiAqL31cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgY2xhc3NOYW1lPXsoe2lzQWN0aXZlfSk9PiBpc0FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiB1bmRlZmluZWR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mb2xkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QcnplcGlzeTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJvZHVrdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtZmlmdGhcIj5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI0cmVtXCIsIG1hcmdpblRvcDogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIFBvZHN0cm9ueVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlN0cm9uYSBnxYLDs3duYTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlc1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlByemVwaXN5PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0c1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlByb2R1a3R5PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICBBa2NqZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3JlY2lwZXMvYWRkXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+RG9kYWogUHJ6ZXBpczwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcHJvZHVjdHMvYWRkXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+RG9kYWogUHJvZHVrdDwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZm91ci1maWZ0aHNcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29udGFpbmVycy9BbGxSZWNpcGVzXCI7XHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWRkUmVjaXBlXCI7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9BbGxQcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1JlY2lwZXMvU2luZ2xlUHJvZHVjdFwiO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8SG9tZSAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PEFsbFJlY2lwZXMgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIjppZFwiIGVsZW1lbnQ9ezxTaW5nbGVQcm9kdWN0IC8+fS8+XHJcbiAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdHMgLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ4ZTBlYmVmYzlhMGJhMmFlYmFkXCIpIl0sIm5hbWVzIjpbIk5hdkxpbmsiLCJSZWFjdCIsIkxheW91dCIsIl9yZWYiLCJjaGlsZHJlbiIsInN0eWxlcyIsIm1haW4iLCJtYXJnaW5Ub3AiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJfZGVmaW5lUHJvcGVydHkiLCJ0byIsIl9yZWYyIiwiaXNBY3RpdmUiLCJ1bmRlZmluZWQiLCJhY3RpdmVDbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJIb21lIiwiQWxsUmVjaXBlcyIsIkFkZFJlY2lwZSIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdHMiLCJzdG9yZSIsIlNpbmdsZVByb2R1Y3QiLCJNYWluIiwiaW5kZXgiLCJlbGVtZW50IiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=