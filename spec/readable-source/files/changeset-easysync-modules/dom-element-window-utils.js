// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C_' to 'isNotNullOrUndefined'
// - Renamed export 'Jj' to 'getWindowFromElement'
// - Renamed export 'h7' to 'isInlineNonReplacedElement'
// - Renamed export 'mf' to 'isFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 655216
         */
module.exports = function (module, exports, require) {
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  function i(t) {
    if (!t) {
      return window;
    }
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function o(t) {
    return t != null;
  }
  function s(t) {
    return typeof t == "function";
  }
  function a(t) {
    switch (t.tagName) {
      case "INPUT":
        if (t.type !== "image") {
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
  function u(t) {
    return domElementUtils.isElementNode(t) && (!(t instanceof SVGElement) || !("getBBox" in t)) && !a(t) && getComputedStyle(t).display === "inline";
  }
  require.d(exports, {
    isNotNullOrUndefined: function () {
      return o;
    },
    getWindowFromElement: function () {
      return i;
    },
    isInlineNonReplacedElement: function () {
      return u;
    },
    isFunction: function () {
      return s;
    }
  });
}