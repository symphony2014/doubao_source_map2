// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'useChatFileExt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 896476
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var codingSkillChatUtils = require("coding-skill-chat-utils") /*id: 881555*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let u = e => {
    let {
      chatId: t,
      chatType: n,
      activeSkillType: u
    } = e;
    let p = chatInputToolSupport.isCodeSkillEnabled({
      chatId: t,
      chatType: n,
      skillType: u
    });
    let f = chatConversationBotId.getConversationBotId(t);
    let {
      uploadFileAllowedTypes: _,
      enabledSendMultiFileMessage: h,
      uploadMultiEntityConf: {
        maxFileCount: m
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let g = supportedFileExtensionsUtility.getSupportedFileExtensions(p);
    let b = chatConversationSelectors.selectConvLink(t || "", n);
    return reactCoreLibraryReexport.useMemo(() => b ? g : codingSkillChatUtils.isValidSkillId(f) ? fileTypeDetectionUtils.codeExtensions : _, [b, g, _]);
  };
  require.d(exports, {
    useChatFileExt: function () {
      return u;
    }
  });
}