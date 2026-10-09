// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'a' to 'chatGenericAskSymbol'
// - Resolved require(679974) to 'chat-generic-ask-symbol'
// - Renamed variable 'l' to 'chatDesktopResourceCheck'
// - Resolved require(873204) to 'chat-desktop-resource-check'
// - Updated imported property 'w' to 'genericAskSymbol' (module 679974)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property '_B' to 'filterMetaObjects' (module 80625)
// - Updated imported property 'u' to 'isDesktopResource' (module 873204)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 552358
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var chatGenericAskSymbol = require("chat-generic-ask-symbol") /*id: 679974*/;
  var chatDesktopResourceCheck = require("chat-desktop-resource-check") /*id: 873204*/;
  let s = {
    pluginIdentifier: chatGenericAskSymbol.genericAskSymbol,
    matchPlugin(e) {
      return !botConversationTypeCheck.isBotConversation(e) && markdownMetaRenderUtils.filterMetaObjects((e == null ? undefined : e.meta_infos) ?? []).filter(chatDesktopResourceCheck.isDesktopResource).length > 0 && messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.jSN(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveGenericAskPageTextContentMatcher: function () {
      return s;
    }
  });
}