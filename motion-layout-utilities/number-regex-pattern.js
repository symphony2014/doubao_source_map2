// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'numberRegex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 910589
         */
module.exports = function (module, exports, require) {
  let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  require.d(exports, {
    numberRegex: function () {
      return n;
    }
  });
}