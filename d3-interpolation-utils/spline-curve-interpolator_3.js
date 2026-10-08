// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'curveInterpolator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 316841
         */
module.exports = function (module, exports, require) {
  var splineCurveInterpolator_2 = require("spline-curve-interpolator_2") /*id: 271613*/;
  var splineCurveGenerator = require("spline-curve-generator") /*id: 724731*/;
  function o(t, n) {
    this._context = t;
    this._alpha = n;
  }
  o.prototype = {
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
      if (this._line || this._line !== 0 && this._point === 3) {
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
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          if (this._line) {
            this._context.lineTo(this._x2, this._y2);
          } else {
            this._context.moveTo(this._x2, this._y2);
          }
          break;
        case 3:
          this._point = 4;
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
  exports.curveInterpolator = function t(n) {
    function e(t) {
      if (n) {
        return new o(t, n);
      } else {
        return new splineCurveInterpolator_2.SplineCurve(t, 0);
      }
    }
    e.alpha = function (n) {
      return t(+n);
    };
    return e;
  }(0.5);
}