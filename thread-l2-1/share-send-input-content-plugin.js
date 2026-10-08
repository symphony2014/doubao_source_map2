// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendWriteInputSymbol'
// - Resolved require(336112) to 'chat-send-write-input-symbol'
// - Renamed variable 'l' to 'messageAttachmentsRenderer'
// - Resolved require(686554) to 'message-attachments-renderer'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'A' to 'MessageAttachmentsRenderer' (module 686554)
// - Updated imported property 'l' to 'chatInputWriteSymbol' (module 336112)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 974415
         */
module.exports = function (module, exports, require) {
  var chatSendWriteInputSymbol = require("chat-send-write-input-symbol") /*id: 336112*/;
  var messageAttachmentsRenderer = require("message-attachments-renderer") /*id: 686554*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(messageAttachmentsRenderer.MessageAttachmentsRenderer, {
    ...e,
    viewOnly: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatSendWriteInputSymbol.chatInputWriteSymbol);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendWriteInputContentPlugin: function () {
      return s;
    }
  });
}