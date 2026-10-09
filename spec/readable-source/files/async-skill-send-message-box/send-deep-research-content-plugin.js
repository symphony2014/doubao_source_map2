// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillSendMessageBox_3'
// - Resolved require(264088) to 'async-skill-send-message-box_3'
// - Renamed variable 'r' to 'chatDeepResearchSymbol_1'
// - Resolved require(649617) to 'chat-deep-research-symbol_1'
// - Updated imported property 'b' to 'deepResearchSymbol' (module 649617)
// - Updated imported property 'L' to 'renderAsyncSkillMessageBox' (module 264088)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 974763
         */
module.exports = function (module, exports, require) {
  var asyncSkillSendMessageBox_3 = require("async-skill-send-message-box_3") /*id: 264088*/;
  var chatDeepResearchSymbol_1 = require("chat-deep-research-symbol_1") /*id: 649617*/;
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
      o(this, "pluginIdentifier", chatDeepResearchSymbol_1.deepResearchSymbol);
      o(this, "Content", asyncSkillSendMessageBox_3.renderAsyncSkillMessageBox);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendDeepResearchContentPlugin: function () {
      return l;
    }
  });
}