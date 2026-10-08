// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'AuthRequiredWrapper'
// - Renamed export 'f' to 'withRequireAuth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 309497
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var appInitAsyncUtils = require("app-init-async-utils") /*id: 266268*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = `${doubaoConfigConstants_1.flowCdnUrl}/doubao/logo-doubao-overflow.png`;
  let u = e => {
    let {
      logo: t = d
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("img", {
      src: xssContentSanitizer.sanitizeUrl(t, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$Rsc$ds-zFNRnBZ%1hSa$J6bH$Zbms1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
      }),
      className: "absolute top-1/2 h-60 w-60",
      style: {
        transform: "translate(-50%, -50%)",
        left: "50%"
      }
    });
  };
  var authProcessStepEnum = require("auth-process-step-enum") /*id: 849248*/;
  var oauth2AuthLoginDataExtractor = require("oauth2-auth-login-data-extractor") /*id: 456014*/;
  let h = reactSuspenseWrapper.withSuspense(appInitAsyncUtils.lazyInitRetry(() => require.e("app-auth-runtime") /*id: 40579*/.then(require.bind(require, "auth-login-check") /*id: 827962*/), 3000));
  let m = e => {
    let {
      requireAuthConfig: t,
      children: n
    } = e;
    let i = useLocationWrapper.useLocationWrapper();
    let {
      showLoadingWhenAuthFailed: a = true,
      syncAuth: l = false,
      chatSkeletonFallback: s,
      exemptionNetworkErrorBoundary: d = false
    } = t;
    let [m, _] = reactCoreLibraryReexport.useState(authProcessStepEnum.authStepEnum.BeforeAll);
    let g = oauth2AuthLoginDataExtractor.extractAuthLoginData("login", i) !== undefined || l ? [authProcessStepEnum.authStepEnum.BeforeAll, authProcessStepEnum.authStepEnum.InCheckSSOLogin, authProcessStepEnum.authStepEnum.InAuthLogin, ...(a ? [authProcessStepEnum.authStepEnum.Failed] : [])] : [];
    let v = reactJsxRuntimeCoreReexport.jsx(h, {
      requireAuthConfig: t,
      authState: m,
      setAuthState: _,
      exemptionNetworkErrorBoundary: d
    });
    if (g.includes(m)) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [v, s ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: s
        }) : reactJsxRuntimeCoreReexport.jsx(u, {})]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Fragment, {
        children: [v, n]
      });
    }
  };
  let _ = function (e, t = {}) {
    let n = n => reactJsxRuntimeCoreReexport.jsx(m, {
      requireAuthConfig: t,
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      })
    });
    let r = e.displayName || e.name || "Component";
    n.displayName = `withRequireAuth(${r})`;
    return n;
  };
  require.d(exports, {
    AuthRequiredWrapper: function () {
      return m;
    },
    withRequireAuth: function () {
      return _;
    }
  });
}