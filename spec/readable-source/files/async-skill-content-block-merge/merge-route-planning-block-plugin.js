// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeRoutePlanningSymbol'
// - Resolved require(927927) to 'merge-route-planning-symbol'
// - Updated imported property 'N' to 'mergeRoutePlanning' (module 927927)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 955616
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
  var mergeRoutePlanningSymbol = require("merge-route-planning-symbol") /*id: 927927*/;
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
      o(this, "pluginIdentifier", mergeRoutePlanningSymbol.mergeRoutePlanning);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeRoutePlanningBlockPlugin: function () {
      return u;
    }
  });
}