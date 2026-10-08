// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatDeepThinkingBlock'
// - Resolved require(944691) to 'chat-deep-thinking-block'
// - Renamed variable 'r' to 'chatThinkingBlockSymbol'
// - Resolved require(597726) to 'chat-thinking-block-symbol'
// - Updated imported property 'F' to 'thinkingBlockSymbol' (module 597726)
// - Updated imported property 'E' to 'DeepThinkBlock' (module 944691)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 333576
         */
module.exports = function (module, exports, require) {
  var chatDeepThinkingBlock = require("chat-deep-thinking-block") /*id: 944691*/;
  var chatThinkingBlockSymbol = require("chat-thinking-block-symbol") /*id: 597726*/;
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
  class l {
    constructor() {
      o(this, "pluginIdentifier", chatThinkingBlockSymbol.thinkingBlockSymbol);
      o(this, "type", "Container");
      o(this, "Content", chatDeepThinkingBlock.DeepThinkBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveThinkingContainerBlockContentPlugin: function () {
      return l;
    }
  });
}