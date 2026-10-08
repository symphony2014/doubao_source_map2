// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'loadConversationList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47840.01121ae4.js
         * chunkId: 47840
         * moduleId: 707686
         */
module.exports = function (module, exports, require) {
  var ensureArrayUtil = require("ensure-array-util") /*id: 782739*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationConstants = require("chat-conversation-constants") /*id: 730433*/;
  var loadThreadListService = require("load-thread-list-service") /*id: 145280*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  async function v() {
    var e;
    var i;
    let {
      isReload: l,
      isRefresh: v = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let {
      threadFeedStatus: m
    } = chatFeedStoreFactory.useFeedStore.getState();
    let h = eventReportingService.createEventReporter({
      eventName: "load_thread_feed",
      meta: {
        isRefresh: v,
        isReload: l,
        isInit: !m.initiated,
        call_chain: (e = Error("trace").stack) === null || e === undefined ? undefined : e.split("\n").slice(1, 8).map(e => {
          var t;
          var n;
          if (e == null) {
            return undefined;
          } else if ((n = e.trim()) === null || n === undefined) {
            return undefined;
          } else if ((t = n.replace(/^at /, "- ")) === null || t === undefined) {
            return undefined;
          } else {
            return t.replace(/\(http.*\/static\/js\//, "(/static/js/");
          }
        }).join("\n")
      }
    });
    chatFeedStoreFactory.useFeedStore.setState({
      threadFeedStatus: {
        ...m,
        loading: true,
        isReload: !!l
      }
    });
    try {
      let {
        data: e
      } = await asyncRetryUtils.asyncRetry(async () => (await aliceChatService.AliceChatService()).getFeed(), 3, e => e * 1000);
      h.addDurationPoint("fetch_success");
      let {
        threads: s,
        main_thread: l
      } = e || {};
      let {
        thread_list: p = [],
        has_more: _,
        next_index: S
      } = s || {};
      if (l) {
        chatConversationLinkManager.setMainConversationLink({
          conversationId: l.conversation?.conversation_id ?? "",
          conversationType: l.conversation?.conversation_type,
          threadId: l.thread_id_str ?? ((i = l.thread_id) === null || i === undefined ? undefined : i.toString()) ?? "",
          isLocalConversation: false
        });
      }
      let M = [l == null ? undefined : l.conversation].concat(p.map(e => e.conversation ? {
        ...e.conversation,
        thread_source: e.thread_source,
        thread_id: e.thread_id_str || e.thread_id
      } : undefined)).filter(e => !isNullishCheck.isNil(e));
      await chatConversationLinkManager.updateConversationMap(M);
      let y = chatConversationLinkManager.normalizeThreadLinks(p, {
        append: false,
        ignoreOld: !m.initiated && !chatFeedStoreFactory.useFeedStore.getState().threadListStatus.initiated
      });
      chatConversationLinkManager.setBotConversationLinks(y);
      chatFeedStoreFactory.useFeedStore.setState(e => {
        return {
          threadFeedStatus: {
            loading: false,
            failed: false,
            count: y.length,
            ...(v ? {
              hasMore: e.threadFeedStatus.hasMore
            } : {
              hasMore: _ || false
            }),
            isReload: false,
            nextIndex: (S == null ? undefined : S.toString()) ?? "",
            initiated: true
          }
        };
      });
      h.success();
      return M;
    } catch (e) {
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        threadFeedStatus: {
          ...e.threadFeedStatus,
          failed: true,
          loading: false
        }
      }));
      h.error({
        reason: "loadThreadFeed failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  }
  var loadConversationListAction = require("load-conversation-list-action") /*id: 121268*/;
  var loadGuestThreadFeedService = require("load-guest-thread-feed-service") /*id: 492515*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatParticipantTypes = require("chat-participant-types") /*id: 437956*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  async function M(e) {
    let {
      index: t,
      size: n,
      isReload: i,
      isRefresh: r
    } = e;
    let {
      conversationListStatus: a
    } = chatFeedStoreFactory.useFeedStore.getState();
    let u = eventReportingService.createEventReporter({
      eventName: "load_bot_conversation_list",
      meta: {
        isRefresh: r,
        isReload: i,
        size: n,
        index: t,
        isInit: !a.initiated
      }
    });
    let l = chatConversationLinkManager.getBotConversationLinks();
    let c = !r && t === 0;
    chatFeedStoreFactory.useFeedStore.setState({
      conversationListStatus: {
        ...a,
        loading: true,
        isReload: !!i
      }
    });
    try {
      let {
        data: e
      } = await asyncRetryUtils.asyncRetry(() => apiServicesCollection.AliceConversationApiService.ConversationList({
        index: t,
        batch_size: n,
        conversation_types: [chatParticipantTypes.participantTypes.Bot]
      }), 3, e => e * 1000);
      u.addDurationPoint("fetch_success");
      let {
        conversation_list: i = [],
        has_more: a
      } = e || {};
      await chatConversationLinkManager.updateConversationMap(i);
      let s = i.map(e => ({
        isLocalConversation: false,
        conversationId: e.conversation_id || "",
        conversationType: e == null ? undefined : e.conversation_type
      })).filter(Boolean);
      let f = chatConversationUtils_1.uniqConversations(r ? [...s, ...l] : [...(c ? [] : l), ...s]);
      chatConversationLinkManager.appendConversationLinks(f);
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        conversationListStatus: {
          loading: false,
          failed: false,
          count: f.length,
          ...(r ? {
            hasMore: e.conversationListStatus.hasMore
          } : {
            hasMore: a || false
          }),
          isReload: false,
          initiated: true
        }
      }));
      u.success();
      return i;
    } catch (e) {
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        conversationListStatus: {
          ...e.conversationListStatus,
          failed: true,
          loading: false
        }
      }));
      u.error({
        reason: `loadBotConversationList failed size:${n} index:${t}`,
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  }
  async function y(e) {
    let {
      type: c = [chatConversationConstants.conversationScope.Feed, chatConversationConstants.conversationScope.Thread, chatConversationConstants.conversationScope.Bot],
      ...d
    } = e;
    let g = ensureArrayUtil.ensureArray(c);
    let f = eventReportingService.createEventReporter({
      eventName: "load_conversation_list",
      meta: {
        type: g.join(","),
        isRefresh: d.isRefresh,
        isReload: d.isReload,
        isInit: !d.isRefresh && d.index === 0,
        size: d.size,
        index: d.index,
        has_cache: chatFeedStoreFactory.useFeedStore.getState().conversationLinks?.length || chatFeedStoreFactory.useFeedStore.getState().mainConversationLink?.conversationId ? "1" : "0"
      }
    });
    let p = g.map(e => {
      switch (e) {
        case chatConversationConstants.conversationScope.Bot:
          return M(d);
        case chatConversationConstants.conversationScope.Feed:
          return v(d);
        case chatConversationConstants.conversationScope.Thread:
          return loadThreadListService.loadThreadList({
            ...d,
            index: undefined
          });
        case chatConversationConstants.conversationScope.Guest:
          return loadGuestThreadFeedService.loadGuestThreadFeed(d);
        case chatConversationConstants.conversationScope.Overall:
          return loadConversationListAction.loadConversationList({
            ...d,
            index: undefined
          });
        default:
          return Promise.resolve([]);
      }
    });
    try {
      let e = await Promise.all(p);
      f.success();
      return arrayUniqByMatcher.uniqByMatcher(safeArrayFlattenUtil.safeFlattenArray(e), "conversation_id");
    } catch (e) {
      f.error({
        reason: `loadConversationList failed size:${d.size} index:${d.index} type:${g.join(",")}`,
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  }
  require.d(exports, {
    loadConversationList: function () {
      return y;
    }
  });
}