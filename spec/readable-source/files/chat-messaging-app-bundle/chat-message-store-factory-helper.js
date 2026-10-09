// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'createConversationMessageStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 790538
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let i = e => {
    let {
      conversationId: t
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      if (!t) {
        return false;
      }
      let n = conversationMessageUtils_1.getReplyMessage(e, t);
      return !!n && conversationMessageUtils_1.getAvailableMessage(e, t) === n;
    });
  };
  require.d(exports, {
    createConversationMessageStore: function () {
      return i;
    }
  });
}