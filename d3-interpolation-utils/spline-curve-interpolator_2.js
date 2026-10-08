// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'SplineCurve'
// - Renamed export 'Z' to 'splineInterpolator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 271613
         */
module.exports = function (module, exports, require) {
  var splineCurveInterpolator = require("spline-curve-interpolator") /*id: 449949*/;
  function r(t, n) {
    this._context = t;
    this._k = (1 - n) / 6;
  }
  r.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
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
  exports.splineInterpolator = function t(n) {
    function e(t) {
      return new r(t, n);
    }
    e.tension = function (n) {
      return t(+n);
    };
    return e;
  }(0);
  require.d(exports, {
    SplineCurve: function () {
      return r;
    }
  });
}