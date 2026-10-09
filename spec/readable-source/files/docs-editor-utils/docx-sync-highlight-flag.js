// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'getDocxSyncHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 537285
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.synced_block_highlight_share", false);
  }
  require.d(exports, {
    getDocxSyncHighlight: function () {
      return i;
    }
  });
}