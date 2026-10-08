// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'thinkingImageDisplayItem'
// - Resolved require(925611) to 'thinking-image-display-item'
// - Renamed variable 'r' to 'chatImageAnalysisSymbol'
// - Resolved require(507898) to 'chat-image-analysis-symbol'
// - Updated imported property '_' to 'receiveImageBlock' (module 507898)
// - Updated imported property 'c' to 'MessageThinkingWrapper' (module 925611)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 356190
         */
module.exports = function (module, exports, require) {
  var thinkingImageDisplayItem = require("thinking-image-display-item") /*id: 925611*/;
  var chatImageAnalysisSymbol = require("chat-image-analysis-symbol") /*id: 507898*/;
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
      o(this, "pluginIdentifier", chatImageAnalysisSymbol.receiveImageBlock);
      o(this, "type", "Content");
      o(this, "Content", thinkingImageDisplayItem.MessageThinkingWrapper);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveImageAnalysisBlockPlugin: function () {
      return l;
    }
  });
}