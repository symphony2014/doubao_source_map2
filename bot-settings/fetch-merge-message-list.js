// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'fetchMergeMessageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2177.a6419d1f.js
         * chunkId: 2177
         * moduleId: 526849
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var validateNumericString = require("validate-numeric-string") /*id: 93601*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  let l = {
    value: ""
  };
  let u = async () => {
    let e = l.value || (await Promise.race([chatFgStoreHooks.fetchSourceKey("ab_config.ab_results.message_chain_batch_size", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: ""
    }).then(e => l.value = e || ""), promiseAsyncUtilities.createDelayedPromise(300).then(() => l.value)]));
    let [t, n] = (e == null ? undefined : e.split(",")) || [];
    if (validateNumericString.isValidNumber(t) && validateNumericString.isValidNumber(n)) {
      return {
        fetchMessageSize: Number(t),
        checkAvailableMessageSize: Number(n)
      };
    } else {
      return {
        fetchMessageSize: chatMessagingConstants.maxMessageLength,
        checkAvailableMessageSize: chatMessagingConstants.minRetryDelay
      };
    }
  };
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStateUpdater = require("chat-message-state-updater") /*id: 754205*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatLogIdExtractor = require("chat-log-id-extractor") /*id: 738448*/;
  var chatMessageProcessor = require("chat-message-processor") /*id: 891807*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  async function f(e) {
    let {
      conversationId: t,
      cursor: n,
      size: i,
      v2ApiExt: a
    } = e;
    if (n <= 0 || i <= 0 || !t || t === "0") {
      loggerServiceCore.defaultLogger.console.warning({
        message: "fetchUpdateMessageList: invalid cursor input",
        meta: {
          conversationId: t,
          cursor: n
        }
      });
      return;
    }
    try {
      let e = await (await chatMessageServiceModule.ChatMessageService()).getMessageList({
        conversation_id: t,
        cursor: n,
        batch_size: i,
        v2_api_ext: a
      });
      let {
        data: r
      } = e;
      let o = {
        from: chatCoreConstants.ChatSourceTypes.Api,
        logId: chatLogIdExtractor.getLogId(e)
      };
      return await chatMessageProcessor.processChatData({
        data: r,
        conversationId: t,
        localInfo: o
      });
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "fetchUpdateMessageList failed",
          error: e
        });
      }
      throw e;
    }
  }
  async function y(e) {
    let {
      conversationId: t,
      cursor: n,
      size: i,
      v2ApiExt: a,
      sizeThreshold: r
    } = e;
    let o = [];
    let l = 0;
    let u = n;
    let d = true;
    let v = false;
    while (d) {
      let e = await f({
        conversationId: t,
        cursor: u,
        size: i,
        v2ApiExt: a
      });
      o.push(e);
      d = false;
      if (!e) {
        v = false;
        return;
      }
      if (e.messages.length === i) {
        let t = e.messages.filter(chatMessageUtils_2.isVisibleStatus).length;
        if ((l += t) < (r || chatMessagingConstants.minRetryDelay)) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "fetch_enough_message_list_auto_load_more",
            meta: {
              fetch_size: e.messages.length,
              current_fetch_available_message_size: t,
              fetch_available_size: l,
              page_size: String(i),
              threshold: String(r || chatMessagingConstants.minRetryDelay)
            }
          });
          u -= i;
          d = true;
        }
      }
      if (d && o.length >= 5) {
        d = false;
        loggerServiceCore.defaultLogger.persist.warning({
          message: "fetchEnoughMessageList: break by maxTry",
          meta: {
            fetchAvailableSize: l
          }
        });
      }
      v = e.hasMore;
    }
    if (o.length === 1) {
      return o[0];
    } else {
      return o.reduceRight((e, t) => {
        if (t) {
          e.messageLinks = e.messageLinks.concat(t.messageLinks);
          e.messages = e.messages.concat(t.messages);
          e.regenerateList = e.regenerateList.concat(t.regenerateList);
        }
        return e;
      }, {
        messages: [],
        messageLinks: [],
        regenerateList: [],
        hasMore: v
      });
    }
  }
  async function h(e) {
    let {
      conversationId: t,
      cursor: n,
      actionName: i = "fetchMergeMessageList",
      range: a,
      size: r,
      createByLocalConversationId: o,
      v2ApiExt: l
    } = e;
    let {
      fetchMessageSize: _,
      checkAvailableMessageSize: v
    } = await u();
    let m = {
      conversationId: t,
      cursor: n,
      v2ApiExt: l,
      size: r || _ || chatMessagingConstants.maxMessageLength,
      sizeThreshold: r || v || chatMessagingConstants.minRetryDelay
    };
    try {
      let e = await y(m);
      if (!e) {
        return;
      }
      chatMessageStateUpdater.updateChatMessages({
        conversationId: t,
        fetchResult: e,
        mergeMessageLinksWithLocal: !!o,
        range: a
      });
      loggerServiceCore.defaultLogger.console.info({
        message: `${i} finish`,
        meta: {
          messages: e.messages,
          requestPayload: m
        }
      });
      return e.messageLinks;
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          message: `${i} failed`,
          error: e,
          meta: {
            request: m
          }
        });
      }
      throw e;
    }
  }
  require.d(exports, {
    fetchMergeMessageList: function () {
      return h;
    }
  });
}