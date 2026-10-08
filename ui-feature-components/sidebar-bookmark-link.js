// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'BookmarkLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 154699
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var mobileSidebarContext = require("mobile-sidebar-context") /*id: 526694*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var u = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.126 3.118H5.874l.012-.248c.022-.426.17-.788.448-1.042.278-.253.658-.374 1.097-.374h9.136c.44 0 .82.121 1.097.374.279.254.427.616.448 1.042zm1.925 2.706-.305-.049a6 6 0 0 0-.915-.068H5.17q-.485 0-.914.068l-.306.05.035-.31c.056-.496.256-.905.6-1.187.34-.28.797-.415 1.33-.415h12.182c.533 0 .988.134 1.327.415.341.283.539.692.594 1.188zm-8.71 12.858a1.1 1.1 0 0 1-.305-.79v-2.3H8.747c-.311 0-.584-.097-.8-.305l-.003-.003a1.06 1.06 0 0 1-.308-.775c0-.31.097-.582.307-.792.21-.218.487-.32.804-.32h2.29v-2.289a1.07 1.07 0 0 1 1.083-1.102c.31 0 .582.098.792.307.217.21.32.483.32.795v2.29h2.289c.312 0 .585.102.795.32.209.21.307.48.307.791 0 .302-.1.567-.309.775-.21.21-.482.309-.793.309h-2.29v2.298c0 .31-.104.58-.318.794-.21.21-.482.309-.793.309-.302 0-.567-.101-.775-.31zm7.49 3.864H5.17c-1.01 0-1.81-.252-2.358-.793s-.802-1.334-.802-2.33V9.858c0-.997.254-1.79.802-2.331s1.349-.792 2.358-.792h13.662c1.01 0 1.81.251 2.358.792s.802 1.334.802 2.33v9.566c0 .996-.254 1.789-.802 2.33-.547.541-1.348.793-2.358.793M4.288 20.27c.19.19.484.303.909.303h13.616c.414 0 .707-.113.897-.303s.31-.49.31-.932V9.942c0-.443-.12-.743-.31-.933s-.483-.303-.897-.303H5.197c-.425 0-.72.114-.909.303-.19.19-.308.49-.308.933v9.397c0 .443.119.743.308.932",
      clipRule: "evenodd"
    })
  }), {}));
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var resolveRuntimeHook = require("resolve-runtime-hook") /*id: 770715*/;
  var runtimeNavLinkWrapper = require("runtime-nav-link-wrapper") /*id: 649486*/;
  var businessFeedIcon = require("business-feed-icon") /*id: 906098*/;
  function w(e) {
    let {
      v2: t,
      ...n
    } = e;
    let d = useNavigateRuntimeResolver.useNavigateResolver();
    let w = useLocationWrapper.useLocationWrapper();
    let {
      setMobileSidebarVisible: v
    } = mobileSidebarContext.useMobileSidebar({
      optionalProvider: true
    });
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let g = resolveRuntimeHook.resolveUseMatches();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("collect_entrance_show", {
        show_from: "sidebar"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(runtimeNavLinkWrapper.RuntimeNavLink, {
      to: chatRouteConstants.routeCollection,
      replace: true,
      onClick: e => {
        e.preventDefault();
        v(false);
        if (w.pathname !== chatRouteConstants.routeCollection) {
          if (g.find(e => e.id === "main_chat/layout")) {
            d(chatRouteConstants.routeCollection, {
              replace: true
            });
          } else {
            window.open(xssContentSanitizer.sanitizeUrl(chatRouteConstants.routeCollection, null, {
              logType: "js.window.location",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$mpCa1IyeDFXbmt4-W1JelNteE1NMD%1$1hrNWFXRlliM1JaTWpsMFkw-z$k$nB-TlRCam$%b*9aRzFHT%ZsW$N-%mpSemwzWWpO-WJHTnBNWFJh$np$eFRESk9kb%pIZ%d4Wk0xSndZakkwZEZwWE5%QmpibXQyW$ZjMWExcFlaM1Zr%0%0MFdWaEtib$JZ$FQwPQ"
            }), "_self");
          }
        }
        chatSidebarStateManager.toggleMobileSidebarExpand();
        teaAnalyticsEventTracker.trackEvent("collect_entrance_click", {
          click_from: "sidebar"
        });
        teaAnalyticsEventTracker.trackEvent("sidebar_button_click", {
          button_name: "collect_folder"
        });
      },
      ...n,
      children: [t ? reactJsxRuntimeCoreReexport.jsx(businessFeedIcon.BusinessFeedIcon, {
        className: "size-16"
      }) : reactJsxRuntimeCoreReexport.jsx(u, {}), b("chat_list_bookmarks")]
    });
  }
  require.d(exports, {
    BookmarkLink: function () {
      return w;
    }
  });
}