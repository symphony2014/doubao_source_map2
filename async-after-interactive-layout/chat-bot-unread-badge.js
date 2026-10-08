// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ChatBotUnreadBadge'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 370441
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var unreadBadgeCount = require("unread-badge-count") /*id: 354225*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      count: t,
      className: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(n, "size-14 rounded-full bg-dbx-neutral-700 text-dbx-static-white text-10 leading-14 text-center font-medium"),
      children: t
    });
  };
  let f = e => {
    let {
      lastMessageIndex: t,
      conversation: n,
      inView: i
    } = e;
    let {
      botInfo: o
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(n == null ? undefined : n.conversation_id);
    let f = unreadBadgeCount.getUnreadBadgeCount(t);
    let m = chatViewCoreSelectors.useChatId();
    reactCoreLibraryReexport.useEffect(() => {
      if (i && f && (n == null ? undefined : n.conversation_id)) {
        teaAnalyticsEventTracker.trackEvent("red_dot_show", {
          bot_id: n == null ? undefined : n.bot_id,
          conversation_id: n == null ? undefined : n.conversation_id,
          conversation_type: n == null ? undefined : n.conversation_type,
          show_from: "chat_bot_list",
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), n == null ? undefined : n.conversation_id, o),
          red_dot_cnt: f
        });
      }
    }, [i, f, n == null ? undefined : n.conversation_id]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && f && (n == null ? undefined : n.conversation_id) && m !== (n == null ? undefined : n.conversation_id)) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "red_dot_show",
          meta: {
            conversation_id: n == null ? undefined : n.conversation_id,
            red_dot_cnt: f,
            badge_count: t == null ? undefined : t.badge_count,
            read_badge_count: t == null ? undefined : t.read_badge_count,
            conversation_type: n == null ? undefined : n.conversation_type
          }
        });
      }
    }, [i, f, n == null ? undefined : n.conversation_id, t, m]);
    if (f === 0) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "feed-list-item-tool-button-hide-on-active",
        children: reactJsxRuntimeCoreReexport.jsx(p, {
          count: Math.min(f, 99)
        })
      });
    }
  };
  require.d(exports, {
    ChatBotUnreadBadge: function () {
      return f;
    }
  });
}