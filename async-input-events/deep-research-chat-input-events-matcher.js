// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'deepResearchChatSymbol'
// - Resolved require(693955) to 'deep-research-chat-symbol'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'F' to 'chatInputEventsKey' (module 693955)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 720622
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var deepResearchChatSymbol = require("deep-research-chat-symbol") /*id: 693955*/;
  let l = e => {
    let {
      chatId: t
    } = e;
    if (!t) {
      return;
    }
    let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
    if (!!n && !!messageContentTypeAndStatusChecker.Gg$(n) && !chatMessageStatusCheck.isMessageFinished(n)) {
      return deepResearchChatSymbol.chatInputEventsKey;
    }
  };
  require.r(exports);
  require.d(exports, {
    deepResearchChatInputEventsMatcher: function () {
      return l;
    }
  });
}