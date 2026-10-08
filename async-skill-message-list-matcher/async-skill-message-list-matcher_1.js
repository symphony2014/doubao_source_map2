// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useMessageGenerationStatus'
// - Renamed export 'W' to 'hasReplyInMessageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 754085
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageValidator = require("conversation-message-validator") /*id: 253313*/;
  let l = (e, t) => moduleReExportWrapper.wrappedModule(t, t => {
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
  let c = e => {
    let {
      conversationId: t
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState();
    let l = chatMessageStoreFactory.createMessageStore(e => {
      let r = e.messageLinkMap[t];
      if (!r) {
        return false;
      }
      let i = r.find(e => e.messageId === n);
      if (!i) {
        return false;
      }
      let o = conversationMessageUtils_1.getMessageFromLink(e, t, i);
      return conversationMessageValidator.checkMessageSection(t, o);
    });
    return {
      writingMessageId: n,
      setWritingMessageId: i,
      enableToGenerateDoc: l
    };
  };
  require.d(exports, {
    useMessageGenerationStatus: function () {
      return c;
    },
    hasReplyInMessageList: function () {
      return l;
    }
  });
}