// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mergeLinkerReaderSymbol'
// - Resolved require(21077) to 'merge-linker-reader-symbol'
// - Updated imported property 'p' to 'mergeLinkerReaderBlock' (module 21077)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 220487
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => ({
    ...e
  });
  var mergeLinkerReaderSymbol = require("merge-linker-reader-symbol") /*id: 21077*/;
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
      o(this, "pluginIdentifier", mergeLinkerReaderSymbol.mergeLinkerReaderBlock);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeLinkerReaderBlockPlugin: function () {
      return u;
    }
  });
}