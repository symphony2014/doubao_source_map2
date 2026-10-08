// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWindowFromElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 540463
         */
module.exports = function (module, exports, require) {
  function r(t) {
    if (!t) {
      return window;
    }
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  require.d(exports, {
    getWindowFromElement: function () {
      return r;
    }
  });
}