// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useConversationCreation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35717.99bb3c36.js
         * chunkId: 35717
         * moduleId: 134036
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routeStoreHook = require("route-store-hook") /*id: 795456*/;
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatModeEnums = require("chat-mode-enums") /*id: 524078*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  function v(e, t, o = false) {
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(n => {
      if (o && (t == null ? undefined : t.conversation_id)) {
        n.localConversationMap[t.conversation_id] = {
          ...t
        };
        delete n.localConversationMap[e];
        return;
      }
      Object.assign(n.localConversationMap[e] || {}, t);
    }));
  }
  var chatConversationUpdateHandler = require("chat-conversation-update-handler") /*id: 701589*/;
  var chatConversationLinkInsert = require("chat-conversation-link-insert") /*id: 146291*/;
  async function y(e) {
    let {
      token: t,
      botId: o,
      conversationId: n,
      localConversationId: i,
      messageId: r,
      scene: _ = chatModeEnums.ChatScene.Default,
      createFrom: y
    } = e;
    let h = chatFeedStoreFactory.useFeedStore.getState().localConversationMap[i];
    if (!(h == null ? undefined : h.local)) {
      return;
    }
    let {
      local: {
        reportEvent: g
      }
    } = h;
    try {
      let e;
      v(i, {
        local: {
          createStatus: chatStatusConstants_1.ChatStatus.Creating,
          createFrom: y
        }
      });
      if (t) {
        e = (await (await aliceChatService.AliceChatService()).conversationInfoAddBot({
          token: t
        }))?.data;
      } else if (o) {
        e = (await (await aliceChatService.AliceChatService()).getConversationInfo({
          bot_id: o
        }))?.data;
      } else if (n) {
        e = (await apiServicesCollection.AliceConversationApiService.CreateSubConversation({
          conversation_id: n,
          message_id: r,
          scene: _
        }))?.data;
      }
      let s = e == null ? undefined : e.conversation?.conversation_id;
      if (s && e) {
        chatConversationUpdateHandler.updateConversationInfo(e);
        v(i, {
          local: {
            createStatus: chatStatusConstants_1.ChatStatus.Done,
            newConversationId: s,
            createFrom: y
          }
        });
        if (chatFeedStoreFactory.useFeedStore.getState().conversationListStatus.loading) {
          let e = chatFeedStoreFactory.useFeedStore.subscribe(e => ({
            conversationListStatus: e.conversationListStatus
          }), t => {
            let {
              conversationListStatus: o
            } = t;
            if (!o.loading) {
              if (e != null) {
                e();
              }
              chatConversationLinkInsert.insertConversationLink({
                conversationId: s,
                index: 1
              });
            }
          }, {
            fireImmediately: true,
            equalityFn: deepEqualityUtil_1.isDeepEqual
          });
        } else {
          chatConversationLinkInsert.insertConversationLink({
            conversationId: s,
            index: 1
          });
        }
      } else {
        throw Error("Expect newConversationId, but not found");
      }
      if (g != null) {
        g.addDurationPoint("success");
      }
      if (g != null) {
        g.success();
      }
      return e.conversation;
    } catch (e) {
      v(i, {
        local: {
          createStatus: chatStatusConstants_1.ChatStatus.Failed
        }
      });
      if (g != null) {
        g.error({
          error: e instanceof Error ? e : Error(String(e)),
          reason: "create_conversation_error"
        });
      }
      throw e;
    }
  }
  var chatLocalConversationCreator = require("chat-local-conversation-creator") /*id: 549663*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatApiErrorHandler = require("chat-api-error-handler") /*id: 374853*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => {
    let {
      onClick: t,
      text: o
    } = e;
    return semiToastNotification.toastInstance.error({
      content: reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          children: o
        }), reactJsxRuntimeCoreReexport.jsx("a", {
          className: "retry-button-yW02a8",
          onClick: t,
          children: i18nTranslationUtils.i18nextTranslate("retry")
        })]
      }),
      duration: 8,
      showClose: true
    });
  };
  let L = function (e = {}) {
    let t = reactCoreLibraryReexport.useRef();
    let o = i18nTranslationUtils.useTranslationWithFallback();
    return {
      initCreateConversation: n => {
        let {
          conversationId: a,
          messageId: l,
          token: s,
          botId: c,
          localConversationId: u,
          localConversationInfo: _,
          reportProps: v,
          scene: p,
          createFrom: f,
          click_from: m = e.click_from
        } = n;
        let I = eventReportingService.createEventReporter(v);
        let L = u || chatLocalConversationCreator.createLocalConversation({
          reportEvent: I,
          conversation: _,
          conversationId: u
        });
        if (c) {
          botStoreManager.botStore.getState().setLocalConversationIdForBot({
            botId: c,
            localConversationId: L
          });
        }
        let B = e => {
          if (t.current) {
            semiToastNotification.toastInstance.close(t.current);
          }
          if (a) {
            let t = chatFeedStoreFactory.useFeedStore.getState().conversationMap[a];
            if (!t || !chatConversationCheckers.isCocoConversation(t)) {
              let t = Error("expect coco conversation but not found");
              e.error({
                error: t,
                reason: "non_coco_conversation"
              });
              semiToastNotification.toastInstance.error({
                content: o("system_error_toast"),
                showClose: false
              });
              return Promise.reject(t);
            }
            teaAnalyticsEventTracker.trackEvent("create_new_chat", {
              click_from: m,
              conversation_id: a,
              bot_id: t.bot_id
            });
          }
          return y({
            conversationId: a,
            messageId: l,
            localConversationId: L,
            token: s,
            botId: c,
            scene: p,
            createFrom: f
          }).then(e => {
            routeStoreHook.routeStore.getState().setActiveKey(undefined);
            return e;
          }).catch(e => {
            let r = o("create_new_chat_failed");
            if (chatApiErrorHandler.validateChatError(e) && (e == null ? undefined : e.errorOption?.message)) {
              r = e == null ? undefined : e.errorOption?.message;
            }
            apiErrorChecker.isApiError;
            t.current = T({
              text: r,
              onClick: () => {
                B(eventReportingService.createEventReporter({
                  eventName: v.eventName,
                  meta: {
                    ...v.meta,
                    retry: true
                  }
                }));
              }
            });
            throw e;
          });
        };
        return {
          newLocalConversationId: L,
          createConversationForBot: () => B(I)
        };
      }
    };
  };
  require.d(exports, {
    useConversationCreation: function () {
      return L;
    }
  });
}