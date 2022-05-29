"use strict";
(self["webpackChunkanimal_crossinf"] = self["webpackChunkanimal_crossinf"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/map.png */ "./src/assets/map.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n  z-index: 1000;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.caillou {\r\n  background-color: grey;\r\n}\r\n\r\n#caillou {\r\n  position: absolute;\r\n  background-color: grey;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n\r\n#fish {\r\n  position: absolute;\r\n  background-color: rgb(0, 0, 255);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n  color: black\r\n}\r\n\r\n#life-receptacle {\r\n  position: absolute;\r\n  width: 128px;\r\n  height: 10px;\r\n  background-color: black;\r\n  z-index: 10;\r\n}\r\n\r\n#life {\r\n  position: absolute;\r\n  width: 128px;\r\n  height: 10px;\r\n  background-color: green;\r\n  z-index: 11;\r\n  transition: width linear 0.2s;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,+CAA+C;AACjD;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB;AACF;;AAEA;EACE,0BAA0B;EAC1B,yDAAuC;EACvC,qBAAqB;EACrB,kCAAkC;EAClC,mCAAmC;EACnC,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;AAC7B;;;AAGA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC;AACF;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,6BAA6B;AAC/B","sourcesContent":[":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(./assets/map.png);\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n  z-index: 1000;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.caillou {\r\n  background-color: grey;\r\n}\r\n\r\n#caillou {\r\n  position: absolute;\r\n  background-color: grey;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n\r\n#fish {\r\n  position: absolute;\r\n  background-color: rgb(0, 0, 255);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n  color: black\r\n}\r\n\r\n#life-receptacle {\r\n  position: absolute;\r\n  width: 128px;\r\n  height: 10px;\r\n  background-color: black;\r\n  z-index: 10;\r\n}\r\n\r\n#life {\r\n  position: absolute;\r\n  width: 128px;\r\n  height: 10px;\r\n  background-color: green;\r\n  z-index: 11;\r\n  transition: width linear 0.2s;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/character.ts":
/*!**************************!*\
  !*** ./src/character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Character": () => (/* binding */ Character)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

var Character = /** @class */ (function () {
    function Character() {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        if (parameters.length === 1) {
            this.type = parameters[0];
            this.top = 64 * 4;
            this.left = 64 * 8;
        }
        if (parameters.length === 3) {
            this.type = parameters[0];
            this.top = parameters[1];
            this.left = parameters[2];
        }
        this.size = 64 * 2 - 6;
        this.create();
        this.update();
    }
    Character.prototype.create = function () {
        var element = document.createElement('div');
        element.id = this.type;
        ___WEBPACK_IMPORTED_MODULE_0__.mapHTML.appendChild(element);
    };
    Character.prototype.update = function () {
        var element = document.getElementById(this.type);
        element.style.transform = "translate3d( ".concat(this.left, "px, ").concat(this.top, "px, 0 )");
        element.style.width = "".concat(this.size, "px");
        element.style.height = "".concat(this.size, "px");
    };
    Character.prototype.colide = function (top, left) {
        var _this = this;
        var isColision = false;
        ___WEBPACK_IMPORTED_MODULE_0__.colisions.forEach(function (colision) {
            var _a, _b;
            if (isColision === true)
                return;
            var width = (_a = colision === null || colision === void 0 ? void 0 : colision.width) !== null && _a !== void 0 ? _a : colision === null || colision === void 0 ? void 0 : colision.size;
            var height = (_b = colision === null || colision === void 0 ? void 0 : colision.height) !== null && _b !== void 0 ? _b : colision === null || colision === void 0 ? void 0 : colision.size;
            isColision = (0,___WEBPACK_IMPORTED_MODULE_0__.isColliding)(top, left, _this.size, _this.size, colision.top, colision.left, width, height);
        });
        return isColision;
    };
    // getter & setter
    Character.prototype.getSize = function () { return this.size; };
    Character.prototype.getTop = function () { return this.top; };
    Character.prototype.setTop = function (top) { this.top = top; };
    Character.prototype.getLeft = function () { return this.left; };
    Character.prototype.setLeft = function (left) { this.left = left; };
    return Character;
}());



/***/ }),

/***/ "./src/chrono.ts":
/*!***********************!*\
  !*** ./src/chrono.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chrono": () => (/* binding */ Chrono)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

var Chrono = /** @class */ (function () {
    function Chrono() {
        this.hour = 5;
        this.minute = 50;
        this.create();
        this.htmlElement = document.getElementById("chrono");
        this.update();
        this.start();
    }
    Chrono.prototype.create = function () {
        var element = document.createElement('div');
        element.id = "chrono";
        element.classList.add('chrono');
        ___WEBPACK_IMPORTED_MODULE_0__.cameraHTML.appendChild(element);
    };
    Chrono.prototype.update = function () {
        this.htmlElement.innerText = this.toString();
    };
    Chrono.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.minute === 50) {
                if (_this.hour === 23) {
                    _this.hour = 0;
                }
                else {
                    _this.hour++;
                }
                _this.minute = 0;
            }
            else {
                _this.minute += 10;
            }
            _this.update();
            (0,___WEBPACK_IMPORTED_MODULE_0__.routine)(_this.toString());
        }, 2000);
    };
    Chrono.prototype.stop = function () {
        clearInterval(this.interval);
        this.interval = null;
    };
    Chrono.prototype.isRunning = function () { return this.interval !== null; };
    Chrono.prototype.toString = function () {
        var hour = "".concat(this.hour < 10 ? '0' : '').concat(this.hour);
        var minute = "".concat(this.minute < 10 ? '0' : '').concat(this.minute);
        return "".concat(hour, ":").concat(minute);
    };
    return Chrono;
}());



/***/ }),

/***/ "./src/dialog.ts":
/*!***********************!*\
  !*** ./src/dialog.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

var Dialog = /** @class */ (function () {
    function Dialog() {
        this.create();
        this.htmlElement = document.getElementById("dialog");
        this.htmlElement.style.display = 'none';
        this.choice = null;
    }
    Dialog.prototype.create = function () {
        var element = document.createElement("div");
        element.id = "dialog";
        element.classList.add('dialog');
        ___WEBPACK_IMPORTED_MODULE_0__.cameraHTML.appendChild(element);
    };
    Dialog.prototype.update = function (text) {
        this.htmlElement.innerHTML = text;
        this.choice = null;
    };
    Dialog.prototype.addChoice = function () {
        this.htmlElement.innerHTML += "<div id='oui'>- Oui</div>";
        this.htmlElement.innerHTML += "<div id='non'>Non</div>";
        this.choice = 'yes';
    };
    Dialog.prototype.updateChoice = function (key) {
        var yes = document.getElementById('oui');
        var no = document.getElementById('non');
        if (key === 'z') {
            yes.innerHTML = '- Oui';
            no.innerHTML = 'Non';
            this.choice = 'yes';
        }
        else {
            yes.innerHTML = 'Oui';
            no.innerHTML = '- Non';
            this.choice = 'no';
        }
    };
    Dialog.prototype.getChoice = function () { return this.choice; };
    Dialog.prototype.haveChoice = function () { return this.choice !== null; };
    Dialog.prototype.show = function () {
        this.htmlElement.style.display = 'block';
    };
    Dialog.prototype.hide = function () {
        this.htmlElement.style.display = 'none';
        this.htmlElement.innerHTML = "";
    };
    Dialog.prototype.isVisible = function () {
        return this.htmlElement.style.display === 'block';
    };
    return Dialog;
}());



/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Entity = /** @class */ (function () {
    function Entity() {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        this.id = parameters[0];
        this.top = parameters[1];
        this.left = parameters[2];
        if (parameters.length <= 3) {
            this.width = ___WEBPACK_IMPORTED_MODULE_0__.box - 6;
            this.height = ___WEBPACK_IMPORTED_MODULE_0__.box - 6;
        }
        else {
            this.width = parameters[3];
            this.height = parameters[4];
        }
        if (parameters.length <= 5) {
            this.hitTop = 0;
            this.hitLeft = 0;
            this.hitWidth = this.width;
            this.hitHeight = this.height;
        }
        else {
            this.hitTop = parameters[5];
            this.hitLeft = parameters[6];
            this.hitWidth = parameters[7];
            this.hitHeight = parameters[8];
        }
        this.create();
        this.update();
    }
    // Create HTML
    Entity.prototype.create = function () {
        var element = document.createElement('div');
        element.id = this.id;
        ___WEBPACK_IMPORTED_MODULE_0__.mapHTML.appendChild(element);
    };
    // UPDATE HTML
    Entity.prototype.update = function () {
        var element = document.getElementById(this.id);
        element.style.transform = "translate3d( ".concat(this.left, "px, ").concat(this.top, "px, 0 )");
        element.style.width = "".concat(this.width, "px");
        element.style.height = "".concat(this.height, "px");
    };
    Entity.prototype.interact = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    Entity.prototype.colide = function (top, left, width, height) {
        return (0,___WEBPACK_IMPORTED_MODULE_0__.isColliding)(this.top + this.hitTop, this.left + this.hitLeft, this.hitWidth, this.hitHeight, top, left, width, height);
    };
    Entity.prototype.remove = function () {
        ___WEBPACK_IMPORTED_MODULE_0__.mapHTML.removeChild(document.getElementById(this.id));
    };
    // getter & setter
    Entity.prototype.getWidth = function () { return this.width; };
    Entity.prototype.getHeight = function () { return this.height; };
    Entity.prototype.getTop = function () { return this.top; };
    Entity.prototype.setTop = function (top) { this.top = top; };
    Entity.prototype.getLeft = function () { return this.left; };
    Entity.prototype.setLeft = function (left) { this.left = left; };
    return Entity;
}());



/***/ }),

/***/ "./src/fish.ts":
/*!*********************!*\
  !*** ./src/fish.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fish": () => (/* binding */ Fish)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(life, top, left, hitTop, hitLeft) {
        var _this = _super.call(this, 'fish', top, left, _index__WEBPACK_IMPORTED_MODULE_1__.box - 6, _index__WEBPACK_IMPORTED_MODULE_1__.box - 6, hitTop, hitLeft, _index__WEBPACK_IMPORTED_MODULE_1__.box, _index__WEBPACK_IMPORTED_MODULE_1__.box) || this;
        _this.isCatching = false;
        _this.MAX_LIFE = life;
        _this.life = life;
        return _this;
    }
    Fish.prototype.interact = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isCatching) return [3 /*break*/, 1];
                        this.life -= 10;
                        this.updateLife();
                        if (this.life <= 0) {
                            this.stopCatch();
                            _index__WEBPACK_IMPORTED_MODULE_1__.inventory.addObject('poisson');
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.beginCatch()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    Fish.prototype.beginCatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanInteract(false);
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanMove(false);
                        this.isCatching = true;
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.show();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.update("Le poisson a mordu \u00E0 l'hame\u00E7on !");
                        return [4 /*yield*/, (0,_index__WEBPACK_IMPORTED_MODULE_1__.sleep)(1000)];
                    case 1:
                        _a.sent();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.hide();
                        this.showLife();
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanInteract(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Fish.prototype.stopCatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanInteract(false);
                        this.remove();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.show();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.update("Vous avez attap\u00E9 un poisson random !!! :)");
                        return [4 /*yield*/, (0,_index__WEBPACK_IMPORTED_MODULE_1__.sleep)(2000)];
                    case 1:
                        _a.sent();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.hide();
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanInteract(true);
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanMove(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Fish.prototype.create = function () {
        _super.prototype.create.call(this);
        var element1 = document.createElement('div');
        element1.id = 'life-receptacle';
        element1.style.top = "".concat(this.getTop() - 30, "px");
        element1.style.left = "".concat(this.getLeft(), "px");
        element1.style.display = 'none';
        _index__WEBPACK_IMPORTED_MODULE_1__.mapHTML.appendChild(element1);
        var element2 = document.createElement('div');
        element2.id = 'life';
        element2.style.top = "".concat(this.getTop() - 30, "px");
        element2.style.left = "".concat(this.getLeft(), "px");
        element2.style.display = 'none';
        _index__WEBPACK_IMPORTED_MODULE_1__.mapHTML.appendChild(element2);
    };
    Fish.prototype.updateLife = function () {
        var element = document.getElementById('life');
        if (this.life < 100) {
            element.style.backgroundColor = 'yellow';
            element.style.width = "".concat(128 * this.life / this.MAX_LIFE, "px");
        }
        if (this.life === 0) {
            element.style.backgroundColor = 'red';
        }
    };
    Fish.prototype.showLife = function () {
        document.getElementById('life-receptacle').style.display = 'block';
        document.getElementById('life').style.display = 'block';
    };
    Fish.prototype.remove = function () {
        _super.prototype.remove.call(this);
        _index__WEBPACK_IMPORTED_MODULE_1__.mapHTML.removeChild(document.getElementById('life-receptacle'));
        _index__WEBPACK_IMPORTED_MODULE_1__.mapHTML.removeChild(document.getElementById('life'));
    };
    return Fish;
}(_entity__WEBPACK_IMPORTED_MODULE_0__.Entity));



/***/ }),

/***/ "./src/hero.ts":
/*!*********************!*\
  !*** ./src/hero.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ "./src/character.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this, 'hero') || this;
        _this.canMove = true;
        _this.canInteract = true;
        return _this;
    }
    Hero.prototype.setCanMove = function (canMove) {
        this.canMove = canMove;
    };
    Hero.prototype.setCanInteract = function (canInteract) {
        this.canInteract = canInteract;
    };
    Hero.prototype.getCanMove = function () {
        return this.canMove;
    };
    Hero.prototype.getCanInteract = function () {
        return this.canInteract;
    };
    Hero.prototype.move = function (key) {
        var step = 64 * 2;
        var top = _super.prototype.getTop.call(this);
        var left = _super.prototype.getLeft.call(this);
        switch (key) {
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.UP:
                top -= step;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.LEFT:
                left -= step;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.RIGHT:
                left += step;
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.DOWN:
                top += step;
                break;
        }
        if (!this.colide(top, left)) {
            this.setTop(top);
            this.setLeft(left);
            var map = document.getElementById('map');
            map.style.transform = "translate3d( ".concat(-left + (64 * 8), "px, ").concat(-top + (64 * 4), "px, 0 )");
        }
        ;
        _super.prototype.update.call(this);
    };
    return Hero;
}(_character__WEBPACK_IMPORTED_MODULE_1__.Character));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "Key": () => (/* binding */ Key),
/* harmony export */   "box": () => (/* binding */ box),
/* harmony export */   "cameraHTML": () => (/* binding */ cameraHTML),
/* harmony export */   "colisions": () => (/* binding */ colisions),
/* harmony export */   "dialog": () => (/* binding */ dialog),
/* harmony export */   "hero": () => (/* binding */ hero),
/* harmony export */   "interact": () => (/* binding */ interact),
/* harmony export */   "inventory": () => (/* binding */ inventory),
/* harmony export */   "isColliding": () => (/* binding */ isColliding),
/* harmony export */   "mapHTML": () => (/* binding */ mapHTML),
/* harmony export */   "routine": () => (/* binding */ routine),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "wait": () => (/* binding */ wait)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero.ts");
/* harmony import */ var _pnj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pnj */ "./src/pnj.ts");
/* harmony import */ var _chrono__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrono */ "./src/chrono.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dialog.ts");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory */ "./src/inventory.ts");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource */ "./src/resource.ts");
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fish */ "./src/fish.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Game







// routine
var nookRoutine = __webpack_require__(/*! ./characters/nook/first-routine.json */ "./src/characters/nook/first-routine.json");
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
var Direction;
(function (Direction) {
    Direction["UP"] = "z";
    Direction["LEFT"] = "q";
    Direction["RIGHT"] = "d";
    Direction["DOWN"] = "s";
})(Direction || (Direction = {}));
var Key;
(function (Key) {
    // actions
    Key["PAUSE"] = "p";
    Key["INTERACT"] = "e";
    Key["INVENTORY"] = "i";
    // direction
    Key["UP"] = "z";
    Key["LEFT"] = "q";
    Key["RIGHT"] = "d";
    Key["DOWN"] = "s";
})(Key || (Key = {}));
var cameraHTML = null;
var mapHTML = null;
var chrono = null;
var dialog = null;
var inventory = null;
var hero = null;
var nook = null;
var pnjs = [];
var ressources = [];
var entities = [];
var colisions = [
    // mur de gauche
    {
        top: 0,
        left: 0,
        width: 64 * 2 - 6,
        height: 64 * 2 * 10
    },
    // mur du haut
    {
        top: 0,
        left: 64 * 2,
        width: 64 * 2 * 14 - 6,
        height: 64 * 2
    },
    // mur de droite
    {
        top: 0,
        left: 64 * 2 * 15,
        width: 64 * 2,
        height: 64 * 2 * 10
    },
    // mur du bas
    {
        top: 64 * 2 * 9,
        left: 64 * 2,
        width: 64 * 2 * 14 - 6,
        height: 64 * 2
    },
];
var dialogOpen = null;
var box = 64 * 2;
var interact = function () {
    var isAction = false;
    pnjs.forEach(function (pnj) {
        var collide = isColliding(hero.getTop(), hero.getLeft(), hero.getSize(), hero.getSize(), pnj.getTop() - (64 * 2), pnj.getLeft() - (64 * 2), pnj.getSize() + (64 * 2 * 2), pnj.getSize() + (64 * 2 * 2));
        if (collide && !!pnj.getAction()) {
            pnj.interact(dialog);
            dialogOpen = pnj;
            chrono.stop();
            isAction = true;
        }
    });
    if (isAction)
        return;
    ressources.forEach(function (ressource) {
        var collide = isColliding(hero.getTop(), hero.getLeft(), hero.getSize(), hero.getSize(), ressource.getTop(), ressource.getLeft(), ressource.getSize(), ressource.getSize());
        if (collide) {
            console.log("Vous ramassez un " + ressource.getType());
            inventory.addObject(ressource.getType());
            ressource.remove(dialog);
        }
    });
    var toRemove = -1;
    entities.forEach(function (entity, index) { return __awaiter(void 0, void 0, void 0, function () {
        var collide, remove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collide = entity.colide(hero.getTop(), hero.getLeft(), hero.getSize(), hero.getSize());
                    if (!collide) return [3 /*break*/, 2];
                    return [4 /*yield*/, entity.interact()];
                case 1:
                    remove = _a.sent();
                    if (remove)
                        toRemove = index;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
    if (toRemove >= 0) {
        entities = entities.filter(function (_, i) { return i !== toRemove; });
    }
};
var routine = function (time) {
    pnjs.forEach(function (pnj) {
        pnj.doRoutine(time);
    });
};
var isColliding = function (top1, left1, width1, height1, top2, left2, width2, height2) {
    return (left1 + width1) > left2 && left1 < (left2 + width2)
        && (top1 + height1) > top2 && top1 < (top2 + height2);
};
var initHTML = function () {
    var camera = document.createElement('div');
    camera.id = 'camera';
    camera.classList.add('camera');
    var map = document.createElement('div');
    map.id = 'map';
    map.classList.add('map');
    camera.appendChild(map);
    document.body.appendChild(camera);
};
var onLoad = function () {
    initHTML();
    cameraHTML = document.getElementById('camera');
    mapHTML = document.getElementById('map');
    chrono = new _chrono__WEBPACK_IMPORTED_MODULE_3__.Chrono();
    dialog = new _dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog();
    inventory = new _inventory__WEBPACK_IMPORTED_MODULE_5__.Inventory();
    hero = new _hero__WEBPACK_IMPORTED_MODULE_1__.Hero();
    nook = new _pnj__WEBPACK_IMPORTED_MODULE_2__.PNJ('Tom Nook', 64 * 2 * 3, 64 * 2 * 2, nookRoutine);
    pnjs.push(nook);
    ressources.push(new _resource__WEBPACK_IMPORTED_MODULE_6__.Resource('caillou', (64 * 2 * 7 + 30), (64 * 2 * 4 + 30)));
    colisions.push(hero);
    colisions.push(nook);
    entities.push(new _fish__WEBPACK_IMPORTED_MODULE_7__.Fish(100, (box * 4), (box * 9), 0, -box));
};
var wait = false;
var keyListener = function (event) {
    if (wait)
        return;
    wait = true;
    setTimeout(function () { wait = false; }, 150);
    if (hero.getCanInteract() && event.key === Key.PAUSE) {
        if (chrono.isRunning()) {
            chrono.stop();
        }
        else {
            chrono.start();
        }
        return;
    }
    if (hero.getCanInteract() && event.key === Key.INTERACT) {
        if (!dialog.isVisible() && chrono.isRunning()) {
            interact();
        }
        else if (dialogOpen !== null) {
            dialogOpen.interact(dialog);
            if (!dialog.isVisible()) {
                dialogOpen = null;
                chrono.start();
            }
        }
        else if (dialog.isVisible()) {
            dialog.hide();
        }
        return;
    }
    if (chrono.isRunning() && event.key === Key.INVENTORY) {
        inventory.isVisible() ? inventory.hide() : inventory.show();
        return;
    }
    if (chrono.isRunning() && inventory.isVisible() && Object.values(Direction).includes(event.key)) {
        inventory.moveCursor(event.key);
        return;
    }
    if (hero.getCanMove() && chrono.isRunning() && !dialog.isVisible() && Object.values(Direction).includes(event.key)) {
        hero.move(event.key);
        return;
    }
    if (!chrono.isRunning() && dialog.haveChoice() && ['z', 's'].includes(event.key)) {
        dialog.updateChoice(event.key);
        return;
    }
};
window.addEventListener('load', onLoad);
window.addEventListener('keypress', keyListener);


/***/ }),

/***/ "./src/inventory.ts":
/*!**************************!*\
  !*** ./src/inventory.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inventory": () => (/* binding */ Inventory)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

var Inventory = /** @class */ (function () {
    function Inventory() {
        this.height = 4;
        this.width = 10;
        this.tab = [];
        this.selected = { x: 0, y: 0 };
        for (var i = 0; i < this.height; i++) {
            var line = [];
            for (var j = 0; j < this.width; j++) {
                line.push(null);
            }
            this.tab.push(line);
        }
        this.create();
        this.htmlElement = document.getElementById('inventory');
        this.hide();
    }
    Inventory.prototype.create = function () {
        var element = document.createElement('div');
        this.tab.forEach(function (line, lineIdx) {
            var lineHTML = document.createElement('tr');
            lineHTML.id = lineIdx.toString();
            line.forEach(function (_, itemIdx) {
                var itemHTML = document.createElement('td');
                itemHTML.id = "".concat(lineIdx, "-").concat(itemIdx);
                lineHTML.appendChild(itemHTML);
            });
            element.appendChild(lineHTML);
        });
        element.id = 'inventory';
        ___WEBPACK_IMPORTED_MODULE_0__.cameraHTML.appendChild(element);
    };
    Inventory.prototype.update = function (x, y) {
        var cell = document.getElementById("".concat(y, "-").concat(x));
        cell.classList.add(this.tab[y][x]);
        cell.innerHTML = this.tab[y][x];
    };
    Inventory.prototype.show = function () {
        this.htmlElement.style.display = 'block';
    };
    Inventory.prototype.hide = function () {
        this.htmlElement.style.display = 'none';
        this.removeSelected();
        this.selected = { x: 0, y: 0 };
        this.addSelected();
    };
    Inventory.prototype.isVisible = function () {
        return this.htmlElement.style.display === 'block';
    };
    Inventory.prototype.addObject = function (object) {
        var isUpdate = false;
        var position = { x: 0, y: 0, item: null };
        this.tab.forEach(function (line, idxLine) {
            if (isUpdate)
                return;
            line.forEach(function (item, idxItem) {
                if (isUpdate)
                    return;
                if (item === null) {
                    position = { x: idxItem, y: idxLine, item: object };
                    isUpdate = true;
                }
            });
        });
        this.tab[position.y][position.x] = position.item;
        this.update(position.x, position.y);
    };
    Inventory.prototype.addSelected = function () {
        var _this = this;
        this.tab.forEach(function (line, idxLine) {
            line.forEach(function (_, idxItem) {
                if (_this.selected.x === idxItem && _this.selected.y === idxLine) {
                    var cell = document.getElementById("".concat(idxLine, "-").concat(idxItem));
                    cell.classList.add('selected');
                }
            });
        });
    };
    Inventory.prototype.removeSelected = function () {
        var _this = this;
        this.tab.forEach(function (line, idxLine) {
            line.forEach(function (_, idxItem) {
                if (_this.selected.x === idxItem && _this.selected.y === idxLine) {
                    var cell = document.getElementById("".concat(idxLine, "-").concat(idxItem));
                    cell.classList.remove('selected');
                }
            });
        });
    };
    Inventory.prototype.moveCursor = function (key) {
        this.removeSelected();
        switch (key) {
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.UP:
                if (this.selected.y > 0) {
                    this.selected.y -= 1;
                }
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.LEFT:
                if (this.selected.x > 0) {
                    this.selected.x -= 1;
                }
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.RIGHT:
                if (this.selected.x < this.width - 1) {
                    this.selected.x += 1;
                }
                break;
            case ___WEBPACK_IMPORTED_MODULE_0__.Direction.DOWN:
                if (this.selected.y < this.height - 1) {
                    this.selected.y += 1;
                }
                break;
        }
        this.addSelected();
    };
    return Inventory;
}());



/***/ }),

/***/ "./src/pnj.ts":
/*!********************!*\
  !*** ./src/pnj.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PNJ": () => (/* binding */ PNJ)
/* harmony export */ });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/character.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PNJ = /** @class */ (function (_super) {
    __extends(PNJ, _super);
    function PNJ(name, top, left, routine) {
        var _this = _super.call(this, 'pnj', top, left) || this;
        _this.name = name;
        _this.routine = routine;
        _this.currentDialog = 0;
        return _this;
    }
    PNJ.prototype.doRoutine = function (time) {
        if (Object.keys(this.routine).includes(time)) {
            this.currentDialog = 0;
            this.currentAction = this.routine[time];
            console.log(this.currentAction.text);
            if (this.currentAction.position) {
                this.move(this.currentAction.position.top, this.currentAction.position.left);
            }
        }
    };
    PNJ.prototype.interact = function (dialog) {
        var _a;
        if (dialog.isVisible()) {
            console.log(this.currentAction.dialog.length, this.currentDialog);
            if (this.currentAction.dialog.length > this.currentDialog) {
                if (dialog.haveChoice()) {
                    dialog.update(this.currentAction.dialog[this.currentDialog][dialog.getChoice()]);
                    this.currentDialog++;
                    return;
                }
                else {
                    dialog.update(this.currentAction.dialog[this.currentDialog].text);
                }
                if (((_a = this.currentAction.dialog[this.currentDialog]) === null || _a === void 0 ? void 0 : _a.choice) === true) {
                    dialog.addChoice();
                }
                else {
                    this.currentDialog++;
                }
            }
            else {
                dialog.hide();
                this.currentDialog = 0;
            }
        }
        else {
            dialog.update(this.currentAction.dialog[this.currentDialog].text);
            dialog.show();
            this.currentDialog++;
        }
    };
    PNJ.prototype.move = function (finalTop, finalLeft) {
        var _this = this;
        var steps = 64 * 2;
        var finTop = finalTop * 2 * 64;
        var finTLeft = finalLeft * 2 * 64;
        var walk = setInterval(function () {
            var top = _this.getTop();
            var left = _this.getLeft();
            if (top === finTop && left === finTLeft) {
                clearInterval(walk);
            }
            if (top < finTop && !_this.colide(top + steps, left)) {
                _super.prototype.setTop.call(_this, top + steps);
                _this.update();
                return;
            }
            if (top > finTop && !_this.colide(top - steps, left)) {
                _super.prototype.setTop.call(_this, top - steps);
                _this.update();
                return;
            }
            if (left < finTLeft && !_this.colide(top, left + steps)) {
                _super.prototype.setLeft.call(_this, left + steps);
                _this.update();
                return;
            }
            if (left > finTLeft && !_this.colide(top, left - steps)) {
                _super.prototype.setLeft.call(_this, left - steps);
                _this.update();
                return;
            }
        }, 200);
    };
    PNJ.prototype.getAction = function () { return this.currentAction; };
    return PNJ;
}(_character__WEBPACK_IMPORTED_MODULE_0__.Character));



/***/ }),

/***/ "./src/resource.ts":
/*!*************************!*\
  !*** ./src/resource.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resource": () => (/* binding */ Resource)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

var Resource = /** @class */ (function () {
    function Resource() {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        if (parameters.length === 1) {
            this.id = parameters[0];
            this.top = 64 * 4;
            this.left = 64 * 8;
        }
        if (parameters.length === 3) {
            this.id = parameters[0];
            this.top = parameters[1];
            this.left = parameters[2];
        }
        this.size = 64;
        this.create();
    }
    Resource.prototype.create = function () {
        var element = document.createElement('div');
        element.id = this.id;
        element.style.top = "".concat(this.top, "px");
        element.style.left = "".concat(this.left, "px");
        element.style.width = "".concat(this.size, "px");
        element.style.height = "".concat(this.size, "px");
        ___WEBPACK_IMPORTED_MODULE_0__.mapHTML.appendChild(element);
    };
    Resource.prototype.remove = function (dialog) {
        var element = document.getElementById(this.id);
        ___WEBPACK_IMPORTED_MODULE_0__.mapHTML.removeChild(element);
        dialog.show();
        dialog.update("Vous avez trouv\u00E9 un ".concat(this.id, " !"));
    };
    // getter & setter
    Resource.prototype.getType = function () { return this.id; };
    Resource.prototype.getSize = function () { return this.size; };
    Resource.prototype.getTop = function () { return this.top; };
    Resource.prototype.setTop = function (top) { this.top = top; };
    Resource.prototype.getLeft = function () { return this.left; };
    Resource.prototype.setLeft = function (left) { this.left = left; };
    return Resource;
}());



/***/ }),

/***/ "./src/assets/map.png":
/*!****************************!*\
  !*** ./src/assets/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "431e79aea2eca26968fa.png";

/***/ }),

/***/ "./src/characters/nook/first-routine.json":
/*!************************************************!*\
  !*** ./src/characters/nook/first-routine.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"06:00":{"text":"Se réveille","dialog":[{"text":"J\'ai besoin d\'un café..."}]},"06:10":{"text":"Se dirige vers la plage","position":{"top":7,"left":2},"dialog":[{"text":"café..."}]},"06:20":{"text":"Boit son café","dialog":[{"text":"café :)"}]},"06:50":{"text":"Se dirige vers la place","position":{"top":4,"left":2},"dialog":[{"text":"C\'est parti pour le boulot !"}]},"07:00":{"text":"Travaille","dialog":[{"text":"Salut villageois..."},{"choice":true,"text":"Tu as besoin de quelque chose ?","yes":"Moi aussi... tu me passes un café ? :)","no":"Ah ? Ok..."}]},"10:00":{"text":"Va récolter des fruits","dialog":[{"text":"Mmmh quel bonne pomme... j\'aimerai mangé une tarte au pomme..."}]},"10:30":{"text":"Travaille"},"13:00":{"text":"Commence à manger","dialog":[{"text":"Num num num"}]},"14:00":{"text":"Travaille"},"15:00":{"text":"Va récolter des fruits"},"15:30":{"text":"Travaille"},"17:00":{"text":"Va à la pèche"},"19:00":{"text":"Prépare le feu"},"20:00":{"text":"Commence à manger"},"20:30":{"text":"Lit un livre"},"23:00":{"text":"S\'endors"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBRyxJQUFJLENBQUMsSUFBSSxPQUFJLENBQUM7UUFDeEMsa0RBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELGtEQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUNBQXVCLElBQUksQ0FBQyxFQUFFLE9BQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLDBCQUFPLEdBQVAsY0FBb0IsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDcEMsMEJBQU8sR0FBUCxjQUFvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXZDLHlCQUFNLEdBQU4sY0FBbUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQyx5QkFBTSxHQUFOLFVBQU8sR0FBVyxJQUFVLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU3QywwQkFBTyxHQUFQLGNBQW9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkMsMEJBQU8sR0FBUCxVQUFRLElBQVksSUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbkQsZUFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvY2hhcmFjdGVyLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9jaHJvbm8udHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2RpYWxvZy50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvZW50aXR5LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9maXNoLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9oZXJvLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvaW52ZW50b3J5LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9wbmoudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3Jlc291cmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tYXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1waXhlbC1zaXplOiAycHg7XFxyXFxuICAtLWdyaWQtY2VsbDogY2FsYyggdmFyKC0tcGl4ZWwtc2l6ZSkgKiAyICogMzIgKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI5LCAzNSk7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FtZXJhIHtcXHJcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWdyaWQtY2VsbCkgKiA5KTtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogNSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGVcXHJcXG59XFxyXFxuXFxyXFxuLm1hcCB7XFxyXFxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxNiAqIHZhcigtLWdyaWQtY2VsbCkpOyBcXHJcXG4gIGhlaWdodDogY2FsYygxMCAqIHZhcigtLWdyaWQtY2VsbCkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3BuaiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDI1NSwgMTg0KTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FpbGxvdSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FpbGxvdSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNmaXNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAyNTUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ludmVudG9yeSB7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJvdHRvbTogMzBweDtcXHJcXG4gIGJvdHRvbTogY2FsYyg2NCAqIDIpcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggYnJvd247XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTUwKTtcXHJcXG4gIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4jbGlmZS1yZWNlcHRhY2xlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMjhweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbiNsaWZlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMjhweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgei1pbmRleDogMTE7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCBsaW5lYXIgMC4ycztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlEQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXBpeGVsLXNpemU6IDJweDtcXHJcXG4gIC0tZ3JpZC1jZWxsOiBjYWxjKCB2YXIoLS1waXhlbC1zaXplKSAqIDIgKiAzMiApO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjksIDM1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jYW1lcmEge1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtY2VsbCkgKiA1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZVxcclxcbn1cXHJcXG5cXHJcXG4ubWFwIHtcXHJcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL21hcC5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTYgKiB2YXIoLS1ncmlkLWNlbGwpKTsgXFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAgKiB2YXIoLS1ncmlkLWNlbGwpKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbiNwbmoge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCAyNTUsIDE4NCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhaWxsb3Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhaWxsb3Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZmlzaCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb25vIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNpbnZlbnRvcnkge1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDMwcHg7XFxyXFxuICBib3R0b206IGNhbGMoNjQgKiAyKXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGJyb3duO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDE1MCk7XFxyXFxuICBjb2xvcjogYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuI2xpZmUtcmVjZXB0YWNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTI4cHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlmZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTI4cHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIHotaW5kZXg6IDExO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggbGluZWFyIDAuMnM7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb2xpc2lvbnMsIGlzQ29sbGlkaW5nLCBtYXBIVE1MIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xyXG4gIC8vIGdlb21ldHJ5XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0b3A6IG51bWJlcjtcclxuICBwcml2YXRlIGxlZnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTpzdHJpbmcpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5wYXJhbWV0ZXJzOiBhbnlbXSkgeyBcclxuICAgIGlmKHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IHBhcmFtZXRlcnNbMF07XHJcbiAgICAgIHRoaXMudG9wID0gNjQgKiA0O1xyXG4gICAgICB0aGlzLmxlZnQgPSA2NCAqIDg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgdGhpcy50eXBlID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSBwYXJhbWV0ZXJzWzFdO1xyXG4gICAgICB0aGlzLmxlZnQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2l6ZSA9IDY0ICogMiAtIDY7XHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSB0aGlzLnR5cGU7XHJcbiAgICBtYXBIVE1MLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudHlwZSk7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCggJHt0aGlzLmxlZnR9cHgsICR7dGhpcy50b3B9cHgsIDAgKWA7XHJcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICB9XHJcblxyXG4gIGNvbGlkZSh0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKSB7XHJcbiAgICBsZXQgaXNDb2xpc2lvbiA9IGZhbHNlO1xyXG4gICAgY29saXNpb25zLmZvckVhY2goKGNvbGlzaW9uKSA9PiB7XHJcbiAgICAgIGlmKGlzQ29saXNpb24gPT09IHRydWUpIHJldHVybjtcclxuICAgICAgY29uc3Qgd2lkdGggPSBjb2xpc2lvbj8ud2lkdGggPz8gY29saXNpb24/LnNpemVcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gY29saXNpb24/LmhlaWdodCA/PyBjb2xpc2lvbj8uc2l6ZVxyXG5cclxuICAgICAgaXNDb2xpc2lvbiA9IGlzQ29sbGlkaW5nKHRvcCwgbGVmdCwgdGhpcy5zaXplLCB0aGlzLnNpemUsIGNvbGlzaW9uLnRvcCwgY29saXNpb24ubGVmdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGlzQ29saXNpb247XHJcbiAgfVxyXG5cclxuICAvLyBnZXR0ZXIgJiBzZXR0ZXJcclxuICBnZXRTaXplKCk6IG51bWJlciB7IHJldHVybiB0aGlzLnNpemU7IH1cclxuXHJcbiAgZ2V0VG9wKCk6IG51bWJlciB7IHJldHVybiB0aGlzLnRvcDsgfVxyXG4gIHNldFRvcCh0b3A6IG51bWJlcik6IHZvaWQgeyB0aGlzLnRvcCA9IHRvcDsgfVxyXG5cclxuICBnZXRMZWZ0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxlZnQ7IH1cclxuICBzZXRMZWZ0KGxlZnQ6IG51bWJlcik6IHZvaWQgeyB0aGlzLmxlZnQgPSBsZWZ0OyB9XHJcblxyXG59IiwiaW1wb3J0IHsgY2FtZXJhSFRNTCwgcm91dGluZSB9IGZyb20gXCIuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hyb25vIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBOb2RlSlMuVGltZXI7XHJcbiAgcHJpdmF0ZSBob3VyOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBtaW51dGU6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ob3VyID0gNTtcclxuICAgIHRoaXMubWludXRlID0gNTA7XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNocm9ub1wiKTtcclxuICAgIFxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImNocm9ub1wiO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaHJvbm8nKTtcclxuICAgIGNhbWVyYUhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7IFxyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMubWludXRlID09PSA1MCkge1xyXG4gICAgICAgIGlmKHRoaXMuaG91ciA9PT0gMjMpIHtcclxuICAgICAgICAgIHRoaXMuaG91ciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ob3VyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWludXRlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLm1pbnV0ZSArPSAxMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgcm91dGluZSh0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgICBcclxuICAgIH0sIDIwMDApXHJcbiAgfVxyXG5cclxuICBzdG9wKCkgeyBcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7IFxyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpc1J1bm5pbmcoKSB7IHJldHVybiB0aGlzLmludGVydmFsICE9PSBudWxsIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICBjb25zdCBob3VyID0gYCR7dGhpcy5ob3VyIDwgMTAgPyAnMCcgOiAnJ30ke3RoaXMuaG91cn1gO1xyXG4gICAgY29uc3QgbWludXRlID0gYCR7dGhpcy5taW51dGUgPCAxMCA/ICcwJyA6ICcnfSR7dGhpcy5taW51dGV9YDtcclxuICAgIHJldHVybiBgJHtob3VyfToke21pbnV0ZX1gO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGNhbWVyYUhUTUwgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgUE5KIH0gZnJvbSAnLi9wbmonO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZyB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjaG9pY2U6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcblxyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nXCIpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5jaG9pY2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmlkID0gXCJkaWFsb2dcIlxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKTtcclxuICAgIGNhbWVyYUhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICB0aGlzLmNob2ljZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBhZGRDaG9pY2UoKSB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCArPSBcIjxkaXYgaWQ9J291aSc+LSBPdWk8L2Rpdj5cIlxyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgKz0gXCI8ZGl2IGlkPSdub24nPk5vbjwvZGl2PlwiXHJcbiAgICB0aGlzLmNob2ljZSA9ICd5ZXMnXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaG9pY2Uoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdWknKTtcclxuICAgIGNvbnN0IG5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbicpO1xyXG4gIFxyXG4gICAgaWYoa2V5ID09PSAneicpIHsgXHJcbiAgICAgIHllcy5pbm5lckhUTUwgPSAnLSBPdWknO1xyXG4gICAgICBuby5pbm5lckhUTUwgPSAnTm9uJztcclxuICAgICAgdGhpcy5jaG9pY2UgPSAneWVzJ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHllcy5pbm5lckhUTUwgPSAnT3VpJztcclxuICAgICAgbm8uaW5uZXJIVE1MID0gJy0gTm9uJztcclxuICAgICAgdGhpcy5jaG9pY2UgPSAnbm8nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDaG9pY2UoKSB7IHJldHVybiB0aGlzLmNob2ljZSB9XHJcblxyXG4gIGhhdmVDaG9pY2UoKSB7IHJldHVybiB0aGlzLmNob2ljZSAhPT0gbnVsbCB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZSgpIHsgXHJcbiAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGJveCwgaXNDb2xsaWRpbmcsIG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAvLyBnZW9tZXRyeVxyXG4gIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgdG9wOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBsZWZ0OiBudW1iZXI7XHJcblxyXG4gIC8vIGhpdGJveFxyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGl0V2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGhpdEhlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgaGl0VG9wOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBoaXRMZWZ0OiBudW1iZXI7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBoaXRUb3A6IG51bWJlciwgaGl0TGVmdDogbnVtYmVyLCBoaXRXaWR0aDogbnVtYmVyLCBoaXRIZWlnaHQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKC4uLnBhcmFtZXRlcnM6IGFueVtdKSB7IFxyXG4gICAgdGhpcy5pZCA9IHBhcmFtZXRlcnNbMF07XHJcbiAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICB0aGlzLmxlZnQgPSBwYXJhbWV0ZXJzWzJdO1xyXG5cclxuICAgIGlmKHBhcmFtZXRlcnMubGVuZ3RoIDw9IDMpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IGJveCAtIDY7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYm94IC0gNjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gcGFyYW1ldGVyc1szXTtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBwYXJhbWV0ZXJzWzRdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhcmFtZXRlcnMubGVuZ3RoIDw9IDUpIHtcclxuICAgICAgdGhpcy5oaXRUb3AgPSAwO1xyXG4gICAgICB0aGlzLmhpdExlZnQgPSAwO1xyXG4gICAgICB0aGlzLmhpdFdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgdGhpcy5oaXRIZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmhpdFRvcCA9IHBhcmFtZXRlcnNbNV07XHJcbiAgICAgIHRoaXMuaGl0TGVmdCA9IHBhcmFtZXRlcnNbNl07XHJcbiAgICAgIHRoaXMuaGl0V2lkdGggPSBwYXJhbWV0ZXJzWzddO1xyXG4gICAgICB0aGlzLmhpdEhlaWdodCA9IHBhcmFtZXRlcnNbOF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgSFRNTFxyXG4gIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgbWFwSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8vIFVQREFURSBIVE1MXHJcbiAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAke3RoaXMubGVmdH1weCwgJHt0aGlzLnRvcH1weCwgMCApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLndpZHRofXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHR9cHhgO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW50ZXJhY3QoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG5cclxuICBjb2xpZGUodG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpc0NvbGxpZGluZyhcclxuICAgICAgdGhpcy50b3AgKyB0aGlzLmhpdFRvcCwgXHJcbiAgICAgIHRoaXMubGVmdCArIHRoaXMuaGl0TGVmdCwgXHJcbiAgICAgIHRoaXMuaGl0V2lkdGgsIFxyXG4gICAgICB0aGlzLmhpdEhlaWdodCwgXHJcbiAgICAgIHRvcCwgXHJcbiAgICAgIGxlZnQsIFxyXG4gICAgICB3aWR0aCwgXHJcbiAgICAgIGhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIG1hcEhUTUwucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkpXHJcbiAgfVxyXG5cclxuICAvLyBnZXR0ZXIgJiBzZXR0ZXJcclxuICBnZXRXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy53aWR0aDsgfVxyXG4gIGdldEhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5oZWlnaHQ7IH1cclxuXHJcbiAgZ2V0VG9wKCk6IG51bWJlciB7IHJldHVybiB0aGlzLnRvcDsgfVxyXG4gIHNldFRvcCh0b3A6IG51bWJlcik6IHZvaWQgeyB0aGlzLnRvcCA9IHRvcDsgfVxyXG5cclxuICBnZXRMZWZ0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxlZnQ7IH1cclxuICBzZXRMZWZ0KGxlZnQ6IG51bWJlcik6IHZvaWQgeyB0aGlzLmxlZnQgPSBsZWZ0OyB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBib3gsIGhlcm8sIG1hcEhUTUwsIHNsZWVwLCBpbnZlbnRvcnksIGRpYWxvZyB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpc2ggZXh0ZW5kcyBFbnRpdHkge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX0xJRkU6IG51bWJlcjtcclxuICBwcml2YXRlIGxpZmU6IG51bWJlcjtcclxuICBwcml2YXRlIGlzQ2F0Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlmZTogbnVtYmVyLCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyLCBoaXRUb3A6IG51bWJlciwgaGl0TGVmdDogbnVtYmVyKSB7XHJcbiAgICBzdXBlcignZmlzaCcsIHRvcCwgbGVmdCwgYm94IC0gNiwgYm94IC0gNiwgaGl0VG9wLCBoaXRMZWZ0LCBib3gsIGJveCk7XHJcbiAgICB0aGlzLk1BWF9MSUZFID0gbGlmZTtcclxuICAgIHRoaXMubGlmZSA9IGxpZmU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbnRlcmFjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmKHRoaXMuaXNDYXRjaGluZykge1xyXG4gICAgICB0aGlzLmxpZmUgLT0gMTA7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlmZSgpO1xyXG5cclxuICAgICAgaWYodGhpcy5saWZlIDw9IDApIHtcclxuICAgICAgICB0aGlzLnN0b3BDYXRjaCgpO1xyXG4gICAgICAgIGludmVudG9yeS5hZGRPYmplY3QoJ3BvaXNzb24nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmJlZ2luQ2F0Y2goKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmVnaW5DYXRjaCgpIHtcclxuICAgIGhlcm8uc2V0Q2FuSW50ZXJhY3QoZmFsc2UpO1xyXG4gICAgaGVyby5zZXRDYW5Nb3ZlKGZhbHNlKTtcclxuICAgIHRoaXMuaXNDYXRjaGluZyA9IHRydWU7XHJcbiAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgZGlhbG9nLnVwZGF0ZShgTGUgcG9pc3NvbiBhIG1vcmR1IMOgIGwnaGFtZcOnb24gIWApO1xyXG5cclxuICAgIGF3YWl0IHNsZWVwKDEwMDApO1xyXG5cclxuICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICB0aGlzLnNob3dMaWZlKCk7XHJcbiAgICBoZXJvLnNldENhbkludGVyYWN0KHRydWUpXHJcbiAgfVxyXG5cclxuICBhc3luYyBzdG9wQ2F0Y2goKSB7XHJcbiAgICBoZXJvLnNldENhbkludGVyYWN0KGZhbHNlKTtcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcblxyXG4gICAgZGlhbG9nLnNob3coKTtcclxuICAgIGRpYWxvZy51cGRhdGUoYFZvdXMgYXZleiBhdHRhcMOpIHVuIHBvaXNzb24gcmFuZG9tICEhISA6KWApO1xyXG5cclxuICAgIGF3YWl0IHNsZWVwKDIwMDApO1xyXG5cclxuICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICBoZXJvLnNldENhbkludGVyYWN0KHRydWUpO1xyXG4gICAgaGVyby5zZXRDYW5Nb3ZlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQxLmlkID0gJ2xpZmUtcmVjZXB0YWNsZSc7XHJcbiAgICBlbGVtZW50MS5zdHlsZS50b3AgPSBgJHt0aGlzLmdldFRvcCgpIC0gMzB9cHhgO1xyXG4gICAgZWxlbWVudDEuc3R5bGUubGVmdCA9IGAke3RoaXMuZ2V0TGVmdCgpfXB4YDtcclxuICAgIGVsZW1lbnQxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50Mi5pZCA9ICdsaWZlJztcclxuICAgIGVsZW1lbnQyLnN0eWxlLnRvcCA9IGAke3RoaXMuZ2V0VG9wKCkgLSAzMH1weGA7XHJcbiAgICBlbGVtZW50Mi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5nZXRMZWZ0KCl9cHhgO1xyXG4gICAgZWxlbWVudDIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgbWFwSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaWZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWZlJyk7XHJcbiAgICBpZih0aGlzLmxpZmUgPCAxMDApIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcclxuICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAkezEyOCAqIHRoaXMubGlmZSAvIHRoaXMuTUFYX0xJRkV9cHhgXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxpZmUgPT09IDApIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dMaWZlKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUtcmVjZXB0YWNsZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgIG1hcEhUTUwucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUtcmVjZXB0YWNsZScpKVxyXG4gICAgbWFwSFRNTC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZScpKVxyXG4gIH1cclxufSIsImltcG9ydCB7IERpcmVjdGlvbn0gZnJvbSAnLic7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICBwcml2YXRlIGNhbk1vdmU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgcHJpdmF0ZSBjYW5JbnRlcmFjdDogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignaGVybycpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FuTW92ZShjYW5Nb3ZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbk1vdmUgPSBjYW5Nb3ZlO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FuSW50ZXJhY3QoY2FuSW50ZXJhY3Q6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuSW50ZXJhY3QgPSBjYW5JbnRlcmFjdDtcclxuICB9XHJcblxyXG4gIGdldENhbk1vdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5Nb3ZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FuSW50ZXJhY3QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5JbnRlcmFjdDtcclxuICB9XHJcblxyXG4gIG1vdmUoa2V5OiBEaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IHN0ZXAgPSA2NCAqIDI7XHJcbiAgICBsZXQgdG9wID0gc3VwZXIuZ2V0VG9wKCk7XHJcbiAgICBsZXQgbGVmdCA9IHN1cGVyLmdldExlZnQoKTtcclxuICAgIFxyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5VUDpcclxuICAgICAgICB0b3AgLT0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICBsZWZ0IC09IHN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG4gICAgICAgIGxlZnQgKz0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICB0b3AgKz0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5jb2xpZGUodG9wLCBsZWZ0KSkge1xyXG4gICAgICB0aGlzLnNldFRvcCh0b3ApO1xyXG4gICAgICB0aGlzLnNldExlZnQobGVmdCk7XHJcblxyXG4gICAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcbiAgICAgIG1hcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoICR7LWxlZnQgKyAoNjQgKiA4KX1weCwgJHstdG9wICsgKDY0ICogNCl9cHgsIDAgKWA7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzdXBlci51cGRhdGUoKTsgIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBHYW1lXHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBQTkogfSBmcm9tICcuL3Buaic7XHJcbmltcG9ydCB7IENocm9ubyB9IGZyb20gJy4vY2hyb25vJztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xyXG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuL2ludmVudG9yeSc7XHJcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9yZXNvdXJjZSc7XHJcbmltcG9ydCB7IEZpc2ggfSBmcm9tICcuL2Zpc2gnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcblxyXG4vLyByb3V0aW5lXHJcbmNvbnN0IG5vb2tSb3V0aW5lID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXJzL25vb2svZmlyc3Qtcm91dGluZS5qc29uJyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAobXM6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICBVUD0neicsXHJcbiAgTEVGVD0ncScsXHJcbiAgUklHSFQ9J2QnLFxyXG4gIERPV049J3MnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleSB7XHJcbiAgLy8gYWN0aW9uc1xyXG4gIFBBVVNFPSdwJyxcclxuICBJTlRFUkFDVD0nZScsXHJcbiAgSU5WRU5UT1JZPSdpJyxcclxuICAvLyBkaXJlY3Rpb25cclxuICBVUD0neicsXHJcbiAgTEVGVD0ncScsXHJcbiAgUklHSFQ9J2QnLFxyXG4gIERPV049J3MnXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY2FtZXJhSFRNTDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5leHBvcnQgbGV0IG1hcEhUTUw6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxubGV0IGNocm9ubzogQ2hyb25vID0gbnVsbDtcclxuZXhwb3J0IGxldCBkaWFsb2c6IERpYWxvZyA9IG51bGw7XHJcbmV4cG9ydCBsZXQgaW52ZW50b3J5OiBJbnZlbnRvcnkgPSBudWxsO1xyXG5cclxuZXhwb3J0IGxldCBoZXJvOiBIZXJvID0gbnVsbDtcclxubGV0IG5vb2s6IFBOSiA9IG51bGw7XHJcbmNvbnN0IHBuanM6IFBOSltdID0gW107XHJcbmNvbnN0IHJlc3NvdXJjZXM6IFJlc291cmNlW10gPSBbXVxyXG5sZXQgZW50aXRpZXM6IEVudGl0eVtdID0gW11cclxuZXhwb3J0IGNvbnN0IGNvbGlzaW9uczogYW55W10gPSBbXHJcbiAgLy8gbXVyIGRlIGdhdWNoZVxyXG4gIHtcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogNjQgKiAyIC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyICogMTBcclxuICB9LFxyXG4gIC8vIG11ciBkdSBoYXV0XHJcbiAge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogNjQgKiAyLFxyXG4gICAgd2lkdGg6IDY0ICogMiAqIDE0IC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyIFxyXG4gIH0gLFxyXG4gIC8vIG11ciBkZSBkcm9pdGVcclxuICB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiA2NCAqIDIgKiAxNSxcclxuICAgIHdpZHRoOiA2NCAqIDIsXHJcbiAgICBoZWlnaHQ6IDY0ICogMiAqIDEwXHJcbiAgfSxcclxuICAvLyBtdXIgZHUgYmFzXHJcbiAge1xyXG4gICAgdG9wOiA2NCAqIDIgKiA5LFxyXG4gICAgbGVmdDogNjQgKiAyLFxyXG4gICAgd2lkdGg6IDY0ICogMiAqIDE0IC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyIFxyXG4gIH0gLFxyXG5dO1xyXG5cclxubGV0IGRpYWxvZ09wZW46IGFueSA9IG51bGxcclxuXHJcbmV4cG9ydCBjb25zdCBib3ggPSA2NCAqIDI7XHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJhY3QgPSAoKSA9PiB7XHJcbiAgbGV0IGlzQWN0aW9uID0gZmFsc2U7XHJcbiAgcG5qcy5mb3JFYWNoKChwbmopID0+IHtcclxuICAgIGNvbnN0IGNvbGxpZGUgPSBpc0NvbGxpZGluZyhoZXJvLmdldFRvcCgpLCBoZXJvLmdldExlZnQoKSwgaGVyby5nZXRTaXplKCksIGhlcm8uZ2V0U2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBuai5nZXRUb3AoKSAtICg2NCAqIDIpLCBwbmouZ2V0TGVmdCgpIC0gKDY0ICogMiksIHBuai5nZXRTaXplKCkgKyAoNjQgKiAyICogMiksIHBuai5nZXRTaXplKCkgKyAoNjQgKiAyICogMikpO1xyXG4gICAgaWYoY29sbGlkZSAmJiAhIXBuai5nZXRBY3Rpb24oKSkge1xyXG4gICAgICBwbmouaW50ZXJhY3QoZGlhbG9nKTtcclxuICAgICAgZGlhbG9nT3BlbiA9IHBualxyXG4gICAgICBjaHJvbm8uc3RvcCgpO1xyXG4gICAgICBpc0FjdGlvbiA9IHRydWVcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZihpc0FjdGlvbikgcmV0dXJuO1xyXG5cclxuICByZXNzb3VyY2VzLmZvckVhY2goKHJlc3NvdXJjZSkgPT4ge1xyXG4gICAgY29uc3QgY29sbGlkZSA9IGlzQ29sbGlkaW5nKGhlcm8uZ2V0VG9wKCksIGhlcm8uZ2V0TGVmdCgpLCBoZXJvLmdldFNpemUoKSwgaGVyby5nZXRTaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzc291cmNlLmdldFRvcCgpLCByZXNzb3VyY2UuZ2V0TGVmdCgpLCByZXNzb3VyY2UuZ2V0U2l6ZSgpLCByZXNzb3VyY2UuZ2V0U2l6ZSgpKTtcclxuICAgIGlmKGNvbGxpZGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJWb3VzIHJhbWFzc2V6IHVuIFwiICsgcmVzc291cmNlLmdldFR5cGUoKSk7XHJcbiAgICAgIGludmVudG9yeS5hZGRPYmplY3QocmVzc291cmNlLmdldFR5cGUoKSlcclxuICAgICAgcmVzc291cmNlLnJlbW92ZShkaWFsb2cpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgbGV0IHRvUmVtb3ZlID0gLTE7XHJcbiAgZW50aXRpZXMuZm9yRWFjaChhc3luYyAoZW50aXR5LCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgY29sbGlkZSA9IGVudGl0eS5jb2xpZGUoaGVyby5nZXRUb3AoKSwgaGVyby5nZXRMZWZ0KCksIGhlcm8uZ2V0U2l6ZSgpLCBoZXJvLmdldFNpemUoKSlcclxuICAgIFxyXG4gICAgaWYoY29sbGlkZSkge1xyXG4gICAgICBjb25zdCByZW1vdmUgPSBhd2FpdCBlbnRpdHkuaW50ZXJhY3QoKTtcclxuICAgICAgaWYocmVtb3ZlKSB0b1JlbW92ZSA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmKHRvUmVtb3ZlID49IDApIHtcclxuICAgIGVudGl0aWVzID0gZW50aXRpZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSB0b1JlbW92ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5lID0gKHRpbWU6IHN0cmluZykgPT4ge1xyXG4gIHBuanMuZm9yRWFjaCgocG5qKSA9PiB7XHJcbiAgICBwbmouZG9Sb3V0aW5lKHRpbWUpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0NvbGxpZGluZyA9ICh0b3AxOiBudW1iZXIsIGxlZnQxOiBudW1iZXIsIHdpZHRoMTogbnVtYmVyLCBoZWlnaHQxOiBudW1iZXIsIHRvcDI6IG51bWJlciwgbGVmdDI6IG51bWJlciwgd2lkdGgyOiBudW1iZXIsIGhlaWdodDI6IG51bWJlcikgPT4gXHJcbiAgKGxlZnQxICsgd2lkdGgxKSA+IGxlZnQyICYmIGxlZnQxIDwgKGxlZnQyICsgd2lkdGgyKVxyXG4gICAgJiYgKHRvcDEgKyBoZWlnaHQxKSA+IHRvcDIgJiYgdG9wMSA8ICh0b3AyICsgaGVpZ2h0Mik7XHJcblxyXG5jb25zdCBpbml0SFRNTCA9ICgpID0+IHtcclxuICBjb25zdCBjYW1lcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYW1lcmEuaWQgPSAnY2FtZXJhJztcclxuICBjYW1lcmEuY2xhc3NMaXN0LmFkZCgnY2FtZXJhJyk7XHJcblxyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hcC5pZCA9ICdtYXAnO1xyXG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcclxuXHJcbiAgY2FtZXJhLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEpOyBcclxufVxyXG5cclxuY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xyXG4gIGluaXRIVE1MKCk7XHJcbiAgXHJcbiAgY2FtZXJhSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEnKTtcclxuICBtYXBIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gIGNocm9ubyA9IG5ldyBDaHJvbm8oKTtcclxuICBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XHJcbiAgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG5cclxuICBoZXJvID0gbmV3IEhlcm8oKTtcclxuICBub29rID0gbmV3IFBOSignVG9tIE5vb2snLCA2NCAqIDIgKiAzLCA2NCAqIDIgKiAyLCBub29rUm91dGluZSk7XHJcbiAgcG5qcy5wdXNoKG5vb2spO1xyXG4gIHJlc3NvdXJjZXMucHVzaChuZXcgUmVzb3VyY2UoJ2NhaWxsb3UnLCAoNjQgKiAyICogNyArIDMwKSwgKDY0ICogMiAqIDQgKyAzMCkpKVxyXG4gIGNvbGlzaW9ucy5wdXNoKGhlcm8pO1xyXG4gIGNvbGlzaW9ucy5wdXNoKG5vb2spO1xyXG5cclxuICBlbnRpdGllcy5wdXNoKG5ldyBGaXNoKDEwMCwgKGJveCAqIDQpLCAoYm94ICogOSksIDAsIC1ib3gpKTtcclxufSBcclxuXHJcbmV4cG9ydCBsZXQgd2FpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5jb25zdCBrZXlMaXN0ZW5lciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgaWYod2FpdCkgcmV0dXJuO1xyXG4gIHdhaXQgPSB0cnVlO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4geyB3YWl0ID0gZmFsc2UgfSwgMTUwKVxyXG4gIGlmKGhlcm8uZ2V0Q2FuSW50ZXJhY3QoKSAmJiBldmVudC5rZXkgPT09IEtleS5QQVVTRSkge1xyXG4gICAgaWYoY2hyb25vLmlzUnVubmluZygpKSB7XHJcbiAgICAgIGNocm9uby5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2hyb25vLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGhlcm8uZ2V0Q2FuSW50ZXJhY3QoKSAmJiBldmVudC5rZXkgPT09IEtleS5JTlRFUkFDVCkge1xyXG4gICAgaWYoIWRpYWxvZy5pc1Zpc2libGUoKSAmJiBjaHJvbm8uaXNSdW5uaW5nKCkpIHtcclxuICAgICAgaW50ZXJhY3QoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlhbG9nT3BlbiAhPT0gbnVsbCl7XHJcbiAgICAgIGRpYWxvZ09wZW4uaW50ZXJhY3QoZGlhbG9nKVxyXG4gICAgICBcclxuICAgICAgaWYoIWRpYWxvZy5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgIGRpYWxvZ09wZW4gPSBudWxsO1xyXG4gICAgICAgIGNocm9uby5zdGFydCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRpYWxvZy5pc1Zpc2libGUoKSl7XHJcbiAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGNocm9uby5pc1J1bm5pbmcoKSAmJiBldmVudC5rZXkgPT09IEtleS5JTlZFTlRPUlkpIHtcclxuICAgIGludmVudG9yeS5pc1Zpc2libGUoKSA/IGludmVudG9yeS5oaWRlKCkgOiBpbnZlbnRvcnkuc2hvdygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgaW52ZW50b3J5LmlzVmlzaWJsZSgpICYmIE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBpbnZlbnRvcnkubW92ZUN1cnNvcihldmVudC5rZXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihoZXJvLmdldENhbk1vdmUoKSAmJiBjaHJvbm8uaXNSdW5uaW5nKCkgJiYgIWRpYWxvZy5pc1Zpc2libGUoKSAmJiBPYmplY3QudmFsdWVzKERpcmVjdGlvbikuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xyXG4gICAgaGVyby5tb3ZlKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKCFjaHJvbm8uaXNSdW5uaW5nKCkgJiYgZGlhbG9nLmhhdmVDaG9pY2UoKSAmJiBbJ3onLCAncyddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGRpYWxvZy51cGRhdGVDaG9pY2UoZXZlbnQua2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5TGlzdGVuZXIpOyIsImltcG9ydCB7IERpcmVjdGlvbiwgY2FtZXJhSFRNTCB9IGZyb20gXCIuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyID0gNDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHRhYjogYW55W11bXSA9IFtdO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgY29uc3QgbGluZSA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcclxuICAgICAgICBsaW5lLnB1c2gobnVsbClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYi5wdXNoKGxpbmUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludmVudG9yeScpO1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBsaW5lSWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmVIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgbGluZUhUTUwuaWQgPSBsaW5lSWR4LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBsaW5lLmZvckVhY2goKF8sIGl0ZW1JZHgpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgaXRlbUhUTUwuaWQgPSBgJHtsaW5lSWR4fS0ke2l0ZW1JZHh9YDtcclxuICAgICAgICBsaW5lSFRNTC5hcHBlbmRDaGlsZChpdGVtSFRNTCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZUhUTUwpO1xyXG4gICAgfSlcclxuXHJcbiAgICBlbGVtZW50LmlkID0gJ2ludmVudG9yeSc7XHJcbiAgICBjYW1lcmFIVE1MLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eX0tJHt4fWApXHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQodGhpcy50YWJbeV1beF0pO1xyXG4gICAgY2VsbC5pbm5lckhUTUwgPSB0aGlzLnRhYlt5XVt4XTtcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHRoaXMuYWRkU2VsZWN0ZWQoKTtcclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBhZGRPYmplY3Qob2JqZWN0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBpc1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgbGV0IHBvc2l0aW9uOiBhbnkgPSB7eDogMCwgeTogMCwgaXRlbTogbnVsbH1cclxuXHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBpZHhMaW5lKSA9PiB7XHJcbiAgICAgIGlmKGlzVXBkYXRlKSByZXR1cm47XHJcblxyXG4gICAgICBsaW5lLmZvckVhY2goKGl0ZW0sIGlkeEl0ZW0pID0+IHtcclxuICAgICAgICBpZihpc1VwZGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKGl0ZW0gPT09IG51bGwpIHtcclxuICAgICAgICAgIHBvc2l0aW9uID0ge3g6IGlkeEl0ZW0sIHk6IGlkeExpbmUsIGl0ZW06IG9iamVjdH1cclxuICAgICAgICAgIGlzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudGFiW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdID0gcG9zaXRpb24uaXRlbTtcclxuICAgIHRoaXMudXBkYXRlKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gIH1cclxuXHJcbiAgYWRkU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBpZHhMaW5lKSA9PiB7XHJcbiAgICAgIGxpbmUuZm9yRWFjaCgoXywgaWR4SXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA9PT0gaWR4SXRlbSAmJiB0aGlzLnNlbGVjdGVkLnkgPT09IGlkeExpbmUpIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZHhMaW5lfS0ke2lkeEl0ZW19YCk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBpZHhMaW5lKSA9PiB7XHJcbiAgICAgIGxpbmUuZm9yRWFjaCgoXywgaWR4SXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA9PT0gaWR4SXRlbSAmJiB0aGlzLnNlbGVjdGVkLnkgPT09IGlkeExpbmUpIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZHhMaW5lfS0ke2lkeEl0ZW19YCk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbW92ZUN1cnNvcihrZXk6IERpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVTZWxlY3RlZCgpO1xyXG5cclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC55ID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueCAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC54IDwgdGhpcy53aWR0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnkgPCB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBOSiBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByb3V0aW5lOiBhbnk7XHJcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXJyZW50QWN0aW9uOiBhbnk7XHJcbiAgcHJpdmF0ZSBjdXJyZW50RGlhbG9nOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcm91dGluZTogYW55KSB7XHJcbiAgICBzdXBlcigncG5qJywgdG9wLCBsZWZ0KTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnJvdXRpbmUgPSByb3V0aW5lO1xyXG4gICAgdGhpcy5jdXJyZW50RGlhbG9nID0gMDtcclxuICB9XHJcblxyXG4gIGRvUm91dGluZSh0aW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucm91dGluZSkuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlhbG9nID0gMDtcclxuICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5yb3V0aW5lW3RpbWVdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRBY3Rpb24udGV4dCk7XHJcblxyXG4gICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb24ucG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uLnRvcCwgdGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uLmxlZnQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludGVyYWN0KGRpYWxvZzogRGlhbG9nKSB7XHJcbiAgICBpZihkaWFsb2cuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50QWN0aW9uLmRpYWxvZy5sZW5ndGgsIHRoaXMuY3VycmVudERpYWxvZylcclxuICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uLmRpYWxvZy5sZW5ndGggPiB0aGlzLmN1cnJlbnREaWFsb2cpIHtcclxuICAgICAgICBpZihkaWFsb2cuaGF2ZUNob2ljZSgpKSB7XHJcbiAgICAgICAgICBkaWFsb2cudXBkYXRlKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2dbdGhpcy5jdXJyZW50RGlhbG9nXVtkaWFsb2cuZ2V0Q2hvaWNlKCldKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudERpYWxvZysrO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGRpYWxvZy51cGRhdGUodGhpcy5jdXJyZW50QWN0aW9uLmRpYWxvZ1t0aGlzLmN1cnJlbnREaWFsb2ddLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb24uZGlhbG9nW3RoaXMuY3VycmVudERpYWxvZ10/LmNob2ljZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZGlhbG9nLmFkZENob2ljZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudERpYWxvZysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpYWxvZyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaWFsb2cudXBkYXRlKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2dbdGhpcy5jdXJyZW50RGlhbG9nXS50ZXh0KTtcclxuICAgICAgZGlhbG9nLnNob3coKTtcclxuICAgICAgdGhpcy5jdXJyZW50RGlhbG9nKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlKGZpbmFsVG9wOiBudW1iZXIsIGZpbmFsTGVmdDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzdGVwcyA9IDY0ICogMjtcclxuICAgIGNvbnN0IGZpblRvcCA9IGZpbmFsVG9wICogMiAqIDY0XHJcbiAgICBjb25zdCBmaW5UTGVmdCA9IGZpbmFsTGVmdCAqIDIgKiA2NFxyXG4gICAgXHJcbiAgICBjb25zdCB3YWxrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5nZXRMZWZ0KCk7XHJcblxyXG4gICAgICBpZih0b3AgPT09IGZpblRvcCAmJiBsZWZ0ID09PSBmaW5UTGVmdCkgeyBjbGVhckludGVydmFsKHdhbGspIH1cclxuXHJcbiAgICAgIGlmKHRvcCA8IGZpblRvcCAmJiAhdGhpcy5jb2xpZGUodG9wICsgc3RlcHMsIGxlZnQpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0VG9wKHRvcCArIHN0ZXBzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0b3AgPiBmaW5Ub3AgJiYgIXRoaXMuY29saWRlKHRvcCAtIHN0ZXBzLCBsZWZ0KSkge1xyXG4gICAgICAgIHN1cGVyLnNldFRvcCh0b3AgLSBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYobGVmdCA8IGZpblRMZWZ0ICYmICF0aGlzLmNvbGlkZSh0b3AsIGxlZnQgKyBzdGVwcykpIHtcclxuICAgICAgICBzdXBlci5zZXRMZWZ0KGxlZnQgKyBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYobGVmdCA+IGZpblRMZWZ0ICYmICF0aGlzLmNvbGlkZSh0b3AsIGxlZnQgLSBzdGVwcykpIHtcclxuICAgICAgICBzdXBlci5zZXRMZWZ0KGxlZnQgLSBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSwgMjAwKVxyXG5cclxuICB9XHJcblxyXG4gIGdldEFjdGlvbigpIHsgcmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbiB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuICAvLyBnZW9tZXRyeVxyXG4gIHByaXZhdGUgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdG9wOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBsZWZ0OiBudW1iZXI7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5wYXJhbWV0ZXJzOiBhbnlbXSkgeyBcclxuICAgIGlmKHBhcmFtZXRlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IDY0ICogNDtcclxuICAgICAgdGhpcy5sZWZ0ID0gNjQgKiA4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBhcmFtZXRlcnMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gNjQgIDtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dGhpcy50b3B9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sZWZ0fXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgbWFwSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShkaWFsb2c6IERpYWxvZyk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgbWFwSFRNTC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBkaWFsb2cudXBkYXRlKGBWb3VzIGF2ZXogdHJvdXbDqSB1biAke3RoaXMuaWR9ICFgKVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0dGVyICYgc2V0dGVyXHJcbiAgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pZCB9XHJcbiAgZ2V0U2l6ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5zaXplOyB9XHJcblxyXG4gIGdldFRvcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy50b3A7IH1cclxuICBzZXRUb3AodG9wOiBudW1iZXIpOiB2b2lkIHsgdGhpcy50b3AgPSB0b3A7IH1cclxuXHJcbiAgZ2V0TGVmdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sZWZ0OyB9XHJcbiAgc2V0TGVmdChsZWZ0OiBudW1iZXIpOiB2b2lkIHsgdGhpcy5sZWZ0ID0gbGVmdDsgfVxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==