// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'ScreenshotDownloadPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 274023
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var screenshotButtonComponent = require("screenshot-button-component") /*id: 476377*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var notificationImageCard = require("notification-image-card") /*id: 304870*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var y = require.p + "static/image/screenshot-download.2bcad16c.png";
  var k = {
    popupbtn: "popupbtn-yBoIHB",
    container: "container-Y3hcAC"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var b = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("download_window_show", {
        click_from: "screenshot_button",
        app_type: userAgentDeviceDetector.isMac() ? "mac_app_universal" : "windows_app"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(notificationImageCard.NotificationCard, {
      title: e("cici_desktop_screenshot_download_title", {
        brandName: brandNameConstants.getBrandName()
      }),
      imageClass: "h-200",
      imageUrl: y,
      description: e("cici_desktop_web_ug_download_desktop_title_unlogin_screenshot_valueprop"),
      footerNode: reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        className: "w-full",
        utmSource: chatPlatformConstants.sourceConstants.screenShot,
        trackMeta: {
          showFrom: "screenshot_button"
        },
        children: t => {
          let {
            keyWord: n,
            icon_url: i,
            title: r,
            fallback_Icon: l
          } = t;
          return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "secondary",
            className: c(`
                  flex !h-36 w-full !max-w-none cursor-pointer items-center
                  justify-center !rounded-12 border-0 !outline-0
                `, k.popupbtn),
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTTBKelp*Z*tjR0p1$FhaaFZ6$jNaRmhSZEdSSE9-WmlRekZwWkZo%01HSXlOSFpqTWs1N$dsZFdk$015-%haa1F6RnBaRmhTT%dJe%5IWmpSemwzWkZoQmRX%kl%alJa$0$wd$p*aE5Q%T09"
              }),
              fallback: l,
              preview: false
            }) : i,
            children: r && e(r)
          }, n);
        }
      })
    });
  };
  let x = e => {
    let {
      className: t,
      getPopupContainer: n
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let d = responsiveScreenHooks.useIsNarrowScreen();
    let c = i18nTranslationUtils.useTranslationWithFallback();
    if (d) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: u,
        className: k.container,
        onClick: e => e.stopPropagation(),
        children: reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
          trigger: "click",
          autoAdjustOverflow: false,
          position: "top",
          showArrow: true,
          stopPropagation: true,
          onVisibleChange: e => {
            if (e) {
              teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                button_name: "screen_shot",
                click_from: "chat_enter_bar"
              });
            }
          },
          getPopupContainer: n || (() => u.current || document.body),
          content: reactJsxRuntimeCoreReexport.jsx(b, {}),
          className: "!rounded-s-radius-xl !p-0",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx(screenshotButtonComponent.ScreenshotButton, {
              className: t,
              tooltipContent: c("cici_desktop_screenshot_capture")
            })
          })
        })
      });
    }
  };
  require.d(exports, {
    ScreenshotDownloadPopover: function () {
      return x;
    }
  });
}