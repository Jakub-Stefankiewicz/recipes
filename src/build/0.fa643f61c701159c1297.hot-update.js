"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(105);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      desc: "",
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
      console.log(_typeof(_this.props.addRecipe));
      _this.props.addRecipe(_this.state);
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
          onClose: _this2.handleProductDelete,
          products: _this2.props.products
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51295636a22c64268f01")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYTY0M2Y2MWM3MDExNTljMTI5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFBQSxJQUV0Q0csU0FBUywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFNBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixTQUFBO0VBQUEsU0FBQUEsVUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixTQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ2JXLEtBQUssR0FBRztNQUNOQyxJQUFJLEVBQUUsRUFBRTtNQUNSQyxJQUFJLEVBQUUsRUFBRTtNQUNSQyxRQUFRLEVBQUUsQ0FBQztRQUFFQyxHQUFHLEVBQUU7TUFBRSxDQUFDLENBQUM7TUFDdEJDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFBQWhCLEtBQUEsQ0FFRGlCLFlBQVksR0FBRyxVQUFDQyxDQUFDLEVBQUs7TUFDcEJsQixLQUFBLENBQUttQixRQUFRLENBQUFDLGVBQUEsS0FDVkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsRUFBR0osQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFBQXZCLEtBQUEsQ0FFRHdCLFlBQVksR0FBRyxVQUFDTixDQUFDLEVBQUs7TUFDcEJBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7TUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0IsS0FBQSxDQUFLVyxLQUFLLENBQUM7TUFDdkJlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBQyxPQUFBLENBQVE1QixLQUFBLENBQUs2QixLQUFLLENBQUNDLFNBQVMsRUFBQztNQUN4QzlCLEtBQUEsQ0FBSzZCLEtBQUssQ0FBQ0MsU0FBUyxDQUFDOUIsS0FBQSxDQUFLVyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUFBWCxLQUFBLENBRUQrQixnQkFBZ0IsR0FBRyxZQUFNO01BQ3ZCL0IsS0FBQSxDQUFLbUIsUUFBUSxDQUFDLFVBQUFhLElBQUE7UUFBQSxJQUFHaEIsT0FBTyxHQUFBZ0IsSUFBQSxDQUFQaEIsT0FBTztVQUFFRixRQUFRLEdBQUFrQixJQUFBLENBQVJsQixRQUFRO1FBQUEsT0FBUTtVQUN4Q0EsUUFBUSxLQUFBSixNQUFBLENBQUF1QixrQkFBQSxDQUFNbkIsUUFBUSxJQUFFO1lBQUVDLEdBQUcsRUFBRUMsT0FBTyxHQUFHO1VBQUUsQ0FBQyxFQUFDO1VBQzdDQSxPQUFPLEVBQUVBLE9BQU8sR0FBRztRQUNyQixDQUFDO01BQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBaEIsS0FBQSxDQUVEa0MsbUJBQW1CLEdBQUcsVUFBQ0MsS0FBSyxFQUFFYixFQUFFLEVBQUs7TUFDbkNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLEVBQUViLEVBQUUsQ0FBQztNQUN0QnRCLEtBQUEsQ0FBS21CLFFBQVEsQ0FBQyxVQUFBaUIsS0FBQTtRQUFBLElBQUd0QixRQUFRLEdBQUFzQixLQUFBLENBQVJ0QixRQUFRO1FBQUEsT0FBUTtVQUMvQkEsUUFBUSxFQUFFQSxRQUFRLENBQUN1QixHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFLO1lBQzdCLE9BQU9BLEVBQUUsQ0FBQ3ZCLEdBQUcsS0FBS29CLEtBQUssR0FBQUksYUFBQSxDQUFBQSxhQUFBLEtBQVFELEVBQUU7Y0FBRWhCLEVBQUUsRUFBRkE7WUFBRSxLQUFLZ0IsRUFBRTtVQUM5QyxDQUFDO1FBQ0gsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQXRDLEtBQUEsQ0FFRHdDLG1CQUFtQixHQUFHLFVBQUNMLEtBQUssRUFBSztNQUMvQm5DLEtBQUEsQ0FBS21CLFFBQVEsQ0FBQyxVQUFBc0IsS0FBQTtRQUFBLElBQUczQixRQUFRLEdBQUEyQixLQUFBLENBQVIzQixRQUFRO1FBQUEsT0FBUTtVQUMvQkEsUUFBUSxFQUFFQSxRQUFRLENBQUM0QixNQUFNLENBQUMsVUFBQ0osRUFBRSxFQUFFSyxDQUFDO1lBQUEsT0FBS1IsS0FBSyxLQUFLUSxDQUFDO1VBQUE7UUFDbEQsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxPQUFBM0MsS0FBQTtFQUFBO0VBQUE0QyxZQUFBLENBQUFqRCxTQUFBO0lBQUFvQixHQUFBO0lBQUFRLEtBQUEsRUFFRCxTQUFBc0IsT0FBQSxFQUFTO01BQUEsSUFBQUMsTUFBQTtNQUNQLG9CQUNFdEQsMERBQUE7UUFBTXdELFlBQVksRUFBQyxLQUFLO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUN6QjtNQUFhLGdCQUNuRGhDLDBEQUFBO1FBQUkwRCxTQUFTLEVBQUM7TUFBTyxHQUFDLGVBQWlCLENBQUMsZUFDeEMxRCwwREFBQTtRQUFLMEQsU0FBUyxFQUFDO01BQUssZ0JBQ2xCMUQsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFPLGdCQUNwQjFELDBEQUFBO1FBQU8wRCxTQUFTLEVBQUM7TUFBTyxHQUFDLGdCQUFxQixDQUFDLGVBQy9DMUQsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFTLGdCQUN0QjFELDBEQUFBO1FBQ0UwRCxTQUFTLEVBQUMsT0FBTztRQUNqQkMsSUFBSSxFQUFDLE1BQU07UUFDWHZDLElBQUksRUFBQyxNQUFNO1FBQ1hVLEVBQUUsRUFBQyxNQUFNO1FBQ1Q4QixXQUFXLEVBQUMsZ0JBQWdCO1FBQzVCQyxRQUFRLEVBQUUsSUFBSSxDQUFDcEM7TUFBYSxDQUM3QixDQUNFLENBQ0YsQ0FBQyxlQUVOekIsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFPLGdCQUNwQjFELDBEQUFBO1FBQU8wRCxTQUFTLEVBQUM7TUFBTyxHQUFDLE1BQVcsQ0FBQyxlQUNyQzFELDBEQUFBO1FBQUswRCxTQUFTLEVBQUM7TUFBUyxnQkFDdEIxRCwwREFBQTtRQUNFMEQsU0FBUyxFQUFDLE9BQU87UUFDakJDLElBQUksRUFBQyxNQUFNO1FBQ1h2QyxJQUFJLEVBQUMsTUFBTTtRQUNYVSxFQUFFLEVBQUMsTUFBTTtRQUNUOEIsV0FBVyxFQUFDLGVBQWU7UUFDM0JDLFFBQVEsRUFBRSxJQUFJLENBQUNwQztNQUFhLENBQzdCLENBQ0UsQ0FDRixDQUNGLENBQUMsZUFFTnpCLDBEQUFBO1FBQUkwRCxTQUFTLEVBQUM7TUFBZSxHQUFDLG9CQUFtQixDQUFDLGVBQ2xEMUQsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFLLEdBQ2pCLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ0csUUFBUSxDQUFDdUIsR0FBRyxDQUFDLFVBQUNpQixPQUFPLEVBQUVYLENBQUM7UUFBQSxvQkFDbENuRCwwREFBQSxDQUFDRSxzREFBYTtVQUNacUIsR0FBRyxFQUFFdUMsT0FBTyxDQUFDdkMsR0FBSTtVQUNqQk8sRUFBRSxFQUFFZ0MsT0FBTyxDQUFDaEMsRUFBRSxHQUFHZ0MsT0FBTyxDQUFDaEMsRUFBRSxHQUFHLEVBQUc7VUFDakNhLEtBQUssRUFBRW1CLE9BQU8sQ0FBQ3ZDLEdBQUk7VUFDbkJ3QyxNQUFNLEVBQUVaLENBQUU7VUFDVlUsUUFBUSxFQUFFUCxNQUFJLENBQUNaLG1CQUFvQjtVQUNuQ3NCLE9BQU8sRUFBRVYsTUFBSSxDQUFDTixtQkFBb0I7VUFDbEMxQixRQUFRLEVBQUVnQyxNQUFJLENBQUNqQixLQUFLLENBQUNmO1FBQVMsQ0FDL0IsQ0FBQztNQUFBLENBQ0gsQ0FBQyxlQUVGdEIsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFPLGdCQUNwQjFELDBEQUFBO1FBQUswRCxTQUFTLEVBQUM7TUFBUyxnQkFDdEIxRCwwREFBQTtRQUFHMEQsU0FBUyxFQUFDLG1CQUFtQjtRQUFDTyxPQUFPLEVBQUUsSUFBSSxDQUFDMUI7TUFBaUIsR0FBQywyQkFFOUQsQ0FDQSxDQUNGLENBQ0YsQ0FBQyxlQUVOdkMsMERBQUE7UUFBSzBELFNBQVMsRUFBQztNQUFrQixnQkFDL0IxRCwwREFBQTtRQUFLMEQsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCMUQsMERBQUE7UUFBUTBELFNBQVMsRUFBQztNQUFnQixHQUFDLGVBQXFCLENBQ3JELENBQ0YsQ0FDRCxDQUFDO0lBRVg7RUFBQztFQUFBLE9BQUF2RCxTQUFBO0FBQUEsRUEzR3FCRiw0Q0FBUztBQThHakMsaUVBQWVFLFNBQVM7Ozs7Ozs7O1VDakh4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9TaW5nbGVQcm9kdWN0XCI7XHJcblxyXG5jbGFzcyBBZGRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGRlc2M6IFwiXCIsXHJcbiAgICBwcm9kdWN0czogW3sga2V5OiAwIH1dLFxyXG4gICAgbGFzdEtleTogMCxcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMucHJvcHMuYWRkUmVjaXBlKTtcclxuICAgIHRoaXMucHJvcHMuYWRkUmVjaXBlKHRoaXMuc3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7IGxhc3RLZXksIHByb2R1Y3RzIH0pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBbLi4ucHJvZHVjdHMsIHsga2V5OiBsYXN0S2V5ICsgMSB9XSxcclxuICAgICAgbGFzdEtleTogbGFzdEtleSArIDEsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvZHVjdENob29zZSA9IChpbmRleCwgaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4LCBpZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7IHByb2R1Y3RzIH0pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmtleSA9PT0gaW5kZXggPyB7IC4uLmVsLCBpZCB9IDogZWw7XHJcbiAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHsgcHJvZHVjdHMgfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcigoZWwsIGkpID0+IGluZGV4ICE9PSBpKSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXp3YSBwcnplcGlzdVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk9waXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVzY1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9waXMgcHJ6ZXBpc3VcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy00XCI+TGlzdGEgcHJvZHVrdMOzdzwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U2luZ2xlUHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5rZXl9XHJcbiAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWQgPyBwcm9kdWN0LmlkIDogXCJcIn1cclxuICAgICAgICAgICAgICBpbmRleD17cHJvZHVjdC5rZXl9XHJcbiAgICAgICAgICAgICAgbnVtYmVyPXtpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaG9vc2V9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVQcm9kdWN0RGVsZXRlfVxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzPXt0aGlzLnByb3BzLnByb2R1Y3RzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUxMjk1NjM2YTIyYzY0MjY4ZjAxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2luZ2xlUHJvZHVjdCIsIkFkZFJlY2lwZSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJuYW1lIiwiZGVzYyIsInByb2R1Y3RzIiwia2V5IiwibGFzdEtleSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJfdHlwZW9mIiwicHJvcHMiLCJhZGRSZWNpcGUiLCJoYW5kbGVBZGRQcm9kdWN0IiwiX3JlZiIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVByb2R1Y3RDaG9vc2UiLCJpbmRleCIsIl9yZWYyIiwibWFwIiwiZWwiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlUHJvZHVjdERlbGV0ZSIsIl9yZWYzIiwiZmlsdGVyIiwiaSIsIl9jcmVhdGVDbGFzcyIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvQ29tcGxldGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==