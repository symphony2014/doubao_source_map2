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
// - Renamed variable 'l' to 'conversationMessageValidator'
// - Resolved require(253313) to 'conversation-message-validator'
// - Resolved require(423798) to 'outline-gen-doc-action'
// - Updated imported property 'q' to 'outlineGenDocAction' (module 423798)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'M_' to 'getReplyMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'S' to 'checkMessageSection' (module 253313)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 774729
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var conversationMessageValidator = require("conversation-message-validator") /*id: 253313*/;
  let s = {
    area: "main",
    actionType: "outline-gen-doc",
    pluginIdentifier: require("outline-gen-doc-action") /*id: 423798*/.outlineGenDocAction,
    matchPlugin: e => {
      let t = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig;
      let {
        conversation_id: n = ""
      } = e || {};
      let s = conversationMessageUtils_1.getReplyMessage(chatMessageStoreFactory.createMessageStore.getState(), n);
      return !!e && !!s && !(t == null ? undefined : t.isImmersiveMode) && s.message_id !== e.message_id && messageContentTypeAndStatusChecker.fdv(e) && conversationMessageValidator.checkMessageSection(n, e) && !messageContentTypeAndStatusChecker.F3w(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    outlineGenDocReceiveMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}