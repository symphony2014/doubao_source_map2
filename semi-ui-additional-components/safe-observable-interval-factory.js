// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'createSafeInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 398888
         */
module.exports = function (module, exports, require) {
  var rxjsAsyncScheduler = require("rxjs-async-scheduler") /*id: 648569*/;
  var safeObservableMergeUtil_1 = require("safe-observable-merge-util_1") /*id: 404454*/;
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  function l(e, i = rxjsAsyncScheduler.asyncScheduler_1) {
    var n = observableIntervalFactory.createInterval(e, i);
    return safeObservableMergeUtil_1.createSafeMergeOp(function () {
      return n;
    });
  }
  require.d(exports, {
    createSafeInterval: function () {
      return l;
    }
  });
}