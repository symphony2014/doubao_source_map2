// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchImageSymbol'
// - Resolved require(606278) to 'chat-search-image-symbol'
// - Renamed variable 'l' to 'chatImageGridPreviewWrapper'
// - Resolved require(36540) to 'chat-image-grid-preview-wrapper'
// - Updated imported property 'Y' to 'receiveSearchImage' (module 606278)
// - Updated imported property 'n' to 'ChatImageGridPreview' (module 36540)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 255051
         */
module.exports = function (module, exports, require) {
  var chatSearchImageSymbol = require("chat-search-image-symbol") /*id: 606278*/;
  var chatImageGridPreviewWrapper = require("chat-image-grid-preview-wrapper") /*id: 36540*/;
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
      r(this, "pluginIdentifier", chatSearchImageSymbol.receiveSearchImage);
      r(this, "Content", chatImageGridPreviewWrapper.ChatImageGridPreview);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchImageContentPlugin: function () {
      return o;
    }
  });
}