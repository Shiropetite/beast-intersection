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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n  z-index: 1000;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.caillou {\r\n  background-color: grey;\r\n}\r\n\r\n#caillou {\r\n  position: absolute;\r\n  background-color: grey;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n  color: black\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,+CAA+C;AACjD;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB;AACF;;AAEA;EACE,0BAA0B;EAC1B,yDAAuC;EACvC,qBAAqB;EACrB,kCAAkC;EAClC,mCAAmC;EACnC,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC;AACF","sourcesContent":[":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(./assets/map.png);\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n  z-index: 1000;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.caillou {\r\n  background-color: grey;\r\n}\r\n\r\n#caillou {\r\n  position: absolute;\r\n  background-color: grey;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n  color: black\r\n}"],"sourceRoot":""}]);
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
        return _super.call(this, 'hero') || this;
    }
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
/* harmony export */   "cameraHTML": () => (/* binding */ cameraHTML),
/* harmony export */   "colisions": () => (/* binding */ colisions),
/* harmony export */   "interact": () => (/* binding */ interact),
/* harmony export */   "isColliding": () => (/* binding */ isColliding),
/* harmony export */   "mapHTML": () => (/* binding */ mapHTML),
/* harmony export */   "routine": () => (/* binding */ routine)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero.ts");
/* harmony import */ var _pnj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pnj */ "./src/pnj.ts");
/* harmony import */ var _chrono__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrono */ "./src/chrono.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog */ "./src/dialog.ts");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory */ "./src/inventory.ts");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource */ "./src/resource.ts");

// Game






// routine
var nookRoutine = __webpack_require__(/*! ./characters/nook/first-routine.json */ "./src/characters/nook/first-routine.json");
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
    if (chrono.isRunning() && !dialog.isVisible() && Object.values(Direction).includes(event.key)) {
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

module.exports = __webpack_require__.p + "f5d4d2f9df0ba73af1e8.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLDBCQUFPLEdBQVAsVUFBUSxJQUFZLElBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRW5ELGVBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvY2hyb25vLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2hlcm8udHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9pbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3Buai50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvcmVzb3VyY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21hcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXBpeGVsLXNpemU6IDJweDtcXHJcXG4gIC0tZ3JpZC1jZWxsOiBjYWxjKCB2YXIoLS1waXhlbC1zaXplKSAqIDIgKiAzMiApO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjksIDM1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jYW1lcmEge1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtY2VsbCkgKiA1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZVxcclxcbn1cXHJcXG5cXHJcXG4ubWFwIHtcXHJcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDE2ICogdmFyKC0tZ3JpZC1jZWxsKSk7IFxcclxcbiAgaGVpZ2h0OiBjYWxjKDEwICogdmFyKC0tZ3JpZC1jZWxsKSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbiNoZXJvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcG5qIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjU1LCAxODQpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jYWlsbG91IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNjYWlsbG91IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9ubyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW52ZW50b3J5IHtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgYm90dG9tOiAzMHB4O1xcclxcbiAgYm90dG9tOiBjYWxjKDY0ICogMilweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBicm93bjtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAxNTApO1xcclxcbiAgY29sb3I6IGJsYWNrXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5REFBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXBpeGVsLXNpemU6IDJweDtcXHJcXG4gIC0tZ3JpZC1jZWxsOiBjYWxjKCB2YXIoLS1waXhlbC1zaXplKSAqIDIgKiAzMiApO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjksIDM1KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jYW1lcmEge1xcclxcbiAgd2lkdGg6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDkpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWdyaWQtY2VsbCkgKiA1KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZVxcclxcbn1cXHJcXG5cXHJcXG4ubWFwIHtcXHJcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL21hcC5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTYgKiB2YXIoLS1ncmlkLWNlbGwpKTsgXFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAgKiB2YXIoLS1ncmlkLWNlbGwpKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbiNwbmoge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCAyNTUsIDE4NCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhaWxsb3Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhaWxsb3Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb25vIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNpbnZlbnRvcnkge1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDMwcHg7XFxyXFxuICBib3R0b206IGNhbGMoNjQgKiAyKXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGJyb3duO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDE1MCk7XFxyXFxuICBjb2xvcjogYmxhY2tcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbGlzaW9ucywgaXNDb2xsaWRpbmcsIG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKC4uLnBhcmFtZXRlcnM6IGFueVtdKSB7IFxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy50eXBlID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLnR5cGUgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gNjQgKiAyIC0gNjtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMudHlwZTtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50eXBlKTtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAke3RoaXMubGVmdH1weCwgJHt0aGlzLnRvcH1weCwgMCApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29saWRlKHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpIHtcclxuICAgIGxldCBpc0NvbGlzaW9uID0gZmFsc2U7XHJcbiAgICBjb2xpc2lvbnMuZm9yRWFjaCgoY29saXNpb24pID0+IHtcclxuICAgICAgaWYoaXNDb2xpc2lvbiA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNvbGlzaW9uPy53aWR0aCA/PyBjb2xpc2lvbj8uc2l6ZVxyXG4gICAgICBjb25zdCBoZWlnaHQgPSBjb2xpc2lvbj8uaGVpZ2h0ID8/IGNvbGlzaW9uPy5zaXplXHJcblxyXG4gICAgICBpc0NvbGlzaW9uID0gaXNDb2xsaWRpbmcodG9wLCBsZWZ0LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgY29saXNpb24udG9wLCBjb2xpc2lvbi5sZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNDb2xpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjYW1lcmFIVE1MLCByb3V0aW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lcjtcclxuICBwcml2YXRlIGhvdXI6IG51bWJlcjtcclxuICBwcml2YXRlIG1pbnV0ZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhvdXIgPSA1O1xyXG4gICAgdGhpcy5taW51dGUgPSA1MDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hyb25vXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiY2hyb25vXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nocm9ubycpO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHsgXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5taW51dGUgPT09IDUwKSB7XHJcbiAgICAgICAgaWYodGhpcy5ob3VyID09PSAyMykge1xyXG4gICAgICAgICAgdGhpcy5ob3VyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhvdXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW51dGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWludXRlICs9IDEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICByb3V0aW5lKHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIFxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7IFxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTsgXHJcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzUnVubmluZygpIHsgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgIT09IG51bGwgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IGhvdXIgPSBgJHt0aGlzLmhvdXIgPCAxMCA/ICcwJyA6ICcnfSR7dGhpcy5ob3VyfWA7XHJcbiAgICBjb25zdCBtaW51dGUgPSBgJHt0aGlzLm1pbnV0ZSA8IDEwID8gJzAnIDogJyd9JHt0aGlzLm1pbnV0ZX1gO1xyXG4gICAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfWA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY2FtZXJhSFRNTCB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBQTkogfSBmcm9tICcuL3Buaic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNob2ljZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dcIik7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmNob2ljZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImRpYWxvZ1wiXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIHRoaXMuY2hvaWNlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGFkZENob2ljZSgpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGRpdiBpZD0nb3VpJz4tIE91aTwvZGl2PlwiXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCArPSBcIjxkaXYgaWQ9J25vbic+Tm9uPC9kaXY+XCJcclxuICAgIHRoaXMuY2hvaWNlID0gJ3llcydcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNob2ljZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgeWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291aScpO1xyXG4gICAgY29uc3Qgbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9uJyk7XHJcbiAgXHJcbiAgICBpZihrZXkgPT09ICd6JykgeyBcclxuICAgICAgeWVzLmlubmVySFRNTCA9ICctIE91aSc7XHJcbiAgICAgIG5vLmlubmVySFRNTCA9ICdOb24nO1xyXG4gICAgICB0aGlzLmNob2ljZSA9ICd5ZXMnXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgeWVzLmlubmVySFRNTCA9ICdPdWknO1xyXG4gICAgICBuby5pbm5lckhUTUwgPSAnLSBOb24nO1xyXG4gICAgICB0aGlzLmNob2ljZSA9ICdubydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENob2ljZSgpIHsgcmV0dXJuIHRoaXMuY2hvaWNlIH1cclxuXHJcbiAgaGF2ZUNob2ljZSgpIHsgcmV0dXJuIHRoaXMuY2hvaWNlICE9PSBudWxsIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaXNWaXNpYmxlKCkgeyBcclxuICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aW9ufSBmcm9tICcuJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdoZXJvJyk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGtleTogRGlyZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzdGVwID0gNjQgKiAyO1xyXG4gICAgbGV0IHRvcCA9IHN1cGVyLmdldFRvcCgpO1xyXG4gICAgbGV0IGxlZnQgPSBzdXBlci5nZXRMZWZ0KCk7XHJcbiAgICBcclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgdG9wIC09IHN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgbGVmdCAtPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICBsZWZ0ICs9IHN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XHJcbiAgICAgICAgdG9wICs9IHN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuY29saWRlKHRvcCwgbGVmdCkpIHtcclxuICAgICAgdGhpcy5zZXRUb3AodG9wKTtcclxuICAgICAgdGhpcy5zZXRMZWZ0KGxlZnQpO1xyXG5cclxuICAgICAgY29uc3QgbWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gICAgICBtYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAkey1sZWZ0ICsgKDY0ICogOCl9cHgsICR7LXRvcCArICg2NCAqIDQpfXB4LCAwIClgO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc3VwZXIudXBkYXRlKCk7ICBcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gR2FtZVxyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgUE5KIH0gZnJvbSAnLi9wbmonO1xyXG5pbXBvcnQgeyBDaHJvbm8gfSBmcm9tICcuL2Nocm9ubyc7XHJcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcclxuaW1wb3J0IHsgSW52ZW50b3J5IH0gZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vcmVzb3VyY2UnO1xyXG5cclxuLy8gcm91dGluZVxyXG5jb25zdCBub29rUm91dGluZSA9IHJlcXVpcmUoJy4vY2hhcmFjdGVycy9ub29rL2ZpcnN0LXJvdXRpbmUuanNvbicpO1xyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICBVUD0neicsXHJcbiAgTEVGVD0ncScsXHJcbiAgUklHSFQ9J2QnLFxyXG4gIERPV049J3MnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleSB7XHJcbiAgLy8gYWN0aW9uc1xyXG4gIFBBVVNFPSdwJyxcclxuICBJTlRFUkFDVD0nZScsXHJcbiAgSU5WRU5UT1JZPSdpJyxcclxuICAvLyBkaXJlY3Rpb25cclxuICBVUD0neicsXHJcbiAgTEVGVD0ncScsXHJcbiAgUklHSFQ9J2QnLFxyXG4gIERPV049J3MnXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY2FtZXJhSFRNTDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5leHBvcnQgbGV0IG1hcEhUTUw6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxubGV0IGNocm9ubzogQ2hyb25vID0gbnVsbDtcclxubGV0IGRpYWxvZzogRGlhbG9nID0gbnVsbDtcclxubGV0IGludmVudG9yeTogSW52ZW50b3J5ID0gbnVsbDtcclxuXHJcbmxldCBoZXJvOiBIZXJvID0gbnVsbDtcclxubGV0IG5vb2s6IFBOSiA9IG51bGw7XHJcbmNvbnN0IHBuanM6IFBOSltdID0gW107XHJcbmNvbnN0IHJlc3NvdXJjZXM6IFJlc291cmNlW10gPSBbXVxyXG5leHBvcnQgY29uc3QgY29saXNpb25zOiBhbnlbXSA9IFtcclxuICAvLyBtdXIgZGUgZ2F1Y2hlXHJcbiAge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiA2NCAqIDIgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgKiAxMFxyXG4gIH0sXHJcbiAgLy8gbXVyIGR1IGhhdXRcclxuICB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiA2NCAqIDIsXHJcbiAgICB3aWR0aDogNjQgKiAyICogMTQgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgXHJcbiAgfSAsXHJcbiAgLy8gbXVyIGRlIGRyb2l0ZVxyXG4gIHtcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDY0ICogMiAqIDE1LFxyXG4gICAgd2lkdGg6IDY0ICogMixcclxuICAgIGhlaWdodDogNjQgKiAyICogMTBcclxuICB9LFxyXG4gIC8vIG11ciBkdSBiYXNcclxuICB7XHJcbiAgICB0b3A6IDY0ICogMiAqIDksXHJcbiAgICBsZWZ0OiA2NCAqIDIsXHJcbiAgICB3aWR0aDogNjQgKiAyICogMTQgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgXHJcbiAgfSAsXHJcbl07XHJcblxyXG5sZXQgZGlhbG9nT3BlbjogYW55ID0gbnVsbFxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVyYWN0ID0gKCkgPT4ge1xyXG4gIGxldCBpc0FjdGlvbiA9IGZhbHNlO1xyXG4gIHBuanMuZm9yRWFjaCgocG5qKSA9PiB7XHJcbiAgICBjb25zdCBjb2xsaWRlID0gaXNDb2xsaWRpbmcoaGVyby5nZXRUb3AoKSwgaGVyby5nZXRMZWZ0KCksIGhlcm8uZ2V0U2l6ZSgpLCBoZXJvLmdldFNpemUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbmouZ2V0VG9wKCkgLSAoNjQgKiAyKSwgcG5qLmdldExlZnQoKSAtICg2NCAqIDIpLCBwbmouZ2V0U2l6ZSgpICsgKDY0ICogMiAqIDIpLCBwbmouZ2V0U2l6ZSgpICsgKDY0ICogMiAqIDIpKTtcclxuICAgIGlmKGNvbGxpZGUgJiYgISFwbmouZ2V0QWN0aW9uKCkpIHtcclxuICAgICAgcG5qLmludGVyYWN0KGRpYWxvZyk7XHJcbiAgICAgIGRpYWxvZ09wZW4gPSBwbmpcclxuICAgICAgY2hyb25vLnN0b3AoKTtcclxuICAgICAgaXNBY3Rpb24gPSB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYoaXNBY3Rpb24pIHJldHVybjtcclxuXHJcbiAgcmVzc291cmNlcy5mb3JFYWNoKChyZXNzb3VyY2UpID0+IHtcclxuICAgIGNvbnN0IGNvbGxpZGUgPSBpc0NvbGxpZGluZyhoZXJvLmdldFRvcCgpLCBoZXJvLmdldExlZnQoKSwgaGVyby5nZXRTaXplKCksIGhlcm8uZ2V0U2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3NvdXJjZS5nZXRUb3AoKSwgcmVzc291cmNlLmdldExlZnQoKSwgcmVzc291cmNlLmdldFNpemUoKSwgcmVzc291cmNlLmdldFNpemUoKSk7XHJcbiAgICBpZihjb2xsaWRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVm91cyByYW1hc3NleiB1biBcIiArIHJlc3NvdXJjZS5nZXRUeXBlKCkpO1xyXG4gICAgICBpbnZlbnRvcnkuYWRkT2JqZWN0KHJlc3NvdXJjZS5nZXRUeXBlKCkpXHJcbiAgICAgIHJlc3NvdXJjZS5yZW1vdmUoZGlhbG9nKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5lID0gKHRpbWU6IHN0cmluZykgPT4ge1xyXG4gIHBuanMuZm9yRWFjaCgocG5qKSA9PiB7XHJcbiAgICBwbmouZG9Sb3V0aW5lKHRpbWUpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0NvbGxpZGluZyA9ICh0b3AxOiBudW1iZXIsIGxlZnQxOiBudW1iZXIsIHdpZHRoMTogbnVtYmVyLCBoZWlnaHQxOiBudW1iZXIsIHRvcDI6IG51bWJlciwgbGVmdDI6IG51bWJlciwgd2lkdGgyOiBudW1iZXIsIGhlaWdodDI6IG51bWJlcikgPT4gXHJcbiAgKGxlZnQxICsgd2lkdGgxKSA+IGxlZnQyICYmIGxlZnQxIDwgKGxlZnQyICsgd2lkdGgyKVxyXG4gICAgJiYgKHRvcDEgKyBoZWlnaHQxKSA+IHRvcDIgJiYgdG9wMSA8ICh0b3AyICsgaGVpZ2h0Mik7XHJcblxyXG5jb25zdCBpbml0SFRNTCA9ICgpID0+IHtcclxuICBjb25zdCBjYW1lcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYW1lcmEuaWQgPSAnY2FtZXJhJztcclxuICBjYW1lcmEuY2xhc3NMaXN0LmFkZCgnY2FtZXJhJyk7XHJcblxyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hcC5pZCA9ICdtYXAnO1xyXG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcclxuXHJcbiAgY2FtZXJhLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEpOyBcclxufVxyXG5cclxuY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xyXG4gIGluaXRIVE1MKCk7XHJcbiAgXHJcbiAgY2FtZXJhSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEnKTtcclxuICBtYXBIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gIGNocm9ubyA9IG5ldyBDaHJvbm8oKTtcclxuICBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XHJcbiAgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG5cclxuICBoZXJvID0gbmV3IEhlcm8oKTtcclxuICBub29rID0gbmV3IFBOSignVG9tIE5vb2snLCA2NCAqIDIgKiAzLCA2NCAqIDIgKiAyLCBub29rUm91dGluZSk7XHJcbiAgcG5qcy5wdXNoKG5vb2spO1xyXG4gIHJlc3NvdXJjZXMucHVzaChuZXcgUmVzb3VyY2UoJ2NhaWxsb3UnLCAoNjQgKiAyICogNyArIDMwKSwgKDY0ICogMiAqIDQgKyAzMCkpKVxyXG4gIGNvbGlzaW9ucy5wdXNoKGhlcm8pO1xyXG4gIGNvbGlzaW9ucy5wdXNoKG5vb2spO1xyXG59IFxyXG5cclxuY29uc3Qga2V5TGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PT0gS2V5LlBBVVNFKSB7XHJcbiAgICBpZihjaHJvbm8uaXNSdW5uaW5nKCkpIHtcclxuICAgICAgY2hyb25vLnN0b3AoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjaHJvbm8uc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoZXZlbnQua2V5ID09PSBLZXkuSU5URVJBQ1QpIHtcclxuICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkgJiYgY2hyb25vLmlzUnVubmluZygpKSB7XHJcbiAgICAgIGludGVyYWN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpYWxvZ09wZW4gIT09IG51bGwpe1xyXG4gICAgICBkaWFsb2dPcGVuLmludGVyYWN0KGRpYWxvZylcclxuICAgICAgXHJcbiAgICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICBkaWFsb2dPcGVuID0gbnVsbDtcclxuICAgICAgICBjaHJvbm8uc3RhcnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkaWFsb2cuaXNWaXNpYmxlKCkpe1xyXG4gICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgZXZlbnQua2V5ID09PSBLZXkuSU5WRU5UT1JZKSB7XHJcbiAgICBpbnZlbnRvcnkuaXNWaXNpYmxlKCkgPyBpbnZlbnRvcnkuaGlkZSgpIDogaW52ZW50b3J5LnNob3coKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoY2hyb25vLmlzUnVubmluZygpICYmIGludmVudG9yeS5pc1Zpc2libGUoKSAmJiBPYmplY3QudmFsdWVzKERpcmVjdGlvbikuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xyXG4gICAgaW52ZW50b3J5Lm1vdmVDdXJzb3IoZXZlbnQua2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoY2hyb25vLmlzUnVubmluZygpICYmICFkaWFsb2cuaXNWaXNpYmxlKCkgJiYgT2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGhlcm8ubW92ZShldmVudC5rZXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZighY2hyb25vLmlzUnVubmluZygpICYmIGRpYWxvZy5oYXZlQ2hvaWNlKCkgJiYgWyd6JywgJ3MnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBkaWFsb2cudXBkYXRlQ2hvaWNlKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleUxpc3RlbmVyKTsiLCJpbXBvcnQgeyBEaXJlY3Rpb24sIGNhbWVyYUhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlciA9IDQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSB0YWI6IGFueVtdW10gPSBbXTtcclxuICBwcml2YXRlIHNlbGVjdGVkOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKG51bGwpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWIucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZlbnRvcnknKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgbGluZUlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBsaW5lSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGxpbmVIVE1MLmlkID0gbGluZUlkeC50b1N0cmluZygpO1xyXG5cclxuICAgICAgbGluZS5mb3JFYWNoKChfLCBpdGVtSWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGl0ZW1IVE1MLmlkID0gYCR7bGluZUlkeH0tJHtpdGVtSWR4fWA7XHJcbiAgICAgICAgbGluZUhUTUwuYXBwZW5kQ2hpbGQoaXRlbUhUTUwpO1xyXG4gICAgICB9KVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmVIVE1MKTtcclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC5pZCA9ICdpbnZlbnRvcnknO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3l9LSR7eH1gKVxyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKHRoaXMudGFiW3ldW3hdKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gdGhpcy50YWJbeV1beF07XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLmFkZFNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgYWRkT2JqZWN0KG9iamVjdDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgaXNVcGRhdGUgPSBmYWxzZTtcclxuICAgIGxldCBwb3NpdGlvbjogYW55ID0ge3g6IDAsIHk6IDAsIGl0ZW06IG51bGx9XHJcblxyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBpZihpc1VwZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgbGluZS5mb3JFYWNoKChpdGVtLCBpZHhJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYoaXNVcGRhdGUpIHJldHVybjtcclxuICAgICAgICBpZihpdGVtID09PSBudWxsKSB7XHJcbiAgICAgICAgICBwb3NpdGlvbiA9IHt4OiBpZHhJdGVtLCB5OiBpZHhMaW5lLCBpdGVtOiBvYmplY3R9XHJcbiAgICAgICAgICBpc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnRhYltwb3NpdGlvbi55XVtwb3NpdGlvbi54XSA9IHBvc2l0aW9uLml0ZW07XHJcbiAgICB0aGlzLnVwZGF0ZShwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIGFkZFNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBsaW5lLmZvckVhY2goKF8sIGlkeEl0ZW0pID0+IHtcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPT09IGlkeEl0ZW0gJiYgdGhpcy5zZWxlY3RlZC55ID09PSBpZHhMaW5lKSB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR4TGluZX0tJHtpZHhJdGVtfWApO1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgaWR4TGluZSkgPT4ge1xyXG4gICAgICBsaW5lLmZvckVhY2goKF8sIGlkeEl0ZW0pID0+IHtcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPT09IGlkeEl0ZW0gJiYgdGhpcy5zZWxlY3RlZC55ID09PSBpZHhMaW5lKSB7XHJcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR4TGluZX0tJHtpZHhJdGVtfWApO1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG1vdmVDdXJzb3Ioa2V5OiBEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoKTtcclxuXHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueSA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnggLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA8IHRoaXMud2lkdGggLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC55IDwgdGhpcy5oZWlnaHQgLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRTZWxlY3RlZCgpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuL2NoYXJhY3Rlcic7XHJcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQTkogZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gIHByaXZhdGUgcm91dGluZTogYW55O1xyXG4gIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVudEFjdGlvbjogYW55O1xyXG4gIHByaXZhdGUgY3VycmVudERpYWxvZzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJvdXRpbmU6IGFueSkge1xyXG4gICAgc3VwZXIoJ3BuaicsIHRvcCwgbGVmdCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5yb3V0aW5lID0gcm91dGluZTtcclxuICAgIHRoaXMuY3VycmVudERpYWxvZyA9IDA7XHJcbiAgfVxyXG5cclxuICBkb1JvdXRpbmUodGltZTogc3RyaW5nKSB7XHJcbiAgICBpZihPYmplY3Qua2V5cyh0aGlzLnJvdXRpbmUpLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpYWxvZyA9IDA7XHJcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMucm91dGluZVt0aW1lXTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50QWN0aW9uLnRleHQpO1xyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY3VycmVudEFjdGlvbi5wb3NpdGlvbi50b3AsIHRoaXMuY3VycmVudEFjdGlvbi5wb3NpdGlvbi5sZWZ0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnRlcmFjdChkaWFsb2c6IERpYWxvZykge1xyXG4gICAgaWYoZGlhbG9nLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2cubGVuZ3RoLCB0aGlzLmN1cnJlbnREaWFsb2cpXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2cubGVuZ3RoID4gdGhpcy5jdXJyZW50RGlhbG9nKSB7XHJcbiAgICAgICAgaWYoZGlhbG9nLmhhdmVDaG9pY2UoKSkge1xyXG4gICAgICAgICAgZGlhbG9nLnVwZGF0ZSh0aGlzLmN1cnJlbnRBY3Rpb24uZGlhbG9nW3RoaXMuY3VycmVudERpYWxvZ11bZGlhbG9nLmdldENob2ljZSgpXSk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2crKztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBkaWFsb2cudXBkYXRlKHRoaXMuY3VycmVudEFjdGlvbi5kaWFsb2dbdGhpcy5jdXJyZW50RGlhbG9nXS50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50QWN0aW9uLmRpYWxvZ1t0aGlzLmN1cnJlbnREaWFsb2ddPy5jaG9pY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgIGRpYWxvZy5hZGRDaG9pY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2crKztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWFsb2cgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlhbG9nLnVwZGF0ZSh0aGlzLmN1cnJlbnRBY3Rpb24uZGlhbG9nW3RoaXMuY3VycmVudERpYWxvZ10udGV4dCk7XHJcbiAgICAgIGRpYWxvZy5zaG93KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudERpYWxvZysrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZShmaW5hbFRvcDogbnVtYmVyLCBmaW5hbExlZnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3RlcHMgPSA2NCAqIDI7XHJcbiAgICBjb25zdCBmaW5Ub3AgPSBmaW5hbFRvcCAqIDIgKiA2NFxyXG4gICAgY29uc3QgZmluVExlZnQgPSBmaW5hbExlZnQgKiAyICogNjRcclxuICAgIFxyXG4gICAgY29uc3Qgd2FsayA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3AoKTtcclxuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xyXG5cclxuICAgICAgaWYodG9wID09PSBmaW5Ub3AgJiYgbGVmdCA9PT0gZmluVExlZnQpIHsgY2xlYXJJbnRlcnZhbCh3YWxrKSB9XHJcblxyXG4gICAgICBpZih0b3AgPCBmaW5Ub3AgJiYgIXRoaXMuY29saWRlKHRvcCArIHN0ZXBzLCBsZWZ0KSkge1xyXG4gICAgICAgIHN1cGVyLnNldFRvcCh0b3AgKyBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodG9wID4gZmluVG9wICYmICF0aGlzLmNvbGlkZSh0b3AgLSBzdGVwcywgbGVmdCkpIHtcclxuICAgICAgICBzdXBlci5zZXRUb3AodG9wIC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPCBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0ICsgc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0ICsgc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPiBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0IC0gc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0IC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMClcclxuXHJcbiAgfVxyXG5cclxuICBnZXRBY3Rpb24oKSB7IHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb24gfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBtYXBIVE1MIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDpzdHJpbmcpO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoLi4ucGFyYW1ldGVyczogYW55W10pIHsgXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSBwYXJhbWV0ZXJzWzFdO1xyXG4gICAgICB0aGlzLmxlZnQgPSBwYXJhbWV0ZXJzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2l6ZSA9IDY0ICA7XHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMubGVmdH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoZGlhbG9nOiBEaWFsb2cpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgIG1hcEhUTUwucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgZGlhbG9nLnVwZGF0ZShgVm91cyBhdmV6IHRyb3V2w6kgdW4gJHt0aGlzLmlkfSAhYClcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWQgfVxyXG4gIGdldFNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=