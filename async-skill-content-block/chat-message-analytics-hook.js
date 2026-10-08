// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'useMessageAnalytics'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 344910
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let a = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: t == null ? undefined : t.bot_id,
        message_id: t == null ? undefined : t.message_id,
        whether_browsing: 0
      };
    };
    let a = function (e, t = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...n(),
          ...t
        });
      } catch (e) {}
    };
    let s = async function (e = {}) {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      a("right_click_copy", {
        ...(t == null ? undefined : t.getCanvasTeaParams()),
        ...e
      });
    };
    return useStableObjectHook.useStableObject({
      trackDeepThinkingShow: function (e = {}) {
        a("deep_thinking_progress_show", {
          ...e
        });
      },
      trackDeepThinkingClick: function (e = {}) {
        a("deep_thinking_progress_click", {
          ...e
        });
      },
      trackRightClickCopy: s,
      trackDeepThinkingProgressEnd: function (e = {}) {
        a("deep_thinking_progress_end", {
          ...e
        });
      }
    });
  };
  require.d(exports, {
    useMessageAnalytics: function () {
      return a;
    }
  });
}