// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPptGenerateSymbol'
// - Resolved require(332083) to 'chat-ppt-generate-symbol'
// - Resolved require(358907) to 'event-emitter-class'
// - Updated imported property 'M' to 'EventEmitter' (module 358907)
// - Updated imported property 'l' to 'pptGenerateKey' (module 332083)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 915100
         */
module.exports = function (module, exports, require) {
  var chatPptGenerateSymbol = require("chat-ppt-generate-symbol") /*id: 332083*/;
  let r = new (require("event-emitter-class") /*id: 358907*/.EventEmitter)();
  class a {
    beforeMessageSending(e, t) {
      var n;
      if ((n = r.get("beforeMessageSending")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    onMessageReceivingUpdate(e, t) {
      var n;
      if ((n = r.get("onMessageReceivingUpdate")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatPptGenerateSymbol.pptGenerateKey;
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
    PPTGenerateMessageLifeCyclePlugin: function () {
      return a;
    }
  });
}