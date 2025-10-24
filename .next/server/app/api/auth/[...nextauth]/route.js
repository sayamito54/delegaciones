"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_2025_DNP_Delegaciones_Repositorio_Delegaciones_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\2025\\\\DNP\\\\Delegaciones\\\\Repositorio\\\\Delegaciones\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_2025_DNP_Delegaciones_Repositorio_Delegaciones_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDMjAyNSU1Q0ROUCU1Q0RlbGVnYWNpb25lcyU1Q1JlcG9zaXRvcmlvJTVDRGVsZWdhY2lvbmVzJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDMjAyNSU1Q0ROUCU1Q0RlbGVnYWNpb25lcyU1Q1JlcG9zaXRvcmlvJTVDRGVsZWdhY2lvbmVzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvRDtBQUNqSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGVnYWNpb25lcy1hcHAvPzBhODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcMjAyNVxcXFxETlBcXFxcRGVsZWdhY2lvbmVzXFxcXFJlcG9zaXRvcmlvXFxcXERlbGVnYWNpb25lc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcMjAyNVxcXFxETlBcXFxcRGVsZWdhY2lvbmVzXFxcXFJlcG9zaXRvcmlvXFxcXERlbGVnYWNpb25lc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUV4QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0Msa0RBQVdBO0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxlZ2FjaW9uZXMtYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJ1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XHJcblxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n// import { prisma } from './prisma'\n// import bcrypt from 'bcryptjs'\nconst authOptions = {\n    // adapter: PrismaAdapter(prisma), // Comentado temporalmente para evitar problemas de DB\n    providers: [\n        // Proveedor de credenciales para usuarios demo\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                // Usuarios demo predefinidos\n                const demoUsers = [\n                    {\n                        id: \"demo-0\",\n                        email: \"administrador@demo.com\",\n                        password: \"admin123\",\n                        name: \"Administrador Demo\",\n                        role: \"ADMINISTRADOR\",\n                        department: \"Administraci\\xf3n General\"\n                    },\n                    {\n                        id: \"demo-1\",\n                        email: \"director@demo.com\",\n                        password: \"director123\",\n                        name: \"Director Demo\",\n                        role: \"DIRECTOR\",\n                        department: \"Direcci\\xf3n General\"\n                    },\n                    {\n                        id: \"demo-2\",\n                        email: \"solicitante@demo.com\",\n                        password: \"solicitante123\",\n                        name: \"Solicitante Demo\",\n                        role: \"SOLICITANTE\",\n                        department: \"\\xc1rea de Solicitudes\"\n                    },\n                    {\n                        id: \"demo-3\",\n                        email: \"secretaria@demo.com\",\n                        password: \"secretaria123\",\n                        name: \"Secretar\\xeda Demo\",\n                        role: \"SECRETARIA\",\n                        department: \"Secretar\\xeda General\"\n                    },\n                    {\n                        id: \"demo-4\",\n                        email: \"delegatario@demo.com\",\n                        password: \"delegatario123\",\n                        name: \"Delegatario Demo\",\n                        role: \"DELEGATARIO\",\n                        department: \"Delegaciones\"\n                    }\n                ];\n                const user = demoUsers.find((u)=>u.email === credentials.email);\n                if (user && user.password === credentials.password) {\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        department: user.department\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, account }) {\n            if (account && user) {\n                token.role = user.role;\n                token.department = user.department;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n                session.user.department = token.department;\n            }\n            return session;\n        },\n        async redirect ({ url, baseUrl }) {\n            // Si la URL es relativa, hacerla absoluta\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            // Por defecto, redirigir al dashboard\n            return `${baseUrl}/dashboard`;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/error\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: \"tu-secret-key-aqui\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87SUFDVDtJQUNBVixTQUFTO1FBQ1BXLFVBQVU7SUFDWjtJQUNBQyxRQUFRQyxvQkFBMkI7QUFDckMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGVnYWNpb25lcy1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG4vLyBpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCBBenVyZUFEUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9henVyZS1hZCdcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG4vLyBpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuL3ByaXNtYSdcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAvLyBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksIC8vIENvbWVudGFkbyB0ZW1wb3JhbG1lbnRlIHBhcmEgZXZpdGFyIHByb2JsZW1hcyBkZSBEQlxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBQcm92ZWVkb3IgZGUgY3JlZGVuY2lhbGVzIHBhcmEgdXN1YXJpb3MgZGVtb1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc3VhcmlvcyBkZW1vIHByZWRlZmluaWRvc1xuICAgICAgICBjb25zdCBkZW1vVXNlcnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdkZW1vLTAnLFxuICAgICAgICAgICAgZW1haWw6ICdhZG1pbmlzdHJhZG9yQGRlbW8uY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnYWRtaW4xMjMnLFxuICAgICAgICAgICAgbmFtZTogJ0FkbWluaXN0cmFkb3IgRGVtbycsXG4gICAgICAgICAgICByb2xlOiAnQURNSU5JU1RSQURPUicsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiAnQWRtaW5pc3RyYWNpw7NuIEdlbmVyYWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2RlbW8tMScsXG4gICAgICAgICAgICBlbWFpbDogJ2RpcmVjdG9yQGRlbW8uY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnZGlyZWN0b3IxMjMnLFxuICAgICAgICAgICAgbmFtZTogJ0RpcmVjdG9yIERlbW8nLFxuICAgICAgICAgICAgcm9sZTogJ0RJUkVDVE9SJyxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6ICdEaXJlY2Npw7NuIEdlbmVyYWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIGlkOiAnZGVtby0yJyxcbiAgICAgICAgICAgICAgICAgICBlbWFpbDogJ3NvbGljaXRhbnRlQGRlbW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3NvbGljaXRhbnRlMTIzJyxcbiAgICAgICAgICAgICAgICAgICBuYW1lOiAnU29saWNpdGFudGUgRGVtbycsXG4gICAgICAgICAgICAgICAgICAgcm9sZTogJ1NPTElDSVRBTlRFJyxcbiAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiAnw4FyZWEgZGUgU29saWNpdHVkZXMnXG4gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdkZW1vLTMnLFxuICAgICAgICAgICAgZW1haWw6ICdzZWNyZXRhcmlhQGRlbW8uY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnc2VjcmV0YXJpYTEyMycsXG4gICAgICAgICAgICBuYW1lOiAnU2VjcmV0YXLDrWEgRGVtbycsXG4gICAgICAgICAgICByb2xlOiAnU0VDUkVUQVJJQScsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiAnU2VjcmV0YXLDrWEgR2VuZXJhbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZGVtby00JyxcbiAgICAgICAgICAgIGVtYWlsOiAnZGVsZWdhdGFyaW9AZGVtby5jb20nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdkZWxlZ2F0YXJpbzEyMycsXG4gICAgICAgICAgICBuYW1lOiAnRGVsZWdhdGFyaW8gRGVtbycsXG4gICAgICAgICAgICByb2xlOiAnREVMRUdBVEFSSU8nLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogJ0RlbGVnYWNpb25lcydcbiAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgICBjb25zdCB1c2VyID0gZGVtb1VzZXJzLmZpbmQodSA9PiB1LmVtYWlsID09PSBjcmVkZW50aWFscy5lbWFpbClcbiAgICAgICAgXG4gICAgICAgIGlmICh1c2VyICYmIHVzZXIucGFzc3dvcmQgPT09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB1c2VyLmRlcGFydG1lbnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIFByb3ZlZWRvciBkZSBBenVyZSBBRCAoY29tZW50YWRvIHRlbXBvcmFsbWVudGUpXG4gICAgLy8gQXp1cmVBRFByb3ZpZGVyKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BWlVSRV9DTElFTlRfSUQhLFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BWlVSRV9DTElFTlRfU0VDUkVUISxcbiAgICAvLyAgIHRlbmFudElkOiBwcm9jZXNzLmVudi5BWlVSRV9URU5BTlRfSUQhLFxuICAgIC8vIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9KSB7XG4gICAgICBpZiAoYWNjb3VudCAmJiB1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcbiAgICAgICAgdG9rZW4uZGVwYXJ0bWVudCA9IHVzZXIuZGVwYXJ0bWVudFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YiFcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlIGFzIHN0cmluZ1xuICAgICAgICBzZXNzaW9uLnVzZXIuZGVwYXJ0bWVudCA9IHRva2VuLmRlcGFydG1lbnQgYXMgc3RyaW5nXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gICAgYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xuICAgICAgLy8gU2kgbGEgVVJMIGVzIHJlbGF0aXZhLCBoYWNlcmxhIGFic29sdXRhXG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSByZXR1cm4gYCR7YmFzZVVybH0ke3VybH1gXG4gICAgICAvLyBTaSBsYSBVUkwgZXMgZGVsIG1pc21vIG9yaWdlbiwgcGVybWl0aXJsYVxuICAgICAgZWxzZSBpZiAobmV3IFVSTCh1cmwpLm9yaWdpbiA9PT0gYmFzZVVybCkgcmV0dXJuIHVybFxuICAgICAgLy8gUG9yIGRlZmVjdG8sIHJlZGlyaWdpciBhbCBkYXNoYm9hcmRcbiAgICAgIHJldHVybiBgJHtiYXNlVXJsfS9kYXNoYm9hcmRgXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICAgIGVycm9yOiAnL2F1dGgvZXJyb3InLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiZGVtb1VzZXJzIiwiaWQiLCJyb2xlIiwiZGVwYXJ0bWVudCIsInVzZXIiLCJmaW5kIiwidSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInNlc3Npb24iLCJzdWIiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwiVVJMIiwib3JpZ2luIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2025%5CDNP%5CDelegaciones%5CRepositorio%5CDelegaciones&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();