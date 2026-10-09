// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'skillGuidanceSuggestions_1'
// - Resolved require(919609) to 'skill-guidance-suggestions_1'
// - Renamed variable 'n' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'noteStarIcon'
// - Resolved require(440749) to 'note-star-icon'
// - Renamed variable 'o' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property '$' to 'GuidanceListView' (module 919609)
// - Updated imported property 'Z' to 'NoteStarIcon' (module 440749)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 780428
         */
module.exports = function (module, exports, require) {
  var skillGuidanceSuggestions_1 = require("skill-guidance-suggestions_1") /*id: 919609*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var noteStarIcon = require("note-star-icon") /*id: 440749*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let c = e => {
    let {
      skillConfig: t,
      trackParams: i,
      reportParams: r,
      onBeforeSendMessage: l,
      onAfterSendMessage: a
    } = e;
    let {
      sendMessage: c
    } = chatServiceContext.useChatService("chatMessageService");
    let u = chatAppEnums.SkillType.ReadWebsite.toString();
    return {
      clickTemplate: async e => {
        var d;
        let p = t == null ? undefined : (d = t.web_search) === null || d === undefined ? undefined : d.item_list?.[e];
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          content_detail: p == null ? undefined : p.link_text,
          genre: null,
          ...i
        });
        if ((await (l == null ? undefined : l())) !== false) {
          await c([{
            text: `${p == null ? undefined : p.prompt} ${p == null ? undefined : p.link_url}`,
            reportParams: {
              scene: "sidebar_skill_click",
              sec_scene: "click_suggestedprompt_case",
              ...r
            },
            extraExt: {
              input_skill: JSON.stringify({
                skill_id: u,
                skill_type: chatAppEnums.SkillType.ReadWebsite,
                ...((p == null ? undefined : p.use_cache_answer) ? {
                  variables: {
                    read_website_link_hash: p == null ? undefined : p.link_hash
                  }
                } : {})
              }),
              ...((p == null ? undefined : p.use_cache_answer) ? {
                guidance_use_cache_answer: "1"
              } : {}),
              send_from_skill_guidance_or_suggestion: "1"
            }
          }]);
          if (a != null) {
            a();
          }
        }
      }
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      skillConfig: o,
      navigate: s,
      trackParams: d,
      reportParams: p,
      onBeforeSendMessage: m,
      onAfterSendMessage: _
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let {
      clickTemplate: f
    } = c({
      skillConfig: o,
      trackParams: d,
      reportParams: p,
      onBeforeSendMessage: m,
      onAfterSendMessage: _
    });
    let g = (o == null ? undefined : o.web_search?.item_list) ?? [];
    if (g.length) {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestions_1.GuidanceListView, {
        className: "px-8 py-12",
        items: g.slice(0, 3).map(e => ({
          icon: reactJsxRuntimeCoreReexport.jsx(noteStarIcon.NoteStarIcon, {
            className: "icon-ic_Tpp"
          }),
          title: `${e.prompt} ${e.link_text}`
        })),
        moreText: v("newChat_skill_sample_view_more"),
        reportParams: p,
        onShow: (e, t) => {
          var r;
          let l = o == null ? undefined : (r = o.web_search) === null || r === undefined ? undefined : r.item_list?.[t];
          teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
            content_detail: l == null ? undefined : l.link_text,
            ...d
          });
        },
        onClick: (e, t) => {
          f(t);
        },
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...d
          });
        },
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...d
          });
          if (s != null) {
            s("/chat/read-web");
          }
        }
      });
    } else {
      return null;
    }
  };
  function p(e, t, i) {
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
  class m {
    constructor() {
      p(this, "titleKey", "newChat_skill_triggered_title_for_webpage");
      p(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadWebsiteGuidanceSuggestionsPlugin: function () {
      return m;
    }
  });
}