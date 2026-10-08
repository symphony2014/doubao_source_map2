// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rs' to 'imageTypes'
// - Renamed export 'zu' to 'imageStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 72143
         */
module.exports = function (module, exports, require) {
  var i = {
    ImageStatusUnknown: 0,
    ImageStatusGenerating: 1,
    ImageStatusSucceed: 2,
    ImageStatusBanned: 3,
    ImageStatusFailed: 4
  };
  var o = {
    ImageDefault: 0,
    WriteT2i: 1,
    ImgRegen: 2,
    OtterPageT2i: 3
  };
  require.d(exports, {
    imageTypes: function () {
      return o;
    },
    imageStatus: function () {
      return i;
    }
  });
}