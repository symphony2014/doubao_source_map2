// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useChatSkillMessageSend'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 216848
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let u = e => {
    let t = (e == null ? undefined : e.refContents) ? messageBoxTypeCheckers.filterEnabledRefs(e == null ? undefined : e.refContents) : e == null ? undefined : e.refContents;
    let n = t == null ? undefined : t[0];
    if (e && n) {
      return {
        is_quote: 1,
        quote_type: n.type === "attachment" ? "file" : "url",
        collection_id: n.type === "attachment" ? n.fileKey : n.type === "link" ? n.link : undefined,
        collection_name: n.type === "attachment" ? n.fileName : n.type === "link" ? n.fileName : undefined,
        scene: e.scene || "chat_action_bar",
        ...e.reportParams
      };
    } else {
      return {
        is_quote: 0,
        quote_type: undefined,
        collection_id: undefined,
        collection_name: undefined
      };
    }
  };
  let p = e => {
    let {
      text: t,
      presetPrompt: n,
      refContentState: i
    } = e;
    let a = chatAppEnums.SkillType.ReadPDF;
    let r = n && (chatInputAiFeatureConstants.featureActionNameMap[n] || t);
    return {
      from: "",
      sec_scene: skillTypeMappings.getSkillActionClass(a),
      scene: "chat_action_bar",
      upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
      preset_prompt_type: r,
      ...u(i)
    };
  };
  var chatInputActionUtils = require("chat-input-action-utils") /*id: 678030*/;
  var chatSkillMessageSenderHook = require("chat-skill-message-sender-hook") /*id: 832138*/;
  var chatAttachmentOpenHandler = require("chat-attachment-open-handler") /*id: 354799*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var attachmentUploadMetadataExtractor = require("attachment-upload-metadata-extractor") /*id: 826432*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let $ = () => {
    let t = document?.activeElement;
    if (t && "blur" in t && isFunctionUtil_1.isFunction(t.blur)) {
      t.blur();
    }
  };
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  let S = () => fileTypeDetectionUtils.imageExtensions.filter(e => !fileTypeDetectionUtils.isCsvFile(e) && !fileTypeDetectionUtils.isSpreadsheetFile(e));
  let N = e => {
    var t;
    let {
      disabled: n,
      value: o,
      skill: l,
      clearAttachments: s,
      getPreGeneratedLocalMessageId: d,
      updatePreGeneratedLocalMessageId: c,
      attachmentStates: u,
      attachments: x,
      attachmentKeys: T,
      attachmentCanSend: N,
      onBeforeSendMessage: j,
      onAfterSendMessage: P,
      onAfterSubmit: I,
      trackParams: F,
      reportParams: D,
      scene: Z
    } = e;
    let O = ((t = l.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let M = l.skill_type || 0;
    let {
      sendMessage: W
    } = chatSkillMessageSenderHook.useChatSkillMessageSender();
    let {
      chatId: A,
      chatType: B
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId || "",
        chatType: e.currentChatViewConfig?.chatType
      };
    });
    let U = B === chatConversationTypes.ConversationTypes.NewThread;
    let {
      enableImageVlm: z
    } = attachmentUploadStoreHooks.getUploadConfig();
    let {
      openReadCanvas: L
    } = chatAttachmentOpenHandler.chatAttachmentOpener({
      attachmentStates: u
    });
    let G = chatRefContentSelectors.useRefContent(A || "");
    let X = (G == null ? undefined : G.channel) === `skill_${O}` ? G : undefined;
    let V = (X == null ? undefined : X.refContents) || [];
    let H = !isEmptyUtil.isEmpty(u) && N;
    let J = !!o && (!isEmptyUtil.isEmpty(V) || !U);
    let K = n || !H && !J;
    let q = () => {
      if (userAgentDeviceDetector.isMobileOrIOS()) {
        $();
      }
    };
    let Y = async () => {
      if (I != null) {
        I();
      }
      await (c == null ? undefined : c());
      await (s == null ? undefined : s({}));
      await (c == null ? undefined : c());
      skillEditorStateStores.skillEditorStore.getState().updateLinkEditorValue("");
      skillEditorStateStores.skillEditorStore.getState().updatePromptEditorValue("");
      let e = attachmentUploadMetadataExtractor.extractUploadMetadata({
        attachmentStates: u
      });
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...F,
        ...e,
        upload_token_length: ""
      });
    };
    let Q = reactCoreLibraryReexport.useMemo(() => ({
      is_long_file: 0,
      ...D
    }), [D]);
    let ee = async (e, t, n) => {
      q();
      if ((await (j == null ? undefined : j())) === false) {
        return;
      }
      let i = await d();
      await W({
        chatId: A,
        preGeneratedLocalMessageId: i,
        reportParams: {
          ...p({
            text: e,
            presetPrompt: n
          }),
          ...Q
        },
        text: e,
        presetPrompt: n,
        skillParamObj: chatInputActionUtils.getChatInputAction({
          presetPrompt: n
        }),
        attachments: t,
        attachmentKeys: T,
        attachmentStates: u,
        enableImageVlm: z
      });
      await L({
        skillType: M,
        openFrom: Z ? `send_message_in_${Z}` : "send_message"
      });
      en();
      Y();
      if (P != null) {
        P({
          exitSkill: true
        });
      }
    };
    let et = async e => {
      q();
      if ((await (j == null ? undefined : j())) === false) {
        return;
      }
      let t = await d();
      await W({
        chatId: A,
        preGeneratedLocalMessageId: t,
        reportParams: {
          ...p({}),
          ...Q
        },
        attachments: e,
        attachmentKeys: T,
        attachmentStates: u,
        enableImageVlm: z
      });
      await L({
        skillType: M
      });
      Y();
      if (P != null) {
        P({
          exitSkill: true
        });
      }
    };
    let en = reactCoreLibraryReexport.useCallback(() => {
      skillEditorStateStores.skillEditorStore.getState().updateGuidanceEditorValue({
        data: []
      });
    }, []);
    let ei = async (e, t) => {
      q();
      if ((await (j == null ? undefined : j())) === false) {
        return;
      }
      let n = X == null ? undefined : X.inputSkill;
      let i = n ? throttledOmitPathStringify.omitPathStringify(JSON.parse(n), ["skill_id", "skill_type"]) : undefined;
      let a = V.filter(e => e.type === "link" ? urlExtensionDetectionUtils.isImageOrArxivUrl(e.link) : e.type === "attachment" && S().includes(getFileExtension.getFileExtension(e.fileName || "")));
      let o = await d();
      await W({
        chatId: A,
        preGeneratedLocalMessageId: o,
        reportParams: {
          ...p({
            text: e,
            presetPrompt: t,
            refContentState: X
          }),
          ...Q
        },
        inputSkillObj: i,
        extraExt: {
          ...(a.length ? {
            immersive_reading_files: JSON.stringify(a.map(e => e.type === "link" ? e.link : e.fileKey))
          } : undefined)
        },
        skillParamObj: chatInputActionUtils.getChatInputAction({
          presetPrompt: t,
          templateKey: (i == null ? undefined : i.template_key) === "query_with_reference" ? "query_with_reference" : undefined,
          immersiveFiles: a.map(e => e.type === "link" ? {
            url: e.link
          } : {
            uri: e.fileKey,
            name: e.fileName
          })
        }),
        text: e,
        presetPrompt: t,
        refContents: V
      });
      en();
      Y();
      if (P != null) {
        P({
          exitSkill: true
        });
      }
    };
    return {
      trySubmit: (e, t) => {
        if (!K) {
          if (H) {
            if (e) {
              ee(e, x, t);
            } else {
              et(x);
            }
          } else if (J) {
            ei(e, t);
          }
        }
      },
      disableToSend: K
    };
  };
  require.d(exports, {
    useChatSkillMessageSend: function () {
      return N;
    }
  });
}