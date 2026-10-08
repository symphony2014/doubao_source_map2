// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'isNonNumericArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 737446
         */
module.exports = function (module, exports, require) {
  let i = e => Array.isArray(e) && typeof e[0] != "number";
  require.d(exports, {
    isNonNumericArray: function () {
      return i;
    }
  });
}