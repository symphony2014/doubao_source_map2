// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docxGuidanceEventEmitter'
// - Resolved require(801024) to 'docx-guidance-event-emitter'
// - Renamed variable 'r' to 'promisifyLifecycleKey'
// - Resolved require(220141) to 'promisify-lifecycle-key'
// - Updated imported property 'T' to 'guidanceEmitter' (module 801024)
// - Updated imported property 'R' to 'lifecyclePluginKey' (module 220141)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 886013
         */
module.exports = function (module, exports, require) {
  var docxGuidanceEventEmitter = require("docx-guidance-event-emitter") /*id: 801024*/;
  var promisifyLifecycleKey = require("promisify-lifecycle-key") /*id: 220141*/;
  class o {
    onMessageSendingEnd(e, t) {
      docxGuidanceEventEmitter.guidanceEmitter.emit("on_send_message_end", t);
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = promisifyLifecycleKey.lifecyclePluginKey;
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
    MessagePromisifyMessageLifeCyclePlugin: function () {
      return o;
    }
  });
}