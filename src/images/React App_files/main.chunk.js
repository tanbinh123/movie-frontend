(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".signout-button{\n  max-width: 200px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.signup-button{\n  max-width: 200px;\n  margin-top: 150px;\n}\n.login-button{\n  margin-top: 150px;\n}\n.signup-button{\n  margin-top: 150px;\n  max-height: 40px;\n}\n.form{\n  margin-top: 30px;\n  /* display: flex; */\n  /* align-items: center; */\n  /* justify-content: center; */\n}\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n.App-link {\n  color: #61dafb;\n}\n\n.quiz {\n  background-color: #FFFF00;\n  margin-top: 100px;\n  width: 100%;\n  border-radius: 15px;\n  padding: 35px;\n  max-width: 400px;\n  color: black;\n}\n.quiz-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* align-items: center; */\n}\n\n.score-section {\n  display: flex;\n  font-size: 24px;\n  align-items: center;\n}\n\n/* QUESTION/TIMER/LEFT SECTION */\n.question-section {\n  width: 100%;\n  position: relative;\n}\n\n.question-count {\n  margin-bottom: 20px;\n  float: right;\n}\n\n.question-count span {\n  font-size: 28px;\n}\n\n.question-text {\n  margin-bottom: 12px;\n  font-size: 2rem;\n}\n\n.timer-text {\n  background: rgb(230, 153, 12);\n  padding: 15px;\n  margin-top: 20px;\n  margin-right: 20px;\n  border: 5px solid rgb(255, 189, 67);\n  border-radius: 15px;\n  text-align: center;\n}\n\n/* ANSWERS/RIGHT SECTION */\n.answer-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nbutton {\n  width: 100%;\n  font-size: 16px;\n  color: #ffffff;\n  background-color: black;\n  border-radius: 5px;\n  padding: 5px;\n  align-items: center;\n  border: 5px solid #FFFF00;\n  cursor: pointer;\n}\n.correct {\n  background-color: #2f922f;\n}\n.incorrect {\n  background-color: #ff3333;\n}\n.login-container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.signup-container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh1{\n  text-align: center;\n}\n.recaptcha{\n  margin-top: 50px;\n}\n.logo-container{\n  display: flex;\n  flex-direction: row;\n}\n.App-logo {\n  height: 6vmin;\n  pointer-events: none;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 20px;\n}\n.logo-tekst{\n  font-size: 30px;\n}\nfooter{\n  position: relative;\n  margin-top: 30px;\n  bottom: 0;\n  background-color: rgb(41, 41, 41);\n  width: 100%;\n}\n.footer-text-container{\n  display: flex;\n  flex-direction:row;\n  justify-content: center;\n}\n.footer-text{\n  margin-right: 30px;\n  margin-left:30px;\n}\n/* @media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n} */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/questions/questions.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/questions/questions.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../fonts/AVERTA-EXTRABOLD.TTF */ "./src/fonts/AVERTA-EXTRABOLD.TTF"));

// Module
exports.push([module.i, "@font-face {\n\tfont-family: 'Avertabold';\n\tsrc: local('Avertabold'), url(" + ___CSS_LOADER_URL___0___ + ") format('truetype');\n  }\nul {\n\tlist-style: none;\n\tpadding: 0;\n\twidth: 30%;\n\tmargin: auto;\n}\nli {\n\tfont-size: 1.3rem;\n\tline-height: 2rem;\n}\n.btn-style {\n\t/* display: flex;\n\tjustify-content: center;\n\tflex-direction: row; */\n\tcolor: black;\n\tbackground-color: #FFFF00;\n\tcursor: pointer;\n\tmargin-left: 600px;\n\tmargin-right: auto;\n\tfont-family: 'DINNextLTPro-BoldCondensed';\n\tfont-size: 16px;\n\tmax-width: 200px;\n}\n\n.btn-option {\n\tcolor: black;\n\tbackground-color: #FFFF00;\n\tcursor: pointer;\n\tpadding: 5px;\n\tmargin: 10px;\n\tfont-family: 'DINNextLTPro-Condensed';\n\tfont-size: 32px;\n}\n.btn-option:hover {\n\tbackground-color:#fdfd3c; \n  }\n.button:active {\n    outline: none;\n\tborder: none;\n\tborder-radius: 5px;\n}\nbutton:focus {\n\toutline: 2px solid white;\n}\n.quiz-container{\n\tdisplay: flex;\n}\n.question{\n\tfont-size: 60px;\n\ttext-transform: uppercase;\n\tfont-family: Avertabold;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./fonts/AVERTA-EXTRABOLD.TTF */ "./src/fonts/AVERTA-EXTRABOLD.TTF"));

// Module
exports.push([module.i, "@font-face {\n  font-family: 'Avertabold';\n  src: local('Avertabold'), url(" + ___CSS_LOADER_URL___0___ + ") format('truetype');\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 800px;\n  font-family: 'Averta' !important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: black;\n  color: #FFFF00;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n\ninput {\n  margin-left: 10px;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/Login.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUp */ "./src/SignUp.js");
/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz */ "./src/quiz.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auth */ "./src/Auth.js");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrivateRoute */ "./src/PrivateRoute.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/App.js";









const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_6__["default"], {
    exact: true,
    path: "/",
    component: _quiz__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _Login__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/quiz",
    component: _quiz__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _SignUp__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Auth.js":
/*!*********************!*\
  !*** ./src/Auth.js ***!
  \*********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _Users_kristofferleemburg_quiz_TekkieWijzer_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./src/base.js");

var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/Auth.js";


const AuthContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
const AuthProvider = ({
  children
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_kristofferleemburg_quiz_TekkieWijzer_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        currentUser = _useState2[0],
        setCurrentUser = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
        _useState4 = Object(_Users_kristofferleemburg_quiz_TekkieWijzer_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        pending = _useState4[0],
        setPending = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _base_js__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Loading...");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuthContext.Provider, {
    value: {
      currentUser
    }
  }, children);
};

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./src/base.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yellow_fingerprint.svg */ "./src/yellow_fingerprint.svg");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/Login.js";





const Login = ({
  history
}) => {
  const handleLogin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async event => {
    event.preventDefault();
    const _event$target$element = event.target.elements,
          email = _event$target$element.email,
          password = _event$target$element.password;

    try {
      await _base_js__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo-tekst"
  }, "TekkieWijzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Log in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form",
    onSubmit: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "password",
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sitekey: "6LdurQgaAAAAAF7GTWWREHsUvwgt21EJPIXezbIz",
    onChange: onChange,
    theme: "Dark",
    size: "normal",
    className: "recaptcha"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "login-button",
    type: "submit"
  }, "Log in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No user yet? click here to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "signup-button",
    href: "/Signup"
  }, "Sign-up"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/PrivateRoute.js":
/*!*****************************!*\
  !*** ./src/PrivateRoute.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kristofferleemburg_quiz_TekkieWijzer_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth */ "./src/Auth.js");

var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/PrivateRoute.js";




const PrivateRoute = (_ref) => {
  let RouteComponent = _ref.component,
      rest = Object(_Users_kristofferleemburg_quiz_TekkieWijzer_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
        currentUser = _useContext.currentUser;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: routeProps => !!currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RouteComponent, routeProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login"
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/SignUp.js":
/*!***********************!*\
  !*** ./src/SignUp.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/base.js");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yellow_fingerprint.svg */ "./src/yellow_fingerprint.svg");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/SignUp.js";





const SignUp = ({
  history
}) => {
  const handleSignUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async event => {
    event.preventDefault();
    const _event$target$element = event.target.elements,
          email = _event$target$element.email,
          password = _event$target$element.password;

    try {
      await _base__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo-tekst"
  }, "TekkieWijzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form",
    onSubmit: handleSignUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "password",
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "signup-button",
    type: "submit"
  }, "Sign Up"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignUp));

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


const fire = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
  apiKey: "AIzaSyD7zgEE0PXE8khccyQ4FZiMAgfp5zXScZQ",
  authDomain: "tekkie-wijzer-2.firebaseapp.com",
  databaseURL: "tekkie-wijzer-2.appspot.com",
  projectId: "tekkie-wijzer-2",
  storageBucket: "tekkie-wijzer-2.appspot.com",
  messagingSenderId: "500952814272"
});
/* harmony default export */ __webpack_exports__["default"] = (fire);

/***/ }),

/***/ "./src/components/questions/questions.css":
/*!************************************************!*\
  !*** ./src/components/questions/questions.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./questions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/questions/questions.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./questions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/questions/questions.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./questions.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/questions/questions.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/questions/questions.js":
/*!***********************************************!*\
  !*** ./src/components/questions/questions.js ***!
  \***********************************************/
/*! exports provided: Questions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.css */ "./src/components/questions/questions.css");
/* harmony import */ var _questions_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_questions_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/components/questions/questions.js";


 //class component

class Questions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.selectUser = user_auth_id => {
      const userId = this.state.userId;
      this.setState({
        userId: user_auth_id
      });
      console.log("user_id: " + userId);
    };

    this.startQuizHandler = () => {
      const _this$state = this.state,
            quizStart = _this$state.quizStart,
            question = _this$state.question;
      console.log("Quiz Start");

      if (this.state.question) {
        console.log("abcedf ", question);
      }

      if (quizStart === false) {
        console.log("Quiz is set to start.");
        this.setState({
          quizStart: true,
          question: question
        });
      }
    };

    this.deleteContent = () => {
      console.log('Start Delete');
      this.setState({
        quizStart: false,
        quizEnd: false,
        quizProfile: false,
        userAnswer: null,
        index: 1,
        question: null
      });
      fetch('http://localhost:5000/delete-content', {
        method: 'DELETE',
        body: JSON.stringify({
          user: this.state.userId
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json()).catch(function (err) {
        console.warn('Something went wrong: ', err);
      });
      this.fetchQuestion();
    };

    this.nextQuestionHandler = () => {
      const _this$state2 = this.state,
            question = _this$state2.question,
            index = _this$state2.index,
            userAnswer = _this$state2.userAnswer,
            userId = _this$state2.userId;

      if (userAnswer) {
        console.log("userAnswer: " + userAnswer);
        console.log("question id: " + question.question_id);
        console.log("userId = " + userId);
      }

      ;
      fetch('http://localhost:5000/user', {
        method: 'post',
        body: JSON.stringify({
          question_id: this.state.question.question_id,
          answer: this.state.userAnswer,
          user: this.state.userId
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      }).then(function (data) {
        console.log('fetch user' + data); // this.fetchQuestion();
      }).catch(function (error) {
        console.warn('Something went wrong.', error);
      }); //fetch question gebaseerd op info in user account

      this.fetchQuestion(); //post request save question to back-end (user) with AWAIT???
      //get request for a new question ASYNC??

      this.setState({
        userAnswer: "",
        index: index + 1,
        disabled: true
      });

      if (index === 10) {
        this.setState({
          quizEnd: true
        }); //clearUser()
      }
    };

    this.selectAnswer = option => {
      this.setState({
        disabled: false,
        userAnswer: option
      });
      console.log("chosen option = " + option);
    };

    this.state = {
      question: null,
      quizStart: false,
      quizEnd: false,
      quizProfile: false,
      disabled: true,
      index: 1,
      userAnswer: null,
      userId: 1
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    fetch('http://localhost:5000/question').then(res => res.json()).then(question => this.setState({
      question: question.question,
      quizEnd: question.question.last_q
    }, () => console.log('Questions fetched...', question))).catch(err => console.log('there is an error, ' + err));
    console.log('finish ComponentDidMount');
  } // fetchQuestion() {
  // 	console.log('start fetchQuestion');
  // 	fetch('http://localhost:5000/question')
  // 	.then(res => res.json())
  // 	.then(question => this.setState({ question: question.question, quizEnd : question.question.last_q },
  // 		() => console.log('Questions fetched...', question)))
  // 	// .catch(err => console.log('there is an error; ' + err));
  // }


  fetchQuestion() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:5000/question").then(res => res.json()).then(question => this.setState({
      question: question.question,
      quizEnd: question.question.last_q
    }, () => console.log('Questions fetched...', question)));
  }

  render() {
    //variabelen
    const _this$state3 = this.state,
          index = _this$state3.index,
          quizEnd = _this$state3.quizEnd,
          quizStart = _this$state3.quizStart,
          quizProfile = _this$state3.quizProfile,
          question = _this$state3.question;
    console.log('start render');
    console.log(question);

    if (quizEnd) {
      if (quizProfile === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Your profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn-style",
          onClick: this.deleteContent
        }, "DELETE USER"));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "You've reached the end of the quiz!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Check out your profile."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-style",
        onClick: this.deleteContent
      }, "DELETE USER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-style",
        onClick: this.showProfile
      }, "SHOW PROFILE"));
    }

    ;

    if (quizStart === false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TekkieWijzer 2.0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-style",
        onClick: this.startQuizHandler
      }, "START"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, question.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is question ", index), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, question.answers.map((answer, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: answer.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: i,
      className: "btn-option",
      onClick: () => this.selectAnswer(answer)
    }, "Option ", i + 1), answer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      disabled: this.state.disabled,
      className: "btn-style",
      onClick: this.nextQuestionHandler
    }, "NEXT"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

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

/***/ }),

/***/ "./src/fonts/AVERTA-EXTRABOLD.TTF":
/*!****************************************!*\
  !*** ./src/fonts/AVERTA-EXTRABOLD.TTF ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AVERTA-EXTRABOLD.3d4a2cff.TTF";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _src_components_questions_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/questions/test */ "./src/components/questions/test.js");
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_questions_test__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/base.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_questions_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questions/questions */ "./src/components/questions/questions.js");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yellow_fingerprint.svg */ "./src/yellow_fingerprint.svg");
/* harmony import */ var _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kristofferleemburg/quiz/TekkieWijzer/client/src/quiz.js";




 // importeer component Questions



function App() {
  const user = firebase__WEBPACK_IMPORTED_MODULE_4___default.a.auth().currentUser;
  console.log(user.email);
  console.log(user.uid);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quiz-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _yellow_fingerprint_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo-tekst"
  }, "TekkieWijzer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "signout-button",
    onClick: () => _base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut()
  }, "Sign out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_questions_questions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    UID: user.uid
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "footer-text"
  }, "STAP I - LORUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "footer-text"
  }, "STAP II - LORUM IPSUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "footer-text"
  }, "STAP III - LORUM IPSUM BLA"))));
}

/***/ }),

/***/ "./src/yellow_fingerprint.svg":
/*!************************************!*\
  !*** ./src/yellow_fingerprint.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/yellow_fingerprint.ee526a1f.svg";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kristofferleemburg/quiz/TekkieWijzer/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kristofferleemburg/quiz/TekkieWijzer/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map