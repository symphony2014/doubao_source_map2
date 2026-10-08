// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'deleteDraftReply'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 114423
         */
module.exports = function (module, exports, require) {
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var createChatMessageUpdaterFactory = require("create-chat-message-updater-factory") /*id: 388719*/;
  function s(e) {
    let {
      conversationId: t,
      messageLink: n,
      deleteReply: s = false
    } = e;
    createChatMessageUpdaterFactory.createChatMessageUpdater(t)(e => {
      draftMessageManager.setDraftMessageStatus(e, n);
      if (s) {
        let t = messageFilterUtils.filterReplyLinks({
          replyId: n.messageId,
          messageLinks: e.draftMessageLinks,
          getMessage: chatMessageUtils_2_1.getMessageGetter({
            localMessageMap: e.draftLocalMessageMap,
            messageMap: e.draftMessageMap
          })
        });
        if (t == null ? undefined : t.length) {
          t.forEach(t => draftMessageManager.setDraftMessageStatus(e, t));
        }
      }
    });
  }
  require.d(exports, {
    deleteDraftReply: function () {
      return s;
    }
  });
}