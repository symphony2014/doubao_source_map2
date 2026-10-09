// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getDocxMembers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_modules_sync-cursor.d85b0589.js
         * chunkId: 65813
         * moduleId: 592452
         */
module.exports = function (module, exports, require) {
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var colonJoinUtil = require("colon-join-util") /*id: 169655*/;
  function l(e, t) {
    let i = t || docTokenHelperUtils.resolveDocToken();
    return e.appState.members[colonJoinUtil.createColonKey(fileTypeConstants.BasicFileType.DOCX, i)] || [];
  }
  require.d(exports, {
    getDocxMembers: function () {
      return l;
    }
  });
}