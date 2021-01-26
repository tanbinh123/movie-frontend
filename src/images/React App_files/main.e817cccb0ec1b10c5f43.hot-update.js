webpackHotUpdate("main",{

/***/ "./src/components/questions/test.js":
/*!******************************************!*\
  !*** ./src/components/questions/test.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/components/questions/test.js";



const App = () => {
  const getBreeds = async () => {
    try {
      return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://localhost:5000/questions');
    } catch (error) {
      console.error(error);
    }
  };

  const countBreeds = async () => {
    const breeds = await getBreeds();
  };

  countBreeds();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.e817cccb0ec1b10c5f43.hot-update.js.map