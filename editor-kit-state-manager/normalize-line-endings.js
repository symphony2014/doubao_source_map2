// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'normalizeNewlines'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 565335
         */
module.exports = function (module, exports, require) {
  function r(t) {
    return t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }
  require.d(exports, {
    normalizeNewlines: function () {
      return r;
    }
  });
}