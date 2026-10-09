// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendFileSymbol'
// - Resolved require(79109) to 'chat-send-file-symbol'
// - Renamed variable 'r' to 'threadAttachmentNodeView'
// - Resolved require(707219) to 'thread-attachment-node-view'
// - Updated imported property 's' to 'sendFileContent' (module 79109)
// - Updated imported property 'U' to 'ChatAttachmentNode' (module 707219)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24528.61eb8368.js
         * chunkId: 24528
         * moduleId: 446601
         */
module.exports = function (module, exports, require) {
  var chatSendFileSymbol = require("chat-send-file-symbol") /*id: 79109*/;
  var threadAttachmentNodeView = require("thread-attachment-node-view") /*id: 707219*/;
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
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatSendFileSymbol.sendFileContent);
      o(this, "Content", threadAttachmentNodeView.ChatAttachmentNode);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendFileContentPlugin: function () {
      return s;
    }
  });
}