// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useChatAttachmentUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 357212
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  let b = e => {
    let {
      attachmentStates: t
    } = e;
    let n = chatAppEnums.SkillType.DesExtSkillSuperTask;
    let {
      chatId: b,
      chatType: y
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let {
      chatInputRef: w
    } = chatRefsContext.useChatRefs();
    let x = () => {
      promiseDelayUtil.delayPromise(50).then(() => {
        var e;
        var t;
        if ((t = w.current) !== null && t !== undefined && (e = t.attachmentAreaScrollToBottom) !== null && e !== undefined) {
          e.call(t);
        }
      });
    };
    let {
      addAttachment: C,
      getPreGeneratedLocalMessageId: k
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: b ?? "",
      skillType: n
    });
    let S = skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
    let E = undefined;
    let T = codingChatFileUpload.useFileUpload(true, true);
    let j = async (e, i) => {
      let a = chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || (await new Promise(e => {
        let t = chatFeedStoreFactory.useFeedStore.subscribe(chatConversationSelectors_2.getBotId, n => n && (e(n), t()));
      }));
      let o = {
        conversation_id: b,
        conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), b) || 1,
        chat_type: y,
        skill_name: n == null ? undefined : n.toString(),
        skill_id: n == null ? undefined : n.toString(),
        upload_id: await (k == null ? undefined : k()),
        duration: "0",
        upload_way: i.uploadWay,
        upload_collection_way: e.length + t.length > 1 ? "multi" : "single",
        collection_id: uuidV1Generator.generateUuid(),
        upload_token_length: "",
        upload_from: S,
        click_scene: E
      };
      (await T(e, t, {
        trackParams: o
      })).forEach(async r => {
        let s = (await (k == null ? undefined : k())) ?? "";
        await C({
          file: r,
          type: aiSpaceQuoteUtils.isImageBlob(r) ? "image" : "file",
          ctx: {
            conversationId: y === chatConversationTypes.ConversationTypes.NewThread ? "" : b ?? "",
            chatType: (y === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", b)) || "other_default",
            skillType: n || 0,
            skillId: String(n || ""),
            uploadFrom: S,
            clickScene: E,
            botId: chatConversationBotId.getConversationBotId(b) || a || "",
            uploadWay: i.uploadWay,
            from: i.from,
            uploadCollectionWay: e.length + t.length > 1 ? "multi" : "single",
            uploadId: s
          }
        });
      });
      x();
      return false;
    };
    return {
      rawUploadFiles: j,
      uploadFiles: j
    };
  };
  require.d(exports, {
    useChatAttachmentUpload: function () {
      return b;
    }
  });
}