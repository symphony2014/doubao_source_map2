// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hj' to 'initChatSession'
// - Renamed export 't1' to 'checkRateLimit'
// - Renamed export 't4' to 'wrappedInitChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 976892
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var chatSessionLogger = require("chat-session-logger") /*id: 633460*/;
  var chatContextManager = require("chat-context-manager") /*id: 843425*/;
  var conversationModeConstants = require("conversation-mode-constants") /*id: 545465*/;
  var messageInfraUtils = require("message-infra-utils") /*id: 716917*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatProtocolPluginCleanup = require("chat-protocol-plugin-cleanup") /*id: 900461*/;
  var setRateLimitConfig = require("set-rate-limit-config") /*id: 730897*/;
  var sessionLifecycleManager = require("session-lifecycle-manager") /*id: 49481*/;
  var messageSessionLifecycleHandler = require("message-session-lifecycle-handler") /*id: 216801*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  async function y(e) {
    let {
      getCommonSocketParams: t,
      reportEvent: o,
      config: n,
      featureConfig: v,
      refreshSocketConfig: m
    } = e;
    try {
      var f;
      var y;
      let e = await chatPluginIocManager.chatProtocolLoader("AliceChatSocket");
      let p = await chatIocServiceLoaderHook.loadServiceAsync("chatSocketService");
      chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      chatIocServiceLoaderHook.loadServiceAsync("chatCommandService");
      if (p != null) {
        p.init({
          config: n,
          refreshSocketConfig: m,
          getSocketParams: t
        });
      }
      let h = () => {
        if (p != null) {
          p.off("open", C);
        }
      };
      let I = setTimeout(() => {
        if (o != null) {
          o.error({
            reason: "ws_failed"
          });
        }
        h();
      }, 5000);
      let C = () => {
        if (o != null) {
          o.addDurationPoint("ws");
        }
        if (o != null) {
          o.addDurationPoint("success");
        }
        if (o != null) {
          o.success();
        }
        h();
        clearTimeout(I);
      };
      if (e != null) {
        e.init();
      }
      let x = await chatStoreManager.getAsyncStore("samanthaChatProtocolStore");
      let T = messageInfraUtils.filterRecentMessages(objectValuesHelper.getObjectValues(x.getState().samanthaChatTaskMap));
      if (T.length) {
        T.forEach(e => {
          var o;
          let a = ((o = e.messages) === null || o === undefined ? undefined : o[0]?.conversation_id) || "";
          let n = e.localMessageId;
          messageSessionLifecycleHandler.resumeSession(a, n);
        });
        if ((f = await chatPluginIocManager.chatProtocolLoader("SamanthaChat")) !== null && f !== undefined) {
          f.resumeTask(T);
        }
      }
      let b = await chatStoreManager.getAsyncStore("aliceChatProtocolStore");
      b.setState({
        aliceChatStreamInitConfig: {
          poolSize: 3,
          retryAttempt: 5,
          binaryType: v == null ? undefined : v.binaryType
        },
        aliceChatFallbackInitConfig: n
      });
      let S = messageInfraUtils.filterRecentMessages(objectValuesHelper.getObjectValues(b.getState().aliceChatStreamTaskMap));
      if (S.length) {
        S.forEach(e => {
          let t = e.conversationId || "";
          let o = e.replyId;
          let a = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, o);
          sessionLifecycleManager.sessionManager.getSessionLifeCycleContext(t, a, "").set("chatEventContext", new chatContextManager.ChatContextManager({
            params: {
              slardar: {
                chat_session_scene: "resume_task",
                chat_session_id: a,
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
              chat_session_id: a
            }
          });
          messageSessionLifecycleHandler.handleSyncSessionStart(t, a, {
            is_delta: false
          });
        });
        if ((y = await chatPluginIocManager.chatProtocolLoader("AliceChatStream")) !== null && y !== undefined) {
          y.resumeTask(S);
        }
      }
      if (p != null) {
        p.on("open", C);
      }
    } catch (e) {
      chatProtocolPluginCleanup.cleanupChatPlugins();
      throw e;
    }
  }
  let h = async () => {
    try {
      let n = await (await chatMessageServiceModule.getChatMessageService()).rateLimit();
      setRateLimitConfig.setRateLimitConfig({
        limitExpired: n.data?.limit_time ? Date.now() + n.data?.limit_time * 1000 : undefined,
        limitTips: n.data?.limit_tips || "",
        isLimited: !!n.data?.is_limit
      });
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "get rate limit failed",
          error: e
        });
      }
    }
  };
  let I = onceFunctionFactory.createOnce(y);
  require.d(exports, {
    initChatSession: function () {
      return y;
    },
    checkRateLimit: function () {
      return h;
    },
    wrappedInitChat: function () {
      return I;
    }
  });
}