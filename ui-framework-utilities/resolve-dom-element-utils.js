// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'resolveDomElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 13199
         */
module.exports = function (module, exports, require) {
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  function o(e) {
    if (e) {
      if (domElementWindowUtils.isFunction(e)) {
        return e();
      } else if (typeof e == "string") {
        return document.querySelector(e);
      } else if ("current" in e) {
        return e.current;
      } else {
        return e;
      }
    } else {
      return null;
    }
  }
  require.d(exports, {
    resolveDomElement: function () {
      return o;
    }
  });
}