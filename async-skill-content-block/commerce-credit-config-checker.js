// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'isCreditEnabled'
// - Renamed export 'c' to 'withCreditCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 908741
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var creditConstantsConfig = require("credit-constants-config") /*id: 399502*/;
  let r = () => {
    var t;
    let n = (t = chatStoreManager.getStoreState("launcherRawSettingStore").settingData) === null || t === undefined ? undefined : t.ab_config?.ab_results;
    let r = n && (n == null ? undefined : n.enableCommerceCredit) === creditConstantsConfig.configVersion;
    return chatFgStoreHooks.getSourceKeySync("enableCommerceCredit", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === creditConstantsConfig.configVersion || r;
  };
  let s = e => chatFgStoreHooks.fetchSourceKey("enableCommerceCredit", {
    source: chatStorageKeys.chatStorageKeys.serverAB
  }).then(t => {
    if (t === creditConstantsConfig.configVersion) {
      return e();
    }
  });
  require.d(exports, {
    isCreditEnabled: function () {
      return r;
    },
    withCreditCheck: function () {
      return s;
    }
  });
}