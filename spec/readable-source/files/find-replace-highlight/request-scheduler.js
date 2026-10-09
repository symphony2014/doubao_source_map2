// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'RequestScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: find-replace-highlight.ee87218d.js
         * chunkId: 82986
         * moduleId: 297734
         */
module.exports = function (module, exports, require) {
  function n(t, e, i) {
    var n;
    if ((e = typeof (n = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(t, e || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class r {
    hasRequested() {
      return this.frame !== undefined || this.timer !== undefined;
    }
    request(t = false, e = 0) {
      if (!t) {
        this.cancel();
      }
      return new Promise(t => {
        this.frame = window.requestAnimationFrame(() => {
          this.frame = undefined;
          this.timer = window.setTimeout(() => {
            this.timer = undefined;
            t();
          }, e);
        });
      });
    }
    cancel() {
      if (this.frame !== undefined) {
        window.cancelAnimationFrame(this.frame);
        this.frame = undefined;
      }
      if (this.timer !== undefined) {
        window.clearTimeout(this.timer);
        this.timer = undefined;
      }
    }
    constructor() {
      n(this, "frame", undefined);
      n(this, "timer", undefined);
    }
  }
  require.d(exports, {
    RequestScheduler: function () {
      return r;
    }
  });
}