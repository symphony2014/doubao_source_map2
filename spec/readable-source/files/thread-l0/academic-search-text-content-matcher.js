// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'a' to 'chatAcademicSearchTextSymbol'
// - Resolved require(704941) to 'chat-academic-search-text-symbol'
// - Renamed variable 'l' to 'searchSkillMessageUtils'
// - Resolved require(67970) to 'search-skill-message-utils'
// - Updated imported property 'd' to 'receiveAcademicText' (module 704941)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property '_B' to 'filterMetaObjects' (module 80625)
// - Updated imported property 'SF' to 'isWebAcademicReference' (module 67970)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 904008
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var chatAcademicSearchTextSymbol = require("chat-academic-search-text-symbol") /*id: 704941*/;
  var searchSkillMessageUtils = require("search-skill-message-utils") /*id: 67970*/;
  let s = {
    pluginIdentifier: chatAcademicSearchTextSymbol.receiveAcademicText,
    matchPlugin: e => {
      return !botConversationTypeCheck.isBotConversation(e) && markdownMetaRenderUtils.filterMetaObjects((e == null ? undefined : e.meta_infos) ?? []).filter(searchSkillMessageUtils.isWebAcademicReference).length > 0 && messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.jSN(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveAcademicSearchTextContentMatcher: function () {
      return s;
    }
  });
}