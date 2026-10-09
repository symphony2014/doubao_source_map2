// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requirementBlockMergeId'
// - Resolved require(359496) to 'requirement-block-merge-id'
// - Updated imported property 'W' to 'blockMergeSymbol' (module 359496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12611.7a6c2034.js
         * chunkId: 12611
         * moduleId: 806970
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => (t == null ? undefined : t.is_delta) ? {
    ...e,
    ...t,
    content_obj: {
      ...(e == null ? undefined : e.content_obj),
      ...(t == null ? undefined : t.content_obj)
    }
  } : {
    ...t
  };
  var requirementBlockMergeId = require("requirement-block-merge-id") /*id: 359496*/;
  function o(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class u {
    constructor() {
      o(this, "pluginIdentifier", requirementBlockMergeId.blockMergeSymbol);
      o(this, "mergeContentBlock", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    RequirementClarifyBlockMergePluginResource: function () {
      return u;
    }
  });
}