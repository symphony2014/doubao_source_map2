// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'loadGuestThreadFeed'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-sidebar.44a62b07.js
         * chunkId: 42534
         * moduleId: 492515
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatConversationLinkUtils = require("chat-conversation-link-utils") /*id: 709080*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatLocalConversationCreator = require("chat-local-conversation-creator") /*id: 549663*/;
  async function p({
    isReload: e,
    isRefresh: t = false
  } = {}) {
    let {
      threadFeedStatus: n
    } = chatFeedStoreFactory.useFeedStore.getState();
    let p = eventReportingService.createEventReporter({
      eventName: "load_guest_thread_feed",
      meta: {
        isRefresh: t,
        isReload: e,
        isInit: !n.initiated
      }
    });
    chatFeedStoreFactory.useFeedStore.setState({
      threadFeedStatus: {
        ...n,
        loading: true,
        isReload: !!e
      }
    });
    try {
      let {
        data: e
      } = await asyncRetryUtils.asyncRetry(async () => (await aliceChatService.getAliceChatService()).getTouristConversationList(), 3, e => e * 1000);
      p.addDurationPoint("fetch_success");
      let {
        samantha_bot: y,
        main_thread: w,
        threads: C,
        can_create_thread: S,
        can_send_message: N,
        reply_limit: j
      } = e ?? {};
      let {
        thread_list: k = [],
        has_more: T,
        next_index: E
      } = C || {};
      if (w) {
        var f;
        chatConversationLinkManager.setMainConversationLink({
          conversationId: w.conversation?.conversation_id ?? "",
          conversationType: w.conversation?.conversation_type,
          threadId: w.thread_id_str ?? ((f = w.thread_id) === null || f === undefined ? undefined : f.toString()) ?? "",
          isLocalConversation: false
        });
      } else {
        let e = eventReportingService.createEventReporter({
          eventName: "create_main_conversation",
          meta: {
            from: "header"
          }
        });
        let t = chatCoreConstants.BotTypes.CocoWeb;
        let n = chatFeedStoreFactory.useFeedStore.getState().mainConversationLink;
        let o = chatLocalConversationCreator.createLocalConversation({
          reportEvent: e,
          conversation: {
            bot_id: y == null ? undefined : y.bot_id,
            conversation_type: t
          },
          conversationId: (n == null ? undefined : n.isLocalConversation) ? n == null ? undefined : n.conversationId : undefined
        });
        if (y == null ? undefined : y.bot_id) {
          let e = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
          if (e != null) {
            e.setLocalConversationIdForBot({
              botId: y.bot_id,
              localConversationId: o
            });
          }
        }
        chatConversationLinkManager.setMainConversationLink({
          conversationId: o,
          conversationType: t,
          threadId: chatConversationLinkUtils.buildThreadKey(o, "FirstEnter", "main"),
          isLocalConversation: true
        });
      }
      let I = [w == null ? undefined : w.conversation].concat(k.map(e => {
        if (e.conversation) {
          return {
            ...e.conversation,
            thread_id: e.thread_id_str ?? e.thread_id ?? ""
          };
        }
      })).filter(e => !isNullishCheck.isNil(e));
      await chatConversationLinkManager.updateConversationMap(I);
      let {
        conversationLinks: $
      } = chatFeedStoreFactory.useFeedStore.getState();
      let O = k.map(e => {
        var o;
        return {
          isLocalConversation: false,
          conversationId: String(e.conversation?.conversation_id ?? ""),
          conversationType: e.conversation?.conversation_type,
          threadId: e.thread_id_str ?? ((o = e.thread_id) === null || o === undefined ? undefined : o.toString()) ?? ""
        };
      });
      let R = n.initiated || chatFeedStoreFactory.useFeedStore.getState().threadFeedStatus.initiated ? $ : [];
      let M = chatConversationUtils_1.uniqConversations(t ? [...O, ...R] : [...R, ...O]);
      chatFeedStoreFactory.useFeedStore.setState(e => {
        return {
          conversationLinks: M,
          threadFeedStatus: {
            loading: false,
            failed: false,
            count: M.length,
            ...(t ? {
              hasMore: e.threadFeedStatus.hasMore
            } : {
              hasMore: T || false
            }),
            isReload: false,
            nextIndex: (E == null ? undefined : E.toString()) ?? "",
            initiated: true
          },
          chatNotReachLimitMap: {
            ...e.chatNotReachLimitMap,
            ...((w == null ? undefined : w.conversation?.conversation_id) ? {
              [w.conversation.conversation_id]: !!w.can_chat
            } : {}),
            ...k.reduce((e, t) => {
              let {
                conversation_id: o
              } = t.conversation ?? {};
              if (o) {
                e[o] = !!t.can_chat;
              }
              return e;
            }, {})
          },
          guestReachCreateThreadLimit: !S,
          guestReachSendMessageLimit: N === false,
          guestSendMessageLimit: parseInt(String(j ?? (N !== false) * 3), 10),
          samanthaBot: {
            samanthaBotInfo: y ?? {},
            isLazyCreate: w == null || !w.conversation
          }
        };
      });
      p.success();
      return I;
    } catch (e) {
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        threadFeedStatus: {
          ...e.threadFeedStatus,
          failed: true,
          loading: false
        }
      }));
      p.error({
        reason: "loadThreadFeed failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  }
  require.d(exports, {
    loadGuestThreadFeed: function () {
      return p;
    }
  });
}