// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'SearchReferenceUIComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 676486
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var searchCanvasServiceHook = require("search-canvas-service-hook") /*id: 583489*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var webSearchDeepThinkKey = require("web-search-deep-think-key") /*id: 202010*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      sources: n,
      classname: o,
      style: l,
      title: r,
      onClick: i,
      isThinkScene: a,
      richImagesResultsLength: s = 0,
      ...d
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let v = functionInvoker.invoke(() => n && n.length > 0 && s > 0 ? s + n.length : n && n.length > 0 ? n.length : s);
    if (n && n.length !== 0 || s !== 0) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": `search-reference-ui-v3${a ? "-think" : ""}`,
        ref: t,
        ...d,
        style: l,
        className: c("entry-btn-v3-F_7fFX", o),
        onClick: e => {
          e.stopPropagation();
          if (i != null) {
            i();
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "entry-btn-title-v3-uM2642",
          children: r || p(webSearchDeepThinkKey.webSearchCountLabel, {
            s_number: v,
            num: v
          })
        })
      });
    } else {
      return null;
    }
  });
  var searchReferenceEntryButton = require("search-reference-entry-button") /*id: 986437*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var searchResultTextItemComponent = require("search-result-text-item-component") /*id: 837753*/;
  var uiStylesClassMap = require("ui-styles-class-map") /*id: 180891*/;
  let k = e => {
    let {
      sources: t
    } = e;
    let n = () => {};
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: uiStylesClassMap.stylesMap["search-reference-container"],
      children: t == null ? undefined : t.map(e => reactJsxRuntimeCoreReexport.jsx(searchResultTextItemComponent.SearchResultTextItem, {
        classname: "!mx-0 !my-0 !w-full !px-8 !py-8",
        searchItemTitleClassName: uiStylesClassMap.stylesMap["search-item-title"],
        searchItemSummaryClassName: uiStylesClassMap.stylesMap["search-item-summary"],
        footerClassName: uiStylesClassMap.stylesMap["search-item-footer"],
        footerTitleClassName: uiStylesClassMap.stylesMap["footer-title"],
        value: e,
        onClick: n
      }, e.search_id))
    });
  };
  let w = e => {
    let {
      sources: t,
      children: n,
      trigger: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      className: uiStylesClassMap.stylesMap.popover,
      autoAdjustOverflow: true,
      trigger: o || "hover",
      position: "bottom",
      showArrow: false,
      content: reactJsxRuntimeCoreReexport.jsx(k, {
        sources: t
      }),
      children: n == null ? undefined : n({})
    });
  };
  let b = {};
  let y = e => {
    let {
      meta: d,
      query: c,
      inBlock: u,
      searchType: m,
      conversationId: h,
      messageReplyId: f,
      title: g,
      classname: x,
      style: k,
      useV3: y = false,
      autoOpenCanvas: C = false,
      enableOpenCanvas: R = true,
      popoverTrigger: j,
      showFrom: N = "answer_complete",
      useDeepThinking: S = true,
      referenceInUsed: T,
      referenceInBlock: E,
      vlmRichMediaResults: $,
      referenceInAll: W,
      isStreaming: Z = false,
      onClick: M,
      onTrackEvent: F,
      customRenderSearchSideBarBtn: I
    } = e;
    let B = b.enableOpenCanvas ?? R;
    let L = b.popoverTrigger ?? j;
    let [D, O, P] = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => [e.isExpand, e.matchedCanvasPluginIdentifier, e.isExpand && e.messageId === f]);
    let [H, X] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let {
      referenceInAll: q = [],
      richImagesResults: A
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        sources: e
      } = u ? aiChatSourceExtractor.processCardArray(E) : aiChatSourceExtractor.extractChatSources(W, d);
      return {
        referenceInAll: e,
        richImagesResults: ($ == null ? undefined : $.filter(e => e.type === skillMessageLifecycleTypes.richMediaType.RichMediaTypeImage)) || []
      };
    }, [T, W, f, u, $, E]);
    let {
      onOpenSearchCanvas: J,
      onCloseCanvas: z
    } = searchCanvasServiceHook.useSearchCanvas({
      query: c,
      searchType: m,
      conversationId: h ?? "",
      messageReplyId: f ?? "",
      useDeepThinking: S,
      referenceInAll: q,
      richImagesResults: A,
      isAutoOpenCanvasInNarrow: false,
      onTrackEvent: F
    });
    let V = () => {
      if (F != null) {
        F("search_result_entrance_click", {
          search_type: m,
          show_from: N,
          whether_use_deep_thinking: S ? "yes" : "no"
        });
      }
      if (h && f && B) {
        if (P) {
          z();
          if (M != null) {
            M(false);
          }
          return;
        }
        J();
        if (M != null) {
          M(true);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (X) {
        if (F != null) {
          F("search_result_entrance_show", {
            search_type: m,
            show_from: N,
            whether_use_deep_thinking: S ? "yes" : "no"
          });
        }
      }
    }, [X]);
    reactCoreLibraryReexport.useEffect(() => {
      if (Z && C && D && O === "receive-search-result-canvas") {
        V();
      }
    }, []);
    if ((!q || q.length === 0) && (!A || A.length === 0)) {
      return null;
    }
    if (typeof I == "function") {
      return I(q);
    }
    let U = y ? p : searchReferenceEntryButton.SearchReferenceEntry;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: H,
      children: B ? reactJsxRuntimeCoreReexport.jsx(U, {
        classname: x,
        title: g,
        style: k,
        sources: q,
        richImagesResultsLength: (A == null ? undefined : A.length) || 0,
        onClick: V,
        isThinkScene: S
      }) : reactJsxRuntimeCoreReexport.jsx(w, {
        trigger: L,
        sources: q,
        children: e => {
          let {
            onClick: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(U, {
            classname: x,
            title: g,
            style: k,
            sources: q,
            richImagesResultsLength: (A == null ? undefined : A.length) || 0,
            onClick: () => {
              V();
              if (t != null) {
                t();
              }
            },
            isThinkScene: S
          });
        }
      })
    });
  };
  require.d(exports, {
    SearchReferenceUIComponent: function () {
      return y;
    }
  });
}