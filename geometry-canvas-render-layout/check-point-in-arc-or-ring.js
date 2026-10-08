// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'isPointInRing'
// - Renamed export 'J' to 'checkPointInArcOrRing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 474598
         */
module.exports = function (module, exports, require) {
  var circleRingCollision = require("circle-ring-collision") /*id: 812309*/;
  var geometryLineHitTest = require("geometry-line-hit-test") /*id: 924136*/;
  var geometryArcCollisionDetection = require("geometry-arc-collision-detection") /*id: 857680*/;
  var geometryMathUtils = require("geometry-math-utils") /*id: 577989*/;
  var geometryPoint2d = require("geometry-point-2d") /*id: 325076*/;
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  function l(t, e, n, r, o, l, u, c) {
    var p = new geometryPoint2d.Point2D(u, c).distanceTo(t, e);
    var d = Math.abs(o - l);
    if (p > n || p < r || geometryMathUtils.isApproxEqual(o, l)) {
      return false;
    }
    if (geometryMathUtils.isApproxEqual(d, geometryMathUtils.twoPi) || d >= geometryMathUtils.twoPi) {
      return circleRingCollision.isPointInCircle(t, e, n, u, c) && !circleRingCollision.isPointInCircle(t, e, r, u, c);
    }
    var f = (o + l) / 2;
    var g = [Math.cos(f), Math.sin(f)];
    var y = Math.abs(_2dVectorMathUtils.getAngleBetween(g, [u - t, c - e]));
    return !!(y < d / 2) || !!geometryMathUtils.isApproxEqual(y, d / 2);
  }
  function u(t, e, n, i, s, h, l, u, c) {
    var p = geometryMathUtils.getPolarPoint(t, e, n, s);
    var d = geometryMathUtils.getPolarPoint(t, e, i, s);
    var f = geometryMathUtils.getPolarPoint(t, e, n, h);
    var g = geometryMathUtils.getPolarPoint(t, e, i, h);
    return geometryArcCollisionDetection.checkPointInArcWithThickness(t, e, n, s, h, false, l, u, c) || geometryArcCollisionDetection.checkPointInArcWithThickness(t, e, i, s, h, false, l, u, c) || geometryLineHitTest.checkLineHit(p.x, p.y, d.x, d.y, l, u, c) || geometryLineHitTest.checkLineHit(f.x, f.y, g.x, g.y, l, u, c);
  }
  require.d(exports, {
    isPointInRing: function () {
      return l;
    },
    checkPointInArcOrRing: function () {
      return u;
    }
  });
}