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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DynamicMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst { SubMenu } = _barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nfunction DynamicMenu() {\n    _s();\n    const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const Token = \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiOTE0Yzg1N2Y2NTIxYzk2NjEwODJiNDI5MGFiMjBlMTJlN2QxOGYxODNhOTdkYzY0YWRhYTgxNDBhYTZiOTExOGUwZGQ4NGY5ZmVkYTkwZmYiLCJpYXQiOjE3MTkyMjEwMjkuNTUxMjg4LCJuYmYiOjE3MTkyMjEwMjkuNTUxMjkyLCJleHAiOjE3NTA3NTcwMjkuNTQ1NTIyLCJzdWIiOiIyMTkiLCJzY29wZXMiOltdfQ.MriXw3dG2kwcJu9lgTHeSor1iCq0bMOaMJBUYA0whYB72pY_KQ0XYGh3VA2-_zqtStrdwehqlmr0_Ypnq6o5wf00BWuY0dnXsxoT-hQ1oaH9P7Vu5IAF5GLmi6AUhtOwz1JCs0JEFWHqrmY0qoaaNXOwGs-8tFDpYb5x1M5ZB4aSsX0HpJihd24Rfo0k-S8f16xHSaBsgWEpEpuVXNmgeEEt6_KtdvuaKVykGCmh3KMxFEvwqXp7PiwFgGxKITEHzWJD1JnNViqXmb_Uuoqew3rtNk3CRkqlxcXdX-NwxDA7W0l394pGhlJOYlpbo0X12_r8lfVufpZcnIRPAjP7OzaIci7hqKB63ndFamy_s3AUXdKI0UH2q0LpXcw2cerBJba7JwfgxFgrdRaSz3HIjG9f1frIlVCL7TBXWXAjfwNnU2wnUSY4H0BPeEodEhBs8_tGOtmTLdq3Y7LzRBUgLr6HBkX5_V7A32WvxLKaEnJKjsVYliZb9wxTJJ-3zBc7fWoiLRQNUbsx5O8KY_vRmoaYmYqH2V-Va_RXHiFAXsyOZFeSNDpS1e21dpc2odY0_1SQL4_O9g05Mjb22ArsCCdrqtGDhqXA_lbSNpR2SLQEaJLtSM1mCHf4jPJRMi3FbD2nF0DfwRFXnMS_iMBWnQkqr_Nw0_B_a4iEO1Svdes\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMenuData = async ()=>{\n            try {\n                // const raw = JSON.stringify({\n                //     user: 'AdminPro',\n                //     password: 'Mnop@1234'\n                // });\n                // // Request options\n                // const requestOptions = {\n                //     method: 'POST',\n                //     headers: {\n                //         'Content-Type': 'application/json'\n                //     },\n                //     body: raw\n                // };\n                // const loginResponse = await fetch('http://appnox-tm.it/api/login', requestOptions);\n                // const loginResult = await loginResponse.json();\n                // console.log(loginResult);\n                // // Fetch menu tree\n                const menuResponse = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://appnox-tm.it/api/v1/menu/tree\", {\n                    headers: {\n                        Authorization: \"Bearer \".concat(Token)\n                    }\n                });\n                setMenuData(menuResponse.data.result.data);\n                console.log(menuResponse.data.result.data);\n            } catch (error) {\n                console.error(\"Error fetching menu data:\", error);\n            }\n        };\n        fetchMenuData();\n    }, []);\n    const renderMenu = (menu)=>{\n        return menu.map((item)=>{\n            if (item.children && item.children.length > 0) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                    title: item.item,\n                    children: renderMenu(item.children)\n                }, item.menuId, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                children: item.item\n            }, item.menuId, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 64,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        mode: \"horizontal\",\n        theme: \"dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"h-[70px] w-[100px]\",\n                    height: 100,\n                    width: 100,\n                    src: \"https://appnox.ai/wp-content/uploads/2024/05/Appnox_Transparent-e1718003907449.png\",\n                    alt: \"Appnox Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            renderMenu(menuData)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs\\\\my-app\\\\src\\\\app\\\\DynamicMenu.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(DynamicMenu, \"wAtO6ChhDU7gYpIJpzxX8qH45+I=\");\n_c = DynamicMenu;\nvar _c;\n$RefreshReg$(_c, \"DynamicMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRHluYW1pY01lbnUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUN2QjtBQUNGO0FBQ0s7QUFFL0IsTUFBTSxFQUFFTSxPQUFPLEVBQUUsR0FBR0gsd0VBQUlBO0FBR1QsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1RLFFBQVE7SUFFZFQsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxnQkFBZ0I7WUFDbEIsSUFBSTtnQkFDQSwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsNEJBQTRCO2dCQUM1QixNQUFNO2dCQUVOLHFCQUFxQjtnQkFDckIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtnQkFDakIsNkNBQTZDO2dCQUM3QyxTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsS0FBSztnQkFDTCxzRkFBc0Y7Z0JBQ3RGLGtEQUFrRDtnQkFHbEQsNEJBQTRCO2dCQUc1QixxQkFBcUI7Z0JBQ3JCLE1BQU1DLGVBQWUsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyx3Q0FBd0M7b0JBQ3pFQyxTQUFTO3dCQUNMQyxlQUFlLFVBQWdCLE9BQU5MO29CQUM3QjtnQkFDSjtnQkFDQUQsWUFBWUcsYUFBYUksSUFBSSxDQUFDQyxNQUFNLENBQUNELElBQUk7Z0JBQ3pDRSxRQUFRQyxHQUFHLENBQUNQLGFBQWFJLElBQUksQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJO1lBQzdDLEVBQUUsT0FBT0ksT0FBTztnQkFDWkYsUUFBUUUsS0FBSyxDQUFDLDZCQUE2QkE7WUFDL0M7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1VLGFBQWEsQ0FBQ0M7UUFDaEIsT0FBT0EsS0FBS0MsR0FBRyxDQUFDLENBQUNDO1lBQ2IsSUFBSUEsS0FBS0MsUUFBUSxJQUFJRCxLQUFLQyxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMzQyxxQkFDSSw4REFBQ3BCO29CQUEwQnFCLE9BQU9ILEtBQUtBLElBQUk7OEJBQ3RDSCxXQUFXRyxLQUFLQyxRQUFRO21CQURmRCxLQUFLSSxNQUFNOzs7OztZQUlqQztZQUNBLHFCQUFPLDhEQUFDekIsd0VBQUlBLENBQUMwQixJQUFJOzBCQUFvQkwsS0FBS0EsSUFBSTtlQUF2QkEsS0FBS0ksTUFBTTs7Ozs7UUFDdEM7SUFDSjtJQUdBLHFCQUNJLDhEQUFDekIsd0VBQUlBO1FBQUMyQixNQUFLO1FBQWFDLE9BQU07OzBCQUMxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUM1QixrREFBS0E7b0JBQUM0QixXQUFVO29CQUFxQkMsUUFBUTtvQkFBS0MsT0FBTztvQkFBS0MsS0FBSTtvQkFBcUZDLEtBQUk7Ozs7Ozs7Ozs7O1lBRS9KaEIsV0FBV2I7Ozs7Ozs7QUFHeEI7R0FuRXdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0R5bmFtaWNNZW51LmpzeD85ZjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEeW5hbWljTWVudSgpIHtcclxuXHJcbiAgICBjb25zdCBbbWVudURhdGEsIHNldE1lbnVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFRva2VuID0gJ2V5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSlNVekkxTmlKOS5leUpoZFdRaU9pSTNJaXdpYW5ScElqb2lPVEUwWXpnMU4yWTJOVEl4WXprMk5qRXdPREppTkRJNU1HRmlNakJsTVRKbE4yUXhPR1l4T0ROaE9UZGtZelkwWVdSaFlUZ3hOREJoWVRaaU9URXhPR1V3WkdRNE5HWTVabVZrWVRrd1ptWWlMQ0pwWVhRaU9qRTNNVGt5TWpFd01qa3VOVFV4TWpnNExDSnVZbVlpT2pFM01Ua3lNakV3TWprdU5UVXhNamt5TENKbGVIQWlPakUzTlRBM05UY3dNamt1TlRRMU5USXlMQ0p6ZFdJaU9pSXlNVGtpTENKelkyOXdaWE1pT2x0ZGZRLk1yaVh3M2RHMmt3Y0p1OWxnVEhlU29yMWlDcTBiTU9hTUpCVVlBMHdoWUI3MnBZX0tRMFhZR2gzVkEyLV96cXRTdHJkd2VocWxtcjBfWXBucTZvNXdmMDBCV3VZMGRuWHN4b1QtaFExb2FIOVA3VnU1SUFGNUdMbWk2QVVodE93ejFKQ3MwSkVGV0hxcm1ZMHFvYWFOWE93R3MtOHRGRHBZYjV4MU01WkI0YVNzWDBIcEppaGQyNFJmbzBrLVM4ZjE2eEhTYUJzZ1dFcEVwdVZYTm1nZUVFdDZfS3RkdnVhS1Z5a0dDbWgzS014RkV2d3FYcDdQaXdGZ0d4S0lURUh6V0pEMUpuTlZpcVhtYl9VdW9xZXczcnROazNDUmtxbHhjWGRYLU53eERBN1cwbDM5NHBHaGxKT1lscGJvMFgxMl9yOGxmVnVmcFpjbklSUEFqUDdPemFJY2k3aHFLQjYzbmRGYW15X3MzQVVYZEtJMFVIMnEwTHBYY3cyY2VyQkpiYTdKd2ZneEZncmRSYVN6M0hJakc5ZjFmcklsVkNMN1RCWFdYQWpmd05uVTJ3blVTWTRIMEJQZUVvZEVoQnM4X3RHT3RtVExkcTNZN0x6UkJVZ0xyNkhCa1g1X1Y3QTMyV3Z4TEthRW5KS2pzVllsaVpiOXd4VEpKLTN6QmM3ZldvaUxSUU5VYnN4NU84S1lfdlJtb2FZbVlxSDJWLVZhX1JYSGlGQVhzeU9aRmVTTkRwUzFlMjFkcGMyb2RZMF8xU1FMNF9POWcwNU1qYjIyQXJzQ0NkcnF0R0RocVhBX2xiU05wUjJTTFFFYUpMdFNNMW1DSGY0alBKUk1pM0ZiRDJuRjBEZndSRlhuTVNfaU1CV25Ra3FyX053MF9CX2E0aUVPMVN2ZGVzJ1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNZW51RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB1c2VyOiAnQWRtaW5Qcm8nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhc3N3b3JkOiAnTW5vcEAxMjM0J1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLy8gUmVxdWVzdCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvZHk6IHJhd1xyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwcG5veC10bS5pdC9hcGkvbG9naW4nLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsb2dpblJlc3VsdCA9IGF3YWl0IGxvZ2luUmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2dpblJlc3VsdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIC8vIEZldGNoIG1lbnUgdHJlZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBwbm94LXRtLml0L2FwaS92MS9tZW51L3RyZWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7VG9rZW59YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVudURhdGEobWVudVJlc3BvbnNlLmRhdGEucmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVudVJlc3BvbnNlLmRhdGEucmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbWVudSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoTWVudURhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgcmVuZGVyTWVudSA9IChtZW51KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1lbnUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9e2l0ZW0ubWVudUlkfSB0aXRsZT17aXRlbS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlck1lbnUoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPE1lbnUuSXRlbSBrZXk9e2l0ZW0ubWVudUlkfT57aXRlbS5pdGVtfTwvTWVudS5JdGVtPjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiB0aGVtZT1cImRhcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdoLVs3MHB4XSB3LVsxMDBweF0nIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSBzcmM9XCJodHRwczovL2FwcG5veC5haS93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8wNS9BcHBub3hfVHJhbnNwYXJlbnQtZTE3MTgwMDM5MDc0NDkucG5nXCIgYWx0PVwiQXBwbm94IExvZ29cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3JlbmRlck1lbnUobWVudURhdGEpfVxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZW51IiwiYXhpb3MiLCJJbWFnZSIsIlN1Yk1lbnUiLCJEeW5hbWljTWVudSIsIm1lbnVEYXRhIiwic2V0TWVudURhdGEiLCJUb2tlbiIsImZldGNoTWVudURhdGEiLCJtZW51UmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZW5kZXJNZW51IiwibWVudSIsIm1hcCIsIml0ZW0iLCJjaGlsZHJlbiIsImxlbmd0aCIsInRpdGxlIiwibWVudUlkIiwiSXRlbSIsIm1vZGUiLCJ0aGVtZSIsImRpdiIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DynamicMenu.jsx\n"));

/***/ })

});