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

/***/ "(app-pages-browser)/./src/app/DynamicMenu.jsx":
/*!*********************************!*\
  !*** ./src/app/DynamicMenu.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DynamicMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst { SubMenu } = _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nfunction DynamicMenu() {\n    _s();\n    const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const Token = \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiOTE0Yzg1N2Y2NTIxYzk2NjEwODJiNDI5MGFiMjBlMTJlN2QxOGYxODNhOTdkYzY0YWRhYTgxNDBhYTZiOTExOGUwZGQ4NGY5ZmVkYTkwZmYiLCJpYXQiOjE3MTkyMjEwMjkuNTUxMjg4LCJuYmYiOjE3MTkyMjEwMjkuNTUxMjkyLCJleHAiOjE3NTA3NTcwMjkuNTQ1NTIyLCJzdWIiOiIyMTkiLCJzY29wZXMiOltdfQ.MriXw3dG2kwcJu9lgTHeSor1iCq0bMOaMJBUYA0whYB72pY_KQ0XYGh3VA2-_zqtStrdwehqlmr0_Ypnq6o5wf00BWuY0dnXsxoT-hQ1oaH9P7Vu5IAF5GLmi6AUhtOwz1JCs0JEFWHqrmY0qoaaNXOwGs-8tFDpYb5x1M5ZB4aSsX0HpJihd24Rfo0k-S8f16xHSaBsgWEpEpuVXNmgeEEt6_KtdvuaKVykGCmh3KMxFEvwqXp7PiwFgGxKITEHzWJD1JnNViqXmb_Uuoqew3rtNk3CRkqlxcXdX-NwxDA7W0l394pGhlJOYlpbo0X12_r8lfVufpZcnIRPAjP7OzaIci7hqKB63ndFamy_s3AUXdKI0UH2q0LpXcw2cerBJba7JwfgxFgrdRaSz3HIjG9f1frIlVCL7TBXWXAjfwNnU2wnUSY4H0BPeEodEhBs8_tGOtmTLdq3Y7LzRBUgLr6HBkX5_V7A32WvxLKaEnJKjsVYliZb9wxTJJ-3zBc7fWoiLRQNUbsx5O8KY_vRmoaYmYqH2V-Va_RXHiFAXsyOZFeSNDpS1e21dpc2odY0_1SQL4_O9g05Mjb22ArsCCdrqtGDhqXA_lbSNpR2SLQEaJLtSM1mCHf4jPJRMi3FbD2nF0DfwRFXnMS_iMBWnQkqr_Nw0_B_a4iEO1Svdes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMenuData = async ()=>{\n            try {\n                // const raw = JSON.stringify({\n                //     user: 'AdminPro',\n                //     password: 'Mnop@1234'\n                // });\n                // // Request options\n                // const requestOptions = {\n                //     method: 'POST',\n                //     headers: {\n                //         'Content-Type': 'application/json'\n                //     },\n                //     body: raw\n                // };\n                // const loginResponse = await fetch('http://appnox-tm.it/api/login', requestOptions);\n                // const loginResult = await loginResponse.json();\n                // console.log(loginResult);\n                // // Fetch menu tree\n                const menuResponse = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://appnox-tm.it/api/v1/menu/tree\", {\n                    headers: {\n                        Authorization: \"Bearer \".concat(Token)\n                    }\n                });\n                setMenuData(menuResponse.data.result.data);\n                console.log(menuResponse.data.result.data);\n            } catch (error) {\n                console.error(\"Error fetching menu data:\", error);\n            }\n        };\n        fetchMenuData();\n    }, []);\n    const renderMenu = (menu)=>{\n        return menu.map((item)=>{\n            if (item.children && item.children.length > 0) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                    title: item.item,\n                    children: renderMenu(item.children)\n                }, item.menuId, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                children: item.item\n            }, item.menuId, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 64,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"h-10 w-10\",\n                    height: 50,\n                    width: 100,\n                    src: \"https://appnox.ai/wp-content/uploads/2024/05/Appnox_Transparent-e1718003907449.png\",\n                    alt: \"Appnox Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            renderMenu(menuData)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(DynamicMenu, \"wAtO6ChhDU7gYpIJpzxX8qH45+I=\");\n_c = DynamicMenu;\nvar _c;\n$RefreshReg$(_c, \"DynamicMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRHluYW1pY01lbnUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUN2QjtBQUNGO0FBQ0s7QUFFL0IsTUFBTSxFQUFFTSxPQUFPLEVBQUUsR0FBR0gsd0VBQUlBO0FBR1QsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1RLFFBQVE7SUFFZFQsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxnQkFBZ0I7WUFDbEIsSUFBSTtnQkFDQSwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsNEJBQTRCO2dCQUM1QixNQUFNO2dCQUVOLHFCQUFxQjtnQkFDckIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtnQkFDakIsNkNBQTZDO2dCQUM3QyxTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsS0FBSztnQkFDTCxzRkFBc0Y7Z0JBQ3RGLGtEQUFrRDtnQkFHbEQsNEJBQTRCO2dCQUc1QixxQkFBcUI7Z0JBQ3JCLE1BQU1DLGVBQWUsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyx3Q0FBd0M7b0JBQ3pFQyxTQUFTO3dCQUNMQyxlQUFlLFVBQWdCLE9BQU5MO29CQUM3QjtnQkFDSjtnQkFDQUQsWUFBWUcsYUFBYUksSUFBSSxDQUFDQyxNQUFNLENBQUNELElBQUk7Z0JBQ3pDRSxRQUFRQyxHQUFHLENBQUNQLGFBQWFJLElBQUksQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJO1lBQzdDLEVBQUUsT0FBT0ksT0FBTztnQkFDWkYsUUFBUUUsS0FBSyxDQUFDLDZCQUE2QkE7WUFDL0M7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1VLGFBQWEsQ0FBQ0M7UUFDaEIsT0FBT0EsS0FBS0MsR0FBRyxDQUFDLENBQUNDO1lBQ2IsSUFBSUEsS0FBS0MsUUFBUSxJQUFJRCxLQUFLQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMzQyxxQkFDSSw4REFBQ3BCO29CQUEwQnFCLE9BQU9ILEtBQUtBLElBQUk7OEJBQ3RDSCxXQUFXRyxLQUFLQyxRQUFRO21CQURmRCxLQUFLSSxNQUFNOzs7OztZQUlqQztZQUNBLHFCQUFPLDhEQUFDekIsd0VBQUlBLENBQUMwQixJQUFJOzBCQUFvQkwsS0FBS0EsSUFBSTtlQUF2QkEsS0FBS0ksTUFBTTs7Ozs7UUFDdEM7SUFDSjtJQUdBLHFCQUNJLDhEQUFDekIsd0VBQUlBO1FBQUMyQixNQUFLO1FBQWFDLE9BQU07OzBCQUMxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUM1QixrREFBS0E7b0JBQUM0QixXQUFVO29CQUFZQyxRQUFRO29CQUFJQyxPQUFPO29CQUFLQyxLQUFJO29CQUFxRkMsS0FBSTs7Ozs7Ozs7Ozs7WUFFckpoQixXQUFXYjs7Ozs7OztBQUd4QjtHQW5Fd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvRHluYW1pY01lbnUuanN4PzlmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNNZW51KCkge1xyXG5cclxuICAgIGNvbnN0IFttZW51RGF0YSwgc2V0TWVudURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgVG9rZW4gPSAnZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUo5LmV5SmhkV1FpT2lJM0lpd2lhblJwSWpvaU9URTBZemcxTjJZMk5USXhZemsyTmpFd09ESmlOREk1TUdGaU1qQmxNVEpsTjJReE9HWXhPRE5oT1Rka1l6WTBZV1JoWVRneE5EQmhZVFppT1RFeE9HVXdaR1E0TkdZNVptVmtZVGt3Wm1ZaUxDSnBZWFFpT2pFM01Ua3lNakV3TWprdU5UVXhNamc0TENKdVltWWlPakUzTVRreU1qRXdNamt1TlRVeE1qa3lMQ0psZUhBaU9qRTNOVEEzTlRjd01qa3VOVFExTlRJeUxDSnpkV0lpT2lJeU1Ua2lMQ0p6WTI5d1pYTWlPbHRkZlEuTXJpWHczZEcya3djSnU5bGdUSGVTb3IxaUNxMGJNT2FNSkJVWUEwd2hZQjcycFlfS1EwWFlHaDNWQTItX3pxdFN0cmR3ZWhxbG1yMF9ZcG5xNm81d2YwMEJXdVkwZG5Yc3hvVC1oUTFvYUg5UDdWdTVJQUY1R0xtaTZBVWh0T3d6MUpDczBKRUZXSHFybVkwcW9hYU5YT3dHcy04dEZEcFliNXgxTTVaQjRhU3NYMEhwSmloZDI0UmZvMGstUzhmMTZ4SFNhQnNnV0VwRXB1VlhObWdlRUV0Nl9LdGR2dWFLVnlrR0NtaDNLTXhGRXZ3cVhwN1Bpd0ZnR3hLSVRFSHpXSkQxSm5OVmlxWG1iX1V1b3FldzNydE5rM0NSa3FseGNYZFgtTnd4REE3VzBsMzk0cEdobEpPWWxwYm8wWDEyX3I4bGZWdWZwWmNuSVJQQWpQN096YUljaTdocUtCNjNuZEZhbXlfczNBVVhkS0kwVUgycTBMcFhjdzJjZXJCSmJhN0p3Zmd4RmdyZFJhU3ozSElqRzlmMWZySWxWQ0w3VEJYV1hBamZ3Tm5VMnduVVNZNEgwQlBlRW9kRWhCczhfdEdPdG1UTGRxM1k3THpSQlVnTHI2SEJrWDVfVjdBMzJXdnhMS2FFbkpLanNWWWxpWmI5d3hUSkotM3pCYzdmV29pTFJRTlVic3g1TzhLWV92Um1vYVltWXFIMlYtVmFfUlhIaUZBWHN5T1pGZVNORHBTMWUyMWRwYzJvZFkwXzFTUUw0X085ZzA1TWpiMjJBcnNDQ2RycXRHRGhxWEFfbGJTTnBSMlNMUUVhSkx0U00xbUNIZjRqUEpSTWkzRmJEMm5GMERmd1JGWG5NU19pTUJXblFrcXJfTncwX0JfYTRpRU8xU3ZkZXMnXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaE1lbnVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHVzZXI6ICdBZG1pblBybycsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFzc3dvcmQ6ICdNbm9wQDEyMzQnXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBSZXF1ZXN0IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogcmF3XHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbG9naW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBwbm94LXRtLml0L2FwaS9sb2dpbicsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxvZ2luUmVzdWx0ID0gYXdhaXQgbG9naW5SZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvZ2luUmVzdWx0KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLy8gRmV0Y2ggbWVudSB0cmVlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9hcHBub3gtdG0uaXQvYXBpL3YxL21lbnUvdHJlZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtUb2tlbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRNZW51RGF0YShtZW51UmVzcG9uc2UuZGF0YS5yZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51UmVzcG9uc2UuZGF0YS5yZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtZW51IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hNZW51RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCByZW5kZXJNZW51ID0gKG1lbnUpID0+IHtcclxuICAgICAgICByZXR1cm4gbWVudS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT17aXRlbS5tZW51SWR9IHRpdGxlPXtpdGVtLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTWVudShpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8TWVudS5JdGVtIGtleT17aXRlbS5tZW51SWR9PntpdGVtLml0ZW19PC9NZW51Lkl0ZW0+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHRoZW1lPVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2gtMTAgdy0xMCcgaGVpZ2h0PXs1MH0gd2lkdGg9ezEwMH0gc3JjPVwiaHR0cHM6Ly9hcHBub3guYWkvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDUvQXBwbm94X1RyYW5zcGFyZW50LWUxNzE4MDAzOTA3NDQ5LnBuZ1wiIGFsdD1cIkFwcG5veCBMb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtyZW5kZXJNZW51KG1lbnVEYXRhKX1cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVudSIsImF4aW9zIiwiSW1hZ2UiLCJTdWJNZW51IiwiRHluYW1pY01lbnUiLCJtZW51RGF0YSIsInNldE1lbnVEYXRhIiwiVG9rZW4iLCJmZXRjaE1lbnVEYXRhIiwibWVudVJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVuZGVyTWVudSIsIm1lbnUiLCJtYXAiLCJpdGVtIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ0aXRsZSIsIm1lbnVJZCIsIkl0ZW0iLCJtb2RlIiwidGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DynamicMenu.jsx\n"));

/***/ })

});