// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'checkMessageSection'
// - Renamed export 'o' to 'findValidMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 253313
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let l = (e, t) => {
    for (let n of e) {
      if (n.type === "block") {
        for (let e of n.data) {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, e);
          if (messageContentTypeAndStatusChecker.fdv(n)) {
            return n;
          }
        }
      } else if (n.type === "single") {
        let e = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, n.data);
        if (messageContentTypeAndStatusChecker.fdv(e)) {
          return e;
        }
      }
    }
    return null;
  };
  let s = (e, t) => {
    if (!t || !messageContentTypeAndStatusChecker.$bh(t)) {
      return false;
    }
    let l = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e]?.last_section_id ?? "";
    return !l || t.section_id === l && !(t == null ? undefined : t.ext?.samantha_code);
  };
  require.d(exports, {
    checkMessageSection: function () {
      return s;
    },
    findValidMessage: function () {
      return l;
    }
  });
}