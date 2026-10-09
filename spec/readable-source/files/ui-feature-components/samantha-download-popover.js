// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'SamanthaDownloadPop'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 782906
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatNotificationPopupHook = require("chat-notification-popup-hook") /*id: 603077*/;
  var headerPopupStoreHook = require("header-popup-store-hook") /*id: 38587*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  let a = e => {
    reactCoreLibraryReexport.useEffect(() => {
      let t = onceFunctionFactory.createOnce(e);
      window.addEventListener("keydown", t, {
        once: true,
        capture: true
      });
      window.addEventListener("click", t, {
        once: true,
        capture: true
      });
      return () => {
        window.removeEventListener("keydown", t);
        window.removeEventListener("click", t);
      };
    }, []);
  };
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var notificationImageCard = require("notification-image-card") /*id: 304870*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let v = reactStoreHookFactory.createStoreHook(e => ({
    banner: undefined,
    setBanner: t => e({
      banner: t
    })
  }));
  let b = () => {
    let {
      banner: e,
      setBanner: t
    } = v();
    return {
      banner: e,
      fetchData: () => apiServicesCollection.SamanthaApiService.PackNoticeBanner().then(e => {
        t(e == null ? undefined : e.data?.banner);
        if (e == null) {
          return undefined;
        } else {
          return e.data?.banner;
        }
      })
    };
  };
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      onClose: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      banner: i
    } = b();
    if (!i) {
      return null;
    }
    let {
      title: r,
      desc: o,
      background_url: l
    } = i;
    return reactJsxRuntimeCoreReexport.jsx(notificationImageCard.NotificationCard, {
      title: r ?? "",
      imageClass: "h-160",
      imageUrl: l ?? "",
      description: o,
      onClose: t,
      footerNode: reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        className: "w-full",
        utmSource: chatPlatformConstants.sourceConstants.keyFeature,
        trackMeta: {
          showFrom: "upper_right_popup",
          popup_head: r ?? ""
        },
        children: e => {
          let {
            keyWord: t,
            icon_url: i,
            title: r,
            fallback_Icon: o
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "upper_right_float_download_btn",
            type: "secondary",
            className: u("!max-w-none w-full !h-36 pointer !rounded-12 border-0 cursor-pointer flex items-center justify-center !outline-0 text-s-font-base-strong", "popupbtn-nexT1u"),
            icon: typeof i == "string" ? reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              width: 20,
              height: 20,
              src: xssContentSanitizer.sanitizeUrl(i, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$EpXTl$4WFdteFpXRkl4WTIx$mRHTkhPW*Rr$0$*Mldr-z$NMkp0Z%haWl-xRjBZM*M1ZDJSW$F-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
              }),
              fallback: o,
              preview: false
            }) : i,
            children: r && n(r)
          }, t);
        }
      })
    });
  };
  let N = e => {
    let {
      id: t,
      callback: n
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        return;
      }
      let e = headerPopupStoreHook.useHeaderPopupStore.subscribe(e => e.popups.some(e => e.visible && e.id !== t), t => {
        if (t) {
          n();
          e();
        }
      });
      return () => {
        if (t) {
          e();
        }
      };
    }, []);
  };
  let C = e => {
    let {
      button: t,
      getPopupContainer: n,
      position: l,
      popupID: d,
      visible: p
    } = e;
    let u = useLocationWrapper.useLocationWrapper();
    let [m, _] = reactCoreLibraryReexport.useState(false);
    let [x, h] = reactCoreLibraryReexport.useState(false);
    let f = chatNotificationPopupHook.usePopupVisibility(d);
    let {
      finishExecution: w,
      updateVisible: v
    } = headerPopupStoreHook.useHeaderPopupStore();
    let {
      fetchData: g
    } = b();
    a(() => {
      _(true);
    });
    N({
      id: d,
      callback: () => {
        h(false);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (p === false) {
        h(false);
      }
    }, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      h(false);
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f && m) {
        g().then(e => {
          if (e) {
            h(true);
          }
        }).finally(() => {
          w(d);
        });
      }
    }, [f, m]);
    reactCoreLibraryReexport.useEffect(() => {
      v({
        id: d,
        visible: x
      });
    }, [x]);
    return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
      position: l ?? "bottom",
      trigger: "custom",
      visible: x,
      showArrow: true,
      getPopupContainer: n,
      arrowPointAtCenter: true,
      stopPropagation: true,
      content: reactJsxRuntimeCoreReexport.jsx(k, {
        onClose: () => h(false)
      }),
      className: "header-download-btn !p-0",
      zIndex: 1000,
      children: t
    });
  };
  require.d(exports, {
    SamanthaDownloadPop: function () {
      return C;
    }
  });
}