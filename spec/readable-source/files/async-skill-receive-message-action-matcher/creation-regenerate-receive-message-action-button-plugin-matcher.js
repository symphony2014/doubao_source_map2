// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'l' to 'creationRegenerateActionSymbol'
// - Resolved require(874955) to 'creation-regenerate-action-symbol'
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'K' to 'creationRegenerate' (module 874955)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 157695
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var creationRegenerateActionSymbol = require("creation-regenerate-action-symbol") /*id: 874955*/;
  let s = e => {
    let l = chatFeedStoreFactory.useFeedStore.getState().conversationMap[(e == null ? undefined : e.conversation_id) || ""]?.last_section_id ?? "";
    let s = !!l && l === (e == null ? undefined : e.section_id);
    let u = messageContentTypeAndStatusChecker.ZRq(e);
    let d = messageContentTypeAndStatusChecker.vlk(e);
    let c = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
    return messageContentTypeAndStatusChecker.dqg(e) && c && u && !d && s;
  };
  let u = {
    area: "main",
    actionType: "regenerate",
    pluginIdentifier: creationRegenerateActionSymbol.creationRegenerate,
    matchPlugin: e => s(e)
  };
  require.r(exports);
  require.d(exports, {
    creationRegenerateReceiveMessageActionButtonPluginMatcher: function () {
      return u;
    }
  });
}