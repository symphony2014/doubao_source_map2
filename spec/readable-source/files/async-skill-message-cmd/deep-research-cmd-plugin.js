// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageLinkRetriever'
// - Resolved require(186068) to 'chat-message-link-retriever'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'disableActionBarCmdSymbol'
// - Resolved require(717199) to 'disable-action-bar-cmd-symbol'
// - Updated imported property 'u' to 'disableActionBarCmd' (module 717199)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'E' to 'getRecentMessages' (module 186068)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 501251
         */
module.exports = function (module, exports, require) {
  var chatMessageLinkRetriever = require("chat-message-link-retriever") /*id: 186068*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var disableActionBarCmdSymbol = require("disable-action-bar-cmd-symbol") /*id: 717199*/;
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
  class s {
    constructor() {
      a(this, "pluginIdentifier", disableActionBarCmdSymbol.disableActionBarCmd);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          var n;
          let a = (n = chatStoreManager.getStoreState("chatViewCoreStore")) === null || n === undefined ? undefined : n.currentChatViewConfig?.chatId;
          if (a === e.data.data.conversation_id) {
            chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(e.data.data.conversation_id ?? "");
          } else if (a == null ? undefined : a.startsWith("local_")) {
            let t = chatMessageLinkRetriever.getRecentMessages(a, 1);
            let n = t == null ? undefined : t[(t == null ? undefined : t.length) - 1];
            if ((n == null ? undefined : n.local_message_id) === e.data.data.local_message_id || (n == null ? undefined : n.reply_id) === e.data.data.local_message_id) {
              chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(a ?? "");
            }
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchMessageCmdPlugin: function () {
      return s;
    }
  });
}