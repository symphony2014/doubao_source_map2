// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'federationRuntimeManager'
// - Resolved require(380632) to 'federation-runtime-manager'
// - Renamed variable 'a' to 'throttledDeepCloneUtil'
// - Resolved require(74680) to 'throttled-deep-clone-util'
// - Renamed variable 'i' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'serviceRequestHelpers'
// - Resolved require(410370) to 'service-request-helpers'
// - Renamed variable 'u' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'c' to 'slardarMonitorManager'
// - Resolved require(309069) to 'slardar-monitor-manager'
// - Renamed variable 'd' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'v' to 'skillMessageBox'
// - Resolved require(111120) to 'skill-message-box'
// - Renamed variable 'f' to 'reactAsyncIteratorHook'
// - Resolved require(545543) to 'react-async-iterator-hook'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'b' to 'chatCanvasVmokPluginLoader'
// - Resolved require(803021) to 'chat-canvas-vmok-plugin-loader'
// - Renamed variable 'R' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'N' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'S' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable '_' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 'P' to 'chatCanvasPanelContainer'
// - Resolved require(955662) to 'chat-canvas-panel-container'
// - Resolved require.e(6447) to 'async-infra-layout'
// - Resolved require.bind(128010) to 'canvas-panel-error-and-loading-components'
// - Updated imported property 'k' to 'slardarManager' (module 309069)
// - Updated imported property 'CC' to 'getMessage' (module 111120)
// - Updated imported property 'Pc' to 'subscribeUserInfo' (module 400206)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Yr' to 'normalRequest' (module 410370)
// - Updated imported property 'YL' to 'rawRequest' (module 410370)
// - Updated imported property 'Z' to 'throttledDeepClone' (module 74680)
// - Updated imported property 'Z' to 'federationRuntime' (module 380632)
// - Updated imported property 'Z' to 'useAsyncIterator' (module 545543)
// - Updated imported property 'xK' to 'asyncRetry' (module 374795)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'Hj' to 'useChatCanvasVmokPlugin' (module 803021)
// - Updated imported property 'SV' to 'ErrorBoundary' (module 939224)
// - Updated imported property 'C' to 'CanvasPanelContainer' (module 955662)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: vmok-renderer.5e7c07e8.js
         * chunkId: 94377
         * moduleId: 555823
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var federationRuntimeManager = require("federation-runtime-manager") /*id: 380632*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var slardarMonitorManager = require("slardar-monitor-manager") /*id: 309069*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillMessageBox = require("skill-message-box") /*id: 111120*/;
  let m = function (e, t = {}, r = {}) {
    let o = reactCoreLibraryReexport.useMemo(() => performance.now(), [e]);
    let m = slardarMonitorManager.slardarManager.getInstance();
    let f = skillMessageBox.getMessage("canvas", "vmokDoubaoIMService");
    let h = chatUserInfoActions.subscribeUserInfo();
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let p = {
      slardar: m,
      userInfo: h
    };
    let y = {
      imService: f,
      lifecycle: {
        onMount: () => {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "vmok_provider_mount",
            meta: {
              providerName: e,
              duration: performance.now() - o
            }
          });
        },
        onReady: () => {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "vmok_provider_ready",
            meta: {
              providerName: e,
              duration: performance.now() - o
            }
          });
        }
      },
      methods: {
        tea: teaAnalyticsEventTracker.trackEvent,
        t: g,
        normalRequest: serviceRequestHelpers.normalRequest
      }
    };
    return {
      context: reactCoreLibraryReexport.useMemo(() => throttledDeepCloneUtil.throttledDeepClone(p, t), [p, t]),
      bridge: reactCoreLibraryReexport.useMemo(() => throttledDeepCloneUtil.throttledDeepClone(y, r), [y, r])
    };
  };
  var reactAsyncIteratorHook = require("react-async-iterator-hook") /*id: 545543*/;
  let h = null;
  let g = async () => {
    var t;
    if (h) {
      return h;
    }
    let r = await serviceRequestHelpers.rawRequest({
      method: "GET",
      url: "https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-flow.web.config-web"
    }, {
      overrideConfig: {
        timeout: 3000
      }
    });
    let n = r == null ? undefined : (t = r.data) === null || t === undefined ? undefined : t.data?.vmok_overrides;
    let o = n ? JSON.parse(n) : {};
    h = o;
    return o;
  };
  let p = () => ({
    tccOverrides: {},
    overridden: false,
    withCache: false,
    getTccStatus: "",
    registerRemote: "",
    loadRemoteStatus: "",
    loadRemoteError: "",
    providerVersion: "",
    duration: {
      getTcc: 0,
      loadRemote: 0,
      mount: 0
    }
  });
  let y = (e, t) => {
    let r = federationRuntimeManager.federationRuntime.getInstance();
    let a = reactCoreLibraryReexport.useRef({});
    let [i, l] = reactCoreLibraryReexport.useState(null);
    let [s, u] = reactCoreLibraryReexport.useState(null);
    let c = reactCoreLibraryReexport.useMemo(() => performance.now(), [e, t]);
    let v = reactCoreLibraryReexport.useMemo(() => p(), [e, t]);
    let m = async () => {
      let e = performance.now();
      try {
        a.current = await g();
        v.getTccStatus = "success";
      } catch {
        v.getTccStatus = "failed";
      }
      v.tccOverrides = a.current;
      v.duration.getTcc = performance.now() - e;
    };
    let h = () => {
      if (r.moduleCache.has(e)) {
        v.withCache = true;
        return;
      }
      let n = a.current[e] || t;
      v.overridden = Reflect.has(a.current, e);
      r.registerRemotes([{
        name: e,
        entry: n
      }]);
      v.registerRemote = n;
    };
    let y = async () => {
      let t = performance.now();
      try {
        var n;
        let t = await r.loadRemote(e);
        if (t) {
          l(() => t.default);
        }
        v.loadRemoteStatus = t ? "success" : "failed no_component";
        v.providerVersion = ((n = r.moduleCache.get(e)) === null || n === undefined ? undefined : n.remoteInfo.buildVersion) || "";
      } catch (e) {
        if (e instanceof Error) {
          u(e);
        } else {
          u(Error(String(e)));
        }
        v.loadRemoteStatus = "request failed";
        v.loadRemoteError = String(e);
      }
      v.duration.loadRemote = performance.now() - t;
    };
    let w = () => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "vmok_consumer_mount",
        meta: {
          providerName: e,
          providerEntry: t,
          ...v
        }
      });
    };
    reactAsyncIteratorHook.useAsyncIterator(async function* () {
      await m();
      h();
      yield;
      await y();
      yield;
      v.duration.mount = performance.now() - c;
      w();
    }, [e, t]);
    return {
      VmokProvider: i,
      loadRemoteError: s
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = reactCoreLibraryReexport.memo(function (e) {
    let {
      providerName: t,
      providerEntry: r,
      extraContext: n,
      extraBridge: a
    } = e;
    federationRuntimeManager.federationRuntime.initialize();
    let {
      VmokProvider: i,
      loadRemoteError: l
    } = y(t, r);
    let {
      context: s,
      bridge: u
    } = m(t, n, a);
    if (l) {
      throw l;
    }
    return i && reactJsxRuntimeCoreReexport.jsx(i, {
      context: s,
      bridge: u
    });
  });
  var chatCanvasVmokPluginLoader = require("chat-canvas-vmok-plugin-loader") /*id: 803021*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatCanvasPanelContainer = require("chat-canvas-panel-container") /*id: 955662*/;
  let k = () => asyncRetryUtils.asyncRetry(() => require.e("async-infra-layout") /*id: 6447*/.then(require.bind(require, "canvas-panel-error-and-loading-components") /*id: 128010*/), 3, e => e * 1000);
  let x = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => k().then(e => ({
    default: e.NoMatchCanvasPanel
  }))));
  let E = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => k().then(e => ({
    default: e.CommonLoadingCanvasPanel
  }))));
  var L = reactCoreLibraryReexport.memo(function (e) {
    let {
      isExpand: r,
      payload: n,
      pluginIdentifier: o,
      canvasLayoutState: a,
      containerClassName: i
    } = e;
    let {
      plugin: l,
      loading: s,
      updateLoading: u
    } = chatCanvasVmokPluginLoader.useChatCanvasVmokPlugin(o);
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      FallbackComponent: x,
      errorBoundaryName: (l == null ? undefined : l.errorBoundaryName) ?? `canvas_error_${String(o)}`,
      children: l && reactJsxRuntimeCoreReexport.jsxs(chatCanvasPanelContainer.CanvasPanelContainer, {
        isExpand: r,
        className: i,
        canvasLayoutState: a,
        children: [s && reactJsxRuntimeCoreReexport.jsx(E, {}), reactJsxRuntimeCoreReexport.jsx("div", {
          className: s ? "invisible w-0 h-0 overflow-hidden" : "h-full",
          children: reactJsxRuntimeCoreReexport.jsx(C, {
            providerName: l.vmokProviderName,
            providerEntry: l.vmokProviderEntry,
            extraContext: {
              openCanvasPayload: n
            },
            extraBridge: {
              methods: {
                closeCanvasPanel: () => {
                  chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
                },
                cancelLoading: () => {
                  u(false);
                }
              }
            }
          })
        })]
      })
    });
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return L;
    }
  });
}