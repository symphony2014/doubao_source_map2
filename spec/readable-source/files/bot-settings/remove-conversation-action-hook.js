// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useRemoveConversationAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33961.76b04428.js
         * chunkId: 33961
         * moduleId: 541646
         */
module.exports = function (module, exports, require) {
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var conversationCleanupUtility = require("conversation-cleanup-utility") /*id: 130883*/;
  var removeConversationLink = require("remove-conversation-link") /*id: 914448*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var routeStoreHook = require("route-store-hook") /*id: 795456*/;
  let v = e => {
    let {
      conversationId: t,
      botId: n,
      exts: v
    } = e;
    let w = useNavigateRuntimeResolver.useNavigateResolver();
    let x = i18nTranslationUtils.useTranslationWithFallback();
    return [async () => {
      teaAnalyticsEventTracker.trackEvent("remove_chat", {
        bot_id: chatConversationBotId.getConversationBotId(t) || n,
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), t) || "other_default",
        click_from: v == null ? undefined : v.click_from,
        if_multiple: "0"
      });
      let e = eventReportingService.createEventReporter({
        eventName: "remove_conversation",
        meta: {
          from: v == null ? undefined : v.from,
          type: t ? "conversation" : "choiceness"
        }
      });
      try {
        if (t) {
          await aliceChatService.getAliceChatService().deleteConversation({
            conversation_ids: [t]
          });
          removeConversationLink.removeConvLink({
            conversationId: t
          });
          conversationCleanupUtility.deleteConversationData({
            conversationId: t
          });
        }
        let d = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
        if (d != null) {
          d.updateBot({
            bot_id: chatConversationBotId.getConversationBotId(t) || n,
            conversation_id: "",
            has_conversation: false,
            action: {
              action_type: chatEnumConstants.ConversationAction.CreateConversation,
              action_path: ""
            }
          });
        }
        e.success();
        if (t && chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId === t) {
          w(chatRouteConstants.routeChatRoot);
          routeStoreHook.routeStore.getState().setActiveKey(undefined);
        }
      } catch (t) {
        dbxSonnerToasterWrapper.dbxToastAPI.error(x("web_toast_deleteChat_fail"));
        e.error({
          error: t,
          reason: "remove conversation or bot fail"
        });
      }
    }];
  };
  require.d(exports, {
    useRemoveConversationAction: function () {
      return v;
    }
  });
}