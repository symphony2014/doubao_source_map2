// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'isBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 647758
         */
module.exports = function (module, exports, require) {
  let n = typeof window != "undefined";
  require.d(exports, {
    isBrowser: function () {
      return n;
    }
  });
}