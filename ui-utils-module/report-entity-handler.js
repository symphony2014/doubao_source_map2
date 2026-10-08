// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'createReportHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43303.e49d7dff.js
         * chunkId: 43303
         * moduleId: 66345
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var entityTypes = require("entity-types") /*id: 1744*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let c = e => {
    let {
      exts: t,
      messageId: o,
      conversationId: c,
      entityId: u,
      locationState: v,
      batchMessageIds: p = []
    } = e;
    let f = chatConversationBotId.getConversationBotId(c) || u;
    let b = (v == null ? undefined : v.enter_from) === "bot_discover";
    let m = chatToastFactoryHook.useToastFactory();
    return async (e, r) => {
      let k = eventReportingService.createEventReporter({
        eventName: `${o ? "message" : "bot"}-report`
      });
      let g = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      if (!u) {
        teaAnalyticsEventTracker.trackEvent("report_entity_id", {
          conversationId: c
        });
        return m.error("entity_id is empty");
      }
      if (!f) {
        teaAnalyticsEventTracker.trackEvent("report_bot_id", {
          conversationId: c
        });
        return m.error("bot_id is empty");
      }
      let h = {
        report_type: o ? (t == null ? undefined : t.isLyricMusic) ? entityTypes.EntityTypes.MusicCard : entityTypes.EntityTypes.Message : entityTypes.EntityTypes.Bot,
        entity_id: u,
        reason_ids: [e],
        reason_detail: r,
        batch_message_ids: (p == null ? undefined : p.length) ? p : [o ?? ""]
      };
      if (o) {
        teaAnalyticsEventTracker.trackEvent("complete_report_reason", {
          bot_id: f,
          message_id: o,
          click_from: (t == null ? undefined : t.isLastAnswer) ? "answer" : "long_press_answer",
          user_id: b ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: b && f ? g == null ? undefined : g.getBotIdToRequestIdMap()?.[f] : undefined,
          recommend_from: b ? "bot_list_discover" : undefined
        });
      }
      if (!o) {
        teaAnalyticsEventTracker.trackEvent("complete_report_bot_reason", {
          bot_id: f,
          user_id: b ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: b && f ? g == null ? undefined : g.getBotIdToRequestIdMap()?.[f] : undefined,
          recommend_from: b ? "bot_list_discover" : undefined
        });
      }
      try {
        await apiServicesCollection.AliceApiService.Report(h);
        k.success();
      } catch (e) {
        k.error({
          error: e,
          reason: "Report Api Error"
        });
      }
    };
  };
  require.d(exports, {
    createReportHandler: function () {
      return c;
    }
  });
}