// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useAsyncSkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 995921
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  let w = e => {
    let {
      onAttachmentsChange: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatId: w,
      chatType: x
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let C = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: w ?? "",
      skillType: chatAppEnums.SkillType.CodeInterpreter
    });
    let k = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: w ?? "",
      skillType: chatAppEnums.SkillType.CodeInterpreter
    });
    let {
      addAttachment: S,
      addLink: E,
      deleteAttachment: T,
      reuploadAttachment: j,
      clearAttachments: P,
      getPreGeneratedLocalMessageId: N,
      updatePreGeneratedLocalMessageId: R
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: w ?? "",
      skillType: chatAppEnums.SkillType.CodeInterpreter
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await P({});
      await R();
    });
    let I = codingChatFileUpload.useFileUpload();
    let [O, M] = reactCoreLibraryReexport.useState("");
    let D = async (e, i) => {
      let r = {
        conversation_id: w,
        conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), w) || 1,
        chat_type: x,
        skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.CodeInterpreter),
        skill_id: String(chatAppEnums.SkillType.CodeInterpreter),
        upload_id: await N(),
        duration: "0",
        upload_way: i.uploadWay,
        upload_collection_way: e.length + k.length > 1 ? "multi" : "single",
        collection_id: uuidV1Generator.generateUuid(),
        upload_token_length: "",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON
      };
      let o = e == null ? undefined : e.filter(e => !aiSpaceQuoteUtils.isImageBlob(e) || (semiToastNotification.toastInstance.error(n("read_file_type_error", {
        postProcess: "sprintf",
        sprintf: [e.name]
      })), false));
      let c = await I(o, k, {
        trackParams: r
      });
      if (i.uploadWay) {
        M(i.uploadWay);
      }
      c.forEach(async t => {
        await S({
          file: t,
          type: aiSpaceQuoteUtils.isImageBlob(t) ? "image" : "file",
          ctx: {
            conversationId: x === chatConversationTypes.ConversationTypes.NewThread ? "" : w ?? "",
            chatType: (x === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", w)) || "other_default",
            skillType: chatAppEnums.SkillType.CodeInterpreter,
            skillId: String(chatAppEnums.SkillType.CodeInterpreter),
            uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
            botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()),
            uploadWay: i.uploadWay,
            from: i.from,
            uploadCollectionWay: e.length + k.length > 1 ? "multi" : "single",
            uploadId: await N()
          }
        });
      });
      if (t != null) {
        t();
      }
    };
    return {
      attachments: C,
      attachmentStates: k,
      deleteAttachment: T,
      clearAttachments: P,
      reuploadAttachment: j,
      addLink: E,
      getPreGeneratedLocalMessageId: N,
      updatePreGeneratedLocalMessageId: R,
      handleFilesChange: D,
      uploadWay: O
    };
  };
  require.d(exports, {
    useAsyncSkillGuidanceInput: function () {
      return w;
    }
  });
}