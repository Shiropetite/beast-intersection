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
                        _index__WEBPACK_IMPORTED_MODULE_1__.hero.setCanMove(false);
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.show();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.update("Le poisson a mordu \u00E0 l'hame\u00E7on !");
                        return [4 /*yield*/, (0,_index__WEBPACK_IMPORTED_MODULE_1__.sleep)(1000)];
                    case 1:
                        _a.sent();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.hide();
                        this.showLife();
                        this.isCatching = true;
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
                        this.remove();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.show();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.update("Vous avez attap\u00E9 un poisson random !!! :)");
                        return [4 /*yield*/, (0,_index__WEBPACK_IMPORTED_MODULE_1__.sleep)(2000)];
                    case 1:
                        _a.sent();
                        _index__WEBPACK_IMPORTED_MODULE_1__.dialog.hide();
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
        return _this;
    }
    Hero.prototype.setCanMove = function (canMove) {
        this.canMove = canMove;
    };
    Hero.prototype.getCanMove = function () {
        return this.canMove;
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
/* harmony export */   "sleep": () => (/* binding */ sleep)
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
var keyListener = function (event) {
    if (event.key === Key.PAUSE) {
        if (chrono.isRunning()) {
            chrono.stop();
        }
        else {
            chrono.start();
        }
        return;
    }
    if (event.key === Key.INTERACT) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLHlCQUFNLEdBQU4sVUFBTyxHQUFXLElBQVUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTdDLDBCQUFPLEdBQVAsY0FBb0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2QywwQkFBTyxHQUFQLFVBQVEsSUFBWSxJQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuRCxlQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2Nocm9uby50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvZGlhbG9nLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2Zpc2gudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2hlcm8udHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9pbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3Buai50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvcmVzb3VyY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21hcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXBpeGVsLXNpemU6IDJweDtcXHJcXG4gIC0tZ3JpZC1jZWxsOiBjYWxjKCB2YXIoLS1waXhlbC1zaXplKSAqIDIgKiAzMiApO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjksIDM1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jYW1lcmEge1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtY2VsbCkgKiA1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZVxcclxcbn1cXHJcXG5cXHJcXG4ubWFwIHtcXHJcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDE2ICogdmFyKC0tZ3JpZC1jZWxsKSk7IFxcclxcbiAgaGVpZ2h0OiBjYWxjKDEwICogdmFyKC0tZ3JpZC1jZWxsKSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbiNoZXJvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcG5qIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjU1LCAxODQpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jYWlsbG91IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNjYWlsbG91IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Zpc2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDI1NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9ubyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW52ZW50b3J5IHtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgYm90dG9tOiAzMHB4O1xcclxcbiAgYm90dG9tOiBjYWxjKDY0ICogMilweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBicm93bjtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAxNTApO1xcclxcbiAgY29sb3I6IGJsYWNrXFxyXFxufVxcclxcblxcclxcbiNsaWZlLXJlY2VwdGFjbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEyOHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpZmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEyOHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIGxpbmVhciAwLjJzO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseURBQXVDO0VBQ3ZDLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQztBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcGl4ZWwtc2l6ZTogMnB4O1xcclxcbiAgLS1ncmlkLWNlbGw6IGNhbGMoIHZhcigtLXBpeGVsLXNpemUpICogMiAqIDMyICk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOSwgMzUpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbWVyYSB7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogOSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlXFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWFwLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxNiAqIHZhcigtLWdyaWQtY2VsbCkpOyBcXHJcXG4gIGhlaWdodDogY2FsYygxMCAqIHZhcigtLWdyaWQtY2VsbCkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3BuaiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDI1NSwgMTg0KTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FpbGxvdSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FpbGxvdSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNmaXNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAyNTUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ludmVudG9yeSB7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJvdHRvbTogMzBweDtcXHJcXG4gIGJvdHRvbTogY2FsYyg2NCAqIDIpcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggYnJvd247XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTUwKTtcXHJcXG4gIGNvbG9yOiBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4jbGlmZS1yZWNlcHRhY2xlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMjhweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbiNsaWZlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMjhweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgei1pbmRleDogMTE7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCBsaW5lYXIgMC4ycztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbGlzaW9ucywgaXNDb2xsaWRpbmcsIG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKC4uLnBhcmFtZXRlcnM6IGFueVtdKSB7IFxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy50eXBlID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLnR5cGUgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gNjQgKiAyIC0gNjtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMudHlwZTtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50eXBlKTtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAke3RoaXMubGVmdH1weCwgJHt0aGlzLnRvcH1weCwgMCApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29saWRlKHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpIHtcclxuICAgIGxldCBpc0NvbGlzaW9uID0gZmFsc2U7XHJcbiAgICBjb2xpc2lvbnMuZm9yRWFjaCgoY29saXNpb24pID0+IHtcclxuICAgICAgaWYoaXNDb2xpc2lvbiA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNvbGlzaW9uPy53aWR0aCA/PyBjb2xpc2lvbj8uc2l6ZVxyXG4gICAgICBjb25zdCBoZWlnaHQgPSBjb2xpc2lvbj8uaGVpZ2h0ID8/IGNvbGlzaW9uPy5zaXplXHJcblxyXG4gICAgICBpc0NvbGlzaW9uID0gaXNDb2xsaWRpbmcodG9wLCBsZWZ0LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgY29saXNpb24udG9wLCBjb2xpc2lvbi5sZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNDb2xpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjYW1lcmFIVE1MLCByb3V0aW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lcjtcclxuICBwcml2YXRlIGhvdXI6IG51bWJlcjtcclxuICBwcml2YXRlIG1pbnV0ZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhvdXIgPSA1O1xyXG4gICAgdGhpcy5taW51dGUgPSA1MDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hyb25vXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiY2hyb25vXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nocm9ubycpO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHsgXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5taW51dGUgPT09IDUwKSB7XHJcbiAgICAgICAgaWYodGhpcy5ob3VyID09PSAyMykge1xyXG4gICAgICAgICAgdGhpcy5ob3VyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhvdXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW51dGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWludXRlICs9IDEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICByb3V0aW5lKHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIFxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7IFxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTsgXHJcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzUnVubmluZygpIHsgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgIT09IG51bGwgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IGhvdXIgPSBgJHt0aGlzLmhvdXIgPCAxMCA/ICcwJyA6ICcnfSR7dGhpcy5ob3VyfWA7XHJcbiAgICBjb25zdCBtaW51dGUgPSBgJHt0aGlzLm1pbnV0ZSA8IDEwID8gJzAnIDogJyd9JHt0aGlzLm1pbnV0ZX1gO1xyXG4gICAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfWA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY2FtZXJhSFRNTCB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBQTkogfSBmcm9tICcuL3Buaic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNob2ljZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dcIik7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmNob2ljZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImRpYWxvZ1wiXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIHRoaXMuY2hvaWNlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGFkZENob2ljZSgpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGRpdiBpZD0nb3VpJz4tIE91aTwvZGl2PlwiXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCArPSBcIjxkaXYgaWQ9J25vbic+Tm9uPC9kaXY+XCJcclxuICAgIHRoaXMuY2hvaWNlID0gJ3llcydcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNob2ljZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgeWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291aScpO1xyXG4gICAgY29uc3Qgbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9uJyk7XHJcbiAgXHJcbiAgICBpZihrZXkgPT09ICd6JykgeyBcclxuICAgICAgeWVzLmlubmVySFRNTCA9ICctIE91aSc7XHJcbiAgICAgIG5vLmlubmVySFRNTCA9ICdOb24nO1xyXG4gICAgICB0aGlzLmNob2ljZSA9ICd5ZXMnXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgeWVzLmlubmVySFRNTCA9ICdPdWknO1xyXG4gICAgICBuby5pbm5lckhUTUwgPSAnLSBOb24nO1xyXG4gICAgICB0aGlzLmNob2ljZSA9ICdubydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENob2ljZSgpIHsgcmV0dXJuIHRoaXMuY2hvaWNlIH1cclxuXHJcbiAgaGF2ZUNob2ljZSgpIHsgcmV0dXJuIHRoaXMuY2hvaWNlICE9PSBudWxsIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaXNWaXNpYmxlKCkgeyBcclxuICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgYm94LCBpc0NvbGxpZGluZywgbWFwSFRNTCB9IGZyb20gXCIuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gIC8vIGdlb21ldHJ5XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0b3A6IG51bWJlcjtcclxuICBwcml2YXRlIGxlZnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gaGl0Ym94XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoaXRXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGl0SGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBoaXRUb3A6IG51bWJlcjtcclxuICBwcml2YXRlIGhpdExlZnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6c3RyaW5nKTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGhpdFRvcDogbnVtYmVyLCBoaXRMZWZ0OiBudW1iZXIsIGhpdFdpZHRoOiBudW1iZXIsIGhpdEhlaWdodDogbnVtYmVyKTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoLi4ucGFyYW1ldGVyczogYW55W10pIHsgXHJcbiAgICB0aGlzLmlkID0gcGFyYW1ldGVyc1swXTtcclxuICAgIHRoaXMudG9wID0gcGFyYW1ldGVyc1sxXTtcclxuICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcblxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPD0gMykge1xyXG4gICAgICB0aGlzLndpZHRoID0gYm94IC0gNjtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBib3ggLSA2O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSBwYXJhbWV0ZXJzWzNdO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHBhcmFtZXRlcnNbNF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPD0gNSkge1xyXG4gICAgICB0aGlzLmhpdFRvcCA9IDA7XHJcbiAgICAgIHRoaXMuaGl0TGVmdCA9IDA7XHJcbiAgICAgIHRoaXMuaGl0V2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICB0aGlzLmhpdEhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGl0VG9wID0gcGFyYW1ldGVyc1s1XTtcclxuICAgICAgdGhpcy5oaXRMZWZ0ID0gcGFyYW1ldGVyc1s2XTtcclxuICAgICAgdGhpcy5oaXRXaWR0aCA9IHBhcmFtZXRlcnNbN107XHJcbiAgICAgIHRoaXMuaGl0SGVpZ2h0ID0gcGFyYW1ldGVyc1s4XTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBIVE1MXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICBtYXBIVE1MLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gVVBEQVRFIEhUTUxcclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoICR7dGhpcy5sZWZ0fXB4LCAke3RoaXMudG9wfXB4LCAwIClgO1xyXG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMud2lkdGh9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodH1weGA7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbnRlcmFjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcblxyXG4gIGNvbGlkZSh0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGlzQ29sbGlkaW5nKFxyXG4gICAgICB0aGlzLnRvcCArIHRoaXMuaGl0VG9wLCBcclxuICAgICAgdGhpcy5sZWZ0ICsgdGhpcy5oaXRMZWZ0LCBcclxuICAgICAgdGhpcy5oaXRXaWR0aCwgXHJcbiAgICAgIHRoaXMuaGl0SGVpZ2h0LCBcclxuICAgICAgdG9wLCBcclxuICAgICAgbGVmdCwgXHJcbiAgICAgIHdpZHRoLCBcclxuICAgICAgaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbWFwSFRNTC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSlcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLndpZHRoOyB9XHJcbiAgZ2V0SGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmhlaWdodDsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcbmltcG9ydCB7IGJveCwgaGVybywgbWFwSFRNTCwgc2xlZXAsIGludmVudG9yeSwgZGlhbG9nIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlzaCBleHRlbmRzIEVudGl0eSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfTElGRTogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGlmZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgaXNDYXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWZlOiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIGhpdFRvcDogbnVtYmVyLCBoaXRMZWZ0OiBudW1iZXIpIHtcclxuICAgIHN1cGVyKCdmaXNoJywgdG9wLCBsZWZ0LCBib3ggLSA2LCBib3ggLSA2LCBoaXRUb3AsIGhpdExlZnQsIGJveCwgYm94KTtcclxuICAgIHRoaXMuTUFYX0xJRkUgPSBsaWZlO1xyXG4gICAgdGhpcy5saWZlID0gbGlmZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGludGVyYWN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYodGhpcy5pc0NhdGNoaW5nKSB7XHJcbiAgICAgIHRoaXMubGlmZSAtPSAxMDtcclxuICAgICAgdGhpcy51cGRhdGVMaWZlKCk7XHJcblxyXG4gICAgICBpZih0aGlzLmxpZmUgPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc3RvcENhdGNoKCk7XHJcbiAgICAgICAgaW52ZW50b3J5LmFkZE9iamVjdCgncG9pc3NvbicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYmVnaW5DYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBiZWdpbkNhdGNoKCkge1xyXG4gICAgaGVyby5zZXRDYW5Nb3ZlKGZhbHNlKTtcclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBkaWFsb2cudXBkYXRlKGBMZSBwb2lzc29uIGEgbW9yZHUgw6AgbCdoYW1lw6dvbiAhYCk7XHJcblxyXG4gICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcblxyXG4gICAgZGlhbG9nLmhpZGUoKTtcclxuICAgIHRoaXMuc2hvd0xpZmUoKTtcclxuICAgIHRoaXMuaXNDYXRjaGluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdG9wQ2F0Y2goKSB7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG5cclxuICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICBkaWFsb2cudXBkYXRlKGBWb3VzIGF2ZXogYXR0YXDDqSB1biBwb2lzc29uIHJhbmRvbSAhISEgOilgKTtcclxuXHJcbiAgICBhd2FpdCBzbGVlcCgyMDAwKTtcclxuXHJcbiAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgaGVyby5zZXRDYW5Nb3ZlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQxLmlkID0gJ2xpZmUtcmVjZXB0YWNsZSc7XHJcbiAgICBlbGVtZW50MS5zdHlsZS50b3AgPSBgJHt0aGlzLmdldFRvcCgpIC0gMzB9cHhgO1xyXG4gICAgZWxlbWVudDEuc3R5bGUubGVmdCA9IGAke3RoaXMuZ2V0TGVmdCgpfXB4YDtcclxuICAgIGVsZW1lbnQxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50Mi5pZCA9ICdsaWZlJztcclxuICAgIGVsZW1lbnQyLnN0eWxlLnRvcCA9IGAke3RoaXMuZ2V0VG9wKCkgLSAzMH1weGA7XHJcbiAgICBlbGVtZW50Mi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5nZXRMZWZ0KCl9cHhgO1xyXG4gICAgZWxlbWVudDIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgbWFwSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaWZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWZlJyk7XHJcbiAgICBpZih0aGlzLmxpZmUgPCAxMDApIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcclxuICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAkezEyOCAqIHRoaXMubGlmZSAvIHRoaXMuTUFYX0xJRkV9cHhgXHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmxpZmUgPT09IDApIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dMaWZlKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUtcmVjZXB0YWNsZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgIG1hcEhUTUwucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZmUtcmVjZXB0YWNsZScpKVxyXG4gICAgbWFwSFRNTC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZScpKVxyXG4gIH1cclxufSIsImltcG9ydCB7IERpcmVjdGlvbn0gZnJvbSAnLic7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICBwcml2YXRlIGNhbk1vdmU6IGJvb2xlYW4gPSB0cnVlXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2hlcm8nKTtcclxuICB9XHJcblxyXG4gIHNldENhbk1vdmUoY2FuTW92ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5Nb3ZlID0gY2FuTW92ZTtcclxuICB9XHJcblxyXG4gIGdldENhbk1vdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5Nb3ZlO1xyXG4gIH1cclxuXHJcbiAgbW92ZShrZXk6IERpcmVjdGlvbikge1xyXG4gICAgY29uc3Qgc3RlcCA9IDY0ICogMjtcclxuICAgIGxldCB0b3AgPSBzdXBlci5nZXRUb3AoKTtcclxuICAgIGxldCBsZWZ0ID0gc3VwZXIuZ2V0TGVmdCgpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxyXG4gICAgICAgIHRvcCAtPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgIGxlZnQgLT0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcbiAgICAgICAgbGVmdCArPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG4gICAgICAgIHRvcCArPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLmNvbGlkZSh0b3AsIGxlZnQpKSB7XHJcbiAgICAgIHRoaXMuc2V0VG9wKHRvcCk7XHJcbiAgICAgIHRoaXMuc2V0TGVmdChsZWZ0KTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTtcclxuICAgICAgbWFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCggJHstbGVmdCArICg2NCAqIDgpfXB4LCAkey10b3AgKyAoNjQgKiA0KX1weCwgMCApYDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHN1cGVyLnVwZGF0ZSgpOyAgXHJcblxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIEdhbWVcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IFBOSiB9IGZyb20gJy4vcG5qJztcclxuaW1wb3J0IHsgQ2hyb25vIH0gZnJvbSAnLi9jaHJvbm8nO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XHJcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gJy4vaW52ZW50b3J5JztcclxuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL3Jlc291cmNlJztcclxuaW1wb3J0IHsgRmlzaCB9IGZyb20gJy4vZmlzaCc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5JztcclxuXHJcbi8vIHJvdXRpbmVcclxuY29uc3Qgbm9va1JvdXRpbmUgPSByZXF1aXJlKCcuL2NoYXJhY3RlcnMvbm9vay9maXJzdC1yb3V0aW5lLmpzb24nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGVlcCA9IChtczogbnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIFVQPSd6JyxcclxuICBMRUZUPSdxJyxcclxuICBSSUdIVD0nZCcsXHJcbiAgRE9XTj0ncydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gS2V5IHtcclxuICAvLyBhY3Rpb25zXHJcbiAgUEFVU0U9J3AnLFxyXG4gIElOVEVSQUNUPSdlJyxcclxuICBJTlZFTlRPUlk9J2knLFxyXG4gIC8vIGRpcmVjdGlvblxyXG4gIFVQPSd6JyxcclxuICBMRUZUPSdxJyxcclxuICBSSUdIVD0nZCcsXHJcbiAgRE9XTj0ncydcclxufVxyXG5cclxuZXhwb3J0IGxldCBjYW1lcmFIVE1MOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbmV4cG9ydCBsZXQgbWFwSFRNTDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5sZXQgY2hyb25vOiBDaHJvbm8gPSBudWxsO1xyXG5leHBvcnQgbGV0IGRpYWxvZzogRGlhbG9nID0gbnVsbDtcclxuZXhwb3J0IGxldCBpbnZlbnRvcnk6IEludmVudG9yeSA9IG51bGw7XHJcblxyXG5leHBvcnQgbGV0IGhlcm86IEhlcm8gPSBudWxsO1xyXG5sZXQgbm9vazogUE5KID0gbnVsbDtcclxuY29uc3QgcG5qczogUE5KW10gPSBbXTtcclxuY29uc3QgcmVzc291cmNlczogUmVzb3VyY2VbXSA9IFtdXHJcbmxldCBlbnRpdGllczogRW50aXR5W10gPSBbXVxyXG5leHBvcnQgY29uc3QgY29saXNpb25zOiBhbnlbXSA9IFtcclxuICAvLyBtdXIgZGUgZ2F1Y2hlXHJcbiAge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiA2NCAqIDIgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgKiAxMFxyXG4gIH0sXHJcbiAgLy8gbXVyIGR1IGhhdXRcclxuICB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiA2NCAqIDIsXHJcbiAgICB3aWR0aDogNjQgKiAyICogMTQgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgXHJcbiAgfSAsXHJcbiAgLy8gbXVyIGRlIGRyb2l0ZVxyXG4gIHtcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDY0ICogMiAqIDE1LFxyXG4gICAgd2lkdGg6IDY0ICogMixcclxuICAgIGhlaWdodDogNjQgKiAyICogMTBcclxuICB9LFxyXG4gIC8vIG11ciBkdSBiYXNcclxuICB7XHJcbiAgICB0b3A6IDY0ICogMiAqIDksXHJcbiAgICBsZWZ0OiA2NCAqIDIsXHJcbiAgICB3aWR0aDogNjQgKiAyICogMTQgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgXHJcbiAgfSAsXHJcbl07XHJcblxyXG5sZXQgZGlhbG9nT3BlbjogYW55ID0gbnVsbFxyXG5cclxuZXhwb3J0IGNvbnN0IGJveCA9IDY0ICogMjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcmFjdCA9ICgpID0+IHtcclxuICBsZXQgaXNBY3Rpb24gPSBmYWxzZTtcclxuICBwbmpzLmZvckVhY2goKHBuaikgPT4ge1xyXG4gICAgY29uc3QgY29sbGlkZSA9IGlzQ29sbGlkaW5nKGhlcm8uZ2V0VG9wKCksIGhlcm8uZ2V0TGVmdCgpLCBoZXJvLmdldFNpemUoKSwgaGVyby5nZXRTaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG5qLmdldFRvcCgpIC0gKDY0ICogMiksIHBuai5nZXRMZWZ0KCkgLSAoNjQgKiAyKSwgcG5qLmdldFNpemUoKSArICg2NCAqIDIgKiAyKSwgcG5qLmdldFNpemUoKSArICg2NCAqIDIgKiAyKSk7XHJcbiAgICBpZihjb2xsaWRlICYmICEhcG5qLmdldEFjdGlvbigpKSB7XHJcbiAgICAgIHBuai5pbnRlcmFjdChkaWFsb2cpO1xyXG4gICAgICBkaWFsb2dPcGVuID0gcG5qXHJcbiAgICAgIGNocm9uby5zdG9wKCk7XHJcbiAgICAgIGlzQWN0aW9uID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmKGlzQWN0aW9uKSByZXR1cm47XHJcblxyXG4gIHJlc3NvdXJjZXMuZm9yRWFjaCgocmVzc291cmNlKSA9PiB7XHJcbiAgICBjb25zdCBjb2xsaWRlID0gaXNDb2xsaWRpbmcoaGVyby5nZXRUb3AoKSwgaGVyby5nZXRMZWZ0KCksIGhlcm8uZ2V0U2l6ZSgpLCBoZXJvLmdldFNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNzb3VyY2UuZ2V0VG9wKCksIHJlc3NvdXJjZS5nZXRMZWZ0KCksIHJlc3NvdXJjZS5nZXRTaXplKCksIHJlc3NvdXJjZS5nZXRTaXplKCkpO1xyXG4gICAgaWYoY29sbGlkZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlZvdXMgcmFtYXNzZXogdW4gXCIgKyByZXNzb3VyY2UuZ2V0VHlwZSgpKTtcclxuICAgICAgaW52ZW50b3J5LmFkZE9iamVjdChyZXNzb3VyY2UuZ2V0VHlwZSgpKVxyXG4gICAgICByZXNzb3VyY2UucmVtb3ZlKGRpYWxvZylcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBsZXQgdG9SZW1vdmUgPSAtMTtcclxuICBlbnRpdGllcy5mb3JFYWNoKGFzeW5jIChlbnRpdHksIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBjb2xsaWRlID0gZW50aXR5LmNvbGlkZShoZXJvLmdldFRvcCgpLCBoZXJvLmdldExlZnQoKSwgaGVyby5nZXRTaXplKCksIGhlcm8uZ2V0U2l6ZSgpKVxyXG4gICAgXHJcbiAgICBpZihjb2xsaWRlKSB7XHJcbiAgICAgIGNvbnN0IHJlbW92ZSA9IGF3YWl0IGVudGl0eS5pbnRlcmFjdCgpO1xyXG4gICAgICBpZihyZW1vdmUpIHRvUmVtb3ZlID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYodG9SZW1vdmUgPj0gMCkge1xyXG4gICAgZW50aXRpZXMgPSBlbnRpdGllcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IHRvUmVtb3ZlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmUgPSAodGltZTogc3RyaW5nKSA9PiB7XHJcbiAgcG5qcy5mb3JFYWNoKChwbmopID0+IHtcclxuICAgIHBuai5kb1JvdXRpbmUodGltZSk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ29sbGlkaW5nID0gKHRvcDE6IG51bWJlciwgbGVmdDE6IG51bWJlciwgd2lkdGgxOiBudW1iZXIsIGhlaWdodDE6IG51bWJlciwgdG9wMjogbnVtYmVyLCBsZWZ0MjogbnVtYmVyLCB3aWR0aDI6IG51bWJlciwgaGVpZ2h0MjogbnVtYmVyKSA9PiBcclxuICAobGVmdDEgKyB3aWR0aDEpID4gbGVmdDIgJiYgbGVmdDEgPCAobGVmdDIgKyB3aWR0aDIpXHJcbiAgICAmJiAodG9wMSArIGhlaWdodDEpID4gdG9wMiAmJiB0b3AxIDwgKHRvcDIgKyBoZWlnaHQyKTtcclxuXHJcbmNvbnN0IGluaXRIVE1MID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbWVyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhbWVyYS5pZCA9ICdjYW1lcmEnO1xyXG4gIGNhbWVyYS5jbGFzc0xpc3QuYWRkKCdjYW1lcmEnKTtcclxuXHJcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFwLmlkID0gJ21hcCc7XHJcbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xyXG5cclxuICBjYW1lcmEuYXBwZW5kQ2hpbGQobWFwKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbWVyYSk7IFxyXG59XHJcblxyXG5jb25zdCBvbkxvYWQgPSAoKSA9PiB7XHJcbiAgaW5pdEhUTUwoKTtcclxuICBcclxuICBjYW1lcmFIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpO1xyXG4gIG1hcEhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcbiAgY2hyb25vID0gbmV3IENocm9ubygpO1xyXG4gIGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcclxuICBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcblxyXG4gIGhlcm8gPSBuZXcgSGVybygpO1xyXG4gIG5vb2sgPSBuZXcgUE5KKCdUb20gTm9vaycsIDY0ICogMiAqIDMsIDY0ICogMiAqIDIsIG5vb2tSb3V0aW5lKTtcclxuICBwbmpzLnB1c2gobm9vayk7XHJcbiAgcmVzc291cmNlcy5wdXNoKG5ldyBSZXNvdXJjZSgnY2FpbGxvdScsICg2NCAqIDIgKiA3ICsgMzApLCAoNjQgKiAyICogNCArIDMwKSkpXHJcbiAgY29saXNpb25zLnB1c2goaGVybyk7XHJcbiAgY29saXNpb25zLnB1c2gobm9vayk7XHJcblxyXG4gIGVudGl0aWVzLnB1c2gobmV3IEZpc2goMTAwLCAoYm94ICogNCksIChib3ggKiA5KSwgMCwgLWJveCkpO1xyXG59IFxyXG5cclxuY29uc3Qga2V5TGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PT0gS2V5LlBBVVNFKSB7XHJcbiAgICBpZihjaHJvbm8uaXNSdW5uaW5nKCkpIHtcclxuICAgICAgY2hyb25vLnN0b3AoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjaHJvbm8uc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoZXZlbnQua2V5ID09PSBLZXkuSU5URVJBQ1QpIHtcclxuICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkgJiYgY2hyb25vLmlzUnVubmluZygpKSB7XHJcbiAgICAgIGludGVyYWN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpYWxvZ09wZW4gIT09IG51bGwpe1xyXG4gICAgICBkaWFsb2dPcGVuLmludGVyYWN0KGRpYWxvZylcclxuICAgICAgXHJcbiAgICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICBkaWFsb2dPcGVuID0gbnVsbDtcclxuICAgICAgICBjaHJvbm8uc3RhcnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkaWFsb2cuaXNWaXNpYmxlKCkpe1xyXG4gICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgZXZlbnQua2V5ID09PSBLZXkuSU5WRU5UT1JZKSB7XHJcbiAgICBpbnZlbnRvcnkuaXNWaXNpYmxlKCkgPyBpbnZlbnRvcnkuaGlkZSgpIDogaW52ZW50b3J5LnNob3coKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoY2hyb25vLmlzUnVubmluZygpICYmIGludmVudG9yeS5pc1Zpc2libGUoKSAmJiBPYmplY3QudmFsdWVzKERpcmVjdGlvbikuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xyXG4gICAgaW52ZW50b3J5Lm1vdmVDdXJzb3IoZXZlbnQua2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoaGVyby5nZXRDYW5Nb3ZlKCkgJiYgY2hyb25vLmlzUnVubmluZygpICYmICFkaWFsb2cuaXNWaXNpYmxlKCkgJiYgT2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGhlcm8ubW92ZShldmVudC5rZXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZighY2hyb25vLmlzUnVubmluZygpICYmIGRpYWxvZy5oYXZlQ2hvaWNlKCkgJiYgWyd6JywgJ3MnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBkaWFsb2cudXBkYXRlQ2hvaWNlKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleUxpc3RlbmVyKTsiLCJpbXBvcnQgeyBEaXJlY3Rpb24sIGNhbWVyYUhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlciA9IDQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSB0YWI6IGFueVtdW10gPSBbXTtcclxuICBwcml2YXRlIHNlbGVjdGVkOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKG51bGwpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWIucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZlbnRvcnknKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgbGluZUlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBsaW5lSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGxpbmVIVE1MLmlkID0gbGluZUlkeC50b1N0cmluZygpO1xyXG5cclxuICAgICAgbGluZS5mb3JFYWNoKChfLCBpdGVtSWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGl0ZW1IVE1MLmlkID0gYCR7bGluZUlkeH0tJHtpdGVtSWR4fWA7XHJcbiAgICAgICAgbGluZUhUTUwuYXBwZW5kQ2hpbGQoaXRlbUhUTUwpO1xyXG4gICAgICB9KVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmVIVE1MKTtcclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC5pZCA9ICdpbnZlbnRvcnknO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3l9LSR7eH1gKVxyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRoaXMudGFiW3ldW3hdKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gdGhpcy50YWJbeV1beF07XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLmFkZFNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgYWRkT2JqZWN0KG9iamVjdDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgaXNVcGRhdGUgPSBmYWxzZTtcclxuICAgIGxldCBwb3NpdGlvbjogYW55ID0ge3g6IDAsIHk6IDAsIGl0ZW06IG51bGx9XHJcblxyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBpZihpc1VwZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgbGluZS5mb3JFYWNoKChpdGVtLCBpZHhJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYoaXNVcGRhdGUpIHJldHVybjtcclxuICAgICAgICBpZihpdGVtID09PSBudWxsKSB7XHJcbiAgICAgICAgICBwb3NpdGlvbiA9IHt4OiBpZHhJdGVtLCB5OiBpZHhMaW5lLCBpdGVtOiBvYmplY3R9XHJcbiAgICAgICAgICBpc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnRhYltwb3NpdGlvbi55XVtwb3NpdGlvbi54XSA9IHBvc2l0aW9uLml0ZW07XHJcbiAgICB0aGlzLnVwZGF0ZShwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIGFkZFNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBsaW5lLmZvckVhY2goKF8sIGlkeEl0ZW0pID0+IHtcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPT09IGlkeEl0ZW0gJiYgdGhpcy5zZWxlY3RlZC55ID09PSBpZHhMaW5lKSB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR4TGluZX0tJHtpZHhJdGVtfWApO1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBsaW5lLmZvckVhY2goKF8sIGlkeEl0ZW0pID0+IHtcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPT09IGlkeEl0ZW0gJiYgdGhpcy5zZWxlY3RlZC55ID09PSBpZHhMaW5lKSB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR4TGluZX0tJHtpZHhJdGVtfWApO1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG1vdmVDdXJzb3Ioa2V5OiBEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoKTtcclxuXHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueSA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnggLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA8IHRoaXMud2lkdGggLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC55IDwgdGhpcy5oZWlnaHQgLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRTZWxlY3RlZCgpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuL2NoYXJhY3Rlcic7XHJcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQTkogZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gIHByaXZhdGUgcm91dGluZTogYW55O1xyXG4gIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVudEFjdGlvbjogYW55O1xyXG4gIHByaXZhdGUgY3VycmVudERpYWxvZzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJvdXRpbmU6IGFueSkge1xyXG4gICAgc3VwZXIoJ3BuaicsIHRvcCwgbGVmdCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5yb3V0aW5lID0gcm91dGluZTtcclxuICAgIHRoaXMuY3VycmVudERpYWxvZyA9IDA7XHJcbiAgfVxyXG5cclxuICBkb1JvdXRpbmUodGltZTogc3RyaW5nKSB7XHJcbiAgICBpZihPYmplY3Qua2V5cyh0aGlzLnJvdXRpbmUpLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpYWxvZyA9IDA7XHJcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMucm91dGluZVt0aW1lXTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50QWN0aW9uLnRleHQpO1xyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY3VycmVudEFjdGlvbi5wb3NpdGlvbi50b3AsIHRoaXMuY3VycmVudEFjdGlvbi5wb3NpdGlvbi5sZWZ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnRlcmFjdChkaWFsb2c6IERpYWxvZykge1xyXG4gICAgaWYoZGlhbG9nLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2cubGVuZ3RoLCB0aGlzLmN1cnJlbnREaWFsb2cpXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2cubGVuZ3RoID4gdGhpcy5jdXJyZW50RGlhbG9nKSB7XHJcbiAgICAgICAgaWYoZGlhbG9nLmhhdmVDaG9pY2UoKSkge1xyXG4gICAgICAgICAgZGlhbG9nLnVwZGF0ZSh0aGlzLmN1cnJlbnRBY3Rpb24uZGlhbG9nW3RoaXMuY3VycmVudERpYWxvZ11bZGlhbG9nLmdldENob2ljZSgpXSk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2crKztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBkaWFsb2cudXBkYXRlKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2dbdGhpcy5jdXJyZW50RGlhbG9nXS50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uLmRpYWxvZ1t0aGlzLmN1cnJlbnREaWFsb2ddPy5jaG9pY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgIGRpYWxvZy5hZGRDaG9pY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2crKztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2cgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlhbG9nLnVwZGF0ZSh0aGlzLmN1cnJlbnRBY3Rpb24uZGlhbG9nW3RoaXMuY3VycmVudERpYWxvZ10udGV4dCk7XHJcbiAgICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudERpYWxvZysrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZShmaW5hbFRvcDogbnVtYmVyLCBmaW5hbExlZnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3RlcHMgPSA2NCAqIDI7XHJcbiAgICBjb25zdCBmaW5Ub3AgPSBmaW5hbFRvcCAqIDIgKiA2NFxyXG4gICAgY29uc3QgZmluVExlZnQgPSBmaW5hbExlZnQgKiAyICogNjRcclxuICAgIFxyXG4gICAgY29uc3Qgd2FsayA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3AoKTtcclxuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xyXG5cclxuICAgICAgaWYodG9wID09PSBmaW5Ub3AgJiYgbGVmdCA9PT0gZmluVExlZnQpIHsgY2xlYXJJbnRlcnZhbCh3YWxrKSB9XHJcblxyXG4gICAgICBpZih0b3AgPCBmaW5Ub3AgJiYgIXRoaXMuY29saWRlKHRvcCArIHN0ZXBzLCBsZWZ0KSkge1xyXG4gICAgICAgIHN1cGVyLnNldFRvcCh0b3AgKyBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodG9wID4gZmluVG9wICYmICF0aGlzLmNvbGlkZSh0b3AgLSBzdGVwcywgbGVmdCkpIHtcclxuICAgICAgICBzdXBlci5zZXRUb3AodG9wIC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPCBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0ICsgc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0ICsgc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPiBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0IC0gc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0IC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMClcclxuXHJcbiAgfVxyXG5cclxuICBnZXRBY3Rpb24oKSB7IHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb24gfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBtYXBIVE1MIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDpzdHJpbmcpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoLi4ucGFyYW1ldGVyczogYW55W10pIHsgXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSBwYXJhbWV0ZXJzWzFdO1xyXG4gICAgICB0aGlzLmxlZnQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2l6ZSA9IDY0ICA7XHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMubGVmdH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoZGlhbG9nOiBEaWFsb2cpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgIG1hcEhUTUwucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgZGlhbG9nLnVwZGF0ZShgVm91cyBhdmV6IHRyb3V2w6kgdW4gJHt0aGlzLmlkfSAhYClcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWQgfVxyXG4gIGdldFNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=