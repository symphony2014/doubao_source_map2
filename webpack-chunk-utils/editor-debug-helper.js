// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'EditorDebugHelper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 248384
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  let o = debugBrowserConfig("editor:");
  class a {
    static debug() {
      var e = arguments.length;
      var n = Array(e);
      var r = 0;
      for (; r < e; r++) {
        n[r] = arguments[r];
      }
      o(`${this.name}:`, n);
    }
    constructor() {
      var e;
      var n;
      var r;
      n = "这个类为了写静态类时没有ts错误和自动注入debug";
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "desc", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
      throw Error(`${this.constructor.name}should not be instantiated`);
    }
  }
  require.d(exports, {
    EditorDebugHelper: function () {
      return a;
    }
  });
}