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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DynamicMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst { SubMenu } = _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nfunction DynamicMenu() {\n    _s();\n    const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const Token = \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiOTE0Yzg1N2Y2NTIxYzk2NjEwODJiNDI5MGFiMjBlMTJlN2QxOGYxODNhOTdkYzY0YWRhYTgxNDBhYTZiOTExOGUwZGQ4NGY5ZmVkYTkwZmYiLCJpYXQiOjE3MTkyMjEwMjkuNTUxMjg4LCJuYmYiOjE3MTkyMjEwMjkuNTUxMjkyLCJleHAiOjE3NTA3NTcwMjkuNTQ1NTIyLCJzdWIiOiIyMTkiLCJzY29wZXMiOltdfQ.MriXw3dG2kwcJu9lgTHeSor1iCq0bMOaMJBUYA0whYB72pY_KQ0XYGh3VA2-_zqtStrdwehqlmr0_Ypnq6o5wf00BWuY0dnXsxoT-hQ1oaH9P7Vu5IAF5GLmi6AUhtOwz1JCs0JEFWHqrmY0qoaaNXOwGs-8tFDpYb5x1M5ZB4aSsX0HpJihd24Rfo0k-S8f16xHSaBsgWEpEpuVXNmgeEEt6_KtdvuaKVykGCmh3KMxFEvwqXp7PiwFgGxKITEHzWJD1JnNViqXmb_Uuoqew3rtNk3CRkqlxcXdX-NwxDA7W0l394pGhlJOYlpbo0X12_r8lfVufpZcnIRPAjP7OzaIci7hqKB63ndFamy_s3AUXdKI0UH2q0LpXcw2cerBJba7JwfgxFgrdRaSz3HIjG9f1frIlVCL7TBXWXAjfwNnU2wnUSY4H0BPeEodEhBs8_tGOtmTLdq3Y7LzRBUgLr6HBkX5_V7A32WvxLKaEnJKjsVYliZb9wxTJJ-3zBc7fWoiLRQNUbsx5O8KY_vRmoaYmYqH2V-Va_RXHiFAXsyOZFeSNDpS1e21dpc2odY0_1SQL4_O9g05Mjb22ArsCCdrqtGDhqXA_lbSNpR2SLQEaJLtSM1mCHf4jPJRMi3FbD2nF0DfwRFXnMS_iMBWnQkqr_Nw0_B_a4iEO1Svdes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMenuData = async ()=>{\n            try {\n                // const raw = JSON.stringify({\n                //     user: 'AdminPro',\n                //     password: 'Mnop@1234'\n                // });\n                // // Request options\n                // const requestOptions = {\n                //     method: 'POST',\n                //     headers: {\n                //         'Content-Type': 'application/json'\n                //     },\n                //     body: raw\n                // };\n                // const loginResponse = await fetch('http://appnox-tm.it/api/login', requestOptions);\n                // const loginResult = await loginResponse.json();\n                // console.log(loginResult);\n                // // Fetch menu tree\n                const menuResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://appnox-tm.it/api/v1/menu/tree\", {\n                    headers: {\n                        Authorization: \"Bearer \".concat(Token)\n                    }\n                });\n                setMenuData(menuResponse.data.result.data);\n                console.log(menuResponse.data.result.data);\n            } catch (error) {\n                console.error(\"Error fetching menu data:\", error);\n            }\n        };\n        fetchMenuData();\n    }, []);\n    const renderMenu = (menu)=>{\n        return menu.map((item)=>{\n            if (item.children && item.children.length > 0) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                    title: item.item,\n                    children: renderMenu(item.children)\n                }, item.menuId, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: item.item\n            }, item.menuId, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 63,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-[50px] w-[200px]\",\n                    height: 100,\n                    width: 100,\n                    src: \"https://appnox.ai/wp-content/uploads/2024/05/Appnox_Transparent-e1718003907449.png\",\n                    alt: \"Appnox Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            renderMenu(menuData)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(DynamicMenu, \"wAtO6ChhDU7gYpIJpzxX8qH45+I=\");\n_c = DynamicMenu;\nvar _c;\n$RefreshReg$(_c, \"DynamicMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRHluYW1pY01lbnUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3ZCO0FBQ0Y7QUFFMUIsTUFBTSxFQUFFSyxPQUFPLEVBQUUsR0FBR0Ysd0VBQUlBO0FBR1QsU0FBU0c7O0lBRXBCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1PLFFBQVE7SUFFZFIsZ0RBQVNBLENBQUM7UUFDTixNQUFNUyxnQkFBZ0I7WUFDbEIsSUFBSTtnQkFDQSwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsNEJBQTRCO2dCQUM1QixNQUFNO2dCQUVOLHFCQUFxQjtnQkFDckIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtnQkFDakIsNkNBQTZDO2dCQUM3QyxTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsS0FBSztnQkFDTCxzRkFBc0Y7Z0JBQ3RGLGtEQUFrRDtnQkFHbEQsNEJBQTRCO2dCQUc1QixxQkFBcUI7Z0JBQ3JCLE1BQU1DLGVBQWUsTUFBTVAsNkNBQUtBLENBQUNRLEdBQUcsQ0FBQyx3Q0FBd0M7b0JBQ3pFQyxTQUFTO3dCQUNMQyxlQUFlLFVBQWdCLE9BQU5MO29CQUM3QjtnQkFDSjtnQkFDQUQsWUFBWUcsYUFBYUksSUFBSSxDQUFDQyxNQUFNLENBQUNELElBQUk7Z0JBQ3pDRSxRQUFRQyxHQUFHLENBQUNQLGFBQWFJLElBQUksQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJO1lBQzdDLEVBQUUsT0FBT0ksT0FBTztnQkFDWkYsUUFBUUUsS0FBSyxDQUFDLDZCQUE2QkE7WUFDL0M7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1VLGFBQWEsQ0FBQ0M7UUFDaEIsT0FBT0EsS0FBS0MsR0FBRyxDQUFDLENBQUNDO1lBQ2IsSUFBSUEsS0FBS0MsUUFBUSxJQUFJRCxLQUFLQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMzQyxxQkFDSSw4REFBQ3BCO29CQUEwQnFCLE9BQU9ILEtBQUtBLElBQUk7OEJBQ3RDSCxXQUFXRyxLQUFLQyxRQUFRO21CQURmRCxLQUFLSSxNQUFNOzs7OztZQUlqQztZQUNBLHFCQUFPLDhEQUFDeEIsd0VBQUlBLENBQUN5QixJQUFJOzBCQUFvQkwsS0FBS0EsSUFBSTtlQUF2QkEsS0FBS0ksTUFBTTs7Ozs7UUFDdEM7SUFDSjtJQUdBLHFCQUNJLDhEQUFDeEIsd0VBQUlBO1FBQUMwQixNQUFLO1FBQWFDLE9BQU07OzBCQUMxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVO29CQUFxQkUsUUFBUTtvQkFBS0MsT0FBTztvQkFBS0MsS0FBSTtvQkFBcUZDLEtBQUk7Ozs7Ozs7Ozs7O1lBRTdKakIsV0FBV2I7Ozs7Ozs7QUFJeEI7R0FwRXdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0R5bmFtaWNNZW51LmpzeD85ZjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY01lbnUoKSB7XHJcblxyXG4gICAgY29uc3QgW21lbnVEYXRhLCBzZXRNZW51RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBUb2tlbiA9ICdleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpTVXpJMU5pSjkuZXlKaGRXUWlPaUkzSWl3aWFuUnBJam9pT1RFMFl6ZzFOMlkyTlRJeFl6azJOakV3T0RKaU5ESTVNR0ZpTWpCbE1USmxOMlF4T0dZeE9ETmhPVGRrWXpZMFlXUmhZVGd4TkRCaFlUWmlPVEV4T0dVd1pHUTROR1k1Wm1Wa1lUa3dabVlpTENKcFlYUWlPakUzTVRreU1qRXdNamt1TlRVeE1qZzRMQ0p1WW1ZaU9qRTNNVGt5TWpFd01qa3VOVFV4TWpreUxDSmxlSEFpT2pFM05UQTNOVGN3TWprdU5UUTFOVEl5TENKemRXSWlPaUl5TVRraUxDSnpZMjl3WlhNaU9sdGRmUS5NcmlYdzNkRzJrd2NKdTlsZ1RIZVNvcjFpQ3EwYk1PYU1KQlVZQTB3aFlCNzJwWV9LUTBYWUdoM1ZBMi1fenF0U3RyZHdlaHFsbXIwX1lwbnE2bzV3ZjAwQld1WTBkblhzeG9ULWhRMW9hSDlQN1Z1NUlBRjVHTG1pNkFVaHRPd3oxSkNzMEpFRldIcXJtWTBxb2FhTlhPd0dzLTh0RkRwWWI1eDFNNVpCNGFTc1gwSHBKaWhkMjRSZm8way1TOGYxNnhIU2FCc2dXRXBFcHVWWE5tZ2VFRXQ2X0t0ZHZ1YUtWeWtHQ21oM0tNeEZFdndxWHA3UGl3RmdHeEtJVEVIeldKRDFKbk5WaXFYbWJfVXVvcWV3M3J0TmszQ1JrcWx4Y1hkWC1Od3hEQTdXMGwzOTRwR2hsSk9ZbHBibzBYMTJfcjhsZlZ1ZnBaY25JUlBBalA3T3phSWNpN2hxS0I2M25kRmFteV9zM0FVWGRLSTBVSDJxMExwWGN3MmNlckJKYmE3SndmZ3hGZ3JkUmFTejNISWpHOWYxZnJJbFZDTDdUQlhXWEFqZndOblUyd25VU1k0SDBCUGVFb2RFaEJzOF90R090bVRMZHEzWTdMelJCVWdMcjZIQmtYNV9WN0EzMld2eExLYUVuSktqc1ZZbGlaYjl3eFRKSi0zekJjN2ZXb2lMUlFOVWJzeDVPOEtZX3ZSbW9hWW1ZcUgyVi1WYV9SWEhpRkFYc3lPWkZlU05EcFMxZTIxZHBjMm9kWTBfMVNRTDRfTzlnMDVNamIyMkFyc0NDZHJxdEdEaHFYQV9sYlNOcFIyU0xRRWFKTHRTTTFtQ0hmNGpQSlJNaTNGYkQybkYwRGZ3UkZYbk1TX2lNQlduUWtxcl9OdzBfQl9hNGlFTzFTdmRlcydcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoTWVudURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdXNlcjogJ0FkbWluUHJvJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYXNzd29yZDogJ01ub3BAMTIzNCdcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIC8vIFJlcXVlc3Qgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBib2R5OiByYXdcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsb2dpblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcHBub3gtdG0uaXQvYXBpL2xvZ2luJywgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbG9naW5SZXN1bHQgPSBhd2FpdCBsb2dpblJlc3BvbnNlLmpzb24oKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9naW5SZXN1bHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBGZXRjaCBtZW51IHRyZWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwcG5veC10bS5pdC9hcGkvdjEvbWVudS90cmVlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke1Rva2VufWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldE1lbnVEYXRhKG1lbnVSZXNwb25zZS5kYXRhLnJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbnVSZXNwb25zZS5kYXRhLnJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1lbnUgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaE1lbnVEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJlbmRlck1lbnUgPSAobWVudSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZW51Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PXtpdGVtLm1lbnVJZH0gdGl0bGU9e2l0ZW0uaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJNZW51KGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLm1lbnVJZH0+e2l0ZW0uaXRlbX08L01lbnUuSXRlbT47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgdGhlbWU9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2gtWzUwcHhdIHctWzIwMHB4XScgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IHNyYz1cImh0dHBzOi8vYXBwbm94LmFpL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI0LzA1L0FwcG5veF9UcmFuc3BhcmVudC1lMTcxODAwMzkwNzQ0OS5wbmdcIiBhbHQ9XCJBcHBub3ggTG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cmVuZGVyTWVudShtZW51RGF0YSl9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVudSIsImF4aW9zIiwiU3ViTWVudSIsIkR5bmFtaWNNZW51IiwibWVudURhdGEiLCJzZXRNZW51RGF0YSIsIlRva2VuIiwiZmV0Y2hNZW51RGF0YSIsIm1lbnVSZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlbmRlck1lbnUiLCJtZW51IiwibWFwIiwiaXRlbSIsImNoaWxkcmVuIiwibGVuZ3RoIiwidGl0bGUiLCJtZW51SWQiLCJJdGVtIiwibW9kZSIsInRoZW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DynamicMenu.jsx\n"));

/***/ })

});