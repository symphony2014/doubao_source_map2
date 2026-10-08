// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docxCardReceiveSymbol'
// - Resolved require(59572) to 'docx-card-receive-symbol'
// - Renamed variable 'l' to 'stepDocxCardPure'
// - Resolved require(619105) to 'step-docx-card-pure'
// - Updated imported property '_' to 'receiveWritingDocxCard' (module 59572)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 577000
         */
module.exports = function (module, exports, require) {
  var docxCardReceiveSymbol = require("docx-card-receive-symbol") /*id: 59572*/;
  var stepDocxCardPure = require("step-docx-card-pure") /*id: 619105*/;
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
      r(this, "pluginIdentifier", docxCardReceiveSymbol.receiveWritingDocxCard);
      r(this, "Content", stepDocxCardPure.StepDocXCardPure);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveProfessionalWritingDocXCardPlugin: function () {
      return o;
    }
  });
}