// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'formatSkillType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 955849
         */
module.exports = function (module, exports, require) {
  var aiSkillTypeResolver = require("ai-skill-type-resolver") /*id: 631164*/;
  let r = e => {
    let t = aiSkillTypeResolver.resolveSkillType(e);
    return {
      skill: {
        skill_type: t.skill_type,
        skill_type_no_default: t.skill_type ? t.skill_type : null,
        skill_id: `${t.skill_type}`,
        skill_id_no_default: t.skill_type ? `${t.skill_type}` : null
      }
    };
  };
  require.d(exports, {
    formatSkillType: function () {
      return r;
    }
  });
}