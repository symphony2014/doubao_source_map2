// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'scanOperator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 271081
         */
module.exports = function (module, exports, require) {
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function o(e, t) {
    var n;
    return observableSafeLiftUtil.createSafeOperator((n = arguments.length >= 2, function (i, o) {
      var l = n;
      var a = t;
      var s = 0;
      i.subscribe(safeSubscriber.safeSubscriber(o, function (t) {
        var n = s++;
        a = l ? e(a, t, n) : (l = true, t);
        o.next(a);
      }, undefined));
    }));
  }
  require.d(exports, {
    scanOperator: function () {
      return o;
    }
  });
}