// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'immerProduceCore'
// - Resolved require(949322) to 'immer-produce-core'
// - Renamed variable 'r' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'conversationUpdateNameSymbol'
// - Resolved require(284998) to 'conversation-update-name-symbol'
// - Updated imported property 't' to 'conversationNameKey' (module 284998)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Uy' to 'produce' (module 949322)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 821647
         */
module.exports = function (module, exports, require) {
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationUpdateNameSymbol = require("conversation-update-name-symbol") /*id: 284998*/;
  function a(e, t, n) {
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
  class l {
    constructor() {
      a(this, "pluginIdentifier", conversationUpdateNameSymbol.conversationNameKey);
      a(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: t,
            conversation_name: n
          } = e.data.data.update_conversation_name_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationUpdateName",
            meta: {
              conversation_id: t
            }
          });
          if (t && n) {
            try {
              chatFeedStoreFactory.useFeedStore.setState(immerProduceCore.produce(e => {
                if (e.conversationMap[t]) {
                  e.conversationMap = {
                    ...e.conversationMap,
                    [t]: {
                      ...e.conversationMap[t],
                      name: n
                    }
                  };
                }
                return e;
              }));
            } catch (e) {
              if (e instanceof Error) {
                loggerServiceCore.defaultLogger.persist.error({
                  message: "ConversationUpdateName failed",
                  error: e
                });
              }
            }
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationUpdateMessageCmdPlugin: function () {
      return l;
    }
  });
}