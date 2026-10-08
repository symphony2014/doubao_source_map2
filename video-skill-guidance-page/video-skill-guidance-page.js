// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'r' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'videoSkillStore'
// - Resolved require(297271) to 'video-skill-store'
// - Renamed variable 'd' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'u' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'p' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable '_' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'h' to 'documentPlayRtlIcon'
// - Resolved require(795121) to 'document-play-rtl-icon'
// - Renamed variable 'w' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'k' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'dI' to 'useVideoSkillStore' (module 297271)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'ci' to 'formatSkillId' (module 361602)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'DocumentPlayRtlIcon' (module 795121)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: video-skill-guidance-page.9e6f042c.js
         * chunkId: 2151
         * moduleId: 264140
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var documentPlayRtlIcon = require("document-play-rtl-icon") /*id: 795121*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      video: i,
      onClick: t,
      onItemShow: o
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let {
      url: l,
      title: a,
      poster: s
    } = i;
    let d = () => {
      var e;
      if ((e = r.current) !== null && e !== undefined) {
        e.play();
      }
    };
    let u = () => {
      var e;
      if ((e = r.current) !== null && e !== undefined) {
        e.pause();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (o != null) {
        o(i);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (r.current) {
        r.current.addEventListener("mouseover", d);
        r.current.addEventListener("mouseout", u);
        return () => {
          var e;
          var i;
          if ((e = r.current) !== null && e !== undefined) {
            e.removeEventListener("mouseover", d);
          }
          if ((i = r.current) !== null && i !== undefined) {
            i.removeEventListener("mouseout", u);
          }
        };
      }
    }, [r.current]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "video-card-Pix29m",
      onClick: () => t == null ? undefined : t(i),
      children: [reactJsxRuntimeCoreReexport.jsx("video", {
        src: xssContentSanitizer.sanitizeUrl(l, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1Sd*JHd*FWemgwWWtkc2$t%kRP$Epo$jFKc1lua3hhb*xZ%210T%1teDFXa2RXTk$4d$$uc*xSMFo1$2pO$2$nPT0"
        }),
        className: "video-wrapper-dpdStW",
        ref: r,
        poster: s,
        muted: true,
        autoPlay: false
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title-jpIt5K",
        children: a
      })]
    });
  };
  let $ = e => {
    let {
      videoList: i,
      onClick: t,
      onItemShow: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "video-list-zk6DR6",
      children: i.map((e, i) => reactJsxRuntimeCoreReexport.jsx(y, {
        video: e,
        onClick: e => t == null ? undefined : t(e, i),
        onItemShow: n
      }, i))
    });
  };
  var S = {
    "video-wrapper": "video-wrapper-bn4Dvn",
    icon: "icon-Bdb9kr",
    "video-content-wrapper": "video-content-wrapper-y01ha5"
  };
  let b = e => {
    let {
      renderHeader: i,
      trackParams: t,
      from: l
    } = e;
    let k = i18nTranslationUtils.useTranslationWithFallback();
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.VideoGeneration);
    let y = reactCoreLibraryReexport.useRef(null);
    let [b, E] = videoSkillStore.useVideoSkillStore(e => [e.videoList, e.initVideoList], deepEqualityUtil_1.isDeepEqual);
    let R = reactCoreLibraryReexport.useMemo(() => (b || []).map(e => {
      return {
        url: (e == null ? undefined : e.play_info?.main) || (e == null ? undefined : e.play_info?.backup) || "",
        title: (e == null ? undefined : e.title) || "",
        poster: e == null ? undefined : e.image_url,
        prompt: e == null ? undefined : e.prompt
      };
    }), [b]);
    let L = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "skill_guidance_page_show",
        meta: {
          success: "1",
          skill_type: chatAppEnums.SkillType.VideoGeneration,
          skill_type_str: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.VideoGeneration),
          skill_id: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.VideoGeneration),
          from: l
        }
      });
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (b == null ? undefined : b.length) {
        performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
        L();
      }
    }, [b]);
    reactCoreLibraryReexport.useEffect(() => {
      E();
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      className: a("h-screen overflow-auto absolute", S["video-wrapper"]),
      ref: y,
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [i == null ? undefined : i({
          icon: reactJsxRuntimeCoreReexport.jsx(documentPlayRtlIcon.DocumentPlayRtlIcon, {
            className: a("text-16 p-2", S.icon)
          }),
          title: k("skill_video_title"),
          greeting: k("onboarding_video_description")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: S["video-content-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx($, {
            videoList: R,
            onItemShow: e => teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
              ...t,
              content_detail: e.title,
              genre: null
            })
          })
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    VideoGuidancePage: function () {
      return b;
    }
  });
}