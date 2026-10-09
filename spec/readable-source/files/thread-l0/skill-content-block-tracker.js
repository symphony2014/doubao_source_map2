// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'createSkillBlockTracker'
// - Renamed export 'M' to 'createMessageTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 837089
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let c = (e, t) => {
    let {
      scene: s
    } = t ?? {};
    let c = s === skillMessageLifecycleTypes.messageRole.Thinking;
    return {
      skill_id: e == null ? undefined : e.skill?.skill_id_no_default,
      skill_name: skillTypeMappings.getSkillName(e == null ? undefined : e.skill?.skill_type_no_default),
      conversation_id: e == null ? undefined : e.conversation_id,
      bot_id: e == null ? undefined : e.bot_id,
      message_id: e == null ? undefined : e.message_id,
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", (e == null ? undefined : e.conversation_id) || ""),
      conversation_type: chatConversationSelectorUtils.getConversationType((e == null ? undefined : e.conversation_id) || ""),
      is_deep_thinking: +!!c
    };
  };
  let d = e => {
    let {
      message: t,
      blockContent: n
    } = e;
    return useStableObjectHook.useStableObject({
      trackBase: function (e, i = {}) {
        try {
          teaAnalyticsEventTracker.trackEvent(e, {
            ...c(t, n),
            ...i
          });
        } catch (e) {}
      }
    });
  };
  let u = e => {
    let {
      message: t
    } = e;
    return function (e, n = {}) {
      teaAnalyticsEventTracker.trackEvent(e, {
        ...c(t),
        ...n
      });
    };
  };
  require.d(exports, {
    createSkillBlockTracker: function () {
      return d;
    },
    createMessageTracker: function () {
      return u;
    }
  });
}