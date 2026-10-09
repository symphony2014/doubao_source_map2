// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeSearchQueryBlockSymbol'
// - Resolved require(87672) to 'merge-search-query-block-symbol'
// - Updated imported property '$' to 'mergeSearchQueryBlock' (module 87672)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 683326
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => ({
    ...e
  });
  var mergeSearchQueryBlockSymbol = require("merge-search-query-block-symbol") /*id: 87672*/;
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
      o(this, "pluginIdentifier", mergeSearchQueryBlockSymbol.mergeSearchQueryBlock);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeSearchQueryBlockPlugin: function () {
      return u;
    }
  });
}