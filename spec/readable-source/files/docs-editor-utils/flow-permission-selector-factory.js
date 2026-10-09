// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rf' to 'createCopyableSelector'
// - Renamed export 'qE' to 'createEditableSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 953431
         */
module.exports = function (module, exports, require) {
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  let c = () => flowPermissionSelectors.createCopyableSel(syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthEnabled() ? syncUrlBlockUtils.getUrlToken() : undefined);
  let u = () => flowPermissionSelectors.createEditableSel();
  require.d(exports, {
    createCopyableSelector: function () {
      return c;
    },
    createEditableSelector: function () {
      return u;
    }
  });
}