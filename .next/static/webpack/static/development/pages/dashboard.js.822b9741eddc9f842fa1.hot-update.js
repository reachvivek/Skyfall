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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var pages_sections_Components_Sections_SectionBasics_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionBasics.js */ "./pages-sections/Components-Sections/SectionBasics.js");
/* harmony import */ var pages_sections_Components_Sections_SectionNavbars_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionNavbars.js */ "./pages-sections/Components-Sections/SectionNavbars.js");
/* harmony import */ var pages_sections_Components_Sections_SectionTabs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionTabs.js */ "./pages-sections/Components-Sections/SectionTabs.js");
/* harmony import */ var pages_sections_Components_Sections_SectionPills_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionPills.js */ "./pages-sections/Components-Sections/SectionPills.js");
/* harmony import */ var pages_sections_Components_Sections_SectionNotifications_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionNotifications.js */ "./pages-sections/Components-Sections/SectionNotifications.js");
/* harmony import */ var pages_sections_Components_Sections_SectionTypography_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionTypography.js */ "./pages-sections/Components-Sections/SectionTypography.js");
/* harmony import */ var pages_sections_Components_Sections_SectionJavascript_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionJavascript.js */ "./pages-sections/Components-Sections/SectionJavascript.js");
/* harmony import */ var pages_sections_Components_Sections_SectionCarousel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionCarousel.js */ "./pages-sections/Components-Sections/SectionCarousel.js");
/* harmony import */ var pages_sections_Components_Sections_SectionCompletedExamples_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionCompletedExamples.js */ "./pages-sections/Components-Sections/SectionCompletedExamples.js");
/* harmony import */ var pages_sections_Components_Sections_SectionLogin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionLogin.js */ "./pages-sections/Components-Sections/SectionLogin.js");
/* harmony import */ var pages_sections_Components_Sections_SectionExamples_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionExamples.js */ "./pages-sections/Components-Sections/SectionExamples.js");
/* harmony import */ var pages_sections_Components_Sections_SectionDownload_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionDownload.js */ "./pages-sections/Components-Sections/SectionDownload.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Schedule */ "./node_modules/@material-ui/icons/Schedule.js");
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/components.js */ "./assets/jss/nextjs-material-kit/pages/components.js");

var _jsxFileName = "C:\\Users\\V.K. SINGH\\Desktop\\American Express\\Skyfall\\Frontend\\pages\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







 // sections for this page













 // @material-ui/icons





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_28__["default"]);
function Components(props) {
  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_24__["default"], {
    color: "info",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_25___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 23
        }
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 23
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 23
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 23
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_26___default.a,
      tabContent: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 23
        }
      }, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 23
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 23
        }
      }, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=dashboard.js.822b9741eddc9f842fa1.hot-update.js.map