// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'checkPolygonLineHit'
// - Renamed export 'y' to 'isPointInPolygon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 471102
         */
module.exports = function (module, exports, require) {
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryLineHitTest = require("geometry-line-hit-test") /*id: 924136*/;
  function o(t, e, n) {
    var r = 0;
    var o = 0;
    for (; o < t.length; o += 1) {
      var a = t[o];
      var s = t[(o + 1) % t.length];
      if (a.y !== s.y && !(Math.max(a.y, s.y) < n) && !(Math.min(a.y, s.y) > n)) {
        var h = (s.x * n - s.x * a.y + a.x * s.y - a.x * n) / (s.y - a.y);
        if ((!function (t, e, n) {
          var r = false;
          var o = 0;
          for (; o < t.length; o += 1) {
            var a = t[o];
            if (geometryMathUtils.isApproxEqual(a.x, e) && geometryMathUtils.isApproxEqual(a.y, n)) {
              r = true;
              break;
            }
          }
          return r;
        }([a, s], h, n) || !geometryMathUtils.isApproxEqual(n, Math.max(a.y, s.y))) && h > e) {
          r += 1;
        }
      }
    }
    return r % 2 == 1;
  }
  function a(t, e, n, i, o) {
    for (var a = 0; a < t.length; a++) {
      var s = t[a];
      var h = t[a + 1];
      if (e && !h) {
        h = t[0];
      }
      if (!h) {
        break;
      }
      if (geometryLineHitTest.checkLineHit(s.x, s.y, h.x, h.y, n, i, o)) {
        return true;
      }
    }
    return false;
  }
  require.d(exports, {
    checkPolygonLineHit: function () {
      return a;
    },
    isPointInPolygon: function () {
      return o;
    }
  });
}