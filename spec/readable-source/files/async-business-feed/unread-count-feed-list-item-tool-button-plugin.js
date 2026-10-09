// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConversationUnreadBadge'
// - Resolved require(66044) to 'chat-conversation-unread-badge'
// - Updated imported property 'N' to 'ConversationUnreadBadge' (module 66044)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-feed.d498fbc7.js
         * chunkId: 57288
         * moduleId: 157304
         */
module.exports = function (module, exports, require) {
  var chatConversationUnreadBadge = require("chat-conversation-unread-badge") /*id: 66044*/;
  class a {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = chatConversationUnreadBadge.ConversationUnreadBadge;
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
    UnreadCountFeedListItemToolButtonPlugin: function () {
      return a;
    }
  });
}