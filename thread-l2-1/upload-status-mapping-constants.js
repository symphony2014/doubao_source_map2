// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'uploadStatusMapping'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 790047
         */
module.exports = function (module, exports, require) {
  var statusConstants = require("status-constants") /*id: 356183*/;
  var fileUploadOverlayComponent = require("file-upload-overlay-component") /*id: 148138*/;
  let o = {
    [statusConstants.statusTypes.Processing]: fileUploadOverlayComponent.UploadStatusEnum.Uploading,
    [statusConstants.statusTypes.Success]: fileUploadOverlayComponent.UploadStatusEnum.Normal,
    [statusConstants.statusTypes.Failed]: fileUploadOverlayComponent.UploadStatusEnum.Retry
  };
  require.d(exports, {
    uploadStatusMapping: function () {
      return o;
    }
  });
}