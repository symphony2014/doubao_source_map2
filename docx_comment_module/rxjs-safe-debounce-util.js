// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'debounceOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 491207
         */
module.exports = function (module, exports, require) {
  var rxjsAsyncScheduler = require("rxjs-async-scheduler") /*id: 648569*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function s(e, i = rxjsAsyncScheduler.asyncScheduler_1) {
    return observableSafeLiftUtil.createSafeOperator(function (o, n) {
      var r = null;
      var s = null;
      var a = null;
      function c() {
        if (r) {
          r.unsubscribe();
          r = null;
          var e = s;
          s = null;
          n.next(e);
        }
      }
      function d() {
        var o = a + e;
        var l = i.now();
        if (l < o) {
          r = this.schedule(undefined, o - l);
          n.add(r);
          return;
        }
        c();
      }
      o.subscribe(safeSubscriber.safeSubscriber(n, function (o) {
        s = o;
        a = i.now();
        if (!r) {
          r = i.schedule(d, e);
          n.add(r);
        }
      }, function () {
        c();
        n.complete();
      }, undefined, function () {
        s = r = null;
      }));
    });
  }
  require.d(exports, {
    debounceOperator: function () {
      return s;
    }
  });
}