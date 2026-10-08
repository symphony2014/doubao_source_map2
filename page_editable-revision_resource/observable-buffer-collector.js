// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'createBufferOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 29886
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  function a(e) {
    return observableSafeLiftUtil.createSafeOperator(function (i, o) {
      var n = [];
      i.subscribe(safeSubscriber.safeSubscriber(o, function (e) {
        return n.push(e);
      }, function () {
        o.next(n);
        o.complete();
      }));
      observableFromAnySource.fromAnySource(e).subscribe(safeSubscriber.safeSubscriber(o, function () {
        var e = n;
        n = [];
        o.next(e);
      }, aiSpaceOldStub.AiSpaceStub));
      return function () {
        n = null;
      };
    });
  }
  require.d(exports, {
    createBufferOperator: function () {
      return a;
    }
  });
}