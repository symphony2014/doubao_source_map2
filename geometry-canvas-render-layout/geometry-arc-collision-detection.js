// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'checkPointInArcWithThickness'
// - Renamed export 'g' to 'checkPointInArc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 857680
         */
module.exports = function (module, exports, require) {
  var circleRingCollision = require("circle-ring-collision") /*id: 812309*/;
  var geometryLineHitTest = require("geometry-line-hit-test") /*id: 924136*/;
  var checkPointInArcOrRing = require("check-point-in-arc-or-ring") /*id: 474598*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryPoint2d = require("geometry-point-2d") /*id: 325076*/;
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  function l(t, e, n, r, s, l, u) {
    var c = checkPointInArcOrRing.isPointInRing(t, e, n, 0, r, s, l, u);
    var p = Math.abs(s - r) > Math.PI;
    var d = Math.abs(r - s);
    var f = (r + s) / 2 + Math.PI;
    if (geometryMathUtils.isApproxEqual(d, geometryMathUtils.twoPi) || d > geometryMathUtils.twoPi) {
      return circleRingCollision.isPointInCircle(t, e, n, l, u);
    }
    var g = geometryMathUtils.getPolarPoint(t, e, n, r);
    var y = g.x;
    var v = g.y;
    var m = geometryMathUtils.getPolarPoint(t, e, n, s);
    var x = m.x;
    var _ = m.y;
    var b = geometryMathUtils.getPolarPoint(t, e, n, f);
    var w = b.x;
    var S = b.y;
    var A = [x - y, _ - v];
    var E = p ? [w - y, S - v] : [t - y, e - v];
    var k = [l - y, u - v];
    var M = _2dVectorMathUtils.crossProduct2D(A, E) * _2dVectorMathUtils.crossProduct2D(A, k) > 0;
    if (p) {
      return circleRingCollision.isPointInCircle(t, e, n, l, u) && !M;
    } else {
      return c && !M;
    }
  }
  function u(t, e, n, o, l, u, c, p, d) {
    var f = new geometryPoint2d.Point2D(p, d).distanceTo(t, e);
    var g = geometryMathUtils.getPolarPoint(t, e, n, o);
    var y = g.x;
    var v = g.y;
    var m = geometryMathUtils.getPolarPoint(t, e, n, l);
    var x = m.x;
    var _ = m.y;
    var b = Math.abs(o - l);
    if (u && geometryLineHitTest.checkLineHit(y, v, x, _, c, p, d)) {
      return true;
    }
    if (f > n + c / 2 || f < n - c / 2 || geometryMathUtils.isApproxEqual(o, l)) {
      return false;
    }
    if (geometryMathUtils.isApproxEqual(b, geometryMathUtils.twoPi) || b >= geometryMathUtils.twoPi) {
      return circleRingCollision.isPointInCircle(t, e, n + c / 2, p, d) && !circleRingCollision.isPointInCircle(t, e, n - c / 2, p, d);
    }
    var w = (o + l) / 2;
    var S = [Math.cos(w), Math.sin(w)];
    return Math.abs(_2dVectorMathUtils.getAngleBetween(S, [p - t, d - e])) < Math.abs(o - l) / 2;
  }
  require.d(exports, {
    checkPointInArcWithThickness: function () {
      return u;
    },
    checkPointInArc: function () {
      return l;
    }
  });
}