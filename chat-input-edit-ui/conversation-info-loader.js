// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'getConversationInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 240412
         */
module.exports = function (module, exports, require) {
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConversationUpdateHandler = require("chat-conversation-update-handler") /*id: 701589*/;
  async function d(e, t) {
    let {
      prevActiveConversationId: u,
      mainConversationLink: h,
      localConversationMap: f
    } = chatFeedStoreFactory.useFeedStore.getState();
    let p = eventReportingService.createEventReporter({
      eventName: "load_conversation_info",
      meta: {
        cold_start: !u,
        conversation_id: e,
        main_conversation_id: h == null ? undefined : h.conversationId,
        scene: t
      }
    });
    if (f[e]?.local) {
      p.error({
        reason: "local_conversation_id",
        error: Error("local_conversation_id")
      });
      return;
    }
    try {
      let {
        data: t
      } = await asyncRetryUtils.asyncRetry(async () => (await aliceChatService.AliceChatService()).getConversationInfo({
        conversation_id: e,
        ext: u ? undefined : {
          cold_start: "true"
        }
      }).then(e => {
        var n;
        if (!((n = e.data) === null || n === undefined ? undefined : n.conversation?.conversation_id)) {
          throw Error("invalid conversationInfo");
        }
        return e;
      }), 3, e => e * 500, e => {
        if (apiErrorChecker.isApiError(e) && String(e == null ? undefined : e.errorOption?.code) === "710012002") {
          chatEventEmitter.chatEmitter.emit("chat.user.logoutToSignIn");
          throw e;
        }
      });
      let {
        conversation: n
      } = t || {};
      if (!t) {
        throw Error("updateConversationInfo: invalid data from api");
      }
      p.addDurationPoint("success");
      p.success();
      await chatConversationUpdateHandler.updateConversationInfo(t);
      return n;
    } catch (t) {
      p.error({
        reason: "load_conversation_info_failed",
        error: t,
        meta: {
          latest_main_conversation_id: chatFeedStoreFactory.useFeedStore.getState().mainConversationLink?.conversationId,
          is_in_conversation_map: chatFeedStoreFactory.useFeedStore.getState().conversationMap[e] ? "1" : "0"
        }
      });
      throw t;
    }
  }
  require.d(exports, {
    getConversationInfo: function () {
      return d;
    }
  });
}