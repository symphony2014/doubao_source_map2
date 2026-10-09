// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatDeepResearchSymbol_1'
// - Resolved require(649617) to 'chat-deep-research-symbol_1'
// - Renamed variable 'l' to 'asyncSkillSendMessageBox_3'
// - Resolved require(264088) to 'async-skill-send-message-box_3'
// - Updated imported property 'b' to 'deepResearchSymbol' (module 649617)
// - Updated imported property 'L' to 'renderAsyncSkillMessageBox' (module 264088)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 578453
         */
module.exports = function (module, exports, require) {
  var chatDeepResearchSymbol_1 = require("chat-deep-research-symbol_1") /*id: 649617*/;
  var asyncSkillSendMessageBox_3 = require("async-skill-send-message-box_3") /*id: 264088*/;
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
      r(this, "pluginIdentifier", chatDeepResearchSymbol_1.deepResearchSymbol);
      r(this, "Content", asyncSkillSendMessageBox_3.renderAsyncSkillMessageBox);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendDeepResearchContentPlugin: function () {
      return o;
    }
  });
}