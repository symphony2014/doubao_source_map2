// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'DeepResearchReportCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 1428
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var asyncSkillChatConstants = require("async-skill-chat-constants") /*id: 699048*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatArtifactRetrievalUtils = require("chat-artifact-retrieval-utils") /*id: 522271*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var canvasDocModalWrapper = require("canvas-doc-modal-wrapper") /*id: 867596*/;
  var useCanvasAutoOpenHook = require("use-canvas-auto-open-hook") /*id: 909264*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var chatCanvasArtifactUtils = require("chat-canvas-artifact-utils") /*id: 90901*/;
  var artifactFieldConsts = require("artifact-field-consts") /*id: 26997*/;
  let N = e => {
    let {
      messageId: t,
      overrideResourceType: n,
      overrideResourceId: i,
      key: l
    } = e;
    let r = `${artifactFieldConsts.emptyArtifactField}_${l}`;
    return {
      type: artifactResourceLayout.ArtifactResource.Pages,
      artifactId: r,
      artifactKey: r,
      autoRefresh: true,
      overrideArtifacts: [{
        resource_type: 2,
        artifact_id: r,
        artifact_key: r
      }],
      newContentMode: false,
      overrideResourceType: n,
      overrideResourceId: i,
      overrideActiveTarget: {
        messageId: t,
        artifactKey: r
      }
    };
  };
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var revisionStatusConstants = require("revision-status-constants") /*id: 945169*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let W = async e => {
    let {
      docId: t
    } = e;
    if (!t) {
      return "";
    }
    try {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
        resource_id: t
      });
      let {
        blocks: n = []
      } = e ?? {};
      let i = chatMessageBlockUtils.renderBlockContent(n);
      return i ?? "";
    } catch (e) {
      return "";
    }
  };
  let F = async e => {
    let {
      researchBlock: n
    } = e;
    let {
      title: i,
      resource_id: l
    } = n ?? {};
    return {
      title: i,
      value: (await W({
        docId: l
      })) ?? {},
      version: revisionStatusConstants.defaultState,
      updateTime: undefined
    };
  };
  var flowDocArtifactCard = require("flow-doc-artifact-card") /*id: 478679*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let L = e => {
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
        card_type: "dr_report_card",
        deep_research_id: chatMessageBlockUtils.getDeepResearchId(t)
      };
    };
    let i = function (e, t = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...n(),
          ...t
        });
      } catch (e) {}
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
            content_type: "ai_doc"
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
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let V = e => {
    let {
      text: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: "text-eDolIH",
      children: t
    });
  };
  let H = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: E,
      artifactId: P = "",
      artifactKey: I,
      blockId: W,
      researchBlock: A,
      shareMode: Z = false,
      autoOpenCanvas: B = true
    } = e;
    let O = i18nTranslationUtils.useTranslationWithFallback();
    let [D, H] = reactCoreLibraryReexport.useState(false);
    let {
      conversation_id: X = "",
      message_id: J = ""
    } = E ?? {};
    let {
      title: U,
      report_prefix_desc: K,
      report_suffix_desc: q,
      artifact: Q,
      resource_id: G = "",
      status: Y,
      create_timestamp: ee
    } = A ?? {};
    let et = Y !== skillMessageLifecycleTypes.taskStatus.FAIL;
    let en = E.async_task?.status !== protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing;
    let ei = !Q;
    let el = messageContentTypeAndStatusChecker.F3w(E);
    let er = Y !== skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let eo = messageContentTypeAndStatusChecker.FFC(E);
    let ea = Y === skillMessageLifecycleTypes.taskStatus.CANCEL;
    let es = useLatestRef_1.useLatestRef(B);
    chatArtifactRetrievalUtils.getMessageArtifact({
      messageId: J
    });
    let {
      trackCardShow: ec,
      trackCardClick: ed
    } = L({
      message: E
    });
    let {
      ref: eu,
      inView: ep
    } = reactIntersectionObserver_1.useInView({
      initialInView: false,
      triggerOnce: true
    });
    let em = reactUseRefValue.useRefValue(ep);
    let {
      actifactId: ev = "",
      actifactKey: ef
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        artifact_id: e = "",
        artifact_key: t
      } = Q ?? {};
      return {
        actifactId: e || P,
        actifactKey: t || I
      };
    }, [E, W, A]);
    let eh = !er;
    let {
      updateBlockArtifactIdToConvId: eg
    } = writingSkillStore.writingSkillStore.getState();
    let e_ = writingSkillStore.writingSkillStore(e => {
      var n;
      return ((n = e.artifactMap) === null || n === undefined ? undefined : n[X]?.[ev]) ?? [];
    }, deepEqualityUtil_1.isDeepEqual);
    let eb = reactCoreLibraryReexport.useMemo(() => {
      if (!ef || el) {
        return chatCanvasArtifactUtils.getArtifactContent(E);
      }
      let e = chatSkillPluginRegistry.skillBarPluginConfig({
        conversationId: X,
        artifacts: e_,
        artifactKey: ef
      });
      if (e) {
        return e_.find(t => t.artifact_key === e.artifactKey);
      }
    }, [E, e_]);
    let ek = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    }, deepEqualityUtil_1.isDeepEqual);
    let ey = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      var n;
      let {
        isExpand: s,
        canvasContent: c = {}
      } = e;
      let {
        artifactKey: u
      } = c;
      let p = c.artifacts ?? ((n = writingSkillStore.writingSkillStore.getState().artifactMap) === null || n === undefined ? undefined : n[X]?.[ev]) ?? [];
      return !!p && !!u && !!isStringTypeCheck.isString(u) && s && chatSkillPluginRegistry.skillBarPluginConfig({
        conversationId: X,
        artifacts: p,
        artifactKey: u
      })?.messageId === J;
    });
    let ex = chatMessageStoreFactory.createMessageStore(() => chatSkillPluginRegistry.inputEventsPlugin(X, J, ev));
    let ew = messageContentTypeAndStatusChecker.fjb(E);
    let eS = messageContentTypeAndStatusChecker.nmA(E);
    let eR = !ek;
    let e$ = reactUseRefValue.useRefValue(eR);
    let {
      cardStatus: eC,
      subTitle: eT
    } = functionInvoker.invoke(() => eh ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Generating,
      subTitle: O("web_deepResearch_status_reportGenerating")
    } : ea ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Cancel,
      subTitle: O("web_deepResearch_status_reportStopped")
    } : eo ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Error,
      subTitle: O("web_deepResearch_status_reportFail")
    } : {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Finished,
      subTitle: ee ? `${O("canvas_created_time")}${dateFormatUtils_1.formatRelativeDate(Number(ee) * 1000)}` : ""
    });
    let {
      overrideResourceType: ej,
      overrideResourceId: eN
    } = functionInvoker.invoke(() => ({
      overrideResourceType: ei || Z ? artifactResourceLayout.layoutConstants.MobileDoc : undefined,
      overrideResourceId: G
    }));
    let eE = functionInvoker.invoke(() => ev || ef ? {
      type: artifactResourceLayout.ArtifactResource.Pages,
      artifactId: ev,
      artifactKey: ef,
      autoRefresh: true,
      newContentMode: false
    } : N({
      key: W,
      messageId: J,
      overrideResourceType: ej,
      overrideResourceId: eN
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (ep) {
        ec({
          status: "fold",
          dr_process_detail: U
        });
        if (ei) {
          writingSkillStore.writingSkillStore.getState().loadMobileArtifactList({
            blockId: W,
            resourceId: G
          });
        }
        eg({
          blockId: W,
          convId: X,
          status: en
        });
      }
    }, [ep, U]);
    reactCoreLibraryReexport.useEffect(() => {
      if (es.current) {
        if (er && ek && chatSkillPluginRegistry.chatGuidanceCardPlugin({
          conversationId: X,
          artifactKey: ef
        })) {
          eI();
          return;
        }
        if (!er && eb) {
          eP(true);
        }
        if (er) {
          writingSkillStore.writingSkillStore.getState().updateBlockArtifact({
            type: asyncSkillChatConstants.fieldNames.Status,
            blockId: W,
            value: asyncSkillChatConstants.skillStatus.Succeed
          });
        }
      }
    }, [er, !!eb]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!el && em && e$ && X) {
        writingSkillStore.writingSkillStore.getState().fetchArtifactList({
          conversationId: X,
          artifactId: ev
        });
      }
    }, [el, em, e$, X, ev]);
    let eP = skillPinModalCallback.useSkillPinCallback(e => {
      if (Z) {
        H(true);
        return;
      }
      if (!!X && !!J && !chatCanvasArtifactUtils.checkCanvasDocCard({
        conversationId: X,
        messageId: J
      })) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => t == null ? undefined : t.openCanvasPanel({
          exactPluginIdentifier: writeArtifactPreviewId.artifactPreviewId,
          ...eE,
          isAutoOpen: e,
          conversationId: X,
          messageId: J,
          changeInputSkillToDoc: !ew && !eS
        }, undefined, false));
      }
    });
    let eI = skillPinModalCallback.useSkillPinCallback(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
        exactPluginIdentifier: writeArtifactPreviewId.artifactPreviewId,
        ...eE,
        conversationId: X,
        messageId: J
      }, undefined, false));
    });
    useCanvasAutoOpenHook.useCanvasAutoOpen({
      messageId: J,
      onMatch: eP
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [K && reactJsxRuntimeCoreReexport.jsx(V, {
        text: K
      }), et && reactJsxRuntimeCoreReexport.jsx(flowDocArtifactCard.DocArtifactCard, {
        ref: eu,
        shareMode: Z,
        showCardImage: eR,
        cardTitle: U,
        checked: ey,
        disabled: eo,
        status: eC,
        latestCardVersion: ex || ew,
        subTitle: eT,
        onClick: () => {
          eP();
          ed({
            click_effect: "fold",
            dr_process_detail: U
          });
        },
        conversationId: X,
        artifactItem: eb,
        isFinished: er,
        overrideResourceId: eN,
        overrideResourceType: ej,
        message: E
      }), q && reactJsxRuntimeCoreReexport.jsx(V, {
        text: q
      }), Z && reactJsxRuntimeCoreReexport.jsx(canvasDocModalWrapper.CanvasDocModalWrapper, {
        visible: D,
        docId: (eE == null ? undefined : eE.artifactId) ?? "",
        title: (eb == null ? undefined : eb.title) ?? U,
        showTitle: false,
        onFetchDoc: () => F({
          researchBlock: A
        }),
        onClose: () => H(false)
      })]
    });
  });
  require.d(exports, {
    DeepResearchReportCard: function () {
      return H;
    }
  });
}