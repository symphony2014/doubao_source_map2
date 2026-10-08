// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'isAispaceUploadEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 865738
         */
module.exports = function (module, exports, require) {
  var isWorkspaceMode = require("is-workspace-mode") /*id: 799020*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let o = () => {
    let e = chatFgStoreHooks.getSourceValue("ab_config.ab_results.aispace_revert", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.setting
    });
    let t = chatFgStoreHooks.getSourceValue("input_upload_aispace_enable", {
      defaultValue: false,
      source: chatStorageKeys.chatStorageKeys.tea
    });
    let n = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return !isWorkspaceMode.isWorkspaceMode() && n && e !== "0" && t && true;
  };
  require.d(exports, {
    isAispaceUploadEnabled: function () {
      return o;
    }
  });
}