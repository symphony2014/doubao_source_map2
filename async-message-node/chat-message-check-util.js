// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'checkChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 375719
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let a = e => {
    let {
      conversationId: t,
      messageId: n
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      if (!t || !n) {
        return false;
      }
      let r = conversationMessageUtils_1.getMessageById(e, t, n);
      return messageContentTypeAndStatusChecker.F3w(r);
    });
  };
  require.d(exports, {
    checkChatMessage: function () {
      return a;
    }
  });
}