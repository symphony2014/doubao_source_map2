// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'aiSkillTypeResolver'
// - Resolved require(631164) to 'ai-skill-type-resolver'
// - Resolved require(819899) to 'video-generation-symbol'
// - Updated imported property 'X' to 'videoGenSymbol' (module 819899)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'd' to 'resolveSkillType' (module 631164)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 521521
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiSkillTypeResolver = require("ai-skill-type-resolver") /*id: 631164*/;
  let o = {
    pluginIdentifier: require("video-generation-symbol") /*id: 819899*/.videoGenSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.zTh(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.zTh(e),
    matchPluginForMessageToSamanthaChatMessage(e) {
      let a = e.skill ?? aiSkillTypeResolver.resolveSkillType(e.ext);
      return isCocoConversationChecker.isCocoConversation(e) && a.skill_type === aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration;
    },
    matchPluginForMessageToAliceChatMessage(e) {
      let a = e.skill ?? aiSkillTypeResolver.resolveSkillType(e.ext);
      return isCocoConversationChecker.isCocoConversation(e) && a.skill_type === aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration;
    }
  };
  require.r(exports);
  require.d(exports, {
    VideoGenerationransformPluginMatcher: function () {
      return o;
    }
  });
}