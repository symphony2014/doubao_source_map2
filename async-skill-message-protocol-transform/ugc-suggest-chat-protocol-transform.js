// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatUgcSuggestSymbol'
// - Resolved require(215580) to 'chat-ugc-suggest-symbol'
// - Updated imported property 'E' to 'ugcSuggestSymbol' (module 215580)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 240377
         */
module.exports = function (module, exports, require) {
  var chatUgcSuggestSymbol = require("chat-ugc-suggest-symbol") /*id: 215580*/;
  class r {
    samanthaChatMessageToMessage(e) {
      if (e.content_obj?.suggest) {
        e.content_obj = {
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
      t = chatUgcSuggestSymbol.ugcSuggestSymbol;
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
    UGCSuggestChatProtocolTransformPlugin: function () {
      return r;
    }
  });
}