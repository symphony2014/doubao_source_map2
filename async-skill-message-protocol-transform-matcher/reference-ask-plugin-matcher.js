// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Resolved require(335530) to 'reference-ask-symbol'
// - Updated imported property 'V' to 'ReferenceAsk' (module 335530)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 550655
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  let r = {
    pluginIdentifier: require("reference-ask-symbol") /*id: 335530*/.ReferenceAsk,
    matchPluginForMessageToSamanthaChatMessage(e) {
      let a = e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.DesExtSkillReferenceAsk;
      return isCocoConversationChecker.isCocoConversation(e) && a;
    }
  };
  require.r(exports);
  require.d(exports, {
    ReferenceAskProtocolTransformPluginMatcher: function () {
      return r;
    }
  });
}