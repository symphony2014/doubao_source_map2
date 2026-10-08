// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'isCreationSkillNext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 734713
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let l = () => !!chatFgStoreHooks.getSourceKeySync("creation_skill_chat_next", {
    defaultValue: undefined,
    source: chatStorageKeys.chatStorageKeys.serverAB
  });
  require.d(exports, {
    isCreationSkillNext: function () {
      return l;
    }
  });
}