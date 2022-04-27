webpackHotUpdate_N_E("pages/index",{

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of active React meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSCxpR0FKSjtBQUtFQyxTQUFPLEVBQUUsdUJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FEb0IsRUFVcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCw0R0FKSjtBQUtFQyxTQUFPLEVBQUUsNkJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0FWb0IsRUFtQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxPQUFLLEVBQ0gsNkZBSko7QUFLRUMsU0FBTyxFQUFFLDZCQUxYO0FBTUVDLGFBQVcsRUFDVDtBQVBKLENBbkJvQixFQTRCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCx1R0FKSjtBQUtFQyxTQUFPLEVBQUUsOEJBTFg7QUFNRUMsYUFBVyxFQUNUO0FBUEosQ0E1Qm9CLENBQXRCOztBQXNDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRCxDLENBZUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0F4Qk1GLFE7O0FBOENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDY5NTk2MTcwN2ViMjVhY2I1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cubmphcmNoaXRlY3RzLmNvLnVrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0L0xhLVBlZHJlcmEtQmFyY2Vsb25hLWFyY2hpdGVjdHVyZS5wbmdcIixcclxuICAgIGFkZHJlc3M6IFwiTGEgUGVkcmVyYSwgQmFyY2Vsb25hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJOZXN0ZWQgYW1vbmcgdGhlIHN0cmVldHMgb2YgQmFyY2Vsb25hIGFyZSBzb21lIGJlYXV0aWZ1bCBhbmQgdW51c3VhbCBidWlsZGluZ3MgYnkgd29ybGQtZmFtb3VzIGFyY2hpdGVjdCBBbnRvbmkgR2F1ZGkuIEhpcyB1bmlxdWUgYXBwcm9hY2ggaGFzIGdlbmVyYXRlZCBzb21lIG9mIHRoZSBtb3N0IGNyZWF0aXZlIGJ1aWxkaW5ncyBpbiB0aGUgd29ybGQsIGluY2x1ZGluZyBMYSBQZWRyZXJhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5uamFyY2hpdGVjdHMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvTGFzLUxhamFzLVNhbmN0dWFyeS1OYXJpJUMzJUIxby1hcmNoaXRlY3R1cmUucG5nXCIsXHJcbiAgICBhZGRyZXNzOiBcIkxhcyBMYWphcyBTYW5jdHVhcnksIE5hcmnDsW9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgZ290aGljLWxvb2tpbmcgY2h1cmNoIGlzIGJ1aWx0IGluc2lkZSBhIGNhbnlvbiBhbmQgaW1wcmVzc2l2ZWx5IGNvbm5lY3RzIG9uZSBzaWRlIG9mIGl0IHRvIHRoZSBvdGhlci4gSXQncyBsb2NhdGVkIGluIFNvdXRoZXJuIENvbG9tYmlhLCB0aGUgc2l0ZSB3aGVyZSBhIHdvbWFuIGFuZCBoZXIgZGF1Z2h0ZXIgcmVwb3J0ZWRseSBzYXcgYW4gYXBwYXJpdGlvbiBvZiBWaXJnaW4gTWFyeSBpbiAxNzU0LCB3aGljaCBtYWRlIHRoZSBwcmV2aW91c2x5IGRlYWYgYW5kIG11dGUgZGF1Z2h0ZXIgYWJsZSB0byBzcGVhay5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJBIFRoaXJkIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cubmphcmNoaXRlY3RzLmNvLnVrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0L0RvbWUtb2YtVGhlLVJvY2stYXJjaGl0ZWN0dXJlLnBuZ1wiLFxyXG4gICAgYWRkcmVzczogXCJEb21lIG9mIFRoZSBSb2NrLCBKZXJ1c2FsZW1cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoZSBEb21lIG9mIFRoZSBSb2NrIGlzIGEgN3RoIGNlbnR1cnkgYnVpbGRpbmcsIGFuZCBhIG1hc3RlcnBpZWNlIG9mIElzbGFtaWMgYXJjaGl0ZWN0dXJlLiBUaGUgb2N0YWdvbmFsIHBsYW4gYW5kIHRoZSByb3R1bmRhIGRvbWUgb2Ygd29vZCBhcmUgb2YgQnl6YW50aW5lIGRlc2lnbi4gVGhlIFBlcnNpYW4gdGlsZXMgb24gdGhlIGV4dGVyaW9yIHdlcmUgYWRkZWQgaW4gMTU2MS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm00XCIsXHJcbiAgICB0aXRsZTogXCJBIEZvdXJ0aCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3Lm5qYXJjaGl0ZWN0cy5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9TdC1CYXNpbHMtQ2F0aGVkcmFsLU1vc2Nvdy1hcmNoaXRlY3R1cmUucG5nXCIsXHJcbiAgICBhZGRyZXNzOiBcIlN0IEJhc2lsJ3MgQ2F0aGVkcmFsLCBNb3Njb3dcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgZ2FyaXNoLCBjYW5keSBjb2xvdXJlZCBjYXRoZWRyYWwgaXMgTW9zY293J3MgbW9zdCB2aXNpdGVkIHRvdXJpc3QgYXR0cmFjdGlvbi4gVGhlIGZhbW91cyBsYW5kbWFyayBpcyBzaGFwZWQgdG8gcmVzZW1ibGUgdGhlIGZsYW1lIG9mIGEgYm9uZmlyZSByaXNpbmcgaW50byB0aGUgc2t5LCBhbmQgbWFya3MgdGhlIGdlb21ldHJpYyBjZW50cmUgb2YgdGhlIGNpdHlcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJCcm93c2UgYSBodWdlIGxpc3Qgb2YgYWN0aXZlIFJlYWN0IG1lZXR1cHNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3Qge3JlcSwgcmVzfSA9IGNvbnRleHQ7XHJcblxyXG4vLyAgICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAvL2ZldGNoIGRhdGEgZnJvbSBhcGlcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL29kaW5ha2Fmb2NoYTowREUkY2EkaEBvZGluYWthLmdieGplLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==