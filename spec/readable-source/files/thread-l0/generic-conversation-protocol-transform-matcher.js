// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Resolved require(692298) to 'chat-generic-conv-symbol'
// - Updated imported property 'W' to 'genericConvSymbol' (module 692298)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-protocol-transform.12288ad1.js
         * chunkId: 92119
         * moduleId: 611198
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  let a = {
    pluginIdentifier: require("chat-generic-conv-symbol") /*id: 692298*/.genericConvSymbol,
    matchPluginForAliceChatMessageToMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (messageContentTypeAndStatusChecker.dpK(e) && (e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillFreeChat || e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant) && !messageContentTypeAndStatusChecker.H6e(e) && !messageContentTypeAndStatusChecker.RUP(e) && !messageContentTypeAndStatusChecker.YWn(e) && !messageContentTypeAndStatusChecker.XD1(e) && !messageContentTypeAndStatusChecker.ePZ(e) && !messageContentTypeAndStatusChecker.fdv(e) || checkNestedContentType.isNestedContentType(e) || messageContentTypeAndStatusChecker.xop(e) || messageContentTypeAndStatusChecker.Brd(e));
    },
    matchPluginForMessageToSamanthaChatMessage(e) {
      let i = e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillFreeChat;
      return isCocoConversationChecker.isCocoConversation(e) && i && !messageContentTypeAndStatusChecker.q4z(e) && !messageContentTypeAndStatusChecker.Fd2(e);
    },
    matchPluginForSamanthaChatMessageToMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (messageContentTypeAndStatusChecker.dpK(e) && (e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillFreeChat || e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant) && !messageContentTypeAndStatusChecker.ePZ(e) && !messageContentTypeAndStatusChecker.H6e(e) && !messageContentTypeAndStatusChecker.RUP(e) && !messageContentTypeAndStatusChecker.YWn(e) && !messageContentTypeAndStatusChecker.XD1(e) && !messageContentTypeAndStatusChecker.fdv(e) || checkNestedContentType.isNestedContentType(e) || messageContentTypeAndStatusChecker.xop(e));
    },
    matchPluginForMessageToAliceChatMessage(e) {
      let i = e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillFreeChat;
      return isCocoConversationChecker.isCocoConversation(e) && i && !messageContentTypeAndStatusChecker.q4z(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    GenericConversationProtocolransformPluginMatcher: function () {
      return a;
    }
  });
}