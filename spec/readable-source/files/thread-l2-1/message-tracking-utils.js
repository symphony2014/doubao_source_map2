// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useMessageTracking'
// - Renamed export 'S' to 'formatCardData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 353360
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let s = e => {
    let t = objectPathGetDefault.getObjectPathDefault(e, ["verbose", "deep_research", "deep_research_id"]);
    let n = objectPathGetDefault.getObjectPathDefault(e, ["ext", "deep_research_id"]);
    return t || n;
  };
  let c = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: chatConversationBotId.getConversationBotId(t == null ? undefined : t.conversation_id, true),
        message_id: t == null ? undefined : t.message_id,
        section_id: t == null ? undefined : t.section_id
      };
    };
    let i = () => {
      let e = s(t);
      return {
        ...(e ? {
          deep_research_id: e
        } : {})
      };
    };
    return useStableObjectHook.useStableObject({
      trackBase: function (e, t = {}) {
        try {
          teaAnalyticsEventTracker.trackEvent(e, {
            ...n(),
            ...i(),
            ...t
          });
        } catch (e) {}
      }
    });
  };
  let d = e => ({
    text_card: {
      card_list: e.map(e => e.text_card).filter(Boolean)
    },
    video_card: {
      card_list: e.map(e => e.video_card).filter(Boolean)
    }
  });
  require.d(exports, {
    useMessageTracking: function () {
      return c;
    },
    formatCardData: function () {
      return d;
    }
  });
}