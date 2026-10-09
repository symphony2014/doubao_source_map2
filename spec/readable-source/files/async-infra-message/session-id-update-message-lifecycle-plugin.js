// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'conversationSectionUpdater'
// - Resolved require(494219) to 'conversation-section-updater'
// - Renamed variable 'r' to 'conversationStateUpdate'
// - Resolved require(68767) to 'conversation-state-update'
// - Renamed variable 'o' to 'sessionIdUpdateSymbol'
// - Resolved require(516930) to 'session-id-update-symbol'
// - Updated imported property 'D' to 'updateConvBadgeState' (module 68767)
// - Updated imported property '_' to 'updateConversationSection' (module 494219)
// - Updated imported property 'w' to 'sessionIdUpdate' (module 516930)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 665470
         */
module.exports = function (module, exports, require) {
  var conversationSectionUpdater = require("conversation-section-updater") /*id: 494219*/;
  var conversationStateUpdate = require("conversation-state-update") /*id: 68767*/;
  var sessionIdUpdateSymbol = require("session-id-update-symbol") /*id: 516930*/;
  class s {
    onMessageSendingEnd(e, t) {
      let {
        conversation_id: n = ""
      } = t;
      if (t.index) {
        let e = Number(t.index);
        conversationStateUpdate.updateConvBadgeState({
          conversationId: n,
          readMessageIndex: e,
          messageIndex: e,
          readBadgeCount: e,
          badgeCount: e,
          scene: "sse"
        });
      }
      if (t.section_id) {
        conversationSectionUpdater.updateConversationSection(n, t.section_id);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = sessionIdUpdateSymbol.sessionIdUpdate;
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
    SessionIdUpdateMessageLifeCyclePlugin: function () {
      return s;
    }
  });
}