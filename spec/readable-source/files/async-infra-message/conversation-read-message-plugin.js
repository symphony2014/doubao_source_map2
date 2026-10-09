// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 'o' to 'conversationReadStateHandler'
// - Resolved require(102954) to 'conversation-read-state-handler'
// - Renamed variable 's' to 'conversationReadSymbol'
// - Resolved require(438410) to 'conversation-read-symbol'
// - Updated imported property 'tN' to 'getChatId' (module 837195)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'y' to 'syncConvBadgeState' (module 102954)
// - Updated imported property 'n' to 'ConversationRead' (module 438410)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 95535
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var conversationReadStateHandler = require("conversation-read-state-handler") /*id: 102954*/;
  var conversationReadSymbol = require("conversation-read-symbol") /*id: 438410*/;
  class l {
    onMessageReceivingUpdate(e, t) {
      let n = chatViewCoreSelectors.getChatId() || "";
      let s = chatMessageStatusCheck.isMessageFinished(t);
      let {
        index: l,
        conversation_id: a
      } = t;
      if (s && a && l) {
        conversationReadStateHandler.syncConvBadgeState(a, Number(l), n);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = conversationReadSymbol.ConversationRead;
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
    ConversationReadMessageLifeCyclePlugin: function () {
      return l;
    }
  });
}