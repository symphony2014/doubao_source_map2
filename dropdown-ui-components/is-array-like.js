// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'isArrayLike'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 497539
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return e && typeof e.length == "number" && typeof e != "function";
  }
  require.d(exports, {
    isArrayLike: function () {
      return r;
    }
  });
}