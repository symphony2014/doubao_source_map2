// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Resolved require(415117) to 'super-task-guidance-symbol'
// - Updated imported property 'j' to 'superTaskGuidance' (module 415117)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom-matcher.8807d104.js
         * chunkId: 46777
         * moduleId: 76456
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let o = {
    pluginIdentifier: require("super-task-guidance-symbol") /*id: 415117*/.superTaskGuidance,
    matchPlugin: e => conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "") && chatMessageStatusCheck.isMessageFinished(e) && messageContentTypeAndStatusChecker.yKE(e)
  };
  require.r(exports);
  require.d(exports, {
    superTaskMessageBottomGuidanceMatcher: function () {
      return o;
    }
  });
}