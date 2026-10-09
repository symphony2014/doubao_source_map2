// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'receiveQueryBlockSymbol'
// - Resolved require(926229) to 'receive-query-block-symbol'
// - Renamed variable 'r' to 'asyncSkillSearchBlock'
// - Resolved require(417891) to 'async-skill-search-block'
// - Updated imported property 'q' to 'receiveQuerySymbol' (module 926229)
// - Updated imported property 'E4' to 'SearchWebBlock' (module 417891)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 418794
         */
module.exports = function (module, exports, require) {
  var receiveQueryBlockSymbol = require("receive-query-block-symbol") /*id: 926229*/;
  var asyncSkillSearchBlock = require("async-skill-search-block") /*id: 417891*/;
  function a(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class o {
    constructor() {
      a(this, "pluginIdentifier", receiveQueryBlockSymbol.receiveQuerySymbol);
      a(this, "type", "Content");
      a(this, "Content", asyncSkillSearchBlock.SearchWebBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveQueryBlockContentPlugin: function () {
      return o;
    }
  });
}