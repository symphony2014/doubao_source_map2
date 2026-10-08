// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(146954) to 'chat-search-symbol'
// - Updated imported property 'F' to 'searchSymbol' (module 146954)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 113012
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("chat-search-symbol") /*id: 146954*/.searchSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && !messageContentTypeAndStatusChecker.qqf(e) && !messageContentTypeAndStatusChecker.fdv(e) && (messageContentTypeAndStatusChecker.zZW(e) || messageContentTypeAndStatusChecker.a_6(e) || messageContentTypeAndStatusChecker.H6e(e)),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && !messageContentTypeAndStatusChecker.qqf(e) && !messageContentTypeAndStatusChecker.fdv(e) && (messageContentTypeAndStatusChecker.zZW(e) || messageContentTypeAndStatusChecker.a_6(e) || messageContentTypeAndStatusChecker.H6e(e)),
    matchPluginForMessageToAliceChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillSearch;
    },
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillSearch;
    }
  };
  require.r(exports);
  require.d(exports, {
    SearchChatProtocolransformPluginMatcher: function () {
      return l;
    }
  });
}