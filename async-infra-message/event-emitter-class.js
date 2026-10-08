// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'EventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 358907
         */
module.exports = function (module, exports, require) {
  class r {
    on(e, t) {
      var n;
      this.listeners[e] ||= [];
      if (t) {
        if ((n = this.listeners[e]) !== null && n !== undefined) {
          n.push(t);
        }
      }
    }
    off(e, t) {
      var n;
      var r;
      if (!this.listeners[e]) {
        return;
      }
      let l = (n = this.listeners[e]) === null || n === undefined ? undefined : n.filter(e => e !== t);
      this.listeners[e] = [];
      if (l) {
        if ((r = this.listeners[e]) !== null && r !== undefined) {
          r.push(...l);
        }
      }
    }
    get(e) {
      return this.listeners[e] || [];
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "listeners", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      this.listeners = {};
    }
  }
  require.d(exports, {
    EventEmitter: function () {
      return r;
    }
  });
}