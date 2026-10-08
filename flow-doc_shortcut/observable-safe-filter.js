// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'createSafeFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 669476
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function o(e, t) {
    return observableSafeLiftUtil.createSafeOperator(function (n, i) {
      var o = 0;
      n.subscribe(safeSubscriber.safeSubscriber(i, function (n) {
        return e.call(t, n, o++) && i.next(n);
      }));
    });
  }
  require.d(exports, {
    createSafeFilter: function () {
      return o;
    }
  });
}