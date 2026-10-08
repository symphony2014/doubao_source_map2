// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeBlockGenImagePlugin'
// - Resolved require(372856) to 'merge-block-gen-image-plugin'
// - Updated imported property 'o' to 'mergeBlockImgPlugin' (module 372856)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40275.ba09974b.js
         * chunkId: 40275
         * moduleId: 212123
         */
module.exports = function (module, exports, require) {
  let n = (t, e) => (e == null ? undefined : e.is_delta) ? {
    ...t,
    ...e,
    content_obj: {
      ...(t == null ? undefined : t.content_obj),
      ...(e == null ? undefined : e.content_obj)
    }
  } : {
    ...e
  };
  var mergeBlockGenImagePlugin = require("merge-block-gen-image-plugin") /*id: 372856*/;
  function o(t, e, r) {
    var n;
    if ((e = typeof (n = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(t, e || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  class l {
    constructor() {
      o(this, "pluginIdentifier", mergeBlockGenImagePlugin.mergeBlockImgPlugin);
      o(this, "mergeContentBlock", n);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeBlockGenImagePlugin: function () {
      return l;
    }
  });
}