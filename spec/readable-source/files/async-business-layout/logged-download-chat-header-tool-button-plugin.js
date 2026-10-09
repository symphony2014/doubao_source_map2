// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'o' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'a' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 's' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 'l' to 'businessLayoutDownloadTypes'
// - Resolved require(642482) to 'business-layout-download-types'
// - Renamed variable 'c' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'd' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'u' to 'useRecommendWebToDesktop'
// - Resolved require(301549) to 'use-recommend-web-to-desktop'
// - Renamed variable 'h' to 'downloadAppSidebarComponents'
// - Resolved require(789871) to 'download-app-sidebar-components'
// - Renamed variable 'f' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'p' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'useClampedCounter'
// - Resolved require(912956) to 'use-clamped-counter'
// - Renamed variable '_' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'b' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'y' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Renamed variable 'w' to 'businessLayoutStyles_1'
// - Resolved require(143885) to 'business-layout-styles_1'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useClampedCounter' (module 912956)
// - Updated imported property 'C' to 'DownloadTracker' (module 671471)
// - Updated imported property 'Z' to 'layoutClasses' (module 143885)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property '_' to 'useRecommendData' (module 301549)
// - Updated imported property 'mC' to 'useChatType' (module 837195)
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'X' to 'LayoutDownloadTypes' (module 642482)
// - Updated imported property 'tq' to 'isMobile' (module 161498)
// - Updated imported property 'QC' to 'DownloadAppButton' (module 789871)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 962914
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var businessLayoutDownloadTypes = require("business-layout-download-types") /*id: 642482*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var useRecommendWebToDesktop = require("use-recommend-web-to-desktop") /*id: 301549*/;
  var downloadAppSidebarComponents = require("download-app-sidebar-components") /*id: 789871*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useClampedCounter = require("use-clamped-counter") /*id: 912956*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  var businessLayoutStyles_1 = require("business-layout-styles_1") /*id: 143885*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => ({
    "--var-arrow-right": `${((e || 0) - 24) / 2}px`
  });
  let C = e => {
    let {
      utmSource: t,
      showFrom: n
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let [, {
      inc: a
    }] = useClampedCounter.useClampedCounter(0);
    return reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadTracker, {
      utmSource: t,
      trackMeta: {
        showFrom: n
      },
      children: e => {
        let {
          keyWord: n,
          icon_url: i,
          title: s,
          fallback_Icon: l
        } = e;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: businessLayoutStyles_1.layoutClasses.container,
          style: x(r.current?.offsetWidth),
          "data-testid": "chat_header_download_client",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: e => {
              if (e && e !== r.current) {
                r.current = e;
                a();
              }
            },
            className: "relative",
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "tertiary",
              size: "medium",
              className: m("!pr-14 !rounded-12 border-0 flex items-center justify-center text-s-font-base-strong", businessLayoutStyles_1.layoutClasses.btn),
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$WRX-%ZwSFZubE1WM%oyWkRJMWMySXlSbXRN$jBvd1ltaz$jMkl5Wkc1-$-xRjBX$z$TZF$4d$$uc*xSMFo1$2pO$2$nPT0"
                }),
                fallback: l,
                preview: false
              }) : i,
              children: s && o(s)
            }, n)
          })
        });
      }
    });
  };
  let k = e => {
    let {
      isNarrowScreen: n
    } = e;
    let {
      controlRes: f,
      fetchData: p
    } = useRecommendWebToDesktop.useRecommendData();
    let m = chatViewCoreSelectors.useChatType();
    let v = !chatGuidanceSelectors.hasActiveSkill() && m === chatConversationTypes.ConversationTypes.NewThread;
    reactCoreLibraryReexport.useEffect(() => {
      if (isUndefinedCheck.isUndefined(f) && v) {
        p({
          type_list: [businessLayoutDownloadTypes.LayoutDownloadTypes.HeaderDownload, businessLayoutDownloadTypes.LayoutDownloadTypes.SuggestDownload]
        });
      }
    }, [f, v]);
    if (v && (f == null ? undefined : f.header_download) && (f == null ? undefined : f.header_download?.show)) {
      if (n && userAgentDeviceDetector.isMobile()) {
        return reactJsxRuntimeCoreReexport.jsx(downloadAppSidebarComponents.DownloadAppButton, {});
      } else {
        return reactJsxRuntimeCoreReexport.jsx(C, {
          utmSource: chatPlatformConstants.sourceConstants.loggedHeaderDownloadBtn,
          showFrom: "upper_right"
        });
      }
    } else {
      return null;
    }
  };
  class T {
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
          value: k,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = k;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    LoggedDownloadChatHeaderToolButtonPlugin: function () {
      return T;
    }
  });
}