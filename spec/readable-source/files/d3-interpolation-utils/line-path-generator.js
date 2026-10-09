// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LineGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 409913
         */
module.exports = function (module, exports, require) {
  function i(t) {
    this._context = t;
  }
  function r(t) {
    return new i(t);
  }
  i.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
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
        default:
          this._context.lineTo(t, n);
      }
    }
  };
  require.d(exports, {
    LineGenerator: function () {
      return r;
    }
  });
}