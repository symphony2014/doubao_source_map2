// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'handleBrokenMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 874388
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var a = dayjsDateLibrary;
  var messageSessionEnums = require("message-session-enums") /*id: 497192*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var messageSendingCheck = require("message-sending-check") /*id: 491797*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatAsyncTaskCheck = require("chat-async-task-check") /*id: 326723*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var timestampNormalizer = require("timestamp-normalizer") /*id: 950098*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var finishMessageTask = require("finish-message-task") /*id: 989964*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var messageSessionLifecycleHandler = require("message-session-lifecycle-handler") /*id: 216801*/;
  var messageReceiveHandler = require("message-receive-handler") /*id: 646429*/;
  var aliceChatTaskManager = require("alice-chat-task-manager") /*id: 268829*/;
  async function N(e, t, n, s) {
    if (!n) {
      return;
    }
    let {
      message_id: o,
      local_message_id: h,
      reply_id: p
    } = n;
    if (localResourceCheck.isLocal(n) && messageSendingCheck.isSending(n)) {
      finishMessageTask.finishMessageTask(h);
      await chatMessageStoreUpdater.updateChatMessages({
        conversationId: t,
        immerUpdate: e => {
          let {
            draftLocalMessageMap: t
          } = e;
          let i = t[(n == null ? undefined : n.local_message_id) || ""];
          if (i) {
            i.status = chatMessageTypes.PushMessageStatus.InVisible;
          }
        }
      });
      let e = deepCloneWrapper_1.deepClone(n);
      e.final_status = {
        message: "Broken",
        session: "Broken"
      };
      let r = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, n.local_message_id || "");
      await messageSessionLifecycleHandler.handleSendingBreak(t, r, e);
      await aliceChatTaskManager.cancelChatTasks({
        localMessageId: n == null ? undefined : n.local_message_id
      });
      return;
    }
    if (!chatMessageStatusCheck.isMessageFinished(n) || localResourceCheck.isLocal(n) && messageContentTypeAndStatusChecker.pdQ(n)) {
      let e = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, {
        isLocalMessage: false,
        messageId: p || ""
      });
      if (localResourceCheck.isLocal(n) && checkLocalReplyMessage.isLocalReplyMessage(n)) {
        await chatMessageStoreUpdater.updateChatMessages({
          conversationId: t,
          immerUpdate: e => {
            let {
              draftLocalMessageMap: r,
              draftMessageLinks: s
            } = e;
            let a = r[h || ""];
            if (a) {
              a.status = chatMessageTypes.PushMessageStatus.InVisible;
              a.final_status = {
                message: "Broken",
                session: "Broken"
              };
            }
            let o = s.find(e => e.messageId === h);
            if (o) {
              o.messageKey = `${o.messageId}_break`;
            }
            let l = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, n.reply_id || "");
            messageSessionLifecycleHandler.handleReceivingBreak(t, l, deepCloneWrapper_1.deepClone(a));
          }
        });
      } else if ((localResourceCheck.isLocal(n) && messageContentTypeAndStatusChecker.pdQ(n) || !chatMessageStatusCheck.isMessageFinished(n)) && o) {
        let e = {
          conversation_id: t,
          message_id: o,
          ...throttledOmitPathStringify.omitPathStringify(n, ["local", "local_message_id"]),
          status: chatMessageTypes.PushMessageStatus.Broken,
          chunk_seq: "999999",
          is_finish: true,
          is_delta: false,
          final_status: {
            message: "Broken",
            session: "Broken"
          }
        };
        messageReceiveHandler.handleReceivedMessage(e);
      }
      await aliceChatTaskManager.cancelChatTasks({
        replyId: p || "",
        localMessageId: e == null ? undefined : e.local_message_id
      });
      let u = p || o;
      let m = eventReportingService.createEventReporter({
        eventName: "break_message"
      });
      if (!function (e) {
        if (!e) {
          return false;
        }
        let t = timestampNormalizer.normalizeTimestamp(Number(e.create_time || Date.now()));
        return a().isBefore(a(t).add(10, "minute"));
      }(n) || !u || (t == null ? undefined : t.startsWith("local")) || messageContentTypeAndStatusChecker.vlk(n)) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "break_message_invalid",
          meta: {
            replyId: String(u),
            conversation_id: String(t),
            is_finished: chatMessageStatusCheck.isMessageFinished(n) ? "1" : "0",
            create_time: String(n.create_time),
            message_type: String(n.message_type),
            content_type: String(n.content_type),
            status: String(n.status)
          }
        });
        return;
      }
      apiServicesCollection.MessageApiService.MessageReport({
        reply_id: u,
        conversation_id: t,
        action: "break"
      }).then(() => {
        m.addDurationPoint("success");
        m.success();
      }, e => {
        m.error({
          reason: "break message failed",
          error: e,
          meta: {
            replyId: String(u),
            conversation_id: String(t),
            is_finished: chatMessageStatusCheck.isMessageFinished(n) ? "1" : "0",
            create_time: String(n.create_time),
            message_type: String(n.message_type),
            content_type: String(n.content_type),
            status: String(n.status)
          }
        });
        if (s != null) {
          s();
        }
      });
    }
  }
  async function C(e, t) {
    let n = e.getState();
    let i = conversationMessageUtils_1.getAvailableMessage(n, t);
    if (i) {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      let n = e == null ? undefined : e.getActiveSession(t);
      if (n && n.getSessionState() !== messageSessionEnums.MessageSessionStage.Init) {
        await (e == null ? undefined : e.breakMessage({
          session: n
        }));
      } else {
        let n = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig;
        let i = (n == null ? undefined : n.chatId) === t ? n == null ? undefined : n.chatKey : undefined;
        let r = e == null ? undefined : e.getActiveSession(i);
        await (e == null ? undefined : e.breakMessage({
          session: r
        }));
      }
    }
    if (!chatAsyncTaskCheck.hasAsyncTask(i)) {
      await N(e, t, i);
    }
  }
  require.d(exports, {
    handleBrokenMessage: function () {
      return C;
    }
  });
}