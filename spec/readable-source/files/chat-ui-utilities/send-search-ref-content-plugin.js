// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendSearchRefSymbol'
// - Resolved require(35160) to 'send-search-ref-symbol'
// - Renamed variable 'r' to 'chatMessageBubbleView'
// - Resolved require(351464) to 'chat-message-bubble-view'
// - Updated imported property 'G' to 'sendSearchRefSymbol' (module 35160)
// - Updated imported property 'x' to 'ChatMessageRenderer' (module 351464)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 776108
         */
module.exports = function (module, exports, require) {
  var sendSearchRefSymbol = require("send-search-ref-symbol") /*id: 35160*/;
  var chatMessageBubbleView = require("chat-message-bubble-view") /*id: 351464*/;
  function o(e, t, n) {
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
      o(this, "pluginIdentifier", sendSearchRefSymbol.sendSearchRefSymbol);
      o(this, "Content", chatMessageBubbleView.ChatMessageRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendSearchRefContentPlugin: function () {
      return s;
    }
  });
}