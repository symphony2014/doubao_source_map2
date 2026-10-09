// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'isArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 818975
         */
module.exports = function (module, exports, require) {
  let n = t => Array.isArray(t);
  require.d(exports, {
    isArray: function () {
      return n;
    }
  });
}