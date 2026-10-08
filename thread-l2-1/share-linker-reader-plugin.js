// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatLinkerReaderSymbol'
// - Resolved require(836571) to 'chat-linker-reader-symbol'
// - Renamed variable 'l' to 'thinkingQueryItemRenderer'
// - Resolved require(348895) to 'thinking-query-item-renderer'
// - Updated imported property 'F' to 'receiveLinkerBlockContent' (module 836571)
// - Updated imported property 'G' to 'renderThinkingQueryItem' (module 348895)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 502906
         */
module.exports = function (module, exports, require) {
  var chatLinkerReaderSymbol = require("chat-linker-reader-symbol") /*id: 836571*/;
  var thinkingQueryItemRenderer = require("thinking-query-item-renderer") /*id: 348895*/;
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
      r(this, "pluginIdentifier", chatLinkerReaderSymbol.receiveLinkerBlockContent);
      r(this, "type", "Content");
      r(this, "Content", thinkingQueryItemRenderer.renderThinkingQueryItem);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveLinkerReaderBlockContentPlugin: function () {
      return o;
    }
  });
}