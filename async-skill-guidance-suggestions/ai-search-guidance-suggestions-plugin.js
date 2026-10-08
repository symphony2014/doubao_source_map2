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
// - Renamed variable 'c' to 'chatSearchPaths'
// - Resolved require(105003) to 'chat-search-paths'
// - Renamed variable 'u' to 'aiSearchConfigSelectors'
// - Resolved require(581982) to 'ai-search-config-selectors'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'Xr' to 'getAISearchConfig' (module 581982)
// - Updated imported property '$' to 'GuidanceListView' (module 919609)
// - Updated imported property 'k' to 'chatSearchPath' (module 105003)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 638993
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillGuidanceSuggestions_1 = require("skill-guidance-suggestions_1") /*id: 919609*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatSearchPaths = require("chat-search-paths") /*id: 105003*/;
  var aiSearchConfigSelectors = require("ai-search-config-selectors") /*id: 581982*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      navigate: i,
      reportParams: p,
      trackParams: m,
      onBeforeSendMessage: _,
      onAfterSendMessage: v
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: g
    } = chatServiceContext.useChatService("chatMessageService");
    let h = aiSearchConfigSelectors.getAISearchConfig();
    let y = reactCoreLibraryReexport.useMemo(() => {
      return (h == null ? undefined : h.map(e => {
        return {
          iconUrl: (e == null ? undefined : e.icon_url) ?? "",
          title: (e == null ? undefined : e.title) ?? ""
        };
      })) ?? [];
    }, [h]);
    let k = chatAppEnums.SkillType.Search.toString();
    let w = async (e, t) => {
      let o = {
        skill_id: k,
        skill_type: chatAppEnums.SkillType.Search
      };
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        content_detail: (y == null ? undefined : y[t]?.title) ?? "",
        ...m
      });
      if ((await (_ == null ? undefined : _())) !== false) {
        await g([{
          text: (y == null ? undefined : y[t]?.title) ?? "",
          reportParams: {
            scene: "sidebar_skill_click",
            ...p
          },
          extraExt: {
            input_skill: JSON.stringify(o),
            send_from_skill_guidance_or_suggestion: "1"
          }
        }]);
        if (v != null) {
          v({
            exitSkill: false
          });
        }
      }
    };
    if (y == null ? undefined : y.length) {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestions_1.GuidanceListView, {
        className: "px-8 py-12",
        itemIconClassName: "w-60 h-45 rounded-8 object-cover",
        moreIconClassName: "mx-18",
        items: (y == null ? undefined : y.slice(0, 4).map(e => ({
          iconUrl: e.iconUrl,
          title: e.title
        }))) ?? [],
        moreText: f("newChat_skill_search_sample_view_more"),
        reportParams: p,
        onShow: (e, t) => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            content_detail: (y == null ? undefined : y[t]?.title) ?? "",
            ...m
          });
        },
        onClick: w,
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...m
          });
        },
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...m
          });
          if (i != null) {
            i(chatSearchPaths.chatSearchPath);
          }
        }
      });
    } else {
      return null;
    }
  };
  function m(e, t, i) {
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
  class _ {
    constructor() {
      m(this, "titleKey", "newChat_skill_triggered_title_for_search");
      m(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    AISearchGuidanceSuggestionsPlugin: function () {
      return _;
    }
  });
}