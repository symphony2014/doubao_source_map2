// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendReadPdfLinkContentSymbol'
// - Resolved require(319723) to 'send-read-pdf-link-content-symbol'
// - Renamed variable 'l' to 'threadMessageLinkRenderer'
// - Resolved require(104989) to 'thread-message-link-renderer'
// - Updated imported property 'o' to 'getSendReadPdfSymbol' (module 319723)
// - Updated imported property 'u' to 'ThreadMessageLinkView' (module 104989)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 329984
         */
module.exports = function (module, exports, require) {
  var sendReadPdfLinkContentSymbol = require("send-read-pdf-link-content-symbol") /*id: 319723*/;
  var threadMessageLinkRenderer = require("thread-message-link-renderer") /*id: 104989*/;
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
  class o {
    constructor() {
      r(this, "pluginIdentifier", sendReadPdfLinkContentSymbol.getSendReadPdfSymbol);
      r(this, "Content", threadMessageLinkRenderer.ThreadMessageLinkView);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendReadPDFWithLinkContentPlugin: function () {
      return o;
    }
  });
}