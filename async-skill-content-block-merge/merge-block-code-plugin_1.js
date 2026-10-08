// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeBlockCodePlugin'
// - Resolved require(759638) to 'merge-block-code-plugin'
// - Updated imported property 's' to 'mergeBlockCodeId' (module 759638)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 534826
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => {
    if (e == null || !e.is_delta) {
      return {
        ...e,
        content_obj: {
          ...e.content_obj,
          content: e.content_obj?.code || ""
        }
      };
    }
    {
      let r = t == null ? undefined : t.content_obj;
      let i = (r == null ? undefined : r.content) || (r == null ? undefined : r.code) || "";
      return {
        ...t,
        ...e,
        content_obj: {
          ...r,
          ...(e == null ? undefined : e.content_obj),
          content: i + ((e == null ? undefined : e.content_obj?.code) || "")
        }
      };
    }
  };
  var mergeBlockCodePlugin = require("merge-block-code-plugin") /*id: 759638*/;
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
      o(this, "pluginIdentifier", mergeBlockCodePlugin.mergeBlockCodeId);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeBlockCodePlugin: function () {
      return u;
    }
  });
}