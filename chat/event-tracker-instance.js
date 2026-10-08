// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'eventTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 176600
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let r = new class {
    stopCache() {
      this.shouldCache = false;
    }
    track(e, t) {
      if (this.shouldCache) {
        this.cacheQueue.push([e, t]);
        return;
      }
      this.cb.forEach(n => n(e, t));
    }
    on(e) {
      this.cb.push(e);
      this.cacheQueue.forEach(t => e(...t));
      this.cacheQueue = [];
    }
    off(e) {
      this.cb = this.cb.filter(t => t !== e);
    }
    constructor() {
      i(this, "cb", []);
      i(this, "shouldCache", true);
      i(this, "cacheQueue", []);
    }
  }();
  require.d(exports, {
    eventTracker: function () {
      return r;
    }
  });
}