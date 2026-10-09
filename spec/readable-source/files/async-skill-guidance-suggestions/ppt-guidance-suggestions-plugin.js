// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'guidanceLayoutUtils'
// - Resolved require(474255) to 'guidance-layout-utils'
// - Renamed variable 'c' to 'skillGuidanceSuggestions_2'
// - Resolved require(671128) to 'skill-guidance-suggestions_2'
// - Renamed variable 'u' to 'skillGuidanceSuggestionsList'
// - Resolved require(213126) to 'skill-guidance-suggestions-list'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'rtlInfoIcon'
// - Resolved require(853560) to 'rtl-info-icon'
// - Renamed variable '_' to 'pptSkillGuidanceHandler'
// - Resolved require(895557) to 'ppt-skill-guidance-handler'
// - Renamed variable 'v' to 'pptGuidanceStore'
// - Resolved require(940991) to 'ppt-guidance-store'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'd' to 'createPptGuidanceClickHandler' (module 895557)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'P' to 'useGuidanceLayout' (module 474255)
// - Updated imported property 'zm' to 'usePPTGuidanceStore' (module 940991)
// - Updated imported property 'Z' to 'isEqual' (module 550444)
// - Updated imported property 'l' to 'GuidanceSuggestions' (module 671128)
// - Updated imported property 'l' to 'SkillGuidanceList' (module 213126)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'RtlInfoIcon' (module 853560)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 257466
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var guidanceLayoutUtils = require("guidance-layout-utils") /*id: 474255*/;
  var skillGuidanceSuggestions_2 = require("skill-guidance-suggestions_2") /*id: 671128*/;
  var skillGuidanceSuggestionsList = require("skill-guidance-suggestions-list") /*id: 213126*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var pptSkillGuidanceHandler = require("ppt-skill-guidance-handler") /*id: 895557*/;
  var pptGuidanceStore = require("ppt-guidance-store") /*id: 940991*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      trackParams: t,
      reportParams: i,
      navigate: a,
      onBeforeSendMessage: g
    } = e;
    let h = pptSkillGuidanceHandler.createPptGuidanceClickHandler(t, i, g);
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let {
      guidancePageLayoutMode: k
    } = guidanceLayoutUtils.useGuidanceLayout();
    let [w, b] = pptGuidanceStore.usePPTGuidanceStore(e => [e.cardList, e.fetchCardList], deepEqualityUtil_1.isEqual);
    reactCoreLibraryReexport.useEffect(() => {
      b();
    }, []);
    if (!w.length) {
      return null;
    }
    let x = k ? skillGuidanceSuggestions_2.GuidanceSuggestions : skillGuidanceSuggestionsList.SkillGuidanceList;
    return reactJsxRuntimeCoreReexport.jsx(x, {
      className: "mt-24 px-10",
      items: w.slice(0, 3).map(e => {
        return {
          title: e.prompt,
          center: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex px-20 pt-10",
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              className: o("img-yIz71c", "object-center object-cover h-full w-full"),
              src: xssContentSanitizer.sanitizeUrl(e.cover_url ?? "", null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elFuZ*tRekZ1WkZkc2ExbFhO$3Bh$Xp*Nlp*Z*tibHBZ$*pCaFZ6bDFZM2s1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
              }),
              alt: ""
            })
          })
        };
      }),
      moreText: y("newChat_skill_sample_view_more"),
      reportParams: i,
      onShow: (e, i) => {
        teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
          content_detail: w[i].title ?? "",
          genre: null,
          ...t
        });
      },
      onClick: (e, t) => {
        return h(w[t].prompt ?? "", w[t].title ?? "", "guidance_suggestions");
      },
      onShowMore: () => {
        teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
          ...t
        });
      },
      onClickMore: () => {
        teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
          ...t
        });
        if (a != null) {
          a("/chat/aippt");
        }
      },
      renderBottomLeft: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex w-full items-center py-5 text-s-color-text-quaternary s-font-xs
          `,
        children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
          className: "p-2 text-14"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "overflow-hidden text-ellipsis whitespace-nowrap",
          children: y("skill_aippt_info_tooltip")
        })]
      })
    });
  };
  function h(e, t, i) {
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
  class y {
    constructor() {
      h(this, "titleKey", "onboarding_aippt_description");
      h(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    PptGuidanceSuggestionsPlugin: function () {
      return y;
    }
  });
}