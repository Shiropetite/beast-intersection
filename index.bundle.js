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
    if (chrono.isRunning() && event.key === Key.INTERACT) {
        dialog.interact(nook);
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
    if (chrono.isRunning() && dialog.haveChoice() && ['z', 's'].includes(event.key)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ3pCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7WUFFRCxJQUFHLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xELGlCQUFNLE1BQU0sYUFBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsT0FBTzthQUNSO1lBRUQsSUFBRyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNyRCxpQkFBTSxPQUFPLGFBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE9BQU87YUFDUjtZQUVELElBQUcsSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDckQsaUJBQU0sT0FBTyxhQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7UUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRVQsQ0FBQztJQUVELHVCQUFTLEdBQVQsY0FBYyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQztJQUMzQyxVQUFDO0FBQUQsQ0FBQyxDQTdEd0IsaURBQVMsR0E2RGpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9hbmltYWwtY3Jvc3NpbmYvLi9zcmMvY2hyb25vLnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2hlcm8udHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FuaW1hbC1jcm9zc2luZi8uL3NyYy9pbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWFsLWNyb3NzaW5mLy4vc3JjL3Buai50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWFwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tcGl4ZWwtc2l6ZTogMnB4O1xcclxcbiAgLS1ncmlkLWNlbGw6IGNhbGMoIHZhcigtLXBpeGVsLXNpemUpICogMiAqIDMyICk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOSwgMzUpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbWVyYSB7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogOSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlXFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTYgKiB2YXIoLS1ncmlkLWNlbGwpKTsgXFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAgKiB2YXIoLS1ncmlkLWNlbGwpKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI3BuaiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDI1NSwgMTg0KTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb25vIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNpbnZlbnRvcnkge1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDExMCwgNzUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggYnJvd247XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDMwcHg7XFxyXFxuICBib3R0b206IGNhbGMoNjQgKiAyKXB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGJyb3duO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDE1MCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5REFBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcGl4ZWwtc2l6ZTogMnB4O1xcclxcbiAgLS1ncmlkLWNlbGw6IGNhbGMoIHZhcigtLXBpeGVsLXNpemUpICogMiAqIDMyICk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyOSwgMzUpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbWVyYSB7XFxyXFxuICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwpICogOSk7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZ3JpZC1jZWxsKSAqIDUpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlXFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWFwLnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxNiAqIHZhcigtLWdyaWQtY2VsbCkpOyBcXHJcXG4gIGhlaWdodDogY2FsYygxMCAqIHZhcigtLWdyaWQtY2VsbCkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVybyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jcG5qIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMjU1LCAxODQpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAxMTAsIDc1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4IGJyb3duO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ludmVudG9yeSB7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMTEwLCA3NSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCBicm93bjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJvdHRvbTogMzBweDtcXHJcXG4gIGJvdHRvbTogY2FsYyg2NCAqIDIpcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggYnJvd247XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTUwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbGlzaW9ucywgaXNDb2xsaWRpbmcsIG1hcEhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmc7XHJcbiAgLy8gZ2VvbWV0cnlcclxuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIHRvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGVmdDogbnVtYmVyO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOnN0cmluZyk7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKC4uLnBhcmFtZXRlcnM6IGFueVtdKSB7IFxyXG4gICAgaWYocGFyYW1ldGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy50eXBlID0gcGFyYW1ldGVyc1swXTtcclxuICAgICAgdGhpcy50b3AgPSA2NCAqIDQ7XHJcbiAgICAgIHRoaXMubGVmdCA9IDY0ICogODtcclxuICAgIH1cclxuXHJcbiAgICBpZihwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLnR5cGUgPSBwYXJhbWV0ZXJzWzBdO1xyXG4gICAgICB0aGlzLnRvcCA9IHBhcmFtZXRlcnNbMV07XHJcbiAgICAgIHRoaXMubGVmdCA9IHBhcmFtZXRlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gNjQgKiAyIC0gNjtcclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IHRoaXMudHlwZTtcclxuICAgIG1hcEhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50eXBlKTtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCAke3RoaXMubGVmdH1weCwgJHt0aGlzLnRvcH1weCwgMCApYDtcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29saWRlKHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpIHtcclxuICAgIGxldCBpc0NvbGlzaW9uID0gZmFsc2U7XHJcbiAgICBjb2xpc2lvbnMuZm9yRWFjaCgoY29saXNpb24pID0+IHtcclxuICAgICAgaWYoaXNDb2xpc2lvbiA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGNvbGlzaW9uPy53aWR0aCA/PyBjb2xpc2lvbj8uc2l6ZVxyXG4gICAgICBjb25zdCBoZWlnaHQgPSBjb2xpc2lvbj8uaGVpZ2h0ID8/IGNvbGlzaW9uPy5zaXplXHJcblxyXG4gICAgICBpc0NvbGlzaW9uID0gaXNDb2xsaWRpbmcodG9wLCBsZWZ0LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgY29saXNpb24udG9wLCBjb2xpc2lvbi5sZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNDb2xpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIGdldHRlciAmIHNldHRlclxyXG4gIGdldFRvcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy50b3A7IH1cclxuICBzZXRUb3AodG9wOiBudW1iZXIpOiB2b2lkIHsgdGhpcy50b3AgPSB0b3A7IH1cclxuXHJcbiAgZ2V0TGVmdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sZWZ0OyB9XHJcbiAgc2V0TGVmdChsZWZ0OiBudW1iZXIpOiB2b2lkIHsgdGhpcy5sZWZ0ID0gbGVmdDsgfVxyXG5cclxufSIsImltcG9ydCB7IGNhbWVyYUhUTUwsIHJvdXRpbmUgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENocm9ubyB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xyXG4gIHByaXZhdGUgaG91cjogbnVtYmVyO1xyXG4gIHByaXZhdGUgbWludXRlOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaG91ciA9IDU7XHJcbiAgICB0aGlzLm1pbnV0ZSA9IDUwO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaHJvbm9cIik7XHJcbiAgICBcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmlkID0gXCJjaHJvbm9cIjtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hyb25vJyk7XHJcbiAgICBjYW1lcmFIVE1MLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkgeyBcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLm1pbnV0ZSA9PT0gNTApIHtcclxuICAgICAgICBpZih0aGlzLmhvdXIgPT09IDIzKSB7XHJcbiAgICAgICAgICB0aGlzLmhvdXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaG91cisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pbnV0ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5taW51dGUgKz0gMTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIHJvdXRpbmUodGhpcy50b1N0cmluZygpKTtcclxuICAgICAgXHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHsgXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpOyBcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNSdW5uaW5nKCkgeyByZXR1cm4gdGhpcy5pbnRlcnZhbCAhPT0gbnVsbCB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgY29uc3QgaG91ciA9IGAke3RoaXMuaG91ciA8IDEwID8gJzAnIDogJyd9JHt0aGlzLmhvdXJ9YDtcclxuICAgIGNvbnN0IG1pbnV0ZSA9IGAke3RoaXMubWludXRlIDwgMTAgPyAnMCcgOiAnJ30ke3RoaXMubWludXRlfWA7XHJcbiAgICByZXR1cm4gYCR7aG91cn06JHttaW51dGV9YDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjYW1lcmFIVE1MIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IFBOSiB9IGZyb20gJy4vcG5qJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2cge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcG5qOiBQTko7XHJcbiAgcHJpdmF0ZSBjdXJyZW50TGluZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2hvaWNlOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMuY3VycmVudExpbmUgPSAwO1xyXG4gICAgdGhpcy5jaG9pY2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmlkID0gXCJkaWFsb2dcIlxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKTtcclxuICAgIGNhbWVyYUhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmFjdChwbmo6IFBOSikge1xyXG4gICAgdGhpcy5wbmogPSBwbmo7XHJcbiAgICBjb25zdCBjdXJyZW50RGlhbG9nID0gdGhpcy5wbmouZ2V0QWN0aW9uKCkuZGlhbG9nO1xyXG5cclxuICAgIGlmKGN1cnJlbnREaWFsb2cpIHtcclxuICAgICAgaWYoIXRoaXMuaXNWaXNpYmxlKCkpIHRoaXMuc2hvdygpO1xyXG4gICAgICBpZih0aGlzLmN1cnJlbnRMaW5lID09PSBjdXJyZW50RGlhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IGN1cnJlbnREaWFsb2dbdGhpcy5jdXJyZW50TGluZV07XHJcbiAgICAgIGlmKHRoaXMuaGF2ZUNob2ljZSgpKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBsaW5lW3RoaXMuY2hvaWNlXTtcclxuICAgICAgICB0aGlzLmNob2ljZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGluZSsrO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gbGluZS50ZXh0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihsaW5lLmNob2ljZSkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2hvaWNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGluZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYodGhpcy5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRDaG9pY2UoKSB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVySFRNTCArPSBcIjxkaXYgaWQ9J291aSc+LSBPdWk8L2Rpdj5cIlxyXG4gICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgKz0gXCI8ZGl2IGlkPSdub24nPk5vbjwvZGl2PlwiXHJcbiAgICB0aGlzLmNob2ljZSA9ICd5ZXMnXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaG9pY2Uoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdWknKTtcclxuICAgIGNvbnN0IG5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbicpO1xyXG4gIFxyXG4gICAgaWYoa2V5ID09PSAneicpIHsgXHJcbiAgICAgIHllcy5pbm5lckhUTUwgPSAnLSBPdWknO1xyXG4gICAgICBuby5pbm5lckhUTUwgPSAnTm9uJztcclxuICAgICAgdGhpcy5jaG9pY2UgPSAneWVzJ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHllcy5pbm5lckhUTUwgPSAnT3VpJztcclxuICAgICAgbm8uaW5uZXJIVE1MID0gJy0gTm9uJztcclxuICAgICAgdGhpcy5jaG9pY2UgPSAnbm8nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXZlQ2hvaWNlKCkgeyByZXR1cm4gdGhpcy5jaG9pY2UgIT09IG51bGwgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLnBuaiA9IG51bGw7XHJcbiAgICB0aGlzLmN1cnJlbnRMaW5lID0gMDtcclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZSgpIHsgXHJcbiAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xyXG4gIH1cclxufSIsImltcG9ydCB7IERpcmVjdGlvbn0gZnJvbSAnLic7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignaGVybycpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShrZXk6IERpcmVjdGlvbikge1xyXG4gICAgY29uc3Qgc3RlcCA9IDY0ICogMjtcclxuICAgIGxldCB0b3AgPSBzdXBlci5nZXRUb3AoKTtcclxuICAgIGxldCBsZWZ0ID0gc3VwZXIuZ2V0TGVmdCgpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2goa2V5KSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxyXG4gICAgICAgIHRvcCAtPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgIGxlZnQgLT0gc3RlcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcbiAgICAgICAgbGVmdCArPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5ET1dOOlxyXG4gICAgICAgIHRvcCArPSBzdGVwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLmNvbGlkZSh0b3AsIGxlZnQpKSB7XHJcbiAgICAgIHRoaXMuc2V0VG9wKHRvcCk7XHJcbiAgICAgIHRoaXMuc2V0TGVmdChsZWZ0KTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTtcclxuICAgICAgbWFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCggJHstbGVmdCArICg2NCAqIDgpfXB4LCAkey10b3AgKyAoNjQgKiA0KX1weCwgMCApYDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHN1cGVyLnVwZGF0ZSgpOyAgXHJcblxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIEdhbWVcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IFBOSiB9IGZyb20gJy4vcG5qJztcclxuaW1wb3J0IHsgQ2hyb25vIH0gZnJvbSAnLi9jaHJvbm8nO1xyXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XHJcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbi8vIHJvdXRpbmVcclxuY29uc3Qgbm9va1JvdXRpbmUgPSByZXF1aXJlKCcuL2NoYXJhY3RlcnMvbm9vay9maXJzdC1yb3V0aW5lLmpzb24nKTtcclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgVVA9J3onLFxyXG4gIExFRlQ9J3EnLFxyXG4gIFJJR0hUPSdkJyxcclxuICBET1dOPSdzJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBLZXkge1xyXG4gIC8vIGFjdGlvbnNcclxuICBQQVVTRT0ncCcsXHJcbiAgSU5URVJBQ1Q9J2UnLFxyXG4gIElOVkVOVE9SWT0naScsXHJcbiAgLy8gZGlyZWN0aW9uXHJcbiAgVVA9J3onLFxyXG4gIExFRlQ9J3EnLFxyXG4gIFJJR0hUPSdkJyxcclxuICBET1dOPSdzJ1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhbWVyYUhUTUw6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuZXhwb3J0IGxldCBtYXBIVE1MOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbmxldCBjaHJvbm86IENocm9ubyA9IG51bGw7XHJcbmxldCBkaWFsb2c6IERpYWxvZyA9IG51bGw7XHJcbmxldCBpbnZlbnRvcnk6IEludmVudG9yeSA9IG51bGw7XHJcblxyXG5sZXQgaGVybzogSGVybyA9IG51bGw7XHJcbmxldCBub29rOiBQTkogPSBudWxsO1xyXG5jb25zdCBwbmpzOiBQTkpbXSA9IFtdO1xyXG5leHBvcnQgY29uc3QgY29saXNpb25zOiBhbnlbXSA9IFtcclxuICAvLyBtdXIgZGUgZ2F1Y2hlXHJcbiAge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiA2NCAqIDIgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgKiAxMFxyXG4gIH0sXHJcbiAgLy8gbXVyIGR1IGhhdXRcclxuICB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiA2NCAqIDIsXHJcbiAgICB3aWR0aDogNjQgKiAyICogMTQgLSA2LFxyXG4gICAgaGVpZ2h0OiA2NCAqIDIgXHJcbiAgfSAsXHJcbiAgLy8gbXVyIGRlIGRyb2l0ZVxyXG4gIHtcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDY0ICogMiAqIDE1LFxyXG4gICAgd2lkdGg6IDY0ICogMixcclxuICAgIGhlaWdodDogNjQgKiAyICogMTBcclxuICB9LFxyXG4gIC8vIG11ciBkdSBiYXNcclxuICB7XHJcbiAgICB0b3A6IDY0ICogMiAqIDksXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDY0ICogMiAqIDE0IC0gNixcclxuICAgIGhlaWdodDogNjQgKiAyIFxyXG4gIH0gLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRpbmUgPSAodGltZTogc3RyaW5nKSA9PiB7XHJcbiAgcG5qcy5mb3JFYWNoKChwbmopID0+IHtcclxuICAgIHBuai5kb1JvdXRpbmUodGltZSk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ29sbGlkaW5nID0gKHRvcDE6IG51bWJlciwgbGVmdDE6IG51bWJlciwgd2lkdGgxOiBudW1iZXIsIGhlaWdodDE6IG51bWJlciwgdG9wMjogbnVtYmVyLCBsZWZ0MjogbnVtYmVyLCB3aWR0aDI6IG51bWJlciwgaGVpZ2h0MjogbnVtYmVyKSA9PiBcclxuICAobGVmdDEgKyB3aWR0aDEpID4gbGVmdDIgJiYgbGVmdDEgPCAobGVmdDIgKyB3aWR0aDIpXHJcbiAgICAmJiAodG9wMSArIGhlaWdodDEpID4gdG9wMiAmJiB0b3AxIDwgKHRvcDIgKyBoZWlnaHQyKTtcclxuXHJcbmNvbnN0IGluaXRIVE1MID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbWVyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhbWVyYS5pZCA9ICdjYW1lcmEnO1xyXG4gIGNhbWVyYS5jbGFzc0xpc3QuYWRkKCdjYW1lcmEnKTtcclxuXHJcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFwLmlkID0gJ21hcCc7XHJcbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xyXG5cclxuICBjYW1lcmEuYXBwZW5kQ2hpbGQobWFwKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbWVyYSk7IFxyXG59XHJcblxyXG5jb25zdCBvbkxvYWQgPSAoKSA9PiB7XHJcbiAgaW5pdEhUTUwoKTtcclxuICBcclxuICBjYW1lcmFIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpO1xyXG4gIG1hcEhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XHJcbiAgY2hyb25vID0gbmV3IENocm9ubygpO1xyXG4gIGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcclxuICBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcblxyXG4gIGhlcm8gPSBuZXcgSGVybygpO1xyXG4gIG5vb2sgPSBuZXcgUE5KKCdUb20gTm9vaycsIDY0ICogMiAqIDMsIDY0ICogMiAqIDIsIG5vb2tSb3V0aW5lKTtcclxuICBwbmpzLnB1c2gobm9vayk7XHJcbiAgY29saXNpb25zLnB1c2goaGVybyk7XHJcbiAgY29saXNpb25zLnB1c2gobm9vayk7XHJcbn0gXHJcblxyXG5jb25zdCBrZXlMaXN0ZW5lciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgaWYoZXZlbnQua2V5ID09PSBLZXkuUEFVU0UpIHtcclxuICAgIGlmKGNocm9uby5pc1J1bm5pbmcoKSkge1xyXG4gICAgICBjaHJvbm8uc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNocm9uby5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZihjaHJvbm8uaXNSdW5uaW5nKCkgJiYgZXZlbnQua2V5ID09PSBLZXkuSU5URVJBQ1QpIHtcclxuICAgIGRpYWxvZy5pbnRlcmFjdChub29rKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoY2hyb25vLmlzUnVubmluZygpICYmIGV2ZW50LmtleSA9PT0gS2V5LklOVkVOVE9SWSkge1xyXG4gICAgaW52ZW50b3J5LmlzVmlzaWJsZSgpID8gaW52ZW50b3J5LmhpZGUoKSA6IGludmVudG9yeS5zaG93KCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGNocm9uby5pc1J1bm5pbmcoKSAmJiBpbnZlbnRvcnkuaXNWaXNpYmxlKCkgJiYgT2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcclxuICAgIGludmVudG9yeS5tb3ZlQ3Vyc29yKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGNocm9uby5pc1J1bm5pbmcoKSAmJiAhZGlhbG9nLmlzVmlzaWJsZSgpICYmIE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBoZXJvLm1vdmUoZXZlbnQua2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYoY2hyb25vLmlzUnVubmluZygpICYmIGRpYWxvZy5oYXZlQ2hvaWNlKCkgJiYgWyd6JywgJ3MnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XHJcbiAgICBkaWFsb2cudXBkYXRlQ2hvaWNlKGV2ZW50LmtleSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGtleUxpc3RlbmVyKTsiLCJpbXBvcnQgeyBEaXJlY3Rpb24sIGNhbWVyYUhUTUwgfSBmcm9tIFwiLlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlciA9IDQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyID0gMTA7XHJcbiAgcHJpdmF0ZSB0YWI6IGFueVtdW10gPSBbXTtcclxuICBwcml2YXRlIHNlbGVjdGVkOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBbXVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgbGluZS5wdXNoKHt9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFiLnB1c2gobGluZSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52ZW50b3J5Jyk7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMudGFiLmZvckVhY2goKGxpbmUsIGxpbmVJZHgpID0+IHtcclxuICAgICAgY29uc3QgbGluZUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICBsaW5lSFRNTC5pZCA9IGxpbmVJZHgudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGxpbmUuZm9yRWFjaCgoXywgaXRlbUlkeCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1IVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBpdGVtSFRNTC5pZCA9IGAke2xpbmVJZHh9LSR7aXRlbUlkeH1gO1xyXG4gICAgICAgIGxpbmVIVE1MLmFwcGVuZENoaWxkKGl0ZW1IVE1MKTtcclxuICAgICAgfSlcclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lSFRNTCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGVsZW1lbnQuaWQgPSAnaW52ZW50b3J5JztcclxuICAgIGNhbWVyYUhUTUwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICB0aGlzLmFkZFNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgYWRkU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBpZHhMaW5lKSA9PiB7XHJcbiAgICAgIGxpbmUuZm9yRWFjaCgoXywgaWR4SXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA9PT0gaWR4SXRlbSAmJiB0aGlzLnNlbGVjdGVkLnkgPT09IGlkeExpbmUpIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZHhMaW5lfS0ke2lkeEl0ZW19YCk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5mb3JFYWNoKChsaW5lLCBpZHhMaW5lKSA9PiB7XHJcbiAgICAgIGxpbmUuZm9yRWFjaCgoXywgaWR4SXRlbSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA9PT0gaWR4SXRlbSAmJiB0aGlzLnNlbGVjdGVkLnkgPT09IGlkeExpbmUpIHtcclxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZHhMaW5lfS0ke2lkeEl0ZW19YCk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbW92ZUN1cnNvcihrZXk6IERpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVTZWxlY3RlZCgpO1xyXG5cclxuICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC55ID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQueCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueCAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uUklHSFQ6XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZC54IDwgdGhpcy53aWR0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkLnkgPCB0aGlzLmhlaWdodCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQueSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFNlbGVjdGVkKCk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQTkogZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gIHByaXZhdGUgcm91dGluZTogYW55O1xyXG4gIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVudEFjdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJvdXRpbmU6IGFueSkge1xyXG4gICAgc3VwZXIoJ3BuaicsIHRvcCwgbGVmdCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5yb3V0aW5lID0gcm91dGluZTtcclxuICB9XHJcblxyXG4gIGRvUm91dGluZSh0aW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucm91dGluZSkuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5yb3V0aW5lW3RpbWVdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRBY3Rpb24udGV4dCk7XHJcblxyXG4gICAgICBpZih0aGlzLmN1cnJlbnRBY3Rpb24ucG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uLnRvcCwgdGhpcy5jdXJyZW50QWN0aW9uLnBvc2l0aW9uLmxlZnQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoZmluYWxUb3A6IG51bWJlciwgZmluYWxMZWZ0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0ZXBzID0gNjQgKiAyO1xyXG4gICAgY29uc3QgZmluVG9wID0gZmluYWxUb3AgKiAyICogNjRcclxuICAgIGNvbnN0IGZpblRMZWZ0ID0gZmluYWxMZWZ0ICogMiAqIDY0XHJcbiAgICBcclxuICAgIGNvbnN0IHdhbGsgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0VG9wKCk7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmdldExlZnQoKTtcclxuXHJcbiAgICAgIGlmKHRvcCA9PT0gZmluVG9wICYmIGxlZnQgPT09IGZpblRMZWZ0KSB7IGNsZWFySW50ZXJ2YWwod2FsaykgfVxyXG5cclxuICAgICAgaWYodG9wIDwgZmluVG9wICYmICF0aGlzLmNvbGlkZSh0b3AgKyBzdGVwcywgbGVmdCkpIHtcclxuICAgICAgICBzdXBlci5zZXRUb3AodG9wICsgc3RlcHMpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRvcCA+IGZpblRvcCAmJiAhdGhpcy5jb2xpZGUodG9wIC0gc3RlcHMsIGxlZnQpKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0VG9wKHRvcCAtIHN0ZXBzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihsZWZ0IDwgZmluVExlZnQgJiYgIXRoaXMuY29saWRlKHRvcCwgbGVmdCArIHN0ZXBzKSkge1xyXG4gICAgICAgIHN1cGVyLnNldExlZnQobGVmdCArIHN0ZXBzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihsZWZ0ID4gZmluVExlZnQgJiYgIXRoaXMuY29saWRlKHRvcCwgbGVmdCAtIHN0ZXBzKSkge1xyXG4gICAgICAgIHN1cGVyLnNldExlZnQobGVmdCAtIHN0ZXBzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDApXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aW9uKCkgeyByZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9uIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9