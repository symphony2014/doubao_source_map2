// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Resolved require(31273) to 'chat-unread-tip-constant'
// - Updated imported property 'q' to 'unreadTipSymbol' (module 31273)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'PP' to 'findMessageById' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-top-matcher.72ac8643.js
         * chunkId: 74962
         * moduleId: 245971
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let o = {
    pluginIdentifier: require("chat-unread-tip-constant") /*id: 31273*/.unreadTipSymbol,
    matchPlugin: e => {
      let t = messageContentTypeAndStatusChecker.ZRq(e);
      let n = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
      let o = conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.reply_id || "");
      let c = messageContentTypeAndStatusChecker.A8i(o);
      let s = messageContentTypeAndStatusChecker.xop(o);
      let l = checkNestedContentType.isNestedContentType(o);
      let d = messageContentTypeAndStatusChecker.Sqr(o);
      let f = (c || s || l || d) && messageContentTypeAndStatusChecker.mZM(e);
      let p = messageContentTypeAndStatusChecker.tiZ(e);
      return t && n && (f || p);
    }
  };
  require.r(exports);
  require.d(exports, {
    notReadFinishTipReceiveMessageBoxTopPluginMatcher: function () {
      return o;
    }
  });
}