// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'isReplyMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 41717
         */
module.exports = function (module, exports, require) {
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let o = (e, t) => moduleReExportWrapper.wrappedModule(t, t => {
    if (t.type === "single") {
      let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, t.data);
      return !!Number(n == null ? undefined : n.reply_id);
    }
    if (t.type === "block") {
      var n;
      if ((n = t.data) === null || n === undefined) {
        return undefined;
      } else {
        return n.some(t => {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, t);
          return !!Number(n == null ? undefined : n.reply_id);
        });
      }
    }
    return false;
  });
  require.d(exports, {
    isReplyMessage: function () {
      return o;
    }
  });
}