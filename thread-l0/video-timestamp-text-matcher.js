// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'a' to 'chatVideoTimestampSymbol'
// - Resolved require(62607) to 'chat-video-timestamp-symbol'
// - Renamed variable 'l' to 'desktopTimestampUrlHandler'
// - Resolved require(98217) to 'desktop-timestamp-url-handler'
// - Updated imported property 'D' to 'videoTimestampSymbol' (module 62607)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property '_B' to 'filterMetaObjects' (module 80625)
// - Updated imported property 'Xi' to 'isDesktopTimestampReference' (module 98217)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 996152
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var chatVideoTimestampSymbol = require("chat-video-timestamp-symbol") /*id: 62607*/;
  var desktopTimestampUrlHandler = require("desktop-timestamp-url-handler") /*id: 98217*/;
  let s = {
    pluginIdentifier: chatVideoTimestampSymbol.videoTimestampSymbol,
    matchPlugin: e => {
      return !botConversationTypeCheck.isBotConversation(e) && markdownMetaRenderUtils.filterMetaObjects((e == null ? undefined : e.meta_infos) ?? []).filter(desktopTimestampUrlHandler.isDesktopTimestampReference).length > 0 && messageContentTypeAndStatusChecker.G7Q(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveVideoTimestampTextContentMatcher: function () {
      return s;
    }
  });
}