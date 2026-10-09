// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'chatTraceHandlers'
// - Resolved require(651544) to 'chat-trace-handlers'
// - Renamed variable 'l' to 'chatMessageUtils_1'
// - Resolved require(711513) to 'chat-message-utils_1'
// - Renamed variable 'c' to 'messagingSessionUtils'
// - Resolved require(545930) to 'messaging-session-utils'
// - Renamed variable 'u' to 'messageLogSuppressionUtils'
// - Resolved require(545406) to 'message-log-suppression-utils'
// - Renamed variable 'd' to 'messageSessionEndHandler'
// - Resolved require(311349) to 'message-session-end-handler'
// - Renamed variable 'p' to 'messageTraceSymbol'
// - Resolved require(661760) to 'message-trace-symbol'
// - Updated imported property 'eH' to 'getSkillId' (module 711513)
// - Updated imported property 'H' to 'messageTraceSymbol' (module 661760)
// - Updated imported property 'h' to 'updateContextState' (module 545930)
// - Updated imported property 'uz' to 'shouldSkipSessionEnd' (module 545406)
// - Updated imported property 'iD' to 'updateMessageRecord' (module 545406)
// - Updated imported property 'FZ' to 'shouldSkipSendingEnd' (module 545406)
// - Updated imported property 'mZ' to 'shouldSkipRecvUpdate' (module 545406)
// - Updated imported property 'nE' to 'shouldSkipBatchRecv' (module 545406)
// - Updated imported property 'J' to 'chatMessageTrace' (module 651544)
// - Updated imported property 'P' to 'chatSessionTrace' (module 651544)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'Y' to 'persistSessionEnd' (module 311349)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 954952
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatTraceHandlers = require("chat-trace-handlers") /*id: 651544*/;
  var chatMessageUtils_1 = require("chat-message-utils_1") /*id: 711513*/;
  let a = e => {
    let s = chatMessageUtils_1.getSkillId(e);
    return {
      conversation_id: e.conversation_id ?? "",
      local_conversation_id: e.local_conversation_id ?? "",
      conversation_type: String(e.conversation_type ?? ""),
      bot_id: String(e.bot_id ?? ""),
      section_id: e.section_id ?? "",
      skill_id: s
    };
  };
  var messagingSessionUtils = require("messaging-session-utils") /*id: 545930*/;
  var messageLogSuppressionUtils = require("message-log-suppression-utils") /*id: 545406*/;
  var messageSessionEndHandler = require("message-session-end-handler") /*id: 311349*/;
  var messageTraceSymbol = require("message-trace-symbol") /*id: 661760*/;
  function _(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let v = (e, t, n) => {
    if (!e || !t) {
      return;
    }
    e.records.onMessageReceivingUpdate[t] ||= {
      count: 0,
      timestamp_list: [],
      think_reason_timestamp_list: [],
      done: false
    };
    let i = e.records.onMessageReceivingUpdate[t];
    i.count += 1;
    i.timestamp_list.push(performance.now());
    if (n) {
      i.think_reason_timestamp_list.push(performance.now());
    }
  };
  class h {
    constructor() {
      _(this, "pluginIdentifier", messageTraceSymbol.messageTraceSymbol);
      _(this, "beforeMessageSending", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          return t;
        }
        messageLogSuppressionUtils.updateMessageRecord(n, "beforeMessageSending");
        let i = a(t);
        if (n != null) {
          n.setCommonContextParams(i);
        }
        if (n != null) {
          n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.beforeMessageSending(t));
        }
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "before_message_sending",
          meta: chatTraceHandlers.chatSessionTrace.beforeMessageSending(n)
        });
        return t;
      });
      _(this, "onMessageSendingStart", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          if (n != null) {
            n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageSendingStart(t));
          }
          if (n != null) {
            n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageSendingStart(t));
          }
        } else {
          messageLogSuppressionUtils.updateMessageRecord(n, "onMessageSendingStart");
        }
        if (n != null) {
          n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageSendingStart(t));
        }
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "on_message_sending_start",
          meta: chatTraceHandlers.chatSessionTrace.onMessageSendingStart(n)
        });
        return t;
      });
      _(this, "onMessageSendingEnd", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n) && !messageLogSuppressionUtils.shouldSkipSendingEnd(n)) {
          messageLogSuppressionUtils.updateMessageRecord(n, "onMessageSendingEnd");
          if (n != null) {
            n.updateCommonContextParamsIfExist({
              conversation_id: t.conversation_id
            });
          }
          if (n != null) {
            n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageSendingEnd(t));
          }
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_message_sending_end",
            meta: chatTraceHandlers.chatSessionTrace.onMessageSendingEnd(n)
          });
          if (!messageContentTypeAndStatusChecker.FFC(t)) {
            messageLogSuppressionUtils.updateMessageRecord(n, "onBatchMessageReceivingStart");
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "on_batch_message_receiving_start",
              meta: chatTraceHandlers.chatSessionTrace.onBatchMessageReceivingStart(n)
            });
          }
        }
        return t;
      });
      _(this, "onLoadingMessageUpdate", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_thinking_message_update",
            meta: chatTraceHandlers.chatSessionTrace.onLoadingMessageUpdate(n)
          });
        }
        return t;
      });
      _(this, "onMessageReceivingStart", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          messageLogSuppressionUtils.updateMessageRecord(n, "onMessageReceivingStart");
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_message_receiving_start",
            meta: chatTraceHandlers.chatSessionTrace.onMessageReceivingStart(n, t)
          });
        }
        return t;
      });
      _(this, "onMessageReceivingUpdate", (e, t) => {
        if (!t.message_id) {
          return t;
        }
        let a = messagingSessionUtils.updateContextState(e);
        if (messageLogSuppressionUtils.shouldSkipSessionEnd(a)) {
          return t;
        }
        let d = t.has_think_reason;
        v(a, t.message_id, d);
        let p = a == null ? undefined : a.records.onMessageReceivingUpdate[t.message_id];
        let _ = a == null ? undefined : a.records.onBatchMessageReceivingStart;
        if (!a) {
          return t;
        }
        if (objectValuesHelper.getObjectValues(a.params.slardar?.receive_message).length === 0) {
          a.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageReceivingUpdate(t));
          let e = chatTraceHandlers.chatSessionTrace.onMessageReceivingUpdate(a, t);
          if ((_ == null ? undefined : _.timestamp) && (p == null ? undefined : p.timestamp_list?.length)) {
            e.batch_message_first_update_duration = p.timestamp_list[0] - _.timestamp;
          }
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_batch_message_receiving_first_update",
            meta: e
          });
        }
        if ((p == null ? undefined : p.think_reason_timestamp_list?.length) === 1) {
          let e = chatTraceHandlers.chatSessionTrace.onMessageReceivingUpdate(a, t);
          if (_ == null ? undefined : _.timestamp) {
            e.receive_think_reason_first_text_duration = p.think_reason_timestamp_list[0] - _.timestamp;
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "on_receive_think_reason_first_text_update",
              meta: e
            });
          }
        }
        return t;
      });
      _(this, "onMessageReceivingEnd", (e, t) => {
        if (!t.message_id) {
          return t;
        }
        let n = messagingSessionUtils.updateContextState(e);
        if (messageLogSuppressionUtils.shouldSkipSessionEnd(n) || messageLogSuppressionUtils.shouldSkipRecvUpdate(n, t.message_id || "")) {
          return t;
        }
        let i = n == null ? undefined : n.records.onMessageReceivingUpdate[t.message_id];
        if (i) {
          i.done = true;
        }
        messageLogSuppressionUtils.updateMessageRecord(n, "onMessageReceivingEnd");
        if (n != null) {
          n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onMessageReceivingEnd(t));
        }
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "on_message_receiving_end",
          meta: chatTraceHandlers.chatSessionTrace.onMessageReceivingEnd(n, t)
        });
        return t;
      });
      _(this, "onSuggestReceivingStart", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          if (!messageLogSuppressionUtils.shouldSkipBatchRecv(n)) {
            messageLogSuppressionUtils.updateMessageRecord(n, "onBatchMessageReceivingEnd");
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "on_batch_message_receiving_end",
              meta: chatTraceHandlers.chatSessionTrace.onBatchMessageReceivingEnd(n)
            });
          }
          messageLogSuppressionUtils.updateMessageRecord(n, "onSuggestReceivingStart");
          if (n != null) {
            n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onSuggestReceivingStart());
          }
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_suggest_receiving_start",
            meta: chatTraceHandlers.chatSessionTrace.onSuggestReceivingStart(n)
          });
        }
        return t;
      });
      _(this, "onSuggestReceivingEnd", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          messageLogSuppressionUtils.updateMessageRecord(n, "onSuggestReceivingEnd");
          if (n != null) {
            n.setSlardarContextParams(chatTraceHandlers.chatMessageTrace.onSuggestReceivingEnd(t));
          }
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_suggest_receiving_end",
            meta: chatTraceHandlers.chatSessionTrace.onSuggestReceivingEnd(n)
          });
        }
        return t;
      });
      _(this, "onMessageSessionEnd", (e, t) => {
        let n = messagingSessionUtils.updateContextState(e);
        if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
          if (!messageLogSuppressionUtils.shouldSkipBatchRecv(n)) {
            messageLogSuppressionUtils.updateMessageRecord(n, "onBatchMessageReceivingEnd");
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "on_batch_message_receiving_end",
              meta: chatTraceHandlers.chatSessionTrace.onBatchMessageReceivingEnd(n)
            });
          }
          messageSessionEndHandler.persistSessionEnd(e, t);
        }
        return t;
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageTraceMessageLifeCyclePlugin: function () {
      return h;
    }
  });
}