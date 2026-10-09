// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lt' to 'getSelection'
// - Renamed export 'gH' to 'clearSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 360452
         */
module.exports = function (module, exports, require) {
  var syncedRefBlockKeyProvider = require("synced-ref-block-key-provider") /*id: 755472*/;
  function i(e) {
    return e.editorAPI.getService(syncedRefBlockKeyProvider.syncedRefBlockKey, {
      dynamic: true
    }).get();
  }
  function l(e) {
    let n = i(e);
    if (n == null) {
      return undefined;
    } else {
      return n.getSelection();
    }
  }
  function c(e) {
    let n = i(e);
    if (n == null) {
      return undefined;
    } else {
      return n.removeAllSelection();
    }
  }
  require.d(exports, {
    getSelection: function () {
      return l;
    },
    clearSelection: function () {
      return c;
    }
  });
}