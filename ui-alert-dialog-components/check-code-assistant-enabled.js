// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'isCodeAssistantEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 973747
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let r = () => {
    let e = chatFgStoreHooks.getSourceValue("input_upload_code_enable", {
      defaultValue: false,
      source: chatStorageKeys.chatStorageKeys.tea
    });
    let t = chatStoreManager.getStoreState("chatInputStore").checkSupportSkill(chatAppEnums.SkillType.CodeAssistant);
    return e && t;
  };
  require.d(exports, {
    isCodeAssistantEnabled: function () {
      return r;
    }
  });
}