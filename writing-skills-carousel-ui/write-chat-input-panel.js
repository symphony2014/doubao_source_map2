// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'writeChatInputPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42241.852052e1.js
         * chunkId: 42241
         * moduleId: 7478
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaTagSelector = require("samantha-tag-selector") /*id: 848347*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var writingChatInputController = require("writing-chat-input-controller") /*id: 619607*/;
  var chatAiTemplateParser = require("chat-ai-template-parser") /*id: 635776*/;
  var conversationMessageUtilsHelper = require("conversation-message-utils-helper") /*id: 218543*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var chatAiWriteTemplateList = require("chat-ai-write-template-list") /*id: 587322*/;
  var C = {
    "tag-list": "tag-list-z2vz_h",
    tagList: "tag-list-z2vz_h",
    carousel: "carousel-_hcQgd",
    "banner-wrapper": "banner-wrapper-LwDMz7",
    bannerWrapper: "banner-wrapper-LwDMz7",
    sm: "sm-iITh6L",
    item: "item-WmIIf1",
    "item-title": "item-title-UnsEfJ",
    itemTitle: "item-title-UnsEfJ",
    banner: "banner-_jIj7S",
    "carousel-row-wrapper": "carousel-row-wrapper-HH0Cjf",
    carouselRowWrapper: "carousel-row-wrapper-HH0Cjf",
    selected: "selected-yy1N85",
    inner: "inner-i7WaRs",
    tag: "tag-ZE0DeQ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    var n;
    var s;
    let {
      visible: y,
      selectedTemplate: R,
      trackParams: k,
      onUpdateSelectedTemplate: S,
      onUpdateLongArticleWriting: T,
      onClearAttachment: N
    } = e;
    i18nTranslationUtils.useTranslationWithFallback();
    let x = chatResponsiveSize.useChatScreenSize({
      sm: 419,
      md: 899
    });
    let [j, F] = reactCoreLibraryReexport.useState([0]);
    let M = j[0];
    let A = writingSkillConfigHooks.useWritingFilteredTemplates({
      filteredCategoryIndexes: j,
      source: "input_config"
    });
    let {
      config: H
    } = writingSkillConfigHooks.useWritingLongArticleConfig();
    let {
      genre_category: O = []
    } = (H == null ? undefined : H.template) ?? {};
    let $ = writingSkillConfigHooks.useWritingInputOptions({
      source: "input_config"
    });
    let P = ((s = writingSkillConfigHooks.useWritingLongArticleConfig()) === null || s === undefined ? undefined : (n = s.config) === null || n === undefined ? undefined : n.template?.genre_category) ?? [];
    let W = writingSkillConfigHooks.useWritingGenreConfig();
    let D = (e, t) => {
      let {
        genre: n,
        show_name: r
      } = e;
      let i = P.slice(1).find(e => {
        var t;
        return n && ((t = e.genre_list) === null || t === undefined ? undefined : t.includes(n));
      });
      teaAnalyticsEventTracker.trackEvent("input_bar_enter", {
        writing_sub_style: i == null ? undefined : i.show_name,
        click_scene: "writing_requirements",
        writing_genre: n
      });
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "writing_skill_set_template",
        meta: {
          title: r
        }
      });
      if (S != null) {
        S(e, t);
      }
    };
    let Z = async e => {
      if (N != null) {
        N();
      }
      if (deepEqualUtil_1.deepEqual(e, R)) {
        if (S != null) {
          S();
        }
        if (T != null) {
          T(false);
        }
        return;
      }
      if (T != null) {
        T(true);
      }
      let t = chatAiTemplateParser.parseChatTemplate(e.value || "", {
        ...$,
        ...W
      });
      D(e, t);
      writingChatInputController.writingChatInputControllerInstance.updateWritingRichEditorContent(t);
      await promiseAsyncUtilities.createDelayedPromise(100);
      writingChatInputController.writingChatInputControllerInstance.focusOnWritingEditor({
        toIndex: conversationMessageUtilsHelper.countMessageContentLength(t)
      });
    };
    let I = async e => {
      let {
        value: t = ""
      } = e;
      if (T != null) {
        T(false);
      }
      if (N != null) {
        N();
      }
      if (deepEqualUtil_1.deepEqual(e, R)) {
        if (S != null) {
          S();
        }
        return;
      }
      let n = chatAiTemplateParser.parseChatTemplate(t, $);
      D(e, n);
      writingChatInputController.writingChatInputControllerInstance.updateWritingRichEditorContent(n);
      await promiseAsyncUtilities.createDelayedPromise(100);
      writingChatInputController.writingChatInputControllerInstance.focusOnWritingEditor({
        toIndex: conversationMessageUtilsHelper.countMessageContentLength(n)
      });
    };
    if (y) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(C["banner-wrapper"], C[x], {
          "pb-12 pl-12": false
        }),
        "data-testid": "write_chat_input_panel",
        children: [reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
          className: C.carousel,
          arrowSize: "large",
          enableArrowBorder: false,
          leftArrowClassName: "!left-16",
          rightArrowClassName: "!right-16",
          children: reactJsxRuntimeCoreReexport.jsx(samanthaTagSelector.SamanthaTagSelector, {
            className: C["tag-list"],
            items: O.map((e, t) => {
              let {
                show_name: n
              } = e;
              return {
                label: n ?? "",
                key: t
              };
            }),
            value: j,
            onChange: F
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: l(C.banner, {
            "h-430 overflow-y-auto": true
          }),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mx-14",
            children: reactJsxRuntimeCoreReexport.jsx(chatAiWriteTemplateList.WriteTemplateList, {
              templates: A,
              showLongArticle: true,
              handleClickLongArticle: Z,
              currentTabIndex: M,
              handleClickTemplate: I,
              className: "gap-8",
              currentTemplate: R,
              trackParams: k
            })
          })
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    writeChatInputPanel: function () {
      return _;
    }
  });
}