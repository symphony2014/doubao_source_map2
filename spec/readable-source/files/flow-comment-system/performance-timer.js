// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PerformanceTimer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 984702
         */
module.exports = function (module, exports, require) {
  exports.PerformanceTimer = class {
    start(e) {
      this.startTimestamp.set(e, performance.now());
    }
    end(e) {
      let i = this.startTimestamp.get(e);
      return (performance.now() - i).toFixed(4);
    }
    clear() {
      this.startTimestamp.clear();
    }
    constructor() {
      var e;
      var i;
      var n;
      e = "startTimestamp";
      i = new Map();
      if ((e = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, i || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  };
}