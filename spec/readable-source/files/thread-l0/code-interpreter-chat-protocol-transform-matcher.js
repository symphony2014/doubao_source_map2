// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(43273) to 'code-interpreter-identifier'
// - Updated imported property 'u' to 'codeInterpreter' (module 43273)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 552923
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("code-interpreter-identifier") /*id: 43273*/.codeInterpreter,
    matchPluginForMessageToSamanthaChatMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter;
      return isCocoConversationChecker.isCocoConversation(e) && a && !messageContentTypeAndStatusChecker.gzu(e);
    },
    matchPluginForAliceChatMessageToMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter;
      return isCocoConversationChecker.isCocoConversation(e) && a;
    },
    matchPluginForSamanthaChatMessageToMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter;
      return isCocoConversationChecker.isCocoConversation(e) && a;
    }
  };
  require.r(exports);
  require.d(exports, {
    CodeInterpreterChatProtocolransformPluginMatcher: function () {
      return l;
    }
  });
}