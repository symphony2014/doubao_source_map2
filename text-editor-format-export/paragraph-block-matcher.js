// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'ParagraphBlockMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 976120
         */
module.exports = function (module, exports, require) {
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  var deltaSetWalkerPlugin = require("delta-set-walker-plugin") /*id: 831379*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  function o(e, t, r) {
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
  class a extends deltaSetWalkerPlugin.DeltaSetWalker {
    match(e) {
      let {
        prevOp: n,
        curOp: i,
        nextOp: o
      } = e;
      let a = !n || !editorDeltaSetUtils.getInsertText(n);
      let s = !o || !editorDeltaSetUtils.getInsertText(o);
      let d = editorDeltaSetUtils.getInsertText(i);
      if (i.attributes?.lmkr !== "1" && a) {
        return -1;
      } else {
        return i.attributes?.lmkr === "1" && !s || !!d.startsWith("\n") && (d.length > 1 || !s) && 1;
      }
    }
    constructor(...e) {
      super(...e);
      o(this, "name", "paragraph");
      o(this, "type", blockTypeEnum.BlockTypes.ContainerBlock);
    }
  }
  require.d(exports, {
    ParagraphBlockMatcher: function () {
      return a;
    }
  });
}