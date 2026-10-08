// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'AsyncSkillContentBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 837193
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var uiConstantsModule = require("ui-constants-module") /*id: 631020*/;
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var useInViewHook = require("use-in-view-hook") /*id: 387169*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var markdownPairedSymbolStrongFallbackPlugin = require("markdown-paired-symbol-strong-fallback-plugin") /*id: 419814*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var urlLinkNormalizer = require("url-link-normalizer") /*id: 365828*/;
  var chatMessageMetaRenderer = require("chat-message-meta-renderer") /*id: 146384*/;
  var safariSelectionHighlightHook = require("safari-selection-highlight-hook") /*id: 885774*/;
  var skillMessageCopyHandler = require("skill-message-copy-handler") /*id: 545747*/;
  var footnoteLinkType = require("footnote-link-type") /*id: 98049*/;
  var idRegistryContext = require("id-registry-context") /*id: 683140*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let L = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.resolve().then(require.bind(require, "code-block-component-selector") /*id: 346427*/).then(e => ({
      default: e.CodeBlockSplitter
    }))
  })));
  let B = () => [];
  let Z = (e, t, n) => {
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      content: a,
      meta: s,
      contentType: c
    } = reactUseChangedRef.useChangedRef((() => {
      let i = t || messageContentUtils.formatMessage(e, false, messageContentTypeAndStatusChecker.VN0(e) ? "" : l("chat_unsupported_message_type"));
      let {
        meta_infos: r,
        content_type: o
      } = e || {};
      return {
        content: i,
        meta: n || r,
        contentType: o
      };
    })(), deepEqualityUtil.deepEqual);
    let {
      insertingMetaInfos: u
    } = reactCoreLibraryReexport.useMemo(() => c === chatMessageTypes.ContentType.Text || n ? {
      insertingMetaInfos: s ? markdownMetaRenderUtils.filterMetaObjects(s) : []
    } : {}, [s, a]);
    return {
      content: a,
      insertingMetaInfos: u,
      refInfoData: (e == null ? undefined : e.ext?.ref_info_data) ? JSON.parse(e.ext.ref_info_data) : []
    };
  };
  let F = e => {
    var t;
    let {
      inView: k,
      customRenderOptions: w,
      message: C,
      theme: x,
      messageBlockText: $,
      messageBlockMeta: F
    } = e;
    let W = i18nTranslationUtils.useTranslationWithFallback();
    let {
      getPopupContainer: D
    } = chatContextUtil.useChatContext();
    let V = messageContentTypeAndStatusChecker.hT$(C);
    let z = messageContentTypeAndStatusChecker.FFC(C);
    let H = messageContentTypeAndStatusChecker.vlk(C);
    let X = chatMessageStatusCheck.isMessageFinished(C);
    skillMessageCopyHandler.useMessageCopy({
      messageId: C == null ? undefined : C.message_id
    });
    let U = reactCoreLibraryReexport.useRef(null);
    let K = markdownPairedSymbolStrongFallbackPlugin.usePairedSymbolStrongFallback();
    safariSelectionHighlightHook.useSafariHighlight(U, k);
    let J = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    let {
      imageEventCallbacks: G,
      renderImagePreview: q
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({}, [], chatCoreConstants.MessageActions.Original);
    let Q = reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(L, {
      ...e,
      viewOnly: true,
      message: C
    }), [C == null ? undefined : C.message_id]);
    let Y = reactCoreLibraryReexport.useMemo(() => {
      return {
        CodeBlock: Q,
        ...((w == null ? undefined : w.customSlots) ?? {})
      };
    }, [C, w == null ? undefined : w.customSlots]);
    let ee = (e, t) => {
      let {
        exts: n,
        url: i,
        openLink: r
      } = t;
      e.preventDefault();
      e.stopPropagation();
      if (n.type === uiConstantsModule.messageType.wiki) {
        r(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(n.wiki_link || ""));
      } else if (n.type === uiConstantsModule.messageType.normal) {
        if (i == null ? undefined : i.includes(footnoteLinkType.footnoteLinkType)) {
          ec("footnote_link_click");
        }
        r(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(i));
      } else if (n.type === uiConstantsModule.messageType.coco) {
        let e = urlLinkNormalizer.extractRawUrl(i);
        if (e) {
          r(e);
          teaAnalyticsEventTracker.trackEvent("first_party_card_h5_share_page_click", {
            url: e,
            message_id: C == null ? undefined : C.message_id,
            click_from: "link"
          });
        }
      }
    };
    let et = emptyExportFunction.emptyFunction;
    let {
      content: en,
      insertingMetaInfos: ei,
      refInfoData: er
    } = Z(C, $, F);
    let eo = (w == null ? undefined : w.overrideTextContent) ?? en;
    let el = reactCoreLibraryReexport.useMemo(() => ({
      message: C,
      metaInfos: ei ?? [],
      messageText: eo ?? "",
      onLinkClick: ee,
      onSendMessage: et,
      viewOnly: true,
      options: {
        getPopupContainer: D,
        enableHightLight: true
      },
      refInfoData: er,
      mdBoxRef: U
    }), [ei, eo, er]);
    let ea = reactCoreLibraryReexport.useMemo(() => {
      if (isUndefinedCheck.isUndefined(eo) || eo === "" && (!ei || ei.length === 0)) {
        return [];
      } else {
        return ((w == null ? undefined : w.getInitialReplacementElements) ?? chatMessageMetaRenderer.renderMessageMeta)(el);
      }
    }, [el, w == null ? undefined : w.getInitialReplacementElements]);
    let es = ((w == null ? undefined : w.useCustomReplacementElements) || B)(el);
    let ec = emptyExportFunction.emptyFunction;
    let ed = idRegistryContext.useIdRegistered(C.message_id ?? "", k);
    let {
      inView: eu
    } = useInViewHook.useInView({
      ref: () => {
        var e;
        return ((e = U.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
      }
    });
    let ep = {
      onImageRender: e => {
        let {
          src: t
        } = e;
        if (t) {
          G.onImageRender(t);
        }
      },
      onImageClick: (e, t) => {
        let {
          src: n
        } = t;
        if (n) {
          G.onImageClick(e, n);
        }
      },
      onLinkClick: ee,
      onLinkRender: e => {
        var t;
        if ((t = e.url) === null || t === undefined ? undefined : t.includes(footnoteLinkType.footnoteLinkType)) {
          ec("footnote_link_show");
        }
      },
      onSendMessage: et
    };
    let eh = w == null ? undefined : (t = w.useCustomEventCallbacks) === null || t === undefined ? undefined : t.call(w, {
      message: C,
      defaultCallbacks: ep
    });
    let ev = (w == null ? undefined : w.getCodebarConfig) ?? ((e, t) => {
      let {
        codeBlocks: i
      } = e;
      let {
        isFinished: r,
        isFailed: o,
        isBroken: l
      } = t;
      let a = i.at(0)?.language;
      if ("compute".startsWith(a ?? "")) {
        return {
          finished: r || o || l,
          defaultExpand: false,
          showCodeBar: true,
          expandedFinishedText: W("deepResearch_tool_genCode_done"),
          unExpandFinishedText: W("deepResearch_tool_genCode_done"),
          codeBarLoadingText: W("deepResearch_tool_genCode"),
          compact: true
        };
      } else {
        return {
          finished: r || o || l,
          showCodeBar: false
        };
      }
    });
    if (!C) {
      return null;
    }
    let em = emptyExportFunction.emptyFunction;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
        ref: U,
        theme: x && x !== "samantha" ? "default" : "samantha",
        mode: J ? "dark" : "light",
        imageOptions: {
          responsiveNaturalSize: {
            maxWidth: Infinity,
            maxHeight: 600
          },
          showTitle: true,
          centered: true,
          forceHttps: true
        },
        markDown: eo || "",
        slots: Y,
        smooth: {
          enable: !X,
          maxFirstTextSmoothSize: V ? 9999 : 10
        },
        translate: {
          copyTitle: W("message_long_press_copy"),
          codeBarLoadingText: W("code_block_compute_switch_button_running"),
          codeBarExpandedFinishedText: W("code_block_switch_button_hide_details"),
          codeBarUnExpandFinishedText: W("code_block_switch_button_show_details")
        },
        eventCallbacks: {
          ...ep,
          ...eh
        },
        showEllipsis: H || z,
        showIndicator: !X && !z,
        autoFixSyntax: (ed || eu) && {
          autoFixEnding: H,
          imageEmphasisTitle: true
        },
        insertedElements: [...es, ...ea],
        autoFitRTL: localeDirectionCheck.isRtlLanguage(),
        onHop: em,
        forceBrInterSpacing: true,
        enhancedCopy: true,
        customLink: e => !urlParamUtils.isSpecialProtocol(e),
        codeBarConfig: e => ev(e, {
          isFinished: X,
          isBroken: H,
          isFailed: z
        }),
        footnote: false,
        enabledHtmlTags: ["doubaocanvas"],
        renderHtml: e => {
          let {
            tagName: t,
            children: n
          } = e;
          if (t === "doubaocanvas") {
            return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: n
            });
          }
        },
        ...K
      }), q()]
    });
  };
  require.d(exports, {
    AsyncSkillContentBlock: function () {
      return F;
    }
  });
}