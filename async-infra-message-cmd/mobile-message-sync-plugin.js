// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'initConversationMessageList'
// - Resolved require(767528) to 'init-conversation-message-list'
// - Renamed variable 'r' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'mobileMsgSyncPluginSymbol'
// - Resolved require(881397) to 'mobile-msg-sync-plugin-symbol'
// - Updated imported property 'A' to 'MessageSyncPlugin' (module 881397)
// - Updated imported property 'y_' to 'processMessageList' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'C' to 'initMessageList' (module 767528)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 382163
         */
module.exports = function (module, exports, require) {
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var mobileMsgSyncPluginSymbol = require("mobile-msg-sync-plugin-symbol") /*id: 881397*/;
  function l(e, t, n) {
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
  class c {
    constructor() {
      l(this, "pluginIdentifier", mobileMsgSyncPluginSymbol.MessageSyncPlugin);
      l(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: t,
            message_index: n,
            limit: a,
            ext: l
          } = e.data.data.pull_msg_notify || {};
          let {
            message: c
          } = conversationMessageUtils_1.processMessageList(chatMessageStoreFactory.createMessageStore.getState(), t ?? "", e => {
            let {
              getMessage: t
            } = e;
            let n = t();
            return n != null && !!n.message_id;
          });
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MobileMessageSync",
            meta: {
              conversation_id: t,
              message_index: n,
              limit: a,
              current_last_index: c == null ? undefined : c.index
            }
          });
          if (t) {
            let e = {
              pull_single_chain_scene: (l == null ? undefined : l.pull_single_chain_scene) || ""
            };
            if ((c == null ? undefined : c.index) !== undefined && n !== undefined && c.index < n || (c == null ? undefined : c.index) === undefined || n === undefined) {
              loggerServiceCore.defaultLogger.persist.info({
                message: "Cmd: MobileMessageSync Pull Single Chain",
                meta: {
                  conversation_id: t,
                  message_index: n,
                  limit: a,
                  current_last_index: c == null ? undefined : c.index
                }
              });
              initConversationMessageList.initMessageList({
                conversationId: t,
                messageIndex: Number.MAX_SAFE_INTEGER,
                v2ApiExt: e
              });
            }
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MobileMessageSyncMessageCmdPlugin: function () {
      return c;
    }
  });
}