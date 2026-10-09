// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPptCreationSymbol'
// - Resolved require(284621) to 'chat-ppt-creation-symbol'
// - Renamed variable 'r' to 'pptSkillMessageContent'
// - Resolved require(846990) to 'ppt-skill-message-content'
// - Updated imported property '$' to 'pptCreationSymbol' (module 284621)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 638757
         */
module.exports = function (module, exports, require) {
  var chatPptCreationSymbol = require("chat-ppt-creation-symbol") /*id: 284621*/;
  var pptSkillMessageContent = require("ppt-skill-message-content") /*id: 846990*/;
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
      o(this, "pluginIdentifier", chatPptCreationSymbol.pptCreationSymbol);
      o(this, "Content", pptSkillMessageContent.MessageSendPptSkillContent);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendPptCreationContentPlugin: function () {
      return l;
    }
  });
}