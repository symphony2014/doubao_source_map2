// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mergeSuperTaskCardSymbol'
// - Resolved require(993641) to 'merge-super-task-card-symbol'
// - Updated imported property 'N' to 'mergeSuperTaskSymbol' (module 993641)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 2526
         */
module.exports = function (module, exports, require) {
  var mergeSuperTaskCardSymbol = require("merge-super-task-card-symbol") /*id: 993641*/;
  function r(e, t, i) {
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
  class a {
    constructor() {
      r(this, "pluginIdentifier", mergeSuperTaskCardSymbol.mergeSuperTaskSymbol);
      r(this, "mergeContentBlock", (e, t) => ({
        ...t
      }));
    }
  }
  require.r(exports);
  require.d(exports, {
    MergePlugin: function () {
      return a;
    }
  });
}