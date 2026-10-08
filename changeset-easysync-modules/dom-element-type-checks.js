// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Re' to 'isHTMLElement'
// - Renamed export 'Zq' to 'isShadowRoot'
// - Renamed export 'kK' to 'isElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 158443
         */
module.exports = function (module, exports, require) {
  var getWindowFromElement = require("get-window-from-element") /*id: 540463*/;
  function i(t) {
    var e = getWindowFromElement.getWindowFromElement(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function o(t) {
    var e = getWindowFromElement.getWindowFromElement(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function s(t) {
    if (typeof ShadowRoot == "undefined") {
      return false;
    }
    var e = getWindowFromElement.getWindowFromElement(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  require.d(exports, {
    isHTMLElement: function () {
      return o;
    },
    isShadowRoot: function () {
      return s;
    },
    isElement: function () {
      return i;
    }
  });
}