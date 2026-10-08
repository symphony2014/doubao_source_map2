// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'chatMessageActionSymbol_2'
// - Resolved require(363615) to 'chat-message-action-symbol_2'
// - Renamed variable 's' to 'asyncSkillMessageListMatcher'
// - Resolved require(533639) to 'async-skill-message-list-matcher'
// - Updated imported property 'x' to 'receiveMessageAct' (module 363615)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'M_' to 'getReplyMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'x' to 'isLastSectionMessage' (module 533639)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 622837
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageActionSymbol_2 = require("chat-message-action-symbol_2") /*id: 363615*/;
  var asyncSkillMessageListMatcher = require("async-skill-message-list-matcher") /*id: 533639*/;
  let u = {
    area: "main",
    actionType: "outline-gen",
    pluginIdentifier: chatMessageActionSymbol_2.receiveMessageAct,
    matchPlugin: e => {
      let t = e.message_id || "";
      let n = e.conversation_id || "";
      let l = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig;
      let u = conversationMessageUtils_1.getReplyMessage(chatMessageStoreFactory.createMessageStore.getState(), n);
      return !!e && !!u && !(l == null ? undefined : l.isImmersiveMode) && u.message_id !== t && messageContentTypeAndStatusChecker.N0s(e) && asyncSkillMessageListMatcher.isLastSectionMessage(n, e);
    }
  };
  require.r(exports);
  require.d(exports, {
    outlineGenReceiveMessageActionButtonPluginMatcher: function () {
      return u;
    }
  });
}