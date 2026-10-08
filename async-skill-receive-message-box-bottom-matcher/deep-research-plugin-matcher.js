// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Resolved require(486566) to 'chat-deep-research-action'
// - Updated imported property 'V' to 'deepResearchAction' (module 486566)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom-matcher.8807d104.js
         * chunkId: 46777
         * moduleId: 392028
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let u = {
    pluginIdentifier: require("chat-deep-research-action") /*id: 486566*/.deepResearchAction,
    matchPlugin: e => conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "") && !messageContentTypeAndStatusChecker.ey$(e) && messageContentTypeAndStatusChecker.Ouv(e)
  };
  require.r(exports);
  require.d(exports, {
    ReceiveDeepResearchHardMessageBoxBottomPluginMatcher: function () {
      return u;
    }
  });
}