// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'findMatchingSkillMessage'
// - Renamed export 'x' to 'isLastSectionMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 533639
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let a = (e, t) => {
    for (let n of e) {
      if (n.type === "block") {
        for (let e of n.data) {
          let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, e);
          if (messageContentTypeAndStatusChecker.N0s(n)) {
            return n;
          }
        }
      } else if (n.type === "single") {
        let e = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, n.data);
        if (messageContentTypeAndStatusChecker.N0s(e)) {
          return e;
        }
      }
    }
    return null;
  };
  let l = (e, t) => {
    if (!t || !messageContentTypeAndStatusChecker.$bh(t)) {
      return false;
    }
    let a = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e]?.last_section_id ?? "";
    return !a || t.section_id === a && !(t == null ? undefined : t.ext?.samantha_code);
  };
  require.d(exports, {
    findMatchingSkillMessage: function () {
      return a;
    },
    isLastSectionMessage: function () {
      return l;
    }
  });
}