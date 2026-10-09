// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'blockStateStore'
// - Renamed export 's' to 'isAvailable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 9156
         */
module.exports = function (module, exports, require) {
  let o = new class {
    getState() {
      return this.state;
    }
    set(e) {
      this.state = Object.assign({}, this.state, e);
    }
    reset() {
      this.state = {
        blockId: 0,
        prevBrotherBlockIds: [],
        showingTips: false
      };
    }
    constructor() {
      var e;
      var n;
      var r;
      n = undefined;
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "state", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
      this.reset();
    }
  }();
  function i() {
    return o;
  }
  function l() {
    return true;
  }
  require.d(exports, {
    blockStateStore: function () {
      return i;
    },
    isAvailable: function () {
      return l;
    }
  });
}