// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'updateConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 357351
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function l(e) {
    let t = e == null ? undefined : e.conversation_id;
    if (t) {
      chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(n => {
        let c = n.conversationMap[t];
        n.conversationMap[t] = {
          ...e,
          name: (e == null ? undefined : e.name) || (c == null ? undefined : c.name),
          icon_image: chatFeedStoreFactory.useFeedStore.getState().isOverallList && chatConversationCheckers.isCocoSubPlatform(e.conversation_type) ? (c == null ? undefined : c.icon_image) ?? e.icon_image : e == null ? undefined : e.icon_image,
          thread_source: c == null ? undefined : c.thread_source,
          extra: e.extra ?? (c == null ? undefined : c.extra),
          latest_artifact: (e == null ? undefined : e.latest_artifact) ?? (c == null ? undefined : c.latest_artifact)
        };
        n.lastMessageIndexMap[t] = {
          message_index: Number(e.message_index) || 0,
          read_message_index: Number(e.read_message_index) || 0,
          read_badge_count: Number(e.read_badge_count ?? e.read_message_index) || 0,
          badge_count: Number(e.badge_count ?? e.message_index) || 0
        };
      }));
    }
  }
  require.d(exports, {
    updateConversation: function () {
      return l;
    }
  });
}