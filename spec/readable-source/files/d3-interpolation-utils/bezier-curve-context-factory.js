// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createCurveContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 939192
         */
module.exports = function (module, exports, require) {
  var noopFunction_1 = require("noop-function_1") /*id: 816601*/;
  var bezierCurveGenerator = require("bezier-curve-generator") /*id: 213635*/;
  function o(t) {
    this._context = t;
  }
  function u(t) {
    return new o(t);
  }
  o.prototype = {
    areaStart: noopFunction_1.noop,
    areaEnd: noopFunction_1.noop,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        case 2:
          this._context.moveTo((this._x2 + this._x3 * 2) / 3, (this._y2 + this._y3 * 2) / 3);
          this._context.lineTo((this._x3 + this._x2 * 2) / 3, (this._y3 + this._y2 * 2) / 3);
          this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
      }
    },
    point: function (t, n) {
      t *= 1;
      n *= 1;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = t;
          this._y2 = n;
          break;
        case 1:
          this._point = 2;
          this._x3 = t;
          this._y3 = n;
          break;
        case 2:
          this._point = 3;
          this._x4 = t;
          this._y4 = n;
          this._context.moveTo((this._x0 + this._x1 * 4 + t) / 6, (this._y0 + this._y1 * 4 + n) / 6);
          break;
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
    createCurveContext: function () {
      return u;
    }
  });
}