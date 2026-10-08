// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'BindingManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 503351
         */
module.exports = function (module, exports, require) {
  class i {
    bind(e, t) {
      this.map.set(e, t);
    }
    isBound(e) {
      return this.map.has(e);
    }
    unbind(e) {
      this.map.delete(e);
    }
    get(e) {
      return this.map.get(e);
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "map";
      t = new Map();
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
  require.d(exports, {
    BindingManager: function () {
      return i;
    }
  });
}