"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.js":
/*!**********************************!*\
  !*** ./app/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Navbar.scss */ \"(app-pages-browser)/./app/styles/Navbar.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const routes = [\n        {\n            name: \"Services\",\n            route: \"services\"\n        },\n        {\n            name: \"Testimonials\",\n            route: \"testimonials\"\n        },\n        {\n            name: \"About\",\n            route: \"about\"\n        },\n        {\n            name: \"Contact\",\n            route: \"contact\"\n        }\n    ];\n    const [scroll, setScroll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScroll(window.scrollY > 100);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleOutsideClick = (event)=>{\n        if (!event.target.closest(\".sidebar\")) {\n            setShowSidebar(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(scroll ? \"sticky\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowSidebar(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            class: \"bi bi-list\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/logo.jpg\",\n                        alt: \"logo\",\n                        className: \"next-img\",\n                        width: 500,\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"tel:123-456-7890\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            class: \"bi bi-telephone-fill\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"sidebar \".concat(showSidebar ? \"show-sidebar\" : \"hide-sidebar\"),\n                children: routes.map((route)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: route.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Navbar.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"0vabhPNccQabvYUlCdAGPsjj4PU=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNhO0FBQ2I7QUFFL0IsTUFBTUcsU0FBUzs7SUFDYixNQUFNQyxTQUFTO1FBQ2I7WUFBRUMsTUFBTTtZQUFZQyxPQUFPO1FBQVc7UUFDdEM7WUFBRUQsTUFBTTtZQUFnQkMsT0FBTztRQUFlO1FBQzlDO1lBQUVELE1BQU07WUFBU0MsT0FBTztRQUFRO1FBQ2hDO1lBQUVELE1BQU07WUFBV0MsT0FBTztRQUFVO0tBQ3JDO0lBRUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxlQUFlO1lBQ25CSCxVQUFVSSxPQUFPQyxPQUFPLEdBQUc7UUFDN0I7UUFDQUQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLHFCQUFxQixDQUFDQztRQUMxQixJQUFJLENBQUNBLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGFBQWE7WUFDckNULGVBQWU7UUFDakI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1U7Z0JBQUlDLFdBQVcsR0FBMEIsT0FBdkJkLFNBQVMsV0FBVzs7a0NBQ3JDLDhEQUFDZTt3QkFBT0MsU0FBUyxJQUFNYixlQUFlO2tDQUNwQyw0RUFBQ2M7NEJBQUVDLE9BQU07Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDdkIsa0RBQUtBO3dCQUNKd0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSk4sV0FBVTt3QkFDVk8sT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O2tDQUdWLDhEQUFDQzt3QkFBRUMsTUFBSztrQ0FDTiw0RUFBQ1A7NEJBQUVDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdiLDhEQUFDTztnQkFDQ1gsV0FBVyxXQUF5RCxPQUE5Q1osY0FBYyxpQkFBaUI7MEJBRXBETCxPQUFPNkIsR0FBRyxDQUFDLENBQUMzQjtrQ0FDWCw4REFBQzRCO2tDQUFHNUIsTUFBTUQsSUFBSTs7Ozs7O2dCQUNoQjs7Ozs7Ozs7QUFJUjtHQXhETUY7S0FBQUE7QUEwRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzPzIxY2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvTmF2YmFyLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiU2VydmljZXNcIiwgcm91dGU6IFwic2VydmljZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRlc3RpbW9uaWFsc1wiLCByb3V0ZTogXCJ0ZXN0aW1vbmlhbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFib3V0XCIsIHJvdXRlOiBcImFib3V0XCIgfSxcclxuICAgIHsgbmFtZTogXCJDb250YWN0XCIsIHJvdXRlOiBcImNvbnRhY3RcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzaG93U2lkZWJhciwgc2V0U2hvd1NpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkgPiAxMDApO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2lkZWJhclwiKSkge1xyXG4gICAgICBzZXRTaG93U2lkZWJhcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzY3JvbGwgPyBcInN0aWNreVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKHRydWUpfT5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktbGlzdFwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9sb2dvLmpwZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHQtaW1nXCJcclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YSBocmVmPVwidGVsOjEyMy00NTYtNzg5MFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10ZWxlcGhvbmUtZmlsbFwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8YXNpZGVcclxuICAgICAgICBjbGFzc05hbWU9e2BzaWRlYmFyICR7c2hvd1NpZGViYXIgPyBcInNob3ctc2lkZWJhclwiIDogXCJoaWRlLXNpZGViYXJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICA8cD57cm91dGUubmFtZX08L3A+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJOYXZiYXIiLCJyb3V0ZXMiLCJuYW1lIiwicm91dGUiLCJzY3JvbGwiLCJzZXRTY3JvbGwiLCJzaG93U2lkZWJhciIsInNldFNob3dTaWRlYmFyIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibmF2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImkiLCJjbGFzcyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYSIsImhyZWYiLCJhc2lkZSIsIm1hcCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.js\n"));

/***/ })

});