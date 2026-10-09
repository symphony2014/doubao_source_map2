// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'threadShareToolbarLoader'
// - Resolved require(177563) to 'thread-share-toolbar-loader'
// - Updated imported property 'T' to 'ThreadShareToolbar' (module 177563)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 258081
         */
module.exports = function (module, exports, require) {
  var threadShareToolbarLoader = require("thread-share-toolbar-loader") /*id: 177563*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = threadShareToolbarLoader.ThreadShareToolbar;
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
    ThreadShareFooterPlugin: function () {
      return r;
    }
  });
}