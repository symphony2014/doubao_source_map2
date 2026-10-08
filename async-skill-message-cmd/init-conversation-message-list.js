// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'initMessageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 767528
         */
module.exports = function (module, exports, require) {
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var updateSuggestMessageMap = require("update-suggest-message-map") /*id: 338448*/;
  var fetchMergeMessageList = require("fetch-merge-message-list") /*id: 526849*/;
  var createChatMessageUpdaterFactory = require("create-chat-message-updater-factory") /*id: 388719*/;
  let u = async e => {
    let {
      conversationId: n,
      messageIndex: r,
      range: c,
      size: u,
      createByLocalConversationId: h,
      v2ApiExt: f
    } = e;
    let m = (await fetchMergeMessageList.fetchMergeMessageList({
      conversationId: n,
      cursor: r,
      size: u,
      range: c,
      createByLocalConversationId: h,
      v2ApiExt: f
    })) ?? [];
    if (m.length === 0) {
      loggerServiceCore.defaultLogger.persist.warning({
        message: "initMessageList empty",
        meta: {
          messageIndex: r
        }
      });
    }
    (function (e) {
      let {
        conversationId: t
      } = e;
      let n = chatMessageStoreFactory.createMessageStore.getState();
      let {
        lastAvailableMessage: r
      } = conversationMessageUtils_1.getLastMessageInfo(n, t);
      if (r) {
        updateSuggestMessageMap.setSuggestMessage(t, e => {
          try {
            if (!(r == null ? undefined : r.reply_id)) {
              return e;
            }
            let t = JSON.parse(r.ext?.sp || "[]");
            return {
              replyId: r.reply_id,
              loading: false,
              failed: false,
              expired: undefined,
              suggests: infraUtilFunctions.isStringArray(t) ? t.filter(e => !!e) : []
            };
          } catch (n) {
            loggerServiceCore.defaultLogger.persist.warning({
              message: "load remote sp fail",
              meta: {
                conversationId: t,
                message_id: r == null ? undefined : r.message_id,
                reply_id: r == null ? undefined : r.reply_id
              }
            });
            return e;
          }
        });
      }
    })({
      conversationId: n
    });
    return m;
  };
  let h = async e => {
    let {
      messageCursor: t,
      messageIndex: n,
      conversationId: l,
      scene: o,
      size: s
    } = e;
    let d = createChatMessageUpdaterFactory.createChatMessageUpdater(l);
    let h = chatMessageStoreFactory.createMessageStore.getState().messageLinkMap[l];
    if (!Array.isArray(h) || h.length === 0) {
      d(e => {
        let {
          draftMessageListStatus: t
        } = e;
        t.inIniting = true;
      });
    }
    try {
      if (t === 1 && n === 0) {
        for (let t = 0; t < 5; t++) {
          let n = 2 ** t * 500;
          try {
            return await u({
              ...e,
              size: s,
              messageCursor: 1,
              messageIndex: 1
            });
          } catch (e) {
            if (t === 4) {
              throw e;
            }
            await promiseAsyncUtilities.createDelayedPromise(n);
          }
        }
      } else {
        if (!(n <= 0) && (!t || !(n < t))) {
          return await u(e);
        }
        loggerServiceCore.defaultLogger.persist.warning({
          message: "skip initMessageList",
          meta: {
            messageCursor: t,
            messageIndex: n
          }
        });
        return;
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "init_message_list_error",
        error: e
      });
      if (o === "initChatView" || o === "postSendMessage") {
        throw e;
      }
    } finally {
      d(e => {
        let {
          draftMessageListStatus: t
        } = e;
        t.inIniting = false;
      });
    }
  };
  require.d(exports, {
    initMessageList: function () {
      return h;
    }
  });
}