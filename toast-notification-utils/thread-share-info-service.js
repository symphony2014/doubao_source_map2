// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CP' to 'getThreadShareInfo'
// - Renamed export 'bg' to 'detectPlatform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 190012
         */
module.exports = function (module, exports, require) {
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let d = e => e ? e.startsWith("w") ? "web" : e.startsWith("c") ? "web_collection" : e.startsWith("d") ? "desktop" : "mobile" : undefined;
  let u = async (e, t) => {
    let u = eventReportingService.createEventReporter({
      eventName: "get_thread_share_info"
    });
    if (!e) {
      samanthaToastFactory.defaultToast.error({
        content: t("notification_system_error_toast"),
        showClose: false,
        theme: "light"
      });
      u.error({
        reason: "GetThreadShareInfo empty conversationId"
      });
      return {
        allowShare: false
      };
    }
    let h = chatConversationSelectorUtils.getConversationThreadId(e);
    try {
      let {
        code: r,
        data: a
      } = await (await aliceChatService.AliceChatService()).getThreadShareInfo(h ? {
        thread_id: h,
        conversation_id: e
      } : {
        conversation_id: e
      });
      if ((a == null ? undefined : a.share_info?.review_status) === chatAppEnums.ReviewStatus.Reject) {
        samanthaToastFactory.defaultToast.error({
          content: t("share_compliance_failed"),
          showClose: false,
          theme: "light"
        });
        u.success({
          meta: {
            review_status: chatAppEnums.ReviewStatus.Reject
          }
        });
        return {
          allowShare: false
        };
      }
      u.success({
        meta: {
          code: r
        }
      });
      return {
        data: a,
        allowShare: true
      };
    } catch (e) {
      if (apiErrorChecker.isApiError(e) && Number(e == null ? undefined : e.errorOption?.code) === chatErrorCodes.chatErrorCodes.CONVERSATION_MESSAGE_OVER_LIMIT) {
        samanthaToastFactory.defaultToast.error({
          content: t("share_preview_error_exceedlimit"),
          showClose: false,
          theme: "light"
        });
        u.success({
          meta: {
            code: chatErrorCodes.chatErrorCodes.CONVERSATION_MESSAGE_OVER_LIMIT
          }
        });
        return {
          allowShare: false
        };
      }
      samanthaToastFactory.defaultToast.error({
        content: t("notification_system_error_toast"),
        showClose: false,
        theme: "light"
      });
      u.error({
        reason: "GetThreadShareInfo failed",
        error: e
      });
      return {
        allowShare: false
      };
    }
  };
  require.d(exports, {
    getThreadShareInfo: function () {
      return u;
    },
    detectPlatform: function () {
      return d;
    }
  });
}