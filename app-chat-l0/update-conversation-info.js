// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'updateConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 914918
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e) {
    let t = e == null ? undefined : e.conversation_id;
    if (!e || !t) {
      loggerServiceCore.defaultLogger.persist.warning({
        message: "invalid conversationInfo to update",
        meta: {
          conversation_id: t
        }
      });
      return;
    }
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(s => {
      let a = s.conversationMap[t];
      s.conversationMap[t] = {
        ...a,
        ...e,
        name: (e == null ? undefined : e.name) || (a == null ? undefined : a.name),
        extra: e.extra ?? (a == null ? undefined : a.extra)
      };
      if (t && e.badge_count && e.read_badge_count) {
        s.lastMessageIndexMap[t] = {
          message_index: Number(e.message_index) || 0,
          read_message_index: Number(e.read_message_index) || 0,
          read_badge_count: Number(e.read_badge_count ?? e.read_message_index) || 0,
          badge_count: Number(e.badge_count ?? e.message_index) || 0
        };
      }
    }));
  }
  require.d(exports, {
    updateConversation: function () {
      return a;
    }
  });
}