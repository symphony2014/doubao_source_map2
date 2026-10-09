// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'r' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'd' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'c' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable '_' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'g' to 'useElementSizeHook_2'
// - Resolved require(486741) to 'use-element-size-hook_2'
// - Renamed variable 'u' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'h' to 'rtlChatSparkleIcon'
// - Resolved require(944755) to 'rtl-chat-sparkle-icon'
// - Renamed variable 'm' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'w' to 'pptGuidanceStore'
// - Resolved require(940991) to 'ppt-guidance-store'
// - Renamed variable 'f' to 'pptSkillGuidanceHandler'
// - Resolved require(895557) to 'ppt-skill-guidance-handler'
// - Renamed variable 'v' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'k' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'b' to 'useIntersectionObserver'
// - Resolved require(774639) to 'use-intersection-observer'
// - Renamed variable 'x' to 'rtlSvgIcon'
// - Resolved require(197635) to 'rtl-svg-icon'
// - Renamed variable 'L' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useIntersection' (module 774639)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'RtlSvgIcon' (module 197635)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'j$' to 'useOnboardingSkills' (module 441131)
// - Updated imported property 'Z' to 'useElementSize' (module 486741)
// - Updated imported property 'zm' to 'usePPTGuidanceStore' (module 940991)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'd' to 'createPptGuidanceClickHandler' (module 895557)
// - Updated imported property 'Q3' to 'routeChatBase' (module 323118)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'RtlChatSparkleIcon' (module 944755)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-skill-guidance-page.ce63514f.js
         * chunkId: 10571
         * moduleId: 320344
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var rtlChatSparkleIcon = require("rtl-chat-sparkle-icon") /*id: 944755*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var pptGuidanceStore = require("ppt-guidance-store") /*id: 940991*/;
  var pptSkillGuidanceHandler = require("ppt-skill-guidance-handler") /*id: 895557*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var rtlSvgIcon = require("rtl-svg-icon") /*id: 197635*/;
  var y = {
    "ppt-wrapper": "ppt-wrapper-wVn0Lz",
    pptWrapper: "ppt-wrapper-wVn0Lz",
    grid: "grid-GtSRdJ",
    "two-cols": "two-cols-mZXLpA",
    twoCols: "two-cols-mZXLpA",
    "single-col": "single-col-JXHhjs",
    singleCol: "single-col-JXHhjs",
    mask: "mask-LXQyId",
    "guidance-intro": "guidance-intro-H3W3fU",
    guidanceIntro: "guidance-intro-H3W3fU",
    bottom: "bottom-s3zRkt",
    card: "card-lN_Sah",
    actions: "actions-ZF_us9",
    cover: "cover-e53ECC",
    "title-icon": "title-icon-hCt6Ng",
    titleIcon: "title-icon-hCt6Ng",
    title: "title-Cw3oqs",
    "title-text": "title-text-QoMW9e",
    titleText: "title-text-QoMW9e"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var S = e => {
    let {
      title: t,
      coverUrl: i,
      from: n,
      onClick: s,
      trackParams: o
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let [d] = useIntersectionObserver.useIntersection(r, {
      threshold: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
          ...o,
          content_detail: t,
          genre: null,
          show_scene: n === "default" ? "direct_enter" : n === "guidance_page" ? "landing" : "sidebar_skill"
        });
      }
    }, [d]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("relative rounded-s-radius-s flex flex-col cursor-pointer overflow-hidden hover:s-shadow-lv2 transition-shadow", y.card),
      onClick: s,
      ref: r,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-124 overflow-hidden bg-s-color-bg-base",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex justify-center px-20 pt-10",
          children: reactJsxRuntimeCoreReexport.jsx("img", {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elFuZ*tRekZ1WkZkc2ExbFhO$3Bh$Xp*M1dWZ*tiRXd5$*1oamJWRjFaRWhPTkZsW$NtNWtXRTA5"
            }),
            className: a("object-top  select-none bg-s-color-bg-content-base  s-shadow-lv2  w-full", y.cover)
          })
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y.title,
        children: [reactJsxRuntimeCoreReexport.jsx(rtlSvgIcon.RtlSvgIcon, {
          className: a("text-14 p-3 text-s-color-text-disable ", y["title-icon"])
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: y["title-text"],
          children: t
        })]
      })]
    });
  };
  let W = e => {
    let {
      renderHeader: t,
      trackParams: i,
      from: s,
      reportParams: v,
      onBeforeSendMessage: k
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let x = useNavigateRuntimeResolver.useNavigateResolver();
    let W = chatGuidanceSelectors.useOnboardingSkills();
    let $ = W == null ? undefined : W.find(e => e.skill_type === chatAppEnums.SkillType.AiPPT);
    let P = reactCoreLibraryReexport.useRef(null);
    let T = useElementSizeHook_2.useElementSize(P);
    let C = T && T.width < 600;
    let R = T && T.width < 400;
    let [N, j] = pptGuidanceStore.usePPTGuidanceStore(e => [e.cardList, e.fetchCardList], deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      j();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (N == null ? undefined : N.length) {
        performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
      }
    }, [N == null ? undefined : N.length]);
    let Z = pptSkillGuidanceHandler.createPptGuidanceClickHandler(i, v, k);
    if (W == null ? undefined : W.length) {
      if ((W == null ? undefined : W.length) && !$) {
        setTimeout(() => {
          x(chatRouteConstants.routeChatBase, {
            replace: true
          });
        }, 200);
        return null;
      } else {
        return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          className: a("h-screen overflow-auto ", y["ppt-wrapper"]),
          children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
            className: `
          lg:px-10
          md:px-10
        `,
            containerClassName: y["max-width-layout__full-width"],
            children: [t == null ? undefined : t({
              icon: reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
                className: "text-16"
              }),
              title: b("skill_aippt_title"),
              className: "mb-18",
              greeting: b("onboarding_aippt_description")
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              ref: P,
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: y["guidance-intro"],
                children: `${b("promptCard_label_try")}...`
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: a("gap-12 grid mb-12", y.grid, C && y["two-cols"], R && y["single-col"]),
                children: N == null ? undefined : N.map((e, t) => {
                  return reactJsxRuntimeCoreReexport.jsx(S, {
                    title: e.title ?? "",
                    coverUrl: e.cover_url ?? "",
                    onClick: () => {
                      return Z(e.prompt ?? "", e.title ?? "", s ?? "");
                    },
                    from: s,
                    trackParams: i
                  }, t);
                })
              })]
            })]
          })
        });
      }
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    PptGuidancePage: function () {
      return W;
    }
  });
}