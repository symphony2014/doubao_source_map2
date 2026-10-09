// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Resolved require(514486) to 'chat-read-website-symbol'
// - Updated imported property 'g' to 'ReadWebSite' (module 514486)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 691540
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  let r = {
    pluginIdentifier: require("chat-read-website-symbol") /*id: 514486*/.ReadWebSite,
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillWebpage;
    },
    matchPluginForMessageToAliceChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillWebpage;
    }
  };
  require.r(exports);
  require.d(exports, {
    ReadWebsiteChatProtocolransformPluginMatcher: function () {
      return r;
    }
  });
}