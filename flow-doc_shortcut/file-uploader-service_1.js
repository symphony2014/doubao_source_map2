// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'fileUploaderService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 571601
         */
module.exports = function (module, exports, require) {
  var fileUploaderServiceProvider = require("file-uploader-service-provider") /*id: 754512*/;
  require.d(exports, {
    fileUploaderService: function () {
      return fileUploaderServiceProvider.fileUploaderService;
    }
  });
}