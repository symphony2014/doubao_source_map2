// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatWidgetRenderer'
// - Resolved require(907668) to 'chat-widget-renderer'
// - Renamed variable 'l' to 'fpaWidgetContentSymbol'
// - Resolved require(244131) to 'fpa-widget-content-symbol'
// - Updated imported property 'H' to 'receiveFpaWidget' (module 244131)
// - Updated imported property 'B' to 'ChatWidgetRenderer' (module 907668)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 46206
         */
module.exports = function (module, exports, require) {
  var chatWidgetRenderer = require("chat-widget-renderer") /*id: 907668*/;
  var fpaWidgetContentSymbol = require("fpa-widget-content-symbol") /*id: 244131*/;
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
      r(this, "pluginIdentifier", fpaWidgetContentSymbol.receiveFpaWidget);
      r(this, "Content", chatWidgetRenderer.ChatWidgetRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveFPAWidgetContentPlugin: function () {
      return o;
    }
  });
}