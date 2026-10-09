// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'connectSyncedBlockPermissions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 537601
         */
module.exports = function (module, exports, require) {
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  exports.connectSyncedBlockPermissions = reactReduxCore.connect((e, i) => {
    let n = syncedReferenceBlockUtils.getBlockTokenWithFallback(i.editorAPI, false, true);
    let o = fileNodeSelectorUtils.getOwnerNameSelector(syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthEnabled() ? syncUrlBlockUtils.getUrlToken() : undefined)(e);
    return {
      ...flowPermissionSelectors.selectActionFlags(e, i.struct.snapshot.file.token, n),
      hasCurrentSuiteOwner: !!o
    };
  });
}