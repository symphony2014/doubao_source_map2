// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendImageContentSymbol'
// - Resolved require(369363) to 'send-image-content-symbol'
// - Renamed variable 'l' to 'messageImageContentRenderer_1'
// - Resolved require(871547) to 'message-image-content-renderer_1'
// - Updated imported property 'K' to 'sendImageContent' (module 369363)
// - Updated imported property 'r' to 'MessageImageContent' (module 871547)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 995945
         */
module.exports = function (module, exports, require) {
  var sendImageContentSymbol = require("send-image-content-symbol") /*id: 369363*/;
  var messageImageContentRenderer_1 = require("message-image-content-renderer_1") /*id: 871547*/;
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
      r(this, "pluginIdentifier", sendImageContentSymbol.sendImageContent);
      r(this, "Content", messageImageContentRenderer_1.MessageImageContent);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendImageContentPlugin: function () {
      return o;
    }
  });
}