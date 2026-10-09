// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'videoMessageDataFormatter'
// - Resolved require(931033) to 'video-message-data-formatter'
// - Renamed variable 'a' to 'skillVideoMessageBox'
// - Resolved require(27511) to 'skill-video-message-box'
// - Renamed variable 'l' to 'videoGenerationErrorBoundary'
// - Resolved require(608647) to 'video-generation-error-boundary'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'u' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable '_' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'm' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 'h' to 'canvasStylesConsts'
// - Resolved require(314168) to 'canvas-styles-consts'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'y' to 'receiveVideoContentSymbol'
// - Resolved require(684037) to 'receive-video-content-symbol'
// - Updated imported property 'Pf' to 'withErrorBoundary' (module 939224)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'J$' to 'formatVideoMessageData' (module 931033)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'Z' to 'canvasClassNames' (module 314168)
// - Updated imported property 'F' to 'SkillVideoMessageBox' (module 27511)
// - Updated imported property 's' to 'VideoErrorFallback' (module 608647)
// - Updated imported property 'W' to 'ReceiveVideoContent' (module 684037)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 455182
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var videoMessageDataFormatter = require("video-message-data-formatter") /*id: 931033*/;
  var skillVideoMessageBox = require("skill-video-message-box") /*id: 27511*/;
  var videoGenerationErrorBoundary = require("video-generation-error-boundary") /*id: 608647*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var canvasStylesConsts = require("canvas-styles-consts") /*id: 314168*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    let {
      message: n
    } = e;
    let l = e => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
      if (e.messageId) {
        if (t != null) {
          t.openCanvasPanel({
            conversationId: n.conversation_id || "",
            messageId: e.messageId,
            videoCanvasShowProps: {
              vid: e.vid,
              onClose: () => {
                chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
              }
            }
          }, undefined, false);
        }
      }
    });
    let p = (n == null ? undefined : n.content_obj?.tips) || "";
    let b = reactCoreLibraryReexport.useMemo(() => videoMessageDataFormatter.formatVideoMessageData(n.content_obj, {
      messageId: n == null ? undefined : n.message_id
    }), [n == null ? undefined : n.message_id, n.content_obj]);
    let y = messageContentTypeAndStatusChecker.lV9(n);
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let k = chatConversationSelectors.selectConversation((n == null ? undefined : n.conversation_id) || "");
    let {
      toChatPage: x
    } = chatContextUtil.useChatContext();
    let {
      conversation_id: S,
      message_id: C
    } = n ?? {};
    let E = chatConversationBotId.getConversationBotId(S);
    let R = {
      conversation_id: S,
      message_id: C,
      bot_id: String(E)
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        teaAnalyticsEventTracker.trackEvent("video_generation_result_show", {
          ...R,
          error_code: p,
          status: 0
        });
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "video_generation_result_show",
          meta: {
            scene: "pc-video",
            status: "error",
            ...throttledPathFilterStringify.throttledPathStr(R, ["conversation_id", "message_id"])
          }
        });
      }
    }, [y]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!y && p && reactJsxRuntimeCoreReexport.jsx("div", {
        className: canvasStylesConsts.canvasClassNames.tips,
        children: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: w("video_loading_key_changeTopic", {
            s_changeTopic: reactJsxRuntimeCoreReexport.jsx("span", {
              className: canvasStylesConsts.canvasClassNames.link,
              onClick: () => {
                if (x != null) {
                  x();
                }
              },
              children: w("video_loading_key_changeTopic_linkText")
            })
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(skillVideoMessageBox.SkillVideoMessageBox, {
        message: n,
        downloadName: k == null ? undefined : k.name,
        videoList: b ? [b] : [],
        onClickVideo: (e, t) => {
          if (n.conversation_id && t.messageId) {
            l(t);
            teaAnalyticsEventTracker.trackEvent("video_generation_result_click", {
              ...R,
              button_name: "full_screen"
            });
          }
        }
      })]
    });
  }, {
    errorBoundaryName: "video_message_block_error",
    FallbackComponent: videoGenerationErrorBoundary.VideoErrorFallback
  });
  var receiveVideoContentSymbol = require("receive-video-content-symbol") /*id: 684037*/;
  function w(e, t, n) {
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
  class k {
    constructor() {
      w(this, "pluginIdentifier", receiveVideoContentSymbol.ReceiveVideoContent);
      w(this, "Content", b);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreateVideoContentPlugin: function () {
      return k;
    }
  });
}