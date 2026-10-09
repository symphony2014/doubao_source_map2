// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RN' to 'createTensionZero'
// - Renamed export 'ZP' to 'createTensionHalf'
// - Renamed export 'cD' to 'createTensionOne'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 263180
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    this._context = t;
    this._t = n;
  }
  function r(t) {
    return new i(t, 0.5);
  }
  function o(t) {
    return new i(t, 0);
  }
  function u(t) {
    return new i(t, 1);
  }
  i.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      if (this._t > 0 && this._t < 1 && this._point === 2) {
        this._context.lineTo(this._x, this._y);
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      if (this._line >= 0) {
        this._t = 1 - this._t;
        this._line = 1 - this._line;
      }
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
          if (this._t <= 0) {
            this._context.lineTo(this._x, n);
            this._context.lineTo(t, n);
          } else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y);
            this._context.lineTo(e, n);
          }
      }
      this._x = t;
      this._y = n;
    }
  };
  require.d(exports, {
    createTensionZero: function () {
      return o;
    },
    createTensionHalf: function () {
      return r;
    },
    createTensionOne: function () {
      return u;
    }
  });
}