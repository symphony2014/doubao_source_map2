// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'r' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'localBreakSymbol'
// - Resolved require(773327) to 'local-break-symbol'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'M' to 'chatStatusTypes' (module 757046)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property '_' to 'localBreakSymbol' (module 773327)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 479787
         */
module.exports = function (module, exports, require) {
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var localBreakSymbol = require("local-break-symbol") /*id: 773327*/;
  class c {
    onMessageSendingEnd(e, t) {
      let r = t.conversation_id;
      let o = t.local_conversation_id;
      if (t.final_status?.message === "Success") {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
          if (o && r) {
            if (e != null) {
              e.moveSendMessageStatus(o, r);
            }
            if (chatStoreManager.getStore("chatInputStore").getState().sendMessageStatusMap[r] !== chatStatusActionTypes.chatStatusTypes.Default) {
              if (e != null) {
                e.updateSendMessageStatus(r, chatStatusActionTypes.chatStatusTypes.Receiving);
              }
            }
            return;
          }
          if (r) {
            if (e != null) {
              e.updateSendMessageStatus(r, chatStatusActionTypes.chatStatusTypes.Receiving);
            }
            return;
          }
        });
      }
      return t;
    }
    onMessageReceivingUpdate(e, t) {
      let n = t.conversation_id;
      if (!chatMessageStatusCheck.isMessageFinished(t) && !messageContentTypeAndStatusChecker.vlk(t)) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
          if (n) {
            if (e != null) {
              e.updateSendMessageStatus(n, chatStatusActionTypes.chatStatusTypes.Receiving);
            }
          }
        });
      }
      return t;
    }
    onMessageSessionEnd(e, t) {
      let n = t.local_conversation_id;
      let o = t.conversation_id;
      if (n && chatMessageStatusCheck.isMessageFinished(t)) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => e == null ? undefined : e.updateSendMessageStatus(n, chatStatusActionTypes.chatStatusTypes.Default));
      }
      if (o && chatMessageStatusCheck.isMessageFinished(t)) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => e == null ? undefined : e.updateSendMessageStatus(o, chatStatusActionTypes.chatStatusTypes.Default));
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = localBreakSymbol.localBreakSymbol;
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
    LocalBreakMessageLifeCyclePlugin: function () {
      return c;
    }
  });
}