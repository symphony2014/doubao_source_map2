// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeSearchResultBlock'
// - Resolved require(137882) to 'merge-search-result-block'
// - Updated imported property 'Q' to 'mergeSearchBlock' (module 137882)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 835490
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
  var mergeSearchResultBlock = require("merge-search-result-block") /*id: 137882*/;
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
      o(this, "pluginIdentifier", mergeSearchResultBlock.mergeSearchBlock);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeSearchResultBlockPlugin: function () {
      return u;
    }
  });
}