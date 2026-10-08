// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'isObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 8345
         */
module.exports = function (module, exports, require) {
  function n(t) {
    return typeof t == "object" && t !== null;
  }
  require.d(exports, {
    isObject: function () {
      return n;
    }
  });
}