// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMergeSearchSymbol'
// - Resolved require(241306) to 'chat-merge-search-symbol'
// - Updated imported property 'r' to 'mergeSearchBlock' (module 241306)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 236719
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
          text: ((t == null ? undefined : t.content_obj?.text) || "") + ((e == null ? undefined : e.content_obj?.text) || ""),
          meta_infos: [...((t == null ? undefined : t.content_obj?.meta_infos) ?? []), ...((e == null ? undefined : e.content_obj?.meta_infos) ?? [])]
        }
      };
    } else {
      return {
        ...e
      };
    }
  };
  var chatMergeSearchSymbol = require("chat-merge-search-symbol") /*id: 241306*/;
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
      o(this, "pluginIdentifier", chatMergeSearchSymbol.mergeSearchBlock);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeSearchTextBlockPlugin: function () {
      return u;
    }
  });
}