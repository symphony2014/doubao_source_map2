// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'resolveSkillType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 631164
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  function a(e) {
    if (e == null ? undefined : e.input_skill) {
      let t = e == null ? undefined : e.input_skill;
      return safeJsonUtils.safeParse(t, {
        skill_id: String(aiAssistantSkillTypes.SkillTypes.SkillFreeChat),
        skill_type: aiAssistantSkillTypes.SkillTypes.SkillFreeChat
      });
    }
    if (e == null ? undefined : e.input_content_type) {
      let t = aiSkillProtocolTransformMatcher.samanthaToSkillMap[Number(e == null ? undefined : e.input_content_type)];
      return {
        skill_id: String(t),
        skill_type: Number(t)
      };
    }
    if (e == null ? undefined : e.chat_ability) {
      let {
        ability_type: t
      } = safeJsonUtils.safeParse(e == null ? undefined : e.chat_ability, {
        ability_type: aiAssistantSkillTypes.SkillTypes.SkillFreeChat
      });
      return {
        skill_id: String(t),
        skill_type: t
      };
    }
    return {
      skill_id: String(aiAssistantSkillTypes.SkillTypes.SkillFreeChat),
      skill_type: aiAssistantSkillTypes.SkillTypes.SkillFreeChat
    };
  }
  require.d(exports, {
    resolveSkillType: function () {
      return a;
    }
  });
}