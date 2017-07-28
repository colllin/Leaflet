
          window.__NEXT_REGISTER_PAGE('/example', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Map = __webpack_require__(542);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/colllin/Code/Leaflux/pages/example.js?entry';


var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',

    // static async getInitialProps ({query}) {
    //   // query.slug
    // }
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 2869775399,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2869775399,
        css: 'html,body{height:100%;margin:0;padding:0;font-family:sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4YW1wbGUuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVTZCLEFBSWlCLGFBQWMsVUFBZSxXQUE0Qix3QkFBQyIsImZpbGUiOiJwYWdlcy9leGFtcGxlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xsbGluL0NvZGUvTGVhZmx1eCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01hcCc7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cXVlcnl9KSB7XG4gIC8vICAgLy8gcXVlcnkuc2x1Z1xuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICB7LyogLy8gdGhpcy5wcm9wcy51cmwucXVlcnkuc2x1ZyAqL31cbiAgICAgICAgICBFeGFtcGxlIGdvZXMgaGVyZSFcbiAgICAgICAgICA8TWFwPlxuICAgICAgICAgICAgTWFwIGd1dHNcbiAgICAgICAgICA8L01hcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19 */\n/*@ sourceURL=pages/example.js?entry */'
      }), 'Example goes here!', _react2.default.createElement(_Map2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Map guts'));
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/colllin/Code/Leaflux/pages/example.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/colllin/Code/Leaflux/pages/example.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/example")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CRS = __webpack_require__(544);

var _CRS2 = _interopRequireDefault(_CRS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/colllin/Code/Leaflux/src/components/Map.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { 'class': 'map', 'data-jsx': 1237317960,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement(_style2.default, {
                styleId: 1237317960,
                css: '.map[data-jsx="1237317960"]{background:rgba(255,0,0,.1)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEIsQUFHaUMsNkJBQUMiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xsbGluL0NvZGUvTGVhZmx1eCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENSUyBmcm9tICcuLi9nZW8vY3JzL0NSUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi5tYXAge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwuMSk7XG59XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIE1hcCBnb2VzIGhlcmUhXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=src/components/Map.js */'
            }), 'Map goes here!', this.props.children);
        }
    }]);

    return _class;
}(_react2.default.Component);

_class.propTypes = {
    crs: _propTypes2.default.object.isRequired
};
_class.defaultProps = {};
exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/colllin/Code/Leaflux/src/components/Map.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/colllin/Code/Leaflux/src/components/Map.js"); } } })();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 544:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (100:16)\n\n\u001b[0m \u001b[90m  98 | \u001b[39m\t\u001b[90m// @property infinite: Boolean\u001b[39m\n \u001b[90m  99 | \u001b[39m\t\u001b[90m// If true, the coordinate space will be unbounded (infinite in both axes)\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 100 | \u001b[39m\tinfinite\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m     | \u001b[39m\t               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 101 | \u001b[39m\n \u001b[90m 102 | \u001b[39m\t\u001b[90m// @method wrapLatLng(latlng: LatLng): LatLng\u001b[39m\n \u001b[90m 103 | \u001b[39m\t\u001b[90m// Returns a `LatLng` where lat and lng has been wrapped according to the\u001b[39m\u001b[0m\n");

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9leGFtcGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhhbXBsZS5qcz8wZTI3MWEyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC5qcz8wZTI3MWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01hcCc7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cXVlcnl9KSB7XG4gIC8vICAgLy8gcXVlcnkuc2x1Z1xuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICB7LyogLy8gdGhpcy5wcm9wcy51cmwucXVlcnkuc2x1ZyAqL31cbiAgICAgICAgICBFeGFtcGxlIGdvZXMgaGVyZSFcbiAgICAgICAgICA8TWFwPlxuICAgICAgICAgICAgTWFwIGd1dHNcbiAgICAgICAgICA8L01hcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhhbXBsZS5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENSUyBmcm9tICcuLi9nZW8vY3JzL0NSUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi5tYXAge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwuMSk7XG59XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIE1hcCBnb2VzIGhlcmUhXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXAuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFsQkE7QUFDQTtBQXlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBVkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        