// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(958144) to 'chat-writing-symbol'
// - Updated imported property 'A' to 'writingSymbol' (module 958144)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 198379
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("chat-writing-symbol") /*id: 958144*/.writingSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (messageContentTypeAndStatusChecker.x4s(e) || messageContentTypeAndStatusChecker.fdv(e) || messageContentTypeAndStatusChecker.zwb(e) || messageContentTypeAndStatusChecker.z7f(e) || messageContentTypeAndStatusChecker.X6X(e) || messageContentTypeAndStatusChecker.XD1(e) || messageContentTypeAndStatusChecker.rKF(e) || messageContentTypeAndStatusChecker.Fd2(e)),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (messageContentTypeAndStatusChecker.x4s(e) || messageContentTypeAndStatusChecker.fdv(e) || messageContentTypeAndStatusChecker.zwb(e) || messageContentTypeAndStatusChecker.z7f(e) || messageContentTypeAndStatusChecker.X6X(e) || messageContentTypeAndStatusChecker.XD1(e) || messageContentTypeAndStatusChecker.rKF(e) || messageContentTypeAndStatusChecker.Fd2(e)),
    matchPluginForMessageToSamanthaChatMessage(e) {
      let {
        skill: t
      } = e;
      return isCocoConversationChecker.isCocoConversation(e) && ((t == null ? undefined : t.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillWrite || (t == null ? undefined : t.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillFreeChat && messageContentTypeAndStatusChecker.Fd2(e));
    },
    matchPluginForMessageToAliceChatMessage(e) {
      let {
        skill: t
      } = e;
      return isCocoConversationChecker.isCocoConversation(e) && (t == null ? undefined : t.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillWrite;
    }
  };
  require.r(exports);
  require.d(exports, {
    WritingChatProtocolTransformPluginMatcher: function () {
      return l;
    }
  });
}