// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(822998) to 'pc-main-bot-suggest-symbol'
// - Updated imported property 't' to 'pcMainBotSuggestKey' (module 822998)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16083.9786a9f4.js
         * chunkId: 16083
         * moduleId: 207236
         */
module.exports = function (module, exports, require) {
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let c = {
    pluginIdentifier: require("pc-main-bot-suggest-symbol") /*id: 822998*/.pcMainBotSuggestKey,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.DRY(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.DRY(e)
  };
  require.r(exports);
  require.d(exports, {
    PcMainBotSuggestChatProtocolransformPluginMatcher: function () {
      return c;
    }
  });
}