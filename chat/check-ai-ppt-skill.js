// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'isAiPptSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 897198
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = e => {
    return (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT;
  };
  require.d(exports, {
    isAiPptSkill: function () {
      return r;
    }
  });
}