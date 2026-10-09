// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'headerPopupStoreHook'
// - Resolved require(38587) to 'header-popup-store-hook'
// - Renamed variable 'o' to 'chatNotificationConfig'
// - Resolved require(670807) to 'chat-notification-config'
// - Renamed variable 'a' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 's' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'l' to 'downloadAppSidebarComponents'
// - Resolved require(789871) to 'download-app-sidebar-components'
// - Renamed variable 'c' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'd' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'useClampedCounter'
// - Resolved require(912956) to 'use-clamped-counter'
// - Renamed variable 'p' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'm' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'v' to 'samanthaDownloadPopover'
// - Resolved require(782906) to 'samantha-download-popover'
// - Renamed variable 'g' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable '_' to 'businessLayoutStyles_1'
// - Resolved require(143885) to 'business-layout-styles_1'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useClampedCounter' (module 912956)
// - Updated imported property 'C' to 'DownloadTracker' (module 671471)
// - Updated imported property 'Z' to 'layoutClasses' (module 143885)
// - Updated imported property 'X' to 'SamanthaDownloadPop' (module 782906)
// - Updated imported property 'U' to 'notificationConfig' (module 670807)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'k' to 'useHeaderPopupStore' (module 38587)
// - Updated imported property 'tq' to 'isMobile' (module 161498)
// - Updated imported property 'QC' to 'DownloadAppButton' (module 789871)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 299157
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var headerPopupStoreHook = require("header-popup-store-hook") /*id: 38587*/;
  var chatNotificationConfig = require("chat-notification-config") /*id: 670807*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var downloadAppSidebarComponents = require("download-app-sidebar-components") /*id: 789871*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useClampedCounter = require("use-clamped-counter") /*id: 912956*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var samanthaDownloadPopover = require("samantha-download-popover") /*id: 782906*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var businessLayoutStyles_1 = require("business-layout-styles_1") /*id: 143885*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      utmSource: n,
      showFrom: r
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let [, {
      inc: l
    }] = useClampedCounter.useClampedCounter(0);
    let d = a.current?.offsetWidth || 0;
    let y = {
      "--var-arrow-right": `${(d - 24) / 2}px`
    };
    return reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
      utmSource: n,
      trackMeta: {
        showFrom: r
      },
      children: e => {
        let {
          keyWord: n,
          icon_url: i,
          title: r,
          fallback_Icon: d
        } = e;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: businessLayoutStyles_1.layoutClasses.container,
          style: y,
          "data-testid": "chat_header_download_client",
          children: reactJsxRuntimeCoreReexport.jsx(samanthaDownloadPopover.SamanthaDownloadPop, {
            popupID: chatNotificationConfig.notificationConfig.UnloginKeyFeatureNotification?.id,
            button: reactJsxRuntimeCoreReexport.jsx("div", {
              ref: e => {
                if (e && e !== a.current) {
                  a.current = e;
                  l();
                }
              },
              className: "relative",
              children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                type: "tertiary",
                size: "medium",
                className: u("!pr-14 !rounded-12 border-0 flex items-center justify-center text-s-font-base-strong", businessLayoutStyles_1.layoutClasses.btn),
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$WRX-%ZwSFZubE1WM%oyWkRJMWMySXlSbXRN$jBvd1ltaz$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
                  }),
                  fallback: d,
                  preview: false
                }) : i,
                children: r && s(r)
              }, n)
            })
          })
        });
      }
    });
  };
  let w = e => {
    let {
      isNarrowScreen: t
    } = e;
    let {
      finishExecution: n
    } = headerPopupStoreHook.useHeaderPopupStore();
    reactCoreLibraryReexport.useEffect(() => {
      if (t && userAgentDeviceDetector.isMobile()) {
        n(chatNotificationConfig.notificationConfig.UnloginKeyFeatureNotification?.id);
      }
    }, []);
    if (t && userAgentDeviceDetector.isMobile()) {
      return reactJsxRuntimeCoreReexport.jsx(downloadAppSidebarComponents.DownloadAppButton, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsx(y, {
        utmSource: chatPlatformConstants.sourceConstants.headerNotLoginDownloadBtn,
        showFrom: "upper_right"
      });
    }
  };
  class S {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: w,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = w;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    DownloadChatHeaderToolButtonPlugin: function () {
      return S;
    }
  });
}