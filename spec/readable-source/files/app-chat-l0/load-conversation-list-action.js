// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'loadConversationList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 121268
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  async function c({
    index: e,
    isReload: t,
    isRefresh: n,
    pcPinQueryType: c
  } = {}) {
    let {
      overallListStatus: u,
      samanthaBot: h
    } = chatFeedStoreFactory.useFeedStore.getState();
    let f = eventReportingService.createEventReporter({
      eventName: "load_overall_list",
      meta: {
        isRefresh: n,
        isReload: t,
        isInit: !u.initiated
      }
    });
    chatFeedStoreFactory.useFeedStore.setState({
      overallListStatus: {
        ...u,
        loading: true,
        isReload: !!t
      }
    });
    try {
      let {
        data: t
      } = await asyncRetryUtils.asyncRetry(async () => (await aliceChatService.AliceChatService()).getConversationList({
        cursor: e,
        batch_size: 20,
        pc_pin_query_type: c
      }), 3, e => e * 1000);
      f.addDurationPoint("fetch_success");
      let {
        thread_list: a = [],
        has_more: m,
        next_cursor: v,
        samantha_bot: p,
        pc_pin_query_type: g
      } = t || {};
      let _ = a.map(e => {
        var n;
        if (e.conversation) {
          return {
            ...e.conversation,
            thread_source: e.thread_source,
            conversation_type: e.conversation?.conversation_type,
            thread_id: e.thread_id_str ?? ((n = e.thread_id) === null || n === undefined ? undefined : n.toString()) ?? ""
          };
        } else {
          return undefined;
        }
      }).filter(e => !isNullishCheck.isNil(e));
      await chatConversationLinkManager.updateConversationMap(_);
      let {
        conversationLinks: x
      } = chatFeedStoreFactory.useFeedStore.getState();
      let b = a.map(e => {
        var r;
        return {
          isLocalConversation: false,
          conversationId: String(e.conversation?.conversation_id ?? ""),
          conversationType: e.conversation?.conversation_type,
          threadId: e.thread_id_str ?? ((r = e.thread_id) === null || r === undefined ? undefined : r.toString()) ?? ""
        };
      });
      let w = u.initiated || chatFeedStoreFactory.useFeedStore.getState().overallListStatus.initiated ? x : [];
      let y = chatConversationUtils_1.uniqConversations(n ? [...b, ...w] : [...w, ...b]);
      chatFeedStoreFactory.useFeedStore.setState(e => {
        return {
          conversationLinks: y,
          overallListStatus: {
            loading: false,
            failed: false,
            count: _.length,
            ...(n ? {
              hasMore: e.overallListStatus.hasMore
            } : {
              hasMore: m || false
            }),
            isReload: false,
            nextIndex: (v == null ? undefined : v.toString()) ?? "",
            initiated: true,
            pcPinQueryType: g
          },
          samanthaBot: {
            samanthaBotInfo: {
              ...p,
              id: String(p == null ? undefined : p.id)
            },
            isLazyCreate: h.isLazyCreate
          }
        };
      });
      f.success();
      return _;
    } catch (e) {
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        overallListStatus: {
          ...e.overallListStatus,
          failed: true,
          loading: false
        }
      }));
      f.error({
        reason: "loadOverallList failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  }
  require.d(exports, {
    loadConversationList: function () {
      return c;
    }
  });
}