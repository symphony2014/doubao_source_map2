// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'isOutsideDivider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 511660
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return !e.closest(".divider-block__container");
  }
  require.d(exports, {
    isOutsideDivider: function () {
      return n;
    }
  });
}