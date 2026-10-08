// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'l' to 'skillGuidanceSuggestions_1'
// - Resolved require(919609) to 'skill-guidance-suggestions_1'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'u' to 'useRequestHook'
// - Resolved require(870590) to 'use-request-hook'
// - Renamed variable 'd' to 'chatSettingsOutlinedIcon'
// - Resolved require(8717) to 'chat-settings-outlined-icon'
// - Renamed variable 'p' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'm' to 'chatSearchPaths'
// - Resolved require(105003) to 'chat-search-paths'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'ChatSettingsOutlined' (module 8717)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'Z' to 'useRequest' (module 870590)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property '$' to 'GuidanceListView' (module 919609)
// - Updated imported property 'D' to 'academicSearchPath' (module 105003)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 227130
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillGuidanceSuggestions_1 = require("skill-guidance-suggestions_1") /*id: 919609*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var chatSettingsOutlinedIcon = require("chat-settings-outlined-icon") /*id: 8717*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatSearchPaths = require("chat-search-paths") /*id: 105003*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      navigate: t,
      reportParams: i,
      trackParams: v,
      onAfterSendMessage: f,
      onBeforeSendMessage: g
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let y = reactJsxRuntimeCoreReexport.jsx(chatSettingsOutlinedIcon.ChatSettingsOutlined, {
      className: "p-3 text-18"
    });
    let {
      sendMessage: k
    } = chatServiceContext.useChatService("chatMessageService");
    let w = chatAppEnums.SkillType.AcademicSearch.toString();
    let {
      data: b
    } = useRequestHook.useRequest(async () => {
      let e = eventReportingService.createEventReporter({
        eventName: "academic_search_skill_pack"
      });
      try {
        var i;
        let r = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.AcademicSearch
        });
        e.addDurationPoint("success");
        e.success();
        if ((i = r.data) === null || i === undefined) {
          return undefined;
        } else {
          return i.academic_search?.simple_template;
        }
      } catch (t) {
        e.error({
          error: t instanceof Error ? t : Error(String(t)),
          reason: "academic_search_skill_pack_error"
        });
        return [];
      }
    }, {
      cacheKey: "academic_search_skill_pack"
    });
    let x = async (e, t) => {
      let n = {
        skill_id: w,
        skill_type: chatAppEnums.SkillType.AcademicSearch
      };
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        content_detail: b == null ? undefined : b[t].question,
        ...v
      });
      if ((await (g == null ? undefined : g())) !== false) {
        k([{
          text: (b == null ? undefined : b[t].question) ?? "",
          reportParams: {
            scene: "sidebar_skill_click",
            ...i
          },
          extraExt: {
            input_skill: JSON.stringify(n),
            send_from_skill_guidance_or_suggestion: "1"
          }
        }]);
        if (f != null) {
          f({
            exitSkill: false
          });
        }
      }
    };
    let S = reactCoreLibraryReexport.useMemo(() => {
      var e;
      return (b == null ? undefined : (e = b.slice(0, 3)) === null || e === undefined ? undefined : e.map(e => ({
        icon: y,
        title: e.question
      }))) ?? [];
    }, [b]);
    if (S.length) {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestions_1.GuidanceListView, {
        className: "py-12",
        items: S,
        moreText: h("newChat_skill_sample_view_more"),
        reportParams: i,
        onShow: e => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            content_detail: e.title,
            ...v
          });
        },
        onClick: x,
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...v
          });
        },
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...v
          });
          if (t != null) {
            t(chatSearchPaths.academicSearchPath);
          }
        }
      });
    } else {
      return null;
    }
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
      f(this, "titleKey", "newChat_skill_triggered_title_for_academicSearch");
      f(this, "Content", v);
    }
  }
  require.r(exports);
  require.d(exports, {
    AcademicSearchGuidanceSuggestionsPlugin: function () {
      return g;
    }
  });
}