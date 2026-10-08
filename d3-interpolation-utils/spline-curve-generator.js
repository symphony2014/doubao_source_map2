// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'calculateCurve'
// - Renamed export 'Z' to 'splineCurve'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 724731
         */
module.exports = function (module, exports, require) {
  var safeMathUtils = require("safe-math-utils") /*id: 608921*/;
  var splineCurveInterpolator = require("spline-curve-interpolator") /*id: 449949*/;
  function o(t, n, e) {
    var r = t._x1;
    var o = t._y1;
    var u = t._x2;
    var a = t._y2;
    if (t._l01_a > safeMathUtils.epsilon) {
      var s = t._l01_2a * 2 + t._l01_a * 3 * t._l12_a + t._l12_2a;
      var c = t._l01_a * 3 * (t._l01_a + t._l12_a);
      r = (r * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c;
      o = (o * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }
    if (t._l23_a > safeMathUtils.epsilon) {
      var h = t._l23_2a * 2 + t._l23_a * 3 * t._l12_a + t._l12_2a;
      var f = t._l23_a * 3 * (t._l23_a + t._l12_a);
      u = (u * h + t._x1 * t._l23_2a - n * t._l12_2a) / f;
      a = (a * h + t._y1 * t._l23_2a - e * t._l12_2a) / f;
    }
    t._context.bezierCurveTo(r, o, u, a, t._x2, t._y2);
  }
  function u(t, n) {
    this._context = t;
    this._alpha = n;
  }
  u.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      t *= 1;
      n *= 1;
      if (this._point) {
        var e = this._x2 - t;
        var i = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          if (this._line) {
            this._context.lineTo(t, n);
          } else {
            this._context.moveTo(t, n);
          }
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          o(this, t, n);
      }
      this._l01_a = this._l12_a;
      this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a;
      this._l12_2a = this._l23_2a;
      this._x0 = this._x1;
      this._x1 = this._x2;
      this._x2 = t;
      this._y0 = this._y1;
      this._y1 = this._y2;
      this._y2 = n;
    }
  };
  exports.splineCurve = function t(n) {
    function e(t) {
      if (n) {
        return new u(t, n);
      } else {
        return new splineCurveInterpolator.SplineCurve(t, 0);
      }
    }
    e.alpha = function (n) {
      return t(+n);
    };
    return e;
  }(0.5);
  require.d(exports, {
    calculateCurve: function () {
      return o;
    }
  });
}