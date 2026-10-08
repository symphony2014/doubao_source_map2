// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'getChatGuidance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 801476
         */
module.exports = function (module, exports, require) {
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let l = function ({
    chatId: e,
    chatType: t
  } = {}) {
    let n = chatConversationSelectors.selectConvLink(e || "", t);
    let l = chatGuidanceSelectors.useActiveSkillId();
    let o = [chatAppEnums.SkillType.WriteAssistant, chatAppEnums.SkillType.ImageGeneration, chatAppEnums.SkillType.Search, chatAppEnums.SkillType.CodeAssistant].includes(l);
    return {
      isNewChatInput: true,
      isNewChatInputInChat: n && (!l || o),
      loading: false
    };
  };
  require.d(exports, {
    getChatGuidance: function () {
      return l;
    }
  });
}