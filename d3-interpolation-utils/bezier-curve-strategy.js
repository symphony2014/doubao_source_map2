// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'bezierCurveFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 935387
         */
module.exports = function (module, exports, require) {
  var bezierCurveGenerator = require("bezier-curve-generator") /*id: 213635*/;
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
          var e = (this._x0 + this._x1 * 4 + t) / 6;
          var r = (this._y0 + this._y1 * 4 + n) / 6;
          if (this._line) {
            this._context.lineTo(e, r);
          } else {
            this._context.moveTo(e, r);
          }
          break;
        case 3:
          this._point = 4;
        default:
          bezierCurveGenerator.bezierCurveTo(this, t, n);
      }
      this._x0 = this._x1;
      this._x1 = t;
      this._y0 = this._y1;
      this._y1 = n;
    }
  };
  require.d(exports, {
    bezierCurveFactory: function () {
      return o;
    }
  });
}