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
  }, "className", true), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("334809f54ffe39eefb4d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxFQUFFLEVBQUUsZUFBZ0I7SUFBQ0MsZUFBZSxFQUFFO0VBQVksR0FBQyxlQUFzQixDQUFLLENBQ3pGLENBQ0MsQ0FDRixDQUFDLGVBQ05aLDBEQUFBO0lBQUtTLFNBQVMsRUFBQztFQUF1QixHQUNuQ04sUUFDRSxDQUNGLENBQ0QsQ0FDTixDQUFDO0FBRVAsQ0FBQztBQUVELGlFQUFlRixNQUFNOzs7Ozs7OztVQ25FckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGhhcy1zaGFkb3cgaXMtc3BhY2VkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSB0aXRsZSBpcy00XCI+VHdvamVQcnplcGlzeS5wbDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cclxuICAgICAgICAgICAgey8qIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPiAqL31cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgY2xhc3NOYW1lPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mb2xkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QcnplcGlzeTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBoYXMtdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJvZHVrdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtZmlmdGhcIj5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogXCI0cmVtXCIsIG1hcmdpblRvcDogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIFBvZHN0cm9ueVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlN0cm9uYSBnxYLDs3duYTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlc1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlByemVwaXN5PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0c1wifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlByb2R1a3R5PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICBBa2NqZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3JlY2lwZXMvYWRkXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+RG9kYWogUHJ6ZXBpczwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcHJvZHVjdHMvYWRkXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+RG9kYWogUHJvZHVrdDwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZm91ci1maWZ0aHNcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzM0ODA5ZjU0ZmZlMzllZWZiNGRcIikiXSwibmFtZXMiOlsiTmF2TGluayIsIlJlYWN0IiwiTGF5b3V0IiwiX3JlZiIsImNoaWxkcmVuIiwic3R5bGVzIiwibWFpbiIsIm1hcmdpblRvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRvIiwiYWN0aXZlQ2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=