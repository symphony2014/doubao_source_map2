// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'createCurve'
// - Renamed export 'fE' to 'CurveGenerator'
// - Renamed export 'xm' to 'bezierCurveTo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 213635
         */
module.exports = function (module, exports, require) {
  function i(t, n, e) {
    t._context.bezierCurveTo((t._x0 * 2 + t._x1) / 3, (t._y0 * 2 + t._y1) / 3, (t._x0 + t._x1 * 2) / 3, (t._y0 + t._y1 * 2) / 3, (t._x0 + t._x1 * 4 + n) / 6, (t._y0 + t._y1 * 4 + e) / 6);
  }
  function r(t) {
    this._context = t;
  }
  function o(t) {
    return new r(t);
  }
  r.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          i(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
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
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((this._x0 * 5 + this._x1) / 6, (this._y0 * 5 + this._y1) / 6);
        default:
          i(this, t, n);
      }
      this._x0 = this._x1;
      this._x1 = t;
      this._y0 = this._y1;
      this._y1 = n;
    }
  };
  require.d(exports, {
    createCurve: function () {
      return o;
    },
    CurveGenerator: function () {
      return r;
    },
    bezierCurveTo: function () {
      return i;
    }
  });
}