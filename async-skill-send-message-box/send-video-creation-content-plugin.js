// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageBoxRenderer'
// - Resolved require(173602) to 'skill-message-box-renderer'
// - Renamed variable 'r' to 'sendVideoCreationSymbol'
// - Resolved require(232332) to 'send-video-creation-symbol'
// - Updated imported property 'x' to 'sendVideoContent' (module 232332)
// - Updated imported property 'rw' to 'skillMessageBox' (module 173602)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 678034
         */
module.exports = function (module, exports, require) {
  var skillMessageBoxRenderer = require("skill-message-box-renderer") /*id: 173602*/;
  var sendVideoCreationSymbol = require("send-video-creation-symbol") /*id: 232332*/;
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
      o(this, "pluginIdentifier", sendVideoCreationSymbol.sendVideoContent);
      o(this, "Content", skillMessageBoxRenderer.skillMessageBox);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendVideoCreationContentPlugin: function () {
      return l;
    }
  });
}