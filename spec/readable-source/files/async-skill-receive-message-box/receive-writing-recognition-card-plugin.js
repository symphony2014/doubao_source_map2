// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'asyncWriteSkillMessageSender'
// - Resolved require(511261) to 'async-write-skill-message-sender'
// - Renamed variable 'l' to 'contentTypeEnums'
// - Resolved require(153202) to 'content-type-enums'
// - Renamed variable 's' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'c' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'd' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable '_' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'm' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'p' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'h' to 'rtlChatCheckIconComponent'
// - Resolved require(690527) to 'rtl-chat-check-icon-component'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'k' to 'receiveWritingCardSymbol'
// - Resolved require(549255) to 'receive-writing-card-symbol'
// - Updated imported property 'Z' to 'RtlChatCheckIcon' (module 690527)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'v' to 'useWriteMessage' (module 511261)
// - Updated imported property 'F8' to 'buildModeType' (module 153202)
// - Updated imported property 'Pu' to 'serviceLevel' (module 447912)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'i' to 'receiveWritingCardId' (module 549255)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 719999
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var asyncWriteSkillMessageSender = require("async-write-skill-message-sender") /*id: 511261*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var g = {
    "recognition-card-wrapper": "recognition-card-wrapper-Zee9u7",
    title: "title-m3B5aN",
    content: "content-kecDVc",
    actions: "actions-fsYRPm",
    action: "action-ixXZez",
    current: "current-Qchq0u",
    icon: "icon-yctVDS",
    outline: "outline-GXBCjU",
    disable: "disable-ZYSptZ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      actions: t,
      title: n,
      content: i,
      cardStatus: r,
      disable: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: g["recognition-card-wrapper"],
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: g.title,
        children: n
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: g.content,
        children: i
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: g.actions,
        children: (() => {
          let e = t.find(e => e.status === r);
          if (e) {
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: o(g.action, g.current),
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: g.icon,
                children: reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {})
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                children: e.content
              })]
            });
          } else {
            return t.map(e => {
              let {
                content: t,
                onClick: n,
                cls: i,
                status: r
              } = e;
              return reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(g.action, i, {
                  [g.disable]: a
                }),
                onClick: () => {
                  if (!a) {
                    n(r);
                  }
                },
                children: t
              }, t);
            });
          }
        })()
      })]
    });
  };
  let w = e => {
    let {
      message: r
    } = e;
    let o = messageContentTypeAndStatusChecker.z7f(r) ? r : undefined;
    let {
      message_id: h = "",
      conversation_id: w = ""
    } = o || {};
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: x
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      sendWriteMessage: S
    } = asyncWriteSkillMessageSender.useWriteMessage();
    let C = (o == null ? undefined : o.content_obj?.pages_intention_card_status) || (o == null ? undefined : o.ext?.pages_intention_card_status) || contentTypeEnums.buildModeType.Default;
    let E = e => {
      if (!w || !o) {
        return;
      }
      let i = e === contentTypeEnums.buildModeType.ChoiceGenOutline;
      let r = i ? o.content_obj?.raw_query : "";
      let a = {
        input_skill: JSON.stringify({
          skill_id: "2",
          skill_type: 2,
          variables: {
            action: "gen_outline",
            genre: o.content_obj?.genre,
            type: String(chatAiConstants.serviceLevel.Professional)
          }
        })
      };
      chatMessageStoreUpdater.updateChatMessages({
        conversationId: w,
        immerUpdate: t => {
          if (!o) {
            return;
          }
          let i = t.draftMessageMap[h] ?? t.draftLocalMessageMap[h];
          if (i.ext) {
            i.ext.pages_intention_card_status = e;
          }
        }
      });
      S({
        text: r,
        extraExt: {
          ...(i ? a : {}),
          select_intention: JSON.stringify({
            msg_id: h,
            ext: {
              pages_intention_card_status: e
            }
          })
        },
        status: chatMessageTypes.PushMessageStatus.InVisible,
        reportParams: {
          scene: "send_message",
          is_by_step_writing: i ? "step_by_popup" : "no_step_by_popup"
        },
        rawSendMessage: x
      });
      teaAnalyticsEventTracker.trackEvent("writing_by_step_popup_click", {
        conversation_id: w,
        message_id: o == null ? undefined : o.message_id,
        button_name: i ? "compose_outline" : "direct_writing"
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("writing_by_step_popup_show", {
        original_message_id: o == null ? undefined : o.message_id
      });
    }, []);
    let R = chatMessageStoreFactory.createMessageStore(() => !w || !h || !conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), w, h));
    return reactJsxRuntimeCoreReexport.jsx(y, {
      cardStatus: C,
      disable: R,
      title: k("professional_writing_mode_confirmation_alert_title"),
      content: k("professional_writing_mode_confirmation_alert_desc"),
      actions: [{
        status: contentTypeEnums.buildModeType.ChoiceDirect,
        content: k("professional_writing_mode_confirmation_alert_cancel_button"),
        onClick: E,
        cls: g.content
      }, {
        status: contentTypeEnums.buildModeType.ChoiceGenOutline,
        content: k("professional_writing_mode_confirmation_alert_confirm_button"),
        onClick: E,
        cls: g.outline
      }]
    });
  };
  var receiveWritingCardSymbol = require("receive-writing-card-symbol") /*id: 549255*/;
  function x(e, t, n) {
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
  class S {
    constructor() {
      x(this, "pluginIdentifier", receiveWritingCardSymbol.receiveWritingCardId);
      x(this, "Content", w);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveWritingRecognitionCardPlugin: function () {
      return S;
    }
  });
}