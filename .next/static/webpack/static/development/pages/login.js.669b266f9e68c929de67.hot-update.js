webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/loginPage.js */ "./assets/jss/nextjs-material-kit/pages/loginPage.js");
/* harmony import */ var assets_img_bgw_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/bgw.jpg */ "./assets/img/bgw.jpg");
/* harmony import */ var assets_img_bgw_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_bgw_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\V.K. SINGH\\Desktop\\American Express\\Skyfall\\Frontend\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // @material-ui/core components




 // @material-ui/icons


 // core components
















 // npm i amazon-cognito-identity-js

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: "25ch"
    }
  };
});
function LoginPage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("cardHidden"),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props); //Sign Up


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var poolData = {
    UserPoolId: "ap-south-1_ferS7YnAr",
    ClientId: "r5l4mpudf69n2lm101jjpmpl8"
  };
  var UserPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_23__["CognitoUserPool"](poolData);

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, function (err, data) {
      if (err) console.error(err);
      console.log(email, password);
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    absolute: true,
    color: "transparent",
    brand: "SKYFALL",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    })
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + assets_img_bgw_jpg__WEBPACK_IMPORTED_MODULE_22___default.a + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes[cardAnimaton],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: classes.form,
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    color: "info",
    className: classes.cardHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "SignUp"), __jsx("div", {
    className: classes.socialLine,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_19__["default"], {
    htmlFor: "input-with-icon-adornment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "With a start adornment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Input"], {
    id: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    inputProps: {
      type: "email"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Input"], {
    id: "pass",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    inputProps: {
      type: "password",
      autoComplete: "off"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.margin, classes.textField),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_19__["default"], {
    htmlFor: "standard-adornment-password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, "Password"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Input"], {
    id: "standard-adornment-password",
    type: values.showPassword ? "text" : "password",
    value: values.password,
    onChange: handleChange("password"),
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 27
      }
    }, __jsx(IconButton, {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, values.showPassword ? __jsx(Visibility, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 33
      }
    }) : __jsx(VisibilityOff, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 33
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.cardFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, "SignUp"))))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    whiteFont: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=login.js.669b266f9e68c929de67.hot-update.js.map