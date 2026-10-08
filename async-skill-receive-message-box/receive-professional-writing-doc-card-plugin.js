// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSkillMessageCard'
// - Resolved require(351565) to 'chat-skill-message-card'
// - Renamed variable 'r' to 'chatReceiveWritingCard'
// - Resolved require(430466) to 'chat-receive-writing-card'
// - Updated imported property 'I' to 'receiveWritingCard' (module 430466)
// - Updated imported property 'W' to 'SkillMessageCard' (module 351565)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 663428
         */
module.exports = function (module, exports, require) {
  var chatSkillMessageCard = require("chat-skill-message-card") /*id: 351565*/;
  var chatReceiveWritingCard = require("chat-receive-writing-card") /*id: 430466*/;
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
      o(this, "pluginIdentifier", chatReceiveWritingCard.receiveWritingCard);
      o(this, "Content", chatSkillMessageCard.SkillMessageCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveProfessionalWritingDocCardPlugin: function () {
      return a;
    }
  });
}