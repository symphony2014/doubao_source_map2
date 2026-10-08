// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeResearchBlockSymbol'
// - Resolved require(421934) to 'merge-research-block-symbol'
// - Updated imported property 'n' to 'researchBlockSymbol' (module 421934)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 574798
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => {
    if (e != null && e.is_delta) {
      return {
        ...t,
        ...e,
        content_obj: {
          ...(t == null ? undefined : t.content_obj),
          ...(e == null ? undefined : e.content_obj),
          artifact: {
            ...(t == null ? undefined : t.content_obj?.artifact),
            ...(e == null ? undefined : e.content_obj?.artifact)
          }
        }
      };
    } else {
      return {
        ...e
      };
    }
  };
  var mergeResearchBlockSymbol = require("merge-research-block-symbol") /*id: 421934*/;
  function o(t, e, n) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  class u {
    constructor() {
      o(this, "pluginIdentifier", mergeResearchBlockSymbol.researchBlockSymbol);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeResearchBlockPlugin: function () {
      return u;
    }
  });
}