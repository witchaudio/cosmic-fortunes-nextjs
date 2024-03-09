"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reading/page",{

/***/ "(app-pages-browser)/./src/components/reading.tsx":
/*!************************************!*\
  !*** ./src/components/reading.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reading; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cards = [\n    \"/assets/fool.jpg\",\n    \"/assets/magician.jpeg\",\n    \"/assets/priestess.jpg\",\n    \"/assets/empress.jpg\",\n    \"/assets/emperor.jpg\",\n    \"/assets/hierophant.jpg\",\n    \"/assets/lovers.jpg\",\n    \"/assets/chariot.jpg\",\n    \"/assets/strength.jpg\",\n    \"/assets/hermit.jpg\",\n    \"/assets/wheel-fortune.jpg\",\n    \"/assets/justice.jpg\",\n    \"/assets/hanged-man.jpg\",\n    \"/assets/death.jpg\",\n    \"/assets/temperance1.jpg\",\n    \"/assets/devil.jpg\",\n    \"/assets/tower.jpg\",\n    \"/assets/star.jpg\",\n    \"/assets/moon.jpg\",\n    \"/assets/sun.jpg\",\n    \"/assets/judgment.jpg\",\n    \"/assets/world1.jpg\",\n    \"/assets/cups-page.jpg\",\n    \"/assets/cups-knight.jpg\",\n    \"/assets/cups-queen.jpg\",\n    \"/assets/cups-king.jpg\",\n    \"/assets/swords-page.jpg\",\n    \"/assets/swords-knight.jpg\",\n    \"/assets/swords-queen.jpg\",\n    \"/assets/swords-king.jpg\",\n    \"/assets/pentacles-page.jpg\",\n    \"/assets/pentacles-knight.jpg\",\n    \"/assets/pentacles-queen.jpg\",\n    \"/assets/pentacles-king.jpg\",\n    \"/assets/wands-page.jpg\",\n    \"/assets/wands-knight.jpg\",\n    \"/assets/wands-queen.jpg\",\n    \"/assets/wands-king.jpg\"\n];\nconst cardDescriptions = [\n    \"THE FOOL (new beginnings, spontaneity, and a free spirit.)\",\n    \"THE MAGICIAN (manifestation, resourcefulness, and inspired action.)\",\n    \"THE HIGH PRIESTESS (intuition, sacred knowledge, and divine feminine.)\",\n    \"THE EMPRESS (femininity, beauty, nature, and abundance.)\",\n    \"THE EMPEROR (authority, empowerment, and structure.)\",\n    \"THE HIEROPHANT (spiritual wisdom, religious beliefs, and institutions.)\",\n    \"THE LOVERS (love, harmony, relationships, and choices.)\",\n    \"THE CHARIOT (control, willpower, success, and determination.)\",\n    \"STRENGTH (courage, persuasion, influence, and compassion.)\",\n    \"THE HERMIT (soul searching, introspection, and inner guidance.)\",\n    \"THE WHEEL OF FORTUNE (good luck, karma, destiny, and a turning point.)\",\n    \"JUSTICE (fairness, truth, and law.)\",\n    \"THE HANGED MAN (surrender, letting go, and new perspectives.)\",\n    \"DEATH (endings, change, transformation, and transitions.)\",\n    \"TEMPERANCE (balance, moderation, patience, and purpose.)\",\n    \"THE DEVIL (shadow self, attachment, addiction, and sexuality.)\",\n    \"THE TOWER (sudden change, upheaval, chaos, and awakening.)\",\n    \"THE STAR (hope, faith, purpose, and spirituality.)\",\n    \"THE MOON (illusion, fear, anxiety, and intuition.)\",\n    \"THE SUN (positivity, warmth, success, and vitality.)\",\n    \"JUDGMENT (rebirth, inner calling, and absolution.)\",\n    \"THE WORLD (completion, integration, accomplishment, and travel.)\",\n    \"PAGE OF CUPS (creative opportunities, curiosity, and possibility.)\",\n    \"KNIGHT OF CUPS (creativity, romance, charm, and imagination.)\",\n    \"QUEEN OF CUPS (compassionate, caring, and flow.)\",\n    \"KING OF CUPS (emotional balance and diplomacy.)\",\n    \"PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)\",\n    \"KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)\",\n    \"QUEEN OF SWORDS (independent, unbiased judgment, and clear boundaries.)\",\n    \"KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)\",\n    \"PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)\",\n    \"KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)\",\n    \"QUEEN OF PENTACLES (nurturing, practical, and providing financially.)\",\n    \"KING OF PENTACLES (wealth, business, leadership, and abundance.)\",\n    \"PAGE OF WANDS (inspiration, ideas, and free spirit.)\",\n    \"KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)\",\n    \"QUEEN OF WANDS (courage, confidence, and determination.)\",\n    \"KING OF WANDS (natural-born leader, vision, and honor.)\"\n];\nfunction Reading() {\n    _s();\n    const [selectedCards, setSelectedCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedDescriptions, setSelectedDescriptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showCards, setShowCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getRandomCards = ()=>{\n        const shuffledIndices = Array.from(cards.keys()).sort(()=>0.5 - Math.random());\n        const selectedIndices = shuffledIndices.slice(0, 3);\n        setSelectedCards(selectedIndices.map((index)=>cards[index]));\n        setSelectedDescriptions(selectedIndices.map((index)=>cardDescriptions[index]));\n        setShowCards(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-12 md:py-24 lg:py-32 pt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto text-center mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold tracking-tight mb-4\",\n                        children: \"Get a Full Tarot Reading\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl mx-auto text-gray-600 dark:text-gray-400\",\n                        children: \"Seek your future with virtual tarot cards\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-lg mx-auto space-y-6 mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        className: \"w-full\",\n                        id: \"question\",\n                        placeholder: \"What do I need to know today?\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"w-full bg-black text-white border-2 border-gray hover:border-white p-2 transition duration-300 ease-in-out\",\n                        onClick: getRandomCards,\n                        children: \"Show Me My Cards\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 pb-10\",\n                        children: selectedCards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800\",\n                                style: {\n                                    width: \"240px\",\n                                    height: \"350px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    alt: \"Card \".concat(index + 1),\n                                    src: card,\n                                    layout: \"responsive\",\n                                    width: 240,\n                                    height: 650,\n                                    objectFit: \"contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                        className: \"max-w-lg mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                            className: \"p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Reading Overview\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                    lineNumber: 156,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"1. Past:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                                    lineNumber: 159,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                selectedDescriptions[0]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                            lineNumber: 158,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"2. Present:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                                    lineNumber: 162,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                selectedDescriptions[1]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                            lineNumber: 161,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"3. Future:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                                    lineNumber: 165,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                selectedDescriptions[2]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                            lineNumber: 164,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rachellarralde/Developer/Github/cosmic-fortunes-nextjs/src/components/reading.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Reading, \"MIfTUxfqEXbIzzUbRtKg18svRlU=\");\n_c = Reading;\nvar _c;\n$RefreshReg$(_c, \"Reading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3JlYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDYTtBQUNFO0FBQ2pCO0FBQzBCO0FBRXpELE1BQU1NLFFBQVE7SUFDWjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxtQkFBbUI7SUFDdkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDL0QsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FDOUQsRUFBRTtJQUVKLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNZSxpQkFBaUI7UUFDckIsTUFBTUMsa0JBQWtCQyxNQUFNQyxJQUFJLENBQUNaLE1BQU1hLElBQUksSUFBSUMsSUFBSSxDQUNuRCxJQUFNLE1BQU1DLEtBQUtDLE1BQU07UUFFekIsTUFBTUMsa0JBQWtCUCxnQkFBZ0JRLEtBQUssQ0FBQyxHQUFHO1FBQ2pEZCxpQkFBaUJhLGdCQUFnQkUsR0FBRyxDQUFDLENBQUNDLFFBQVVwQixLQUFLLENBQUNvQixNQUFNO1FBQzVEZCx3QkFDRVcsZ0JBQWdCRSxHQUFHLENBQUMsQ0FBQ0MsUUFBVW5CLGdCQUFnQixDQUFDbUIsTUFBTTtRQUV4RFosYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF5Qzs7Ozs7O2tDQUd2RCw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQW9EOzs7Ozs7Ozs7Ozs7MEJBSW5FLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUMzQix1REFBS0E7d0JBQ0oyQixXQUFVO3dCQUNWRyxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxNQUFLOzs7Ozs7a0NBRVAsOERBQUMvQix5REFBTUE7d0JBQ0wwQixXQUFVO3dCQUNWTSxTQUFTbkI7a0NBQ1Y7Ozs7Ozs7Ozs7OztZQUlGRiwyQkFDQzs7a0NBQ0UsOERBQUNjO3dCQUFJQyxXQUFVO2tDQUNabkIsY0FBY2dCLEdBQUcsQ0FBQyxDQUFDVSxNQUFNVCxzQkFDeEIsOERBQUNDO2dDQUVDQyxXQUFVO2dDQUNWUSxPQUFPO29DQUFFQyxPQUFPO29DQUFTQyxRQUFRO2dDQUFROzBDQUV6Qyw0RUFBQ25DLGtEQUFLQTtvQ0FDSm9DLEtBQUssUUFBa0IsT0FBVmIsUUFBUTtvQ0FDckJjLEtBQUtMO29DQUNMTSxRQUFPO29DQUNQSixPQUFPO29DQUNQQyxRQUFRO29DQUNSSSxXQUFVOzs7Ozs7K0JBVlBoQjs7Ozs7Ozs7OztrQ0FnQlgsOERBQUNyQixxREFBSUE7d0JBQUN1QixXQUFVO2tDQUNkLDRFQUFDeEIsNERBQVdBOzRCQUFDd0IsV0FBVTs7OENBQ3JCLDhEQUFDZTtvQ0FBR2YsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0U7OzhEQUNDLDhEQUFDYzs4REFBTzs7Ozs7O2dEQUFpQjtnREFBRWpDLG9CQUFvQixDQUFDLEVBQUU7Ozs7Ozs7c0RBRXBELDhEQUFDbUI7OzhEQUNDLDhEQUFDYzs4REFBTzs7Ozs7O2dEQUFvQjtnREFBRWpDLG9CQUFvQixDQUFDLEVBQUU7Ozs7Ozs7c0RBRXZELDhEQUFDbUI7OzhEQUNDLDhEQUFDYzs4REFBTzs7Ozs7O2dEQUFtQjtnREFBRWpDLG9CQUFvQixDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RFO0dBcEZ3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmVhZGluZy50c3g/MzNkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IENhcmRDb250ZW50LCBDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICBcIi9hc3NldHMvZm9vbC5qcGdcIixcbiAgXCIvYXNzZXRzL21hZ2ljaWFuLmpwZWdcIixcbiAgXCIvYXNzZXRzL3ByaWVzdGVzcy5qcGdcIixcbiAgXCIvYXNzZXRzL2VtcHJlc3MuanBnXCIsXG4gIFwiL2Fzc2V0cy9lbXBlcm9yLmpwZ1wiLFxuICBcIi9hc3NldHMvaGllcm9waGFudC5qcGdcIixcbiAgXCIvYXNzZXRzL2xvdmVycy5qcGdcIixcbiAgXCIvYXNzZXRzL2NoYXJpb3QuanBnXCIsXG4gIFwiL2Fzc2V0cy9zdHJlbmd0aC5qcGdcIixcbiAgXCIvYXNzZXRzL2hlcm1pdC5qcGdcIixcbiAgXCIvYXNzZXRzL3doZWVsLWZvcnR1bmUuanBnXCIsXG4gIFwiL2Fzc2V0cy9qdXN0aWNlLmpwZ1wiLFxuICBcIi9hc3NldHMvaGFuZ2VkLW1hbi5qcGdcIixcbiAgXCIvYXNzZXRzL2RlYXRoLmpwZ1wiLFxuICBcIi9hc3NldHMvdGVtcGVyYW5jZTEuanBnXCIsXG4gIFwiL2Fzc2V0cy9kZXZpbC5qcGdcIixcbiAgXCIvYXNzZXRzL3Rvd2VyLmpwZ1wiLFxuICBcIi9hc3NldHMvc3Rhci5qcGdcIixcbiAgXCIvYXNzZXRzL21vb24uanBnXCIsXG4gIFwiL2Fzc2V0cy9zdW4uanBnXCIsXG4gIFwiL2Fzc2V0cy9qdWRnbWVudC5qcGdcIixcbiAgXCIvYXNzZXRzL3dvcmxkMS5qcGdcIixcbiAgXCIvYXNzZXRzL2N1cHMtcGFnZS5qcGdcIixcbiAgXCIvYXNzZXRzL2N1cHMta25pZ2h0LmpwZ1wiLFxuICBcIi9hc3NldHMvY3Vwcy1xdWVlbi5qcGdcIixcbiAgXCIvYXNzZXRzL2N1cHMta2luZy5qcGdcIixcbiAgXCIvYXNzZXRzL3N3b3Jkcy1wYWdlLmpwZ1wiLFxuICBcIi9hc3NldHMvc3dvcmRzLWtuaWdodC5qcGdcIixcbiAgXCIvYXNzZXRzL3N3b3Jkcy1xdWVlbi5qcGdcIixcbiAgXCIvYXNzZXRzL3N3b3Jkcy1raW5nLmpwZ1wiLFxuICBcIi9hc3NldHMvcGVudGFjbGVzLXBhZ2UuanBnXCIsXG4gIFwiL2Fzc2V0cy9wZW50YWNsZXMta25pZ2h0LmpwZ1wiLFxuICBcIi9hc3NldHMvcGVudGFjbGVzLXF1ZWVuLmpwZ1wiLFxuICBcIi9hc3NldHMvcGVudGFjbGVzLWtpbmcuanBnXCIsXG4gIFwiL2Fzc2V0cy93YW5kcy1wYWdlLmpwZ1wiLFxuICBcIi9hc3NldHMvd2FuZHMta25pZ2h0LmpwZ1wiLFxuICBcIi9hc3NldHMvd2FuZHMtcXVlZW4uanBnXCIsXG4gIFwiL2Fzc2V0cy93YW5kcy1raW5nLmpwZ1wiLFxuXTtcblxuY29uc3QgY2FyZERlc2NyaXB0aW9ucyA9IFtcbiAgXCJUSEUgRk9PTCAobmV3IGJlZ2lubmluZ3MsIHNwb250YW5laXR5LCBhbmQgYSBmcmVlIHNwaXJpdC4pXCIsXG4gIFwiVEhFIE1BR0lDSUFOIChtYW5pZmVzdGF0aW9uLCByZXNvdXJjZWZ1bG5lc3MsIGFuZCBpbnNwaXJlZCBhY3Rpb24uKVwiLFxuICBcIlRIRSBISUdIIFBSSUVTVEVTUyAoaW50dWl0aW9uLCBzYWNyZWQga25vd2xlZGdlLCBhbmQgZGl2aW5lIGZlbWluaW5lLilcIixcbiAgXCJUSEUgRU1QUkVTUyAoZmVtaW5pbml0eSwgYmVhdXR5LCBuYXR1cmUsIGFuZCBhYnVuZGFuY2UuKVwiLFxuICBcIlRIRSBFTVBFUk9SIChhdXRob3JpdHksIGVtcG93ZXJtZW50LCBhbmQgc3RydWN0dXJlLilcIixcbiAgXCJUSEUgSElFUk9QSEFOVCAoc3Bpcml0dWFsIHdpc2RvbSwgcmVsaWdpb3VzIGJlbGllZnMsIGFuZCBpbnN0aXR1dGlvbnMuKVwiLFxuICBcIlRIRSBMT1ZFUlMgKGxvdmUsIGhhcm1vbnksIHJlbGF0aW9uc2hpcHMsIGFuZCBjaG9pY2VzLilcIixcbiAgXCJUSEUgQ0hBUklPVCAoY29udHJvbCwgd2lsbHBvd2VyLCBzdWNjZXNzLCBhbmQgZGV0ZXJtaW5hdGlvbi4pXCIsXG4gIFwiU1RSRU5HVEggKGNvdXJhZ2UsIHBlcnN1YXNpb24sIGluZmx1ZW5jZSwgYW5kIGNvbXBhc3Npb24uKVwiLFxuICBcIlRIRSBIRVJNSVQgKHNvdWwgc2VhcmNoaW5nLCBpbnRyb3NwZWN0aW9uLCBhbmQgaW5uZXIgZ3VpZGFuY2UuKVwiLFxuICBcIlRIRSBXSEVFTCBPRiBGT1JUVU5FIChnb29kIGx1Y2ssIGthcm1hLCBkZXN0aW55LCBhbmQgYSB0dXJuaW5nIHBvaW50LilcIixcbiAgXCJKVVNUSUNFIChmYWlybmVzcywgdHJ1dGgsIGFuZCBsYXcuKVwiLFxuICBcIlRIRSBIQU5HRUQgTUFOIChzdXJyZW5kZXIsIGxldHRpbmcgZ28sIGFuZCBuZXcgcGVyc3BlY3RpdmVzLilcIixcbiAgXCJERUFUSCAoZW5kaW5ncywgY2hhbmdlLCB0cmFuc2Zvcm1hdGlvbiwgYW5kIHRyYW5zaXRpb25zLilcIixcbiAgXCJURU1QRVJBTkNFIChiYWxhbmNlLCBtb2RlcmF0aW9uLCBwYXRpZW5jZSwgYW5kIHB1cnBvc2UuKVwiLFxuICBcIlRIRSBERVZJTCAoc2hhZG93IHNlbGYsIGF0dGFjaG1lbnQsIGFkZGljdGlvbiwgYW5kIHNleHVhbGl0eS4pXCIsXG4gIFwiVEhFIFRPV0VSIChzdWRkZW4gY2hhbmdlLCB1cGhlYXZhbCwgY2hhb3MsIGFuZCBhd2FrZW5pbmcuKVwiLFxuICBcIlRIRSBTVEFSIChob3BlLCBmYWl0aCwgcHVycG9zZSwgYW5kIHNwaXJpdHVhbGl0eS4pXCIsXG4gIFwiVEhFIE1PT04gKGlsbHVzaW9uLCBmZWFyLCBhbnhpZXR5LCBhbmQgaW50dWl0aW9uLilcIixcbiAgXCJUSEUgU1VOIChwb3NpdGl2aXR5LCB3YXJtdGgsIHN1Y2Nlc3MsIGFuZCB2aXRhbGl0eS4pXCIsXG4gIFwiSlVER01FTlQgKHJlYmlydGgsIGlubmVyIGNhbGxpbmcsIGFuZCBhYnNvbHV0aW9uLilcIixcbiAgXCJUSEUgV09STEQgKGNvbXBsZXRpb24sIGludGVncmF0aW9uLCBhY2NvbXBsaXNobWVudCwgYW5kIHRyYXZlbC4pXCIsXG4gIFwiUEFHRSBPRiBDVVBTIChjcmVhdGl2ZSBvcHBvcnR1bml0aWVzLCBjdXJpb3NpdHksIGFuZCBwb3NzaWJpbGl0eS4pXCIsXG4gIFwiS05JR0hUIE9GIENVUFMgKGNyZWF0aXZpdHksIHJvbWFuY2UsIGNoYXJtLCBhbmQgaW1hZ2luYXRpb24uKVwiLFxuICBcIlFVRUVOIE9GIENVUFMgKGNvbXBhc3Npb25hdGUsIGNhcmluZywgYW5kIGZsb3cuKVwiLFxuICBcIktJTkcgT0YgQ1VQUyAoZW1vdGlvbmFsIGJhbGFuY2UgYW5kIGRpcGxvbWFjeS4pXCIsXG4gIFwiUEFHRSBPRiBTV09SRFMgKG5ldyBpZGVhcywgdGhpcnN0IGZvciBrbm93bGVkZ2UsIGFuZCBuZXcgd2F5cyBvZiBjb21tdW5pY2F0aW5nLilcIixcbiAgXCJLTklHSFQgT0YgU1dPUkRTIChhY3Rpb24tb3JpZW50ZWQsIGRyaXZlbiB0byBzdWNjZWVkLCBhbmQgZmFzdCB0aGlua2luZy4pXCIsXG4gIFwiUVVFRU4gT0YgU1dPUkRTIChpbmRlcGVuZGVudCwgdW5iaWFzZWQganVkZ21lbnQsIGFuZCBjbGVhciBib3VuZGFyaWVzLilcIixcbiAgXCJLSU5HIE9GIFNXT1JEUyAobWVudGFsIGNsYXJpdHksIGludGVsbGVjdHVhbCBjbGFyaXR5LCBwb3dlciwgYW5kIGF1dGhvcml0eS4pXCIsXG4gIFwiUEFHRSBPRiBQRU5UQUNMRVMgKG1hbmlmZXN0YXRpb24sIGZpbmFuY2lhbCBvcHBvcnR1bml0eSwgYW5kIHNraWxsIGRldmVsb3BtZW50LilcIixcbiAgXCJLTklHSFQgT0YgUEVOVEFDTEVTIChoYXJkIHdvcmssIHByb2R1Y3Rpdml0eSwgYW5kIGNvbnNlcnZhdGlzbS4pXCIsXG4gIFwiUVVFRU4gT0YgUEVOVEFDTEVTIChudXJ0dXJpbmcsIHByYWN0aWNhbCwgYW5kIHByb3ZpZGluZyBmaW5hbmNpYWxseS4pXCIsXG4gIFwiS0lORyBPRiBQRU5UQUNMRVMgKHdlYWx0aCwgYnVzaW5lc3MsIGxlYWRlcnNoaXAsIGFuZCBhYnVuZGFuY2UuKVwiLFxuICBcIlBBR0UgT0YgV0FORFMgKGluc3BpcmF0aW9uLCBpZGVhcywgYW5kIGZyZWUgc3Bpcml0LilcIixcbiAgXCJLTklHSFQgT0YgV0FORFMgKGVuZXJneSwgcGFzc2lvbiwgYWR2ZW50dXJlLCBhbmQgaW1wdWxzaXZlbmVzcy4pXCIsXG4gIFwiUVVFRU4gT0YgV0FORFMgKGNvdXJhZ2UsIGNvbmZpZGVuY2UsIGFuZCBkZXRlcm1pbmF0aW9uLilcIixcbiAgXCJLSU5HIE9GIFdBTkRTIChuYXR1cmFsLWJvcm4gbGVhZGVyLCB2aXNpb24sIGFuZCBob25vci4pXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWFkaW5nKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXJkcywgc2V0U2VsZWN0ZWRDYXJkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWREZXNjcmlwdGlvbnMsIHNldFNlbGVjdGVkRGVzY3JpcHRpb25zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihcbiAgICBbXVxuICApO1xuICBjb25zdCBbc2hvd0NhcmRzLCBzZXRTaG93Q2FyZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldFJhbmRvbUNhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNodWZmbGVkSW5kaWNlcyA9IEFycmF5LmZyb20oY2FyZHMua2V5cygpKS5zb3J0KFxuICAgICAgKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKVxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRpY2VzID0gc2h1ZmZsZWRJbmRpY2VzLnNsaWNlKDAsIDMpO1xuICAgIHNldFNlbGVjdGVkQ2FyZHMoc2VsZWN0ZWRJbmRpY2VzLm1hcCgoaW5kZXgpID0+IGNhcmRzW2luZGV4XSkpO1xuICAgIHNldFNlbGVjdGVkRGVzY3JpcHRpb25zKFxuICAgICAgc2VsZWN0ZWRJbmRpY2VzLm1hcCgoaW5kZXgpID0+IGNhcmREZXNjcmlwdGlvbnNbaW5kZXhdKVxuICAgICk7XG4gICAgc2V0U2hvd0NhcmRzKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTEyIG1kOnB5LTI0IGxnOnB5LTMyIHB0LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBtYi00XCI+XG4gICAgICAgICAgR2V0IGEgRnVsbCBUYXJvdCBSZWFkaW5nXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG14LWF1dG8gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICBTZWVrIHlvdXIgZnV0dXJlIHdpdGggdmlydHVhbCB0YXJvdCBjYXJkc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0byBzcGFjZS15LTYgbWItOFwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgIGlkPVwicXVlc3Rpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyBJIG5lZWQgdG8ga25vdyB0b2RheT9cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayB0ZXh0LXdoaXRlIGJvcmRlci0yIGJvcmRlci1ncmF5IGhvdmVyOmJvcmRlci13aGl0ZSBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2dldFJhbmRvbUNhcmRzfVxuICAgICAgICA+XG4gICAgICAgICAgU2hvdyBNZSBNeSBDYXJkc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dDYXJkcyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IG1heC13LTR4bCBteC1hdXRvIHB4LTQgcGItMTBcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZENhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjQwcHhcIiwgaGVpZ2h0OiBcIjM1MHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgYWx0PXtgQ2FyZCAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjQwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2NTB9XG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5SZWFkaW5nIE92ZXJ2aWV3PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPjEuIFBhc3Q6PC9zdHJvbmc+IHtzZWxlY3RlZERlc2NyaXB0aW9uc1swXX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPjIuIFByZXNlbnQ6PC9zdHJvbmc+IHtzZWxlY3RlZERlc2NyaXB0aW9uc1sxXX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPjMuIEZ1dHVyZTo8L3N0cm9uZz4ge3NlbGVjdGVkRGVzY3JpcHRpb25zWzJdfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5wdXQiLCJCdXR0b24iLCJJbWFnZSIsIkNhcmRDb250ZW50IiwiQ2FyZCIsImNhcmRzIiwiY2FyZERlc2NyaXB0aW9ucyIsIlJlYWRpbmciLCJzZWxlY3RlZENhcmRzIiwic2V0U2VsZWN0ZWRDYXJkcyIsInNlbGVjdGVkRGVzY3JpcHRpb25zIiwic2V0U2VsZWN0ZWREZXNjcmlwdGlvbnMiLCJzaG93Q2FyZHMiLCJzZXRTaG93Q2FyZHMiLCJnZXRSYW5kb21DYXJkcyIsInNodWZmbGVkSW5kaWNlcyIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNlbGVjdGVkSW5kaWNlcyIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2xpY2siLCJjYXJkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImgyIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/reading.tsx\n"));

/***/ })

});