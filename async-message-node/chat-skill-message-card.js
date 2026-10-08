// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'SkillMessageCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 351565
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var aiChatSkillInputUtils = require("ai-chat-skill-input-utils") /*id: 862269*/;
  var messageContentExtractors = require("message-content-extractors") /*id: 356469*/;
  var chatArtifactRetrievalUtils = require("chat-artifact-retrieval-utils") /*id: 522271*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var flowDocArtifactCard = require("flow-doc-artifact-card") /*id: 478679*/;
  var asyncBusinessLayout_2 = require("async-business-layout_2") /*id: 878823*/;
  var chatMessageCheckUtil = require("chat-message-check-util") /*id: 375719*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let T = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: chatAppEnums.SkillType.WriteAssistant,
        skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant),
        conversation_id: t == null ? undefined : t.conversation_id,
        message_id: t == null ? undefined : t.message_id,
        bot_id: t == null ? undefined : t.bot_id,
        section_id: t == null ? undefined : t.section_id,
        is_10k_word_writing: (t == null ? undefined : t.content_obj?.async_generate) || (t == null ? undefined : t.ext?.async_generate) ? 1 : 0,
        is_by_step_writing: "1",
        writing_genre: aiChatSkillInputUtils.getChatMessageId((t == null ? undefined : t.conversation_id) ?? "", (t == null ? undefined : t.message_id) ?? "")
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
      trackCardClick: () => {
        i("preview_card_click");
      },
      trackCardShow: () => {
        i("preview_card_show");
      }
    });
  };
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  let P = e => {
    let {
      docId: t,
      autoRefreshWhen: n,
      enable: i = true
    } = e;
    let {
      data: o,
      run: a,
      cancel: l
    } = useRequestHook.useRequest(async () => {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.GetPages({
        pages_id: t
      });
      if (!e || !n || !n(e)) {
        setTimeout(() => l == null ? undefined : l());
      }
      return e;
    }, {
      manual: true,
      pollingInterval: 5000,
      pollingWhenHidden: false
    });
    let s = reactUseRefValue.useRefValue(i);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        a();
      }
    }, [s]);
    return o;
  };
  var I = {
    "doc-prefix": "doc-prefix-z8brWr",
    "error-text": "error-text-pqXT60"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let M = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: a,
      className: C,
      style: E,
      onCollapse: R,
      showSimplifyCard: j,
      onOpenDoc: N
    } = e;
    let M = i18nTranslationUtils.useTranslationWithFallback();
    let {
      message_id: A,
      conversation_id: F
    } = a ?? {};
    let {
      docId: O,
      title: W,
      leadingText: Z,
      summary: D
    } = messageContentExtractors.extractMessageSearchResults(a);
    chatArtifactRetrievalUtils.getMessageArtifact({
      messageId: A
    });
    let L = chatMessageCheckUtil.checkChatMessage({
      conversationId: F,
      messageId: A
    });
    let {
      trackCardShow: B,
      trackCardClick: H
    } = T({
      message: a
    });
    let {
      ref: V,
      inView: z
    } = reactIntersectionObserver_1.useInView({
      onChange: e => {
        if (e && e) {
          B();
        }
      }
    });
    let U = reactUseRefValue.useRefValue(z);
    let X = e => !isUndefinedCheck.isUndefined(e) && e !== chatAppEnums.PagesStatus.Generating;
    let G = P({
      docId: O,
      enable: !L && U,
      autoRefreshWhen: e => !X(e == null ? undefined : e.status)
    });
    let {
      update_time: J,
      status: Q
    } = G ?? {};
    let q = Q === chatAppEnums.PagesStatus.Generating;
    let K = !!((a == null ? undefined : a.content_obj?.samantha_code) ?? (a == null ? undefined : a.ext?.samantha_code));
    let {
      cardStatus: Y,
      subTitle: ee
    } = functionInvoker.invoke(() => q ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Generating,
      subTitle: M("web_deepResearch_status_reportGenerating")
    } : K ? {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Error,
      subTitle: M("web_deepResearch_status_reportFail")
    } : {
      cardStatus: threadFileStatusEnum.ThreadFileStatus.Finished,
      subTitle: !q && J ? `${M("canvas_created_time")}${dateFormatUtils_1.formatRelativeDate(Number(J) * 1000)}` : ""
    });
    let et = functionInvoker.invoke(() => {
      if (K) {
        return infraUtilFunctions.ensureString((a == null ? undefined : a.brief) ?? (a == null ? undefined : a.ext?.brief) ?? (a == null ? undefined : a.content_obj?.brief)) ?? W;
      }
      return W;
    });
    let en = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t,
        canvasContent: n = {}
      } = e;
      let {
        artifactKey: i
      } = n;
      return t && !!O && i === O;
    });
    let ei = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return !t;
    });
    let er = async () => {
      (await chatMessageRetryHandler.retryReceiveMessage({
        message: a
      }))();
    };
    let eo = () => {
      if (!F || !A || !O) {
        return;
      }
      let e = aiChatSkillInputUtils.getChatMessageId(F, A);
      let t = {
        docId: O,
        type: asyncBusinessLayout_2.ResourceType.StepWritingPages,
        messageId: A,
        conversationId: F,
        title: W,
        genre: e,
        summary: D
      };
      if (N) {
        N(t);
        return;
      }
      if (O) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
          exactPluginIdentifier: writeArtifactPreviewId.artifactPreviewId,
          type: asyncBusinessLayout_2.ResourceType.StepWritingPages,
          artifactId: O ?? "",
          artifactKey: O ?? "",
          autoRefresh: false,
          newContentMode: false,
          conversationId: F,
          messageId: A
        }, undefined, false));
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [Z && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(I["doc-prefix"]),
        children: Z
      }), reactJsxRuntimeCoreReexport.jsx(flowDocArtifactCard.DocArtifactCard, {
        ref: V,
        className: C,
        style: E,
        shareMode: false,
        showCardImage: ei && !j,
        cardTitle: et,
        checked: en,
        isError: K,
        status: Y,
        latestCardVersion: true,
        subTitle: ee,
        onClick: () => {
          if (R) {
            R();
            return;
          }
          H();
          eo();
        },
        onDisabledClick: er,
        conversationId: F ?? "",
        artifactItem: {
          artifact_key: O
        },
        isFinished: !q
      }), K && reactJsxRuntimeCoreReexport.jsx("div", {
        className: I["error-text"],
        children: M("skill_writing_docCard_status_generation_failed")
      })]
    });
  });
  require.d(exports, {
    SkillMessageCard: function () {
      return M;
    }
  });
}