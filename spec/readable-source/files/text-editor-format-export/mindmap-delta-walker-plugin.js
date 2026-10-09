// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'MindmapDeltaWalker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 662997
         */
module.exports = function (module, exports, require) {
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  var deltaSetWalkerPlugin = require("delta-set-walker-plugin") /*id: 831379*/;
  function l(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class o extends deltaSetWalkerPlugin.DeltaSetWalker {
    match(e) {
      let {
        curOp: r
      } = e;
      return !!r.attributes?.mindmap;
    }
    constructor(...e) {
      super(...e);
      l(this, "name", "mindmap");
      l(this, "type", blockTypeEnum.BlockTypes.EmbedBlock);
    }
  }
  require.d(exports, {
    MindmapDeltaWalker: function () {
      return o;
    }
  });
}