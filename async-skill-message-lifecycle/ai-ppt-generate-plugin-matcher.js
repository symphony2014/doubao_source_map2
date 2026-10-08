// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(332083) to 'chat-ppt-generate-symbol'
// - Updated imported property 'l' to 'pptGenerateKey' (module 332083)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 614953
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    pluginIdentifier: require("chat-ppt-generate-symbol") /*id: 332083*/.pptGenerateKey,
    matchPlugin(e) {
      return e.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT;
    }
  };
  require.r(exports);
  require.d(exports, {
    PPTGenerateMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}