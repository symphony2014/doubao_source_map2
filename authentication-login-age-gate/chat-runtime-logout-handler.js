// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'setupLogoutHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 642104
         */
module.exports = function (module, exports, require) {
  var chatRuntimeSdkKeys = require("chat-runtime-sdk-keys") /*id: 165630*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var flowLoginStorageFlag = require("flow-login-storage-flag") /*id: 966634*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var chromeExtensionMessageSender = require("chrome-extension-message-sender") /*id: 875713*/;
  var chatFgConfigManager = require("chat-fg-config-manager") /*id: 994655*/;
  let c = () => {
    flowAccountModule.getFlowAccount().passportApi.on("afterLogout", () => {
      var e;
      chromeExtensionMessageSender.updateAuthInfo(false);
      if ((e = teaIdentityManager.clearIdentityCache()) !== null && e !== undefined) {
        e.then(teaIdentityManager.initGuestUserId);
      }
      flowLoginStorageFlag.removeLoginFlag();
      u();
      chatFgConfigManager.getFgConfig();
    });
  };
  let u = () => {
    window[chatRuntimeSdkKeys.sdkPromiseKeys.Launch] &&= Promise.resolve(null);
  };
  require.d(exports, {
    setupLogoutHandler: function () {
      return c;
    }
  });
}