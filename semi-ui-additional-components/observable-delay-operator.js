// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'createDelayOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 577480
         */
module.exports = function (module, exports, require) {
  var schedulerDelayTask = require("scheduler-delay-task") /*id: 622487*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function s(e, t = 0) {
    return observableSafeLiftUtil.createSafeOperator(function (n, i) {
      n.subscribe(safeSubscriber.safeSubscriber(i, function (n) {
        return schedulerDelayTask.scheduleTask(i, e, function () {
          return i.next(n);
        }, t);
      }, function () {
        return schedulerDelayTask.scheduleTask(i, e, function () {
          return i.complete();
        }, t);
      }, function (n) {
        return schedulerDelayTask.scheduleTask(i, e, function () {
          return i.error(n);
        }, t);
      }));
    });
  }
  require.d(exports, {
    createDelayOperator: function () {
      return s;
    }
  });
}