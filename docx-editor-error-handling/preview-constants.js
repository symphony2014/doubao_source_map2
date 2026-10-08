// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fA' to 'configValues'
// - Renamed export 'fV' to 'initialValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 540241
         */
module.exports = function (module, exports, require) {
  let n = [10, 20, 30, 50];
  let o = 0;
  require.d(exports, {
    configValues: function () {
      return n;
    },
    initialValue: function () {
      return o;
    }
  });
}