// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'threadArtifactCard'
// - Resolved require(212537) to 'thread-artifact-card'
// - Renamed variable 'r' to 'researchBlockContentConst'
// - Resolved require(62088) to 'research-block-content-const'
// - Updated imported property 'C' to 'researchBlockType' (module 62088)
// - Updated imported property 'V' to 'ThreadArtifactCard' (module 212537)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 839333
         */
module.exports = function (module, exports, require) {
  var threadArtifactCard = require("thread-artifact-card") /*id: 212537*/;
  var researchBlockContentConst = require("research-block-content-const") /*id: 62088*/;
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
      o(this, "pluginIdentifier", researchBlockContentConst.researchBlockType);
      o(this, "type", "Container");
      o(this, "Content", threadArtifactCard.ThreadArtifactCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveResearchWebPageBlockContentPlugin: function () {
      return l;
    }
  });
}