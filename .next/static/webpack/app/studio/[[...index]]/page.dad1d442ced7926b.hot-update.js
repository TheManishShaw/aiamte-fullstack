"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/studio/[[...index]]/page",{

/***/ "(app-pages-browser)/./sanity/schemas/blog.schema.ts":
/*!***************************************!*\
  !*** ./sanity/schemas/blog.schema.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst schema = {\n    name: \"blog\",\n    title: \"Blog\",\n    type: \"document\",\n    fields: [\n        {\n            name: \"title\",\n            title: \"Title\",\n            type: \"string\",\n            require: __webpack_require__(\"(app-pages-browser)/./sanity/schemas sync recursive\"),\n            validation: (Rule)=>Rule.required()\n        },\n        {\n            name: \"description\",\n            title: \"Description\",\n            type: \"array\",\n            require: __webpack_require__(\"(app-pages-browser)/./sanity/schemas sync recursive\"),\n            of: [\n                {\n                    type: \"block\"\n                }\n            ]\n        },\n        {\n            name: \"slug\",\n            title: \"Slug\",\n            type: \"slug\",\n            options: {\n                source: \"title\"\n            }\n        },\n        {\n            name: \"views\",\n            title: \"Views\",\n            type: \"number\",\n            initialValue: 0\n        },\n        {\n            name: \"poster\",\n            title: \"Poster\",\n            type: \"image\",\n            validation: (Rule)=>Rule.required(),\n            options: {\n                hotspot: true\n            }\n        },\n        {\n            name: \"category\",\n            title: \"Category\",\n            type: \"string\",\n            validation: (Rule)=>Rule.required(),\n            options: {\n                list: [\n                    \"Document AI\",\n                    \"Computer Vision\",\n                    \"Natural Language Processing (NLP)\",\n                    \"Data Annotation\",\n                    \"Healthcare Ai\",\n                    \"Conversational Ai\",\n                    \"Text Annotation\",\n                    \"Video Annotation\",\n                    \"Audio Annotation\",\n                    \"Image Annotation\"\n                ]\n            }\n        },\n        {\n            name: \"popularTags\",\n            title: \"Popular Tags\",\n            type: \"string\",\n            validation: (Rule)=>Rule.required(),\n            options: {\n                list: [\n                    \"Aimate\",\n                    \"AimateIndia\",\n                    \"AiDate\",\n                    \"\",\n                    \"other\"\n                ]\n            }\n        },\n        {\n            name: \"author\",\n            title: \"Author\",\n            type: \"string\",\n            validation: (Rule)=>Rule.required(),\n            initialValue: \"Aimate\",\n            options: {\n                list: [\n                    \"Aimate\",\n                    \"Manish Shaw\",\n                    \"Shraddha Gupta\",\n                    \"Deepansh Sahni\",\n                    \"User\"\n                ]\n            }\n        },\n        {\n            name: \"authorImg\",\n            title: \"Author Img\",\n            type: \"image\",\n            options: {\n                hotspot: true\n            }\n        }\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3Nhbml0eS9zY2hlbWFzL2Jsb2cuc2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxTQUFTO0lBQ2JDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLFFBQVE7UUFDTjtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNORSxtRkFBT0E7WUFDUEMsWUFBWSxDQUFDQyxPQUFjQSxLQUFLQyxRQUFRO1FBQzFDO1FBQ0E7WUFDRVAsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkUsbUZBQU9BO1lBQ1BJLElBQUk7Z0JBQ0Y7b0JBQ0VOLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTk8sU0FBUztnQkFBRUMsUUFBUTtZQUFRO1FBQzdCO1FBQ0E7WUFDRVYsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTlMsY0FBYztRQUNoQjtRQUNBO1lBQ0VYLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05HLFlBQVksQ0FBQ0MsT0FBY0EsS0FBS0MsUUFBUTtZQUN4Q0UsU0FBUztnQkFDUEcsU0FBUztZQUNYO1FBQ0Y7UUFDQTtZQUNFWixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNORyxZQUFZLENBQUNDLE9BQWNBLEtBQUtDLFFBQVE7WUFDeENFLFNBQVM7Z0JBQ1BJLE1BQU07b0JBQ0o7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDtRQUNGO1FBQ0E7WUFDRWIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkcsWUFBWSxDQUFDQyxPQUFjQSxLQUFLQyxRQUFRO1lBQ3hDRSxTQUFTO2dCQUNQSSxNQUFNO29CQUFDO29CQUFVO29CQUFlO29CQUFVO29CQUFJO2lCQUFRO1lBQ3hEO1FBQ0Y7UUFDQTtZQUNFYixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNORyxZQUFZLENBQUNDLE9BQWNBLEtBQUtDLFFBQVE7WUFDeENJLGNBQWM7WUFDZEYsU0FBUztnQkFDUEksTUFBTTtvQkFDSjtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIO1FBQ0Y7UUFDQTtZQUNFYixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOTyxTQUFTO2dCQUNQRyxTQUFTO1lBQ1g7UUFDRjtLQUNEO0FBQ0g7QUFFQSwrREFBZWIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zYW5pdHkvc2NoZW1hcy9ibG9nLnNjaGVtYS50cz84ZjZiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjaGVtYSA9IHtcclxuICBuYW1lOiBcImJsb2dcIixcclxuICB0aXRsZTogXCJCbG9nXCIsXHJcbiAgdHlwZTogXCJkb2N1bWVudFwiLFxyXG4gIGZpZWxkczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInRpdGxlXCIsXHJcbiAgICAgIHRpdGxlOiBcIlRpdGxlXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIHJlcXVpcmUsXHJcbiAgICAgIHZhbGlkYXRpb246IChSdWxlOiBhbnkpID0+IFJ1bGUucmVxdWlyZWQoKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgdGl0bGU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgdHlwZTogXCJhcnJheVwiLFxyXG4gICAgICByZXF1aXJlLFxyXG4gICAgICBvZjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwiYmxvY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzbHVnXCIsXHJcbiAgICAgIHRpdGxlOiBcIlNsdWdcIixcclxuICAgICAgdHlwZTogXCJzbHVnXCIsXHJcbiAgICAgIG9wdGlvbnM6IHsgc291cmNlOiBcInRpdGxlXCIgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidmlld3NcIixcclxuICAgICAgdGl0bGU6IFwiVmlld3NcIixcclxuICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgaW5pdGlhbFZhbHVlOiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJwb3N0ZXJcIixcclxuICAgICAgdGl0bGU6IFwiUG9zdGVyXCIsXHJcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgdmFsaWRhdGlvbjogKFJ1bGU6IGFueSkgPT4gUnVsZS5yZXF1aXJlZCgpLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaG90c3BvdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgdGl0bGU6IFwiQ2F0ZWdvcnlcIixcclxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgdmFsaWRhdGlvbjogKFJ1bGU6IGFueSkgPT4gUnVsZS5yZXF1aXJlZCgpLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgXCJEb2N1bWVudCBBSVwiLFxyXG4gICAgICAgICAgXCJDb21wdXRlciBWaXNpb25cIixcclxuICAgICAgICAgIFwiTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nIChOTFApXCIsXHJcbiAgICAgICAgICBcIkRhdGEgQW5ub3RhdGlvblwiLFxyXG4gICAgICAgICAgXCJIZWFsdGhjYXJlIEFpXCIsXHJcbiAgICAgICAgICBcIkNvbnZlcnNhdGlvbmFsIEFpXCIsXHJcbiAgICAgICAgICBcIlRleHQgQW5ub3RhdGlvblwiLFxyXG4gICAgICAgICAgXCJWaWRlbyBBbm5vdGF0aW9uXCIsXHJcbiAgICAgICAgICBcIkF1ZGlvIEFubm90YXRpb25cIixcclxuICAgICAgICAgIFwiSW1hZ2UgQW5ub3RhdGlvblwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInBvcHVsYXJUYWdzXCIsXHJcbiAgICAgIHRpdGxlOiBcIlBvcHVsYXIgVGFnc1wiLFxyXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICB2YWxpZGF0aW9uOiAoUnVsZTogYW55KSA9PiBSdWxlLnJlcXVpcmVkKCksXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBsaXN0OiBbXCJBaW1hdGVcIiwgXCJBaW1hdGVJbmRpYVwiLCBcIkFpRGF0ZVwiLCBcIlwiLCBcIm90aGVyXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJhdXRob3JcIixcclxuICAgICAgdGl0bGU6IFwiQXV0aG9yXCIsXHJcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIHZhbGlkYXRpb246IChSdWxlOiBhbnkpID0+IFJ1bGUucmVxdWlyZWQoKSxcclxuICAgICAgaW5pdGlhbFZhbHVlOiBcIkFpbWF0ZVwiLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgXCJBaW1hdGVcIixcclxuICAgICAgICAgIFwiTWFuaXNoIFNoYXdcIixcclxuICAgICAgICAgIFwiU2hyYWRkaGEgR3VwdGFcIixcclxuICAgICAgICAgIFwiRGVlcGFuc2ggU2FobmlcIixcclxuICAgICAgICAgIFwiVXNlclwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImF1dGhvckltZ1wiLFxyXG4gICAgICB0aXRsZTogXCJBdXRob3IgSW1nXCIsXHJcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGhvdHNwb3Q6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XHJcbiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJuYW1lIiwidGl0bGUiLCJ0eXBlIiwiZmllbGRzIiwicmVxdWlyZSIsInZhbGlkYXRpb24iLCJSdWxlIiwicmVxdWlyZWQiLCJvZiIsIm9wdGlvbnMiLCJzb3VyY2UiLCJpbml0aWFsVmFsdWUiLCJob3RzcG90IiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sanity/schemas/blog.schema.ts\n"));

/***/ })

});