// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendSearchSymbol'
// - Resolved require(643175) to 'chat-send-search-symbol'
// - Renamed variable 'l' to 'asyncSkillSendMessageBox_4'
// - Resolved require(713858) to 'async-skill-send-message-box_4'
// - Updated imported property 'G' to 'sendSearchContent' (module 643175)
// - Updated imported property 'R' to 'SearchSkillRenderer' (module 713858)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 879861
         */
module.exports = function (module, exports, require) {
  var chatSendSearchSymbol = require("chat-send-search-symbol") /*id: 643175*/;
  var asyncSkillSendMessageBox_4 = require("async-skill-send-message-box_4") /*id: 713858*/;
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
      r(this, "pluginIdentifier", chatSendSearchSymbol.sendSearchContent);
      r(this, "Content", asyncSkillSendMessageBox_4.SearchSkillRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendSearchContentPlugin: function () {
      return o;
    }
  });
}