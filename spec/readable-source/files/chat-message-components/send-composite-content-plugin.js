// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendCompositeSymbol'
// - Resolved require(168939) to 'chat-send-composite-symbol'
// - Renamed variable 'l' to 'chatMessageContentRenderer'
// - Resolved require(633823) to 'chat-message-content-renderer'
// - Updated imported property 'e' to 'sendCompositeSymbol' (module 168939)
// - Updated imported property 'l' to 'ChatMessageContent' (module 633823)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14920.5124a06d.js
         * chunkId: 14920
         * moduleId: 535590
         */
module.exports = function (module, exports, require) {
  var chatSendCompositeSymbol = require("chat-send-composite-symbol") /*id: 168939*/;
  var chatMessageContentRenderer = require("chat-message-content-renderer") /*id: 633823*/;
  function r(e, t, n) {
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
  class a {
    constructor() {
      r(this, "pluginIdentifier", chatSendCompositeSymbol.sendCompositeSymbol);
      r(this, "Content", chatMessageContentRenderer.ChatMessageContent);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendCompositeContentPlugin: function () {
      return a;
    }
  });
}