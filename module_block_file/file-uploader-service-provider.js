// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'fileUploaderService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 754512
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("file-uploader-service");
  require.d(exports, {
    fileUploaderService: function () {
      return r;
    }
  });
}