webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Components; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Schedule */ "./node_modules/@material-ui/icons/Schedule.js");
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LockOpen */ "./node_modules/@material-ui/icons/LockOpen.js");
/* harmony import */ var _material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Lock */ "./node_modules/@material-ui/icons/Lock.js");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Payment */ "./node_modules/@material-ui/icons/Payment.js");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "./node_modules/@material-ui/icons/PermIdentity.js");
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Notes */ "./node_modules/@material-ui/icons/Notes.js");
/* harmony import */ var _material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "./node_modules/@material-ui/icons/PowerSettingsNew.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/components.js */ "./assets/jss/nextjs-material-kit/pages/components.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_22__);



var _jsxFileName = "C:\\Users\\V.K. SINGH\\Desktop\\American Express\\Skyfall\\Main\\Frontend\\pages\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // react components for routing our app without refresh

 // @material-ui/core components

 // core components


 // sections for this page

 // @material-ui/icons












 //Material Table


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_21__["default"]);
function Components(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    columns: [{
      title: "Domain",
      field: "domain"
    }, {
      title: "Username",
      field: "username"
    }, {
      title: "Password",
      field: "password",
      type: "password"
    }],
    data: [{
      domain: "gmail.com",
      username: "vivekkumarsingh.8991@gmail.com",
      password: "************"
    }, {
      domain: "amazon.in",
      username: "6380823262",
      password: "************"
    }, {
      domain: "facebook.com",
      username: "8084555818",
      password: "************"
    }, {
      domain: "apple.com",
      username: "reachvivek@outlook.com",
      password: "************"
    }, {
      domain: "myntra.in",
      username: "6380823262",
      password: "************"
    }, {
      domain: "flipkart.com",
      username: "vivekkumarsingh.8991@gmail.com",
      password: "************"
    }, {
      domain: "shopify.in",
      username: "6380823262",
      password: "************"
    }, {
      domain: "netflix.com",
      username: "rogerthatvivek@gmail.com",
      password: "************"
    }, {
      domain: "primeVideo.in",
      username: "6380823262",
      password: "************"
    }]
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.main),
    style: {
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "info",
    horizontal: {
      tabsGrid: {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2
      },
      contentGrid: {
        xs: 4,
        sm: 4,
        md: 8,
        lg: 9
      }
    },
    tabs: [{
      tabButton: "Passwords",
      tabIcon: _material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_13___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_22___default.a, {
        title: "Your Credentials",
        columns: state.columns,
        data: state.data,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.push(newData);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();

                if (oldData) {
                  setState(function (prevState) {
                    var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                    data[data.indexOf(oldData)] = newData;
                    return _objectSpread({}, prevState, {
                      data: data
                    });
                  });
                }
              }, 600);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.splice(data.indexOf(oldData), 1);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }
      }))
    }, {
      tabButton: "Payments",
      tabIcon: _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_15___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_22___default.a, {
        title: "Your Credentials",
        columns: state.columns,
        data: state.data,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.push(newData);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();

                if (oldData) {
                  setState(function (prevState) {
                    var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                    data[data.indexOf(oldData)] = newData;
                    return _objectSpread({}, prevState, {
                      data: data
                    });
                  });
                }
              }, 600);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.splice(data.indexOf(oldData), 1);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }
      }))
    }, {
      tabButton: "Secure Notes",
      tabIcon: _material_ui_icons_Notes__WEBPACK_IMPORTED_MODULE_17___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }
      }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_22___default.a, {
        title: "Your Credentials",
        columns: state.columns,
        data: state.data,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.push(newData);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();

                if (oldData) {
                  setState(function (prevState) {
                    var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                    data[data.indexOf(oldData)] = newData;
                    return _objectSpread({}, prevState, {
                      data: data
                    });
                  });
                }
              }, 600);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.splice(data.indexOf(oldData), 1);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }))
    }, {
      tabButton: "Personal Data",
      tabIcon: _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_16___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 19
        }
      }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_22___default.a, {
        title: "Your Credentials",
        columns: state.columns,
        data: state.data,
        editable: {
          onRowAdd: function onRowAdd(newData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.push(newData);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          },
          onRowUpdate: function onRowUpdate(newData, oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();

                if (oldData) {
                  setState(function (prevState) {
                    var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                    data[data.indexOf(oldData)] = newData;
                    return _objectSpread({}, prevState, {
                      data: data
                    });
                  });
                }
              }, 600);
            });
          },
          onRowDelete: function onRowDelete(oldData) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                setState(function (prevState) {
                  var data = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.data);

                  data.splice(data.indexOf(oldData), 1);
                  return _objectSpread({}, prevState, {
                    data: data
                  });
                });
              }, 600);
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }
      }))
    }, {
      tabButton: "My Account",
      tabIcon: _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_18___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 19
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }
      }, "Account Settings and Other Preferences"))
    }, {
      tabButton: "Log Out",
      tabIcon: _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_19___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "../home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 21
        }
      }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
        color: "danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 23
        }
      }, "Sign out")))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=dashboard.js.d21afc9511f2e56488cf.hot-update.js.map