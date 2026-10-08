// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'loadThreadList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 145280
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var validateNumericString = require("validate-numeric-string") /*id: 93601*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  async function c({
    index: e,
    size: t,
    isReload: n,
    isRefresh: c = false
  } = {}) {
    let {
      threadListStatus: u
    } = chatFeedStoreFactory.useFeedStore.getState();
    let h = eventReportingService.createEventReporter({
      eventName: "load_thread_list",
      meta: {
        isRefresh: c,
        isReload: n,
        size: t,
        index: e,
        isInit: !u.initiated
      }
    });
    chatFeedStoreFactory.useFeedStore.setState({
      threadListStatus: {
        ...u,
        loading: true,
        isReload: !!n
      }
    });
    try {
      let {
        data: n
      } = await asyncRetryUtils.asyncRetry(() => apiServicesCollection.SamanthaApiService.ThreadList({
        index: e && validateNumericString.isValidNumber(e) ? Number(e) : undefined,
        batch_size: t
      }), 3, e => e * 1000);
      h.addDurationPoint("fetch_success");
      let {
        thread_list: o = [],
        has_more: f,
        next_index: m
      } = n || {};
      let v = o.map(e => e.conversation ? {
        ...e.conversation,
        thread_source: e.thread_source,
        thread_id: e.thread_id_str || e.thread_id
      } : undefined).filter(e => !isNullishCheck.isNil(e));
      await chatConversationLinkManager.updateConversationMap(v);
      let p = chatConversationLinkManager.normalizeThreadLinks(o, {
        append: !c,
        ignoreOld: !u.initiated && !chatFeedStoreFactory.useFeedStore.getState().threadFeedStatus.initiated
      });
      chatConversationLinkManager.setBotConversationLinks(p);
      chatFeedStoreFactory.useFeedStore.setState(e => {
        return {
          threadListStatus: {
            loading: false,
            failed: false,
            count: p.length,
            ...(c ? {
              hasMore: e.threadListStatus.hasMore
            } : {
              hasMore: f || false
            }),
            isReload: false,
            nextIndex: (m == null ? undefined : m.toString()) ?? "",
            initiated: true
          }
        };
      });
      h.success();
      return v;
    } catch (n) {
      chatFeedStoreFactory.useFeedStore.setState(e => ({
        threadListStatus: {
          ...e.threadListStatus,
          failed: true,
          loading: false
        }
      }));
      h.error({
        reason: `loadThreadList failed size:${t} index:${e}`,
        error: n instanceof Error ? n : Error(String(n))
      });
      throw n;
    }
  }
  require.d(exports, {
    loadThreadList: function () {
      return c;
    }
  });
}