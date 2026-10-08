// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'r' to 'chatClearContextSymbol'
// - Resolved require(999332) to 'chat-clear-context-symbol'
// - Updated imported property 'FN' to 'defaultToast' (module 697541)
// - Updated imported property 'X' to 'clearContextSymbol' (module 999332)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 258497
         */
module.exports = function (module, exports, require) {
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var chatClearContextSymbol = require("chat-clear-context-symbol") /*id: 999332*/;
  var a = {
    clearContextToast: "clear-context-toast-K3df_G"
  };
  class o {
    onBatchMessageReceivingEnd(e, t) {
      if (t == null ? undefined : t.ext?.clear_context_send_toast) {
        samanthaToastFactory.defaultToast.warning({
          showClose: false,
          content: t == null ? undefined : t.ext?.clear_context_toast,
          className: a.clearContextToast
        });
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatClearContextSymbol.clearContextSymbol;
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
    ClearContextMessageLifeCyclePlugin: function () {
      return o;
    }
  });
}