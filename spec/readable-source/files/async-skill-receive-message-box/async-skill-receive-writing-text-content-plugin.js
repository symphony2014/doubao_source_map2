// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'l' to 'messageErrorHandler'
// - Resolved require(36156) to 'message-error-handler'
// - Renamed variable 's' to 'extractArtifactFromChatMessage'
// - Resolved require(117895) to 'extract-artifact-from-chat-message'
// - Renamed variable 'c' to 'useElementMountMonitor'
// - Resolved require(316563) to 'use-element-mount-monitor'
// - Renamed variable 'd' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable '_' to 'chatCanvasArtifactUtils'
// - Resolved require(90901) to 'chat-canvas-artifact-utils'
// - Renamed variable 'm' to 'inlineDocArtifactRenderer'
// - Resolved require(690621) to 'inline-doc-artifact-renderer'
// - Renamed variable 'v' to 'searchReferenceUiComponent'
// - Resolved require(676486) to 'search-reference-ui-component'
// - Renamed variable 'f' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'p' to 'searchReferenceDataProcessor'
// - Resolved require(175385) to 'search-reference-data-processor'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'b' to 'asyncMessageThinkingNode'
// - Resolved require(889095) to 'async-message-thinking-node'
// - Renamed variable 'w' to 'chatTextContentSymbol'
// - Resolved require(369323) to 'chat-text-content-symbol'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'GD' to 'generateSearchReferenceData' (module 175385)
// - Updated imported property 'WQ' to 'createEventTracker' (module 175385)
// - Updated imported property 'W' to 'SearchReferenceUIComponent' (module 676486)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'le' to 'extractArtifactFromMessage' (module 117895)
// - Updated imported property 'X' to 'useElementMountMonitor' (module 316563)
// - Updated imported property 'nf' to 'checkDocCardRender' (module 90901)
// - Updated imported property 'O' to 'handleMessageShowError' (module 36156)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'v' to 'ThinkingMessageNode' (module 889095)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'Ju' to 'renderInlineDocCard' (module 690621)
// - Updated imported property 'i' to 'receiveWriteTextKey' (module 369323)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 937777
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatCanvasArtifactUtils = require("chat-canvas-artifact-utils") /*id: 90901*/;
  var inlineDocArtifactRenderer = require("inline-doc-artifact-renderer") /*id: 690621*/;
  var searchReferenceUiComponent = require("search-reference-ui-component") /*id: 676486*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var searchReferenceDataProcessor = require("search-reference-data-processor") /*id: 175385*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    var n;
    var i;
    let {
      message: a,
      hidden: l = false,
      isWithThink: s = false,
      classname: c,
      enableOpenCanvas: d
    } = e;
    let u = !s || !(a == null ? undefined : a.think_reason_is_hide) && (messageContentTypeAndStatusChecker.f8g(a) || messageContentTypeAndStatusChecker.Ptc(a));
    let _ = chatMessageStatusCheck.isMessageFinished(a);
    let m = messageContentTypeAndStatusChecker.vlk(a);
    let {
      meta_infos: g = []
    } = a || {};
    let {
      searchReferenceData: b
    } = searchReferenceDataProcessor.generateSearchReferenceData({
      message: a,
      conversationId: (a == null ? undefined : a.conversation_id) || ""
    }) ?? {};
    let {
      trackEvent: y
    } = searchReferenceDataProcessor.createEventTracker({
      message: a
    });
    if (!l && _ && u && !m) {
      return reactJsxRuntimeCoreReexport.jsx(searchReferenceUiComponent.SearchReferenceUIComponent, {
        classname: c,
        meta: g,
        query: (b == null ? undefined : (i = b.query_params) === null || i === undefined ? undefined : (n = i.text_card) === null || n === undefined ? undefined : n[0]?.query) || "",
        conversationId: (a == null ? undefined : a.conversation_id) || "",
        messageReplyId: a == null ? undefined : a.reply_id,
        onTrackEvent: y,
        referenceInAll: b == null ? undefined : b.search_result,
        enableOpenCanvas: d,
        searchType: "writing"
      });
    } else {
      return null;
    }
  };
  var asyncMessageThinkingNode = require("async-message-thinking-node") /*id: 889095*/;
  let y = e => {
    let {
      message: p,
      inView: y,
      autoOpenCanvas: w,
      actionsModifier: k,
      onCollapse: x,
      customRenderOptions: S,
      showSimplifyCard: C,
      referenceCardParams: E,
      onOpenDoc: R
    } = e;
    let T = messageContentTypeAndStatusChecker.XD1(p);
    let j = (p == null ? undefined : p.content_obj?.artifact_meta) ?? safeJsonUtils.safeParse(p == null ? undefined : p.ext?.samantha_artifact, {});
    let N = !!(p == null ? undefined : p.content_obj?.text);
    let P = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useMemo(() => extractArtifactFromChatMessage.extractArtifactFromMessage(p), [p]);
    let {
      identifier: $,
      artifactId: M
    } = I ?? {};
    let A = M ?? $;
    useElementMountMonitor.useElementMountMonitor({
      inView: y,
      reportOnInView: true,
      enable: !!N,
      getElement: () => {
        var e;
        if ((e = P.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.getRootElement();
        }
      },
      checkMessageShowError: e => chatCanvasArtifactUtils.checkDocCardRender({
        ...e,
        hasCanvasDocCard: N && !!A
      }),
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: p,
        from: "write_receive_canvas_doc_card"
      })
    });
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_text_message_mount",
        meta: {
          ...throttledPathFilterStringify.throttledPathStr(j, ["resource_type", "artifact_key", "resource_id"]),
          ...throttledPathFilterStringify.throttledPathStr(p, "message_id")
        }
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(asyncMessageThinkingNode.ThinkingMessageNode, {
        message: p
      }), N && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        ref: P,
        inView: y,
        message: p,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        customRenderOptions: {
          useCustomReplacementElements: () => inlineDocArtifactRenderer.renderInlineDocCard({
            message: p,
            actionsModifier: k,
            autoOpenCanvas: w,
            onCollapse: x,
            options: {
              onOpenDoc: R,
              showSimplifyCard: C
            }
          }),
          ...S
        }
      }), reactJsxRuntimeCoreReexport.jsx(g, {
        isWithThink: true,
        message: p,
        hidden: T && !!j,
        ...E
      })]
    });
  };
  var chatTextContentSymbol = require("chat-text-content-symbol") /*id: 369323*/;
  function k(e, t, n) {
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
  class x {
    constructor() {
      k(this, "pluginIdentifier", chatTextContentSymbol.receiveWriteTextKey);
      k(this, "Content", y);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveWritingTextContentPlugin: function () {
      return x;
    }
  });
}