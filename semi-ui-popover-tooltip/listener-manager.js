// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'ListenerManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 814180
         */
module.exports = function (module, exports, require) {
  class i {
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
      var i;
      if (!this.listeners[e]) {
        return;
      }
      let l = (n = this.listeners[e]) === null || n === undefined ? undefined : n.filter(e => e !== t);
      this.listeners[e] = [];
      if (l) {
        if ((i = this.listeners[e]) !== null && i !== undefined) {
          i.push(...l);
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
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
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
    ListenerManager: function () {
      return i;
    }
  });
}