// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'r' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatDocRefCheck'
// - Resolved require(558708) to 'chat-doc-ref-check'
// - Resolved require(851852) to 'receive-read-text-content-symbol'
// - Updated imported property 'E' to 'receiveTextContent' (module 851852)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property '_B' to 'filterMetaObjects' (module 80625)
// - Updated imported property 'R' to 'isDocumentRef' (module 558708)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 105890
         */
module.exports = function (module, exports, require) {
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatDocRefCheck = require("chat-doc-ref-check") /*id: 558708*/;
  let l = {
    pluginIdentifier: require("receive-read-text-content-symbol") /*id: 851852*/.receiveTextContent,
    matchPlugin(e) {
      return !botConversationTypeCheck.isBotConversation(e) && markdownMetaRenderUtils.filterMetaObjects((e == null ? undefined : e.meta_infos) ?? []).filter(chatDocRefCheck.isDocumentRef).length > 0 && messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.jSN(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveReadTextContentMatcher: function () {
      return l;
    }
  });
}