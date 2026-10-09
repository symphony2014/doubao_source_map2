// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createSafeMergeOp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 404454
         */
module.exports = function (module, exports, require) {
  var safeObservableMergeUtil = require("safe-observable-merge-util") /*id: 229102*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  var observableSafeMapFactory = require("observable-safe-map-factory") /*id: 574000*/;
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  require.d(exports, {
    createSafeMergeOp: function () {
      return function e(i, n) {
        if (n) {
          return function (c) {
            return safeObservableMergeUtil.safeMergeObservable(n.pipe(observableTakeOperator.takeOperator(1), observableSafeLiftUtil.createSafeOperator(function (e, i) {
              e.subscribe(safeSubscriber.safeSubscriber(i, aiSpaceOldStub.AiSpaceStub));
            })), c.pipe(e(i)));
          };
        } else {
          return safeMergeMapOperator.createSafeMergeMap(function (e, n) {
            return observableFromAnySource.fromAnySource(i(e, n)).pipe(observableTakeOperator.takeOperator(1), observableSafeMapFactory.createSafeMapOp(e));
          });
        }
      };
    }
  });
}