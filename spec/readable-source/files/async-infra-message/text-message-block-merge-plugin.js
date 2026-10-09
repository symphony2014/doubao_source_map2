// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'infraLegacyTextBlockSymbol'
// - Resolved require(834667) to 'infra-legacy-text-block-symbol'
// - Updated imported property 'U' to 'legacyTextBlockCmd' (module 834667)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 365287
         */
module.exports = function (module, exports, require) {
  var infraLegacyTextBlockSymbol = require("infra-legacy-text-block-symbol") /*id: 834667*/;
  class r {
    mergeContentBlock(e, t) {
      let r = ((e == null ? undefined : e.content_obj?.text) || "") + ((t == null ? undefined : t.content_obj?.text) || "");
      return {
        ...e,
        ...t,
        content_obj: {
          ...(e == null ? undefined : e.content_obj),
          ...(t == null ? undefined : t.content_obj),
          text: r
        }
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = infraLegacyTextBlockSymbol.legacyTextBlockCmd;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    receiveTextMessageContentBlockMergePlugin: function () {
      return r;
    }
  });
}