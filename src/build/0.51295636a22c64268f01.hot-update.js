"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


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
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1594727d12f3c569b1f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MTI5NTYzNmEyMmM2NDI2OGYwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFFbkMsSUFBTUUsWUFBWSxHQUFHLENBQ25CO0VBQUVDLEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFXLENBQUMsRUFDM0I7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWtCLENBQUMsRUFDbEM7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQU8sQ0FBQyxFQUN2QjtFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBZ0IsQ0FBQyxFQUNoQztFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBWSxDQUFDLENBQzdCO0FBRUQsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQWlEO0VBQUEsSUFBM0NILEVBQUUsR0FBQUcsSUFBQSxDQUFGSCxFQUFFO0lBQUVJLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQUVDLE1BQU0sR0FBQUYsSUFBQSxDQUFORSxNQUFNO0lBQUVDLFNBQVEsR0FBQUgsSUFBQSxDQUFSRyxRQUFRO0lBQUVDLE9BQU8sR0FBQUosSUFBQSxDQUFQSSxPQUFPO0VBQzNELG9CQUNFViwwREFBQTtJQUFTWSxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2xDWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzdCWiwwREFBQSxZQUFHLFVBQVEsRUFBQ1EsTUFBTSxHQUFHLENBQUssQ0FBQyxlQUMzQlIsMERBQUE7SUFDRWEsSUFBSSxFQUFDLFFBQVE7SUFDYkQsU0FBUyxFQUFDLFFBQVE7SUFDbEJFLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUosT0FBTyxDQUFDSCxLQUFLLENBQUM7SUFBQTtFQUFDLENBQy9CLENBQ0UsQ0FBQyxlQUNOUCwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBYyxnQkFDM0JaLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFPLGdCQUNwQlosMERBQUE7SUFBR1ksU0FBUyxFQUFDO0VBQXdCLGdCQUNuQ1osMERBQUE7SUFBTVksU0FBUyxFQUFDO0VBQVEsZ0JBQ3RCWiwwREFBQTtJQUNFUyxRQUFRLEVBQUUsU0FBQUEsU0FBQ00sQ0FBQztNQUFBLE9BQUtOLFNBQVEsQ0FBQ0YsS0FBSyxFQUFFUSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUNqREEsS0FBSyxFQUFFZDtFQUFHLGdCQUVWSCwwREFBQSxpQkFBUSxZQUFrQixDQUFDLEVBQzFCRSxZQUFZLENBQUNnQixHQUFHLENBQUMsVUFBQ0MsT0FBTztJQUFBLG9CQUN4Qm5CLDBEQUFBO01BQVFpQixLQUFLLEVBQUVFLE9BQU8sQ0FBQ2hCO0lBQUcsR0FBRWdCLE9BQU8sQ0FBQ2YsSUFBYSxDQUFDO0VBQUEsQ0FDbkQsQ0FDSyxDQUNKLENBQUMsZUFDUEosMERBQUE7SUFBTVksU0FBUyxFQUFDO0VBQXVCLGdCQUNyQ1osMERBQUE7SUFBR1ksU0FBUyxFQUFDO0VBQW9CLENBQUksQ0FDakMsQ0FDTCxDQUNBLENBQ0YsQ0FDRSxDQUFDO0FBRWQsQ0FBQztBQUVEUCxhQUFhLENBQUNlLFNBQVMsR0FBRztFQUN4QmpCLEVBQUUsRUFBRUYsMERBQWdCLENBQUNvQixVQUFVO0VBQy9CZCxLQUFLLEVBQUVOLDBEQUFnQixDQUFDb0IsVUFBVTtFQUNsQ2IsTUFBTSxFQUFFUCwwREFBZ0IsQ0FBQ29CLFVBQVU7RUFDbkNaLFFBQVEsRUFBRVIsd0RBQWMsQ0FBQ29CLFVBQVU7RUFDbkNYLE9BQU8sRUFBRVQsd0RBQWMsQ0FBQ29CO0FBQzFCLENBQUM7QUFFRCxpRUFBZWhCLGFBQWE7Ozs7Ozs7O1VDdEQ1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiUG9taWRvcnlcIiB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCIgfSxcclxuICB7IGlkOiAzLCBuYW1lOiBcIk9sZWpcIiB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6IFwiV2/Fgm93aW5hIDUwMGdcIiB9LFxyXG4gIHsgaWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBpZCwgaW5kZXgsIG51bWJlciwgb25DaGFuZ2UsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxyXG4gICAgICAgIDxwPlByb2R1a3Qge251bWJlciArIDF9PC9wPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoaW5kZXgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShpbmRleCwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuU2luZ2xlUHJvZHVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNTk0NzI3ZDEyZjNjNTY5YjFmOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZha2VQcm9kdWN0cyIsImlkIiwibmFtZSIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJwcm9kdWN0IiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwic291cmNlUm9vdCI6IiJ9