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
    return isActive ? "is-active " : undefined;
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ea46cbeb151f1f5ad58")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNZLEVBQUUsRUFBRSxjQUFlO0lBQUNJLGVBQWUsRUFBRTtFQUFZLEdBQUMsZUFBc0IsQ0FBSyxDQUFDLGVBQzNGZiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0QscURBQU87SUFBQ1ksRUFBRSxFQUFFLGVBQWdCO0lBQUNJLGVBQWUsRUFBRTtFQUFZLEdBQUMsZUFBc0IsQ0FBSyxDQUN6RixDQUNDLENBQ0YsQ0FBQyxlQUNOZiwwREFBQTtJQUFLUyxTQUFTLEVBQUM7RUFBdUIsR0FDbkNOLFFBQ0UsQ0FDRixDQUNELENBQ04sQ0FBQztBQUVQLENBQUM7QUFFRCxpRUFBZUYsTUFBTTs7Ozs7Ozs7VUNuRXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1haW46IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBoYXMtc2hhZG93IGlzLXNwYWNlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gdGl0bGUgaXMtNFwiPlR3b2plUHJ6ZXBpc3kucGw8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsvKiA8TmF2TGluayB0bz1cIi9yZWNpcGVzXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIj4gKi99XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGNsYXNzTmFtZT17KHtpc0FjdGl2ZX0pPT4gaXNBY3RpdmUgPyBcImlzLWFjdGl2ZSBcIiA6IHVuZGVmaW5lZH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZvbGRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByemVwaXN5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWt0eTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjRyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgUG9kc3Ryb255XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+U3Ryb25hIGfFgsOzd25hPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJ6ZXBpc3k8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJvZHVrdHk8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIEFrY2plXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlcy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcnplcGlzPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0cy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcm9kdWt0PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mb3VyLWZpZnRoc1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZWE0NmNiZWIxNTFmMWY1YWQ1OFwiKSJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiUmVhY3QiLCJMYXlvdXQiLCJfcmVmIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJtYWluIiwibWFyZ2luVG9wIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiX2RlZmluZVByb3BlcnR5IiwidG8iLCJfcmVmMiIsImlzQWN0aXZlIiwidW5kZWZpbmVkIiwiYWN0aXZlQ2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=