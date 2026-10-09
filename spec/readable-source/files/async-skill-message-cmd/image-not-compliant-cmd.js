// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillMessageCmd'
// - Resolved require(971034) to 'async-skill-message-cmd'
// - Renamed variable 'r' to 'messageRefImageCompliance'
// - Resolved require(319475) to 'message-ref-image-compliance'
// - Updated imported property 'X' to 'imageNotCompliant' (module 319475)
// - Updated imported property 'o' to 'skillMessageCmdInstance' (module 971034)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 671751
         */
module.exports = function (module, exports, require) {
  var asyncSkillMessageCmd = require("async-skill-message-cmd") /*id: 971034*/;
  var messageRefImageCompliance = require("message-ref-image-compliance") /*id: 319475*/;
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
      o(this, "pluginIdentifier", messageRefImageCompliance.imageNotCompliant);
      o(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          asyncSkillMessageCmd.skillMessageCmdInstance.emit("receiveCmdEnd", e);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageRefImageNotCOmpliantMessageCmdPlugin: function () {
      return a;
    }
  });
}