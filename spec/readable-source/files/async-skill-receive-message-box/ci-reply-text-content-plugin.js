// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'ciReplyTextSymbol'
// - Resolved require(837820) to 'ci-reply-text-symbol'
// - Renamed variable 'r' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'o' to 'messageAnalyticsEventHandlers'
// - Resolved require(189888) to 'message-analytics-event-handlers'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'c' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'd' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(67881) to 'attachment-node-and-markdown-link-components'
// - Resolved require.bind(526793) to 'mdbox-ci-link-export-module'
// - Resolved require.e(67881) to 'attachment-node-and-markdown-link-components'
// - Resolved require.bind(526793) to 'mdbox-ci-link-export-module'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'WS' to 'getMessageContentData' (module 783136)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'm' to 'createMessageAnalyticsHandlers' (module 189888)
// - Updated imported property 'i' to 'ciReplyTextSymbol' (module 837820)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 92430
         */
module.exports = function (module, exports, require) {
  var ciReplyTextSymbol = require("ci-reply-text-symbol") /*id: 837820*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var messageAnalyticsEventHandlers = require("message-analytics-event-handlers") /*id: 189888*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("attachment-node-and-markdown-link-components") /*id: 67881*/.then(require.bind(require, "mdbox-ci-link-export-module") /*id: 526793*/).then(e => ({
      default: e.MdboxCILink
    }))
  })));
  let m = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("attachment-node-and-markdown-link-components") /*id: 67881*/.then(require.bind(require, "mdbox-ci-link-export-module") /*id: 526793*/).then(e => ({
      default: e.MdBoxCIImage
    }))
  })));
  let v = e => {
    let {
      eventTrigger: n,
      bizMessage: i
    } = e;
    let r = reactCoreLibraryReexport.useMemo(() => {
      return safeJsonUtils.safeParse(i == null ? undefined : i.ext?.code_interpreter_resource_url_map, {});
    }, [i == null ? undefined : i.ext?.code_interpreter_resource_url_map]);
    let o = reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(_, {
      ...e,
      events: n ? {
        onDownloadEvent: n.onClickDownloadAttachmentEvent,
        onClickAttachment: n.onClickAttachmentEvent
      } : undefined,
      uriToUrlMap: r
    }), [r]);
    let a = reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(m, {
      ...e,
      uriToUrlMap: r
    }), [r]);
    return reactCoreLibraryReexport.useMemo(() => ({
      Link: o,
      Image: a
    }), [a, o]);
  };
  let f = e => {
    let {
      inView: t,
      message: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      content: l
    } = chatMessageContentRenderer_1.getMessageContentData({
      message: n
    });
    let s = v({
      eventTrigger: messageAnalyticsEventHandlers.createMessageAnalyticsHandlers({
        message: n,
        messageTextContent: l || ""
      }),
      bizMessage: n
    });
    return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        customSlots: s,
        getCodebarConfig: (e, t) => {
          let {
            isBroken: n,
            isFailed: r,
            isFinished: o
          } = t;
          return {
            finished: o || r || n,
            defaultExpand: false,
            expandedFinishedText: i("deepResearch_tool_genCode_done"),
            unExpandFinishedText: i("deepResearch_tool_genCode_done"),
            codeBarLoadingText: i("deepResearch_tool_genCode"),
            compact: true
          };
        }
      }
    });
  };
  function p(e, t, n) {
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
  class h {
    constructor() {
      p(this, "pluginIdentifier", ciReplyTextSymbol.ciReplyTextSymbol);
      p(this, "Content", f);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCIReplyTextContentPlugin: function () {
      return h;
    }
  });
}