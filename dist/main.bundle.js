"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chicken3.jpg */ "./src/images/chicken3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#content {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr) repeat(1, 7fr);
    grid-template-areas:
        'header'
        'main';
    height: 100vh;
}


.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    min-width: 100%;
    user-select: none;
    z-index: 100;
    grid-area: header;
}

.header h1 {
    color: chocolate;
    font-weight: 700;
    font-size: 2.9rem;
    font-family: 'Bricolage Grotesque', sans-serif;
}

.nav {
    display: flex;
    gap: 1rem;
    padding-bottom: 0.5rem;
}

.nav-button {
    border: none;
    font-size: 1.5rem;
    background-color: white;
    outline: none;
    cursor: pointer;
    opacity: 50%;
    transition: all 0.1s ease;
}

.nav-button:hover {
    text-decoration: underline 2px;
    text-underline-offset: 5px;
    opacity: 100%;
}

.nav-button:active {
    transform: scale(0.95);
}

.nav-button.active {
    text-decoration: underline 2px;
    text-underline-offset: 5px;
    opacity: 100%;
}

.main {
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-attachment: fixed;
    background-size: contain;
    background-repeat: repeat;
    margin: 0;
    overflow-y: auto;
}

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    filter: brightness(1.1);
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: white;
    filter: brightness(1.1);
    margin: 1rem;
}

.image-container {
    max-width: 500px;
    max-height: 283px;
}

.image-container img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
    margin: 1rem;
    background-color: wheat;
    padding: 2rem;
    border-radius: 3%;
    overflow-wrap: break-word;
}

.image-container1 {
    max-width: 500px;
    max-height: 343px;
}

.image-container1 img {
    height: 100%;
    width: 100%;
}

.menu img {
    width: 200px;
}

.menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(343px, 1fr));
    gap: 3rem;
    font-family: 'Bricolage Grotesque', sans-serif;
    width: 90%;
    font-size: 1rem;
    padding: 3rem 0rem;
}

.menu div {
    background-color: white;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
}

.menu div p {
    word-wrap: break-word;
}

.menu div .title {
    font-size: 1.4rem;
    font-weight: 600;
}

.menu div .price {
    font-weight: 300;
}

.menu div .description {
    font-size: 0.85rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,qCAAqC;IACrC,iDAAiD;IACjD;;cAEU;IACV,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,0CAA0C;IAC1C,gBAAgB;IAChB,MAAM;IACN,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mDAAwC;IACxC,4BAA4B;IAC5B,wBAAwB;IACxB,yBAAyB;IACzB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,8CAA8C;IAC9C,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,8CAA8C;IAC9C,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,yDAAyD;IACzD,SAAS;IACT,8CAA8C;IAC9C,UAAU;IACV,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,300;10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&display=swap');\n\n\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#content {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(1, 1fr) repeat(1, 7fr);\n    grid-template-areas:\n        'header'\n        'main';\n    height: 100vh;\n}\n\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    background-color: white;\n    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);\n    position: sticky;\n    top: 0;\n    min-width: 100%;\n    user-select: none;\n    z-index: 100;\n    grid-area: header;\n}\n\n.header h1 {\n    color: chocolate;\n    font-weight: 700;\n    font-size: 2.9rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n}\n\n.nav {\n    display: flex;\n    gap: 1rem;\n    padding-bottom: 0.5rem;\n}\n\n.nav-button {\n    border: none;\n    font-size: 1.5rem;\n    background-color: white;\n    outline: none;\n    cursor: pointer;\n    opacity: 50%;\n    transition: all 0.1s ease;\n}\n\n.nav-button:hover {\n    text-decoration: underline 2px;\n    text-underline-offset: 5px;\n    opacity: 100%;\n}\n\n.nav-button:active {\n    transform: scale(0.95);\n}\n\n.nav-button.active {\n    text-decoration: underline 2px;\n    text-underline-offset: 5px;\n    opacity: 100%;\n}\n\n.main {\n    grid-area: main;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: url('./images/chicken3.jpg');\n    background-attachment: fixed;\n    background-size: contain;\n    background-repeat: repeat;\n    margin: 0;\n    overflow-y: auto;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    filter: brightness(1.1);\n    font-family: 'Bricolage Grotesque', sans-serif;\n    font-size: 2.5rem;\n    font-weight: 600;\n    color: white;\n    filter: brightness(1.1);\n    margin: 1rem;\n}\n\n.image-container {\n    max-width: 500px;\n    max-height: 283px;\n}\n\n.image-container img {\n    width: 100%;\n    height: 100%;\n    border-radius: 5%;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 500;\n    color: black;\n    margin: 1rem;\n    background-color: wheat;\n    padding: 2rem;\n    border-radius: 3%;\n    overflow-wrap: break-word;\n}\n\n.image-container1 {\n    max-width: 500px;\n    max-height: 343px;\n}\n\n.image-container1 img {\n    height: 100%;\n    width: 100%;\n}\n\n.menu img {\n    width: 200px;\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-template-rows: repeat(auto-fill, minmax(343px, 1fr));\n    gap: 3rem;\n    font-family: 'Bricolage Grotesque', sans-serif;\n    width: 90%;\n    font-size: 1rem;\n    padding: 3rem 0rem;\n}\n\n.menu div {\n    background-color: white;\n    border-radius: 5%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n.menu div p {\n    word-wrap: break-word;\n}\n\n.menu div .title {\n    font-size: 1.4rem;\n    font-weight: 600;\n}\n\n.menu div .price {\n    font-weight: 300;\n}\n\n.menu div .description {\n    font-size: 0.85rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.jpg */ "./src/images/map.jpg");


function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container1');

    const mapImage = document.createElement('img');
    mapImage.src = _images_map_jpg__WEBPACK_IMPORTED_MODULE_0__;

    contact.appendChild(createParagraph('Telephone: +44 1234567890'));
    contact.appendChild(createParagraph('Email: davidoschicken@gmail.com'));
    imageContainer.appendChild(mapImage);
    contact.appendChild(imageContainer);
    contact.appendChild(createParagraph('Location: X marks the spot'));

    return contact
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadContact() {
    const main = document.getElementById("main");
    main.style.alignItems = 'center';
    main.textContent = "";
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_chicken2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chicken2.jpg */ "./src/images/chicken2.jpg");


function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container')

    const chickenImage = document.createElement('img');
    chickenImage.src = _images_chicken2_jpg__WEBPACK_IMPORTED_MODULE_0__;

    home.appendChild(createParagraph("Simply delicious chicken since 2023."));
    imageContainer.appendChild(chickenImage)
    home.appendChild(imageContainer);
    home.appendChild(createParagraph("130 locations worldwide!"));
    home.appendChild(createParagraph("Order online or visit us in store"));

    return home
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.style.alignItems = 'flex-start';
    main.textContent = "";
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website.js */ "./src/website.js");



const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'content')

document.body.appendChild(mainContent);

(0,_website_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_classicburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/classicburger.jpg */ "./src/images/classicburger.jpg");
/* harmony import */ var _images_spicyburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/spicyburger.jpg */ "./src/images/spicyburger.jpg");
/* harmony import */ var _images_veganburger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/veganburger.jpg */ "./src/images/veganburger.jpg");
/* harmony import */ var _images_classicwrap_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/classicwrap.png */ "./src/images/classicwrap.png");
/* harmony import */ var _images_spicywrap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/spicywrap.png */ "./src/images/spicywrap.png");
/* harmony import */ var _images_largeclassicwrap_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/largeclassicwrap.png */ "./src/images/largeclassicwrap.png");
/* harmony import */ var _images_classicchickenbite_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/classicchickenbite.jpg */ "./src/images/classicchickenbite.jpg");
/* harmony import */ var _images_spicychickenbite_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/spicychickenbite.jpg */ "./src/images/spicychickenbite.jpg");
/* harmony import */ var _images_classicwings_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/classicwings.png */ "./src/images/classicwings.png");
/* harmony import */ var _images_hotwings_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/hotwings.png */ "./src/images/hotwings.png");
/* harmony import */ var _images_classictenders_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/classictenders.jpg */ "./src/images/classictenders.jpg");
/* harmony import */ var _images_spicytenders_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/spicytenders.jpg */ "./src/images/spicytenders.jpg");
/* harmony import */ var _images_classicfries_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/classicfries.jpg */ "./src/images/classicfries.jpg");
/* harmony import */ var _images_cheesefries_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/cheesefries.jpg */ "./src/images/cheesefries.jpg");















const menuItems = [
    {
        image: _images_classicburger_jpg__WEBPACK_IMPORTED_MODULE_0__,
        name: 'Classic Burger',
        price: '£5.99',
        description: 'Chicken fillet, lettuce, pickles, mayo'
    },
    {
        image: _images_spicyburger_jpg__WEBPACK_IMPORTED_MODULE_1__,
        name: 'Spicy Burger',
        price: '£5.99',
        description: 'Spicy chicken fillet, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: _images_veganburger_jpg__WEBPACK_IMPORTED_MODULE_2__,
        name: 'Vegan Burger',
        price: '£6.99',
        description: 'Vegan fillet, lettuce, spicy sauce, pink pickled onions'
    },
    {
        image: _images_classicwrap_png__WEBPACK_IMPORTED_MODULE_3__,
        name: 'Classic Wrap',
        price: '£3.99',
        description: 'Tender, lettuce, pickles, mayo'
    },
    {
        image: _images_spicywrap_png__WEBPACK_IMPORTED_MODULE_4__,
        name: 'Spicy Wrap',
        price: '£3.99',
        description: 'Spicy tender, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: _images_largeclassicwrap_png__WEBPACK_IMPORTED_MODULE_5__,
        name: 'Large Classic Wrap',
        price: '£4.99',
        description: 'Two tenders, lettuce, pickles, mayo'
    },
    {
        image: _images_spicywrap_png__WEBPACK_IMPORTED_MODULE_4__,
        name: 'Large Spicy Wrap',
        price: '£4.99',
        description: 'Two spicy tenders, lettuce, spicy sauce, spicy slaw'
    },
    {
        image: _images_classicchickenbite_jpg__WEBPACK_IMPORTED_MODULE_6__,
        name: 'Classic Chicken Bite',
        price: '£2.99',
        description: 'Tender, pickles, mayo'
    },
    {
        image: _images_spicychickenbite_jpg__WEBPACK_IMPORTED_MODULE_7__,
        name: 'Spicy Chicken Bite',
        price: '£2.99',
        description: 'Spicy tender, spicy sauce, spicy slaw'
    },
    {
        image: _images_classicwings_png__WEBPACK_IMPORTED_MODULE_8__,
        name: 'Classic Wings',
        price: '£3.49',
        description: ''
    },
    {
        image: _images_hotwings_png__WEBPACK_IMPORTED_MODULE_9__,
        name: 'Hot Wings',
        price: '£3.49',
        description: ''
    },
    {
        image: _images_classictenders_jpg__WEBPACK_IMPORTED_MODULE_10__,
        name: 'Classic Tenders',
        price: '£3.49',
        description: ''
    },
    {
        image: _images_spicytenders_jpg__WEBPACK_IMPORTED_MODULE_11__,
        name: 'Spicy Tenders',
        price: '£3.49',
        description: ''
    },
    {
        image: _images_classicfries_jpg__WEBPACK_IMPORTED_MODULE_12__,
        name: 'Classic Fries',
        price: '£1.49',
        description: ''
    },
    {
        image: _images_cheesefries_jpg__WEBPACK_IMPORTED_MODULE_13__,
        name: 'Cheese Fries',
        price: '£1.99',
        description: ''
    },
];

function createMenuItem(itemData) {
    const menuItem = document.createElement('div');
    const image = document.createElement('img');
    image.src = itemData.image;
    menuItem.appendChild(image);
    menuItem.appendChild(createParagraph(itemData.name, 'title'));
    menuItem.appendChild(createParagraph(itemData.price, 'price'));
    if (itemData.description) {
        menuItem.appendChild(createParagraph(itemData.description, 'description'));
    }
    return menuItem;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menuItems.forEach(itemData => {
        const menuItem = createMenuItem(itemData);
        menu.appendChild(menuItem);
    });

    return menu;
}

function createParagraph(text, className) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    if (className) {
        paragraph.classList.add(className);
    }
    return paragraph;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.style.alignItems = 'flex-start';
    main.textContent = "";
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-button");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Davido's Chicken";

    header.appendChild(restaurantName)
    header.appendChild(createNav())

    return header
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createWebsite() {
    const mainContent = document.getElementById("content");

    mainContent.appendChild(createHeader());
    mainContent.appendChild(createMain());

    setActiveButton(document.querySelector(".nav-button"));
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);

/***/ }),

/***/ "./src/images/cheesefries.jpg":
/*!************************************!*\
  !*** ./src/images/cheesefries.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbfe363d8c2eeb87383e.jpg";

/***/ }),

/***/ "./src/images/chicken2.jpg":
/*!*********************************!*\
  !*** ./src/images/chicken2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efb12e120a8b04bf95f3.jpg";

/***/ }),

/***/ "./src/images/chicken3.jpg":
/*!*********************************!*\
  !*** ./src/images/chicken3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dc4e3c7dce942aeea4c.jpg";

/***/ }),

/***/ "./src/images/classicburger.jpg":
/*!**************************************!*\
  !*** ./src/images/classicburger.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a418429350c9cc930f67.jpg";

/***/ }),

/***/ "./src/images/classicchickenbite.jpg":
/*!*******************************************!*\
  !*** ./src/images/classicchickenbite.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a4871f4ea4b146b3919.jpg";

/***/ }),

/***/ "./src/images/classicfries.jpg":
/*!*************************************!*\
  !*** ./src/images/classicfries.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43a18bad51ee0b791985.jpg";

/***/ }),

/***/ "./src/images/classictenders.jpg":
/*!***************************************!*\
  !*** ./src/images/classictenders.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb5286f7f0598b0838f1.jpg";

/***/ }),

/***/ "./src/images/classicwings.png":
/*!*************************************!*\
  !*** ./src/images/classicwings.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81ba4b6597c701f5d5f4.png";

/***/ }),

/***/ "./src/images/classicwrap.png":
/*!************************************!*\
  !*** ./src/images/classicwrap.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c5ab501f834ecee8738.png";

/***/ }),

/***/ "./src/images/hotwings.png":
/*!*********************************!*\
  !*** ./src/images/hotwings.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ca81c53bd5b5c5132f2.png";

/***/ }),

/***/ "./src/images/largeclassicwrap.png":
/*!*****************************************!*\
  !*** ./src/images/largeclassicwrap.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f3d18bca4065c674e00.png";

/***/ }),

/***/ "./src/images/map.jpg":
/*!****************************!*\
  !*** ./src/images/map.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3addf3088960aaf03dbe.jpg";

/***/ }),

/***/ "./src/images/spicyburger.jpg":
/*!************************************!*\
  !*** ./src/images/spicyburger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6b13c2af8592b284644.jpg";

/***/ }),

/***/ "./src/images/spicychickenbite.jpg":
/*!*****************************************!*\
  !*** ./src/images/spicychickenbite.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d958750bf8725b2dfb87.jpg";

/***/ }),

/***/ "./src/images/spicytenders.jpg":
/*!*************************************!*\
  !*** ./src/images/spicytenders.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c23b9b0f66b259a3a251.jpg";

/***/ }),

/***/ "./src/images/spicywrap.png":
/*!**********************************!*\
  !*** ./src/images/spicywrap.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "871aa3eef343f87fcb42.png";

/***/ }),

/***/ "./src/images/veganburger.jpg":
/*!************************************!*\
  !*** ./src/images/veganburger.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8acafac15ad9d52e1fe8.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcseUJBQXlCO0FBQ3hOLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHlIQUF5SCxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsMEJBQTBCLFlBQVksZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRDQUE0Qyx3REFBd0QsNkRBQTZELG9CQUFvQixHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLDhCQUE4Qiw4QkFBOEIsaURBQWlELHVCQUF1QixhQUFhLHNCQUFzQix3QkFBd0IsbUJBQW1CLHdCQUF3QixHQUFHLGdCQUFnQix1QkFBdUIsdUJBQXVCLHdCQUF3QixxREFBcUQsR0FBRyxVQUFVLG9CQUFvQixnQkFBZ0IsNkJBQTZCLEdBQUcsaUJBQWlCLG1CQUFtQix3QkFBd0IsOEJBQThCLG9CQUFvQixzQkFBc0IsbUJBQW1CLGdDQUFnQyxHQUFHLHVCQUF1QixxQ0FBcUMsaUNBQWlDLG9CQUFvQixHQUFHLHdCQUF3Qiw2QkFBNkIsR0FBRyx3QkFBd0IscUNBQXFDLGlDQUFpQyxvQkFBb0IsR0FBRyxXQUFXLHNCQUFzQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwrQ0FBK0MsbUNBQW1DLCtCQUErQixnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLDhCQUE4Qiw4QkFBOEIscURBQXFELHdCQUF3Qix1QkFBdUIsbUJBQW1CLDhCQUE4QixtQkFBbUIsR0FBRyxzQkFBc0IsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQixrQkFBa0IsbUJBQW1CLHdCQUF3QixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUJBQXlCLDhCQUE4QixxREFBcUQsd0JBQXdCLHVCQUF1QixtQkFBbUIsbUJBQW1CLDhCQUE4QixvQkFBb0Isd0JBQXdCLGdDQUFnQyxHQUFHLHVCQUF1Qix1QkFBdUIsd0JBQXdCLEdBQUcsMkJBQTJCLG1CQUFtQixrQkFBa0IsR0FBRyxlQUFlLG1CQUFtQixHQUFHLFdBQVcsb0JBQW9CLG1FQUFtRSxnRUFBZ0UsZ0JBQWdCLHFEQUFxRCxpQkFBaUIsc0JBQXNCLHlCQUF5QixHQUFHLGVBQWUsOEJBQThCLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIseUJBQXlCLG9CQUFvQixHQUFHLGlCQUFpQiw0QkFBNEIsR0FBRyxzQkFBc0Isd0JBQXdCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsR0FBRyw0QkFBNEIseUJBQXlCLEdBQUcscUJBQXFCO0FBQ3p2SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2pNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYm9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw0Q0FBSzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsaURBQUs7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7O0FDbENGO0FBQ21COztBQUV4QztBQUNBOztBQUVBOztBQUVBLHVEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjRDO0FBQ0o7QUFDQTtBQUNBO0FBQ0o7QUFDYztBQUNIO0FBQ0o7QUFDRDtBQUNSO0FBQ1k7QUFDSjtBQUNBO0FBQ0Y7O0FBRXJEO0FBQ0E7QUFDQSxlQUFlLHNEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLG9EQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsb0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLGtEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUseURBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsa0RBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSwyREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUscURBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxpREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHdEQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHNEQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsc0RBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxxREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySlM7QUFDTTtBQUNOOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBUTtBQUNaOztBQUVBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NoaWNrZW4zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJpY29sYWdlK0dyb3Rlc3F1ZTpvcHN6LHdnaHRAMTAuLjQ4LDIwMDsxMC4uNDgsMzAwOzEwLi40OCw0MDA7MTAuLjQ4LDUwMDsxMC4uNDgsNjAwOzEwLi40OCw3MDA7MTAuLjQ4LDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcikgcmVwZWF0KDEsIDdmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2hlYWRlcidcbiAgICAgICAgJ21haW4nO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyLjlyZW07XG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcbn1cblxuLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLm5hdi1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbn1cblxuLm5hdi1idXR0b246aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweDtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcbiAgICBvcGFjaXR5OiAxMDAlO1xufVxuXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xuICAgIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5tYWluIHtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaG9tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xuICAgIGZvbnQtZmFtaWx5OiAnQnJpY29sYWdlIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDI4M3B4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQnJpY29sYWdlIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMyU7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmltYWdlLWNvbnRhaW5lcjEge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWF4LWhlaWdodDogMzQzcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIxIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudSBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjMwcHgsIDFmcikpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM0M3B4LCAxZnIpKTtcbiAgICBnYXA6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAzcmVtIDByZW07XG59XG5cbi5tZW51IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tZW51IGRpdiBwIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tZW51IGRpdiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51IGRpdiAucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5tZW51IGRpdiAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGlEQUFpRDtJQUNqRDs7Y0FFVTtJQUNWLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbURBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCx5REFBeUQ7SUFDekQsU0FBUztJQUNULDhDQUE4QztJQUM5QyxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ccmljb2xhZ2UrR3JvdGVzcXVlOm9wc3osd2dodEAxMC4uNDgsMjAwOzEwLi40OCwzMDA7MTAuLjQ4LDQwMDsxMC4uNDgsNTAwOzEwLi40OCw2MDA7MTAuLjQ4LDcwMDsxMC4uNDgsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxZnIpIHJlcGVhdCgxLCA3ZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2hlYWRlcidcXG4gICAgICAgICdtYWluJztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiBjaG9jb2xhdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvY2hpY2tlbjMuanBnJyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcbiAgICBmb250LWZhbWlseTogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LWhlaWdodDogMjgzcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmljb2xhZ2UgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIxIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LWhlaWdodDogMzQzcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIxIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51IGltZyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMzBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM0M3B4LCAxZnIpKTtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0JyaWNvbGFnZSBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDNyZW0gMHJlbTtcXG59XFxuXFxuLm1lbnUgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWVudSBkaXYgcCB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm1lbnUgZGl2IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudSBkaXYgLnByaWNlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm1lbnUgZGl2IC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZXMvbWFwLmpwZydcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcjEnKTtcblxuICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFwSW1hZ2Uuc3JjID0gSW1hZ2U7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnVGVsZXBob25lOiArNDQgMTIzNDU2Nzg5MCcpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnRW1haWw6IGRhdmlkb3NjaGlja2VuQGdtYWlsLmNvbScpKTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBJbWFnZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0xvY2F0aW9uOiBYIG1hcmtzIHRoZSBzcG90JykpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Rcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZXMvY2hpY2tlbjIuanBnJ1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJylcblxuICAgIGNvbnN0IGNoaWNrZW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5JbWFnZS5zcmMgPSBJbWFnZTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiU2ltcGx5IGRlbGljaW91cyBjaGlja2VuIHNpbmNlIDIwMjMuXCIpKTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuSW1hZ2UpXG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCIxMzAgbG9jYXRpb25zIHdvcmxkd2lkZSFcIikpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiT3JkZXIgb25saW5lIG9yIHZpc2l0IHVzIGluIHN0b3JlXCIpKTtcblxuICAgIHJldHVybiBob21lXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4uc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlLmpzJ1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbmNyZWF0ZVdlYnNpdGUoKTsiLCJpbXBvcnQgdGhlQ2xhc3NpY0J1cmdlciBmcm9tICcuL2ltYWdlcy9jbGFzc2ljYnVyZ2VyLmpwZydcbmltcG9ydCB0aGVTcGljeUJ1cmdlciBmcm9tICcuL2ltYWdlcy9zcGljeWJ1cmdlci5qcGcnXG5pbXBvcnQgdGhlVmVnYW5CdXJnZXIgZnJvbSAnLi9pbWFnZXMvdmVnYW5idXJnZXIuanBnJ1xuaW1wb3J0IHRoZUNsYXNzaWNXcmFwIGZyb20gJy4vaW1hZ2VzL2NsYXNzaWN3cmFwLnBuZydcbmltcG9ydCB0aGVTcGljeVdyYXAgZnJvbSAnLi9pbWFnZXMvc3BpY3l3cmFwLnBuZydcbmltcG9ydCB0aGVMYXJnZUNsYXNzaWNXcmFwIGZyb20gJy4vaW1hZ2VzL2xhcmdlY2xhc3NpY3dyYXAucG5nJ1xuaW1wb3J0IHRoZUNsYXNzaWNCaXRlIGZyb20gJy4vaW1hZ2VzL2NsYXNzaWNjaGlja2VuYml0ZS5qcGcnXG5pbXBvcnQgdGhlU3BpY3lCaXRlIGZyb20gJy4vaW1hZ2VzL3NwaWN5Y2hpY2tlbmJpdGUuanBnJ1xuaW1wb3J0IHRoZUNsYXNzaWNXaW5ncyBmcm9tICcuL2ltYWdlcy9jbGFzc2ljd2luZ3MucG5nJ1xuaW1wb3J0IHRoZUhvdFdpbmdzIGZyb20gJy4vaW1hZ2VzL2hvdHdpbmdzLnBuZydcbmltcG9ydCB0aGVDbGFzc2ljVGVuZGVycyBmcm9tICcuL2ltYWdlcy9jbGFzc2ljdGVuZGVycy5qcGcnXG5pbXBvcnQgdGhlU3BpY3lUZW5kZXJzIGZyb20gJy4vaW1hZ2VzL3NwaWN5dGVuZGVycy5qcGcnXG5pbXBvcnQgdGhlQ2xhc3NpY0ZyaWVzIGZyb20gJy4vaW1hZ2VzL2NsYXNzaWNmcmllcy5qcGcnXG5pbXBvcnQgdGhlQ2hlZXNlRnJpZXMgZnJvbSAnLi9pbWFnZXMvY2hlZXNlZnJpZXMuanBnJ1xuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgICBpbWFnZTogdGhlQ2xhc3NpY0J1cmdlcixcbiAgICAgICAgbmFtZTogJ0NsYXNzaWMgQnVyZ2VyJyxcbiAgICAgICAgcHJpY2U6ICfCozUuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NoaWNrZW4gZmlsbGV0LCBsZXR0dWNlLCBwaWNrbGVzLCBtYXlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogdGhlU3BpY3lCdXJnZXIsXG4gICAgICAgIG5hbWU6ICdTcGljeSBCdXJnZXInLFxuICAgICAgICBwcmljZTogJ8KjNS45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3BpY3kgY2hpY2tlbiBmaWxsZXQsIGxldHR1Y2UsIHNwaWN5IHNhdWNlLCBzcGljeSBzbGF3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogdGhlVmVnYW5CdXJnZXIsXG4gICAgICAgIG5hbWU6ICdWZWdhbiBCdXJnZXInLFxuICAgICAgICBwcmljZTogJ8KjNi45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVmVnYW4gZmlsbGV0LCBsZXR0dWNlLCBzcGljeSBzYXVjZSwgcGluayBwaWNrbGVkIG9uaW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZUNsYXNzaWNXcmFwLFxuICAgICAgICBuYW1lOiAnQ2xhc3NpYyBXcmFwJyxcbiAgICAgICAgcHJpY2U6ICfCozMuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RlbmRlciwgbGV0dHVjZSwgcGlja2xlcywgbWF5bydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZVNwaWN5V3JhcCxcbiAgICAgICAgbmFtZTogJ1NwaWN5IFdyYXAnLFxuICAgICAgICBwcmljZTogJ8KjMy45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3BpY3kgdGVuZGVyLCBsZXR0dWNlLCBzcGljeSBzYXVjZSwgc3BpY3kgc2xhdydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZUxhcmdlQ2xhc3NpY1dyYXAsXG4gICAgICAgIG5hbWU6ICdMYXJnZSBDbGFzc2ljIFdyYXAnLFxuICAgICAgICBwcmljZTogJ8KjNC45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVHdvIHRlbmRlcnMsIGxldHR1Y2UsIHBpY2tsZXMsIG1heW8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiB0aGVTcGljeVdyYXAsXG4gICAgICAgIG5hbWU6ICdMYXJnZSBTcGljeSBXcmFwJyxcbiAgICAgICAgcHJpY2U6ICfCozQuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1R3byBzcGljeSB0ZW5kZXJzLCBsZXR0dWNlLCBzcGljeSBzYXVjZSwgc3BpY3kgc2xhdydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZUNsYXNzaWNCaXRlLFxuICAgICAgICBuYW1lOiAnQ2xhc3NpYyBDaGlja2VuIEJpdGUnLFxuICAgICAgICBwcmljZTogJ8KjMi45OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVuZGVyLCBwaWNrbGVzLCBtYXlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogdGhlU3BpY3lCaXRlLFxuICAgICAgICBuYW1lOiAnU3BpY3kgQ2hpY2tlbiBCaXRlJyxcbiAgICAgICAgcHJpY2U6ICfCozIuOTknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NwaWN5IHRlbmRlciwgc3BpY3kgc2F1Y2UsIHNwaWN5IHNsYXcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiB0aGVDbGFzc2ljV2luZ3MsXG4gICAgICAgIG5hbWU6ICdDbGFzc2ljIFdpbmdzJyxcbiAgICAgICAgcHJpY2U6ICfCozMuNDknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZUhvdFdpbmdzLFxuICAgICAgICBuYW1lOiAnSG90IFdpbmdzJyxcbiAgICAgICAgcHJpY2U6ICfCozMuNDknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZUNsYXNzaWNUZW5kZXJzLFxuICAgICAgICBuYW1lOiAnQ2xhc3NpYyBUZW5kZXJzJyxcbiAgICAgICAgcHJpY2U6ICfCozMuNDknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHRoZVNwaWN5VGVuZGVycyxcbiAgICAgICAgbmFtZTogJ1NwaWN5IFRlbmRlcnMnLFxuICAgICAgICBwcmljZTogJ8KjMy40OScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogdGhlQ2xhc3NpY0ZyaWVzLFxuICAgICAgICBuYW1lOiAnQ2xhc3NpYyBGcmllcycsXG4gICAgICAgIHByaWNlOiAnwqMxLjQ5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiB0aGVDaGVlc2VGcmllcyxcbiAgICAgICAgbmFtZTogJ0NoZWVzZSBGcmllcycsXG4gICAgICAgIHByaWNlOiAnwqMxLjk5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgfSxcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGl0ZW1EYXRhLmltYWdlO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoaXRlbURhdGEubmFtZSwgJ3RpdGxlJykpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChpdGVtRGF0YS5wcmljZSwgJ3ByaWNlJykpO1xuICAgIGlmIChpdGVtRGF0YS5kZXNjcmlwdGlvbikge1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoaXRlbURhdGEuZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW1EYXRhID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtRGF0YSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnN0eWxlLmFsaWduSXRlbXMgPSAnZmxleC1zdGFydCc7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAgICAgbG9hZEhvbWUoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51KClcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgICAgICBsb2FkQ29udGFjdCgpXG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiRGF2aWRvJ3MgQ2hpY2tlblwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSlcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25cIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWJzaXRlKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uXCIpKTtcbiAgICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXZWJzaXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==