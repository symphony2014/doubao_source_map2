// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C_' to 'isDefined'
// - Renamed export 'Jj' to 'getWindow'
// - Renamed export 'h7' to 'isInlineElement'
// - Renamed export 'mf' to 'isFunction'
// - Renamed export 'tI' to 'isThenable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 908793
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  function a(e) {
    if (!e) {
      return window;
    }
    if (e.toString() !== "[object Window]") {
      var n = e.ownerDocument;
      return n && n.defaultView || window;
    }
    return e;
  }
  function l(e) {
    return e != null;
  }
  function s(e) {
    return typeof e == "function";
  }
  function c(e) {
    return e !== null && typeofHelper.getType(e) === "object" && s(e.then);
  }
  function u(e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") {
          break;
        }
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return true;
    }
    return false;
  }
  function d(e) {
    return domElementUtils_1.isElementNode(e) && (!(e instanceof SVGElement) || !("getBBox" in e)) && !u(e) && getComputedStyle(e).display === "inline";
  }
  require.d(exports, {
    isDefined: function () {
      return l;
    },
    getWindow: function () {
      return a;
    },
    isInlineElement: function () {
      return d;
    },
    isFunction: function () {
      return s;
    },
    isThenable: function () {
      return c;
    }
  });
}