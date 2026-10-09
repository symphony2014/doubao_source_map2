// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'SplineCurve'
// - Renamed export 'Z' to 'splineCurveFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 649926
         */
module.exports = function (module, exports, require) {
  var noopFunction_1 = require("noop-function_1") /*id: 816601*/;
  var splineCurveInterpolator = require("spline-curve-interpolator") /*id: 449949*/;
  function o(t, n) {
    this._context = t;
    this._k = (1 - n) / 6;
  }
  o.prototype = {
    areaStart: noopFunction_1.noop,
    areaEnd: noopFunction_1.noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
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
          splineCurveInterpolator.drawBezierSegment(this, t, n);
      }
      this._x0 = this._x1;
      this._x1 = this._x2;
      this._x2 = t;
      this._y0 = this._y1;
      this._y1 = this._y2;
      this._y2 = n;
    }
  };
  exports.splineCurveFactory = function t(n) {
    function e(t) {
      return new o(t, n);
    }
    e.tension = function (n) {
      return t(+n);
    };
    return e;
  }(0);
  require.d(exports, {
    SplineCurve: function () {
      return o;
    }
  });
}