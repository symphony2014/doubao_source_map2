// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'isArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 208770
         */
module.exports = function (module, exports, require) {
  let n = t => Array.isArray(t);
  require.d(exports, {
    isArray: function () {
      return n;
    }
  });
}