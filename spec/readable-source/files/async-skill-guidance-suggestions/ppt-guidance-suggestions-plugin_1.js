// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'n' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'rtlChevronRightIcon'
// - Resolved require(946692) to 'rtl-chevron-right-icon'
// - Renamed variable 'd' to 'aiPptTemplateSelector'
// - Resolved require(276405) to 'ai-ppt-template-selector'
// - Renamed variable 'p' to 'aiPptCustomTemplateCard'
// - Resolved require(740723) to 'ai-ppt-custom-template-card'
// - Renamed variable 'm' to 'imagePreloadCardComponent'
// - Resolved require(899467) to 'image-preload-card-component'
// - Renamed variable '_' to 'autoRecommendCardComponent'
// - Resolved require(541404) to 'auto-recommend-card-component'
// - Renamed variable 'v' to 'aiPptTemplateStore'
// - Resolved require(603769) to 'ai-ppt-template-store'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'Z' to 'ChevronRightIcon' (module 946692)
// - Updated imported property 'P' to 'AIPptCustomTemplateCard' (module 740723)
// - Updated imported property 'k8' to 'customUploadCard' (module 603769)
// - Updated imported property 'UO' to 'autoRecCardItem' (module 603769)
// - Updated imported property 'YP' to 'autoRecCardId' (module 603769)
// - Updated imported property 'H' to 'AutoRecommendCard' (module 541404)
// - Updated imported property 'S' to 'CardComponent' (module 899467)
// - Updated imported property 'w' to 'TemplateSelector' (module 276405)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 232890
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var aiPptTemplateSelector = require("ai-ppt-template-selector") /*id: 276405*/;
  var aiPptCustomTemplateCard = require("ai-ppt-custom-template-card") /*id: 740723*/;
  var imagePreloadCardComponent = require("image-preload-card-component") /*id: 899467*/;
  var autoRecommendCardComponent = require("auto-recommend-card-component") /*id: 541404*/;
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      cardList: t,
      className: i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [a, g] = reactCoreLibraryReexport.useState(false);
    let {
      selectedTemplateItem: h,
      selectedFromMoreItem: y,
      updateSelectedFromMoreItem: k,
      selectTemplateItem: w,
      showAutoRecommend: b,
      showCustomCard: x
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      selectedTemplateItem: e.selectedTemplateItem,
      selectedFromMoreItem: e.selectedFromMoreItem,
      updateSelectedFromMoreItem: e.updateSelectedFromMoreItem,
      selectTemplateItem: e.selectTemplateItem,
      showCustomCard: e.showCustomUploadCard,
      showAutoRecommend: e.showAutoRecommendCard
    }));
    reactCoreLibraryReexport.useEffect(() => {
      k(undefined);
      return () => {
        k(undefined);
        w(undefined);
      };
    }, []);
    let S = reactCoreLibraryReexport.useMemo(() => {
      let e = 4;
      if (x) {
        e--;
      }
      if (b) {
        e--;
      }
      let i = t.slice(0, e);
      if (y) {
        w(y);
      }
      return i;
    }, [t, y, x]);
    let C = reactCoreLibraryReexport.useMemo(() => ({
      skill_id: "5000",
      skill_name: "ai_slides",
      show_scene: "landing"
    }), []);
    if (S.length) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(i, "mt-28 "),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o("w-full flex justify-between text-14 [font-weight:400] text-dbx-text-secondary mb-12"),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "recommandTitle-SDekI3",
              children: r("slides_mainPage_tab_recTemplate", "推荐模板")
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: o(`flex shrink-0 cursor-pointer items-center rounded-s-radius-xxss
              px-8 py-5 text-s-color-text-tertiary s-font-xs-strong
              hover:bg-s-color-bg-trans
              `),
              onClick: () => g(true),
              children: [r("slides_mainPage_btn_viewAll", "查看全部"), reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
                className: o("ml-3 size-10 text-10", "rightIcon-RbhUXn")
              })]
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o("grid gap-10", "grid-cols-2", "dbx-sm:grid-cols-3", "dbx-md:grid-cols-4"),
            children: [x && reactJsxRuntimeCoreReexport.jsx(aiPptCustomTemplateCard.AIPptCustomTemplateCard, {
              item: aiPptTemplateStore.customUploadCard,
              onCardInView: () => {
                teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
                  ...C,
                  genre: "ppt_mainPage_tab_recTemplate",
                  template_show_scene: "landing",
                  content_detail: aiPptTemplateStore.customUploadCard?.title || ""
                });
              },
              onClick: () => {
                teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                  ...C,
                  genre: "ppt_mainPage_tab_recTemplate",
                  template_show_scene: "landing",
                  content_detail: aiPptTemplateStore.customUploadCard?.title || ""
                });
              }
            }), b && reactJsxRuntimeCoreReexport.jsx(autoRecommendCardComponent.AutoRecommendCard, {
              item: aiPptTemplateStore.autoRecCardItem,
              active: (h == null ? undefined : h.id) === aiPptTemplateStore.autoRecCardId,
              onClick: () => {
                w(aiPptTemplateStore.autoRecCardItem);
                if ((h == null ? undefined : h.id) !== aiPptTemplateStore.autoRecCardId) {
                  teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                    ...C,
                    genre: "ppt_mainPage_tab_recTemplate",
                    template_show_scene: "landing",
                    content_detail: aiPptTemplateStore.autoRecCardItem?.title || ""
                  });
                }
              },
              onCardInView: () => {
                teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
                  ...C,
                  genre: "ppt_mainPage_tab_recTemplate",
                  template_show_scene: "landing",
                  content_detail: aiPptTemplateStore.autoRecCardItem?.title || ""
                });
              }
            }), S.map((e, t) => reactJsxRuntimeCoreReexport.jsx(imagePreloadCardComponent.CardComponent, {
              className: o({
                "hidden dbx-sm:block": t >= 4 && t < 6,
                "hidden dbx-md:block": t >= 6
              }),
              previewPageDetail: true,
              item: e,
              onClick: () => {
                w(e);
                if (e && (h == null ? undefined : h.id) !== (e == null ? undefined : e.id)) {
                  teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                    ...C,
                    genre: "ppt_mainPage_tab_recTemplate",
                    template_show_scene: "landing",
                    content_detail: (e == null ? undefined : e.title) || ""
                  });
                }
              },
              onShow: () => {},
              onCardInView: e => {
                teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
                  ...C,
                  genre: "ppt_mainPage_tab_recTemplate",
                  template_show_scene: "landing",
                  content_detail: (e == null ? undefined : e.title) || ""
                });
              },
              tabVersion: 0
            }, `${e.cover_url}-${t}`))]
          })]
        }), reactJsxRuntimeCoreReexport.jsx(aiPptTemplateSelector.TemplateSelector, {
          showModule: a,
          setShowModule: g,
          onCardClick: e => {
            if (e.id === aiPptTemplateStore.customUploadCard.id) {
              teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                ...C,
                content_detail: (e == null ? undefined : e.title) || "",
                template_show_scene: "landing_more",
                genre: ""
              });
            }
          },
          onConfirm: (e, t) => {
            w(e);
            if (e && (h == null ? undefined : h.id) !== (e == null ? undefined : e.id)) {
              teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                ...C,
                content_detail: (e == null ? undefined : e.title) || "",
                template_show_scene: "landing_more",
                genre: t || ""
              });
            }
          },
          onCardInView: (e, t) => {
            teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
              ...C,
              content_detail: (e == null ? undefined : e.title) || "",
              template_show_scene: "landing_more",
              genre: t || ""
            });
          }
        })]
      });
    } else {
      return null;
    }
  };
  let h = e => {
    let [t, i] = aiPptTemplateStore_1.aiPptTemplateStore(e => [e.recommandTemplateItems, e.enableTemplate], deepEqualityUtil.deepEqual);
    if (t.length && i) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(g, {
          cardList: t,
          ...e
        })
      });
    } else {
      return null;
    }
  };
  function y(e, t, i) {
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
  class k {
    constructor() {
      y(this, "titleKey", "onboarding_aippt_description");
      y(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    PptGuidanceSuggestionsPlugin: function () {
      return k;
    }
  });
}