// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'fetchCodingSkillStatus'
// - Renamed export 'w' to 'getCodingSkillStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 749495
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let r = () => ({
    enableCodingSkill: chatFgStoreHooks.getSourceValue("enable_code_skill", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) !== "0"
  });
  let o = async () => ({
    enableCodingSkill: (await chatFgStoreHooks.fetchSourceKey("enable_code_skill", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    })) !== "0"
  });
  require.d(exports, {
    fetchCodingSkillStatus: function () {
      return o;
    },
    getCodingSkillStatus: function () {
      return r;
    }
  });
}