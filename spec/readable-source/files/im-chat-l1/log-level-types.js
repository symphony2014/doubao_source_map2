// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'logLevels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 818674
         */
module.exports = function (module, exports, require) {
  let i = ["default", "error", "warning", "success"];
  require.d(exports, {
    logLevels: function () {
      return i;
    }
  });
}