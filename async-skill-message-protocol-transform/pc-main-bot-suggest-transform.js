// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'pcMainBotSuggestSymbol'
// - Resolved require(822998) to 'pc-main-bot-suggest-symbol'
// - Updated imported property 't' to 'pcMainBotSuggestKey' (module 822998)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 512851
         */
module.exports = function (module, exports, require) {
  var pcMainBotSuggestSymbol = require("pc-main-bot-suggest-symbol") /*id: 822998*/;
  class r {
    samanthaChatMessageToMessage(e) {
      if (e.content_obj?.suggest) {
        e.content_obj = {
          ...e.content_obj,
          suggest: [e.content_obj.suggest]
        };
      }
      return e;
    }
    aliceChatMessageToMessage(e) {
      return e;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = pcMainBotSuggestSymbol.pcMainBotSuggestKey;
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
    PcMainBotSuggestChatProtocolTransformPlugin: function () {
      return r;
    }
  });
}