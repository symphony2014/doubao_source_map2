// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConversationLinkInsert'
// - Resolved require(146291) to 'chat-conversation-link-insert'
// - Renamed variable 'a' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'i' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'o' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 's' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'l' to 'conversationPinLifecycleSymbol'
// - Resolved require(595961) to 'conversation-pin-lifecycle-symbol'
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'o' to 'insertConversationLink' (module 146291)
// - Updated imported property 'Pn' to 'getSourceKeySync' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'B' to 'pinLifecycleSymbol' (module 595961)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 977454
         */
module.exports = function (module, exports, require) {
  var chatConversationLinkInsert = require("chat-conversation-link-insert") /*id: 146291*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var conversationPinLifecycleSymbol = require("conversation-pin-lifecycle-symbol") /*id: 595961*/;
  class c {
    beforeMessageSending(e, t) {
      let {
        conversation_id: n
      } = t;
      if (n && n !== "0") {
        let e = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), n);
        if (e) {
          chatConversationLinkInsert.insertConversationLink({
            conversationId: n,
            index: 1
          });
        }
        let t = (chatFgStoreHooks.getSourceKeySync("vlist", {
          source: chatStorageKeys.chatStorageKeys.serverAB,
          defaultValue: "0"
        }) || "0") === "1";
        if (e && !t) {
          let e = document.getElementById("to-bottom-button");
          if (e && e.dataset?.visible === "true") {
            setTimeout(() => {
              var t;
              if ((t = e.click) === null || t === undefined) {
                return undefined;
              } else {
                return t.call(e);
              }
            }, 100);
          }
        }
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = conversationPinLifecycleSymbol.pinLifecycleSymbol;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
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
    ConversationPinMessageLifeCyclePlugin: function () {
      return c;
    }
  });
}