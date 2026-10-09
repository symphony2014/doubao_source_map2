// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'checkSyncedBlockSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 834094
         */
module.exports = function (module, exports, require) {
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  function l(e) {
    let r = window.getSelection();
    if (!r) {
      return false;
    }
    if (syncedReferenceBlockUtils.getSyncedBlockContainer(r.anchorNode?.parentElement)) {
      return true;
    }
    let l = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    let u = e.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken, {
      optional: true
    });
    if (u == null) {
      return undefined;
    } else {
      return u.getBlockModelByBlockId(Number(l.getHiddenInputDomCurrentRootBlockId()));
    }
  }
  require.d(exports, {
    checkSyncedBlockSelection: function () {
      return l;
    }
  });
}