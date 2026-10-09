// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'localRegenCheck'
// - Resolved require(965069) to 'local-regen-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'messageRegenAndReplyUtils'
// - Resolved require(893308) to 'message-regen-and-reply-utils'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Resolved require(395929) to 'chat-search-regenerate-action'
// - Updated imported property 'X' to 'searchRegenAction' (module 395929)
// - Updated imported property 'aS' to 'isMessageContentTypeValid' (module 893308)
// - Updated imported property 'EN' to 'getMessageFromReplyLink' (module 893308)
// - Updated imported property 'Rm' to 'filterReplyLinks' (module 393180)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'b' to 'shouldRegenerate' (module 965069)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 885291
         */
module.exports = function (module, exports, require) {
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageRegenAndReplyUtils = require("message-regen-and-reply-utils") /*id: 893308*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let s = {
    area: "main",
    actionType: "regenerate",
    pluginIdentifier: require("chat-search-regenerate-action") /*id: 395929*/.searchRegenAction,
    matchPlugin: e => {
      var n;
      let s = messageRegenAndReplyUtils.isMessageContentTypeValid(e.conversation_id || "", e.message_id || "");
      let u = messageRegenAndReplyUtils.getMessageFromReplyLink(e);
      let d = !!(u == null ? undefined : u.attachments?.length);
      let c = (n = conversationMessageUtils_1.filterReplyLinks(chatMessageStoreFactory.createMessageStore.getState(), e)) === null || n === undefined ? undefined : n.find(t => (t == null ? undefined : t.message_id) !== e.message_id && !localRegenCheck.shouldRegenerate(t));
      let v = messageContentTypeAndStatusChecker.pp8(e) || messageContentTypeAndStatusChecker.mT2(e);
      return conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "") && (s || v) && !d && !!c;
    }
  };
  require.r(exports);
  require.d(exports, {
    searchRegenerateReceiveMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}