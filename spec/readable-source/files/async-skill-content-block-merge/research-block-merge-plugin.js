// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeResearchBlockSymbol_1'
// - Resolved require(436697) to 'merge-research-block-symbol_1'
// - Updated imported property 'm' to 'mergeResearchSymbol' (module 436697)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 479151
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => (e == null ? undefined : e.is_delta) ? {
    ...t,
    ...e,
    content_obj: {
      ...(t == null ? undefined : t.content_obj),
      ...(e == null ? undefined : e.content_obj)
    }
  } : {
    ...e
  };
  var mergeResearchBlockSymbol_1 = require("merge-research-block-symbol_1") /*id: 436697*/;
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
      o(this, "pluginIdentifier", mergeResearchBlockSymbol_1.mergeResearchSymbol);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeResearchProcessCardBlockPlugin: function () {
      return u;
    }
  });
}