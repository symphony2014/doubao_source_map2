// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'chatPageRouteConstants'
// - Resolved require(628768) to 'chat-page-route-constants'
// - Renamed variable 'r' to 'getBotRequestId'
// - Resolved require(36990) to 'get-bot-request-id'
// - Renamed variable 'a' to 'loginUrlParamHandlers'
// - Resolved require(804250) to 'login-url-param-handlers'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'd' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'v' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'lC' to 'getConversationBotInfo' (module 926482)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'W8' to 'getOrStoreLoginSource' (module 804250)
// - Updated imported property 'aG' to 'pageRoutes' (module 628768)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'Dj' to 'getBotRequestId' (module 36990)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-event-tracker.8604c016.js
         * chunkId: 38237
         * moduleId: 30933
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  var getBotRequestId = require("get-bot-request-id") /*id: 36990*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  let g = () => {
    let g = useLocationWrapper.useLocationWrapper();
    let {
      currentChatViewConfig: _
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let f = reactCoreLibraryReexport.useRef("");
    let p = reactCoreLibraryReexport.useRef(0);
    let m = (_ == null ? undefined : _.chatId) ?? "";
    let h = chatConversationBotId.getConversationBotId(m, true);
    let {
      botInfo: b,
      conversation: y
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(m);
    let I = loginUrlParamHandlers.getOrStoreLoginSource(g);
    let B = g.state?.from_visit_page;
    let L = (g == null ? undefined : g.state?.enter_from) === "bot_discover";
    let T = () => {
      if ((!(g == null ? undefined : g.state?.create_chat_type) || g.state.create_chat_type !== "chat_with_bot") && f.current !== m) {
        f.current = m;
        p.current = Date.now();
        let t = {
          current_page: chatPageRouteConstants.pageRoutes.CHAT,
          previous_page: I || B || chatPageRouteConstants.pageRoutes.OTHER,
          page: chatPageRouteConstants.pageRoutes.CHAT,
          bot_id: h,
          is_tts: 0,
          conversation_id: m,
          conversation_type: y == null ? undefined : y.conversation_type,
          enter_method: (g == null ? undefined : g.state?.enter_from) ?? "other",
          bot_position: String(g == null ? undefined : g.state?.bot_position) ?? "other",
          is_from_ug: "0",
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), m, b),
          user_id: L ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: L ? getBotRequestId.getBotRequestId === null || getBotRequestId.getBotRequestId === undefined ? undefined : getBotRequestId.getBotRequestId(h) : undefined,
          recommend_from: L ? "bot_list_discover" : undefined
        };
        teaAnalyticsEventTracker.trackEvent("enter_page", t);
      }
    };
    let D = () => {
      let o = Date.now() - ((g == null ? undefined : g.state?.page_start_time) ?? p.current);
      teaAnalyticsEventTracker.trackEvent("leave_chat_page", {
        current_page: chatPageRouteConstants.pageRoutes.CHAT,
        bot_id: h,
        duration: String(o),
        stay_time: o,
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), m, b),
        user_id: L ? chatUserInfoActions.getUserIdStr() : undefined,
        req_id: L ? getBotRequestId.getBotRequestId === null || getBotRequestId.getBotRequestId === undefined ? undefined : getBotRequestId.getBotRequestId(h) : undefined,
        recommend_from: L ? "bot_list_discover" : undefined
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        T();
      }
      let t = () => {
        if (document.visibilityState && y) {
          T();
        }
      };
      window.addEventListener("visibilitychange", t);
      return () => {
        D();
        window.removeEventListener("visibilitychange", t);
      };
    }, [y]);
    return null;
  };
  require.r(exports);
  require.d(exports, {
    EventTracker: function () {
      return g;
    }
  });
}