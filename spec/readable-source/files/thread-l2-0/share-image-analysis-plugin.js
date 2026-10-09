// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatImageAnalysisSymbol'
// - Resolved require(507898) to 'chat-image-analysis-symbol'
// - Renamed variable 'r' to 'thinkingImageDisplayItem'
// - Resolved require(925611) to 'thinking-image-display-item'
// - Updated imported property '_' to 'receiveImageBlock' (module 507898)
// - Updated imported property 'c' to 'MessageThinkingWrapper' (module 925611)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 390753
         */
module.exports = function (module, exports, require) {
  var chatImageAnalysisSymbol = require("chat-image-analysis-symbol") /*id: 507898*/;
  var thinkingImageDisplayItem = require("thinking-image-display-item") /*id: 925611*/;
  function a(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class o {
    constructor() {
      a(this, "pluginIdentifier", chatImageAnalysisSymbol.receiveImageBlock);
      a(this, "type", "Content");
      a(this, "Content", thinkingImageDisplayItem.MessageThinkingWrapper);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveImageAnalysisBlockContentPlugin: function () {
      return o;
    }
  });
}