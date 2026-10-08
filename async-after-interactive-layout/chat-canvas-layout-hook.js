// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useChatCanvasLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 342022
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = function (e, t = "default") {
    return t === "full" || (t === "narrow" ? e <= 1080 && e > 800 : e <= 1920 && e > 800);
  };
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var sidebarStatusUpdateLogger = require("sidebar-status-update-logger") /*id: 140188*/;
  let f = e => {
    chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(t => {
      switch (e) {
        case "standard":
        case "focus_chat":
          t.isExpand = false;
          break;
        case "split":
        case "zen_split":
          t.isExpand = true;
          t.canvasLayoutState = chatPanelModes.PanelMode.SIDE_PANEL;
          break;
        case "canvas_immersive":
          t.isExpand = true;
          t.canvasLayoutState = chatPanelModes.PanelMode.FULL_IMMERSIVE;
      }
    }));
    switch (e) {
      case "standard":
      case "split":
        chatSidebarStateManager.setSidebarExpand(true);
        sidebarStatusUpdateLogger.updateSidebarStatus("open", "old_sidebar_expand");
        break;
      case "focus_chat":
      case "zen_split":
      case "canvas_immersive":
        chatSidebarStateManager.setSidebarExpand(false);
        sidebarStatusUpdateLogger.updateSidebarStatus("closed", "old_sidebar_expand");
    }
    chatStoreManager.getStore("flowWebLayoutStore").setState({
      layoutMode: e
    });
  };
  var chatSidebarLogic = require("chat-sidebar-logic") /*id: 265614*/;
  let g = (e, t, n, r, i, a) => {
    if (e) {
      let e = i < 800;
      if (t === chatPanelModes.PanelMode.FULL_IMMERSIVE || t === chatPanelModes.PanelMode.CANVAS_ONLY || t === chatPanelModes.PanelMode.FULL_PANEL || e) {
        return "canvas_immersive";
      }
      let s = !r && d(i, a);
      if (n && !s) {
        return "split";
      } else {
        return "zen_split";
      }
    }
    if (n) {
      return "standard";
    } else {
      return "focus_chat";
    }
  };
  let v = function (e = {}) {
    let {
      enableUrlSync: t = false,
      rightSideMode: n = "default"
    } = e;
    let {
      isCanvasExpand: d,
      canvasLayoutState: u,
      fromUrlPrefetch: h,
      matchedCanvasPluginIdentifier: p,
      canvasContent: v
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isCanvasExpand: e.isExpand,
      canvasLayoutState: e.canvasLayoutState,
      fromUrlPrefetch: e.fromUrlPrefetch,
      matchedCanvasPluginIdentifier: e.matchedCanvasPluginIdentifier,
      canvasContent: e.canvasContent
    }), deepEqualityUtil_1.isDeepEqual);
    let {
      isSidebarExpand: b,
      hasExpandInteracted: y
    } = chatStoreManager.useStoreSelector("sidebarStore", e => ({
      isSidebarExpand: e.isExpand,
      hasExpandInteracted: e.hasExpandInteracted
    }), deepEqualityUtil_1.isDeepEqual);
    let {
      getCanvasLayoutTrackParams: w
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      getCanvasLayoutTrackParams: e.getCanvasLayoutTrackParams
    }), deepEqualityUtil_1.isDeepEqual);
    let x = reactCoreLibraryReexport.useMemo(() => g(d, u, b, y, typeof window != "undefined" ? window.innerWidth : 1920, n), [d, u, b, y, n]);
    let [C, S] = reactCoreLibraryReexport.useState(false);
    let _ = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        S(true);
        return;
      }
      if (typeof window == "undefined") {
        return;
      }
      let e = new URLSearchParams(window.location.search).get("layout");
      if (e) {
        if (e && ["standard", "focus_chat", "split", "zen_split", "canvas_immersive"].includes(e)) {
          chatStoreManager.getStore("chatViewCanvasStore").setState({
            fromUrlPrefetch: true
          });
          if (e !== x) {
            f(e);
          }
        }
        S(true);
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!C) {
        return;
      }
      let e = chatStoreManager.getStore("flowWebLayoutStore");
      if (e.getState().layoutMode !== x) {
        e.setState({
          layoutMode: x
        });
      }
      if (t && typeof window != "undefined") {
        if (_.current) {
          _.current = false;
          return;
        }
        if (new URL(window.location.href).searchParams.get("layout") !== x) {
          let e = new URL(window.location.href);
          e.searchParams.set("layout", x);
          window.history.replaceState(null, "", e.toString());
        }
      }
    }, [x, t, C]);
    let E = reactCoreLibraryReexport.useRef(x);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        return;
      }
      let e = E.current === "canvas_immersive" || E.current === "zen_split";
      let n = x !== "canvas_immersive" && x !== "zen_split";
      E.current = x;
      if (e && n) {
        (async () => {
          if (p) {
            try {
              var e;
              let t = await chatPluginIocManager.chatCanvasPluginLoader(p);
              if (t != null && (e = t.onCanvasClosed) !== null && e !== undefined) {
                e.call(t, {
                  ...v,
                  isFullCanvas: false
                });
              }
            } catch (e) {
              loggerServiceCore.defaultLogger.error({
                message: "[Canvas Layout] Failed to trigger immersive close callback",
                error: e instanceof Error ? e : Error(String(e))
              });
            }
          }
        })();
      }
    }, [x, p, t, v]);
    let j = reactCoreLibraryReexport.useCallback((e, t) => {
      f(e);
      let n = t ?? (w == null ? undefined : w(e));
      if (n) {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", n);
      }
    }, [w]);
    let R = u === chatPanelModes.PanelMode.FULL_IMMERSIVE || u === chatPanelModes.PanelMode.CANVAS_ONLY;
    let k = reactCoreLibraryReexport.useCallback(() => {
      if (d) {
        if (R) {
          j("split");
        } else {
          j("canvas_immersive");
        }
      }
    }, [d, R, j]);
    let $ = reactCoreLibraryReexport.useCallback(() => {
      j("canvas_immersive");
    }, [j]);
    let O = reactCoreLibraryReexport.useCallback(() => {
      if (typeof window == "undefined") {
        return;
      }
      let e = new URL(window.location.href);
      e.searchParams.delete("layout");
      window.history.replaceState(null, "", e.toString());
    }, []);
    let N = reactCoreLibraryReexport.useCallback(() => {
      O();
      j(chatSidebarLogic.checkSidebarFlag(typeof document == "undefined" ? undefined : document.cookie) === false ? "zen_split" : "split");
    }, [O, j]);
    return {
      mode: x,
      setMode: j,
      clearUrlLayoutParam: O,
      isWideScreenMode: R,
      canToggleWideScreen: d,
      toggleWideScreen: k,
      enterWideScreen: $,
      exitWideScreen: N,
      isCanvasExpand: d,
      canvasLayoutState: u,
      fromUrlPrefetch: h
    };
  };
  require.d(exports, {
    useChatCanvasLayout: function () {
      return v;
    }
  });
}