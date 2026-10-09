// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'isObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 688228
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return typeof e == "object" && e !== null;
  }
  require.d(exports, {
    isObject: function () {
      return i;
    }
  });
}