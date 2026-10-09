// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'isWindowAvailable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 314742
         */
module.exports = function (module, exports, require) {
  let n = typeof window != "undefined";
  require.d(exports, {
    isWindowAvailable: function () {
      return n;
    }
  });
}