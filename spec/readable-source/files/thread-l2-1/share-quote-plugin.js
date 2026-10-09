// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageLinkPreviewRenderer'
// - Resolved require(354183) to 'message-link-preview-renderer'
// - Renamed variable 'l' to 'sendLinkQuotaSymbol'
// - Resolved require(266064) to 'send-link-quota-symbol'
// - Updated imported property 'x' to 'sendLinkQuotaSymbol' (module 266064)
// - Updated imported property 'g' to 'renderMessageLinkPreview' (module 354183)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 322172
         */
module.exports = function (module, exports, require) {
  var messageLinkPreviewRenderer = require("message-link-preview-renderer") /*id: 354183*/;
  var sendLinkQuotaSymbol = require("send-link-quota-symbol") /*id: 266064*/;
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
      r(this, "pluginIdentifier", sendLinkQuotaSymbol.sendLinkQuotaSymbol);
      r(this, "Content", messageLinkPreviewRenderer.renderMessageLinkPreview);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendLinkQuoteContentPlugin: function () {
      return o;
    }
  });
}