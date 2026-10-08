// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'conversationStateUpdate'
// - Resolved require(68767) to 'conversation-state-update'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'chatConversationReadCmdSymbol'
// - Resolved require(688809) to 'chat-conversation-read-cmd-symbol'
// - Updated imported property 'O' to 'readMessageCmdSymbol' (module 688809)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'D' to 'updateConvBadgeState' (module 68767)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 148093
         */
module.exports = function (module, exports, require) {
  var conversationStateUpdate = require("conversation-state-update") /*id: 68767*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConversationReadCmdSymbol = require("chat-conversation-read-cmd-symbol") /*id: 688809*/;
  function s(e, t, n) {
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
  class a {
    constructor() {
      s(this, "pluginIdentifier", chatConversationReadCmdSymbol.readMessageCmdSymbol);
      s(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t,
            ext: {
              read_message_index: n,
              message_index: o,
              conversation_id: s = t || ""
            } = {}
          } = e.data.data;
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationRead",
            meta: {
              conversation_id: s,
              read_message_index: n,
              message_index: o
            }
          });
          if (n && o) {
            conversationStateUpdate.updateConvBadgeState({
              conversationId: s,
              readMessageIndex: Number(n),
              messageIndex: Number(o),
              scene: "cmd-50030"
            });
          }
        }
        if (e.data.version === "2.0") {
          let {
            conversation_id: t,
            badge_count: n,
            read_badge_count: o
          } = e.data.data.mark_read_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationRead",
            meta: {
              conversation_id: t,
              badge_count: n,
              read_badge_count: o
            }
          });
          if (t && n && o) {
            conversationStateUpdate.updateConvBadgeState({
              conversationId: t,
              badgeCount: Number(n),
              readBadgeCount: Number(o),
              scene: "cmd-50030"
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationReadMessageCmdPlugin: function () {
      return a;
    }
  });
}