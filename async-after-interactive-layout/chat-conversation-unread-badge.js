// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'ConversationUnreadBadge'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 66044
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var unreadBadgeCount = require("unread-badge-count") /*id: 354225*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var h = {
    badge: "badge-EenYZd"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      className: t,
      count: n,
      onClick: r
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: u(h.badge, t),
        onClick: r,
        children: n > 99 ? "99+" : n
      });
    } else {
      return null;
    }
  };
  let v = e => {
    let {
      lastMessageIndex: t,
      conversation: n,
      inView: c
    } = e;
    let {
      botInfo: u
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(n == null ? undefined : n.conversation_id);
    let h = unreadBadgeCount.getUnreadBadgeCount(t);
    let v = chatViewCoreSelectors.useChatId();
    reactCoreLibraryReexport.useEffect(() => {
      if (c && h && (n == null ? undefined : n.conversation_id)) {
        teaAnalyticsEventTracker.trackEvent("red_dot_show", {
          bot_id: n == null ? undefined : n.bot_id,
          conversation_id: n == null ? undefined : n.conversation_id,
          conversation_type: n == null ? undefined : n.conversation_type,
          show_from: "chat_bot_list",
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), n == null ? undefined : n.conversation_id, u),
          red_dot_cnt: h
        });
      }
    }, [c, h, n == null ? undefined : n.conversation_id]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c && h && (n == null ? undefined : n.conversation_id) && v !== (n == null ? undefined : n.conversation_id)) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "red_dot_show",
          meta: {
            conversation_id: n == null ? undefined : n.conversation_id,
            red_dot_cnt: h,
            badge_count: t == null ? undefined : t.badge_count,
            read_badge_count: t == null ? undefined : t.read_badge_count,
            conversation_type: n == null ? undefined : n.conversation_type
          }
        });
      }
    }, [c, h, n == null ? undefined : n.conversation_id, v, t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "feed-list-item-tool-button-hide-on-active p-1",
      children: reactJsxRuntimeCoreReexport.jsx(m, {
        count: h,
        "data-testid": "chat_list_item_unread_count",
        className: "w-fit"
      })
    });
  };
  require.d(exports, {
    ConversationUnreadBadge: function () {
      return v;
    }
  });
}