// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMergeLifeBlockSymbol'
// - Resolved require(463699) to 'chat-merge-life-block-symbol'
// - Updated imported property 'c' to 'mergeLocalLifeSym' (module 463699)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 774872
         */
module.exports = function (module, exports, require) {
  let r = (t, e) => ({
    ...e
  });
  var chatMergeLifeBlockSymbol = require("chat-merge-life-block-symbol") /*id: 463699*/;
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
      o(this, "pluginIdentifier", chatMergeLifeBlockSymbol.mergeLocalLifeSym);
      o(this, "mergeContentBlock", r);
    }
  }
  require.r(exports);
  require.d(exports, {
    MergeLocalLifeBlockPlugin: function () {
      return u;
    }
  });
}