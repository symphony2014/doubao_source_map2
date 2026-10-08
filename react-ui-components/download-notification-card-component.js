// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'l' to 'notificationImageCard'
// - Resolved require(304870) to 'notification-image-card'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'u' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'p' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'm' to 'rtlTimerIconComponent'
// - Resolved require(325670) to 'rtl-timer-icon-component'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'v' to 'desktopDownloadFeatures'
// - Resolved require(365311) to 'desktop-download-features'
// - Renamed variable 'y' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable 'b' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'RtlTimerIcon' (module 325670)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'V5' to 'isMac' (module 161498)
// - Updated imported property 'I' to 'NotificationCard' (module 304870)
// - Updated imported property 'd' to 'downloadFeatures' (module 365311)
// - Updated imported property 'C' to 'DownloadTracker' (module 671471)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// - Updated imported property 'gJ' to 'positionTypes' (module 166229)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67480.1a2929e3.js
         * chunkId: 67480
         * moduleId: 493459
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var notificationImageCard = require("notification-image-card") /*id: 304870*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlTimerIconComponent = require("rtl-timer-icon-component") /*id: 325670*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center justify-center h-40 max-w-360 py-10 pl-10 pr-8  gap-4 self-stretch rounded-12 bg-[#F6F9FF] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.30)]",
      children: [reactJsxRuntimeCoreReexport.jsx(rtlTimerIconComponent.RtlTimerIcon, {
        className: "text-16 p-2 text-[#0046CC]"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "s-font-small-strong text-[#0046CC]",
        children: e("web_voice_call_download_in_mobile")
      })]
    });
  };
  var desktopDownloadFeatures = require("desktop-download-features") /*id: 365311*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var w = e => {
    let {
      showCustomFooter: t,
      infoIdx: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let m = brandNameConstants.getBrandName();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("download_window_show", {
        click_from: "after_answer_hover",
        app_type: userAgentDeviceDetector.isMac() ? "mac_app_universal" : "windows_app"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(notificationImageCard.NotificationCard, {
      title: r(desktopDownloadFeatures.downloadFeatures[n].title, {
        brandName: m
      }),
      imageClass: "h-149",
      imageUrl: desktopDownloadFeatures.downloadFeatures[n].banner,
      descriptionClassName: "mr-auto",
      description: r(desktopDownloadFeatures.downloadFeatures[n].desc),
      footerNode: t ? reactJsxRuntimeCoreReexport.jsx(f, {}) : reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        className: "w-full min-h-36",
        utmSource: chatPlatformConstants.sourceConstants.loggedSuggestHoverDownloadBtn,
        trackMeta: {
          showFrom: chatPlatformConstants.positionTypes.after_answer_hover,
          popup_head: r(desktopDownloadFeatures.downloadFeatures[n].btnText, {
            brandName: m
          })
        },
        children: e => {
          let {
            keyWord: t,
            icon_url: n,
            title: a,
            fallback_Icon: s
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "secondary",
            className: o("!max-w-none w-full !h-36 pointer !rounded-12 border-0 cursor-pointer flex items-center justify-center !outline-0 text-s-font-base-strong"),
            icon: typeof n == "string" ? reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              width: 20,
              height: 20,
              src: xssContentSanitizer.sanitizeUrl(n, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJZa2M1-mxve$ZtdE1WM%oyWkRJMWMySXlSbXRN$jA1ellWZFdk$1JET$hwa1-y%n$Xb*hPT%$3e$RuWmlXR%oyWW0x$2RX%kl%WFpq%npsM1lqTmFiR05wT$dwa%1q$XdXb*MxT%$4d$$uc*xSMFo1$2pO$2$nPT0"
              }),
              fallback: s,
              preview: false
            }) : n ?? null,
            children: a && r(a)
          }, t);
        }
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return w;
    }
  });
}