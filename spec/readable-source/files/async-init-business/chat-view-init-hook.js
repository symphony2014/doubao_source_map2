// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'useChatViewInit'
// - Renamed export 'w' to 'createChatHelpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 481960
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLocalConversationCreator = require("chat-local-conversation-creator") /*id: 549663*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationCreationAndMonitoring = require("conversation-creation-and-monitoring") /*id: 236233*/;
  let f = e => {
    let {
      chatId: t,
      chatType: n,
      navigate: i
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    return {
      localThreadSendMessage: conversationCreationAndMonitoring.createConversationMessages({
        chatType: n
      }),
      sendMessageHelper: () => {
        let e = t || chatLocalConversationCreator.createLocalConversation({
          reportEvent: eventReportingService.createEventReporter({
            eventName: "create_conversation",
            meta: {
              from: "header"
            }
          }),
          conversation: {
            conversation_type: chatCoreConstants.BotTypes.CocoWebSub,
            name: l("sidebar_newChat_placeholder")
          },
          conversationId: t
        });
        return {
          resolveLocalConversationId: e,
          toNewChat: function (n) {
            let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            let a = arguments.length > 2 ? arguments[2] : undefined;
            setTimeout(() => {
              if (r) {
                chatStoreManager.getStore("chatInputStore").getState().updateHidePopoverWhenMount(t, true);
              }
              let l = new URLSearchParams({
                ...a,
                type: `${chatConversationTypes.ConversationTypes.ThreadLocalConversation}`
              });
              if (i != null) {
                i(`/chat/${e}?${l.toString()}`, {
                  replace: n
                });
              }
            }, 100);
          }
        };
      }
    };
  };
  let m = e => {
    let {
      chatId: t,
      chatType: n,
      eventPrefix: r = "new_thread_view",
      navigate: o
    } = e;
    let {
      chatInputRef: s
    } = chatRefsContext.useChatRefs();
    reactCoreLibraryReexport.useEffect(() => {
      if (!userAgentDeviceDetector.isMobileOrIOS()) {
        var e;
        if ((e = s.current) !== null && e !== undefined) {
          e.focus();
        }
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${r}_show`,
        meta: {
          localConversationId: t
        }
      });
      return () => {
        if (!t) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: `${r}_without_localConversationId`
          });
        }
      };
    }, []);
    return f({
      chatId: t,
      chatType: n,
      navigate: o
    });
  };
  require.d(exports, {
    useChatViewInit: function () {
      return m;
    },
    createChatHelpers: function () {
      return f;
    }
  });
}