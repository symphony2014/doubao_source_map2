// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillReceiveMessageBox_6'
// - Resolved require(874614) to 'async-skill-receive-message-box_6'
// - Renamed variable 'r' to 'chatOutlineSkeletonSymbol'
// - Resolved require(120498) to 'chat-outline-skeleton-symbol'
// - Updated imported property 'O' to 'outlineSkeletonSym' (module 120498)
// - Updated imported property 'o' to 'SkeletonLayout' (module 874614)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 955807
         */
module.exports = function (module, exports, require) {
  var asyncSkillReceiveMessageBox_6 = require("async-skill-receive-message-box_6") /*id: 874614*/;
  var chatOutlineSkeletonSymbol = require("chat-outline-skeleton-symbol") /*id: 120498*/;
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
      o(this, "pluginIdentifier", chatOutlineSkeletonSymbol.outlineSkeletonSym);
      o(this, "Content", asyncSkillReceiveMessageBox_6.SkeletonLayout);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveProfessionalWritingOutlineSkeletonPlugin: function () {
      return a;
    }
  });
}