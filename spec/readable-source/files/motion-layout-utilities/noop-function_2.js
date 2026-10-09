// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'noop'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 772282
         */
module.exports = function (module, exports, require) {
  let n = () => {};
  require.d(exports, {
    noop: function () {
      return n;
    }
  });
}