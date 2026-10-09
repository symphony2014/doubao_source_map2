// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'changeBotVisibility'
// - Renamed export 'b' to 'updateBotProfile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 681495
         */
module.exports = function (module, exports, require) {
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var conversationInfoLoader = require("conversation-info-loader") /*id: 240412*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatApiErrorHandler = require("chat-api-error-handler") /*id: 374853*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let u = async (e, t) => {
    let {
      bot_id: n
    } = e;
    let o = eventReportingService.createEventReporter({
      eventName: "update_bot_profile",
      meta: {
        bot_id: n
      }
    });
    if (n) {
      o.addDurationPoint("start");
      try {
        await apiServicesCollection.AliceBotApiService.UpdateBot(e);
        let a = await apiServicesCollection.AliceBotApiService.GetBotListV2({
          bot_id_list: [n],
          scene: "default"
        });
        o.addDurationPoint("success");
        o.success();
        if (t) {
          conversationInfoLoader.getConversationInfo(t, "updateBotInfo");
        } else if (a == null ? undefined : a.data?.length) {
          botStoreManager.botStore.getState().updateBot(a == null ? undefined : a.data[0]);
        }
      } catch (t) {
        o.error({
          reason: "update_bot_failed",
          error: t
        });
        let e = i18nTranslationUtils.i18nextTranslate("edit_bot_failed");
        if (chatApiErrorHandler.validateChatError(t)) {
          e = (t == null ? undefined : t.errorOption?.message) ?? "";
        }
        semiToastNotification.toastInstance.error({
          content: e,
          showClose: false
        });
        throw Error(t);
      }
    }
  };
  let h = async (e, t, n) => {
    try {
      teaAnalyticsEventTracker.trackEvent("change_bot_visible_status", {
        to_status: t
      });
      await u({
        bot_id: e,
        private_status: t
      }, n);
    } catch (e) {}
  };
  require.d(exports, {
    changeBotVisibility: function () {
      return h;
    },
    updateBotProfile: function () {
      return u;
    }
  });
}