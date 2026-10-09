// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'TranslateSkillGuidance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: translate-skill-guidance-page.ef1836c4.js
         * chunkId: 29337
         * moduleId: 670554
         */
module.exports = function (module, exports, require) {
  var skillGuidanceSuggestions_1 = require("skill-guidance-suggestions_1") /*id: 919609*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatRtlIconComponent_1_1 = require("chat-rtl-icon-component_1_1") /*id: 846597*/;
  var chatInputGuidanceStore = require("chat-input-guidance-store") /*id: 976175*/;
  var chatTranslateSkillService = require("chat-translate-skill-service") /*id: 437553*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let c = e => {
    let {
      skillConfig: t,
      trackParams: n,
      reportParams: l,
      onBeforeSendMessage: r,
      onAfterSendMessage: i
    } = e;
    let {
      sendMessage: o
    } = chatTranslateSkillService.translateService();
    let c = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    return {
      clickTemplate: async e => {
        if (!(t == null ? undefined : t.language)) {
          return;
        }
        let u = t.item_list?.[e];
        let d = t.language.find(e => e.language_code === (u == null ? undefined : u.default_lang));
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          content_detail: ((u == null ? undefined : u.prompt) || "") + (u == null ? undefined : u.text),
          genre: null,
          ...n
        });
        if (d && (u == null ? undefined : u.text) && (await (r == null ? undefined : r())) !== false) {
          await o({
            translateText: u.text,
            targetLangValue: d.value || "",
            targetLangName: d.language || "",
            chatId: c || "",
            reportParams: {
              scene: "sidebar_skill_click",
              sec_scene: "click_suggestedprompt_case",
              ...l
            },
            extraExt: {
              send_from_skill_guidance_or_suggestion: "1"
            }
          });
          if (i != null) {
            i();
          }
        }
      }
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      navigate: n,
      trackParams: s,
      reportParams: u,
      onAfterSendMessage: _,
      onBeforeSendMessage: g,
      isShowMore: p = false
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let {
      config: m
    } = chatInputGuidanceStore.useGuidanceConfig();
    let {
      clickTemplate: h
    } = c({
      skillConfig: m,
      trackParams: s,
      reportParams: u,
      onAfterSendMessage: _,
      onBeforeSendMessage: g
    });
    let v = (m == null ? undefined : m.item_list) ?? [];
    if (m && v.length) {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestions_1.GuidanceListView, {
        className: "px-8 py-12",
        items: v.slice(0, 3).map(e => ({
          icon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1_1.ChatRtlIcon, {
            className: "icon-KkKpqf"
          }),
          title: `${e.prompt} ${e.text}`
        })),
        moreText: f("newChat_skill_sample_view_more"),
        reportParams: u,
        onShow: e => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            content_detail: e.title,
            ...s
          });
        },
        onClick: (e, t) => {
          h(t);
        },
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...s
          });
        },
        isShowMore: p,
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...s
          });
          if (n != null) {
            n("/chat/translate");
          }
        }
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    TranslateSkillGuidance: function () {
      return _;
    }
  });
}