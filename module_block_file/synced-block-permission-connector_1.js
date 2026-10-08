// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'syncedBlockConnector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 618868
         */
module.exports = function (module, exports, require) {
  var syncedBlockPermissionConnector = require("synced-block-permission-connector") /*id: 537601*/;
  var docxBlockToHtmlConverterHelper = require("docx-block-to-html-converter-helper") /*id: 260169*/;
  exports.syncedBlockConnector = syncedBlockPermissionConnector.connectSyncedBlockPermissions(docxBlockToHtmlConverterHelper.getInlineMentionTypeAttr);
}