// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'El' to 'isSyncedBlockBorderUiEnabled'
// - Renamed export 'HV' to 'isPasteAndSyncEnabled'
// - Renamed export 'Jq' to 'isSyncedBlockAuthorised'
// - Renamed export 'VU' to 'isSyncedBlockScrollable'
// - Renamed export 'Xb' to 'isMultiSelectPasteSyncEnabled'
// - Renamed export 'nk' to 'isSyncedBlockAuthEnabled'
// - Renamed export 'xo' to 'isSyncedBlockEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 711756
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var syncedBlockAuthorizationManager = require("synced-block-authorization-manager") /*id: 870887*/;
  function c() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docs.all.synced_block", false);
  }
  function u() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docs.web.synced_block.paste_and_sync", false);
  }
  function a() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docs.web.synced_block.paste_and_sync_multi_selection", false);
  }
  function s() {
    return !!docxShortcutFeatureDetection.isPDFMode() || !!docxShortcutFeatureDetection.isShortcutEnabled() || boolDefaultGetterUtil.getDefaultBool("ccm.docs.all.synced_block.border_ui", false);
  }
  function d() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docs.synced_block.permission.authentication", false);
  }
  function f(e) {
    if (e) {
      return boolDefaultGetterUtil.getDefaultBool("ccm.docs.synced_block.permission.authorise", false) && syncedBlockAuthorizationManager.SyncedBlockAuthorizationManager.getInstance().isOwnerInFg(e);
    } else {
      return boolDefaultGetterUtil.getDefaultBool("ccm.docs.synced_block.permission.authorise", false);
    }
  }
  function h() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docs.all.synced_block_scrollable_enable", false);
  }
  require.d(exports, {
    isSyncedBlockBorderUiEnabled: function () {
      return s;
    },
    isPasteAndSyncEnabled: function () {
      return u;
    },
    isSyncedBlockAuthorised: function () {
      return f;
    },
    isSyncedBlockScrollable: function () {
      return h;
    },
    isMultiSelectPasteSyncEnabled: function () {
      return a;
    },
    isSyncedBlockAuthEnabled: function () {
      return d;
    },
    isSyncedBlockEnabled: function () {
      return c;
    }
  });
}