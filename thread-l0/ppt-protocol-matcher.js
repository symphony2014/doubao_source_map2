// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'checkAiPptSkill'
// - Resolved require(897198) to 'check-ai-ppt-skill'
// - Resolved require(640338) to 'ppt-generate-symbol'
// - Updated imported property 'x' to 'pptGenerateSymbol' (module 640338)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'F' to 'isAiPptSkill' (module 897198)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 485259
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var checkAiPptSkill = require("check-ai-ppt-skill") /*id: 897198*/;
  let l = {
    pluginIdentifier: require("ppt-generate-symbol") /*id: 640338*/.pptGenerateSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && checkAiPptSkill.isAiPptSkill(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && checkAiPptSkill.isAiPptSkill(e),
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT;
    },
    matchPluginForMessageToAliceChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT;
    }
  };
  require.r(exports);
  require.d(exports, {
    PptGenerateChatProtocolransformPluginMatcher: function () {
      return l;
    }
  });
}