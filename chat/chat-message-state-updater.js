// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'updateChatMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 754205
         */
module.exports = function (module, exports, require) {
  var mergeAndFilterMessagesUtil = require("merge-and-filter-messages-util") /*id: 439155*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var createChatMessageUpdaterFactory = require("create-chat-message-updater-factory") /*id: 388719*/;
  function a(e) {
    let {
      conversationId: t,
      fetchResult: n,
      mergeMessageLinksWithLocal: a,
      range: l
    } = e;
    createChatMessageUpdaterFactory.createChatMessageUpdater(t)((e, t) => {
      let {
        draftMessageLinks: o,
        draftMessageMap: s,
        draftLocalMessageMap: u
      } = e;
      let c = chatMessageUtils_2_1.getMessageGetter({
        localMessageMap: u,
        messageMap: s
      });
      let d = chatMessageUtils_2_1.getLocalMessage({
        localMessageMap: u
      });
      t.overrideMessages(n.messages);
      let h = mergeAndFilterMessagesUtil.mergeAndFilterMessages(a ? mergeAndFilterMessagesUtil.applyMessageDefaults(n.messageLinks, o) : n.messageLinks, o, c, d);
      t.overrideMessageLinks(h);
      let m = chatMessageUtils_2_1.initMessageListState({
        messageLinks: h,
        getMessage: c,
        hasMore: n.hasMore,
        range: l
      });
      t.setMessageStatus(m);
    });
  }
  require.d(exports, {
    updateChatMessages: function () {
      return a;
    }
  });
}