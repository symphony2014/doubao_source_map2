// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'takeLastOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78560.192eef6a.js
         * chunkId: 78560
         * moduleId: 766705
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var emptyObservableInstance = require("empty-observable-instance") /*id: 724888*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function s(t) {
    if (t <= 0) {
      return function () {
        return emptyObservableInstance.emptyObservable;
      };
    } else {
      return observableSafeLiftUtil.createSafeOperator(function (e, n) {
        var i = [];
        e.subscribe(safeSubscriber.safeSubscriber(n, function (e) {
          i.push(e);
          if (t < i.length) {
            i.shift();
          }
        }, function () {
          var t;
          var e;
          try {
            var o = typescriptRuntimeHelpers.iteratorValues(i);
            var u = o.next();
            for (; !u.done; u = o.next()) {
              var s = u.value;
              n.next(s);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (u && !u.done && (e = o.return)) {
                e.call(o);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          n.complete();
        }, undefined, function () {
          i = null;
        }));
      });
    }
  }
  require.d(exports, {
    takeLastOperator: function () {
      return s;
    }
  });
}