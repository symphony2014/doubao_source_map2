// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cR' to 'WritingGenerateArticleButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 973466
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var skillBarActionButton = require("skill-bar-action-button") /*id: 956345*/;
  var aiChatSkillInputUtils = require("ai-chat-skill-input-utils") /*id: 862269*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var asyncBusinessLayout_2 = require("async-business-layout_2") /*id: 878823*/;
  var skillActionStatusEnums = require("skill-action-status-enums") /*id: 313178*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  let T = e => {
    let {
      outlineId: t
    } = e;
    let {
      data: n,
      run: r
    } = useRequestHook.useRequest(async () => {
      try {
        return (await asyncRetryUtils.pollUntilSuccess({
          value: () => apiServicesCollection.SamanthaApiService.GetOutlineMeta({
            outline_id: t
          }),
          ifRetry: e => {
            var n;
            var r;
            return !(e == null ? undefined : (n = e.data) === null || n === undefined ? undefined : n.content?.reference_status) || (e == null ? undefined : (r = e.data) === null || r === undefined ? undefined : r.content?.reference_status) === skillActionStatusEnums.SearchStatus.WaitingForSearch;
          },
          interval: 2000
        })).data;
      } catch (e) {
        return null;
      }
    }, {
      manual: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        r();
      }
    }, [t]);
    return functionInvoker.invoke(() => {
      var e;
      var t;
      return !!n && ((t = n.content) === null || t === undefined || (e = t.sub_paragraph_content) === null || e === undefined || !e.length || !n.content.sub_paragraph_content.some(e => e.reference_status === skillActionStatusEnums.SearchStatus.WaitingForSearch));
    });
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = e => {
    let {
      messageId: n,
      floating: k = false,
      ...x
    } = e;
    let E = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: S
    } = chatServiceContext.useChatService("chatMessageService");
    let C = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let R = reactCoreLibraryReexport.useRef();
    let j = chatMessageStoreFactory.createMessageStore(e => {
      if (!C) {
        return;
      }
      let t = conversationMessageUtils_1.getMessageById(e, C, n);
      if (messageContentTypeAndStatusChecker.fdv(t)) {
        return t;
      } else {
        return undefined;
      }
    });
    let N = j == null ? undefined : j.content_obj?.outline_id;
    let O = T({
      outlineId: N
    });
    reactCoreLibraryReexport.useEffect(() => {
      M();
    }, [C]);
    let M = () => {
      var e;
      if ((e = R.current) !== null && e !== undefined) {
        e.call(R);
      }
      R.current = undefined;
    };
    let {
      run: P
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      if (!C) {
        return;
      }
      let e = {
        skill_id: String(chatAppEnums.SkillType.WriteAssistant),
        skill_type: chatAppEnums.SkillType.WriteAssistant,
        variables: {
          action: "gen_doc",
          message_id: n,
          outline_id: N
        }
      };
      let t = aiChatSkillInputUtils.getReplyChatGenre(C, n);
      teaAnalyticsEventTracker.trackEvent("writing_outline_button_click", {
        button_name: "writing_eaasy",
        writing_genre: t
      });
      S([{
        text: E("professional_writing_generate_article_button_title"),
        reportParams: {
          scene: skillConstantsEnum.SceneType.PROFESSIONAL_WRITING
        },
        extraExt: {
          answer_with_suggest: "0",
          send_from_skill_guidance_or_suggestion: "1",
          input_skill: safeJsonUtils.safeStringify(e)
        }
      }]);
      let {
        messageLinkMap: i
      } = chatMessageStoreFactory.createMessageStore.getState();
      let o = lastElementHelper.getLastElement(i[C]);
      R.current = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        var b;
        let x;
        let E = lastElementHelper.getLastElement(e.messageLinkMap[C]);
        if (!E || E.messageId === (o == null ? undefined : o.messageId)) {
          return;
        }
        let S = conversationMessageUtils_1.getMessageFromLink(e, C, E);
        let T = messageContentTypeAndStatusChecker.e0X(S);
        let I = messageContentTypeAndStatusChecker.zwb(S) || T;
        if (messageContentTypeAndStatusChecker.Yns(S) || !I) {
          return;
        }
        let R = null;
        x = messageContentTypeAndStatusChecker.BUc(S) && S.content_blocks?.length ? (R = S.content_blocks[0].content_obj).resource_id : (R = S.content_obj ?? {}).pages_id ?? (R == null ? undefined : R.read_doc_input?.pages_id);
        let N = (j == null ? undefined : j.content_obj?.samantha_code) ?? (j == null ? undefined : j.ext?.samantha_code);
        let O = (R == null ? undefined : R.async_generate) ?? (j == null ? undefined : j.ext?.async_generate);
        if (!N && !O && x) {
          let e = ((b = chatStoreManager.getStoreState("chatViewCoreStore")) === null || b === undefined ? undefined : b.currentChatViewConfig?.chatId) ?? "";
          let t = T ? chatMessageBlockUtils.getArtifactBlock(S)?.resource_type : asyncBusinessLayout_2.ResourceType.StepWritingPages;
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(n => {
            if (n == null) {
              return undefined;
            } else {
              return n.openCanvasPanel({
                exactPluginIdentifier: writeArtifactPreviewId.artifactPreviewId,
                type: t,
                conversationId: e,
                messageId: S.message_id ?? "",
                artifactId: x,
                artifactKey: x,
                autoRefresh: false
              }, undefined, false);
            }
          });
        }
        M();
      });
    }, {
      leading: true,
      wait: 1000
    });
    if (O) {
      if (k) {
        return reactJsxRuntimeCoreReexport.jsx(skillBarActionButton.SkillBarAction, {
          ...x,
          onClick: P,
          isShow: !!N,
          "data-testid": "writing_gen_doc_button",
          size: "large",
          children: E("professional_writing_generate_article_button_title")
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(skillBarActionButton.SkillBarButton, {
          ...x,
          onClick: P,
          children: E("professional_writing_generate_article_button_title")
        });
      }
    } else {
      return null;
    }
  };
  require.d(exports, {
    WritingGenerateArticleButton: function () {
      return R;
    }
  });
}