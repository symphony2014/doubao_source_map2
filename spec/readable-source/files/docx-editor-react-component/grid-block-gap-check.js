// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'isOutsideGridGap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 512165
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return !e.closest(".j-grid-block .j-column-gap");
  }
  require.d(exports, {
    isOutsideGridGap: function () {
      return n;
    }
  });
}