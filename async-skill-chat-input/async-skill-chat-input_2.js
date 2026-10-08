// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useAsyncSkillChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 119342
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatLinkValidator = require("chat-link-validator") /*id: 392039*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var gitRepoUrlValidator = require("git-repo-url-validator") /*id: 904797*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let x = e => {
    let {
      chatId: t,
      chatType: n,
      activeSkill: x,
      enableAutoSelectCodeAfterSubmit: k = true,
      getPreGeneratedLocalMessageId: T,
      onAddGitHubUrl: P,
      skillSceneHook: C
    } = e;
    let O = useLatestCallbackHook_1.useLatestCallback(T);
    let N = useLatestCallbackHook_1.useLatestCallback(P);
    let I = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: t
    });
    let A = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: t
    });
    let R = chatInputToolSupport.isCodeSkillEnabled({
      chatId: t,
      chatType: n,
      skillType: x == null ? undefined : x.skill_type
    });
    let j = reactCoreLibraryReexport.useMemo(() => typeof (C == null ? undefined : C.onCodeSkillRelate) == "function" ? C.onCodeSkillRelate(I, R) : R, [I, R, C]);
    let M = chatLinkValidator.createLinkValidator();
    let L = !x || x.skill_type === chatAppEnums.SkillType.CodeAssistant;
    let D = async e => {
      var i;
      let {
        trimText: r,
        event: o
      } = e;
      if ((C == null ? undefined : (i = C.onPasteParse) === null || i === undefined ? undefined : i.call(C)) === false) {
        return;
      }
      let l = gitRepoUrlValidator.isGithubUrl(r);
      let u = {
        from: "click",
        conversationId: n === chatConversationTypes.ConversationTypes.NewThread ? "" : t,
        uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
        botId: chatConversationBotId.getConversationBotId(t) || "",
        conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), t) || 1,
        skill_name: null,
        skill_id: "",
        chat_type: (n === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", t)) || "other_default",
        upload_way: "add_link",
        upload_collection_way: "single",
        upload_type: "github",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
        upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_LINK,
        collection_name: "",
        collection_id: ""
      };
      if (gitRepoUrlValidator.isChineseGitUrl(r)) {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...u,
          success: "false",
          error_code: "unsupport_repotype"
        });
      }
      if (gitRepoUrlValidator.isGitSshUrl(r)) {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...u,
          success: "false",
          error_code: "unsupport_repourl"
        });
      }
      if (l && A.length === 0 && j) {
        let {
          valid: e,
          metaInfo: i
        } = await M(r, false);
        if (e) {
          o.preventDefault();
          if (N != null) {
            N({
              url: r,
              ctx: {
                from: "click",
                conversationId: n === chatConversationTypes.ConversationTypes.NewThread ? "" : t,
                chatType: (n === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", t)) || "other_default",
                skillType: 0,
                skillId: "",
                uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                botId: chatConversationBotId.getConversationBotId(t) || "",
                uploadWay: "add_link",
                uploadCollectionWay: "single",
                uploadId: (await (O == null ? undefined : O())) || "",
                metaInfo: JSON.stringify(i)
              }
            });
          }
        } else {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...u,
            meta_info: JSON.stringify(i),
            success: "false",
            error_code: "unsupport_repoprivate"
          });
        }
      }
    };
    return {
      shouldSendCodeSkillMessage: reactCoreLibraryReexport.useMemo(() => {
        let e = L && j;
        if (I.length === 1) {
          return !!messageBoxTypeCheckers.isFileType(I[0]) && !!codeAssistantFileValidator.isAssistantFile(A[0].fileName) && !!e || !!messageBoxTypeCheckers.isLinkType(I[0]) && !!A.length && !!A[0].isRepo && !!e || !!messageBoxTypeCheckers.isDirectoryType(I[0]);
        }
        return !!A.length && !!A.every(e => e.type === "file" && codeAssistantFileValidator.isAssistantFile(e.fileName)) && !!e;
      }, [L, j, I, A]),
      enableCodeSkillRelate: j,
      onAfterSubmit: () => {
        let e = false;
        let n = true;
        let i = "";
        if (I.length === 1) {
          let t = I[0];
          let r = A[0];
          i = (r == null ? undefined : r.fileKey) || "";
          n = (r == null ? undefined : r.reviewState) !== messagingConstants.reviewState.ReviewState_NotCompliant;
          if (messageBoxTypeCheckers.isFileType(t) && codeAssistantFileValidator.isAssistantFile(r == null ? undefined : r.fileName)) {
            e = true;
          }
          if (messageBoxTypeCheckers.isLinkType(t) && (r == null ? undefined : r.isRepo)) {
            e = true;
          }
          if (messageBoxTypeCheckers.isDirectoryType(t)) {
            e = true;
          }
        }
        if (I.length > 1) {
          e = A.every(e => e.type === "file" && codeAssistantFileValidator.isAssistantFile(e.fileName));
          n = A.every(e => e.type === "file" && e.reviewState !== messagingConstants.reviewState.ReviewState_NotCompliant);
          i = A[0]?.fileKey || "";
        }
        if (e && L && j && k) {
          let e = chatAppEnums.SkillType.CodeAssistant;
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t, e, chatStatusActionTypes.chatActionTypes.AfterSkill);
          if (n) {
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(n => n == null ? undefined : n.openCanvasPanel({
              messageId: "",
              conversationId: t,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              fileKey: i,
              attachments: A,
              isCodeFile: true,
              chatId: t,
              teaCtx: {
                skillType: e
              }
            }));
          }
        } else {
          chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(t);
        }
      },
      onPasteHandler: D
    };
  };
  require.d(exports, {
    useAsyncSkillChat: function () {
      return x;
    }
  });
}