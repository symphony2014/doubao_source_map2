// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'DeltaSetWalker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 831379
         */
module.exports = function (module, exports, require) {
  class n {
    __setConfig(e) {
      this.__config = e;
    }
    get config() {
      if (!this.__config) {
        throw Error("The config of delta set walker plugin has not been set");
      }
      return this.__config;
    }
    constructor() {
      var e;
      var t;
      var r;
      t = undefined;
      if ((e = typeof (r = function (e, t) {
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
      }(e = "__config", "string")) == "symbol" ? r : r + "") in this) {
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
  require.d(exports, {
    DeltaSetWalker: function () {
      return n;
    }
  });
}