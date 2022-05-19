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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,+CAA+C;AACjD;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB;AACF;;AAEA;EACE,0BAA0B;EAC1B,yDAAuC;EACvC,qBAAqB;EACrB,kCAAkC;EAClC,mCAAmC;EACnC,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":[":root {\r\n  --pixel-size: 2px;\r\n  --grid-cell: calc( var(--pixel-size) * 2 * 32 );\r\n}\r\n\r\nbody {\r\n  background-color: rgb(24, 29, 35);\r\n  font-family: Arial;\r\n  font-size: 14px;\r\n  color: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.camera {\r\n  width: calc(var(--grid-cell) * 9);\r\n  height: calc(var(--grid-cell) * 5);\r\n  overflow: hidden;\r\n  background: #000000;\r\n  position:relative;\r\n  border: solid 3px white\r\n}\r\n\r\n.map {\r\n  image-rendering: pixelated;\r\n  background-image: url(./assets/map.png);\r\n  background-size: 100%;\r\n  width: calc(16 * var(--grid-cell)); \r\n  height: calc(10 * var(--grid-cell));\r\n  position: relative;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#hero {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n#pnj {\r\n  position: absolute;\r\n  background-color: rgb(43, 255, 184);\r\n  border: solid 3px black;\r\n  transition: all linear 0.1s;\r\n}\r\n\r\n.chrono {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.dialog {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: 20px;\r\n  padding: 10px 20px;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n#inventory {\r\n  z-index: 9999;\r\n  position: absolute;\r\n  background-color: rgb(208, 110, 75);\r\n  border: solid 5px brown;\r\n  border-radius: 6px;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  bottom: calc(64 * 2)px;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\ntd {\r\n  border: solid 1px brown;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.selected {\r\n  background-color: rgb(255, 255, 150);\r\n}"],"sourceRoot":""}]);
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
        this.currentLine = 0;
        this.choice = null;
    }
    Dialog.prototype.create = function () {
        var element = document.createElement("div");
        element.id = "dialog";
        element.classList.add('dialog');
        ___WEBPACK_IMPORTED_MODULE_0__.cameraHTML.appendChild(element);
    };
    Dialog.prototype.interact = function (pnj) {
        this.pnj = pnj;
        var currentDialog = this.pnj.getAction().dialog;
        if (currentDialog) {
            if (!this.isVisible())
                this.show();
            if (this.currentLine === currentDialog.length) {
                this.hide();
                return;
            }
            var line = currentDialog[this.currentLine];
            if (this.haveChoice()) {
                this.htmlElement.innerHTML = line[this.choice];
                this.choice = null;
                this.currentLine++;
                return;
            }
            else {
                this.htmlElement.innerHTML = line.text;
            }
            if (line.choice) {
                this.addChoice();
            }
            else {
                this.currentLine++;
            }
        }
        else {
            if (this.isVisible()) {
                this.hide();
            }
        }
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
    Dialog.prototype.haveChoice = function () { return this.choice !== null; };
    Dialog.prototype.show = function () {
        this.htmlElement.style.display = 'block';
    };
    Dialog.prototype.hide = function () {
        this.htmlElement.style.display = 'none';
        this.pnj = null;
        this.currentLine = 0;
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
        left: 0,
        width: 64 * 2 * 14 - 6,
        height: 64 * 2
    },
];
var dialogOpen = null;
var interact = function () {
    pnjs.forEach(function (pnj) {
        var collide = isColliding(hero.getTop(), hero.getLeft(), hero.getSize(), hero.getSize(), pnj.getTop() - (64 * 2), pnj.getLeft() - (64 * 2), pnj.getSize() + (64 * 2 * 2), pnj.getSize() + (64 * 2 * 2));
        if (collide) {
            dialog.interact(pnj);
            dialogOpen = pnj;
            chrono.stop();
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
            dialog.interact(dialogOpen);
            if (!dialog.isVisible()) {
                dialogOpen = null;
                chrono.start();
            }
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
                line.push({});
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
        return _this;
    }
    PNJ.prototype.doRoutine = function (time) {
        if (Object.keys(this.routine).includes(time)) {
            this.currentAction = this.routine[time];
            console.log(this.currentAction.text);
            if (this.currentAction.position) {
                this.move(this.currentAction.position.top, this.currentAction.position.left);
            }
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

/***/ "./src/assets/map.png":
/*!****************************!*\
  !*** ./src/assets/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea5454bb3de0f4a6e399.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO2FBQ1I7WUFFRCxJQUFHLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xELGlCQUFNLE1BQU0sYUFBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsT0FBTzthQUNSO1lBRUQsSUFBRyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNyRCxpQkFBTSxPQUFPLGFBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE9BQU87YUFDUjtZQUVELElBQUcsSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDckQsaUJBQU0sT0FBTyxhQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7UUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRVQsQ0FBQztJQUVELHVCQUFTLEdBQVQsY0FBYyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQztJQUMzQyxVQUFDO0FBQUQsQ0FBQyxDQTdEd0IsaURBQVMsR0E2RGpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvY2hyb25vLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2hlcm8udHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9pbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3Buai50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWFwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tcGl4ZWwtc2l6ZTogMnB4O1xcclxcbiAgLS1ncmlkLWNlbGw6IGNhbGMoIHZhcigtLXBpeGVsLXNpemUpICogMiAqIDMyICk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOSwgMzUpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbWVyYSB7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogOSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlXFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTYgKiB2YXIoLS1ncmlkLWNlbGwpKTsgXFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAgKiB2YXIoLS1ncmlkLWNlbGwpKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI3BuaiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDI1NSwgMTg0KTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb25vIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNpbnZlbnRvcnkge1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDMwcHg7XFxyXFxuICBib3R0b206IGNhbGMoNjQgKiAyKXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGJyb3duO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDE1MCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5REFBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcGl4ZWwtc2l6ZTogMnB4O1xcclxcbiAgLS1ncmlkLWNlbGw6IGNhbGMoIHZhcigtLXBpeGVsLXNpemUpICogMiAqIDMyICk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOSwgMzUpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbWVyYSB7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogOSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlXFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWFwLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxNiAqIHZhcigtLWdyaWQtY2VsbCkpOyBcXHJcXG4gIGhlaWdodDogY2FsYygxMCAqIHZhcigtLWdyaWQtY2VsbCkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jcG5qIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjU1LCAxODQpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ludmVudG9yeSB7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJvdHRvbTogMzBweDtcXHJcXG4gIGJvdHRvbTogY2FsYyg2NCAqIDIpcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggYnJvd247XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTUwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbGlzaW9ucywgaXNDb2xsaWRpbmcsIG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKC4uLnBhcmFtZXRlcnM6IGFueVtdKSB7IFxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy50eXBlID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLnR5cGUgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gNjQgKiAyIC0gNjtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMudHlwZTtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50eXBlKTtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAke3RoaXMubGVmdH1weCwgJHt0aGlzLnRvcH1weCwgMCApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29saWRlKHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpIHtcclxuICAgIGxldCBpc0NvbGlzaW9uID0gZmFsc2U7XHJcbiAgICBjb2xpc2lvbnMuZm9yRWFjaCgoY29saXNpb24pID0+IHtcclxuICAgICAgaWYoaXNDb2xpc2lvbiA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNvbGlzaW9uPy53aWR0aCA/PyBjb2xpc2lvbj8uc2l6ZVxyXG4gICAgICBjb25zdCBoZWlnaHQgPSBjb2xpc2lvbj8uaGVpZ2h0ID8/IGNvbGlzaW9uPy5zaXplXHJcblxyXG4gICAgICBpc0NvbGlzaW9uID0gaXNDb2xsaWRpbmcodG9wLCBsZWZ0LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgY29saXNpb24udG9wLCBjb2xpc2lvbi5sZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNDb2xpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG5cclxuICBnZXRUb3AoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcbiAgc2V0VG9wKHRvcDogbnVtYmVyKTogdm9pZCB7IHRoaXMudG9wID0gdG9wOyB9XHJcblxyXG4gIGdldExlZnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gIHNldExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7IHRoaXMubGVmdCA9IGxlZnQ7IH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjYW1lcmFIVE1MLCByb3V0aW5lIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IE5vZGVKUy5UaW1lcjtcclxuICBwcml2YXRlIGhvdXI6IG51bWJlcjtcclxuICBwcml2YXRlIG1pbnV0ZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhvdXIgPSA1O1xyXG4gICAgdGhpcy5taW51dGUgPSA1MDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hyb25vXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiY2hyb25vXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nocm9ubycpO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHsgXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5taW51dGUgPT09IDUwKSB7XHJcbiAgICAgICAgaWYodGhpcy5ob3VyID09PSAyMykge1xyXG4gICAgICAgICAgdGhpcy5ob3VyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmhvdXIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW51dGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWludXRlICs9IDEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICByb3V0aW5lKHRoaXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIFxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7IFxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTsgXHJcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzUnVubmluZygpIHsgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgIT09IG51bGwgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IGhvdXIgPSBgJHt0aGlzLmhvdXIgPCAxMCA/ICcwJyA6ICcnfSR7dGhpcy5ob3VyfWA7XHJcbiAgICBjb25zdCBtaW51dGUgPSBgJHt0aGlzLm1pbnV0ZSA8IDEwID8gJzAnIDogJyd9JHt0aGlzLm1pbnV0ZX1gO1xyXG4gICAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfWA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY2FtZXJhSFRNTCB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBQTkogfSBmcm9tICcuL3Buaic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHBuajogUE5KO1xyXG4gIHByaXZhdGUgY3VycmVudExpbmU6IG51bWJlcjtcclxuICBwcml2YXRlIGNob2ljZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWFsb2dcIik7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gMDtcclxuICAgIHRoaXMuY2hvaWNlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiZGlhbG9nXCJcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XHJcbiAgICBjYW1lcmFIVE1MLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJhY3QocG5qOiBQTkopIHtcclxuICAgIHRoaXMucG5qID0gcG5qO1xyXG4gICAgY29uc3QgY3VycmVudERpYWxvZyA9IHRoaXMucG5qLmdldEFjdGlvbigpLmRpYWxvZztcclxuXHJcbiAgICBpZihjdXJyZW50RGlhbG9nKSB7XHJcbiAgICAgIGlmKCF0aGlzLmlzVmlzaWJsZSgpKSB0aGlzLnNob3coKTtcclxuICAgICAgaWYodGhpcy5jdXJyZW50TGluZSA9PT0gY3VycmVudERpYWxvZy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSBjdXJyZW50RGlhbG9nW3RoaXMuY3VycmVudExpbmVdO1xyXG4gICAgICBpZih0aGlzLmhhdmVDaG9pY2UoKSkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gbGluZVt0aGlzLmNob2ljZV07XHJcbiAgICAgICAgdGhpcy5jaG9pY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExpbmUrKztcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCA9IGxpbmUudGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYobGluZS5jaG9pY2UpIHtcclxuICAgICAgICB0aGlzLmFkZENob2ljZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExpbmUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKHRoaXMuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ2hvaWNlKCkge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgKz0gXCI8ZGl2IGlkPSdvdWknPi0gT3VpPC9kaXY+XCJcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MICs9IFwiPGRpdiBpZD0nbm9uJz5Ob248L2Rpdj5cIlxyXG4gICAgdGhpcy5jaG9pY2UgPSAneWVzJ1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hvaWNlKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB5ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3VpJyk7XHJcbiAgICBjb25zdCBubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub24nKTtcclxuICBcclxuICAgIGlmKGtleSA9PT0gJ3onKSB7IFxyXG4gICAgICB5ZXMuaW5uZXJIVE1MID0gJy0gT3VpJztcclxuICAgICAgbm8uaW5uZXJIVE1MID0gJ05vbic7XHJcbiAgICAgIHRoaXMuY2hvaWNlID0gJ3llcydcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB5ZXMuaW5uZXJIVE1MID0gJ091aSc7XHJcbiAgICAgIG5vLmlubmVySFRNTCA9ICctIE5vbic7XHJcbiAgICAgIHRoaXMuY2hvaWNlID0gJ25vJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGF2ZUNob2ljZSgpIHsgcmV0dXJuIHRoaXMuY2hvaWNlICE9PSBudWxsIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5wbmogPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50TGluZSA9IDA7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoKSB7IFxyXG4gICAgcmV0dXJuIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3Rpb259IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuL2NoYXJhY3Rlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2hlcm8nKTtcclxuICB9XHJcblxyXG4gIG1vdmUoa2V5OiBEaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IHN0ZXAgPSA2NCAqIDI7XHJcbiAgICBsZXQgdG9wID0gc3VwZXIuZ2V0VG9wKCk7XHJcbiAgICBsZXQgbGVmdCA9IHN1cGVyLmdldExlZnQoKTtcclxuICAgIFxyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5VUDpcclxuICAgICAgICB0b3AgLT0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uTEVGVDpcclxuICAgICAgICBsZWZ0IC09IHN0ZXA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxyXG4gICAgICAgIGxlZnQgKz0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICB0b3AgKz0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5jb2xpZGUodG9wLCBsZWZ0KSkge1xyXG4gICAgICB0aGlzLnNldFRvcCh0b3ApO1xyXG4gICAgICB0aGlzLnNldExlZnQobGVmdCk7XHJcblxyXG4gICAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcbiAgICAgIG1hcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoICR7LWxlZnQgKyAoNjQgKiA4KX1weCwgJHstdG9wICsgKDY0ICogNCl9cHgsIDAgKWA7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzdXBlci51cGRhdGUoKTsgIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBHYW1lXHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBQTkogfSBmcm9tICcuL3Buaic7XHJcbmltcG9ydCB7IENocm9ubyB9IGZyb20gJy4vY2hyb25vJztcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xyXG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG4vLyByb3V0aW5lXHJcbmNvbnN0IG5vb2tSb3V0aW5lID0gcmVxdWlyZSgnLi9jaGFyYWN0ZXJzL25vb2svZmlyc3Qtcm91dGluZS5qc29uJyk7XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIFVQPSd6JyxcclxuICBMRUZUPSdxJyxcclxuICBSSUdIVD0nZCcsXHJcbiAgRE9XTj0ncydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gS2V5IHtcclxuICAvLyBhY3Rpb25zXHJcbiAgUEFVU0U9J3AnLFxyXG4gIElOVEVSQUNUPSdlJyxcclxuICBJTlZFTlRPUlk9J2knLFxyXG4gIC8vIGRpcmVjdGlvblxyXG4gIFVQPSd6JyxcclxuICBMRUZUPSdxJyxcclxuICBSSUdIVD0nZCcsXHJcbiAgRE9XTj0ncydcclxufVxyXG5cclxuZXhwb3J0IGxldCBjYW1lcmFIVE1MOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbmV4cG9ydCBsZXQgbWFwSFRNTDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5sZXQgY2hyb25vOiBDaHJvbm8gPSBudWxsO1xyXG5sZXQgZGlhbG9nOiBEaWFsb2cgPSBudWxsO1xyXG5sZXQgaW52ZW50b3J5OiBJbnZlbnRvcnkgPSBudWxsO1xyXG5cclxubGV0IGhlcm86IEhlcm8gPSBudWxsO1xyXG5sZXQgbm9vazogUE5KID0gbnVsbDtcclxuY29uc3QgcG5qczogUE5KW10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGNvbGlzaW9uczogYW55W10gPSBbXHJcbiAgLy8gbXVyIGRlIGdhdWNoZVxyXG4gIHtcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogNjQgKiAyIC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyICogMTBcclxuICB9LFxyXG4gIC8vIG11ciBkdSBoYXV0XHJcbiAge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogNjQgKiAyLFxyXG4gICAgd2lkdGg6IDY0ICogMiAqIDE0IC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyIFxyXG4gIH0gLFxyXG4gIC8vIG11ciBkZSBkcm9pdGVcclxuICB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiA2NCAqIDIgKiAxNSxcclxuICAgIHdpZHRoOiA2NCAqIDIsXHJcbiAgICBoZWlnaHQ6IDY0ICogMiAqIDEwXHJcbiAgfSxcclxuICAvLyBtdXIgZHUgYmFzXHJcbiAge1xyXG4gICAgdG9wOiA2NCAqIDIgKiA5LFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiA2NCAqIDIgKiAxNCAtIDYsXHJcbiAgICBoZWlnaHQ6IDY0ICogMiBcclxuICB9ICxcclxuXTtcclxuXHJcbmxldCBkaWFsb2dPcGVuOiBhbnkgPSBudWxsXHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJhY3QgPSAoKSA9PiB7XHJcbiAgcG5qcy5mb3JFYWNoKChwbmopID0+IHtcclxuICAgIGNvbnN0IGNvbGxpZGUgPSBpc0NvbGxpZGluZyhoZXJvLmdldFRvcCgpLCBoZXJvLmdldExlZnQoKSwgaGVyby5nZXRTaXplKCksIGhlcm8uZ2V0U2l6ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBuai5nZXRUb3AoKSAtICg2NCAqIDIpLCBwbmouZ2V0TGVmdCgpIC0gKDY0ICogMiksIHBuai5nZXRTaXplKCkgKyAoNjQgKiAyICogMiksIHBuai5nZXRTaXplKCkgKyAoNjQgKiAyICogMikpO1xyXG4gICAgaWYoY29sbGlkZSkge1xyXG4gICAgICBkaWFsb2cuaW50ZXJhY3QocG5qKTtcclxuICAgICAgZGlhbG9nT3BlbiA9IHBualxyXG4gICAgICBjaHJvbm8uc3RvcCgpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5lID0gKHRpbWU6IHN0cmluZykgPT4ge1xyXG4gIHBuanMuZm9yRWFjaCgocG5qKSA9PiB7XHJcbiAgICBwbmouZG9Sb3V0aW5lKHRpbWUpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0NvbGxpZGluZyA9ICh0b3AxOiBudW1iZXIsIGxlZnQxOiBudW1iZXIsIHdpZHRoMTogbnVtYmVyLCBoZWlnaHQxOiBudW1iZXIsIHRvcDI6IG51bWJlciwgbGVmdDI6IG51bWJlciwgd2lkdGgyOiBudW1iZXIsIGhlaWdodDI6IG51bWJlcikgPT4gXHJcbiAgKGxlZnQxICsgd2lkdGgxKSA+IGxlZnQyICYmIGxlZnQxIDwgKGxlZnQyICsgd2lkdGgyKVxyXG4gICAgJiYgKHRvcDEgKyBoZWlnaHQxKSA+IHRvcDIgJiYgdG9wMSA8ICh0b3AyICsgaGVpZ2h0Mik7XHJcblxyXG5jb25zdCBpbml0SFRNTCA9ICgpID0+IHtcclxuICBjb25zdCBjYW1lcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYW1lcmEuaWQgPSAnY2FtZXJhJztcclxuICBjYW1lcmEuY2xhc3NMaXN0LmFkZCgnY2FtZXJhJyk7XHJcblxyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1hcC5pZCA9ICdtYXAnO1xyXG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcclxuXHJcbiAgY2FtZXJhLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmEpOyBcclxufVxyXG5cclxuY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xyXG4gIGluaXRIVE1MKCk7XHJcbiAgXHJcbiAgY2FtZXJhSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEnKTtcclxuICBtYXBIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gIGNocm9ubyA9IG5ldyBDaHJvbm8oKTtcclxuICBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XHJcbiAgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG5cclxuICBoZXJvID0gbmV3IEhlcm8oKTtcclxuICBub29rID0gbmV3IFBOSignVG9tIE5vb2snLCA2NCAqIDIgKiAzLCA2NCAqIDIgKiAyLCBub29rUm91dGluZSk7XHJcbiAgcG5qcy5wdXNoKG5vb2spO1xyXG4gIGNvbGlzaW9ucy5wdXNoKGhlcm8pO1xyXG4gIGNvbGlzaW9ucy5wdXNoKG5vb2spO1xyXG59IFxyXG5cclxuY29uc3Qga2V5TGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gIGlmKGV2ZW50LmtleSA9PT0gS2V5LlBBVVNFKSB7XHJcbiAgICBpZihjaHJvbm8uaXNSdW5uaW5nKCkpIHtcclxuICAgICAgY2hyb25vLnN0b3AoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjaHJvbm8uc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoZXZlbnQua2V5ID09PSBLZXkuSU5URVJBQ1QpIHtcclxuICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkgJiYgY2hyb25vLmlzUnVubmluZygpKSB7XHJcbiAgICAgIGludGVyYWN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpYWxvZ09wZW4gIT09IG51bGwpe1xyXG4gICAgICBkaWFsb2cuaW50ZXJhY3QoZGlhbG9nT3BlbilcclxuICAgICAgXHJcbiAgICAgIGlmKCFkaWFsb2cuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICBkaWFsb2dPcGVuID0gbnVsbDtcclxuICAgICAgICBjaHJvbm8uc3RhcnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGNocm9uby5pc1J1bm5pbmcoKSAmJiBldmVudC5rZXkgPT09IEtleS5JTlZFTlRPUlkpIHtcclxuICAgIGludmVudG9yeS5pc1Zpc2libGUoKSA/IGludmVudG9yeS5oaWRlKCkgOiBpbnZlbnRvcnkuc2hvdygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgaW52ZW50b3J5LmlzVmlzaWJsZSgpICYmIE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBpbnZlbnRvcnkubW92ZUN1cnNvcihldmVudC5rZXkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgIWRpYWxvZy5pc1Zpc2libGUoKSAmJiBPYmplY3QudmFsdWVzKERpcmVjdGlvbikuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xyXG4gICAgaGVyby5tb3ZlKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKCFjaHJvbm8uaXNSdW5uaW5nKCkgJiYgZGlhbG9nLmhhdmVDaG9pY2UoKSAmJiBbJ3onLCAncyddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGRpYWxvZy51cGRhdGVDaG9pY2UoZXZlbnQua2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywga2V5TGlzdGVuZXIpOyIsImltcG9ydCB7IERpcmVjdGlvbiwgY2FtZXJhSFRNTCB9IGZyb20gXCIuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyID0gNDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIgPSAxMDtcclxuICBwcml2YXRlIHRhYjogYW55W11bXSA9IFtdO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgY29uc3QgbGluZSA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspIHtcclxuICAgICAgICBsaW5lLnB1c2goe30pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWIucHVzaChsaW5lKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZlbnRvcnknKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50YWIuZm9yRWFjaCgobGluZSwgbGluZUlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBsaW5lSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIGxpbmVIVE1MLmlkID0gbGluZUlkeC50b1N0cmluZygpO1xyXG5cclxuICAgICAgbGluZS5mb3JFYWNoKChfLCBpdGVtSWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGl0ZW1IVE1MLmlkID0gYCR7bGluZUlkeH0tJHtpdGVtSWR4fWA7XHJcbiAgICAgICAgbGluZUhUTUwuYXBwZW5kQ2hpbGQoaXRlbUhUTUwpO1xyXG4gICAgICB9KVxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmVIVE1MKTtcclxuICAgIH0pXHJcblxyXG4gICAgZWxlbWVudC5pZCA9ICdpbnZlbnRvcnknO1xyXG4gICAgY2FtZXJhSFRNTC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHRoaXMuYWRkU2VsZWN0ZWQoKTtcclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBhZGRTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFiLmZvckVhY2goKGxpbmUsIGlkeExpbmUpID0+IHtcclxuICAgICAgbGluZS5mb3JFYWNoKChfLCBpZHhJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC54ID09PSBpZHhJdGVtICYmIHRoaXMuc2VsZWN0ZWQueSA9PT0gaWR4TGluZSkge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkeExpbmV9LSR7aWR4SXRlbX1gKTtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFiLmZvckVhY2goKGxpbmUsIGlkeExpbmUpID0+IHtcclxuICAgICAgbGluZS5mb3JFYWNoKChfLCBpZHhJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC54ID09PSBpZHhJdGVtICYmIHRoaXMuc2VsZWN0ZWQueSA9PT0gaWR4TGluZSkge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkeExpbmV9LSR7aWR4SXRlbX1gKTtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBtb3ZlQ3Vyc29yKGtleTogRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKCk7XHJcblxyXG4gICAgc3dpdGNoKGtleSkge1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5VUDpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnkgPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLnkgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC54ID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC54IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnggPCB0aGlzLndpZHRoIC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC54ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueSA8IHRoaXMuaGVpZ2h0IC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC55ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkU2VsZWN0ZWQoKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9jaGFyYWN0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBOSiBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByb3V0aW5lOiBhbnk7XHJcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXJyZW50QWN0aW9uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcm91dGluZTogYW55KSB7XHJcbiAgICBzdXBlcigncG5qJywgdG9wLCBsZWZ0KTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnJvdXRpbmUgPSByb3V0aW5lO1xyXG4gIH1cclxuXHJcbiAgZG9Sb3V0aW5lKHRpbWU6IHN0cmluZykge1xyXG4gICAgaWYoT2JqZWN0LmtleXModGhpcy5yb3V0aW5lKS5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB0aGlzLnJvdXRpbmVbdGltZV07XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEFjdGlvbi50ZXh0KTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudEFjdGlvbi5wb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmN1cnJlbnRBY3Rpb24ucG9zaXRpb24udG9wLCB0aGlzLmN1cnJlbnRBY3Rpb24ucG9zaXRpb24ubGVmdClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZShmaW5hbFRvcDogbnVtYmVyLCBmaW5hbExlZnQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3RlcHMgPSA2NCAqIDI7XHJcbiAgICBjb25zdCBmaW5Ub3AgPSBmaW5hbFRvcCAqIDIgKiA2NFxyXG4gICAgY29uc3QgZmluVExlZnQgPSBmaW5hbExlZnQgKiAyICogNjRcclxuICAgIFxyXG4gICAgY29uc3Qgd2FsayA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3AoKTtcclxuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xyXG5cclxuICAgICAgaWYodG9wID09PSBmaW5Ub3AgJiYgbGVmdCA9PT0gZmluVExlZnQpIHsgY2xlYXJJbnRlcnZhbCh3YWxrKSB9XHJcblxyXG4gICAgICBpZih0b3AgPCBmaW5Ub3AgJiYgIXRoaXMuY29saWRlKHRvcCArIHN0ZXBzLCBsZWZ0KSkge1xyXG4gICAgICAgIHN1cGVyLnNldFRvcCh0b3AgKyBzdGVwcylcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodG9wID4gZmluVG9wICYmICF0aGlzLmNvbGlkZSh0b3AgLSBzdGVwcywgbGVmdCkpIHtcclxuICAgICAgICBzdXBlci5zZXRUb3AodG9wIC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPCBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0ICsgc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0ICsgc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGxlZnQgPiBmaW5UTGVmdCAmJiAhdGhpcy5jb2xpZGUodG9wLCBsZWZ0IC0gc3RlcHMpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TGVmdChsZWZ0IC0gc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMClcclxuXHJcbiAgfVxyXG5cclxuICBnZXRBY3Rpb24oKSB7IHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb24gfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=