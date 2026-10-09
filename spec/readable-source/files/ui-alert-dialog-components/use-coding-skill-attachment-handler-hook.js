// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useCodingSkillAttachmentHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 573323
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var codingSkillGithubLinkHandler = require("coding-skill-github-link-handler") /*id: 714583*/;
  var skillChatFileUpload = require("skill-chat-file-upload") /*id: 492056*/;
  var codingSkillDirectoryUpload = require("coding-skill-directory-upload") /*id: 954181*/;
  let p = e => {
    var n;
    let {
      skillType: p,
      skillId: f
    } = e;
    let _ = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let h = _ == null ? undefined : _.chatId;
    let m = (_ == null ? undefined : _.chatType) === chatConversationTypes.ConversationTypes.NewThread;
    let g = m && (n = chatConversationSelectors_2.getMainConversationLink(chatFeedStoreFactory.useFeedStore.getState())?.conversationId) !== null && n !== undefined ? n : h;
    let b = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: h ?? ""
    });
    let {
      addAttachment: v,
      addDirAttachment: x,
      addGitHubLink: w,
      clearAttachments: y,
      getPreGeneratedLocalMessageId: k,
      updatePreGeneratedLocalMessageId: C
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: h ?? ""
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await C();
    });
    let {
      handleAddFiles: j
    } = skillChatFileUpload.chatFileUpload({
      attachmentStates: b,
      addAttachment: v,
      isNewThread: m,
      chatId: h,
      conversationId: g,
      skillType: p,
      skillId: f,
      getPreGeneratedLocalMessageId: k,
      trackExtraParams: {
        code_scene: e.codeScene
      }
    });
    let {
      handleAddDir: S
    } = codingSkillDirectoryUpload.useDirectoryUpload({
      addDirAttachment: x,
      isNewThread: m,
      chatId: h,
      skillType: p,
      skillId: f,
      getPreGeneratedLocalMessageId: k,
      trackExtraParams: {
        code_scene: e.codeScene
      }
    });
    let {
      handleAddGithubLink: N
    } = codingSkillGithubLinkHandler.githubLinkHandler({
      addGitHubLink: w,
      isNewThread: m,
      chatId: h,
      conversationId: g,
      skillType: p,
      skillId: f,
      getPreGeneratedLocalMessageId: k,
      trackExtraParams: {
        code_scene: e.codeScene
      }
    });
    return {
      attachmentStates: b,
      handleAddFiles: j,
      handleAddDir: S,
      handleAddGithubLink: N,
      clearAttachments: y
    };
  };
  require.d(exports, {
    useCodingSkillAttachmentHandler: function () {
      return p;
    }
  });
}