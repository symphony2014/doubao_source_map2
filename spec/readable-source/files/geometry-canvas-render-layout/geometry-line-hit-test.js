// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'checkLineHit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 924136
         */
module.exports = function (module, exports, require) {
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  function o(t, e, n, o, a, s, h) {
    var l = geometryRectUtils.rectFromPoints(t, e, n, o);
    if (geometryRectUtils.containsPoint(l, s, h, a)) {
      return function (t, e, n, r, o, a) {
        var s = [n - t, r - e];
        if (_2dVectorMathUtils.vectorsEqual(s, [0, 0])) {
          return Math.sqrt((o - t) * (o - t) + (a - e) * (a - e));
        }
        var h = [-s[1], s[0]];
        _2dVectorMathUtils.normalizeVector(h, h);
        return Math.abs(_2dVectorMathUtils.dotProduct([o - t, a - e], h));
      }(t, e, n, o, s, h) <= a / 2;
    }
  }
  require.d(exports, {
    checkLineHit: function () {
      return o;
    }
  });
}