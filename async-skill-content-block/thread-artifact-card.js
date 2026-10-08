// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'ThreadArtifactCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 212537
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var chatCanvasContentOpener = require("chat-canvas-content-opener") /*id: 559958*/;
  var codeRunPreviewConfig = require("code-run-preview-config") /*id: 650100*/;
  var codeProductCardTooltipWrapper = require("code-product-card-tooltip-wrapper") /*id: 328958*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  var threadFileCard = require("thread-file-card") /*id: 94978*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var chatRtlIconComponent_1 = require("chat-rtl-icon-component_1") /*id: 524284*/;
  var threadFileResponseUtils = require("thread-file-response-utils") /*id: 191293*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  var shareHtmlArtifactModal = require("share-html-artifact-modal") /*id: 984899*/;
  var pngImageDataModule = require("png-image-data-module") /*id: 95030*/;
  var threadL2IconBase64 = require("thread-l2-icon-base64") /*id: 322249*/;
  var codeCardFallbackLightPath = require("code-card-fallback-light-path") /*id: 983722*/;
  var codeCardFallbackDarkImage = require("code-card-fallback-dark-image") /*id: 891098*/;
  let I = {};
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let O = e => {
    let t = objectPathGetDefault.getObjectPathDefault(e, ["verbose", "deep_research", "deep_research_id"]);
    let n = objectPathGetDefault.getObjectPathDefault(e, ["ext", "deep_research_id"]);
    return t || n;
  };
  let D = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: chatConversationBotId.getConversationBotId(t == null ? undefined : t.conversation_id, true),
        message_id: t == null ? undefined : t.message_id,
        section_id: t == null ? undefined : t.section_id,
        card_type: "dr_web_card",
        deep_research_id: O(t)
      };
    };
    let i = function (e, t = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...n(),
          ...t
        });
      } catch {}
    };
    return useStableObjectHook.useStableObject({
      trackCardClick: function () {
        var r;
        let o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        i("click_card", {
          ...o
        });
        if ((t == null ? undefined : t.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask) {
          teaAnalyticsEventTracker.trackEvent("super_task_artifact_click", {
            super_task_id: t == null ? undefined : t.async_task?.id,
            super_task_mode: (t == null ? undefined : (r = t.verbose) === null || r === undefined ? undefined : r.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
            content_type: "code"
          });
        }
      },
      trackCardShow: function (e = {}) {
        i("show_card", {
          ...e
        });
      }
    });
  };
  var resourceArtifactFetcher = require("resource-artifact-fetcher") /*id: 454647*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let V = e => {
    let {
      contentBlock: W,
      shareMode: F,
      message: M,
      isShareOrCollectionMessage: A,
      onOpenCanvas: Z
    } = e;
    let B = i18nTranslationUtils.useTranslationWithFallback();
    let {
      id: O,
      content_obj: V
    } = W ?? {};
    let {
      conversation_id: H = "",
      message_id: X = ""
    } = M ?? {};
    let {
      openCodeContent: J
    } = chatCanvasContentOpener.useContentOpener();
    let {
      title: U,
      status: K,
      artifact: q,
      resource_id: Q,
      create_timestamp: G
    } = V ?? {};
    let {
      identifier: Y,
      artifact_key: ee,
      share_id: et,
      resource_id: en,
      version: ei,
      resource_version: el
    } = (q == null ? undefined : q[0]) ?? {};
    let [er, eo] = reactCoreLibraryReexport.useState(false);
    let [ea, es] = reactCoreLibraryReexport.useState();
    let [ec, ed] = reactCoreLibraryReexport.useState();
    let eu = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.canvasContent, deepEqualityUtil.deepEqual);
    let ep = reactCoreLibraryReexport.useMemo(() => (eu == null ? undefined : eu.artifactKey) === ee && (eu == null ? undefined : eu.version) === ei, [eu, ee, ei]);
    let {
      ref: em,
      inView: ev
    } = reactIntersectionObserver.useInView({
      initialInView: false,
      triggerOnce: true
    });
    let {
      trackCardClick: ef,
      trackCardShow: eh
    } = D({
      message: M
    });
    let eg = K === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let e_ = K === skillMessageLifecycleTypes.taskStatus.CANCEL;
    let eb = K === skillMessageLifecycleTypes.taskStatus.FAIL;
    let ek = messageContentTypeAndStatusChecker.F3w(M);
    let ey = !H && ek;
    let ex = q && Array.isArray(q);
    let ew = reactCoreLibraryReexport.useMemo(() => {
      if (ex) {
        var t;
        return codeRunPreviewConfig.previewLanguages.includes((q == null ? undefined : (t = q.find(e => e == null ? undefined : e.code)) === null || t === undefined ? undefined : t.code?.language) ?? "");
      }
      return true;
    }, [q, ex]);
    let eS = (ey || A || F) && !ew;
    let eR = F && (q && !ex || !Q || ea === "");
    let e$ = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let eC = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    }) ? "dark" : "light";
    let eT = functionInvoker.invoke(() => eC === "light" ? eg ? pngImageDataModule : codeCardFallbackLightPath : eg ? threadL2IconBase64 : codeCardFallbackDarkImage);
    let {
      cardStatus: ej,
      subTitle: eN
    } = functionInvoker.invoke(() => eg ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Generating,
      subTitle: B("web_deepResearch_webpage_generating")
    } : e_ ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Cancel,
      subTitle: B("web_deepResearch_webpage_generateStop")
    } : eb ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Error,
      subTitle: B("web_deepResearch_webpage_generateFail")
    } : {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Finished,
      subTitle: G ? `${B("canvas_created_time")}${dateFormatUtils_1.formatRelativeDate(Number(G) * 1000)}` : ""
    });
    let eE = reactCoreLibraryReexport.useRef();
    let eP = skillPinModalCallback.useSkillPinCallback(async () => {
      if (ey || A || F) {
        if (ea === undefined && ec === undefined) {
          if (en && ei) {
            var e;
            var n;
            let l = await resourceArtifactFetcher.getCodeArtifact(en, el);
            eE.current = l == null ? undefined : l.nodes;
            let r = threadFileResponseUtils.resolveEntryPath(l == null ? undefined : (e = l.nodes) === null || e === undefined ? undefined : e.map(e => throttledPathFilterStringify.throttledPathStr(e, ["path", "is_entry", "isEntry"])), ee);
            if (r) {
              ed(r ?? "");
              es("");
            } else {
              es((l == null ? undefined : (n = l.nodes) === null || n === undefined ? undefined : n[0]?.content) ?? "");
              ed("");
            }
          } else if (Q) {
            es(await resourceArtifactFetcher.getDeepResearchText(Q));
          }
        }
        eo(true);
        return;
      }
      if (!H || !X || eb) {
        return;
      }
      ef({
        click_effect: "fold",
        dr_process_detail: U
      });
      if (Q) {
        let e = await resourceArtifactFetcher.getDeepResearchText(Q);
        if (!e) {
          samanthaToastFactory.toastInstance.error(B("web_ai_coding_canvas_getcode_fail_tips"));
          return;
        }
        J(e, "html", {
          messageId: X,
          conversationId: H,
          autoRun: true,
          autoQuote: false
        });
        return;
      }
      if (!q) {
        return;
      }
      let l = [];
      for (let e in q) {
        if (Object.hasOwn(q, e)) {
          let t = artifactMetaUtils.mapArtifactMeta(q[e], {
            isFinished: true
          });
          l.push(t);
        }
      }
      let r = l == null ? undefined : l[0];
      if (eg && l.length > 0) {
        l[0].isStreaming = true;
      }
      if (l.length > 1) {
        r = l[1];
      }
      if (Z) {
        Z({
          artifactId: Y,
          artifactKey: ee,
          resourceId: r == null ? undefined : r.resourceId,
          resourceType: r == null ? undefined : r.resourceType,
          status: r == null ? undefined : r.status,
          version: ei,
          artifactMeta: r,
          artifactMetaList: l
        });
        return;
      }
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
        conversationId: H,
        messageId: X,
        artifactId: Y,
        artifactKey: ee,
        blockId: O,
        defaultArtifacts: undefined,
        isCodeFile: true,
        canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
        fileKey: "",
        attachments: [],
        chatId: H,
        autoQuote: false,
        version: ei,
        isAutoOpen: true,
        showShareEntry: true,
        blockType: "research-web-page",
        artifactMetaList: l,
        artifactMeta: r
      }, undefined, false));
    });
    let eI = reactCoreLibraryReexport.useCallback(e => {
      if (ee && e) {
        return threadFileResponseUtils.handleFileRetrieval(e, ee, eE.current);
      }
    }, [ee]);
    reactCoreLibraryReexport.useEffect(() => {
      if (ev) {
        eh({
          status: "fold",
          dr_process_detail: U
        });
      }
    }, [ev, U]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(codeProductCardTooltipWrapper.CodeProductCardTooltipWrapper, {
        ref: em,
        tooltipContent: eS ? B("ai_coding_webview_artifacts_share_preview_disable") : eR ? B("cici_web_ai_coding_share_code_file_warning") : "",
        dataTestId: "code-block-card",
        children: reactJsxRuntimeCoreReexport.jsx(threadFileCard.ThreadFileCard, {
          cardTitle: U,
          subTitle: eN,
          checked: ep,
          disabled: eR || eS,
          status: ej,
          showCardImage: !e$,
          fallBackCardImage: eT,
          cardIcon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {
            className: "text-s-color-accents-purple"
          }),
          latestCardVersion: true,
          onClick: I.onClickCard ?? eP
        })
      }), reactJsxRuntimeCoreReexport.jsx(shareHtmlArtifactModal.HtmlArtifactModal, {
        visible: er,
        uniqueId: et || "mockUniqueId",
        artifactsHTMLData: ea,
        artifactsHTMLPath: ec,
        onRequestResource: eI,
        onClose: () => eo(false)
      })]
    });
  };
  require.d(exports, {
    ThreadArtifactCard: function () {
      return V;
    }
  });
}