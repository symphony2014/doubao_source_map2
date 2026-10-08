// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'webLinkInputDialog'
// - Resolved require(989960) to 'web-link-input-dialog'
// - Updated imported property 'm' to 'WebLinkInputDialog' (module 989960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 868276
         */
module.exports = function (module, exports, require) {
  var webLinkInputDialog = require("web-link-input-dialog") /*id: 989960*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = webLinkInputDialog.WebLinkInputDialog;
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
    AIPodcastAddLinkPlugin: function () {
      return r;
    }
  });
}