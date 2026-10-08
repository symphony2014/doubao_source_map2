// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'EventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 679006
         */
module.exports = function (module, exports, require) {
  class i {
    on(e, t) {
      this.events[e] ||= [];
      this.events[e].push(t);
    }
    emit(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        r[i - 1] = arguments[i];
      }
      let n = this.events[e];
      if (n && n.length > 0) {
        for (let e of n) {
          e(...r);
        }
      }
    }
    off(e, t) {
      let r = this.events[e];
      if (r && r.length > 0) {
        let e = r.indexOf(t);
        if (e !== -1) {
          r.splice(e, 1);
        }
      }
    }
    removeAllListeners(e) {
      if (e) {
        delete this.events[e];
      } else {
        this.events = {};
      }
    }
    constructor() {
      var e;
      var t;
      var r;
      t = {};
      if ((e = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "events", "string")) == "symbol" ? r : r + "") in this) {
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
    EventEmitter: function () {
      return i;
    }
  });
}