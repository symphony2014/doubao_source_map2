// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillSearchBlock'
// - Resolved require(417891) to 'async-skill-search-block'
// - Renamed variable 'r' to 'receiveQueryBlockSymbol'
// - Resolved require(926229) to 'receive-query-block-symbol'
// - Updated imported property 'q' to 'receiveQuerySymbol' (module 926229)
// - Updated imported property 'bS' to 'SearchCardBlock' (module 417891)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 579633
         */
module.exports = function (module, exports, require) {
  var asyncSkillSearchBlock = require("async-skill-search-block") /*id: 417891*/;
  var receiveQueryBlockSymbol = require("receive-query-block-symbol") /*id: 926229*/;
  function o(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class l {
    constructor() {
      o(this, "pluginIdentifier", receiveQueryBlockSymbol.receiveQuerySymbol);
      o(this, "type", "Content");
      o(this, "Content", asyncSkillSearchBlock.SearchCardBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveQueryBlockContentPlugin: function () {
      return l;
    }
  });
}