// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'DocReferenceWalker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 184827
         */
module.exports = function (module, exports, require) {
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  var deltaSetWalkerPlugin = require("delta-set-walker-plugin") /*id: 831379*/;
  var docReferenceHtmlEntities = require("doc-reference-html-entities") /*id: 958118*/;
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
        curOp: r
      } = e;
      return !!r.attributes?.[docReferenceHtmlEntities.docReference];
    }
    constructor(...e) {
      super(...e);
      o(this, "type", blockTypeEnum.BlockTypes.Inline);
      o(this, "name", "doc-reference");
    }
  }
  require.d(exports, {
    DocReferenceWalker: function () {
      return a;
    }
  });
}