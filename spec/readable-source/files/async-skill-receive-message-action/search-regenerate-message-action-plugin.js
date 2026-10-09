// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'syncIconComponent'
// - Resolved require(650706) to 'sync-icon-component'
// - Renamed variable 'a' to 'boardActionTypes'
// - Resolved require(192998) to 'board-action-types'
// - Renamed variable 'l' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'extractCollectionIdUtil'
// - Resolved require(740633) to 'extract-collection-id-util'
// - Renamed variable 'd' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'v' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'p' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'f' to 'asyncSkillReceiveMessageAction'
// - Resolved require(657682) to 'async-skill-receive-message-action'
// - Renamed variable 'm' to 'chatToastFactoryHook'
// - Resolved require(219785) to 'chat-toast-factory-hook'
// - Renamed variable 'g' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable '_' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'b' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'x' to 'chatSearchRegenerateAction'
// - Resolved require(395929) to 'chat-search-regenerate-action'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'p' to 'useToastFactory' (module 219785)
// - Updated imported property 'lC' to 'getConversationBotInfo' (module 926482)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'P' to 'boardActionTypes' (module 192998)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'v' to 'receiveMsgAction' (module 657682)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'H' to 'getCollectionId' (module 740633)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'o' to 'SyncIcon' (module 650706)
// - Updated imported property 'X' to 'searchRegenAction' (module 395929)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 711027
         */
module.exports = function (module, exports, require) {
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var syncIconComponent = require("sync-icon-component") /*id: 650706*/;
  var boardActionTypes = require("board-action-types") /*id: 192998*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var extractCollectionIdUtil = require("extract-collection-id-util") /*id: 740633*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var asyncSkillReceiveMessageAction = require("async-skill-receive-message-action") /*id: 657682*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let y = async (e, t) => {
    let i = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
    if (e && t) {
      if (i == null) {
        return undefined;
      } else {
        return i.getBotIdToRequestIdMap()?.[t];
      }
    } else {
      return undefined;
    }
  };
  let w = async (e, t) => {
    let {
      botId: n,
      messageId: i,
      conversationId: r,
      isFromDiscover: o,
      clickFrom: a,
      contentType: l,
      requestId: s,
      chatType: d,
      collectionId: c
    } = t;
    let u = await y(o, n);
    teaAnalyticsEventTracker.trackEvent(e, {
      bot_id: n,
      message_id: i,
      conversation_id: r,
      user_id: o ? chatUserInfoActions.getUserIdStr() : undefined,
      req_id: u,
      recommend_from: o ? "bot_list_discover" : undefined,
      click_from: a,
      ...(l === chatMessageTypes.ContentType.Image ? {
        request_id: s
      } : {}),
      chat_type: d,
      collection_id: c
    });
  };
  let k = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: i
    } = chatServiceContext.useChatService("chatMessageService");
    let o = chatToastFactoryHook.useToastFactory();
    let {
      botInfo: u
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(t.conversation_id || "");
    let g = chatConversationBotId.getConversationBotId(t.conversation_id || "");
    let h = chatMessageStoreFactory.createMessageStore.getState().messageMap[t.conversation_id || ""][t.reply_id || ""];
    let _ = chatMessageStoreFactory.createMessageStore.getState().messageLinkMap[t.conversation_id || ""].find(e => e.messageId === (h == null ? undefined : h.message_id));
    return {
      regenerateAction: {
        onRegenerateMessageClick: function () {
          var e;
          var r;
          var m;
          var k;
          let C = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : boardActionTypes.boardActionTypes.answer;
          let T = eventReportingService.createEventReporter({
            eventName: "regenerate_search_message"
          });
          let I = asyncSkillReceiveMessageAction.receiveMsgAction(chatMessageStoreFactory.createMessageStore.getState().messageLinkMap[t.conversation_id || ""], e => !e.isLocalMessage);
          let R = I ? conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", I) : undefined;
          w("click_regenerate", {
            botId: g,
            messageId: t.message_id || "",
            conversationId: t.conversation_id || "",
            isFromDiscover: false,
            clickFrom: C,
            contentType: R == null ? undefined : R.content_type,
            requestId: R == null ? undefined : (r = R.content_obj) === null || r === undefined ? undefined : (e = r.data) === null || e === undefined ? undefined : e.map(e => e.request_id).join(","),
            chatType: chatSkillPinTypeDeterminer.determineSkillPinType("", t.conversation_id || "", u),
            collectionId: extractCollectionIdUtil.getCollectionId(h).collection_id
          });
          if (!(h == null ? undefined : h.message_id)) {
            o.error(n("system_error_toast"));
            T.error({
              reason: "regenerate_message_failed, reply_id is empty"
            });
            throw Error("invalid message");
          }
          T.updateMeta({
            conversation_id: t.conversation_id || "",
            receive_message_id: t.message_id || "",
            send_message_id: t.reply_id || "",
            content_type: h == null ? undefined : h.content_type,
            skill_id: t == null ? undefined : t.skill?.skill_id,
            llm_intention: t == null ? undefined : (m = t.verbose) === null || m === undefined ? undefined : m.seed_intention?.intention,
            llm_intention_detail: t == null ? undefined : (k = t.verbose) === null || k === undefined ? undefined : k.seed_intention?.detail
          });
          try {
            if (_) {
              i([{
                text: (h == null ? undefined : h.content_obj?.text) ?? "",
                operation: {
                  replace: {
                    messageLink: _
                  }
                },
                reportParams: {
                  scene: "regenerate"
                },
                extraExt: {
                  ...((h == null ? undefined : h.ext?.input_skill) ? {
                    input_skill: h.ext.input_skill
                  } : {})
                }
              }]);
            }
            T.success();
          } catch (e) {
            T.error({
              reason: "edit message failed, unexpected error",
              error: e
            });
          }
        }
      }
    };
  };
  var chatSearchRegenerateAction = require("chat-search-regenerate-action") /*id: 395929*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function S(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let C = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      regenerateAction: {
        onRegenerateMessageClick: a
      }
    } = k({
      message: t
    });
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_regenerate",
      prefix: reactJsxRuntimeCoreReexport.jsx(syncIconComponent.SyncIcon, {}),
      tooltipContent: n("regenerate_button_hover_text"),
      onClick: a
    });
  };
  class T {
    constructor() {
      S(this, "pluginIdentifier", chatSearchRegenerateAction.searchRegenAction);
      S(this, "ButtonContentGroups", [C]);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchRegenerateReceiveMessageActionButtonPlugin: function () {
      return T;
    }
  });
}