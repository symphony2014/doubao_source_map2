// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'stateManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 910520
         */
module.exports = function (module, exports, require) {
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  function s(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let a = new class {
    getState(e) {
      return this.stateMap.get(e) || {};
    }
    setState(e, i, n = false) {
      let r = i;
      if (!n) {
        r = {
          ...this.getState(e),
          ...i
        };
      }
      this.stateMap.set(e, r);
      this.singleStateChange$.next({
        id: e,
        state: r
      });
    }
    setStartCopying(e) {
      this.setState(e, {
        fromSelf: true,
        isCopying: true
      });
    }
    setEndCopying(e) {
      this.setState(e, {
        isCopying: false
      });
    }
    deleteState(e) {
      this.stateMap.delete(e);
    }
    clear() {
      this.stateMap.clear();
    }
    onStateChangeOf(e) {
      return this.singleStateChange$.pipe(observableSafeFilter.createSafeFilter(i => i.id === e), observableSafeMapOperator.createSafeMapOperator(e => e.state));
    }
    constructor() {
      s(this, "stateMap", new Map());
      s(this, "singleStateChange$", new observableSubjectClass.Subject());
    }
  }();
  require.d(exports, {
    stateManager: function () {
      return a;
    }
  });
}