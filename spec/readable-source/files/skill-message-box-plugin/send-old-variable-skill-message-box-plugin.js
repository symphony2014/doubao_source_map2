// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatSkillContentSymbol'
// - Resolved require(321526) to 'chat-skill-content-symbol'
// - Renamed variable 'i' to 'threadSkillMessageView'
// - Resolved require(88008) to 'thread-skill-message-view'
// - Updated imported property 's' to 'sendOldVarSymbol' (module 321526)
// - Updated imported property 'c9' to 'ThreadMessageItem' (module 88008)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 48567.62d28063.js
         * chunkId: 48567
         * moduleId: 157271
         */
module.exports = function (module, exports, require) {
  var chatSkillContentSymbol = require("chat-skill-content-symbol") /*id: 321526*/;
  var threadSkillMessageView = require("thread-skill-message-view") /*id: 88008*/;
  function o(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
      o(this, "pluginIdentifier", chatSkillContentSymbol.sendOldVarSymbol);
      o(this, "Content", threadSkillMessageView.ThreadMessageItem);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendOldVariableSkillMessageBoxPlugin: function () {
      return a;
    }
  });
}