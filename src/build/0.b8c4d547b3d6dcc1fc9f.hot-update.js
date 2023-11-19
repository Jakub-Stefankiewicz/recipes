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
    return isActive;
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
/******/ 	__webpack_require__.h = () => ("33bc386e8cfff656a2a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQ0QsT0FBTyxlQUFFOUIsMERBQUEsQ0FBQ3dCLCtEQUFXLE1BQUU7RUFBRSxDQUFFLENBQUMsZUFDcER4QiwwREFBQSxDQUFDbUIsb0RBQUs7SUFBQ1ksSUFBSSxFQUFDO0VBQVcsZ0JBQ3JCL0IsMERBQUEsQ0FBQ21CLG9EQUFLO0lBQUNZLElBQUksRUFBQyxLQUFLO0lBQUNELE9BQU8sZUFBRTlCLDBEQUFBLENBQUMyQiw4REFBYSxNQUFFO0VBQUUsQ0FBQyxDQUN6QyxDQUFDLGVBQ1IzQiwwREFBQSxDQUFDbUIsb0RBQUs7SUFBQ1ksSUFBSSxFQUFDLGVBQWU7SUFBQ0QsT0FBTyxlQUFFOUIsMERBQUEsQ0FBQ3lCLDhEQUFXLE1BQUU7RUFBRSxDQUFFLENBQ2pELENBQ0YsQ0FDSyxDQUNQLENBQ1YsQ0FBQztBQUVQLENBQUM7QUFFRCxpRUFBZUcsSUFBSTs7Ozs7Ozs7VUNuQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGhhcy1zaGFkb3cgaXMtc3BhY2VkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSB0aXRsZSBpcy00XCI+VHdvamVQcnplcGlzeS5wbDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cclxuICAgICAgICAgICAgey8qIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPiAqL31cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgY2xhc3NOYW1lPXsoe2lzQWN0aXZlfSk9PiBpc0FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZvbGRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByemVwaXN5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWt0eTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjRyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgUG9kc3Ryb255XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+U3Ryb25hIGfFgsOzd25hPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJ6ZXBpc3k8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJvZHVrdHk8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIEFrY2plXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlcy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcnplcGlzPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0cy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcm9kdWt0PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mb3VyLWZpZnRoc1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuLi9jb250YWluZXJzL0FsbFJlY2lwZXNcIjtcclxuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRSZWNpcGVcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuLi9jb250YWluZXJzL0FsbFByb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9BZGRQcm9kdWN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vUmVjaXBlcy9TaW5nbGVQcm9kdWN0XCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8QWxsUmVjaXBlcyAvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QgLz59Lz5cclxuICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzNiYzM4NmU4Y2ZmZjY1NmEyYTFcIikiXSwibmFtZXMiOlsiTmF2TGluayIsIlJlYWN0IiwiTGF5b3V0IiwiX3JlZiIsImNoaWxkcmVuIiwic3R5bGVzIiwibWFpbiIsIm1hcmdpblRvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRvIiwiX3JlZjIiLCJpc0FjdGl2ZSIsImFjdGl2ZUNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkhvbWUiLCJBbGxSZWNpcGVzIiwiQWRkUmVjaXBlIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0cyIsInN0b3JlIiwiU2luZ2xlUHJvZHVjdCIsIk1haW4iLCJpbmRleCIsImVsZW1lbnQiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==