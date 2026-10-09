// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'checkImageContentType'
// - Resolved require(490356) to 'check-image-content-type'
// - Resolved require(490550) to 'chat-ugc-bot-symbol'
// - Updated imported property 'Q' to 'ugcBotImageSymbol' (module 490550)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 's' to 'isImageContentType' (module 490356)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 663913
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var checkImageContentType = require("check-image-content-type") /*id: 490356*/;
  let l = {
    pluginIdentifier: require("chat-ugc-bot-symbol") /*id: 490550*/.ugcBotImageSymbol,
    matchPluginForAliceChatMessageToMessage: e => botConversationTypeCheck.isBotConversation(e) && checkImageContentType.isImageContentType(e),
    matchPluginForMessageToAliceChatMessage(e) {
      return botConversationTypeCheck.isBotConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillImageGen;
    }
  };
  require.r(exports);
  require.d(exports, {
    UgcBotsImageGenerateChatProtocolransformPluginMatcher: function () {
      return l;
    }
  });
}