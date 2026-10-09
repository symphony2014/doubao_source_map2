// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'guidanceLayoutUtils'
// - Resolved require(474255) to 'guidance-layout-utils'
// - Renamed variable 's' to 'skillGuidanceSuggestions_2'
// - Resolved require(671128) to 'skill-guidance-suggestions_2'
// - Renamed variable 'c' to 'skillGuidanceSuggestionsList'
// - Resolved require(213126) to 'skill-guidance-suggestions-list'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'exerciseSkillGuidanceHandler'
// - Resolved require(676189) to 'exercise-skill-guidance-handler'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'P' to 'useGuidanceLayout' (module 474255)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'd' to 'handleExerciseSkillClick' (module 676189)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'l' to 'GuidanceSuggestions' (module 671128)
// - Updated imported property 'l' to 'SkillGuidanceList' (module 213126)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 629496
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var guidanceLayoutUtils = require("guidance-layout-utils") /*id: 474255*/;
  var skillGuidanceSuggestions_2 = require("skill-guidance-suggestions_2") /*id: 671128*/;
  var skillGuidanceSuggestionsList = require("skill-guidance-suggestions-list") /*id: 213126*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var exerciseSkillGuidanceHandler = require("exercise-skill-guidance-handler") /*id: 676189*/;
  var m = {
    tag: "tag-NQuAAq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      skillConfig: i,
      navigate: l,
      onAfterSendMessage: v,
      trackParams: f,
      reportParams: g,
      onBeforeSendMessage: h
    } = e;
    let {
      guidancePageLayoutMode: y
    } = guidanceLayoutUtils.useGuidanceLayout();
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let w = exerciseSkillGuidanceHandler.handleExerciseSkillClick(i, f, g, h, v);
    let b = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      if (i == null) {
        return undefined;
      } else if ((t = i.exercise_assistant) === null || t === undefined) {
        return undefined;
      } else if ((e = t.item_list) === null || e === undefined) {
        return undefined;
      } else {
        return e.slice(0, 3);
      }
    }, [i == null ? undefined : i.exercise_assistant?.item_list]);
    let x = reactCoreLibraryReexport.useMemo(() => {
      return (b == null ? undefined : b.map(e => {
        var i;
        var n;
        return {
          title: e.prompt,
          center: reactJsxRuntimeCoreReexport.jsx("img", {
            className: "h-full w-full rounded-t-10 object-contain object-center",
            src: xssContentSanitizer.sanitizeUrl((n = e.images) === null || n === undefined ? undefined : (i = n[0]) === null || i === undefined ? undefined : i.image_ori?.url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$2xk%01$d3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsRjJXb*hv-kdOdFRuQmpNbF-w$2pO$2N*cEhSblZaTWxWMFl6Tldib*95$m5wa1IyeDJZbT$OZ*1*WE5Xd*FXR2QxWk$oT05*bFlTbT$r$0%wOQ"
            }),
            alt: ""
          }),
          header: reactJsxRuntimeCoreReexport.jsx("div", {
            className: a("absolute backdrop-blur-lg top-4 left-4 z-1 rounded-s-radius-xxss py-2 px-6 s-font-xxs text-s-color-text-invert-intact-primary", m.tag),
            children: e.title
          })
        };
      })) ?? [];
    }, [b]);
    if (!x.length) {
      return null;
    }
    let S = y ? skillGuidanceSuggestions_2.GuidanceSuggestions : skillGuidanceSuggestionsList.SkillGuidanceList;
    return reactJsxRuntimeCoreReexport.jsx(S, {
      className: "mt-24 px-10",
      items: x,
      moreText: k("newChat_skill_sample_view_more"),
      reportParams: g,
      onShow: (e, t) => {
        teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
          content_detail: b == null ? undefined : b[t]?.title,
          ...f
        });
      },
      onClick: (e, t) => {
        w(t);
      },
      onShowMore: () => {
        teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
          ...f
        });
      },
      onClickMore: () => {
        teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
          ...f
        });
        if (l != null) {
          l("/chat/edu-exercise");
        }
      }
    });
  };
  function f(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class g {
    constructor() {
      f(this, "titleKey", "newChat_skill_triggered_title_for_solveProblem");
      f(this, "Content", v);
    }
  }
  require.r(exports);
  require.d(exports, {
    ExerciseGuidanceSuggestionsPlugin: function () {
      return g;
    }
  });
}