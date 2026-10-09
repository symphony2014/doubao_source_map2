// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'splineCurve'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 73002
         */
module.exports = function (module, exports, require) {
  var splineCurveInterpolator_1 = require("spline-curve-interpolator_1") /*id: 649926*/;
  var noopFunction_1 = require("noop-function_1") /*id: 816601*/;
  var splineCurveGenerator = require("spline-curve-generator") /*id: 724731*/;
  function u(t, n) {
    this._context = t;
    this._alpha = n;
  }
  u.prototype = {
    areaStart: noopFunction_1.noop,
    areaEnd: noopFunction_1.noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
      }
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
          this._x3 = t;
          this._y3 = n;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = t, this._y4 = n);
          break;
        case 2:
          this._point = 3;
          this._x5 = t;
          this._y5 = n;
          break;
        default:
          splineCurveGenerator.calculateCurve(this, t, n);
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
        return new splineCurveInterpolator_1.SplineCurve(t, 0);
      }
    }
    e.alpha = function (n) {
      return t(+n);
    };
    return e;
  }(0.5);
}