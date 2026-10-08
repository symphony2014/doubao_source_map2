// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'chatInputEventsSymbol'
// - Resolved require(147893) to 'chat-input-events-symbol'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'J' to 'chatInputEvents' (module 147893)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 486857
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatInputEventsSymbol = require("chat-input-events-symbol") /*id: 147893*/;
  let l = e => {
    let {
      chatId: t
    } = e;
    if (!t) {
      return;
    }
    let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
    if (!!n && !chatMessageStatusCheck.isMessageFinished(n) && messageContentTypeAndStatusChecker.kwD(n) && messageContentTypeAndStatusChecker.Lyd(n)) {
      return chatInputEventsSymbol.chatInputEvents;
    }
  };
  require.r(exports);
  require.d(exports, {
    codingChatInputEventMatcher: function () {
      return l;
    }
  });
}