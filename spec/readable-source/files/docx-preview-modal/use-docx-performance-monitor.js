// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useDocxPerfMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 780079
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function d() {
    return {
      ttv: 0,
      hitSSRFG: false
    };
  }
  let u = new class {
    get() {
      return this.info;
    }
    set(e) {
      let {
        ttv: t,
        hitSSRFG: n
      } = e;
      if (t) {
        this.info.ttv = t;
      }
      if (n) {
        this.info.hitSSRFG = n;
      }
    }
    clear() {
      this.info = d();
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "info";
      t = d();
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }();
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  function p(e, t, n) {
    let {
      isPreview: d,
      isHistory: p,
      isInline: f,
      version: m,
      docId: g
    } = n;
    let [v, b] = reactCoreLibraryReexport.useState(true);
    let y = reactCoreLibraryReexport.useRef({});
    let _ = reactCoreLibraryReexport.useRef(Date.now());
    let {
      pathname: E
    } = useLocationWrapper.useLocationWrapper();
    let w = typeof window != "undefined" ? window.location.hostname : undefined;
    let x = n.enterFrom || "other";
    let C = (E == null ? undefined : E.startsWith("/docx/")) || (E == null ? undefined : E.startsWith("/doc/"));
    let S = reactCoreLibraryReexport.useCallback((e, t) => {
      y.current[e] = t || Date.now();
    }, []);
    let T = reactCoreLibraryReexport.useCallback(e => {
      let t = e || {};
      let n = false;
      let {
        ttv: i,
        hitSSRFG: a
      } = u.get();
      if (i > 0) {
        S("ttv", i);
        n = true;
      } else {
        S("ttv", t.onEditorReady);
      }
      let l = e => Object.fromEntries(Object.entries(e).map(e => {
        let [t, n] = e;
        if (n) {
          return [t, n - _.current];
        }
      }).filter(e => !!e));
      let h = l(t);
      let v = l(y.current);
      let b = userAgentDeviceDetector.isMobileCached();
      let E = pageVisitTrackContext.getCurrentPage();
      teaAnalyticsEventTracker.trackEvent("flow_ccme_docx_performance", {
        doc_id: g,
        is_preview: d,
        is_history: p,
        is_inline: f,
        has_ssr: n,
        hit_ssr_fg: a,
        is_mobile: b,
        current_page: E,
        enter_from: x,
        version: m ? String(m) : undefined,
        hostname: w,
        ttv: v.ttv,
        ttu: h.onEditorReady,
        create_docx_runtime_end: h.createDocxRuntimeEnd,
        init_docx_initializer_end: h.initDocxInitializerEnd,
        init_docx_initializer_start: h.initDocxInitializerStart,
        init_i18n_end: h.initI18nEnd,
        init_log_end: h.initLogEnd,
        init_rpc_client_end: h.initRpcClientEnd,
        load_docx_runtime_resource_end: h.loadDocxRuntimeResourceEnd,
        load_docx_sdk_resource_end: h.loadDocxSdkResourceEnd,
        load_tmpl_conf_end: h.loadTmplConfEnd,
        login_info_watch_end: h.loginInfoWatchEnd,
        on_clientvars_ready: h.onClientvarsReady,
        on_editor_ready: h.onEditorReady,
        setup_config_end: h.setupConfigEnd
      });
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "ai-docx-perf-stage",
        meta: {
          isPreview: d,
          isHistory: p,
          isInline: f,
          hasSSR: n,
          hitSSRFG: a,
          hostname: w,
          isMobile: b,
          currentPage: E,
          version: m ? String(m) : undefined,
          ...h,
          ...v
        }
      });
    }, [d, p, f, m]);
    reactCoreLibraryReexport.useEffect(() => {
      if (C) {
        _.current = performance.timing.navigationStart;
      } else if (t.openCanvasTime) {
        _.current = t.openCanvasTime;
      } else if (t.perfStartTime) {
        _.current = t.perfStartTime;
      } else {
        _.current = Date.now();
      }
      S("iframeDomDidMount");
    }, [C, t, S]);
    let k = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        data: t
      } = e;
      if (t.type === "next-doc-iframe-error" || t.type === "next-doc-iframe-ready") {
        b(false);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("message", k);
      return () => {
        window.removeEventListener("message", k);
      };
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        return;
      }
      let t = rpcHostManager.RpcHostManager.getInstance();
      let n = [];
      t.onConnection(i => {
        if (e === i) {
          n.push(t.on(e, "lifecycle.iframeLoaded", () => {
            S("iframeLoaded");
          }));
          n.push(t.on(e, "lifecycle.editorReady", e => {
            S("onEditorReadyEnd");
            T(e);
            b(false);
          }));
          n.push(t.on(e, "lifecycle.editorError", () => {
            b(false);
          }));
          n.push(t.on(e, "lifecycle.ssrMounted", () => {
            S("ssrMountedEnd");
            b(false);
            u.clear();
            u.set({
              ttv: Date.now(),
              hitSSRFG: true
            });
          }));
        }
      });
      return () => {
        n.forEach(e => e());
      };
    }, [e, S, T]);
    return {
      isLoading: v
    };
  }
  require.d(exports, {
    useDocxPerfMonitor: function () {
      return p;
    }
  });
}