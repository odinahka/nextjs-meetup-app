webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\user\\NextJs\\my-second-next-app\\pages\\index.js",
    _this = undefined;




var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A First Meetup",
  image: "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/La-Pedrera-Barcelona-architecture.png",
  address: "La Pedrera, Barcelona",
  description: "Nested among the streets of Barcelona are some beautiful and unusual buildings by world-famous architect Antoni Gaudi. His unique approach has generated some of the most creative buildings in the world, including La Pedrera"
}, {
  id: "m2",
  title: "A Second Meetup",
  image: "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/Las-Lajas-Sanctuary-Nari%C3%B1o-architecture.png",
  address: "Las Lajas Sanctuary, Nariño",
  description: "This gothic-looking church is built inside a canyon and impressively connects one side of it to the other. It's located in Southern Colombia, the site where a woman and her daughter reportedly saw an apparition of Virgin Mary in 1754, which made the previously deaf and mute daughter able to speak."
}, {
  id: "m3",
  title: "A Third Meetup",
  image: "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/Dome-of-The-Rock-architecture.png",
  address: "Dome of The Rock, Jerusalem",
  description: "The Dome of The Rock is a 7th century building, and a masterpiece of Islamic architecture. The octagonal plan and the rotunda dome of wood are of Byzantine design. The Persian tiles on the exterior were added in 1561."
}, {
  id: "m4",
  title: "A Fourth Meetup",
  image: "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/St-Basils-Cathedral-Moscow-architecture.png",
  address: "St Basil's Cathedral, Moscow",
  description: "This garish, candy coloured cathedral is Moscow's most visited tourist attraction. The famous landmark is shaped to resemble the flame of a bonfire rising into the sky, and marks the geometric centre of the city"
}];

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 10
  }, _this);
}; // export const getServerSideProps = async (context) => {
//     const {req, res} = context;
//     //fetch data from an API
//     return {
//         props: {
//          meetups: DUMMY_MEETUPS   
//         }
//     }
// }


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "next":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0RDtBQUNBO0FBRUE7QUFDQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSCxpR0FKSjtBQUtFQyxTQUFPLEVBQUUsdUJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FEb0IsRUFVcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCw0R0FKSjtBQUtFQyxTQUFPLEVBQUUsNkJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FWb0IsRUFtQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxPQUFLLEVBQ0gsNkZBSko7QUFLRUMsU0FBTyxFQUFFLDZCQUxYO0FBTUVDLGFBQVcsRUFDVDtBQVBKLENBbkJvQixFQTRCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCx1R0FKSjtBQUtFQyxTQUFPLEVBQUUsOEJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0E1Qm9CLENBQXRCOztBQXNDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQU8scUVBQUMsOENBQUQ7QUFBQSw0QkFDSCxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZUFJSCxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFNRCxDQVBELEMsQ0FTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQWxCTUYsUTs7QUFpQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4ZTRiMjMzN2RkNmY4YzA0MmZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYidcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5uamFyY2hpdGVjdHMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvTGEtUGVkcmVyYS1CYXJjZWxvbmEtYXJjaGl0ZWN0dXJlLnBuZ1wiLFxyXG4gICAgYWRkcmVzczogXCJMYSBQZWRyZXJhLCBCYXJjZWxvbmFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk5lc3RlZCBhbW9uZyB0aGUgc3RyZWV0cyBvZiBCYXJjZWxvbmEgYXJlIHNvbWUgYmVhdXRpZnVsIGFuZCB1bnVzdWFsIGJ1aWxkaW5ncyBieSB3b3JsZC1mYW1vdXMgYXJjaGl0ZWN0IEFudG9uaSBHYXVkaS4gSGlzIHVuaXF1ZSBhcHByb2FjaCBoYXMgZ2VuZXJhdGVkIHNvbWUgb2YgdGhlIG1vc3QgY3JlYXRpdmUgYnVpbGRpbmdzIGluIHRoZSB3b3JsZCwgaW5jbHVkaW5nIExhIFBlZHJlcmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3Lm5qYXJjaGl0ZWN0cy5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9MYXMtTGFqYXMtU2FuY3R1YXJ5LU5hcmklQzMlQjFvLWFyY2hpdGVjdHVyZS5wbmdcIixcclxuICAgIGFkZHJlc3M6IFwiTGFzIExhamFzIFNhbmN0dWFyeSwgTmFyacOxb1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBnb3RoaWMtbG9va2luZyBjaHVyY2ggaXMgYnVpbHQgaW5zaWRlIGEgY2FueW9uIGFuZCBpbXByZXNzaXZlbHkgY29ubmVjdHMgb25lIHNpZGUgb2YgaXQgdG8gdGhlIG90aGVyLiBJdCdzIGxvY2F0ZWQgaW4gU291dGhlcm4gQ29sb21iaWEsIHRoZSBzaXRlIHdoZXJlIGEgd29tYW4gYW5kIGhlciBkYXVnaHRlciByZXBvcnRlZGx5IHNhdyBhbiBhcHBhcml0aW9uIG9mIFZpcmdpbiBNYXJ5IGluIDE3NTQsIHdoaWNoIG1hZGUgdGhlIHByZXZpb3VzbHkgZGVhZiBhbmQgbXV0ZSBkYXVnaHRlciBhYmxlIHRvIHNwZWFrLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTNcIixcclxuICAgIHRpdGxlOiBcIkEgVGhpcmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5uamFyY2hpdGVjdHMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvRG9tZS1vZi1UaGUtUm9jay1hcmNoaXRlY3R1cmUucG5nXCIsXHJcbiAgICBhZGRyZXNzOiBcIkRvbWUgb2YgVGhlIFJvY2ssIEplcnVzYWxlbVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhlIERvbWUgb2YgVGhlIFJvY2sgaXMgYSA3dGggY2VudHVyeSBidWlsZGluZywgYW5kIGEgbWFzdGVycGllY2Ugb2YgSXNsYW1pYyBhcmNoaXRlY3R1cmUuIFRoZSBvY3RhZ29uYWwgcGxhbiBhbmQgdGhlIHJvdHVuZGEgZG9tZSBvZiB3b29kIGFyZSBvZiBCeXphbnRpbmUgZGVzaWduLiBUaGUgUGVyc2lhbiB0aWxlcyBvbiB0aGUgZXh0ZXJpb3Igd2VyZSBhZGRlZCBpbiAxNTYxLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTRcIixcclxuICAgIHRpdGxlOiBcIkEgRm91cnRoIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cubmphcmNoaXRlY3RzLmNvLnVrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0L1N0LUJhc2lscy1DYXRoZWRyYWwtTW9zY293LWFyY2hpdGVjdHVyZS5wbmdcIixcclxuICAgIGFkZHJlc3M6IFwiU3QgQmFzaWwncyBDYXRoZWRyYWwsIE1vc2Nvd1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBnYXJpc2gsIGNhbmR5IGNvbG91cmVkIGNhdGhlZHJhbCBpcyBNb3Njb3cncyBtb3N0IHZpc2l0ZWQgdG91cmlzdCBhdHRyYWN0aW9uLiBUaGUgZmFtb3VzIGxhbmRtYXJrIGlzIHNoYXBlZCB0byByZXNlbWJsZSB0aGUgZmxhbWUgb2YgYSBib25maXJlIHJpc2luZyBpbnRvIHRoZSBza3ksIGFuZCBtYXJrcyB0aGUgZ2VvbWV0cmljIGNlbnRyZSBvZiB0aGUgY2l0eVwiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gIDwvRnJhZ21lbnQ+IDtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3Qge3JlcSwgcmVzfSA9IGNvbnRleHQ7XHJcbiAgICBcclxuLy8gICAgIC8vZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTICAgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAvL2ZldGNoIGRhdGEgZnJvbSBhcGlcclxuICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9vZGluYWthZm9jaGE6MERFJGNhJGhAb2RpbmFrYS5nYnhqZS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICByZXR1cm4ge1xyXG4gICAgIHByb3BzOiB7XHJcbiAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHt0aXRsZTogbWVldHVwLnRpdGxlLCBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcywgaW1hZ2U6IG1lZXR1cC5pbWFnZSwgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKX0pKVxyXG4gICAgIH1cclxuICAgfTtcclxuIH07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9