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

/***/ "(app-pages-browser)/./app/components/Feedback.js":
/*!************************************!*\
  !*** ./app/components/Feedback.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Feedback_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Feedback.scss */ \"(app-pages-browser)/./app/styles/Feedback.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"(app-pages-browser)/./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Feedback = ()=>{\n    _s();\n    const [feedbackMsg, setFeedbackMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        msg: \"\",\n        approved: false\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"feedback test\");\n        if (feedbackMsg.name) {\n            const sanitizedName = feedbackMsg.name.replace(/\\./g, \"\");\n            try {\n                await (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tests/\" + sanitizedName), {\n                    name: feedbackMsg.name,\n                    msg: feedbackMsg.msg,\n                    approved: false\n                });\n                setFeedbackMsg({\n                    name: \"\",\n                    msg: \"\",\n                    approved: false\n                });\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Thank you for your feedback! We hope to work with you again!\");\n            } catch (error) {\n                console.error(\"Error submitting feedback: \", error);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to submit feedback. Please try again. \\n\\n\".concat(error));\n            }\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please enter your name.\");\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFeedbackMsg((prevItem)=>({\n                ...prevItem,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feedback-section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feedback-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Help us Improve\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"feedback-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Your name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: feedbackMsg.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Feedback / Opinions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"feedback\",\n                        name: \"msg\",\n                        value: feedbackMsg.msg,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\loren\\\\OneDrive\\\\Desktop\\\\Projects\\\\alexlawnscaping\\\\app\\\\components\\\\Feedback.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feedback, \"vHCXz19ZzvuPAqx+LSFrVsbc4yM=\");\n_c = Feedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback);\nvar _c;\n$RefreshReg$(_c, \"Feedback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ZlZWRiYWNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUM7QUFDQTtBQUNHO0FBQ0M7QUFDUTtBQUU3QyxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM3Q1EsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLElBQUlULFlBQVlFLElBQUksRUFBRTtZQUNwQixNQUFNUSxnQkFBZ0JWLFlBQVlFLElBQUksQ0FBQ1MsT0FBTyxDQUFDLE9BQU87WUFFdEQsSUFBSTtnQkFDRixNQUFNYixzREFBR0EsQ0FBQ0Qsc0RBQUdBLENBQUNELCtDQUFFQSxFQUFFLFdBQVdjLGdCQUFnQjtvQkFDM0NSLE1BQU1GLFlBQVlFLElBQUk7b0JBQ3RCQyxLQUFLSCxZQUFZRyxHQUFHO29CQUNwQkMsVUFBVTtnQkFDWjtnQkFDQUgsZUFBZTtvQkFDYkMsTUFBTTtvQkFDTkMsS0FBSztvQkFDTEMsVUFBVTtnQkFDWjtnQkFDQVQsdURBQUtBLENBQUNpQixPQUFPLENBQ1g7WUFFSixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RMLFFBQVFLLEtBQUssQ0FBQywrQkFBK0JBO2dCQUM3Q2xCLHVEQUFLQSxDQUFDa0IsS0FBSyxDQUNULG9EQUEwRCxPQUFOQTtZQUV4RDtRQUNGLE9BQU87WUFDTGxCLHVEQUFLQSxDQUFDa0IsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ1I7UUFDcEIsTUFBTSxFQUFFSixJQUFJLEVBQUVhLEtBQUssRUFBRSxHQUFHVCxFQUFFVSxNQUFNO1FBRWhDZixlQUFlLENBQUNnQixXQUFjO2dCQUM1QixHQUFHQSxRQUFRO2dCQUNYLENBQUNmLEtBQUssRUFBRWE7WUFDVjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0M7Z0JBQUtILFdBQVU7Z0JBQWdCSSxVQUFVbEI7O2tDQUN4Qyw4REFBQ21CO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIekIsTUFBSzt3QkFDTGEsT0FBT2YsWUFBWUUsSUFBSTt3QkFDdkIwQixVQUFVZDs7Ozs7O2tDQUVaLDhEQUFDVTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDSzt3QkFDQ0YsSUFBRzt3QkFDSHpCLE1BQUs7d0JBQ0xhLE9BQU9mLFlBQVlHLEdBQUc7d0JBQ3RCeUIsVUFBVWQ7Ozs7OztrQ0FFWiw4REFBQ2dCO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0F6RU0zQjtLQUFBQTtBQTJFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9GZWVkYmFjay5qcz9jYTljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL0ZlZWRiYWNrLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiL2ZpcmViYXNlQ29uZmlnXCI7XHJcbmltcG9ydCB7IHJlZiwgc2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IHtcclxuICBjb25zdCBbZmVlZGJhY2tNc2csIHNldEZlZWRiYWNrTXNnXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgICBhcHByb3ZlZDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZlZWRiYWNrIHRlc3RcIik7XHJcblxyXG4gICAgaWYgKGZlZWRiYWNrTXNnLm5hbWUpIHtcclxuICAgICAgY29uc3Qgc2FuaXRpemVkTmFtZSA9IGZlZWRiYWNrTXNnLm5hbWUucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBzZXQocmVmKGRiLCBcInRlc3RzL1wiICsgc2FuaXRpemVkTmFtZSksIHtcclxuICAgICAgICAgIG5hbWU6IGZlZWRiYWNrTXNnLm5hbWUsXHJcbiAgICAgICAgICBtc2c6IGZlZWRiYWNrTXNnLm1zZyxcclxuICAgICAgICAgIGFwcHJvdmVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRGZWVkYmFja01zZyh7XHJcbiAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgbXNnOiBcIlwiLFxyXG4gICAgICAgICAgYXBwcm92ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICBcIlRoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEgV2UgaG9wZSB0byB3b3JrIHdpdGggeW91IGFnYWluIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3VibWl0dGluZyBmZWVkYmFjazogXCIsIGVycm9yKTtcclxuICAgICAgICB0b2FzdC5lcnJvcihcclxuICAgICAgICAgIGBGYWlsZWQgdG8gc3VibWl0IGZlZWRiYWNrLiBQbGVhc2UgdHJ5IGFnYWluLiBcXG5cXG4ke2Vycm9yfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWUuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXRGZWVkYmFja01zZygocHJldkl0ZW0pID0+ICh7XHJcbiAgICAgIC4uLnByZXZJdGVtLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWVkYmFjay1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2staGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPkhlbHAgdXMgSW1wcm92ZTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmZWVkYmFjay1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgzPllvdXIgbmFtZTwvaDM+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2ZlZWRiYWNrTXNnLm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgzPkZlZWRiYWNrIC8gT3BpbmlvbnM8L2gzPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgaWQ9XCJmZWVkYmFja1wiXHJcbiAgICAgICAgICBuYW1lPVwibXNnXCJcclxuICAgICAgICAgIHZhbHVlPXtmZWVkYmFja01zZy5tc2d9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInRvYXN0IiwiZGIiLCJyZWYiLCJzZXQiLCJGZWVkYmFjayIsImZlZWRiYWNrTXNnIiwic2V0RmVlZGJhY2tNc2ciLCJuYW1lIiwibXNnIiwiYXBwcm92ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2FuaXRpemVkTmFtZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZJdGVtIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaDMiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Feedback.js\n"));

/***/ })

});