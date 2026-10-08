// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'CommonErrorPageBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.019c7853.js
         * chunkId: 14550
         * moduleId: 318434
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var reactRouterCoreHooks = require("react-router-core-hooks") /*id: 864673*/;
  var deprecatedEdenxRuntimeResolver = require("deprecated-edenx-runtime-resolver") /*id: 403878*/;
  let u = () => deprecatedEdenxRuntimeResolver.resolveRuntimeValue("useRouteError", reactRouterCoreHooks.useRouteError)();
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  let f = "boundary_auto_reloaded";
  let g = e => e instanceof apiErrorHandler.ApiError || (e == null ? undefined : e.name) === "ChunkLoadError";
  let b = e => {
    let {
      error: t,
      from: n,
      t: i,
      disableAutoReload: o,
      forceAutoReload: a
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (!o && (a || g(t))) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "boundary_auto_reload",
          error: t instanceof Error ? t : Error(String(t)),
          meta: {
            from: n
          }
        });
        if (sessionStorage.getItem(f)) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "boundary_auto_reload_still_failed",
            error: t instanceof Error ? t : Error(String(t)),
            meta: {
              from: n
            }
          });
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "boundary_auto_reload_failed",
            error: t instanceof Error ? t : Error(String(t)),
            meta: {
              from: n
            }
          });
        } else {
          samanthaToastFactory.defaultToast.error({
            content: i("page_load_error_and_auto_refresh"),
            showClose: false,
            theme: "light"
          });
          setTimeout(() => {
            sessionStorage.setItem(f, "1");
            location.reload();
          }, 1000);
        }
      }
    }, [o, t]);
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = {
    common: "bg-transparent text-dbx-text-primary outline-dbx-line-10 outline-1 hover:bg-dbx-fill-trans-10-hover",
    active: "bg-dbx-text-highlight text-dbx-text-static-white-primary hover:bg-dbx-fill-highlight-hover"
  };
  let x = e => {
    let {
      text: t,
      onClick: n,
      type: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("button", {
      className: o(w[r], "min-w-100 px-10 h-38 text-14 whitespace-nowrap cursor-pointer rounded-dbx-lg"),
      onClick: n,
      children: t
    });
  };
  let C = e => {
    let {
      customReloadClick: t,
      t: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(x, {
      type: "active",
      onClick: () => {
        if (t) {
          if (t != null) {
            t();
          }
        } else {
          window.location.reload();
        }
      },
      text: n("reload_page_btn")
    });
  };
  let _ = {
    "www.doubao.com": "/chat/",
    default: "/"
  };
  let O = () => {
    if (typeof window == "undefined") {
      return {
        showHomeBtn: false
      };
    }
    let {
      host: e,
      pathname: t
    } = location;
    let n = _[e] || _.default;
    return {
      showHomeBtn: t !== n,
      homeRoute: n
    };
  };
  let E = e => {
    let {
      t,
      customHomeClick: n
    } = e;
    if (typeof window == "undefined") {
      return null;
    }
    let {
      showHomeBtn: r,
      homeRoute: i
    } = O();
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        type: "common",
        text: t("back_to_homepage_btn"),
        onClick: () => {
          if (n) {
            if (n != null) {
              n();
            }
          } else {
            window.location.href = xssContentSanitizer.sanitizeUrl(`${window.location.origin}${i}`, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F5$m1sT$-xWj$ZMjA1Z$$4WFNuWmtWelZy$1ZoS05$d3p%bmxaZ$Rsc$lqSXhkR0l5TkhS-$dFcD$Zak5KZEdOSFJtNWF$emxwWkZo%01HSXlOSFZr%0%0MFdWaEtib$JZ$FQwPQ"
            });
          }
        }
      });
    } else {
      return null;
    }
  };
  var j = require.p + "static/image/avatar-head.5127e41f.png";
  let $ = () => reactJsxRuntimeCoreReexport.jsx("img", {
    src: xssContentSanitizer.sanitizeUrl(j, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F5$m1sT$-xWj$ZMjA1Z$$4WFNuWmtWelZy$1ZoS05$d3p%bmxaZ$Rsc$lqSXhkR0l5TkhS-$dFcD$Zak5KZEdOSFJtNWF$emxvWkcxR01*bFlTWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
    }),
    className: "h-80 w-80 shrink-0 rounded"
  });
  var Z = {
    wrapper: "wrapper-vpfgD8",
    title: "title-IozuBu",
    "sub-title": "sub-title-nW5zSR",
    "button-wrapper": "button-wrapper-smA5fJ",
    "extra-wrapper": "extra-wrapper-cxWZC8"
  };
  let S = e => {
    let {
      title: t,
      showTitle: n = true,
      subTitle: i,
      showSubTitle: l = true,
      showAvatar: c = true,
      showHomeBtn: d = true,
      customHomeClick: h,
      showReloadBtn: m = true,
      customReloadClick: f,
      from: g,
      extraComp: v,
      t: w = i18nTranslationUtils.i18nextTranslate,
      error: x,
      disableAutoReload: _,
      forceAutoReload: O
    } = e;
    let j = x ?? u();
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "boundary_common_error_page",
        meta: {
          from: g,
          title: t
        },
        error: j instanceof Error ? j : Error(String(j))
      });
    }, []);
    b({
      from: g,
      t: w,
      disableAutoReload: _,
      forceAutoReload: O,
      error: j
    });
    let S = v ? reactCoreLibraryReexport.isValidElement(v) ? v : reactJsxRuntimeCoreReexport.jsx(v, {}) : null;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(Z.wrapper, "common-error-page"),
      children: [c ? reactJsxRuntimeCoreReexport.jsx($, {}) : null, n ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: Z.title,
        children: t || w("page_not_available")
      }) : null, l ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: Z["sub-title"],
        children: i || w("page_not_available_desc")
      }) : null, (d || m) && reactJsxRuntimeCoreReexport.jsxs(spaceLayoutComponent.Space, {
        className: Z["button-wrapper"],
        spacing: 10,
        children: [m ? reactJsxRuntimeCoreReexport.jsx(C, {
          customReloadClick: f,
          t: w
        }) : null, d ? reactJsxRuntimeCoreReexport.jsx(E, {
          customHomeClick: h,
          t: w
        }) : null]
      }), reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
        className: o(Z["extra-wrapper"], "common-error-extra"),
        vertical: true,
        spacing: 10,
        children: S
      })]
    });
  };
  let P = e => reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
    children: reactJsxRuntimeCoreReexport.jsx(S, {
      ...e
    })
  });
  require.d(exports, {
    CommonErrorPageBoundary: function () {
      return P;
    }
  });
}