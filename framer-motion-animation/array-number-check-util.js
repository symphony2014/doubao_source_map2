// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'isNumberArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 671127
         */
module.exports = function (module, exports, require) {
  let i = e => Array.isArray(e) && typeof e[0] == "number";
  require.d(exports, {
    isNumberArray: function () {
      return i;
    }
  });
}