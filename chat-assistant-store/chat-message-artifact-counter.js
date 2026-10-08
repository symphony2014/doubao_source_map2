// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'countMessagesWithArtifact'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 567925
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let c = e => {
    let {
      conversationId: t,
      artifactId: n
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      let s = e.messageLinkMap[t];
      if (isUndefinedCheck.isUndefined(s)) {
        return null;
      } else {
        return arraySumByMatcher.sumByMatcher(s, r => {
          let s = conversationMessageUtils_1.getMessageFromLink(e, t, r);
          if (!s) {
            return 0;
          }
          if (!isUndefinedCheck.isUndefined(n)) {
            let e = extractArtifactFromChatMessage.extractArtifactFromMessage(s);
            return +((e == null ? undefined : e.artifactId) === n);
          }
          if (messageContentTypeAndStatusChecker.D8H(s) || messageContentTypeAndStatusChecker.zwb(s) || messageContentTypeAndStatusChecker.e0X(s)) {
            return 1;
          }
          if (messageContentTypeAndStatusChecker.UD5(s)) {
            var c;
            var d;
            return ((c = s.content_blocks) === null || c === undefined ? undefined : c.filter(messageContentTypeAndStatusChecker.tX2).length) || ((d = s.content_blocks_v2) === null || d === undefined ? undefined : d.filter(messageContentTypeAndStatusChecker.tX2).length) || 0;
          }
          return 0;
        });
      }
    });
  };
  require.d(exports, {
    countMessagesWithArtifact: function () {
      return c;
    }
  });
}