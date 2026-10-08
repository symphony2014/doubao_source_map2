// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'EventEmitterWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 126875
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function i(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
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
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class o {
    emit(e) {
      var t = arguments.length;
      var r = Array(t > 1 ? t - 1 : 0);
      var n = 1;
      for (; n < t; n++) {
        r[n - 1] = arguments[n];
      }
      return this.events.emit(e, ...r);
    }
    constructor() {
      i(this, "events", new eventEmitterWrapper_1.eventEmitter());
      i(this, "on", (e, t) => {
        this.events.on(e, t);
      });
      i(this, "off", (e, t) => {
        this.events.off(e, t);
      });
    }
  }
  require.d(exports, {
    EventEmitterWrapper: function () {
      return o;
    }
  });
}