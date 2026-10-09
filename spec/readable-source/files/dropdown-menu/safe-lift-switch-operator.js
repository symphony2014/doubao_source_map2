// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'safeSwitchSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_delay_find_replace.3dd1d362.js
         * chunkId: 99397
         * moduleId: 740615
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  function l(e) {
    return observableSafeLiftUtil.createSafeOperator(function (t, n) {
      var r = false;
      var l = null;
      var s = null;
      function c() {
        if (s != null) {
          s.unsubscribe();
        }
        s = null;
        if (r) {
          r = false;
          var e = l;
          l = null;
          n.next(e);
        }
      }
      t.subscribe(safeSubscriber.safeSubscriber(n, function (t) {
        if (s != null) {
          s.unsubscribe();
        }
        r = true;
        l = t;
        s = safeSubscriber.safeSubscriber(n, c, aiSpaceOldStub.AiSpaceStub);
        observableFromAnySource.fromAnySource(e(t)).subscribe(s);
      }, function () {
        c();
        n.complete();
      }, undefined, function () {
        l = s = null;
      }));
    });
  }
  require.d(exports, {
    safeSwitchSource: function () {
      return l;
    }
  });
}