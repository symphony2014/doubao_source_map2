// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchImageSymbol'
// - Resolved require(606278) to 'chat-search-image-symbol'
// - Renamed variable 'r' to 'chatImageGridPreviewWrapper'
// - Resolved require(36540) to 'chat-image-grid-preview-wrapper'
// - Updated imported property 'Y' to 'receiveSearchImage' (module 606278)
// - Updated imported property 'n' to 'ChatImageGridPreview' (module 36540)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 784284
         */
module.exports = function (module, exports, require) {
  var chatSearchImageSymbol = require("chat-search-image-symbol") /*id: 606278*/;
  var chatImageGridPreviewWrapper = require("chat-image-grid-preview-wrapper") /*id: 36540*/;
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
  class a {
    constructor() {
      o(this, "pluginIdentifier", chatSearchImageSymbol.receiveSearchImage);
      o(this, "Content", chatImageGridPreviewWrapper.ChatImageGridPreview);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchImageContentPlugin: function () {
      return a;
    }
  });
}