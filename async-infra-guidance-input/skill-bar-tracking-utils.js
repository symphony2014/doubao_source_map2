// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GI' to 'SkillShowPosition'
// - Renamed export 'JL' to 'useSkillEventHandlers'
// - Renamed export 'Qy' to 'SKILL_BAR_BTN_CLASS'
// - Renamed export 'Un' to 'isSkillBarVisible'
// - Renamed export 'WO' to 'useSkillBarLogger'
// - Renamed export 's' to 'createSkillTracker'
// - Renamed export 'yJ' to 'useChatMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 660682
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatInputSkillSelectors = require("chat-input-skill-selectors") /*id: 627774*/;
  let h = "skill-bar-button";
  let p = () => document.querySelectorAll(`.${h}`).length > 0;
  let m = e => {
    let {
      visible: t,
      displaySkills: n,
      reportParams: i
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t && n.length !== 0) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "skill_bar_show_start",
          meta: i
        });
        setTimeout(() => {
          if (p()) {
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "skill_bar_show_success",
              meta: i
            });
          }
        }, 300);
      }
    }, []);
  };
  let f = e => {
    let {
      chatId: t
    } = e;
    return chatFeedStoreFactory.useFeedStore(e => {
      let i = chatConversationSelectors_2.getConversation(e, t);
      let r = chatConversationSelectors_2.getLocalConversation(e, t);
      return {
        conversation_id: t,
        bot_id: chatConversationSelectors_2.getBotId(e),
        conversation_type: (i == null ? undefined : i.conversation_type) ?? (r == null ? undefined : r.conversation_type)
      };
    }, deepEqualityUtil_1.isDeepEqual);
  };
  (i = {}).More = "more";
  i.Default = "default";
  i.KeyboardAt = "keyboard_at";
  let g = i;
  let b = e => ({
    reportSkillShow: function (t) {
      var n;
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : g.Default;
      let r = chatInputSkillSelectors.getChatInputSkills().findIndex(e => e.skill_type === (t == null ? undefined : t.skill_type));
      teaAnalyticsEventTracker.trackEvent("chat_action_bar_show", {
        skill_id: t == null ? undefined : (n = t.skill_type) === null || n === undefined ? undefined : n.toString(),
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill_type),
        show_position: i,
        position: r === -1 ? undefined : r,
        is_top: (t == null ? undefined : t.sticky) ? "1" : "0",
        ...e
      });
    },
    reportMoreSkillsShow: t => {
      teaAnalyticsEventTracker.trackEvent("chat_action_bar_show", {
        skill_name: "skills",
        show_position: "default",
        is_top: "0",
        position: t,
        ...e
      });
    },
    reportSkillPinShow: () => {
      teaAnalyticsEventTracker.trackEvent("chat_action_bar_show", {
        skill_name: "change_index",
        show_position: "more",
        is_top: "0",
        position: chatInputSkillSelectors.getChatInputSkills().length,
        ...e
      });
    },
    reportMoreSkillClick: t => {
      teaAnalyticsEventTracker.trackEvent("chat_action_bar_click", {
        skill_name: "skills",
        show_position: "default",
        is_top: "0",
        position: t,
        ...e
      });
    },
    reportSkillPinClick: () => {
      teaAnalyticsEventTracker.trackEvent("chat_action_bar_click", {
        skill_name: "change_index",
        show_position: "more",
        is_top: "0",
        position: chatInputSkillSelectors.getChatInputSkills().length,
        ...e
      });
    }
  });
  let y = e => {
    let {
      reportSkillShow: t,
      reportMoreSkillsShow: n,
      reportSkillPinShow: i,
      reportMoreSkillClick: r,
      reportSkillPinClick: o
    } = b(e);
    return {
      reportSkillShow: t,
      reportMoreSkillsShow: n,
      reportSkillPinShow: i,
      reportMoreSkillClick: r,
      reportSkillPinClick: () => {
        o();
        teaAnalyticsEventTracker.trackEvent("skill_switch_click", {
          button_name: "skill_setting"
        });
      },
      reportSkillSwitchClick: e => {
        let {
          skillType: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("skill_switch_click", {
          button_name: skillTypeMappings.getSkillName(t)
        });
      }
    };
  };
  require.d(exports, {
    SkillShowPosition: function () {
      return g;
    },
    useSkillEventHandlers: function () {
      return y;
    },
    SKILL_BAR_BTN_CLASS: function () {
      return h;
    },
    isSkillBarVisible: function () {
      return p;
    },
    useSkillBarLogger: function () {
      return m;
    },
    createSkillTracker: function () {
      return b;
    },
    useChatMetadata: function () {
      return f;
    }
  });
}