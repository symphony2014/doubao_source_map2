// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J3' to 'promiseDedupe'
// - Renamed export 'N5' to 'DeferredPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 860902
         */
module.exports = function (module, exports, require) {
  class n {
    get status() {
      return this._status;
    }
    constructor() {
      this._status = "pending";
      this.promise = new Promise((e, t) => {
        this.resolve = t => {
          this._status = "fulfilled";
          e(t);
        };
        this.reject = e => {
          this._status = "rejected";
          t(e);
        };
      });
    }
  }
  function i(e) {
    let t = new Map();
    return async (...r) => {
      let n = JSON.stringify(r);
      if (t.has(n)) {
        return t.get(n);
      }
      let i = e(...r).finally(() => {
        t.delete(n);
      });
      t.set(n, i);
      return i;
    };
  }
  require.d(exports, {
    promiseDedupe: function () {
      return i;
    },
    DeferredPromise: function () {
      return n;
    }
  });
}