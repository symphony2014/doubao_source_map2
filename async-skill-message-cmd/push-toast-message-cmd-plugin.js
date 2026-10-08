// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 'r' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 'o' to 'pushToastMessageCmdPluginSymbol'
// - Resolved require(603539) to 'push-toast-message-cmd-plugin-symbol'
// - Updated imported property 'Q' to 'pushToastMessageCmdPluginSymbol' (module 603539)
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 478720
         */
module.exports = function (module, exports, require) {
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var pushToastMessageCmdPluginSymbol = require("push-toast-message-cmd-plugin-symbol") /*id: 603539*/;
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
      a(this, "pluginIdentifier", pushToastMessageCmdPluginSymbol.pushToastMessageCmdPluginSymbol);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t
          } = e.data.data;
          initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.clearContext, {
            conversationId: t
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PushToastMessageCmdPlugin: function () {
      return s;
    }
  });
}