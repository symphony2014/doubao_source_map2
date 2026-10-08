// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'InlineCodeMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 522467
         */
module.exports = function (module, exports, require) {
  var textBlockDeltaSetWalker = require("text-block-delta-set-walker") /*id: 944196*/;
  class i extends textBlockDeltaSetWalker.TextBlockDeltaWalker {
    match(e) {
      let {
        curOp: r
      } = e;
      return r.attributes?.inlineCode === "true" && super.match(e);
    }
    constructor(...e) {
      var t;
      var r;
      var n;
      super(...e);
      r = "inline_code";
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
      }(t = "name", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  require.d(exports, {
    InlineCodeMatcher: function () {
      return i;
    }
  });
}