// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'round5Decimals'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 847616
         */
module.exports = function (module, exports, require) {
  let n = t => Math.round(t * 100000) / 100000;
  require.d(exports, {
    round5Decimals: function () {
      return n;
    }
  });
}