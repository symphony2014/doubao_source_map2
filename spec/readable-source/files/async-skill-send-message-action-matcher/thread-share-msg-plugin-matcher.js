// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 's' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'l' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'u' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Resolved require(84389) to 'send-message-thread-share-symbol'
// - Updated imported property 'N' to 'threadShareAction' (module 84389)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'WC' to 'isRejectedShare' (module 104471)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action-matcher.1e7a3334.js
         * chunkId: 96243
         * moduleId: 265999
         */
module.exports = function (module, exports, require) {
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  let d = {
    area: "main",
    actionType: "thread-share",
    pluginIdentifier: require("send-message-thread-share-symbol") /*id: 84389*/.threadShareAction,
    matchPlugin: e => {
      let t = e.local_conversation_id || e.conversation_id || "";
      let {
        _isMessageDisableSelect: n
      } = chatMessageShareSelectStore.chatMessageShareSelectStore.getState();
      let d = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
      let c = isCocoConversationChecker.isCocoConversation(e);
      let f = messageContentTypeAndStatusChecker.F3w(e);
      return c && !f && chatMessageStatusCheck.isMessageFinished(e) && !n(e) && !chatConversationCheckers.isRejectedShare(d) && !messageContentTypeAndStatusChecker.Jgn(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    threadShareSendMessageActionButtonPluginMatcher: function () {
      return d;
    }
  });
}