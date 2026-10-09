// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'n' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(468122) to 'chat-media-symbol'
// - Updated imported property 'H' to 'mediaSymbol' (module 468122)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 274544
         */
module.exports = function (module, exports, require) {
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("chat-media-symbol") /*id: 468122*/.mediaSymbol,
    matchPluginForMessageToSamanthaChatMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.iMt(e),
    matchPluginForMessageToAliceChatMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.iMt(e),
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.iMt(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.iMt(e)
  };
  require.r(exports);
  require.d(exports, {
    MediaChatProtocolransformPluginMatcher: function () {
      return r;
    }
  });
}