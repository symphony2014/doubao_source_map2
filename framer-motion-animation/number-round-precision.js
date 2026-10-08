// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'roundPrecision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 379285
         */
module.exports = function (module, exports, require) {
  let n = t => Math.round(t * 100000) / 100000;
  require.d(exports, {
    roundPrecision: function () {
      return n;
    }
  });
}