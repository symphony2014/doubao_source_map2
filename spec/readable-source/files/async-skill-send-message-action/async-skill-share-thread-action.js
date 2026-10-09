// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'createShareThreadAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action.e6a2cf79.js
         * chunkId: 29547
         * moduleId: 310761
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var threadShareInfoService = require("thread-share-info-service") /*id: 190012*/;
  var chatTeaParamsExtractor = require("chat-tea-params-extractor") /*id: 938296*/;
  let p = e => {
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let h = chatTeaParamsExtractor.getBasicTeaParams(e.conversation_id ?? "");
    let {
      enterSelectMode: f,
      toggleMessage: g,
      findMessageByIndex: m
    } = chatMessageShareSelectStore.chatMessageShareSelectStore.getState();
    let v = Number(e.index);
    let y = (e == null ? undefined : e.skill?.skill_id_no_default) || "";
    let {
      run: C
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "thread_share_entry_click",
        meta: {
          conversationId: e.conversation_id || "",
          from: "answer-action-item"
        }
      });
      teaAnalyticsEventTracker.trackEvent("share_thread_click", {
        ...h,
        index: v,
        content_id: e.message_id,
        skill_id: y,
        entrance_type: "chat_thread"
      });
      let t = window.location.pathname;
      let {
        allowShare: n,
        data: r
      } = await threadShareInfoService.getThreadShareInfo(e.conversation_id || "", p);
      if (n && t === window.location.pathname) {
        f({
          scene: skillMessageActions.messageActions.Share,
          data: r,
          extraInfo: {
            entranceType: "chat_thread"
          }
        });
        g({
          conversationId: e.conversation_id || "",
          messageIndex: v,
          state: chatMessageStoreFactory.createMessageStore.getState()
        });
      }
    }, {
      leading: true,
      trailing: false
    });
    return C;
  };
  require.d(exports, {
    createShareThreadAction: function () {
      return p;
    }
  });
}