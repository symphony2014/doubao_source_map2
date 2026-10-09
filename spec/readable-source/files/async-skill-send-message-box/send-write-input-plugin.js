// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageAttachmentsRenderer'
// - Resolved require(686554) to 'message-attachments-renderer'
// - Renamed variable 'r' to 'chatSendWriteInputSymbol'
// - Resolved require(336112) to 'chat-send-write-input-symbol'
// - Updated imported property 'l' to 'chatInputWriteSymbol' (module 336112)
// - Updated imported property 'A' to 'MessageAttachmentsRenderer' (module 686554)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 616158
         */
module.exports = function (module, exports, require) {
  var messageAttachmentsRenderer = require("message-attachments-renderer") /*id: 686554*/;
  var chatSendWriteInputSymbol = require("chat-send-write-input-symbol") /*id: 336112*/;
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
      o(this, "pluginIdentifier", chatSendWriteInputSymbol.chatInputWriteSymbol);
      o(this, "Content", messageAttachmentsRenderer.MessageAttachmentsRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendWriteInputContentPlugin: function () {
      return l;
    }
  });
}