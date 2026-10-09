// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'isDocMessageContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 406671
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let p = e => {
    let {
      docId: n
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      let c = chatViewCoreSelectors.getChatId();
      if (!c) {
        return false;
      }
      let p = e.messageLinkMap[c] ?? [];
      if (!p) {
        return false;
      }
      let _ = conversationMessageUtils_1.getMessageFromLink(e, c, p[p.length - 1]);
      if (!_ || !messageContentTypeAndStatusChecker.ssP(_)) {
        return false;
      }
      let {
        resource_id: h
      } = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(_, "content"), {});
      let v = objectPathGetDefault.getObjectPathDefault(_, "ext.msg_scene");
      let f = collectionIncludesUtil.includes(["ppt_gen"], v);
      return !chatMessageStatusCheck.isMessageFinished(_) && !checkLocalReplyMessage.isLocalReplyMessage(_) && (!h || h === n) && !f;
    });
  };
  require.d(exports, {
    isDocMessageContext: function () {
      return p;
    }
  });
}