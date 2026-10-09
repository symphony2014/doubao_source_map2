// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 't' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable '_' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'r' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'p' to 'useLatestRef_1'
// - Resolved require(335903) to 'use-latest-ref_1'
// - Renamed variable 'g' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'w' to 'noteStarIcon'
// - Resolved require(440749) to 'note-star-icon'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'Z' to 'NoteStarIcon' (module 440749)
// - Updated imported property 'Z' to 'useLatestRef' (module 335903)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-website-skill-guidance-page.16c09888.js
         * chunkId: 34196
         * moduleId: 876784
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var noteStarIcon = require("note-star-icon") /*id: 440749*/;
  var m = {
    "suggest-wrapper": "suggest-wrapper-mUgUCw",
    "max-text": "max-text-GpyTWh",
    "suggest-item": "suggest-item-Iqy0dV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      renderHeader: i,
      trackParams: n,
      skillConfig: x,
      reportParams: h,
      onBeforeSendMessage: b
    } = e;
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: f
    } = chatServiceContext.useChatService("chatMessageService");
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.ReadWebsite);
    let y = chatAppEnums.SkillType.ReadWebsite.toString();
    let N = async e => {
      var i;
      let s = x == null ? undefined : (i = x.web_search) === null || i === undefined ? undefined : i.item_list?.[e];
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        ...n,
        content_detail: s == null ? undefined : s.link_text,
        genre: null
      });
      if ((await (b == null ? undefined : b())) !== false) {
        f([{
          text: `${s == null ? undefined : s.prompt}${s == null ? undefined : s.link_url}`,
          reportParams: {
            scene: "sidebar_skill_click",
            sec_scene: "click_suggestedprompt_case",
            ...h
          },
          extraExt: {
            input_skill: JSON.stringify({
              skill_id: y,
              skill_type: chatAppEnums.SkillType.ReadWebsite,
              ...((s == null ? undefined : s.use_cache_answer) ? {
                variables: {
                  read_website_link_hash: s == null ? undefined : s.link_hash
                }
              } : {})
            }),
            ...((s == null ? undefined : s.use_cache_answer) ? {
              guidance_use_cache_answer: "1"
            } : {}),
            send_from_skill_guidance_or_suggestion: "1"
          }
        }]);
      }
    };
    let j = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var l;
      if (x == null) {
        return undefined;
      } else if ((l = x.web_search) === null || l === undefined) {
        return undefined;
      } else if ((e = l.item_list) === null || e === undefined) {
        return undefined;
      } else {
        return e.map((e, l) => ({
          value: String(l),
          label: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex max-w-full items-center gap-4",
            children: [reactJsxRuntimeCoreReexport.jsx(noteStarIcon.NoteStarIcon, {
              className: "p-2 text-16"
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "whitespace-nowrap",
              children: e.prompt
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: a("overflow-ellipsis whitespace-nowrap underline", m["max-text"]),
              children: e.link_text
            })]
          })
        }));
      }
    }, [x]);
    let S = useLatestRef_1.useLatestRef(x == null ? undefined : x.web_search?.item_list);
    let E = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      var e;
      if ((e = S.current) !== null && e !== undefined) {
        e.forEach(e => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            ...n,
            content_detail: e.link_text,
            genre: null
          });
        });
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (x) {
        E();
      }
    }, [x]);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      autoShowScrollbar: true,
      className: "h-screen overflow-auto",
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [i == null ? undefined : i({
          icon: reactJsxRuntimeCoreReexport.jsx(noteStarIcon.NoteStarIcon, {
            className: "text-16"
          }),
          title: k("skill_readWebpage_title"),
          greeting: k("onboarding_webpage_description"),
          className: "mx-10"
        }), reactJsxRuntimeCoreReexport.jsxs("p", {
          className: "mx-10 mt-30 mb-12 text-s-color-text-tertiary s-font-small",
          children: [k("promptCard_label_try"), "..."]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mx-10 flex flex-col gap-10",
          children: j && reactJsxRuntimeCoreReexport.jsx("div", {
            className: m["suggest-wrapper"],
            children: j.map((e, l) => reactJsxRuntimeCoreReexport.jsx("div", {
              "data-testid": "skill-page-web-summary-suggestion",
              className: m["suggest-item"],
              onClick: () => N(l),
              children: e.label
            }, l))
          })
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    ReadWebsiteGuidancePage: function () {
      return x;
    }
  });
}