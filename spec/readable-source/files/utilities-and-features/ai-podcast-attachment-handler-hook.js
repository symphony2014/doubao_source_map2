// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'useAiPodcastAttachmentHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 315619
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
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
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var pdfUploadValidatorHook = require("pdf-upload-validator-hook") /*id: 831011*/;
  var arxivDomainScaleConfig = require("arxiv-domain-scale-config") /*id: 913827*/;
  let S = e => {
    var t;
    let {
      skill: r,
      onAttachmentChange: S
    } = e;
    let {
      chatId: T,
      chatType: R
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let C = ((t = r.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let E = r.skill_type || 0;
    let P = pdfUploadValidatorHook.usePdfUploadValidator();
    let N = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: T ?? "",
      skillType: chatAppEnums.SkillType.SkillAiPodcast
    });
    let A = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: T ?? "",
      skillType: chatAppEnums.SkillType.SkillAiPodcast
    });
    let {
      addAttachment: j,
      addLink: M,
      deleteAttachment: W,
      reuploadAttachment: $,
      clearAttachments: I,
      updatePreGeneratedLocalMessageId: D,
      getPreGeneratedLocalMessageId: Z
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: T ?? "",
      skillType: chatAppEnums.SkillType.SkillAiPodcast
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await I({});
      await D();
    });
    let F = chatToastFactoryHook.useToastFactory();
    let z = i18nTranslationUtils.useTranslationWithFallback();
    let [O, L] = reactCoreLibraryReexport.useState("");
    let B = () => {
      F.warning(z("podcast_upload_toast_fileLimit"));
    };
    return {
      handleFilesChange: async (e, t) => {
        let r = {
          conversation_id: T,
          conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), T) || 1,
          chat_type: R,
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.SkillAiPodcast),
          skill_id: C,
          upload_id: await Z(),
          duration: "0",
          upload_way: t.uploadWay,
          upload_collection_way: e.length + A.length > 1 ? "multi" : "single",
          collection_id: uuidV1Generator.generateUuid(),
          upload_token_length: "",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON
        };
        let n = await P(e, A, {
          trackParams: r
        });
        if (t.uploadWay) {
          L(t.uploadWay);
        }
        n.forEach(async r => {
          j({
            file: r,
            type: aiSpaceQuoteUtils.isImageBlob(r) ? "image" : "file",
            ctx: {
              conversationId: R === chatConversationTypes.ConversationTypes.NewThread ? "" : T ?? "",
              chatType: (R === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", T)) || "other_default",
              skillType: E,
              skillId: C,
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
              botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()),
              uploadWay: t.uploadWay,
              from: t.from,
              uploadCollectionWay: e.length + A.length > 1 ? "multi" : "single",
              uploadId: await Z()
            }
          });
        });
        if (S != null) {
          S();
        }
      },
      handleFileLinkChange: e => {
        if (isEmptyUtil.isEmpty(A)) {
          M({
            url: e,
            fileType: urlParamUtils.validateUrl(e, {
              allowedHosts: arxivDomainScaleConfig.arxivDomains
            }) ? "PDF" : undefined
          });
          L("input link");
        } else {
          B();
        }
      },
      addLink: M,
      attachments: N,
      attachmentStates: A,
      deleteAttachment: W,
      reuploadAttachment: $,
      clearAttachments: I,
      getPreGeneratedLocalMessageId: Z,
      updatePreGeneratedLocalMessageId: D,
      uploadWay: O
    };
  };
  require.d(exports, {
    useAiPodcastAttachmentHandler: function () {
      return S;
    }
  });
}