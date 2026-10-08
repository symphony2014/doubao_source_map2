// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'usePdfSkillAttachmentHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 66476
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var allowedUrlCheck = require("allowed-url-check") /*id: 671850*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var arxivDomainConstants = require("arxiv-domain-constants") /*id: 804607*/;
  let E = e => {
    var t;
    let {
      skill: n,
      onAttachmentChange: E
    } = e;
    let {
      chatId: C,
      chatType: T
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let $ = ((t = n.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let R = n.skill_type || 0;
    let S = codingChatFileUpload.useFileUpload();
    let N = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: C ?? "",
      skillType: chatAppEnums.SkillType.ReadPDF
    });
    let j = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: C ?? "",
      skillType: chatAppEnums.SkillType.ReadPDF
    });
    let P = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: C ?? "",
      skillType: chatAppEnums.SkillType.ReadPDF
    });
    let {
      addAttachment: I,
      addLink: F,
      deleteAttachment: D,
      reuploadAttachment: Z,
      clearAttachments: O,
      updatePreGeneratedLocalMessageId: M,
      getPreGeneratedLocalMessageId: W
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: C ?? "",
      skillType: chatAppEnums.SkillType.ReadPDF
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await O({});
      await M();
    });
    let A = chatToastFactoryHook.useToastFactory();
    let B = i18nTranslationUtils.useTranslationWithFallback();
    let [U, z] = reactCoreLibraryReexport.useState("");
    let L = () => {
      A.warning(B("skill_pdf_error_exclusive"));
    };
    return {
      handleFilesChange: async (e, t) => {
        let n = {
          conversation_id: C,
          conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), C) || 1,
          chat_type: T,
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.ReadPDF),
          skill_id: $,
          upload_id: await W(),
          duration: "0",
          upload_way: t.uploadWay,
          upload_collection_way: e.length + P.length > 1 ? "multi" : "single",
          collection_id: uuidV1Generator.generateUuid(),
          upload_token_length: "",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON
        };
        let i = await S(e, P, {
          trackParams: n
        });
        if (t.uploadWay) {
          z(t.uploadWay);
        }
        i.forEach(async n => {
          I({
            file: n,
            type: aiSpaceQuoteUtils.isImageBlob(n) ? "image" : "file",
            ctx: {
              conversationId: T === chatConversationTypes.ConversationTypes.NewThread ? "" : C ?? "",
              chatType: (T === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", C)) || "other_default",
              skillType: R,
              skillId: $,
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
              botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()),
              uploadWay: t.uploadWay,
              from: t.from,
              uploadCollectionWay: e.length + P.length > 1 ? "multi" : "single",
              uploadId: await W()
            }
          });
        });
        if (E != null) {
          E();
        }
      },
      handleFileLinkChange: e => {
        if (isEmptyUtil.isEmpty(P)) {
          F({
            url: e,
            fileType: allowedUrlCheck.isUrlAllowed(e, {
              allowedHosts: arxivDomainConstants.arxivDomains
            }) ? "PDF" : undefined
          });
          z("input link");
        } else {
          L();
        }
      },
      addLink: F,
      attachments: N,
      attachmentKeys: j,
      attachmentStates: P,
      deleteAttachment: D,
      reuploadAttachment: Z,
      clearAttachments: O,
      getPreGeneratedLocalMessageId: W,
      updatePreGeneratedLocalMessageId: M,
      uploadWay: U
    };
  };
  require.d(exports, {
    usePdfSkillAttachmentHandler: function () {
      return E;
    }
  });
}