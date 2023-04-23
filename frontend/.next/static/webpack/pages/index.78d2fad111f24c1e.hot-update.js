"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Xibalba20.json */ \"./utils/Xibalba20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Contract Address & ABI\n    const contractAddress = \"0x939ab64e74Fd7f4129F9a0b95Fec6a8C240d7aee\";\n    const contractABI = _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__.abi;\n    // Component state\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    // Wallet connection logic\n    const isWalletConnected = async ()=>{\n        try {\n            const { ethereum  } = window;\n            const accounts = await ethereum.request({\n                method: \"eth_accounts\"\n            });\n            console.log(\"accounts: \", accounts);\n            if (accounts.length > 0) {\n                const account = accounts[0];\n                console.log(\"wallet is connected! \" + account);\n            } else {\n                console.log(\"make sure MetaMask is connected\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                console.log(\"please install MetaMask\");\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const mintTokens = async (amount)=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                console.log(\"minting tokens..\");\n                const mintTxn = await erc20.mint(currentAccount, ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(amount));\n                await mintTxn.wait();\n                console.log(\"mined \", mintTxn.hash);\n                const receipt = await mintTxn.wait();\n                const mintedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(receipt.events[0].args[2]);\n                console.log(\"\".concat(mintedAmount, \" tokens minted!\"));\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const [mintAmount, setMintAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const getBalance = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, provider);\n                const balance = await erc20.balanceOf(currentAccount);\n                console.log(\"balance: \", ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance));\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        isWalletConnected();\n    }, []);\n    const renderContent = ()=>{\n        if (!currentAccount) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                children: \" Connect your wallet \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Current Account: \",\n                        currentAccount\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Token Address: \",\n                        contractAddress\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: mintTokens,\n                            children: \"Mint Tokens\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: getBalance,\n                            children: \"Get Balance\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mint Tokens and Get Balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 142,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Mint ERC20 tokens and check balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 143,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 144,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 141,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Mint Tokens and Get Balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 148,\n                        columnNumber: 7\n                    }, this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Current Account: \",\n                                    currentAccount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Token Address: \",\n                                    contractAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        placeholder: \"Mint Amount\",\n                                        value: mintAmount,\n                                        onChange: (e)=>setMintAmount(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                        lineNumber: 157,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>mintTokens(mintAmount),\n                                        children: \"Mint Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: getBalance,\n                                        children: \"Get Balance\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                        lineNumber: 170,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                                lineNumber: 156,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connectWallet,\n                        children: \" Connect your wallet \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 147,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"GM\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 184,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 183,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n        lineNumber: 140,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"iUQpvO0wVDRNN2hF2+koOc9v5QM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNILEtBQUs7Ozs7OztrREFFekMsOERBQUNsQjt3Q0FDQ0ksTUFBSzt3Q0FDTEgsU0FBUyxJQUFNM0IsV0FBV29CO2tEQUMzQjs7Ozs7O2tEQUlELDhEQUFDTTt3Q0FDQ0ksTUFBSzt3Q0FDTEgsU0FBU0w7a0RBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQU1MLDhEQUFDSTt3QkFBT0MsU0FBUzVCO2tDQUFlOzs7Ozs0QkFDakM7Ozs7Ozs7MEJBR0gsOERBQUNpRDtnQkFBT2pCLFdBQVdqRCx1RUFBYTswQkFDOUIsNEVBQUNtRTtvQkFDQ1YsTUFBSztvQkFDTFEsUUFBTztvQkFDUFQsS0FBSTs4QkFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPUCxDQUFDO0dBMUx1QnZEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBhYmkgZnJvbSAnLi4vdXRpbHMvWGliYWxiYTIwLmpzb24nO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gQ29udHJhY3QgQWRkcmVzcyAmIEFCSVxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg5MzlhYjY0ZTc0RmQ3ZjQxMjlGOWEwYjk1RmVjNmE4QzI0MGQ3YWVlXCI7XHJcbiAgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpO1xyXG5cclxuICAvLyBDb21wb25lbnQgc3RhdGVcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyBXYWxsZXQgY29ubmVjdGlvbiBsb2dpY1xyXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzOiBcIiwgYWNjb3VudHMpO1xyXG5cclxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXQgaXMgY29ubmVjdGVkISBcIiArIGFjY291bnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZSBzdXJlIE1ldGFNYXNrIGlzIGNvbm5lY3RlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG1pbnRUb2tlbnMgPSBhc3luYyAoYW1vdW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBpZiAoZXRoZXJldW0pIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSwgXCJhbnlcIik7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxyXG4gICAgICAgICAgY29udHJhY3RBQkksXHJcbiAgICAgICAgICBzaWduZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1pbnRpbmcgdG9rZW5zLi5cIilcclxuICAgICAgICBjb25zdCBtaW50VHhuID0gYXdhaXQgZXJjMjAubWludChjdXJyZW50QWNjb3VudCwgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoYW1vdW50KSk7XHJcblxyXG4gICAgICAgIGF3YWl0IG1pbnRUeG4ud2FpdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1pbmVkIFwiLCBtaW50VHhuLmhhc2gpO1xyXG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCBtaW50VHhuLndhaXQoKTtcclxuICAgICAgICBjb25zdCBtaW50ZWRBbW91bnQgPSBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVjZWlwdC5ldmVudHNbMF0uYXJnc1syXSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke21pbnRlZEFtb3VudH0gdG9rZW5zIG1pbnRlZCFgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFttaW50QW1vdW50LCBzZXRNaW50QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKGV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0sIFwiYW55XCIpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IGVyYzIwID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcclxuICAgICAgICAgIGNvbnRyYWN0QUJJLFxyXG4gICAgICAgICAgcHJvdmlkZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZXJjMjAuYmFsYW5jZU9mKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJhbGFuY2U6IFwiLCBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZSkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzV2FsbGV0Q29ubmVjdGVkKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjdXJyZW50QWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0+IENvbm5lY3QgeW91ciB3YWxsZXQgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkN1cnJlbnQgQWNjb3VudDoge2N1cnJlbnRBY2NvdW50fTwvcD5cclxuICAgICAgICA8cD5Ub2tlbiBBZGRyZXNzOiB7Y29udHJhY3RBZGRyZXNzfTwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17bWludFRva2Vuc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWludCBUb2tlbnNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dldEJhbGFuY2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdldCBCYWxhbmNlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5yZXR1cm4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+TWludCBUb2tlbnMgYW5kIEdldCBCYWxhbmNlPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1pbnQgRVJDMjAgdG9rZW5zIGFuZCBjaGVjayBiYWxhbmNlXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIE1pbnQgVG9rZW5zIGFuZCBHZXQgQmFsYW5jZVxyXG4gICAgICA8L2gxPlxyXG5cclxuICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5DdXJyZW50IEFjY291bnQ6IHtjdXJyZW50QWNjb3VudH08L3A+XHJcbiAgICAgICAgICA8cD5Ub2tlbiBBZGRyZXNzOiB7Y29udHJhY3RBZGRyZXNzfTwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbnQgQW1vdW50XCJcclxuICAgICAgICB2YWx1ZT17bWludEFtb3VudH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1pbnRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludFRva2VucyhtaW50QW1vdW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1pbnQgVG9rZW5zXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dldEJhbGFuY2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHZXQgQmFsYW5jZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0+IENvbm5lY3QgeW91ciB3YWxsZXQgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgID5cclxuICAgICAgICBHTVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L2Rpdj5cclxuKVxyXG4gICAgICBcclxufVxyXG4iXSwibmFtZXMiOlsiYWJpIiwiZXRoZXJzIiwiSGVhZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJpc1dhbGxldENvbm5lY3RlZCIsImV0aGVyZXVtIiwid2luZG93IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFjY291bnQiLCJlcnJvciIsImNvbm5lY3RXYWxsZXQiLCJtaW50VG9rZW5zIiwiYW1vdW50IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJlcmMyMCIsIkNvbnRyYWN0IiwibWludFR4biIsIm1pbnQiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ3YWl0IiwiaGFzaCIsInJlY2VpcHQiLCJtaW50ZWRBbW91bnQiLCJmb3JtYXRFdGhlciIsImV2ZW50cyIsImFyZ3MiLCJtaW50QW1vdW50Iiwic2V0TWludEFtb3VudCIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwicmVuZGVyQ29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJwIiwidHlwZSIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmb290ZXIiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});