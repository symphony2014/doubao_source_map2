// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'unwrapBrowserValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 999608
         */
module.exports = function (module, exports, require) {
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  function o(e, t) {
    var n;
    if (browserDomCheck.isBrowserDom) {
      if (e) {
        if (typeCheckUtils.isFunction(e)) {
          return e();
        } else if ("current" in e) {
          return e.current;
        } else {
          return e;
        }
      } else {
        return t;
      }
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    unwrapBrowserValue: function () {
      return o;
    }
  });
}