// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pC' to 'SplineCurve'
// - Renamed export 'xm' to 'drawBezierSegment'
// - Renamed export 'ZP' to 'createSplineCurve'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 449949
         */
module.exports = function (module, exports, require) {
  function i(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }
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
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          i(this, this._x1, this._y1);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
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
          if (this._line) {
            this._context.lineTo(t, n);
          } else {
            this._context.moveTo(t, n);
          }
          break;
        case 1:
          this._point = 2;
          this._x1 = t;
          this._y1 = n;
          break;
        case 2:
          this._point = 3;
        default:
          i(this, t, n);
      }
      this._x0 = this._x1;
      this._x1 = this._x2;
      this._x2 = t;
      this._y0 = this._y1;
      this._y1 = this._y2;
      this._y2 = n;
    }
  };
  exports.createSplineCurve = function t(n) {
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
    },
    drawBezierSegment: function () {
      return i;
    }
  });
}