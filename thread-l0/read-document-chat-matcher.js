// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'checkFileContentType'
// - Resolved require(934971) to 'check-file-content-type'
// - Renamed variable 'l' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(656124) to 'chat-read-document-symbol'
// - Updated imported property 'X' to 'readDocumentSymbol' (module 656124)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'X' to 'isFileContentType' (module 934971)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 787959
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-read-document-symbol") /*id: 656124*/.readDocumentSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (checkFileContentType.isFileContentType(e) || messageContentTypeAndStatusChecker.wDF(e) || messageContentTypeAndStatusChecker.YWn(e)),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && (checkFileContentType.isFileContentType(e) || messageContentTypeAndStatusChecker.wDF(e) || messageContentTypeAndStatusChecker.YWn(e)),
    matchPluginForMessageToAliceChatMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillRead;
      let r = messageContentTypeAndStatusChecker.q4z(e);
      return isCocoConversationChecker.isCocoConversation(e) && (a || r);
    },
    matchPluginForMessageToSamanthaChatMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillRead;
      let r = messageContentTypeAndStatusChecker.q4z(e);
      return isCocoConversationChecker.isCocoConversation(e) && (a || r);
    }
  };
  require.r(exports);
  require.d(exports, {
    ReadDocumentChatProtocolransformPluginMatcher: function () {
      return o;
    }
  });
}