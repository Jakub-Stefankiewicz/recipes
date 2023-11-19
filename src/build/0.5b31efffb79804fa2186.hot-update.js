"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var Panel = function Panel(_ref) {
  var theme = _ref.theme,
    title = _ref.title,
    iconName = _ref.iconName,
    path = _ref.path,
    listElements = _ref.listElements,
    _ref$heading = _ref.heading,
    heading = _ref$heading === void 0 ? true : _ref$heading,
    _ref$footer = _ref.footer,
    footer = _ref$footer === void 0 ? true : _ref$footer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel ".concat(theme)
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "panel-heading"
  }, title), listElements.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), listElements.length > 0 && listElements.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/".concat(path, "/").concat(el.id),
      className: "panel-block",
      key: el.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "panel-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fas fa-".concat(iconName)
    })), el.name);
  }), footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/".concat(path),
    className: "button is-link is-outlined is-fullwidth",
    style: {
      margin: ".8rem"
    }
  }, "Zobacz wi\u0119cej")));
};
Panel.propTypes = {
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  iconName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  listElements: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  footer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dedb746620aa9ff3c61a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41YjMxZWZmZmI3OTgwNGZhMjE4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ1M7QUFFbkMsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUFDLElBQUEsRUFRTDtFQUFBLElBUEpDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQ0xDLEtBQUssR0FBQUYsSUFBQSxDQUFMRSxLQUFLO0lBQ0xDLFFBQVEsR0FBQUgsSUFBQSxDQUFSRyxRQUFRO0lBQ1JDLElBQUksR0FBQUosSUFBQSxDQUFKSSxJQUFJO0lBQ0pDLFlBQVksR0FBQUwsSUFBQSxDQUFaSyxZQUFZO0lBQUFDLFlBQUEsR0FBQU4sSUFBQSxDQUNaTyxPQUFPO0lBQVBBLE9BQU8sR0FBQUQsWUFBQSxjQUFHLElBQUksR0FBQUEsWUFBQTtJQUFBRSxXQUFBLEdBQUFSLElBQUEsQ0FDZFMsTUFBTTtJQUFOQSxNQUFNLEdBQUFELFdBQUEsY0FBRyxJQUFJLEdBQUFBLFdBQUE7RUFFYixvQkFDRVgsMERBQUE7SUFBS2MsU0FBUyxXQUFBQyxNQUFBLENBQVdYLEtBQUs7RUFBRyxHQUM5Qk0sT0FBTyxpQkFBSVYsMERBQUE7SUFBR2MsU0FBUyxFQUFDO0VBQWUsR0FBRVQsS0FBUyxDQUFDLEVBRW5ERyxZQUFZLENBQUNRLE1BQU0sS0FBSyxDQUFDLGlCQUN4QmhCLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFhLEdBQUMsaUJBQWlCLENBQy9DLEVBRUFOLFlBQVksQ0FBQ1EsTUFBTSxHQUFHLENBQUMsSUFDdEJSLFlBQVksQ0FBQ1MsR0FBRyxDQUFDLFVBQUNDLEVBQUU7SUFBQSxvQkFDbEJsQiwwREFBQSxDQUFDRCxrREFBSTtNQUFDb0IsRUFBRSxNQUFBSixNQUFBLENBQU1SLElBQUksT0FBQVEsTUFBQSxDQUFJRyxFQUFFLENBQUNFLEVBQUUsQ0FBRztNQUFDTixTQUFTLEVBQUMsYUFBYTtNQUFDTyxHQUFHLEVBQUVILEVBQUUsQ0FBQ0U7SUFBRyxnQkFDaEVwQiwwREFBQTtNQUFNYyxTQUFTLEVBQUM7SUFBWSxnQkFDMUJkLDBEQUFBO01BQUdjLFNBQVMsWUFBQUMsTUFBQSxDQUFZVCxRQUFRO0lBQUcsQ0FBRSxDQUNqQyxDQUFDLEVBQ05ZLEVBQUUsQ0FBQ0ksSUFDQSxDQUFDO0VBQUEsQ0FDUixDQUFDLEVBRUhWLE1BQU0saUJBQ0xaLDBEQUFBO0lBQVFjLFNBQVMsRUFBQztFQUFhLGdCQUM3QmQsMERBQUEsQ0FBQ0Qsa0RBQUk7SUFDSG9CLEVBQUUsTUFBQUosTUFBQSxDQUFNUixJQUFJLENBQUc7SUFDZk8sU0FBUyxFQUFDLHlDQUF5QztJQUNuRFMsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFRO0VBQUUsR0FDNUIsb0JBRUssQ0FDQSxDQUVQLENBQUM7QUFFVixDQUFDO0FBRUR0QixLQUFLLENBQUN1QixTQUFTLEdBQUc7RUFDaEJyQixLQUFLLEVBQUVILDBEQUFnQjtFQUN2QkksS0FBSyxFQUFFSiwwREFBZ0I7RUFDdkJLLFFBQVEsRUFBRUwsMERBQWdCLENBQUMwQixVQUFVO0VBQ3JDcEIsSUFBSSxFQUFFTiwwREFBZ0IsQ0FBQzBCLFVBQVU7RUFDakNuQixZQUFZLEVBQUVQLHlEQUFlLENBQUMwQixVQUFVO0VBQ3hDakIsT0FBTyxFQUFFVCx3REFBYztFQUN2QlcsTUFBTSxFQUFFWCx3REFBYzRCO0FBQ3hCLENBQUM7QUFFRCxpRUFBZTNCLEtBQUs7Ozs7Ozs7O1VDeERwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL1BhbmVsLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgUGFuZWwgPSAoe1xyXG4gIHRoZW1lLFxyXG4gIHRpdGxlLFxyXG4gIGljb25OYW1lLFxyXG4gIHBhdGgsXHJcbiAgbGlzdEVsZW1lbnRzLFxyXG4gIGhlYWRpbmcgPSB0cnVlLFxyXG4gIGZvb3RlciA9IHRydWUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BwYW5lbCAke3RoZW1lfWB9PlxyXG4gICAgICB7aGVhZGluZyAmJiA8cCBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+e3RpdGxlfTwvcD59XHJcblxyXG4gICAgICB7bGlzdEVsZW1lbnRzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtsaXN0RWxlbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIGxpc3RFbGVtZW50cy5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8TGluayB0bz17YC8ke3BhdGh9LyR7ZWwuaWR9YH0gY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIiBrZXk9e2VsLmlkfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyBmYS0ke2ljb25OYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAge2VsLm5hbWV9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICB0bz17YC8ke3BhdGh9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmsgaXMtb3V0bGluZWQgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIi44cmVtXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWm9iYWN6IHdpxJljZWpcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5QYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbGlzdEVsZW1lbnRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBoZWFkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICBmb290ZXI6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRlZGI3NDY2MjBhYTlmZjNjNjFhXCIpIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmVsIiwiX3JlZiIsInRoZW1lIiwidGl0bGUiLCJpY29uTmFtZSIsInBhdGgiLCJsaXN0RWxlbWVudHMiLCJfcmVmJGhlYWRpbmciLCJoZWFkaW5nIiwiX3JlZiRmb290ZXIiLCJmb290ZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29uY2F0IiwibGVuZ3RoIiwibWFwIiwiZWwiLCJ0byIsImlkIiwia2V5IiwibmFtZSIsInN0eWxlIiwibWFyZ2luIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiYm9vbCJdLCJzb3VyY2VSb290IjoiIn0=