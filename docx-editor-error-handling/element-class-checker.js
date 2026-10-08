// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'hasAnyClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 89187
         */
module.exports = function (module, exports, require) {
  function n(e, i) {
    return i.some(i => e.closest(`.${i}`));
  }
  require.d(exports, {
    hasAnyClass: function () {
      return n;
    }
  });
}