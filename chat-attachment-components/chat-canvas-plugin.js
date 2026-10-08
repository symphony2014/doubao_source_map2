// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'ChatCanvasPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 533520
         */
module.exports = function (module, exports, require) {
  require("react-transition-component") /*id: 888866*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatCanvasVmokPluginLoader = require("chat-canvas-vmok-plugin-loader") /*id: 803021*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  require("chat-canvas-panel-container") /*id: 955662*/;
  require("chat-canvas-panel-renderer") /*id: 927394*/;
  var chatCanvasStoreSelector = require("chat-canvas-store-selector") /*id: 906955*/;
  var chatSashDragHook = require("chat-sash-drag-hook") /*id: 290223*/;
  require("chat-layout-dimensions") /*id: 519623*/;
  require("resizable-sash-component") /*id: 897156*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = Math.round(1000 / 60 * 2);
  let A = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: n,
      className: l,
      style: v,
      pluginIdentifier: A,
      messageId: _ = "",
      conversationId: k = "",
      canvasContent: S,
      canvasLayoutState: C,
      disablePreRender: $,
      isVmokPlugin: E = false
    } = e;
    let R = reactCoreLibraryReexport.useId();
    let T = reactUseChangedRef.useChangedRef(S, deepEqualityUtil_1.isDeepEqual);
    chatResponsiveSize.useChatScreenSize({
      sm: 800,
      md: 1200
    });
    let N = `${String(A)}_${R}`;
    let {
      isSelfExpand: j,
      isOtherExpand: I,
      canvasLayoutState: Z,
      openingRect: O
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let t = e.isExpand ? e.preRenderNodeId === N && A === e.matchedCanvasPluginIdentifier ? {
        isSelfExpand: true,
        isOtherExpand: false
      } : {
        isSelfExpand: false,
        isOtherExpand: true
      } : {
        isSelfExpand: false,
        isOtherExpand: false
      };
      return {
        openingRect: e.openingRect,
        canvasLayoutState: e.canvasLayoutState,
        ...t
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let [P, M] = reactCoreLibraryReexport.useState();
    let [W, F] = reactCoreLibraryReexport.useState();
    useDebouncedValueHook.useDebouncedValue(j, {
      wait: 500 + w
    });
    useDebouncedValueHook.useDebouncedValue(I, {
      wait: 500 + w
    });
    let L = reactCoreLibraryReexport.useMemo(() => ({
      messageId: _,
      conversationId: k,
      preRenderNodeId: N,
      canvasLayoutState: C,
      exactPluginIdentifier: A,
      isVmokPlugin: E,
      ...T
    }), [T, _, k, C, A, E]);
    let D = reactCoreLibraryReexport.useRef(null);
    let [z] = useIntersectionObserver.useIntersection(D, {
      threshold: 0,
      rootMargin: "100px 0px"
    });
    let B = chatCanvasVmokPluginLoader.useChatCanvasVmokPlugin(A);
    let X = chatPluginIocManager.chatCanvasPluginHook(A);
    let {
      plugin: H,
      loading: U
    } = E ? B : X;
    let {
      run: V
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async e => {
      var t;
      var n;
      var i;
      var r;
      var l;
      var u;
      let p = (n = D.current) === null || n === undefined ? undefined : (t = n.getBoundingClientRect) === null || t === undefined ? undefined : t.call(n);
      let h = E ? chatCanvasVmokPluginLoader.chatCanvasVmokPlugin : chatPluginIocManager.chatCanvasPluginLoader;
      let m = H || (await h(A));
      let f = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      if (m) {
        if (f != null && (i = f.openCanvasPanel) !== null && i !== undefined) {
          i.call(f, throttledOmitPathStringify.omitPathStringify(L, ["preRenderNodeId"]), p, (r = e == null ? undefined : e.isAutoOpen) !== null && r !== undefined && r);
        }
      } else if (f != null && (l = f.openCanvasPanel) !== null && l !== undefined) {
        l.call(f, throttledOmitPathStringify.omitPathStringify(L, ["preRenderNodeId"]), (e == null ? undefined : e.targetRect) ?? p, (u = e == null ? undefined : e.isAutoOpen) !== null && u !== undefined && u);
      }
    }, {
      leading: true,
      trailing: false
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      open: V,
      getRootElement: () => D.current
    }), []);
    let {
      run: G
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => j && chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
      var t;
      if (e == null) {
        return undefined;
      } else if ((t = e.closeCanvasPanel) === null || t === undefined) {
        return undefined;
      } else {
        return t.call(e);
      }
    }), {
      wait: 300,
      leading: true,
      trailing: false
    });
    useOnUnmountHook.useOnUnmount(G);
    chatStoreManager.useStoreSelector("sidebarStore", e => e.isExpand);
    let {
      sashPct: J,
      matchedPluginName: q
    } = chatCanvasStoreSelector.useChatCanvasState();
    let {
      dragging: K,
      sashRef: Q,
      onDrag: Y,
      onDragEnd: ee
    } = chatSashDragHook.useChatSashDrag(q);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: n
      });
    } else {
      return null;
    }
  });
  require.d(exports, {
    ChatCanvasPlugin: function () {
      return A;
    }
  });
}