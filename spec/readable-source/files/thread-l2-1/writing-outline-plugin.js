// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatWritingOutlineSymbol'
// - Resolved require(554110) to 'chat-writing-outline-symbol'
// - Renamed variable 'l' to 'messageOutlineRenderer'
// - Resolved require(95837) to 'message-outline-renderer'
// - Updated imported property 'J' to 'writingOutlineKey' (module 554110)
// - Updated imported property 'l' to 'MessageOutlineRenderer' (module 95837)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 731926
         */
module.exports = function (module, exports, require) {
  var chatWritingOutlineSymbol = require("chat-writing-outline-symbol") /*id: 554110*/;
  var messageOutlineRenderer = require("message-outline-renderer") /*id: 95837*/;
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
      r(this, "pluginIdentifier", chatWritingOutlineSymbol.writingOutlineKey);
      r(this, "Content", messageOutlineRenderer.MessageOutlineRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveProfessionalWritingOutlinePlugin: function () {
      return o;
    }
  });
}