// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'createInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 98037
         */
module.exports = function (module, exports, require) {
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var rxjsAsyncScheduler = require("rxjs-async-scheduler") /*id: 648569*/;
  var isSchedulableCheck = require("is-schedulable-check") /*id: 569816*/;
  function o(e) {
    return e instanceof Date && !isNaN(e);
  }
  function a(e = 0, t, r = rxjsAsyncScheduler.asyncScheduler) {
    var a = -1;
    if (t != null) {
      if (isSchedulableCheck.isSchedulable(t)) {
        r = t;
      } else {
        a = t;
      }
    }
    return new observableCoreClass.Observable(function (t) {
      var n = o(e) ? +e - r.now() : e;
      if (n < 0) {
        n = 0;
      }
      var i = 0;
      return r.schedule(function () {
        if (!t.closed) {
          t.next(i++);
          if (a >= 0) {
            this.schedule(undefined, a);
          } else {
            t.complete();
          }
        }
      }, n);
    });
  }
  require.d(exports, {
    createInterval: function () {
      return a;
    }
  });
}