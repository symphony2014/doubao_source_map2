// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'sendNestedContentSymbol'
// - Resolved require(845036) to 'send-nested-content-symbol'
// - Renamed variable 'r' to 'chatMessageAttachmentRenderer'
// - Resolved require(704764) to 'chat-message-attachment-renderer'
// - Updated imported property 'c' to 'sendNestedContent' (module 845036)
// - Updated imported property 'mO' to 'renderChatMessageAttachments' (module 704764)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 949163
         */
module.exports = function (module, exports, require) {
  var sendNestedContentSymbol = require("send-nested-content-symbol") /*id: 845036*/;
  var chatMessageAttachmentRenderer = require("chat-message-attachment-renderer") /*id: 704764*/;
  function o(e, t, i) {
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
  class l {
    constructor() {
      o(this, "pluginIdentifier", sendNestedContentSymbol.sendNestedContent);
      o(this, "Content", chatMessageAttachmentRenderer.renderChatMessageAttachments);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendNestedContentPlugin: function () {
      return l;
    }
  });
}