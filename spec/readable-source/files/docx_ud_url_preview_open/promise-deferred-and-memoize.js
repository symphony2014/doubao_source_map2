// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J3' to 'memoizeAsyncFunction'
// - Renamed export 'N5' to 'DeferredPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 569657
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
  function r(e) {
    let t = new Map();
    return async (...i) => {
      let n = JSON.stringify(i);
      if (t.has(n)) {
        return t.get(n);
      }
      let r = e(...i).finally(() => {
        t.delete(n);
      });
      t.set(n, r);
      return r;
    };
  }
  require.d(exports, {
    memoizeAsyncFunction: function () {
      return r;
    },
    DeferredPromise: function () {
      return n;
    }
  });
}