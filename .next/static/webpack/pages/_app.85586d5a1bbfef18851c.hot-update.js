"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Bars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Bars.js */ \"./components/Bars.js\");\n/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Navbar.js */ \"./components/Navbar.js\");\n/* harmony import */ var _components_NavbarXL_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/NavbarXL.js */ \"./components/NavbarXL.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/vojta/weby/vojtov/components/Header.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Header);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hide: \"opacity-0 h-0 -m-5 pointer-events-none\",\n      bgColor: \"\"\n    };\n    _this.handleClick = _this.handleClick.bind((0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));\n    return _this;\n  }\n\n  (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Header, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState({\n        hide: this.state.hide ? \"\" : \"opacity-0 h-0 -m-5 pointer-events-none\",\n        bgColor: this.state.bgColor ? \"\" : \"bg-gray-800\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"w-full bg-gray-900 filter backdrop-filter backdrop-blur-xl opacity-95 p-1 mb-0 lg:mb-10 lg:fixed -mt-20 pb-24\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"header\", {\n          className: \"\".concat(this.state.bgColor, \" md:bg-gray-900 h-auto flex items-center\\n                                justify-between m-0.5 duration-500 delay-300\"),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n              className: \"text-2xl font-thin text-white cursor-default p-1 m-1 ml-1 rounded-md\",\n              children: [\"Vojt\\u011Bch\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"span\", {\n                className: \"bg-gray-600 font-black text-gray-100 rounded\",\n                children: \"Kunc\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n              className: \"ml-4 text-gray-300\",\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"span\", {\n                className: \"mr-1\",\n                children: \"/\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 62\n              }, this), \" m\\u016Fj web\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Bars_js__WEBPACK_IMPORTED_MODULE_7__.default, {\n            handleClick: this.handleClick\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_NavbarXL_js__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Navbar_js__WEBPACK_IMPORTED_MODULE_8__.default, {\n          hide: this.state.hide\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this);\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0lBRU1LOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLE1BQUFBLElBQUksRUFBRSx3Q0FBUjtBQUFrREMsTUFBQUEsT0FBTyxFQUFFO0FBQTNELEtBQWI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHVJQUFuQjtBQUhpQjtBQUlsQjs7OztXQUNELHVCQUFjO0FBRVosV0FBS0MsUUFBTCxDQUFjO0FBQUVKLFFBQUFBLElBQUksRUFBRSxLQUFLRCxLQUFMLENBQVdDLElBQVgsR0FBa0IsRUFBbEIsR0FBdUIsd0NBQS9CO0FBQ0VDLFFBQUFBLE9BQU8sRUFBRSxLQUFLRixLQUFMLENBQVdFLE9BQVgsR0FBcUIsRUFBckIsR0FBMEI7QUFEckMsT0FBZDtBQUdEOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNNO0FBQUssaUJBQVMsRUFBQywrR0FBZjtBQUFBLGdDQUNNO0FBQVEsbUJBQVMsWUFBSyxLQUFLRixLQUFMLENBQVdFLE9BQWhCLDJIQUFqQjtBQUFBLGtDQUdJO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxzRUFBZjtBQUFBLHNEQUVBO0FBQU0seUJBQVMsRUFBQyw4Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBS0k7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEsMkNBQXFDO0FBQU0seUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQVdJLCtEQUFDLHdEQUFEO0FBQU0sdUJBQVcsRUFBRSxLQUFLQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhKLGVBWUksK0RBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE4sZUFpQkEsK0RBQUMsMERBQUQ7QUFBUSxjQUFJLEVBQUUsS0FBS0gsS0FBTCxDQUFXQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETjtBQXNCRDs7OztFQXBDa0JQOztBQXVDckIsK0RBQWVJLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJhcnMgZnJvbSAnL2NvbXBvbmVudHMvQmFycy5qcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIvY29tcG9uZW50cy9OYXZiYXIuanNcIjtcbmltcG9ydCBOYXZiYXJYTCBmcm9tIFwiL2NvbXBvbmVudHMvTmF2YmFyWEwuanNcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGlkZTogXCJvcGFjaXR5LTAgaC0wIC1tLTUgcG9pbnRlci1ldmVudHMtbm9uZVwiLCBiZ0NvbG9yOiBcIlwifTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUNsaWNrKCkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGU6IHRoaXMuc3RhdGUuaGlkZSA/IFwiXCIgOiBcIm9wYWNpdHktMCBoLTAgLW0tNSBwb2ludGVyLWV2ZW50cy1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I6IHRoaXMuc3RhdGUuYmdDb2xvciA/IFwiXCIgOiBcImJnLWdyYXktODAwXCJ9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktOTAwIGZpbHRlciBiYWNrZHJvcC1maWx0ZXIgYmFja2Ryb3AtYmx1ci14bCBvcGFjaXR5LTk1IHAtMSBtYi0wIGxnOm1iLTEwIGxnOmZpeGVkIC1tdC0yMCBwYi0yNFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmJnQ29sb3J9IG1kOmJnLWdyYXktOTAwIGgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWJldHdlZW4gbS0wLjUgZHVyYXRpb24tNTAwIGRlbGF5LTMwMGB9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC10aGluIHRleHQtd2hpdGUgY3Vyc29yLWRlZmF1bHQgcC0xIG0tMSBtbC0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2p0xJtjaFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgZm9udC1ibGFjayB0ZXh0LWdyYXktMTAwIHJvdW5kZWRcIj5LdW5jPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1ncmF5LTMwMFwiPiA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCI+Lzwvc3Bhbj4gbcWvaiB3ZWI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnMgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJYTCAvPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8TmF2YmFyIGhpZGU9e3RoaXMuc3RhdGUuaGlkZX0gLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQmFycyIsIk5hdmJhciIsIk5hdmJhclhMIiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsImhpZGUiLCJiZ0NvbG9yIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});