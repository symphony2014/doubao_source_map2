// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'i' to 'checkLastSectionId'
// - Resolved require(320509) to 'check-last-section-id'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'l' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'u' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'd' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'h' to 'warningCircleIcon'
// - Resolved require(501963) to 'warning-circle-icon'
// - Renamed variable 'm' to 'chatMessageActionSymbol'
// - Resolved require(286846) to 'chat-message-action-symbol'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'v' to 'isLastSection' (module 320509)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'lC' to 'getConversationBotInfo' (module 926482)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'O' to 'WarningCircleIcon' (module 501963)
// - Updated imported property 't' to 'messageActionSymbol' (module 286846)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 116310
         */
module.exports = function (module, exports, require) {
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var checkLastSectionId = require("check-last-section-id") /*id: 320509*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var warningCircleIcon = require("warning-circle-icon") /*id: 501963*/;
  var chatMessageActionSymbol = require("chat-message-action-symbol") /*id: 286846*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let y = e => {
    let {
      message: t,
      onEnterActionMode: n
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let {
      locationState: g
    } = chatContextUtil.useChatContext();
    let y = async () => {
      let d = t.message_id || "";
      let f = checkLastSectionId.isLastSection(t);
      let h = t.conversation_id || "";
      let m = (g == null ? undefined : g.enter_from) === "bot_discover";
      let v = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t.message_id || "");
      let y = chatConversationBotId.getConversationBotId(h);
      let {
        botInfo: x
      } = chatSkillPinTypeDeterminer.getConversationBotInfo(h);
      let b = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      if (d) {
        teaAnalyticsEventTracker.trackEvent("report", {
          message_id: d,
          click_from: v && f ? "answer" : "long_press_message",
          bot_id: y,
          user_id: m ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: m && y ? b == null ? undefined : b.getBotIdToRequestIdMap()?.[y] : undefined,
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", h, x),
          recommend_from: m ? "bot_list_discover" : undefined
        });
      } else {
        teaAnalyticsEventTracker.trackEvent("report_bot", {
          bot_id: y,
          user_id: m ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: m && y ? b == null ? undefined : b.getBotIdToRequestIdMap()?.[y] : undefined,
          recommend_from: m ? "bot_list_discover" : undefined
        });
      }
      if (n != null) {
        n("report");
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_report",
      prefix: reactJsxRuntimeCoreReexport.jsx(warningCircleIcon.WarningCircleIcon, {}),
      onClick: y,
      children: m("feedback_share_entry_report")
    });
  };
  class x {
    constructor() {
      g(this, "pluginIdentifier", chatMessageActionSymbol.messageActionSymbol);
      g(this, "DropdownItemContentGroups", [y]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultReportReceiveMessageActionButtonPlugin: function () {
      return x;
    }
  });
}