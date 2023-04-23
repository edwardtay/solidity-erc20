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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Xibalba20.json */ \"./utils/Xibalba20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Contract Address & ABI\n    const contractAddress = \"0x939ab64e74Fd7f4129F9a0b95Fec6a8C240d7aee\";\n    const contractABI = _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__.abi;\n    // Component state\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [mintAmount, setMintAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [mintedTokens, setMintedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    // Wallet connection logic\n    const isWalletConnected = async ()=>{\n        try {\n            const { ethereum  } = window;\n            const accounts = await ethereum.request({\n                method: \"eth_accounts\"\n            });\n            console.log(\"accounts: \", accounts);\n            if (accounts.length > 0) {\n                const account = accounts[0];\n                console.log(\"wallet is connected! \" + account);\n            } else {\n                console.log(\"make sure MetaMask is connected\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                console.log(\"please install MetaMask\");\n                addLog(\"Please install MetaMask\");\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n            addLog(\"Wallet connected: \".concat(accounts[0]));\n        } catch (error) {\n            console.log(error);\n            addLog(\"Error: \".concat(error.message));\n        }\n    };\n    const mintTokens = async (amount)=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                console.log(\"minting tokens..\");\n                addLog(\"Minting tokens..\");\n                const mintTxn = await erc20.mint(currentAccount, ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(mintAmount));\n                await mintTxn.wait();\n                console.log(\"mined \", mintTxn.hash);\n                addLog(\"Tokens mined: \".concat(mintTxn.hash));\n                const receipt = await mintTxn.wait();\n                const mintedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(receipt.events[0].args[2]);\n                setMintedTokens(mintedAmount);\n                console.log(\"\".concat(mintedAmount, \" tokens minted!\"));\n                addLog(\"\".concat(mintedAmount, \" tokens minted!\"));\n            }\n        } catch (error) {\n            console.log(error);\n            addLog(\"Error: \".concat(error.message));\n        }\n    };\n    const getBalance = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, provider);\n                const balance = await erc20.balanceOf(currentAccount);\n                console.log(\"balance: \", ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance));\n                addLog(\"Balance: \".concat(ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance)));\n            }\n        } catch (error) {\n            console.log(error);\n            addLog(\"Error: \".concat(error.message));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        isWalletConnected();\n    }, []);\n    const renderLogs = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: logs.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: log\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, this);\n    };\n    const renderContent = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Current Account: \",\n                        currentAccount\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Token Address: \",\n                        contractAddress\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Mint Amount\",\n                            value: mintAmount,\n                            onChange: (e)=>setMintAmount(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: mintTokens,\n                            children: \"Mint Tokens\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, this),\n                        mintedTokens && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"\".concat(mintedTokens, \" tokens minted!\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: getBalance,\n                            children: \"Get Balance\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this),\n                logs.length > 0 && renderLogs()\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"\\uD83E\\uDE99XBB - Mint and Get Balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Mint XBB tokens and check balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"\\uD83E\\uDE99XBB - Mint and Get Balance\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, this),\n                    currentAccount ? renderContent() : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connectWallet,\n                        children: \" Connect your wallet \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                        lineNumber: 181,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"GM\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 186,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n        lineNumber: 166,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kWahQ0mUUukbzLo+lV6zNghSucE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDTE8sU0FBU3JDO3NDQUNWOzs7Ozs7d0JBSUFsQiw4QkFDQyw4REFBQzZDO3NDQUFHLEdBQWdCLE9BQWI3QyxjQUFhOzs7Ozs7c0NBR3RCLDhEQUFDc0Q7NEJBQ0NOLE1BQUs7NEJBQ0xPLFNBQVNqQjtzQ0FDVjs7Ozs7Ozs7Ozs7O2dCQUlGcEMsS0FBS1UsTUFBTSxHQUFHLEtBQUs2Qjs7Ozs7OztJQUcxQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJYyxXQUFXaEUsMEVBQWdCOzswQkFDOUIsOERBQUNMLGtEQUFJQTs7a0NBQ0gsOERBQUN1RTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLVCxXQUFXaEUscUVBQVc7O2tDQUMxQiw4REFBQzBFO3dCQUFHVixXQUFXaEUsc0VBQVk7a0NBQUU7Ozs7OztvQkFJNUJJLGlCQUNDa0QsZ0NBRUEsOERBQUNRO3dCQUFPQyxTQUFTeEM7a0NBQWU7Ozs7OzRCQUNqQzs7Ozs7OzswQkFHSCw4REFBQ29EO2dCQUFPWCxXQUFXaEUsdUVBQWE7MEJBQzlCLDRFQUFDNEU7b0JBQ0NKLE1BQUs7b0JBQ0xYLFFBQU87b0JBQ1BVLEtBQUk7OEJBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQsQ0FBQztHQTVMdUJ0RTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYmkgZnJvbSAnLi4vdXRpbHMvWGliYWxiYTIwLmpzb24nO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gQ29udHJhY3QgQWRkcmVzcyAmIEFCSVxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg5MzlhYjY0ZTc0RmQ3ZjQxMjlGOWEwYjk1RmVjNmE4QzI0MGQ3YWVlXCI7XHJcbiAgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpO1xyXG5cclxuICAvLyBDb21wb25lbnQgc3RhdGVcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttaW50QW1vdW50LCBzZXRNaW50QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttaW50ZWRUb2tlbnMsIHNldE1pbnRlZFRva2Vuc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIFdhbGxldCBjb25uZWN0aW9uIGxvZ2ljXHJcbiAgY29uc3QgaXNXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudHM6IFwiLCBhY2NvdW50cyk7XHJcblxyXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndhbGxldCBpcyBjb25uZWN0ZWQhIFwiICsgYWNjb3VudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlIHN1cmUgTWV0YU1hc2sgaXMgY29ubmVjdGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgY29uc29sZS5sb2coXCJwbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcclxuICAgIGFkZExvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnXHJcbiAgfSk7XHJcblxyXG4gIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICBhZGRMb2coYFdhbGxldCBjb25uZWN0ZWQ6ICR7YWNjb3VudHNbMF19YCk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIGFkZExvZyhgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxufVxyXG59XHJcblxyXG4gIGNvbnN0IG1pbnRUb2tlbnMgPSBhc3luYyAoYW1vdW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gIGlmIChldGhlcmV1bSkge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0sIFwiYW55XCIpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgIGNvbnRyYWN0QWRkcmVzcyxcclxuICAgICAgY29udHJhY3RBQkksXHJcbiAgICAgIHNpZ25lclxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1pbnRpbmcgdG9rZW5zLi5cIik7XHJcbiAgICBhZGRMb2coXCJNaW50aW5nIHRva2Vucy4uXCIpO1xyXG4gICAgY29uc3QgbWludFR4biA9IGF3YWl0IGVyYzIwLm1pbnQoY3VycmVudEFjY291bnQsIGV0aGVycy51dGlscy5wYXJzZUV0aGVyKG1pbnRBbW91bnQpKTtcclxuXHJcbiAgICBhd2FpdCBtaW50VHhuLndhaXQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1pbmVkIFwiLCBtaW50VHhuLmhhc2gpO1xyXG4gICAgYWRkTG9nKGBUb2tlbnMgbWluZWQ6ICR7bWludFR4bi5oYXNofWApO1xyXG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IG1pbnRUeG4ud2FpdCgpO1xyXG4gICAgY29uc3QgbWludGVkQW1vdW50ID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlY2VpcHQuZXZlbnRzWzBdLmFyZ3NbMl0pO1xyXG5cclxuICAgIHNldE1pbnRlZFRva2VucyhtaW50ZWRBbW91bnQpO1xyXG4gICAgY29uc29sZS5sb2coYCR7bWludGVkQW1vdW50fSB0b2tlbnMgbWludGVkIWApO1xyXG4gICAgYWRkTG9nKGAke21pbnRlZEFtb3VudH0gdG9rZW5zIG1pbnRlZCFgKTtcclxuICB9XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIGFkZExvZyhgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxufVxyXG59O1xyXG5cclxuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICBpZiAoZXRoZXJldW0pIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtLCBcImFueVwiKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgZXJjMjAgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICBjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgIGNvbnRyYWN0QUJJLFxyXG4gICAgICBwcm92aWRlclxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZXJjMjAuYmFsYW5jZU9mKGN1cnJlbnRBY2NvdW50KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jZTogXCIsIGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XHJcbiAgICBhZGRMb2coYEJhbGFuY2U6ICR7ZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpfWApO1xyXG4gIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgYWRkTG9nKGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1dhbGxldENvbm5lY3RlZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9ncyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xvZ3MubWFwKChsb2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cCBrZXk9e2luZGV4fT57bG9nfTwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkN1cnJlbnQgQWNjb3VudDoge2N1cnJlbnRBY2NvdW50fTwvcD5cclxuICAgICAgICA8cD5Ub2tlbiBBZGRyZXNzOiB7Y29udHJhY3RBZGRyZXNzfTwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbnQgQW1vdW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e21pbnRBbW91bnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWludEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17bWludFRva2Vuc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWludCBUb2tlbnNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIHttaW50ZWRUb2tlbnMgJiYgKFxyXG4gICAgICAgICAgICA8cD57YCR7bWludGVkVG9rZW5zfSB0b2tlbnMgbWludGVkIWB9PC9wPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtnZXRCYWxhbmNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZXQgQmFsYW5jZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2xvZ3MubGVuZ3RoID4gMCAmJiByZW5kZXJMb2dzKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+8J+qmVhCQiAtIE1pbnQgYW5kIEdldCBCYWxhbmNlPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTWludCBYQkIgdG9rZW5zIGFuZCBjaGVjayBiYWxhbmNlXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICDwn6qZWEJCIC0gTWludCBhbmQgR2V0IEJhbGFuY2VcclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICB7Y3VycmVudEFjY291bnQgPyAoXHJcbiAgICAgICAgICByZW5kZXJDb250ZW50KClcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT4gQ29ubmVjdCB5b3VyIHdhbGxldCA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdNXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJhYmkiLCJldGhlcnMiLCJIZWFkIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm1pbnRBbW91bnQiLCJzZXRNaW50QW1vdW50IiwibWludGVkVG9rZW5zIiwic2V0TWludGVkVG9rZW5zIiwibG9ncyIsInNldExvZ3MiLCJpc1dhbGxldENvbm5lY3RlZCIsImV0aGVyZXVtIiwid2luZG93IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFjY291bnQiLCJlcnJvciIsImNvbm5lY3RXYWxsZXQiLCJhZGRMb2ciLCJtZXNzYWdlIiwibWludFRva2VucyIsImFtb3VudCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiZXJjMjAiLCJDb250cmFjdCIsIm1pbnRUeG4iLCJtaW50IiwidXRpbHMiLCJwYXJzZUV0aGVyIiwid2FpdCIsImhhc2giLCJyZWNlaXB0IiwibWludGVkQW1vdW50IiwiZm9ybWF0RXRoZXIiLCJldmVudHMiLCJhcmdzIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJiYWxhbmNlT2YiLCJyZW5kZXJMb2dzIiwiZGl2IiwibWFwIiwiaW5kZXgiLCJwIiwicmVuZGVyQ29udGVudCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImZvb3RlciIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});