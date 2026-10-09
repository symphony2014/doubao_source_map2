// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'getBlockNestingInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 311122
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function u(e) {
    let n = e.parent;
    let i = 0;
    while (n && docBlockTypeCheckers.isAllowedBlockType(n.type)) {
      i += 1;
      n = n.parent;
    }
    let u = i * docxEditorConstantsConfig.defaultItemCount;
    let d = n && n.editorAPI.config.get("isSyncedReferenceBlock");
    let h = syncUrlBlockUtils.isSyncingActive() ? !!n && n.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE : !!n && !!docBlockTypeCheckers.isPageOnlyType(n.type) && !d;
    if (!syncedBlockFeatureFlags.isSyncedBlockScrollable()) {
      return {
        nestingLevel: i,
        indentWidth: u,
        relativeToRootOrSynced: h
      };
    }
    let f = n && docBlockTypeCheckers.isPageOnlyType(n.type) && d;
    if (f) {
      var g;
      let e = n == null ? undefined : (g = n.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken, {
        dynamic: true
      }).get()) === null || g === undefined ? undefined : g.getSyncedReferenceBlockModel(n.editorAPI);
      if (e) {
        n = e;
      }
    }
    let p = n && n.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE || f;
    if (p && n) {
      for (n = n.parent; n && docBlockTypeCheckers.isAllowedBlockType(n.type);) {
        i += 1;
        n = n.parent;
      }
      p = n && docBlockTypeCheckers.isPageOnlyType(n.type);
    }
    u = i * docxEditorConstantsConfig.defaultItemCount;
    return {
      nestingLevel: i,
      indentWidth: u,
      relativeToRootOrSynced: !!h || !!p
    };
  }
  require.d(exports, {
    getBlockNestingInfo: function () {
      return u;
    }
  });
}