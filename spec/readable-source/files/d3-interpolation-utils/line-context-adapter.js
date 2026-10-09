// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LineContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 146614
         */
module.exports = function (module, exports, require) {
  var noopFunction_1 = require("noop-function_1") /*id: 816601*/;
  function r(t) {
    this._context = t;
  }
  function o(t) {
    return new r(t);
  }
  r.prototype = {
    areaStart: noopFunction_1.noop,
    areaEnd: noopFunction_1.noop,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      if (this._point) {
        this._context.closePath();
      }
    },
    point: function (t, n) {
      t *= 1;
      n *= 1;
      if (this._point) {
        this._context.lineTo(t, n);
      } else {
        this._point = 1;
        this._context.moveTo(t, n);
      }
    }
  };
  require.d(exports, {
    LineContext: function () {
      return o;
    }
  });
}