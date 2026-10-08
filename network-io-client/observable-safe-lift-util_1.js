// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'createSafeOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 149656
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  function a(e) {
    return observableSafeLiftUtil.createSafeOperator(function (t, r) {
      observableFromAnySource.fromAnySource(e).subscribe(safeSubscriber.safeSubscriber(r, function () {
        return r.complete();
      }, aiSpaceOldStub.AiSpaceStub));
      if (!r.closed) {
        t.subscribe(r);
      }
    });
  }
  require.d(exports, {
    createSafeOperator: function () {
      return a;
    }
  });
}