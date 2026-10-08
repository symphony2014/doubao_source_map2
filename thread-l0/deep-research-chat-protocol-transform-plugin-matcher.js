// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'n' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(179344) to 'deep-research-symbol'
// - Updated imported property 'C' to 'deepResearchSymbol' (module 179344)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 301302
         */
module.exports = function (module, exports, require) {
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("deep-research-symbol") /*id: 179344*/.deepResearchSymbol,
    matchPluginForAliceChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.nmA(e),
    matchPluginForSamanthaChatMessageToMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.nmA(e),
    matchPluginForMessageToSamanthaChatMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.nmA(e),
    matchPluginForMessageToAliceChatMessage: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.nmA(e)
  };
  require.r(exports);
  require.d(exports, {
    DeepResearchChatProtocolTransformPluginMatcher: function () {
      return r;
    }
  });
}