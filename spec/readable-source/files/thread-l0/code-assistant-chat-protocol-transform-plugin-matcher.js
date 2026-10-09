// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(750462) to 'code-assistant-constant'
// - Updated imported property 'F' to 'codeAssistantId' (module 750462)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 997983
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("code-assistant-constant") /*id: 750462*/.codeAssistantId,
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant && !messageContentTypeAndStatusChecker.gzu(e);
    },
    matchPluginForMessageToAliceChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant;
    },
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.ePZ(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.ePZ(e)
  };
  require.r(exports);
  require.d(exports, {
    CodeAssistantChatProtocolransformPluginMatcher: function () {
      return l;
    }
  });
}