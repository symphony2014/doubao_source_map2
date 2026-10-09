// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'updateConvReadState'
// - Renamed export 'y' to 'syncConvBadgeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: app-chat-l0.9f4aaf6a.js
         * chunkId: 62317
         * moduleId: 102954
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationStateUpdate = require("conversation-state-update") /*id: 68767*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  let d = {};
  async function u(e, t, n) {
    conversationStateUpdate.updateConvBadgeState({
      conversationId: e,
      messageIndex: n,
      readMessageIndex: t,
      badgeCount: n,
      readBadgeCount: t,
      scene: "api"
    });
    await v(e)(t);
  }
  function c(e, t, n) {
    if (n === e) {
      u(e, t, t);
      return;
    }
    let i = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e];
    if (!n && chatConversationCheckers.isCocoConversation(i)) {
      u(e, t, t);
      return;
    }
    conversationStateUpdate.updateConvBadgeState({
      conversationId: e,
      messageIndex: t,
      badgeCount: t,
      scene: "sse"
    });
  }
  let v = e => {
    d[e] ||= debounceUtil_1_1.debounce(async t => {
      try {
        return (await aliceChatService.AliceChatService()).markConversationRead({
          conversation_id: e,
          latest_read_idx: t
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "report conversation read index failed",
          error: e
        });
      }
    }, 500);
    return d[e];
  };
  require.d(exports, {
    updateConvReadState: function () {
      return u;
    },
    syncConvBadgeState: function () {
      return c;
    }
  });
}