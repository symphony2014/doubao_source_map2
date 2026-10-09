// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'r' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 'o' to 'superTaskCmdSymbol'
// - Resolved require(637964) to 'super-task-cmd-symbol'
// - Updated imported property 'S' to 'superTaskCmdSymbol' (module 637964)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'rw' to 'getSuperTaskStore' (module 654619)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 226587
         */
module.exports = function (module, exports, require) {
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var superTaskCmdSymbol = require("super-task-cmd-symbol") /*id: 637964*/;
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
      a(this, "pluginIdentifier", superTaskCmdSymbol.superTaskCmdSymbol);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let t = e.data.data.message_id;
          if (t && e.data.data.conversation_id === chatFeedStoreFactory.useFeedStore.getState().currentActiveConversationId) {
            superTaskStore.getSuperTaskStore().getState().updateOverloadMessageToastMap(t, true);
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskOverloadMessageCmdPlugin: function () {
      return s;
    }
  });
}