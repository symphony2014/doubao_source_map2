// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'getAgentConfigs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 798206
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = () => ({
    creationAgentModelSwitchEnabled: chatFgStoreHooks.getSourceValue("creation_agent_model_switch_enable", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1"
  });
  require.d(exports, {
    getAgentConfigs: function () {
      return a;
    }
  });
}