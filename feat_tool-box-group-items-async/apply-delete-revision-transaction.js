// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'applyDeleteRevisionTransaction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 904375
         */
module.exports = function (module, exports, require) {
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  async function o(e, i, l, o) {
    if (!e.config.get("revising")) {
      return false;
    }
    let [r, d] = editorRevisionDeleteOperations.processDeleteRevision(e, l, i);
    return !!r && !!d && (await e.applyTransaction(o, i => editorRevisionDeleteOperations.createDeleteRevisionWithSelection(e, i, r), {
      extra: {
        revisionContext: d
      }
    }), editorRevisionDeleteOperations.applyDeleteRevision(e, i, r), true);
  }
  require.d(exports, {
    applyDeleteRevisionTransaction: function () {
      return o;
    }
  });
}