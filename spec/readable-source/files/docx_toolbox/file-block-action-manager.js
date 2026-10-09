// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'To' to 'createFileActionMgr'
// - Renamed export 'dQ' to 'getBlockActionFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 715663
         */
module.exports = function (module, exports, require) {
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  var currentUserSelectors = require("current-user-selectors") /*id: 96617*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  require("doc-block-token-extractor") /*id: 128453*/;
  var docxI18nLoaderUtils = require("docx-i18n-loader-utils") /*id: 619747*/;
  var noteTokenSelectors = require("note-token-selectors") /*id: 151174*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function v(e, i) {
    let n = reduxStoreInitializer.reduxStore.getState();
    let l = syncedReferenceBlockUtils.getBlockTokenWithFallback(i.editorAPI, false, true);
    return flowPermissionSelectors.selectActionFlags(n, e, l);
  }
  function m(e, i, n, h) {
    if (!e) {
      return;
    }
    let v = reduxStoreInitializer.reduxStore.getState();
    let m = currentUserSelectors.selectCurrentUser(v);
    let g = fileNodeSelectorUtils.getOwnerNameSelector(syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthEnabled() ? syncUrlBlockUtils.getUrlToken() : undefined)(v);
    if (!g) {
      return;
    }
    let _ = (n == null ? undefined : n.owner_id) || g.get("id");
    let w = (n == null ? undefined : n.tenant_id) || g.get("tenant_id");
    let b = h ? {
      type: fileTypeConstants.BasicFileType.DOCX,
      token: h
    } : undefined;
    if (noteTokenSelectors.selectNoteType(reduxStoreInitializer.reduxStore.getState()) === fileTypeConstants.BasicFileType.SHEET) {
      i = noteTokenSelectors.selectObjToken(reduxStoreInitializer.reduxStore.getState());
    }
    return docActionManager.createActionManager({
      file: {
        token: e,
        type: fileTypeConstants.BasicFileType.FILE,
        ownerId: _,
        tenantId: w,
        isOwner: _ === m.get("id"),
        isExternal: Number(w) !== Number(m.get("tenant_id")),
        business: {
          store: reduxStoreInitializer.reduxStore,
          select: (e, n) => flowPermissionSelectors.selectActionFlags(e, n, i)
        },
        sourceInfo: b
      },
      locale: docxI18nLoaderUtils.getLocaleCode(),
      source: docActionManager.fileTypes.FILE,
      usePool: true
    });
  }
  require.d(exports, {
    createFileActionMgr: function () {
      return m;
    },
    getBlockActionFlags: function () {
      return v;
    }
  });
}