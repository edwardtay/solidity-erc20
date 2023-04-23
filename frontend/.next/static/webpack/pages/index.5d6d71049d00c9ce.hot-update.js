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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Xibalba20.json */ \"./utils/Xibalba20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Contract Address & ABI\n    const contractAddress = \"0x939ab64e74Fd7f4129F9a0b95Fec6a8C240d7aee\";\n    const contractABI = _utils_Xibalba20_json__WEBPACK_IMPORTED_MODULE_1__.abi;\n    // Component state\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [mintAmount, setMintAmount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [mintedTokens, setMintedTokens] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    // Wallet connection logic\n    const isWalletConnected = async ()=>{\n        try {\n            const { ethereum  } = window;\n            const accounts = await ethereum.request({\n                method: \"eth_accounts\"\n            });\n            console.log(\"accounts: \", accounts);\n            if (accounts.length > 0) {\n                const account = accounts[0];\n                console.log(\"wallet is connected! \" + account);\n            } else {\n                console.log(\"make sure MetaMask is connected\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    };\n    const connectWallet = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (!ethereum) {\n                console.log(\"please install MetaMask\");\n            }\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const mintTokens = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                console.log(\"minting tokens..\");\n                const mintTxn = await erc20.mint(currentAccount, ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(mintAmount));\n                await mintTxn.wait();\n                console.log(\"mined \", mintTxn.hash);\n                const receipt = await mintTxn.wait();\n                const mintedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(receipt.events[0].args[2]);\n                setMintedTokens(mintedAmount);\n                console.log(\"\".concat(mintedAmount, \" tokens minted!\"));\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getBalance = async ()=>{\n        try {\n            const { ethereum  } = window;\n            if (ethereum) {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum, \"any\");\n                const signer = provider.getSigner();\n                const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, provider);\n                const balance = await erc20.balanceOf(currentAccount);\n                console.log(\"balance: \", ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(balance));\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        isWalletConnected();\n    }, []);\n    const renderContent = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Current Account: \",\n                        currentAccount\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Token Address: \",\n                        contractAddress\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Mint Amount\",\n                            value: mintAmount,\n                            onChange: (e)=>setMintAmount(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 117,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: mintTokens,\n                            children: \"Mint Tokens\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 123,\n                            columnNumber: 1\n                        }, this),\n                        mintedTokens && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"\".concat(mintedTokens, \" tokens minted!\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 3\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: getBalance,\n                            children: \"Get Balance\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                            lineNumber: 134,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\edwar\\\\Desktop\\\\Courses\\\\ERC\\\\buymeacoffee-modify\\\\pages\\\\index.js\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this);\n    };\n}\n_s(Home, \"sLKd1cYfulhqmvq3FK16i5eNCaE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN2QztnQkFDdENZLFFBQVFDLEdBQUcsQ0FBQyxhQUFhdkIsNERBQXdCLENBQUNnRDtZQUNwRCxDQUFDO1FBQ0gsRUFBRSxPQUFPdEIsT0FBTztZQUNkSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Q7SUFDRjtJQUVBdEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1rQyxnQkFBZ0IsSUFBTTtRQUMxQixxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDQzs7d0JBQUU7d0JBQWtCMUM7Ozs7Ozs7OEJBQ3JCLDhEQUFDMEM7O3dCQUFFO3dCQUFnQjVDOzs7Ozs7OzhCQUNuQiw4REFBQzJDOztzQ0FDRCw4REFBQ0U7NEJBQ1BDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU81Qzs0QkFDUDZDLFVBQVUsQ0FBQ0MsSUFBTTdDLGNBQWM2QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztzQ0FFL0MsOERBQUNJOzRCQUNDTixNQUFLOzRCQUNMTyxTQUFTakM7c0NBQ1Y7Ozs7Ozt3QkFJQWQsOEJBQ0MsOERBQUNzQztzQ0FBRyxHQUFnQixPQUFidEMsY0FBYTs7Ozs7O3NDQUd0Qiw4REFBQzhDOzRCQUNDTixNQUFLOzRCQUNMTyxTQUFTZDtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU87QUFDUixDQUFDO0dBdkl1QnhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBhYmkgZnJvbSAnLi4vdXRpbHMvWGliYWxiYTIwLmpzb24nO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgLy8gQ29udHJhY3QgQWRkcmVzcyAmIEFCSVxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg5MzlhYjY0ZTc0RmQ3ZjQxMjlGOWEwYjk1RmVjNmE4QzI0MGQ3YWVlXCI7XHJcbiAgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpO1xyXG5cclxuICAvLyBDb21wb25lbnQgc3RhdGVcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttaW50QW1vdW50LCBzZXRNaW50QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttaW50ZWRUb2tlbnMsIHNldE1pbnRlZFRva2Vuc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8gV2FsbGV0IGNvbm5lY3Rpb24gbG9naWNcclxuICBjb25zdCBpc1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSlcclxuICAgICAgY29uc29sZS5sb2coXCJhY2NvdW50czogXCIsIGFjY291bnRzKTtcclxuXHJcbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FsbGV0IGlzIGNvbm5lY3RlZCEgXCIgKyBhY2NvdW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1ha2Ugc3VyZSBNZXRhTWFzayBpcyBjb25uZWN0ZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cydcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtaW50VG9rZW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKGV0aGVyZXVtKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0sIFwiYW55XCIpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IGVyYzIwID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcclxuICAgICAgICAgIGNvbnRyYWN0QUJJLFxyXG4gICAgICAgICAgc2lnbmVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtaW50aW5nIHRva2Vucy4uXCIpXHJcbiAgICAgICAgY29uc3QgbWludFR4biA9IGF3YWl0IGVyYzIwLm1pbnQoY3VycmVudEFjY291bnQsIGV0aGVycy51dGlscy5wYXJzZUV0aGVyKG1pbnRBbW91bnQpKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbWludFR4bi53YWl0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWluZWQgXCIsIG1pbnRUeG4uaGFzaCk7XHJcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IG1pbnRUeG4ud2FpdCgpO1xyXG4gICAgICAgIGNvbnN0IG1pbnRlZEFtb3VudCA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihyZWNlaXB0LmV2ZW50c1swXS5hcmdzWzJdKTtcclxuXHJcbiAgICAgICAgc2V0TWludGVkVG9rZW5zKG1pbnRlZEFtb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7bWludGVkQW1vdW50fSB0b2tlbnMgbWludGVkIWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtLCBcImFueVwiKTtcclxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgICBjb25zdCBlcmMyMCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXHJcbiAgICAgICAgICBjb250cmFjdEFCSSxcclxuICAgICAgICAgIHByb3ZpZGVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGVyYzIwLmJhbGFuY2VPZihjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWxhbmNlOiBcIiwgZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1dhbGxldENvbm5lY3RlZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+Q3VycmVudCBBY2NvdW50OiB7Y3VycmVudEFjY291bnR9PC9wPlxyXG4gICAgICAgIDxwPlRva2VuIEFkZHJlc3M6IHtjb250cmFjdEFkZHJlc3N9PC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgdHlwZT1cIm51bWJlclwiXHJcbiAgcGxhY2Vob2xkZXI9XCJNaW50IEFtb3VudFwiXHJcbiAgdmFsdWU9e21pbnRBbW91bnR9XHJcbiAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW50QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuLz5cclxuPGJ1dHRvblxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIG9uQ2xpY2s9e21pbnRUb2tlbnN9XHJcbj5cclxuICBNaW50IFRva2Vuc1xyXG48L2J1dHRvbj5cclxuXHJcbnttaW50ZWRUb2tlbnMgJiYgKFxyXG4gIDxwPntgJHttaW50ZWRUb2tlbnN9IHRva2VucyBtaW50ZWQhYH08L3A+XHJcbil9XHJcblxyXG48YnV0dG9uXHJcbiAgdHlwZT1cImJ1dHRvblwiXHJcbiAgb25DbGljaz17Z2V0QmFsYW5jZX1cclxuPlxyXG4gIEdldCBCYWxhbmNlXHJcbjwvYnV0dG9uPlxyXG5cclxuXHJcbjwvZGl2PlxyXG48L2Rpdj4pIH1cclxufSJdLCJuYW1lcyI6WyJhYmkiLCJldGhlcnMiLCJIZWFkIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm1pbnRBbW91bnQiLCJzZXRNaW50QW1vdW50IiwibWludGVkVG9rZW5zIiwic2V0TWludGVkVG9rZW5zIiwiaXNXYWxsZXRDb25uZWN0ZWQiLCJldGhlcmV1bSIsIndpbmRvdyIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJhY2NvdW50IiwiZXJyb3IiLCJjb25uZWN0V2FsbGV0IiwibWludFRva2VucyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiZXJjMjAiLCJDb250cmFjdCIsIm1pbnRUeG4iLCJtaW50IiwidXRpbHMiLCJwYXJzZUV0aGVyIiwid2FpdCIsImhhc2giLCJyZWNlaXB0IiwibWludGVkQW1vdW50IiwiZm9ybWF0RXRoZXIiLCJldmVudHMiLCJhcmdzIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJiYWxhbmNlT2YiLCJyZW5kZXJDb250ZW50IiwiZGl2IiwicCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});