// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createEmptyObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58923.49efff45.js
         * chunkId: 58923
         * moduleId: 691771
         */
module.exports = function (module, exports, require) {
  let r = () => ({});
  require.d(exports, {
    createEmptyObject: function () {
      return r;
    }
  });
}