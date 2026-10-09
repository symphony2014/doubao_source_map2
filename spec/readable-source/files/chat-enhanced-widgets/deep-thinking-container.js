// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'ThinkingContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 210562
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var thinkQuotaCollapseBlockComponent = require("think-quota-collapse-block-component") /*id: 353510*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var stringSliceLengthUtil = require("string-slice-length-util") /*id: 235558*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var semiCollapseComponent = require("semi-collapse-component") /*id: 795379*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var searchReferencesList = require("search-references-list") /*id: 263161*/;
  var uiStylesClassMap = require("ui-styles-class-map") /*id: 180891*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = e => {
    let {
      searchReferences: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let [r, i] = reactCoreLibraryReexport.useState([]);
    if (isEmptyUtil.isEmpty(t)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(semiCollapseComponent.Collapse, {
        className: uiStylesClassMap.stylesMap["think-reference"],
        expandIcon: reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
          className: f(uiStylesClassMap.stylesMap.chevron, uiStylesClassMap.stylesMap["chevron-right"])
        }),
        onChange: e => {
          i(e);
        },
        collapseIcon: reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
          className: uiStylesClassMap.stylesMap.chevron
        }),
        children: reactJsxRuntimeCoreReexport.jsx(semiCollapseComponent.Collapse.Panel, {
          header: reactJsxRuntimeCoreReexport.jsx("span", {
            className: f("mr-4 text-14 !text-s-color-text-tertiary", {
              [uiStylesClassMap.stylesMap["collapse-header"]]: isUndefinedCheck.isUndefined(r == null ? undefined : r.length) || r.length === 0
            }),
            children: n("considering_sources_status_test_1", {
              postProcess: "sprintf",
              sprintf: [` ${t.length} `]
            })
          }),
          itemKey: "1",
          className: "bg-none border-none",
          children: reactJsxRuntimeCoreReexport.jsx(searchReferencesList.SearchReferences, {
            classname: "ml-4",
            childrenCollapse: false,
            references: t
          })
        })
      });
    }
  };
  var searchReferenceUiComponent = require("search-reference-ui-component") /*id: 676486*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var E = {
    "search-bar": "search-bar-bDeaJi"
  };
  let $ = (e, t, n) => n.map(n => {
    if (isUndefinedCheck.isUndefined(n.position)) {
      return {
        ...n,
        index: 0
      };
    } else if (e === "" && n) {
      return {
        ...n,
        index: t[n.position ?? 0] ?? -1
      };
    } else {
      return {
        ...n,
        index: stringSliceLengthUtil.calcSliceLength(e, t[n.position ?? 0] ?? -1)
      };
    }
  });
  let W = e => {
    var n;
    let {
      metaInfos: s,
      thinkText: d,
      conversationId: c,
      messageReplyId: u,
      isThinkingFinished: m = true,
      searchType: v = "simple_search",
      isShare: x = false,
      options: k,
      enableOpenCanvas: w = true,
      onTrackEvent: b,
      customRenderSearchSideBarBtn: y
    } = e;
    let {
      sources: C = []
    } = k ?? {};
    let R = s.filter(aiChatSourceExtractor.isThinkMessage);
    let W = (R == null ? undefined : (n = R[0]) === null || n === undefined ? undefined : n.data?.references) ?? [];
    let Z = W.map(e => [e.position, e.position]).flat(2).filter(e => e !== undefined).map(e => Number(e));
    let M = utf8EncodingUtils_1.Utf8Utils.posCalcRange(d, Z);
    let F = $(d, M, W);
    let I = collectionArrayGrouper.groupValuesToArray(F, e => e.index);
    let B = [];
    for (let [e, t] of toEntriesUtil.toEntries(I)) {
      for (let n of objectValuesHelper.getObjectValues(t)) {
        let {
          data: t
        } = n ?? {};
        let o = Number(e);
        if (o === -1 || o + 1 === d.length && m) {
          o = d.length;
        }
        if (!t) {
          continue;
        }
        let l = {
          text_card: {
            card_list: t.map(e => e.text_card).filter(Boolean)
          },
          video_card: {
            card_list: t.map(e => e.video_card).filter(Boolean)
          }
        };
        B.push({
          range: o,
          type: "block",
          render: () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: x ? reactJsxRuntimeCoreReexport.jsx(N, {
              searchReferences: t
            }) : reactJsxRuntimeCoreReexport.jsx(searchReferenceUiComponent.SearchReferenceUIComponent, {
              meta: [],
              classname: f(E["search-bar"], "!mt-0"),
              searchType: v,
              autoOpenCanvas: !m,
              conversationId: c,
              messageReplyId: u + e,
              referenceInAll: l,
              useDeepThinking: true,
              enableOpenCanvas: w,
              showFrom: "cot",
              onTrackEvent: b,
              customRenderSearchSideBarBtn: y
            })
          })
        });
      }
    }
    if (B.length === 0 && C) {
      let {
        text_card: e,
        video_card: t
      } = C ?? {};
      let n = ((e == null ? undefined : e.card_list?.length) ?? 0) > 0 || ((t == null ? undefined : t.card_list?.length) ?? 0) > 0;
      let {
        deepThinkingReference: o = []
      } = aiChatSourceExtractor.extractChatSources(C, []);
      if (n) {
        B.push({
          range: Number(0),
          type: "block",
          render: () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: x ? reactJsxRuntimeCoreReexport.jsx(N, {
              searchReferences: o
            }) : reactJsxRuntimeCoreReexport.jsx(searchReferenceUiComponent.SearchReferenceUIComponent, {
              meta: [],
              classname: f(E["search-bar"], "!mt-0"),
              showFrom: "cot",
              autoOpenCanvas: !m,
              searchType: v,
              conversationId: c,
              messageReplyId: `${u}0`,
              referenceInAll: C,
              useDeepThinking: true,
              onTrackEvent: b,
              customRenderSearchSideBarBtn: y
            })
          })
        });
      }
    }
    return B;
  };
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var searchCanvasServiceHook = require("search-canvas-service-hook") /*id: 583489*/;
  let F = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var h;
    let {
      meta: _,
      content: p,
      searchType: v,
      messageReplyId: f,
      conversationId: g,
      botId: x,
      messageId: k,
      skillId: w,
      skillType: b,
      references: y,
      options: C,
      isShare: R = false,
      forceCloseCanvas: N = false,
      enableOpenCanvas: S = true,
      thinkExpandStatus: E = false,
      isThinkingFinished: $ = true,
      isThinkingBroken: F = false,
      onTrackEvent: I,
      messageText: B,
      customRenderSearchSideBarBtn: L
    } = e;
    let D = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isInSearchLoading: O,
      loadingTitle: P
    } = C ?? {};
    let {
      sources: H
    } = aiChatSourceExtractor.extractChatSources(y, []);
    let {
      onOpenSearchCanvas: X
    } = searchCanvasServiceHook.useSearchCanvas({
      searchType: v,
      messageReplyId: f,
      conversationId: g,
      useDeepThinking: true,
      referenceInAll: H,
      isAutoOpenCanvasInNarrow: true,
      onTrackEvent: I
    });
    let q = configSyncLoader.getConfig("chatMessageBoxConfig");
    let A = (h = q == null ? undefined : q.deepThinkingContent?.enableOpenCanvas) === null || h === undefined || h;
    let J = S && A;
    let {
      sources: z,
      collapseButtonText: V
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        sources: e = []
      } = aiChatSourceExtractor.extractChatSources(y, []);
      let t = aiChatSourceExtractor.getThinkStatusLabel(e, $, D);
      let {
        title: n
      } = aiChatSourceExtractor.extractThinkMeta(_);
      return {
        sources: e,
        collapseButtonText: n || t
      };
    }, [y, $]);
    let U = _ ? markdownMetaRenderUtils.filterMetaObjects(_) : [];
    let G = usePreviousHook.usePrevious($);
    let Q = (!isUndefinedCheck.isUndefined(G) || !$) && E;
    let K = reactCoreLibraryReexport.useMemo(() => ({
      isShare: R,
      metaInfos: U ?? [],
      thinkText: p ?? "",
      searchType: v,
      messageReplyId: f,
      conversationId: g,
      isThinkingFinished: $ || F,
      options: {
        sources: y
      },
      enableOpenCanvas: J,
      onTrackEvent: I,
      customRenderSearchSideBarBtn: L
    }), [U, p]);
    let Y = reactCoreLibraryReexport.useMemo(() => isUndefinedCheck.isUndefined(p) ? [] : W(K), [K]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!!z && !!(z.length > 0) && !$ && !F && !N) {
        X();
      }
    }, [z]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!$ && teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
        teaAnalyticsEventTracker.trackEvent("deep_thinking_progress_show", {
          conversation_id: g,
          bot_id: x,
          message_id: k,
          skill_id: w,
          skill_name: skillTypeMappings.getSkillName(b),
          whether_browsing: +((z == null ? undefined : z.length) > 0)
        });
      }
    }, []);
    let ee = async () => {
      var e;
      var t;
      var n;
      var o;
      let l = (n = document) === null || n === undefined ? undefined : (t = n.getSelection()) === null || t === undefined ? undefined : (e = t.toString()) === null || e === undefined ? undefined : e.replace(/[\r\n]/g, "");
      if (l) {
        let e = (p == null ? undefined : (o = p.replace(/[\r\n]/g, "")) === null || o === undefined ? undefined : o.indexOf(l)) === -1;
        let t = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
        let n = t == null ? undefined : t.getCanvasTeaParams();
        if (l && p) {
          if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
            teaAnalyticsEventTracker.trackEvent("right_click_copy", {
              message_id: k,
              bot_id: x,
              click_from: "deep_thinking",
              conversation_id: g,
              start_index: e ? "0" : undefined,
              end_index: e ? `${(B == null ? undefined : B.length) || 0}` : undefined,
              skill_id: w,
              ...n
            });
          }
        }
      }
    };
    if ($ && !p) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(thinkQuotaCollapseBlockComponent.ThinkQuotaCollapseBlock, {
        ref: t,
        enableThinkContainer: true,
        onQuotaBlockTextCopy: ee,
        onCollapseButtonClick: e => {
          if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
            teaAnalyticsEventTracker.trackEvent("deep_thinking_progress_click", {
              conversation_id: g,
              bot_id: x,
              message_id: k,
              skill_id: w,
              skill_name: skillTypeMappings.getSkillName(b),
              whether_browsing: +((z == null ? undefined : z.length) > 0),
              to_status: e ? "open" : "close"
            });
          }
        },
        isFinished: $ || F,
        contentStr: p,
        defaultExpand: Q,
        insertedElements: Y,
        collapseButtonText: V,
        loading: O,
        loadingNode: reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
          title: P || D("web_search_deep_think_searchResult_label_searching"),
          loading: true
        })
      });
    }
  });
  require.d(exports, {
    ThinkingContainer: function () {
      return F;
    }
  });
}