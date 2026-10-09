// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'takeOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 731916
         */
module.exports = function (module, exports, require) {
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
        var r = 0;
        e.subscribe(safeSubscriber.safeSubscriber(n, function (e) {
          if (++r <= t) {
            n.next(e);
            if (t <= r) {
              n.complete();
            }
          }
        }));
      });
    }
  }
  require.d(exports, {
    takeOperator: function () {
      return s;
    }
  });
}