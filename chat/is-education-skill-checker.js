// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isEducationSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 965929
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = e => {
    return (e == null ? undefined : e.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaEduInput || (e == null ? undefined : e.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.SkillEdu;
  };
  require.d(exports, {
    isEducationSkill: function () {
      return r;
    }
  });
}