// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'r' to 'updateConversationState'
// - Resolved require(357351) to 'update-conversation-state'
// - Renamed variable 'o' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 's' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'conversationPluginSymbol'
// - Resolved require(124626) to 'conversation-plugin-symbol'
// - Updated imported property 'W' to 'ConversationPlugin' (module 124626)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'e' to 'updateConversation' (module 357351)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 652088
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var updateConversationState = require("update-conversation-state") /*id: 357351*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationPluginSymbol = require("conversation-plugin-symbol") /*id: 124626*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", conversationPluginSymbol.ConversationPlugin);
      c(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: t,
            latest_artifact: n
          } = e.data.data.update_conversation_latest_artifact_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationUpdateLatestArtifact",
            meta: {
              conversation_id: t,
              latest_artifact: n
            }
          });
          let a = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
          if (a && t && !isNullishCheck.isNil(n)) {
            updateConversationState.updateConversation({
              ...a,
              conversation_id: t,
              latest_artifact: n
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationUpdateLatestArtifactMessageCmdPlugin: function () {
      return u;
    }
  });
}