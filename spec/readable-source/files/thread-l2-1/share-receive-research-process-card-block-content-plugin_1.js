// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveResearchCardSymbol'
// - Resolved require(965802) to 'receive-research-card-symbol'
// - Renamed variable 'l' to 'deepResearchThinkingBox'
// - Resolved require(743349) to 'deep-research-thinking-box'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Y' to 'DeepResearchBox' (module 743349)
// - Updated imported property 'h' to 'receiveResearchCard' (module 965802)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 879468
         */
module.exports = function (module, exports, require) {
  var receiveResearchCardSymbol = require("receive-research-card-symbol") /*id: 965802*/;
  var deepResearchThinkingBox = require("deep-research-thinking-box") /*id: 743349*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(deepResearchThinkingBox.DeepResearchBox, {
    ...e
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", receiveResearchCardSymbol.receiveResearchCard);
      o(this, "type", "Container");
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveResearchProcessCardBlockContentPlugin: function () {
      return s;
    }
  });
}