// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'n' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'isEducationSkillChecker'
// - Resolved require(965929) to 'is-education-skill-checker'
// - Resolved require(702955) to 'edu-exercise-symbol'
// - Updated imported property '$' to 'eduExerciseSymbol' (module 702955)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 't' to 'isEducationSkill' (module 965929)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 149868
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var isEducationSkillChecker = require("is-education-skill-checker") /*id: 965929*/;
  let l = {
    pluginIdentifier: require("edu-exercise-symbol") /*id: 702955*/.eduExerciseSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && isEducationSkillChecker.isEducationSkill(e),
    matchPluginForMessageToSamanthaChatMessage(e) {
      return isCocoConversationChecker.isCocoConversation(e) && e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillEdu;
    }
  };
  require.r(exports);
  require.d(exports, {
    ExerciseChatProtocolTransformPluginMatcher: function () {
      return l;
    }
  });
}