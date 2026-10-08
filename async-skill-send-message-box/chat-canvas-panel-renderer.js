// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'CanvasPanelRenderer'
// - Renamed export 'G' to 'CanvasPanelContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 927394
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var skillMessageBox = require("skill-message-box") /*id: 111120*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
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
    getContext() {
      var t;
      var i;
      var r;
      var o;
      let l = ((t = this.externalService) === null || t === undefined ? undefined : t.chatViewCanvasStore?.conversationId) || "";
      let a = ((i = this.externalService) === null || i === undefined ? undefined : i.chatViewCanvasStore?.messageId) || "";
      let p = (o = this.externalService) === null || o === undefined ? undefined : (r = o.chatIMService) === null || r === undefined ? undefined : r.getActiveSession(l);
      let h = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), l, {
        isLocalMessage: true,
        messageId: a
      });
      let m = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), l, {
        isLocalMessage: false,
        messageId: a
      });
      return {
        conversationInfo: {
          conversation_id: l,
          conversation_type: chatConversationSelectorUtils.getConversationType(l),
          bot_id: chatConversationBotId.getConversationBotId(l)
        },
        currentSessionInfo: {
          session_id: p == null ? undefined : p.sessionId,
          state: p == null ? undefined : p.getSessionState()
        },
        currentMessageInfo: h ?? m
      };
    }
    constructor(e) {
      p(this, "externalService", undefined);
      p(this, "sendMessage", e => {
        var t;
        var n;
        if ((n = this.externalService) === null || n === undefined) {
          return undefined;
        } else if ((t = n.chatIMService) === null || t === undefined) {
          return undefined;
        } else {
          return t.sendMessage(e);
        }
      });
      p(this, "sendOnceMessage", e => {
        var t;
        var n;
        if ((n = this.externalService) === null || n === undefined) {
          return undefined;
        } else if ((t = n.chatIMService) === null || t === undefined) {
          return undefined;
        } else {
          return t.sendOnceMessage(e);
        }
      });
      this.externalService = e.externalService;
    }
  }
  let m = async () => {
    let e = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
    skillMessageBox.setMessage("canvas", "vmokDoubaoIMService", new h({
      externalService: {
        chatIMService: e,
        chatViewCanvasStore: chatStoreManager.getStoreState("chatViewCanvasStore")
      }
    }));
  };
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatCanvasPanelContainer = require("chat-canvas-panel-container") /*id: 955662*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = () => asyncRetryUtils.asyncRetry(() => require.e("async-infra-layout") /*id: 6447*/.then(require.bind(require, "canvas-panel-error-and-loading-components") /*id: 128010*/), 3, e => e * 1000);
  let S = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => k().then(e => ({
    default: e.NoMatchCanvasPanel
  }))));
  let C = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => k().then(e => ({
    default: e.CommonLoadingCanvasPanel
  }))));
  let $ = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.asyncRetry(() => Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("vmok-renderer") /*id: 94377*/]).then(require.bind(require, "chat-canvas-vmok-renderer") /*id: 555823*/).then(e => ({
    default: e.default
  })), 3, e => e * 1000)));
  let E = reactCoreLibraryReexport.memo(function (e) {
    let {
      service: t
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let n = reactCoreLibraryReexport.useMemo(() => ({
      ...e.payload,
      transitionStatus: e.state,
      onCloseCanvas: () => {
        var e;
        if (t == null) {
          return undefined;
        } else if ((e = t.closeCanvasPanel) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t);
        }
      },
      setCanvasLayoutTrackParams: e => {
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          getCanvasLayoutTrackParams: e
        });
      }
    }), [e.payload, e.state, t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (e.state === "entered") {
        chatEventEmitter.chatEmitter.emit("chat.canvas.entered");
      }
    }, [e.state]);
    return reactJsxRuntimeCoreReexport.jsx(e.plugin.Content, {
      ...n
    });
  });
  let R = e => {
    let {
      containerClassName: n,
      adaptCanvasLayoutState: i
    } = e;
    m();
    let {
      isExpand: o,
      pluginIdentifier: s,
      artifactLoading: c,
      artifactError: d,
      canvasLayoutState: u,
      preRenderNodeId: p,
      isVmokPlugin: h,
      ...g
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let r = {
        messageId: e.messageId || "",
        conversationId: e.conversationId || "",
        ...e.canvasContent
      };
      let o = e.canvasContent?.artifactLoading;
      let l = e.canvasContent?.artifactError;
      return {
        isExpand: e.isExpand,
        pluginIdentifier: o ? undefined : e.matchedCanvasPluginIdentifier,
        canvasLayoutState: i ? i(e.canvasLayoutState) : e.canvasLayoutState,
        artifactLoading: o,
        artifactError: l,
        preRenderNodeId: e.preRenderNodeId,
        isVmokPlugin: e.isVmokPlugin,
        ...r
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let {
      plugin: v,
      loading: y
    } = chatPluginIocManager.chatCanvasPluginHook(s);
    let k = useDebouncedValueHook.useDebouncedValue(o, {
      wait: 500
    });
    if (h) {
      return reactJsxRuntimeCoreReexport.jsx($, {
        isExpand: o,
        payload: g,
        containerClassName: n,
        pluginIdentifier: s,
        canvasLayoutState: u
      });
    }
    if (p) {
      return null;
    }
    if (c || !s || s && y) {
      if (o) {
        return reactJsxRuntimeCoreReexport.jsx(C, {});
      } else {
        return null;
      }
    }
    if (d || !s || !!y || !v) {
      return reactJsxRuntimeCoreReexport.jsx(S, {
        error: d || Error("no match plugin"),
        resetErrorBoundary: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
      });
    }
    let R = o ? k ? "entered" : "entering" : k ? "exiting" : "exited";
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      FallbackComponent: S,
      errorBoundaryName: (v == null ? undefined : v.errorBoundaryName) ?? `canvas_error_${String(s)}`,
      onError: e => {
        loggerServiceCore.defaultLogger.error({
          message: "Canvas ErrorBoundary caught error",
          error: e
        });
      },
      children: v ? reactJsxRuntimeCoreReexport.jsx(chatCanvasPanelContainer.CanvasPanelContainer, {
        isExpand: o,
        className: n,
        canvasLayoutState: u,
        children: reactJsxRuntimeCoreReexport.jsx(E, {
          plugin: v,
          payload: g,
          state: R
        })
      }) : undefined
    });
  };
  require.d(exports, {
    CanvasPanelRenderer: function () {
      return R;
    },
    CanvasPanelContent: function () {
      return E;
    }
  });
}