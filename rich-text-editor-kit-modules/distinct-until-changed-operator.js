// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'distinctUntilChanged'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4603.4dd6066b.js
         * chunkId: 4603
         * moduleId: 309760
         */
module.exports = function (module, exports, require) {
  var identityUtil = require("identity-util") /*id: 885053*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function i(t, e = identityUtil.identity) {
    t = t ?? s;
    return observableSafeLiftUtil.createSafeOperator(function (r, n) {
      var o;
      var i = true;
      r.subscribe(safeSubscriber.safeSubscriber(n, function (r) {
        var a = e(r);
        if (i || !t(o, a)) {
          i = false;
          o = a;
          n.next(r);
        }
      }));
    });
  }
  function s(t, e) {
    return t === e;
  }
  require.d(exports, {
    distinctUntilChanged: function () {
      return i;
    }
  });
}