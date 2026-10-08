// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zK' to 'handleMessageEnd'
// - Renamed export 'Kr' to 'handleErrorReceiving'
// - Renamed export 'tH' to 'handleSuggestEnd'
// - Renamed export 'vw' to 'handleErrorSending'
// - Renamed export 'MV' to 'handleSyncSessionStart'
// - Renamed export 'ZL' to 'handleSuggestStart'
// - Renamed export 'eb' to 'handleReceivingUpdate'
// - Renamed export 'wJ' to 'handleStreamEnd'
// - Renamed export 'cV' to 'handleSuggestUpdate'
// - Renamed export 'UQ' to 'resumeSession'
// - Renamed export 'wA' to 'handleMessageStart'
// - Renamed export 'y7' to 'handleAsyncUpdate'
// - Renamed export 'Pw' to 'handleSessionEnd'
// - Renamed export 'Df' to 'handleSendingTimeout'
// - Renamed export 'bu' to 'handleSyncStart'
// - Renamed export 'uM' to 'handleSessionEndFromStart'
// - Renamed export 'yp' to 'handleStreamEndForAsync'
// - Renamed export 'BF' to 'handleSendingBreak'
// - Renamed export 'ox' to 'handleReceivingBreak'
// - Renamed export 'Ee' to 'handleSendingStart'
// - Renamed export 'il' to 'handleSessionResume'
// - Renamed export 'zo' to 'handleSendingTimeoutGuard'
// - Renamed export 'uH' to 'handleReceivingTimeout'
// - Renamed export 'Ch' to 'handleReceivingTimeoutWithMessage'
// - Renamed export 'xQ' to 'handleBatchReceivingTimeout'
// - Renamed export 'hV' to 'handleReceivingEnd'
// - Renamed export 'pe' to 'handleSessionStart'
// - Renamed export 'PL' to 'handleLoadingUpdate'
// - Renamed export 'hy' to 'handleReceivingTimeoutGuard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 216801
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var messageSessionEnums = require("message-session-enums") /*id: 497192*/;
  var chatSessionLogger = require("chat-session-logger") /*id: 633460*/;
  var messageSessionEndHandler = require("message-session-end-handler") /*id: 311349*/;
  var chatContextManager = require("chat-context-manager") /*id: 843425*/;
  var conversationModeConstants = require("conversation-mode-constants") /*id: 545465*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatAsyncTaskCheck = require("chat-async-task-check") /*id: 326723*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var lifecycleErrorUtils = require("lifecycle-error-utils") /*id: 108909*/;
  let C = e => {
    let {
      sessionLifeCycleMachineAction: s,
      singleRecevingMessageMachineAction: n,
      lifeCycleEventNames: i,
      lifeCycleGuard: t = e => true,
      idleExecuteSessionLifeCycleNextAction: a,
      idleExecuteSessionLifeCycleNextActionIntervalGetter: o
    } = e;
    return async (e, r, l) => new Promise((c, d) => {
      sessionLifecycleManager.sessionManager.pushQueue(e, r, async () => {
        let u = sessionLifecycleManager.sessionManager.getSessionLifeCycleMachineState(e, r);
        let v = arrayIsArrayUtil.isArray(l) ? "" : messageContentTypeAndStatusChecker.Yns(l) ? "" : l.message_id || "";
        let C = v ? sessionLifecycleManager.sessionManager.getSingleRecevingMessageLifeCycleMachineState(e, r, v) : undefined;
        let R = sessionLifecycleManager.sessionManager.getSessionLifeCycleContext(e, r, v);
        let L = t(e, r, l, u, C);
        if (!L) {
          return c(l);
        }
        if (!isBooleanUtil.isBoolean(L)) {
          l = L;
        }
        sessionLifecycleManager.sessionManager.clearSessionLifeCycleIdleNextAction(e, r, u);
        let x = (await chatPluginMatcherRegistry.loadMessageLifeCycleMatcher()).map(e => {
          var s;
          var n;
          if (arrayIsArrayUtil.isArray(l)) {
            if ((s = e.matchPluginWithPayload) === null || s === undefined ? undefined : s.call(e, l)) {
              return e.pluginIdentifier;
            }
          } else if ((n = e.matchPlugin) === null || n === undefined ? undefined : n.call(e, l)) {
            return e.pluginIdentifier;
          }
        }).filter(isSymbolUtil.isSymbol);
        let k = (await Promise.all(x.map(e => chatPluginIocManager.msgLifeCycleLoader(e)))).filter(e => !!e);
        let I = l;
        for (let e of i) {
          for (let s of k) {
            let n = s[e];
            let i = (e, s) => s;
            let t = isFunctionUtil_1.isFunction(n) ? n : i;
            try {
              I = await t(R, I);
            } catch (s) {
              loggerServiceCore.defaultLogger.persist.error({
                error: s,
                message: `message lifecycle [${e}] execute failed, reason:${s.message}`
              });
              if (lifecycleErrorUtils.isPanicError(s) || lifecycleErrorUtils.isExpectError(s)) {
                return d(s);
              }
            }
          }
        }
        sessionLifecycleManager.sessionManager.nextSessionLifeCycleMachineState(e, r, s);
        if (v) {
          sessionLifecycleManager.sessionManager.nextSingleReceivingMessageLifeCycleMachineState(e, r, v, n);
        }
        if (a && o) {
          sessionLifecycleManager.sessionManager.idleExecuteSessionLifeCycleNextAction(e, r, () => a(e, r, l), o());
        }
        c(I);
      });
    });
  };
  let R = (e, s) => (n, i, a, r) => r === s || (loggerServiceCore.defaultLogger.persist.info({
    message: `execute ${e} action failed,session_machine_state invalid, current state: ${messageSessionEnums.MessageSessionStage[r]}, report message session end`
  }), messageSessionEndHandler.handleSessionEnd(sessionLifecycleManager.sessionManager, n, i, a), false);
  let L = (e, s) => (n, i) => n === e && i === s;
  let x = C({
    lifeCycleEventNames: ["processMessageBefore"]
  });
  let k = C({
    lifeCycleEventNames: ["onProcessMessageEnd"]
  });
  let I = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.StartMessageSession,
    lifeCycleEventNames: ["onMessageSessionStart"],
    lifeCycleGuard: (e, s, n, i) => {
      sessionLifecycleManager.sessionManager.createLifeCycleSessionStore(e, s);
      return true;
    }
  });
  let N = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.StartMessageSession,
    lifeCycleEventNames: ["onMessageSessionStart"],
    lifeCycleGuard: (e, s, n, i) => {
      sessionLifecycleManager.sessionManager.createLifeCycleSessionStore(e, s);
      sessionLifecycleManager.sessionManager.forceUpdateSessionLifeCycleMachine(e, s, messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage);
      return true;
    }
  });
  let A = C({
    lifeCycleEventNames: ["beforeMessageSending"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.MessageSessionStart
  });
  let U = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.TimeoutMessageSending,
    lifeCycleEventNames: ["onMessageSendingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, a) => {
      if (!R("timeout_message_sending", messageSessionEnums.MessageSessionStage.MessageSendingStage)(e, s, n, a)) {
        return false;
      }
      {
        let e = deepCloneWrapper_1.deepClone(n);
        e.final_status = {
          message: "Timeout",
          session: "Timeout"
        };
        return e;
      }
    }
  });
  let b = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.StartMessageSending,
    lifeCycleEventNames: ["onMessageSendingStart"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.MessageSessionStart,
    idleExecuteSessionLifeCycleNextAction: U,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        sendMessageStartTimeout: e = chatMessagingConstants.heartbeatInterval
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let w = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.TimeoutSyncMessageReceiving,
    lifeCycleEventNames: ["onBatchMessageReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, a) => {
      if (!R("timeout_batch_message_receiving", messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage)(e, s, n, a)) {
        return false;
      }
      {
        let e = deepCloneWrapper_1.deepClone(n);
        e.final_status = {
          message: "Timeout",
          session: "Timeout"
        };
        return e;
      }
    }
  });
  let T = C({
    singleRecevingMessageMachineAction: messageSessionEnums.MessageStage.EndMessage,
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.TimeoutSyncMessageReceiving,
    lifeCycleEventNames: ["onMessageReceivingEnd", "onBatchMessageReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, a) => {
      if (!R("timeout_batch_message_receiving", messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage)(e, s, n, a)) {
        return false;
      }
      {
        let e = deepCloneWrapper_1.deepClone(n);
        e.final_status = {
          message: "Timeout",
          session: "Timeout"
        };
        return e;
      }
    }
  });
  let B = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.StartSyncMessageReceiving,
    lifeCycleEventNames: ["onMessageSendingEnd", "onBatchMessageReceivingStart"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.MessageSendingStage,
    idleExecuteSessionLifeCycleNextAction: w,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveMessageStartTimeout: e = chatMessagingConstants.sessionTimeout
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let P = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.BreakMessageSending,
    lifeCycleEventNames: ["onMessageSendingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("break_message_sending", messageSessionEnums.MessageSessionStage.MessageSendingStage)(e, s, n, i)
  });
  let G = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.ErrorMessageSending,
    lifeCycleEventNames: ["onMessageSendingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("error_message_sending", messageSessionEnums.MessageSessionStage.MessageSendingStage)(e, s, n, i)
  });
  let Z = C({
    lifeCycleEventNames: ["onLoadingMessageUpdate"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage,
    idleExecuteSessionLifeCycleNextAction: T,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveStreamPackageUpdateTimeout: e = chatMessagingConstants.maxSessionDuration
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let H = C({
    singleRecevingMessageMachineAction: messageSessionEnums.MessageStage.StartMessage,
    lifeCycleEventNames: ["onMessageReceivingStart"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.Init)(i, a),
    idleExecuteSessionLifeCycleNextAction: T,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveMessageStartTimeout: e = chatMessagingConstants.sessionTimeout
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let $ = C({
    lifeCycleEventNames: ["onMessageReceivingUpdate"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.MessageStart)(i, a),
    idleExecuteSessionLifeCycleNextAction: T,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveStreamPackageUpdateTimeout: e = chatMessagingConstants.maxSessionDuration
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let O = C({
    lifeCycleEventNames: ["onMessageReceivingUpdate"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.MessageStart)(i, a),
    idleExecuteSessionLifeCycleNextAction: T,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveStreamPackageUpdateTimeoutForAsyncTask: e = chatMessagingConstants.cacheExpiryTime
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let J = C({
    singleRecevingMessageMachineAction: messageSessionEnums.MessageStage.EndMessage,
    lifeCycleEventNames: ["onMessageReceivingEnd"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.MessageStart)(i, a)
  });
  let F = C({
    singleRecevingMessageMachineAction: messageSessionEnums.MessageStage.EndMessage,
    lifeCycleEventNames: ["onMessageReceivingEnd"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.MessageStart)(i, a)
  });
  let j = C({
    singleRecevingMessageMachineAction: messageSessionEnums.MessageStage.EndMessage,
    lifeCycleEventNames: ["onMessageReceivingEnd"],
    lifeCycleGuard: (e, s, n, i, a) => L(messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage, messageSessionEnums.MessageStatus.MessageStart)(i, a)
  });
  let D = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.EndMessageSession,
    lifeCycleEventNames: ["onBatchMessageReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("end_message_receiving", messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage)(e, s, n, i)
  });
  let K = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.ErrorSyncMessageReceiving,
    lifeCycleEventNames: ["onBatchMessageReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("error_message_receiving", messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage)(e, s, n, i)
  });
  let z = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.BreakSyncMessageReceiving,
    lifeCycleEventNames: ["onBatchMessageReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("break_message_receiving", messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage)(e, s, n, i)
  });
  let W = C({
    lifeCycleEventNames: ["onSuggestReceivingUpdate"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.SuggestionReceivingStage
  });
  let V = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.EndMessageSession,
    lifeCycleEventNames: ["onSuggestReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, a) => {
      if (!R("end_message_session", messageSessionEnums.MessageSessionStage.SuggestionReceivingStage)(e, s, n, a)) {
        return false;
      }
      {
        let e = deepCloneWrapper_1.deepClone(n);
        e.final_status = {
          message: "Success",
          suggest: "Timeout",
          session: "Timeout"
        };
        return e;
      }
    }
  });
  let q = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.EndMessageSession,
    lifeCycleEventNames: ["onSuggestReceivingEnd", "onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => R("end_message_session", messageSessionEnums.MessageSessionStage.SuggestionReceivingStage)(e, s, n, i)
  });
  let Q = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.StartSuggestionReceiving,
    lifeCycleEventNames: ["onBatchMessageReceivingEnd", "onSuggestReceivingStart"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage,
    idleExecuteSessionLifeCycleNextAction: V,
    idleExecuteSessionLifeCycleNextActionIntervalGetter: () => {
      let {
        receiveSuggestStartTimeout: e = chatMessagingConstants.requestTimeout
      } = configSyncLoader.getConfig("chatMessageConfig") || {};
      return e;
    }
  });
  let X = C({
    sessionLifeCycleMachineAction: messageSessionEnums.MessageSessionEvent.EndMessageSession,
    lifeCycleEventNames: ["onMessageSessionEnd"],
    lifeCycleGuard: (e, s, n, i) => i === messageSessionEnums.MessageSessionStage.MessageSessionStart
  });
  let Y = (e, s, n) => {
    if (!n.message_id) {
      return;
    }
    let i = chatMessageStatusCheck.isMessageFinished(n);
    let t = messageContentTypeAndStatusChecker.FFC(n);
    let a = messageContentTypeAndStatusChecker.vlk(n);
    let o = chatAsyncTaskCheck.hasAsyncTask(n);
    H(e, s, n);
    if (o) {
      O(e, s, n);
    } else {
      $(e, s, n);
    }
    if (t) {
      j(e, s, n);
    } else if (a) {
      F(e, s, n);
    } else if (i) {
      J(e, s, n);
    }
  };
  let ee = (e, s) => {
    let n = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(e, s);
    sessionLifecycleManager.sessionManager.getSessionLifeCycleContext(e, n, "").set("chatEventContext", new chatContextManager.ChatContextManager({
      params: {
        slardar: {
          chat_session_scene: "resume_task",
          chat_session_id: n,
          chat_scene: conversationModeConstants.conversationModes.DEFAULT
        }
      }
    }));
    chatSessionLogger.logSessionStart({
      temp: {
        chat_next: "0"
      },
      slardar: {
        chat_session_scene: "resume_task",
        chat_session_id: n
      }
    });
    N(e, n, {
      is_delta: false
    });
  };
  require.d(exports, {
    handleMessageEnd: function () {
      return J;
    },
    handleErrorReceiving: function () {
      return K;
    },
    handleSuggestEnd: function () {
      return V;
    },
    handleErrorSending: function () {
      return G;
    },
    handleSyncSessionStart: function () {
      return N;
    },
    handleSuggestStart: function () {
      return Q;
    },
    handleReceivingUpdate: function () {
      return $;
    },
    handleStreamEnd: function () {
      return j;
    },
    handleSuggestUpdate: function () {
      return W;
    },
    resumeSession: function () {
      return ee;
    },
    handleMessageStart: function () {
      return H;
    },
    handleAsyncUpdate: function () {
      return O;
    },
    handleSessionEnd: function () {
      return q;
    },
    handleSendingTimeout: function () {
      return U;
    },
    handleSyncStart: function () {
      return I;
    },
    handleSessionEndFromStart: function () {
      return X;
    },
    handleStreamEndForAsync: function () {
      return F;
    },
    handleSendingBreak: function () {
      return P;
    },
    handleReceivingBreak: function () {
      return z;
    },
    handleSendingStart: function () {
      return B;
    },
    handleSessionResume: function () {
      return Y;
    },
    handleSendingTimeoutGuard: function () {
      return b;
    },
    handleReceivingTimeout: function () {
      return k;
    },
    handleReceivingTimeoutWithMessage: function () {
      return x;
    },
    handleBatchReceivingTimeout: function () {
      return w;
    },
    handleReceivingEnd: function () {
      return D;
    },
    handleSessionStart: function () {
      return A;
    },
    handleLoadingUpdate: function () {
      return Z;
    },
    handleReceivingTimeoutGuard: function () {
      return T;
    }
  });
}