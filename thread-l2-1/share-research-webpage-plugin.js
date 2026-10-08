// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'researchBlockContentConst'
// - Resolved require(62088) to 'research-block-content-const'
// - Renamed variable 'l' to 'threadArtifactCard'
// - Resolved require(212537) to 'thread-artifact-card'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'V' to 'ThreadArtifactCard' (module 212537)
// - Updated imported property 'C' to 'researchBlockType' (module 62088)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 903662
         */
module.exports = function (module, exports, require) {
  var researchBlockContentConst = require("research-block-content-const") /*id: 62088*/;
  var threadArtifactCard = require("thread-artifact-card") /*id: 212537*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(threadArtifactCard.ThreadArtifactCard, {
    ...e,
    shareMode: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", researchBlockContentConst.researchBlockType);
      o(this, "type", "Container");
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveResearchWebPageBlockContentPlugin: function () {
      return s;
    }
  });
}