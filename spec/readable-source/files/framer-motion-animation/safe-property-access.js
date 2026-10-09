// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'resolveValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 945701
         */
module.exports = function (module, exports, require) {
  function n(t, e) {
    return (t == null ? undefined : t[e]) ?? (t == null ? undefined : t.default) ?? t;
  }
  require.d(exports, {
    resolveValue: function () {
      return n;
    }
  });
}