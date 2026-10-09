// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'u' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'chatListBottomSymbol'
// - Resolved require(965434) to 'chat-list-bottom-symbol'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'R' to 'chatListBottomSymbol' (module 965434)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 95139
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatListBottomSymbol = require("chat-list-bottom-symbol") /*id: 965434*/;
  let l = e => {
    let {
      isSelectMode: t,
      conversationId: n
    } = e;
    if (!n || t) {
      return;
    }
    let l = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), n);
    if (!!l && !!messageContentTypeAndStatusChecker.Yi0(l) && !chatMessageStatusCheck.isMessageFinished(l)) {
      return chatListBottomSymbol.chatListBottomSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    superTaskMessageBottomMatcher: function () {
      return l;
    }
  });
}