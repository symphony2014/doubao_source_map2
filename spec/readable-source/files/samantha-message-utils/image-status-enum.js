// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zu' to 'imageStatusEnum'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79175.7881c099.js
         * chunkId: 79175
         * moduleId: 923272
         */
module.exports = function (module, exports, require) {
  var o = {
    ImageStatusUnknown: 0,
    ImageStatusGenerating: 1,
    ImageStatusSucceed: 2,
    ImageStatusBanned: 3,
    ImageStatusFailed: 4
  };
  require.d(exports, {
    imageStatusEnum: function () {
      return o;
    }
  });
}