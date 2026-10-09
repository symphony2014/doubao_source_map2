// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'thinkingQueryBlock'
// - Resolved require(845270) to 'thinking-query-block'
// - Renamed variable 'r' to 'chatLocalLifeBlockSymbol'
// - Resolved require(881676) to 'chat-local-life-block-symbol'
// - Updated imported property 'L' to 'chatLocalLifeSymbol' (module 881676)
// - Updated imported property 'w' to 'thinkingQueryBlock' (module 845270)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 808823
         */
module.exports = function (module, exports, require) {
  var thinkingQueryBlock = require("thinking-query-block") /*id: 845270*/;
  var chatLocalLifeBlockSymbol = require("chat-local-life-block-symbol") /*id: 881676*/;
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
      o(this, "pluginIdentifier", chatLocalLifeBlockSymbol.chatLocalLifeSymbol);
      o(this, "type", "Content");
      o(this, "Content", thinkingQueryBlock.thinkingQueryBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveLocalLifeBlockContentPlugin: function () {
      return l;
    }
  });
}