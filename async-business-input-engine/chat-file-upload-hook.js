// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EQ' to 'useFileUploadHook'
// - Renamed export 'oo' to 'useFileExtensionCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 541666
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codingSkillChatUtils = require("coding-skill-chat-utils") /*id: 881555*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var imageCompressionUtils_1 = require("image-compression-utils_1") /*id: 532036*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let D = (e, t) => {
    let n = chatConversationSelectors.getBotConfig(e, t);
    let a = chatConversationSelectors.selectConvLink(e, t);
    let r = reactCoreLibraryReexport.useMemo(() => n == null ? undefined : n.some(e => e.conf_group_key === "disable_function" && e.conf_key === "disable_attachment_area" && e.conf_value === "1"), [n]);
    return !!a || !r;
  };
  let A = () => {
    let {
      chatId: e,
      chatType: t
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let n = chatConversationSelectors.selectConvLink(e ?? "", t);
    let r = chatStoreManager.useStoreSelector("chatInputStore", t => e ? t.activeSkillTypeMap[e] : undefined);
    let o = chatInputToolSupport.isCodeSkillEnabled({
      chatId: e,
      chatType: t,
      skillType: r
    });
    let {
      uploadFileAllowedTypes: s
    } = attachmentUploadStoreHooks.getUploadConfig();
    let d = supportedFileExtensionsUtility.getSupportedFileExtensions(o);
    return reactCoreLibraryReexport.useCallback(e => {
      let t = getFileExtension.getFileExtension(e.name);
      return (n ? d : s).includes(t);
    }, [n, s]);
  };
  let O = e => {
    let {
      beforeUpload: t
    } = e ?? {};
    let {
      chatId: n,
      chatType: i
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let l = chatConversationSelectors.selectConvLink(n ?? "", i);
    let {
      chatInputRef: u
    } = chatRefsContext.useChatRefs();
    let _ = () => {
      promiseDelayUtil.delayPromise(50).then(() => {
        var e;
        var t;
        if ((t = u.current) !== null && t !== undefined && (e = t.attachmentAreaScrollToBottom) !== null && e !== undefined) {
          e.call(t);
        }
      });
    };
    let L = chatStoreManager.useStoreSelector("chatInputStore", e => n ? e.activeSkillTypeMap[n] : undefined);
    let I = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: n ?? "",
      skillType: L
    });
    let {
      addAttachment: T,
      getPreGeneratedLocalMessageId: E
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: n ?? "",
      skillType: L
    });
    let C = chatGuidanceSelectors.hasActiveSkill();
    let k = C ? skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE : skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
    let D = C ? "pdf_read_detailpage_upload" : undefined;
    let A = chatInputToolSupport.isCodeSkillEnabled({
      chatId: n,
      chatType: i,
      skillType: L,
      exemptFromCodingReverse: true
    });
    let O = codingChatFileUpload.useFileUpload(A, true);
    let M = async (e, a) => {
      let l = chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || (await new Promise(e => {
        let t = chatFeedStoreFactory.useFeedStore.subscribe(chatConversationSelectors_2.getBotId, n => n && (e(n), t()));
      }));
      let o = {
        conversation_id: n,
        conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), n) || 1,
        chat_type: i,
        skill_name: L == null ? undefined : L.toString(),
        skill_id: L == null ? undefined : L.toString(),
        upload_id: await (E == null ? undefined : E()),
        duration: "0",
        upload_way: a.uploadWay,
        upload_collection_way: e.length + I.length > 1 ? "multi" : "single",
        collection_id: uuidV1Generator.generateUuid(),
        upload_token_length: "",
        upload_from: k,
        click_scene: D
      };
      let s = await O(e, I, {
        trackParams: o
      });
      if (t) {
        try {
          if (!(await t(e))) {
            return false;
          }
        } catch {
          return false;
        }
      }
      s.forEach(async t => {
        let o = (await (E == null ? undefined : E())) ?? "";
        await T({
          file: t,
          type: aiSpaceQuoteUtils.isImageBlob(t) ? "image" : "file",
          ctx: {
            conversationId: i === chatConversationTypes.ConversationTypes.NewThread ? "" : n ?? "",
            chatType: (i === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", n)) || "other_default",
            skillType: L || 0,
            skillId: String(L || ""),
            uploadFrom: k,
            clickScene: D,
            botId: chatConversationBotId.getConversationBotId(n) || l || "",
            uploadWay: a.uploadWay,
            from: a.from,
            uploadCollectionWay: e.length + I.length > 1 ? "multi" : "single",
            uploadId: o
          }
        });
      });
      _();
      return false;
    };
    let z = async function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      if (l) {
        return M(...t);
      }
    };
    return {
      rawUploadFiles: M,
      uploadFiles: z
    };
  };
  let M = e => {
    var n;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: r
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      chatInputRef: l
    } = chatRefsContext.useChatRefs();
    let o = () => {
      promiseDelayUtil.delayPromise(50).then(() => {
        var e;
        var t;
        if ((t = l.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.attachmentAreaScrollToBottom) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t);
        }
      });
    };
    let {
      chatId: m,
      chatType: v
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let A = chatConversationSelectors.selectConvLink(m ?? "", v);
    let M = chatConversationBotId.getConversationBotId(m);
    let z = chatStoreManager.useStoreSelector("chatInputStore", e => m ? e.activeSkillTypeMap[m] : undefined);
    let P = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: m ?? "",
      skillType: z
    });
    let {
      addAttachment: R,
      getPreGeneratedLocalMessageId: j,
      clearAllAttachments: W,
      updatePreGeneratedLocalMessageId: F
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: m ?? "",
      skillType: z
    });
    let U = chatToastFactoryHook.useToastFactory();
    let K = v === chatConversationTypes.ConversationTypes.NewThread && (n = chatConversationSelectors_2.getMainConversationLink(chatFeedStoreFactory.useFeedStore.getState())?.conversationId) !== null && n !== undefined ? n : m;
    let {
      uploadFileMaxSize: G,
      uploadFileAllowedTypes: V,
      enabledSendMultiFileMessage: B,
      uploadMultiEntityConf: {
        maxFileSize: H
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let Z = B || codingSkillChatInput_1.codingSkillChatFlag;
    let q = A && Z ? H : Number(G);
    let Q = chatInputToolSupport.isImageSendEnabled(m ?? "", v);
    let Y = chatInputToolSupport.isFileSendEnabled(m ?? "", v);
    let X = D(m ?? "", v);
    let J = e => {
      let t = getFileExtension.getFileExtension(e.name);
      return V.includes(t);
    };
    let {
      uploadFiles: $
    } = O();
    return {
      uploadFiles: async (t, n) => {
        if (codingSkillChatUtils.isValidSkillId(M)) {
          return $(t, n);
        }
        if (!Q && !Y) {
          U.error("Can not upload.");
          return false;
        }
        if (t.length > 1) {
          U.error(i("multiple_files_not_supported"));
          return false;
        }
        if (aiSpaceQuoteUtils.isImageBlob(t[0])) {
          let a = t[0];
          if (Q) {
            let l = await imageCompressionUtils_1.compressor(a);
            if (l.size > imageCompressionUtils_1.getMaxSizeLimit()) {
              U.error(i("image_oversize"));
            } else if (X) {
              await W({});
              await F();
              await R({
                file: l,
                type: "image",
                ctx: {
                  conversationId: v === chatConversationTypes.ConversationTypes.NewThread ? "" : K ?? "",
                  chatType: (v === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", K)) || "other_default",
                  skillType: 0,
                  skillId: "",
                  uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                  botId: chatConversationBotId.getConversationBotId(K) || "",
                  from: n.from,
                  uploadCollectionWay: t.length + P.length > 1 ? "multi" : "single",
                  uploadId: await j(),
                  uploadWay: n.uploadWay
                }
              });
              o();
            } else {
              await r([{
                image: a,
                preGeneratedLocalMessageId: await j(),
                reportParams: {
                  from: n.from,
                  scene: "album"
                }
              }]);
              await (e == null ? undefined : e());
            }
          } else if (Y) {
            if (J(a)) {
              if (a.size > q) {
                U.error(i("file_size_over_limit", {
                  postProcess: "sprintf",
                  sprintf: [a.name, infraUtilFunctions.formatBytesSize(q)]
                }));
              } else if (X) {
                await W({});
                await F();
                await R({
                  file: a,
                  type: "file",
                  ctx: {
                    conversationId: v === chatConversationTypes.ConversationTypes.NewThread ? "" : K ?? "",
                    chatType: (v === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", K)) || "other_default",
                    skillType: 0,
                    skillId: "",
                    uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                    botId: chatConversationBotId.getConversationBotId(K) || "",
                    from: n.from,
                    uploadCollectionWay: t.length + P.length > 1 ? "multi" : "single",
                    uploadId: await j(),
                    uploadWay: n.uploadWay
                  }
                });
                o();
              } else {
                await r([{
                  file: a,
                  preGeneratedLocalMessageId: await j(),
                  reportParams: {
                    scene: "file",
                    from: n.from
                  }
                }]);
                await (e == null ? undefined : e());
              }
            } else {
              U.error(i("file_not_supported"));
            }
          } else {
            U.error("Can not upload.");
          }
          return false;
        }
        {
          let a = t[0];
          if (J(a)) {
            if (Y) {
              if (X) {
                await R({
                  file: a,
                  type: "file",
                  ctx: {
                    conversationId: v === chatConversationTypes.ConversationTypes.NewThread ? "" : K ?? "",
                    chatType: (v === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", K)) || "other_default",
                    skillType: 0,
                    skillId: "",
                    uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                    botId: chatConversationBotId.getConversationBotId(K) || "",
                    from: n.from,
                    uploadCollectionWay: t.length + P.length > 1 ? "multi" : "single",
                    uploadId: await j(),
                    uploadWay: n.uploadWay
                  }
                });
                o();
              } else {
                await r([{
                  file: a,
                  preGeneratedLocalMessageId: await j(),
                  reportParams: {
                    scene: "file",
                    from: n.from
                  }
                }]);
                await (e == null ? undefined : e());
              }
            } else {
              U.error("Can not upload.");
            }
          } else {
            U.error(i("file_not_supported"));
          }
          return false;
        }
      }
    };
  };
  let z = function ({
    enableUpload: e = true,
    onAfterSendMessage: t,
    beforeUpload: n
  } = {}) {
    let {
      uploadFiles: i
    } = O({
      beforeUpload: n
    });
    let {
      uploadFiles: a
    } = M(t);
    return {
      uploadFiles: async (t, n) => {
        if (!e || (await i(t, n)) === false || (await a(t, n)) === false) {
          return;
        }
      }
    };
  };
  require.d(exports, {
    useFileUploadHook: function () {
      return z;
    },
    useFileExtensionCheck: function () {
      return A;
    }
  });
}