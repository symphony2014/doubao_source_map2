// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillStepDocXCard'
// - Resolved require(837642) to 'skill-step-doc-x-card'
// - Renamed variable 'r' to 'docxCardReceiveSymbol'
// - Resolved require(59572) to 'docx-card-receive-symbol'
// - Updated imported property '_' to 'receiveWritingDocxCard' (module 59572)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 292296
         */
module.exports = function (module, exports, require) {
  var skillStepDocXCard = require("skill-step-doc-x-card") /*id: 837642*/;
  var docxCardReceiveSymbol = require("docx-card-receive-symbol") /*id: 59572*/;
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
      o(this, "pluginIdentifier", docxCardReceiveSymbol.receiveWritingDocxCard);
      o(this, "Content", skillStepDocXCard.StepDocXCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveProfessionalWritingDocXCardPlugin: function () {
      return a;
    }
  });
}