// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'requirementClarification'
// - Resolved require(862724) to 'requirement-clarification'
// - Renamed variable 'l' to 'requirementClarifySymbol'
// - Resolved require(993414) to 'requirement-clarify-symbol'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'i' to 'RequirementClarify' (module 862724)
// - Updated imported property 's' to 'clarifyBlockSymbol' (module 993414)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 150623
         */
module.exports = function (module, exports, require) {
  var requirementClarification = require("requirement-clarification") /*id: 862724*/;
  var requirementClarifySymbol = require("requirement-clarify-symbol") /*id: 993414*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(requirementClarification.RequirementClarify, {
    ...e,
    readonly: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", requirementClarifySymbol.clarifyBlockSymbol);
      o(this, "type", "Container");
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveRequirementClarifyBlockPlugin: function () {
      return s;
    }
  });
}