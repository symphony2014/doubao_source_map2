// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'updateConvBadgeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 68767
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e) {
    let {
      conversationId: t,
      messageIndex: s,
      readMessageIndex: a,
      badgeCount: o = s,
      readBadgeCount: l = a,
      scene: c
    } = e;
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(e => {
      let i = e.lastMessageIndexMap[t];
      if (!i) {
        loggerServiceCore.defaultLogger.persist.info("lastMessageIndex is undefined");
        e.lastMessageIndexMap[t] = {
          read_badge_count: l,
          badge_count: o,
          message_index: s,
          read_message_index: a
        };
        return;
      }
      if (o && Number(i.badge_count) < o) {
        i.badge_count = o;
      }
      if (s && Number(i.message_index) < s) {
        i.message_index = s;
      }
      if (l && Number(i.read_badge_count) < l) {
        i.read_badge_count = l;
      }
      if (a && Number(i.read_message_index) < a) {
        i.read_message_index = a;
      }
      if (o && Number(i.badge_count) < o && l && Number(i.read_badge_count) < l) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "red_dot_state_update",
          meta: {
            readBadgeCount: l,
            badgeCount: o,
            scene: c
          }
        });
      }
    }));
  }
  require.d(exports, {
    updateConvBadgeState: function () {
      return a;
    }
  });
}