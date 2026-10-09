// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BW' to 'createCurveY'
// - Renamed export 'sj' to 'createCurveX'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41069.b8943696.js
         * chunkId: 41069
         * moduleId: 469551
         */
module.exports = function (module, exports, require) {
  class r {
    constructor(t, n) {
      this._context = t;
      this._x = n;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    }
    point(t, n) {
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
        default:
          if (this._x) {
            this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n);
          } else {
            this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n);
          }
      }
      this._x0 = t;
      this._y0 = n;
    }
  }
  function i(t) {
    return new r(t, true);
  }
  function o(t) {
    return new r(t, false);
  }
  require.d(exports, {
    createCurveY: function () {
      return o;
    },
    createCurveX: function () {
      return i;
    }
  });
}