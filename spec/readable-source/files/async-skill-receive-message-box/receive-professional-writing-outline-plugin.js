// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillReceiveMessageBox_6'
// - Resolved require(874614) to 'async-skill-receive-message-box_6'
// - Renamed variable 'r' to 'chatWritingOutlineSymbol'
// - Resolved require(554110) to 'chat-writing-outline-symbol'
// - Updated imported property 'J' to 'writingOutlineKey' (module 554110)
// - Updated imported property 'n' to 'SkillReceiveMessage' (module 874614)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 671023
         */
module.exports = function (module, exports, require) {
  var asyncSkillReceiveMessageBox_6 = require("async-skill-receive-message-box_6") /*id: 874614*/;
  var chatWritingOutlineSymbol = require("chat-writing-outline-symbol") /*id: 554110*/;
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
      o(this, "pluginIdentifier", chatWritingOutlineSymbol.writingOutlineKey);
      o(this, "Content", asyncSkillReceiveMessageBox_6.SkillReceiveMessage);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveProfessionalWritingOutlinePlugin: function () {
      return a;
    }
  });
}