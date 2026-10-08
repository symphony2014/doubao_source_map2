// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'hasVelocity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 643254
         */
module.exports = function (module, exports, require) {
  let n = t => !!t && !!t.getVelocity;
  require.d(exports, {
    hasVelocity: function () {
      return n;
    }
  });
}