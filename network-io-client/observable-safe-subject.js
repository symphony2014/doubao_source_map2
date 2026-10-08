// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'createSafeTakeOne'
// - Renamed export 'Z' to 'SafeObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 943446
         */
module.exports = function (module, exports, require) {
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var observableSafeLiftUtil_1 = require("observable-safe-lift-util_1") /*id: 149656*/;
  function c(e, t, r) {
    if (t in e) {
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
  function l(e) {
    return t => t.pipe(observableSafeFilter.createSafeFilter(e), observableTakeOperator.takeOperator(1));
  }
  class h {
    takeUntil() {
      return observableSafeLiftUtil_1.createSafeOperator(this.destroy$);
    }
    from(e) {
      return observableFromSource.fromAnySource(e).pipe(this.takeUntil());
    }
    toPromise(e) {
      return new Promise((t, r) => {
        let n;
        let i = false;
        let s = e => {
          i = true;
          n = e;
        };
        let o = r;
        let a = () => {
          if (i) {
            t(n);
          }
        };
        this.from(e).subscribe(s, o, a);
      });
    }
    destroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    constructor() {
      c(this, "destroy$", new observableSubjectClass.Subject());
    }
  }
  require.d(exports, {
    createSafeTakeOne: function () {
      return l;
    },
    SafeObservable: function () {
      return h;
    }
  });
}