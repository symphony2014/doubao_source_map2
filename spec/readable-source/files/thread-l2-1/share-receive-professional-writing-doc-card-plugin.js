// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatReceiveWritingCard'
// - Resolved require(430466) to 'chat-receive-writing-card'
// - Renamed variable 'l' to 'threadMessageFileCardComponent'
// - Resolved require(284713) to 'thread-message-file-card-component'
// - Updated imported property 'I' to 'receiveWritingCard' (module 430466)
// - Updated imported property 'j' to 'ThreadMessageFileCard' (module 284713)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 442828
         */
module.exports = function (module, exports, require) {
  var chatReceiveWritingCard = require("chat-receive-writing-card") /*id: 430466*/;
  var threadMessageFileCardComponent = require("thread-message-file-card-component") /*id: 284713*/;
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
      r(this, "pluginIdentifier", chatReceiveWritingCard.receiveWritingCard);
      r(this, "Content", threadMessageFileCardComponent.ThreadMessageFileCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveProfessionalWritingDocCardPlugin: function () {
      return o;
    }
  });
}