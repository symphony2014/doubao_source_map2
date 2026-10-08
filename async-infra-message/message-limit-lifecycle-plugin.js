// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'r' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'chatMessageLimitSymbol'
// - Resolved require(431189) to 'chat-message-limit-symbol'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 't' to 'messageLimitSymbol' (module 431189)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 97319
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageLimitSymbol = require("chat-message-limit-symbol") /*id: 431189*/;
  let a = e => ({
    local_message_id: e.local_message_id,
    conversation_id: e.conversation_id,
    conversation_type: e.conversation_type
  });
  let c = (e, t) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "send_message_cancel",
      meta: {
        ...e,
        reason: t
      }
    });
  };
  class u {
    async beforeMessageSending(e, t) {
      let s = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      let l = chatFeedStoreFactory.useFeedStore.getState().conversationMap[t.conversation_id ?? ""];
      let u = (l == null ? undefined : l.bot_id) ? s == null ? undefined : s.getBot(l.bot_id) : {};
      if (chatMessageStoreFactory.createMessageStore.getState().rateLimitConfig.isLimited) {
        c(a(t), "rate limit");
        return Promise.reject(Error("send message cancel, because reach rate limit"));
      } else if (u == null ? undefined : u.disabled) {
        c(a(t), "bot deleted");
        return Promise.reject(Error("send message cancel, because bot has been deleted"));
      } else {
        return t;
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatMessageLimitSymbol.messageLimitSymbol;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageLimitMessageLifeCyclePlugin: function () {
      return u;
    }
  });
}