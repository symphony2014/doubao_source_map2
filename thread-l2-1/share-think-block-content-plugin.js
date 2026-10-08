// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatThinkingBlockSymbol'
// - Resolved require(597726) to 'chat-thinking-block-symbol'
// - Renamed variable 'l' to 'chatDeepThinkingBlock'
// - Resolved require(944691) to 'chat-deep-thinking-block'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'DeepThinkBlock' (module 944691)
// - Updated imported property 'F' to 'thinkingBlockSymbol' (module 597726)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 594865
         */
module.exports = function (module, exports, require) {
  var chatThinkingBlockSymbol = require("chat-thinking-block-symbol") /*id: 597726*/;
  var chatDeepThinkingBlock = require("chat-deep-thinking-block") /*id: 944691*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(chatDeepThinkingBlock.DeepThinkBlock, {
    ...e,
    share: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatThinkingBlockSymbol.thinkingBlockSymbol);
      o(this, "type", "Content");
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveThinkBlockContentPlugin: function () {
      return s;
    }
  });
}