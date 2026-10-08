// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'requirementClarification'
// - Resolved require(862724) to 'requirement-clarification'
// - Renamed variable 'i' to 'requirementClarifySymbol'
// - Resolved require(993414) to 'requirement-clarify-symbol'
// - Updated imported property 's' to 'clarifyBlockSymbol' (module 993414)
// - Updated imported property 'i' to 'RequirementClarify' (module 862724)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 414134
         */
module.exports = function (module, exports, require) {
  var requirementClarification = require("requirement-clarification") /*id: 862724*/;
  var requirementClarifySymbol = require("requirement-clarify-symbol") /*id: 993414*/;
  function a(e, t, n) {
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
  class o {
    constructor() {
      a(this, "pluginIdentifier", requirementClarifySymbol.clarifyBlockSymbol);
      a(this, "type", "Container");
      a(this, "Content", requirementClarification.RequirementClarify);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveRequirementClarifyBlockPlugin: function () {
      return o;
    }
  });
}