// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'isOutsideImageBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 169320
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return !e.closest(".image-block-container");
  }
  require.d(exports, {
    isOutsideImageBlock: function () {
      return n;
    }
  });
}