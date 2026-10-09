// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatInfraSuggestBlockSymbol'
// - Resolved require(193463) to 'chat-infra-suggest-block-symbol'
// - Updated imported property 'P' to 'suggestBlockSymbol' (module 193463)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 506025
         */
module.exports = function (module, exports, require) {
  var chatInfraSuggestBlockSymbol = require("chat-infra-suggest-block-symbol") /*id: 193463*/;
  class r {
    mergeContentBlock(e, t) {
      let n = e.content_obj;
      let i = t.content_obj;
      if (t.is_delta) {
        return {
          ...e,
          ...t,
          content_obj: {
            suggest: "",
            suggestions: [...((n == null ? undefined : n.suggestions) || []), ...((i == null ? undefined : i.suggestions) || [])]
          }
        };
      } else {
        return t;
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatInfraSuggestBlockSymbol.suggestBlockSymbol;
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
    SuggestsMessageBlockMergePlugin: function () {
      return r;
    }
  });
}