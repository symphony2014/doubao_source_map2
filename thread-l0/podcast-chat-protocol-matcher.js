// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(969505) to 'podcast-symbol'
// - Updated imported property 'b' to 'podcastSymbol' (module 969505)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 490629
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("podcast-symbol") /*id: 969505*/.podcastSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.AqD(e),
    matchPluginForSamanthaChatMessageToMessage: e => false,
    matchPluginForMessageToAliceChatMessage: e => false,
    matchPluginForMessageToSamanthaChatMessage(e) {
      let a = (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillAiPodcast;
      return isCocoConversationChecker.isCocoConversation(e) && a;
    }
  };
  require.r(exports);
  require.d(exports, {
    PodcastChatProtocolTransformPluginMatcher: function () {
      return l;
    }
  });
}