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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Bars_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Bars.js */ \"./components/Bars.js\");\n/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Navbar.js */ \"./components/Navbar.js\");\n/* harmony import */ var _components_NavbarXL_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/NavbarXL.js */ \"./components/NavbarXL.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/vojta/weby/vojtov/components/Header.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Header);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hide: \"opacity-0 h-0 -m-5 pointer-events-none\",\n      bgColor: \"\"\n    };\n    _this.handleClick = _this.handleClick.bind((0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));\n    return _this;\n  }\n\n  (0,_Users_vojta_weby_vojtov_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Header, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState({\n        hide: this.state.hide ? \"\" : \"opacity-0 h-0 -m-5 pointer-events-none\",\n        bgColor: this.state.bgColor ? \"\" : \"bg-gray-800\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        className: \"w-full bg-gray-900 p-1 static mb-0 lg:mb-10 lg:fixed -mt-20 text-gray 300\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"header\", {\n          className: \"\".concat(this.state.bgColor, \" md:bg-gray-900 md:bg-opacity-0 h-auto flex items-center\\n                                justify-between m-0.5 duration-500 delay-300\"),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n            className: \"flex items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n              className: \"text-2xl font-thin text-white cursor-default p-1 m-1 ml-1 rounded-md\",\n              children: [\"Vojt\\u011Bch\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"span\", {\n                className: \"bg-gray-600 font-black text-gray-100 rounded\",\n                children: \"Kunc\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 25\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n              className: \"ml-4 text-gray-300\",\n              children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"span\", {\n                className: \"mr-1\",\n                children: \"/\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 62\n              }, this), \" m\\u016Fj web\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 25\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Bars_js__WEBPACK_IMPORTED_MODULE_8__.default, {\n            handleClick: this.handleClick\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_NavbarXL_js__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Navbar_js__WEBPACK_IMPORTED_MODULE_9__.default, {\n          hide: this.state.hide\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this);\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztJQUVNTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsd0NBQVI7QUFBa0RDLE1BQUFBLE9BQU8sRUFBRTtBQUEzRCxLQUFiO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix1SUFBbkI7QUFIaUI7QUFJbEI7Ozs7V0FDRCx1QkFBYztBQUVaLFdBQUtDLFFBQUwsQ0FBYztBQUFFSixRQUFBQSxJQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLEVBQWxCLEdBQXVCLHdDQUEvQjtBQUNFQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLEVBQXJCLEdBQTBCO0FBRHJDLE9BQWQ7QUFHRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDTTtBQUFLLGlCQUFTLEVBQUMsMkVBQWY7QUFBQSxnQ0FDTTtBQUFRLG1CQUFTLFlBQUssS0FBS0YsS0FBTCxDQUFXRSxPQUFoQiwySUFBakI7QUFBQSxrQ0FHSTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsc0VBQWY7QUFBQSxzREFFQTtBQUFNLHlCQUFTLEVBQUMsOENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUtJO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLDJDQUFxQztBQUFNLHlCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFXSSwrREFBQyx3REFBRDtBQUFNLHVCQUFXLEVBQUUsS0FBS0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSixlQVlJLCtEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUROLGVBaUJBLCtEQUFDLDBEQUFEO0FBQVEsY0FBSSxFQUFFLEtBQUtILEtBQUwsQ0FBV0M7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE47QUFzQkQ7Ozs7RUFwQ2tCUjs7QUF1Q3JCLCtEQUFlSyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzZmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQmFycyBmcm9tICcvY29tcG9uZW50cy9CYXJzLmpzJztcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi9jb21wb25lbnRzL05hdmJhci5qc1wiO1xuaW1wb3J0IE5hdmJhclhMIGZyb20gXCIvY29tcG9uZW50cy9OYXZiYXJYTC5qc1wiO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoaWRlOiBcIm9wYWNpdHktMCBoLTAgLW0tNSBwb2ludGVyLWV2ZW50cy1ub25lXCIsIGJnQ29sb3I6IFwiXCJ9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaGlkZTogdGhpcy5zdGF0ZS5oaWRlID8gXCJcIiA6IFwib3BhY2l0eS0wIGgtMCAtbS01IHBvaW50ZXItZXZlbnRzLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjogdGhpcy5zdGF0ZS5iZ0NvbG9yID8gXCJcIiA6IFwiYmctZ3JheS04MDBcIn1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS05MDAgcC0xIHN0YXRpYyBtYi0wIGxnOm1iLTEwIGxnOmZpeGVkIC1tdC0yMCB0ZXh0LWdyYXkgMzAwXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYmdDb2xvcn0gbWQ6YmctZ3JheS05MDAgbWQ6Ymctb3BhY2l0eS0wIGgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWJldHdlZW4gbS0wLjUgZHVyYXRpb24tNTAwIGRlbGF5LTMwMGB9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC10aGluIHRleHQtd2hpdGUgY3Vyc29yLWRlZmF1bHQgcC0xIG0tMSBtbC0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2p0xJtjaFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgZm9udC1ibGFjayB0ZXh0LWdyYXktMTAwIHJvdW5kZWRcIj5LdW5jPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1ncmF5LTMwMFwiPiA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCI+Lzwvc3Bhbj4gbcWvaiB3ZWI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnMgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJYTCAvPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8TmF2YmFyIGhpZGU9e3RoaXMuc3RhdGUuaGlkZX0gLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkJhcnMiLCJOYXZiYXIiLCJOYXZiYXJYTCIsIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJoaWRlIiwiYmdDb2xvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});