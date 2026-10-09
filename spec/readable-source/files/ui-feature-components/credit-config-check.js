// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'isCreditEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 492264
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var creditConstantsConfig = require("credit-constants-config") /*id: 399502*/;
  let l = () => chatFgStoreHooks.getSourceValue("enableCommerceCredit", {
    source: chatStorageKeys.chatStorageKeys.serverAB
  }) === creditConstantsConfig.configVersion;
  require.d(exports, {
    isCreditEnabled: function () {
      return l;
    }
  });
}