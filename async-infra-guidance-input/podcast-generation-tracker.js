// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RG' to 'shouldGeneratePodcast'
// - Renamed export 'jr' to 'trackPodcastGeneration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 749919
         */
module.exports = function (module, exports, require) {
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let o = [chatInputAiFeatureConstants.AiFeatureType.GeneratePodcast];
  let s = e => {
    let {
      presetPrompt: t
    } = e;
    if (t && o.includes(t)) {
      return true;
    }
  };
  let u = e => {
    let [t] = e || [];
    if (t) {
      if (t.type === "file") {
        if (t.from === "ai-space") {
          return "upload_ai_space_file";
        } else {
          return "upload_local_file";
        }
      } else if (t.type === "link") {
        return "web_link";
      } else {
        return undefined;
      }
    } else {
      return "prompt";
    }
  };
  let c = e => {
    let {
      presetPrompt: t,
      attachments: n,
      clickFrom: i
    } = e;
    if (t && o.includes(t) || i === "direct_send") {
      teaAnalyticsEventTracker.trackEvent("start_generate_podcast", {
        skill_id: aiAssistantSkillTypes.SkillTypes.SkillAiPodcast.toString(),
        skill_name: skillTypeMappings.getSkillName(aiAssistantSkillTypes.SkillTypes.SkillAiPodcast),
        create_way: u(n),
        click_from: i,
        preset_prompt: t || "direct_send"
      });
    }
  };
  require.d(exports, {
    shouldGeneratePodcast: function () {
      return s;
    },
    trackPodcastGeneration: function () {
      return c;
    }
  });
}