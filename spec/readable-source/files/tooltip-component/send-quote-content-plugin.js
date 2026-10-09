// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendQuotaContentSymbol'
// - Resolved require(767585) to 'send-quota-content-symbol'
// - Renamed variable 'r' to 'threadMessageQuoteRenderer'
// - Resolved require(91826) to 'thread-message-quote-renderer'
// - Updated imported property 'b' to 'sendQuotaContent' (module 767585)
// - Updated imported property 'Ve' to 'ThreadMessageView' (module 91826)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14473.5ec9d82c.js
         * chunkId: 14473
         * moduleId: 876037
         */
module.exports = function (module, exports, require) {
  var sendQuotaContentSymbol = require("send-quota-content-symbol") /*id: 767585*/;
  var threadMessageQuoteRenderer = require("thread-message-quote-renderer") /*id: 91826*/;
  function o(t, e, n) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  class s {
    constructor() {
      o(this, "pluginIdentifier", sendQuotaContentSymbol.sendQuotaContent);
      o(this, "Content", threadMessageQuoteRenderer.ThreadMessageView);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendQuoteContentPlugin: function () {
      return s;
    }
  });
}