// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable 'l' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'd' to 'notificationImageCard'
// - Resolved require(304870) to 'notification-image-card'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'p' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'm' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'g' to 'rtlTimerIconComponent'
// - Resolved require(325670) to 'rtl-timer-icon-component'
// - Renamed variable 'f' to 'asyncSkillBarItemStyles'
// - Resolved require(37328) to 'async-skill-bar-item-styles'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'RtlTimerIcon' (module 325670)
// - Updated imported property 'V5' to 'isMac' (module 161498)
// - Updated imported property 'I' to 'NotificationCard' (module 304870)
// - Updated imported property 'C' to 'DownloadTracker' (module 671471)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'styles' (module 37328)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23478.18df2811.js
         * chunkId: 23478
         * moduleId: 710942
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var notificationImageCard = require("notification-image-card") /*id: 304870*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlTimerIconComponent = require("rtl-timer-icon-component") /*id: 325670*/;
  var asyncSkillBarItemStyles = require("async-skill-bar-item-styles") /*id: 37328*/;
  var v = require.p + "static/image/content-windows.12ace66f.png";
  var w = require.p + "static/image/content-mac.4e68c858.png";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = () => {
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
  var _ = e => {
    let {
      customDownloadKey: t,
      showCustomFooter: i
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let g = userAgentDeviceDetector.isMac() ? w : v;
    let _ = o("brandName_doubao");
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("download_window_show", {
        click_from: "voice_call_button",
        app_type: userAgentDeviceDetector.isMac() ? "mac_app_universal" : "windows_app"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(notificationImageCard.NotificationCard, {
      title: o("web_voice_call_intro_title", {
        brand: _
      }),
      imageClass: "h-161",
      imageUrl: g,
      description: reactJsxRuntimeCoreReexport.jsxs("ul", {
        className: "m-0 ps-20",
        children: [reactJsxRuntimeCoreReexport.jsx("li", {
          children: o("web_voice_call_intro_description_1")
        }), reactJsxRuntimeCoreReexport.jsx("li", {
          children: o("web_voice_call_intro_description_2")
        }), reactJsxRuntimeCoreReexport.jsx("li", {
          children: o("web_voice_call_intro_description_3", {
            brand: _
          })
        })]
      }),
      footerNode: i ? reactJsxRuntimeCoreReexport.jsx(y, {}) : reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
        className: "w-full min-h-36",
        utmSource: chatPlatformConstants.sourceConstants.voiceGuideDownloadBtn,
        trackMeta: {
          showFrom: "voice_call_button"
        },
        children: e => {
          let {
            keyWord: a,
            icon_url: s,
            title: l,
            fallback_Icon: d
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "secondary",
            className: r("!max-w-none w-full !h-36 pointer !rounded-12 border-0 cursor-pointer flex items-center justify-center !outline-0 text-s-font-base-strong", asyncSkillBarItemStyles.styles.popupbtn),
            icon: typeof s == "string" ? reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              width: 20,
              height: 20,
              src: xssContentSanitizer.sanitizeUrl(s, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcwNWN*a3lWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMEoyWTBjN%1scFlTWFJaTWpsM$pFZFdk$1JETlRCak0ya*9ZMjFrT$dOM1B%MD0"
              }),
              fallback: d,
              preview: false
            }) : s,
            children: l && o((t == null ? undefined : t[a]) ?? l, {
              brand: _
            })
          }, a);
        }
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    CustomFooter: function () {
      return y;
    },
    default: function () {
      return _;
    }
  });
}