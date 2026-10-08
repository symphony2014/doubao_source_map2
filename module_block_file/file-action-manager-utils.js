// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'getFileActionMgr'
// - Renamed export 'x' to 'getDefaultActionMgr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 180452
         */
module.exports = function (module, exports, require) {
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var fileBlockActionManager = require("file-block-action-manager") /*id: 715663*/;
  function s(e) {
    return docActionManager.defaultActionMgr;
  }
  function a(e, i) {
    let n = docActionManager.ActionManagerMap.get(e);
    if (n) {
      return n;
    }
    let {
      editorAPI: s
    } = i;
    let a = syncedReferenceBlockUtils.getBlockTokenWithFallback(s);
    return fileBlockActionManager.createFileActionMgr(e, a);
  }
  require.d(exports, {
    getFileActionMgr: function () {
      return a;
    },
    getDefaultActionMgr: function () {
      return s;
    }
  });
}