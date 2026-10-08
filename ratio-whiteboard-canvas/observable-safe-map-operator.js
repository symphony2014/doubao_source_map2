// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'createSafeMapOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 297880
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function o(e, t) {
    return observableSafeLiftUtil.createSafeOperator(function (n, r) {
      var o = 0;
      n.subscribe(safeSubscriber.safeSubscriber(r, function (n) {
        r.next(e.call(t, n, o++));
      }));
    });
  }
  require.d(exports, {
    createSafeMapOperator: function () {
      return o;
    }
  });
}