// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'performanceTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandSync.d2c4e24e.js
         * chunkId: 81326
         * moduleId: 323446
         */
module.exports = function (module, exports, require) {
  function l(e, t, i) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var l = i.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class n {
    setStartTime(e, t) {
      if (t || !this.start) {
        this.start = e;
      }
    }
    setEndTime(e, t) {
      if (t || !this.end) {
        this.end = e;
      }
    }
    duration() {
      if (this.start && this.end) {
        return this.end - this.start;
      } else {
        return -1;
      }
    }
    reset() {
      this.start = undefined;
      this.end = undefined;
    }
    constructor() {
      l(this, "start", undefined);
      l(this, "end", undefined);
    }
  }
  let r = new class {
    setRecord(e) {
      if (!this.map.get(e)) {
        this.map.set(e, new n());
      }
    }
    setStartTime(e) {
      var t;
      let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      if ((t = this.map.get(e)) !== null && t !== undefined) {
        t.setStartTime(performance.now(), i);
      }
    }
    setEndTime(e) {
      var t;
      let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      if ((t = this.map.get(e)) !== null && t !== undefined) {
        t.setEndTime(performance.now(), i);
      }
    }
    getDuration(e) {
      var t;
      if ((t = this.map.get(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t.duration();
      }
    }
    reset(e) {
      var t;
      if ((t = this.map.get(e)) !== null && t !== undefined) {
        t.reset();
      }
    }
    constructor() {
      l(this, "map", new Map());
    }
  }();
  require.d(exports, {
    performanceTracker: function () {
      return r;
    }
  });
}