// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'getPropertyWithFallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 809859
         */
module.exports = function (module, exports, require) {
  function n(t, e) {
    return (t == null ? undefined : t[e]) ?? (t == null ? undefined : t.default) ?? t;
  }
  require.d(exports, {
    getPropertyWithFallback: function () {
      return n;
    }
  });
}