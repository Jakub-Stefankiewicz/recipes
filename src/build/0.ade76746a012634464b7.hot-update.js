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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);








var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var AddRecipe = /*#__PURE__*/function (_Component) {
  _inherits(AddRecipe, _Component);
  var _super = _createSuper(AddRecipe);
  function AddRecipe() {
    var _this;
    _classCallCheck(this, AddRecipe);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      name: "",
      products: [{
        key: 0
      }],
      lastKey: 0
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
    };
    _this.handleAddProduct = function () {
      _this.setState(function (_ref) {
        var lastKey = _ref.lastKey,
          products = _ref.products;
        return {
          products: [].concat(_toConsumableArray(products), [{
            key: lastKey + 1
          }]),
          lastKey: lastKey + 1
        };
      });
    };
    _this.handleProductChoose = function (index, id) {
      console.log(index, id);
      _this.setState(function (_ref2) {
        var products = _ref2.products;
        return {
          products: products.map(function (el) {
            return el.key === index ? _objectSpread(_objectSpread({}, el), {}, {
              id: id
            }) : el;
          })
        };
      });
    };
    _this.handleProductDelete = function (index) {
      _this.setState(function (_ref3) {
        var products = _ref3.products;
        return {
          products: products.filter(function (el, i) {
            return index !== i;
          })
        };
      });
    };
    return _this;
  }
  _createClass(AddRecipe, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj przepis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa przepisu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa przepisu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "desc",
        id: "desc",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.state.products.map(function (product, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: product.key,
          id: product.id ? product.id : "",
          index: product.key,
          number: i,
          onChange: _this2.handleProductChoose,
          onClose: _this2.handleProductDelete
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "button is-primary",
        onClick: this.handleAddProduct
      }, "Dodaj produkt do przepisu")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj przepis"))));
    }
  }]);
  return AddRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRecipe);

/***/ }),

/***/ 102:
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
/******/ 	__webpack_require__.h = () => ("300cae5467ff4d2d398b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUNBLEtBQUssRUFBRUQ7RUFBRyxnQkFDbEUxQywwREFBQSxpQkFBUSxZQUFrQixDQUFDLEVBQzFCMEUsWUFBWSxDQUFDckIsR0FBRyxDQUFDLFVBQUFnQixPQUFPO0lBQUEsb0JBQ3ZCckUsMERBQUE7TUFBUTJDLEtBQUssRUFBRTBCLE9BQU8sQ0FBQzNCO0lBQUcsR0FBRTJCLE9BQU8sQ0FBQ3BDLElBQWEsQ0FBQztFQUFBLENBQ25ELENBQ0ssQ0FDSixDQUFDLGVBQ1hqQywwREFBQTtJQUFNaUUsU0FBUyxFQUFDO0VBQXVCLGdCQUFDakUsMERBQUE7SUFBR2lFLFNBQVMsRUFBQztFQUFvQixDQUFJLENBQU8sQ0FDbkYsQ0FDQSxDQUNGLENBQ0UsQ0FBQztBQUVkLENBQUM7QUFFRGpELGFBQWEsQ0FBQzJELFNBQVMsR0FBRztFQUN4QmpDLEVBQUUsRUFBRStCLDBEQUFnQixDQUFDRyxVQUFVO0VBQy9CaEUsS0FBSyxFQUFFNkQsMERBQWdCLENBQUNHLFVBQVU7RUFDbENOLE1BQU0sRUFBRUcsMERBQWdCLENBQUNHLFVBQVU7RUFDbkNSLFFBQVEsRUFBRUssd0RBQWMsQ0FBQ0csVUFBVTtFQUNuQ0wsT0FBTyxFQUFFRSx3REFBYyxDQUFDRztBQUMxQixDQUFDO0FBR0QsaUVBQWU1RCxhQUFhOzs7Ozs7OztVQzlDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4vUmVjaXBlc1wiXHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi9Qcm9kdWN0c1wiXHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIlxyXG5cclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICB7LyogPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+ICovfVxyXG4gICAgICAgPEJyb3dzZXJSb3V0ZXI+IFxyXG4gICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PEFsbFJlY2lwZXMgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBlbGVtZW50PXs8QWxsUHJvZHVjdHMgLz59IC8+XHJcbiAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+IFxyXG4gICAgey8qIDwvUHJvdmlkZXI+ICovfVxyXG4gIDwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcblxyXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByb2R1Y3RzOiBbe2tleTogMH1dLFxyXG4gICAgbGFzdEtleTogMFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7bGFzdEtleSwgcHJvZHVjdHN9KSA9PiAoe1xyXG4gICAgICBwcm9kdWN0czogWy4uLnByb2R1Y3RzLCB7a2V5OiBsYXN0S2V5ICsgMX1dLFxyXG4gICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2R1Y3RDaG9vc2UgPSAoaW5kZXgsIGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmtleSA9PT0gaW5kZXggPyB7Li4uZWwsIGlkfSA6IGVsO1xyXG4gICAgICB9KVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJ6ZXBpc3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk9waXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGlzIHByemVwaXN1XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNFwiPkxpc3RhIHByb2R1a3TDs3c8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcclxuICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3RcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkID8gcHJvZHVjdC5pZCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2hvb3NlfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUHJvZHVjdERlbGV0ZX0vPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbiAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4gIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbiAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4gIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuXTtcclxuXHJcbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoe2lkLCBpbmRleCwgbnVtYmVyLCBvbkNoYW5nZSwgb25DbG9zZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKGluZGV4KX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblNpbmdsZVByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMDBjYWU1NDY3ZmY0ZDJkMzk4YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGF5b3V0IiwiSG9tZSIsIkFsbFJlY2lwZXMiLCJBbGxQcm9kdWN0cyIsIkFkZFJlY2lwZSIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiaW5kZXgiLCJlbGVtZW50IiwicGF0aCIsIkNvbXBvbmVudCIsIlNpbmdsZVByb2R1Y3QiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwibmFtZSIsInByb2R1Y3RzIiwia2V5IiwibGFzdEtleSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJfcmVmMiIsIm1hcCIsImVsIiwiX29iamVjdFNwcmVhZCIsImhhbmRsZVByb2R1Y3REZWxldGUiLCJfcmVmMyIsImZpbHRlciIsImkiLCJfY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJfdGhpczIiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiUHJvcFR5cGVzIiwiZmFrZVByb2R1Y3RzIiwicHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwic291cmNlUm9vdCI6IiJ9