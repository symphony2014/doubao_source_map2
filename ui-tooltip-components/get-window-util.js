// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWindow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 374363
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (!e) {
      return window;
    }
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  require.d(exports, {
    getWindow: function () {
      return o;
    }
  });
}