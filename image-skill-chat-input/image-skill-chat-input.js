// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'ImageSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 795738
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageUploadUtils = require("image-upload-utils") /*id: 581255*/;
  var imageQuoteHandlerHooks = require("image-quote-handler-hooks") /*id: 536904*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaTagSelector = require("samantha-tag-selector") /*id: 848347*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatFieldProcessor = require("chat-field-processor") /*id: 880637*/;
  var imageSkillStoreHook = require("image-skill-store-hook") /*id: 310175*/;
  var imageSkillStoreSelectors = require("image-skill-store-selectors") /*id: 701989*/;
  var imageSkillGuidancePageComponent = require("image-skill-guidance-page-component") /*id: 389803*/;
  var imageGuidanceUtils = require("image-guidance-utils") /*id: 194509*/;
  var S = {
    banner: "banner-e0FOYv",
    tabs: "tabs-ha6oxx",
    "tab-inner": "tab-inner-W7aAy1",
    "carousel-row-wrapper": "carousel-row-wrapper-uSDtmG"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = e => {
    let {
      visible: n = true,
      chatId: a,
      skill: C,
      activeIndex: N,
      trackParams: R,
      onUpdateActiveIndex: j,
      onUpdateLastStyle: I,
      syncInputEngineValue: O = false
    } = e;
    let P = i18nTranslationUtils.useTranslationWithFallback();
    let [M, B, Z, D, z, L, F, W, H, $, U, X] = imageSkillStoreHook.useImageSkillStore(e => [e.seed, e.paginator, e.templateArr, e.inputOptionsMap, e.imageList, e.fetchImageList, e.loading, e.mockImageList, e.updateCategoryName, e.editorValue, e.updateEditorValue, e.updateHasSelectedTemplatePrompt], deepEqualityUtil_1.isDeepEqual);
    let [K] = queryContextStore.queryContextStore(e => [e.onResetQueryContext], deepEqualityUtil_1.isDeepEqual);
    let V = imageSkillStoreSelectors.useCategoryName();
    let {
      uploadImageFromUrl: G
    } = imageUploadUtils.useImageUpload();
    let {
      handleRefImage: Q
    } = imageQuoteHandlerHooks.useImageQuoteHandler({
      chatId: a
    });
    reactCoreLibraryReexport.useEffect(() => {
      if ((Z == null ? undefined : Z[0]) && n) {
        H((Z == null ? undefined : Z[0]?.category_name) ?? "");
        teaAnalyticsEventTracker.trackEvent("image_style_show", {
          ...R,
          styles: chatFieldProcessor.findOptionValue(chatFieldProcessor.getStyleValue($), D.style),
          image_category: Z == null ? undefined : Z[N],
          show_type: "styles_guide"
        });
      }
    }, [Z]);
    let Y = () => {
      L(false, Number(Z[N]?.category_id), M, B.next_cursor);
    };
    let q = reactFunctionMemoHook.useMemoizedCallback(async e => {
      var n;
      try {
        K();
        let a = await G((e == null ? undefined : e.default_image?.url) || "");
        let l = "bottom_bar";
        Q({
          image: a,
          imageQuoteFrom: "image_template_use_image",
          entryType: l
        });
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          ...R,
          skill_id: C == null ? undefined : (n = C.skill_type) === null || n === undefined ? undefined : n.toString(),
          skill_name: skillTypeMappings.getSkillName(C == null ? undefined : C.skill_type),
          content_detail: e.prompt,
          genre: (Z == null ? undefined : Z[N]?.category_name) ?? "",
          show_scene: l,
          button_name: "base_image"
        });
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "image_use_template_failed",
          error: t,
          meta: {
            scene: "input_popover",
            action: "use_image",
            prompt: e == null ? undefined : e.prompt,
            image_url: e == null ? undefined : e.default_image?.url
          }
        });
      }
    });
    let J = e => {
      teaAnalyticsEventTracker.trackEvent("image_style_module_slide", {
        ...R,
        slide_direction: e
      });
    };
    let ee = () => {
      teaAnalyticsEventTracker.trackEvent("image_style_click", {
        ...R,
        styles: chatFieldProcessor.findOptionValue(chatFieldProcessor.getStyleValue($), D.style),
        image_category: Z == null ? undefined : Z[N],
        show_type: "styles_guide"
      });
    };
    let et = reactCoreLibraryReexport.useCallback((e, t) => {
      var n;
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
        ...R,
        content_detail: e.prompt,
        genre: t,
        skill_id: C == null ? undefined : (n = C.skill_type) === null || n === undefined ? undefined : n.toString(),
        skill_name: skillTypeMappings.getSkillName(C == null ? undefined : C.skill_type),
        show_scene: "bottom_bar"
      });
    }, []);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(S.banner),
        "data-testid": "skill-modal-image-creation",
        children: reactJsxRuntimeCoreReexport.jsx(tabsComponentAdapter.TabsComponent, {
          className: S.tabs,
          type: "button",
          keepDOM: false,
          activeKey: Z == null ? undefined : Z[N]?.category_name,
          renderTabBar: () => reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
            enableArrowBorder: false,
            arrowSize: "large",
            carouselRowClassName: S["carousel-row-wrapper"],
            reportEvent: {
              slideReport: J
            },
            children: reactJsxRuntimeCoreReexport.jsx(samanthaTagSelector.SamanthaTagSelector, {
              itemClassName: "",
              items: Z == null ? undefined : Z.map((e, t) => {
                return {
                  label: (e == null ? undefined : e.category_name) ?? "",
                  key: t
                };
              }),
              value: [N],
              onChange: e => {
                let [a] = e;
                if (a !== undefined) {
                  if (j != null) {
                    j(a);
                  }
                  H(Z[a]?.category_name ?? "");
                  L(true, Number(Z[a]?.category_id) ?? 0);
                }
              }
            })
          }),
          onTabClick: () => ee(),
          children: Z.length > 0 && (Z == null ? undefined : Z.map(e => reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
            tab: e == null ? undefined : e.category_name,
            itemKey: e == null ? undefined : e.category_name,
            children: reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
              className: S["tab-inner"],
              onReachBottom: Y,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: z.length > 0 && reactJsxRuntimeCoreReexport.jsx(imageSkillGuidancePageComponent.ImageSkillGuidancePage, {
                  pageType: imageGuidanceUtils.imageTypes.InputImage,
                  useTemplatePrompt: t => {
                    var n;
                    K();
                    let a = chatFieldProcessor.parseTemplate(t.prompt || "", D);
                    U(a);
                    if (O) {
                      chatInputStoreHelpers.setEditorValue(a);
                    }
                    teaAnalyticsEventTracker.trackEvent("image_style_show", {
                      ...R,
                      styles: chatFieldProcessor.extractStyle(t == null ? undefined : t.prompt),
                      image_category: Z == null ? undefined : Z[N],
                      show_type: "input"
                    });
                    let l = "bottom_bar";
                    X(l);
                    teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
                      ...R,
                      skill_id: C == null ? undefined : (n = C.skill_type) === null || n === undefined ? undefined : n.toString(),
                      skill_name: skillTypeMappings.getSkillName(C == null ? undefined : C.skill_type),
                      content_detail: t.prompt,
                      genre: (Z == null ? undefined : Z[N]?.category_name) ?? "",
                      show_scene: l,
                      button_name: "use_template"
                    });
                    teaAnalyticsEventTracker.trackEvent("image_generation_reference", {
                      ...R,
                      styles: chatFieldProcessor.extractStyle(t == null ? undefined : t.prompt),
                      button_type: "ref",
                      click_image_rank: z.findIndex(e => e.prompt === t.prompt) + 1,
                      image_category: e
                    });
                    loggerServiceCore.defaultLogger.persist.log({
                      eventName: "image_skill_set_template",
                      meta: {
                        styles: chatFieldProcessor.extractStyle(t == null ? undefined : t.prompt)
                      }
                    });
                    if (I != null) {
                      I("");
                    }
                  },
                  useTemplateImage: q,
                  enterTemplate: t => {
                    teaAnalyticsEventTracker.trackEvent("image_generation_hover", {
                      ...R,
                      styles: chatFieldProcessor.extractStyle(t == null ? undefined : t.prompt),
                      hover_image_rank: z.findIndex(e => e.prompt === t.prompt) + 1,
                      image_category: e
                    });
                  },
                  listData: F ? z.concat(W) : z,
                  t: P,
                  showTemplate: (e, t, n) => et(e, n),
                  categoryName: V
                })
              })
            })
          }, e == null ? undefined : e.category_id)))
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ImageSkillChatInput: function () {
      return C;
    }
  });
}