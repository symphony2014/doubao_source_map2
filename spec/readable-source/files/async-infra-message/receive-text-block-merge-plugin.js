// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveMessageBlockSymbol'
// - Resolved require(662413) to 'receive-message-block-symbol'
// - Updated imported property 'z' to 'messageBlockSymbol' (module 662413)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 178346
         */
module.exports = function (module, exports, require) {
  var receiveMessageBlockSymbol = require("receive-message-block-symbol") /*id: 662413*/;
  class r {
    mergeContentBlock(e, t) {
      if (!(t == null ? undefined : t.is_delta)) {
        return t;
      }
      let r = ((e == null ? undefined : e.content_obj?.text) || "") + ((t == null ? undefined : t.content_obj?.text) || "");
      return {
        ...e,
        ...t,
        content_obj: {
          ...(e == null ? undefined : e.content_obj),
          ...(t == null ? undefined : t.content_obj),
          text: r
        },
        meta_infos: (e.meta_infos || []).concat(t.meta_infos || [])
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = receiveMessageBlockSymbol.messageBlockSymbol;
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
    ReceiveTextContentBlockMergePlugin: function () {
      return r;
    }
  });
}