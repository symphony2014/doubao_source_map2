// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'a' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'localResourceCheck'
// - Resolved require(392448) to 'local-resource-check'
// - Renamed variable 'c' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'd' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'u' to 'editingMessageTransitionComponent'
// - Resolved require(766325) to 'editing-message-transition-component'
// - Renamed variable 'p' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'g' to 'sendMessageBoxTextSymbol'
// - Resolved require(377754) to 'send-message-box-text-symbol'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 's' to 'messageEditTransition' (module 766325)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'K' to 'isLocal' (module 392448)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'T' to 'sendMessageBoxText' (module 377754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 23022
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var editingMessageTransitionComponent = require("editing-message-transition-component") /*id: 766325*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var sendMessageBoxTextSymbol = require("send-message-box-text-symbol") /*id: 377754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function b(e, t, n) {
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
  let y = e => {
    let {
      message: t,
      onExit: n
    } = e;
    let {
      conversation_id: r,
      message_id: o
    } = t;
    let c = reactCoreLibraryReexport.useRef(eventReportingService.createEventReporter({
      eventName: "edit_message",
      meta: {
        conversation_id: r,
        message_id: o
      }
    }));
    let {
      sendMessage: d
    } = chatServiceContext.useChatService("chatMessageService");
    return reactJsxRuntimeCoreReexport.jsx(editingMessageTransitionComponent.messageEditTransition, {
      text: messageContentUtils.formatMessage(t) || "",
      onCancel: () => {
        teaAnalyticsEventTracker.trackEvent("edit_message_cancel", {
          message_id: o,
          edit_method: "click"
        });
        c.current.addDurationPoint("cancel");
        c.current.success();
        n();
      },
      onSubmit: e => {
        if (!r || !o || !e) {
          return;
        }
        let i = e.trim() === "";
        teaAnalyticsEventTracker.trackEvent("edit_message_confirm", {
          message_id: o,
          edit_method: "click"
        });
        c.current.addDurationPoint("confirm");
        try {
          d([{
            text: e,
            operation: {
              [i ? "remove" : "replace"]: {
                messageLink: {
                  messageId: o,
                  isLocalMessage: localResourceCheck.isLocal
                }
              }
            },
            reportParams: {
              scene: skillConstantsEnum.SceneType.SCENE_EDIT
            },
            extraExt: t.ext
          }]);
          c.current.success();
        } catch (e) {
          c.current.error({
            reason: "edit message failed, unexpected error",
            error: e
          });
        }
        n();
      }
    });
  };
  let x = e => {
    let {
      message: i,
      theme: r = "samantha"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      className: o(chatThemeStyleConfig.chatThemeConfig[r]?.sendClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[r].cssVar,
      text: messageContentUtils.formatMessage(i, false, (i == null ? undefined : i.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type"))
    });
  };
  class w {
    constructor() {
      b(this, "pluginIdentifier", sendMessageBoxTextSymbol.sendMessageBoxText);
      b(this, "EditableContent", y);
      b(this, "Content", x);
    }
  }
  require.r(exports);
  require.d(exports, {
    EditableSendMessageBoxContent: function () {
      return y;
    },
    TextSendMessageBoxPlugin: function () {
      return w;
    }
  });
}