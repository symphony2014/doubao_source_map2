// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createSplineCurve'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 893629
         */
module.exports = function (module, exports, require) {
  function i(t) {
    this._context = t;
  }
  function r(t) {
    var n;
    var e;
    var i = t.length - 1;
    var r = Array(i);
    var o = Array(i);
    var u = Array(i);
    r[0] = 0;
    o[0] = 2;
    u[0] = t[0] + t[1] * 2;
    n = 1;
    for (; n < i - 1; ++n) {
      r[n] = 1;
      o[n] = 4;
      u[n] = t[n] * 4 + t[n + 1] * 2;
    }
    r[i - 1] = 2;
    o[i - 1] = 7;
    u[i - 1] = t[i - 1] * 8 + t[i];
    n = 1;
    for (; n < i; ++n) {
      e = r[n] / o[n - 1];
      o[n] -= e;
      u[n] -= e * u[n - 1];
    }
    r[i - 1] = u[i - 1] / o[i - 1];
    n = i - 2;
    for (; n >= 0; --n) {
      r[n] = (u[n] - r[n + 1]) / o[n];
    }
    n = 0;
    o[i - 1] = (t[i] + r[i - 1]) / 2;
    for (; n < i - 1; ++n) {
      o[n] = t[n + 1] * 2 - r[n + 1];
    }
    return [r, o];
  }
  function o(t) {
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
      this._x = [];
      this._y = [];
    },
    lineEnd: function () {
      var t = this._x;
      var n = this._y;
      var e = t.length;
      if (e) {
        if (this._line) {
          this._context.lineTo(t[0], n[0]);
        } else {
          this._context.moveTo(t[0], n[0]);
        }
        if (e === 2) {
          this._context.lineTo(t[1], n[1]);
        } else {
          var i = r(t);
          var o = r(n);
          var u = 0;
          var a = 1;
          for (; a < e; ++u, ++a) {
            this._context.bezierCurveTo(i[0][u], o[0][u], i[1][u], o[1][u], t[a], n[a]);
          }
        }
      }
      if (this._line || this._line !== 0 && e === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function (t, n) {
      this._x.push(+t);
      this._y.push(+n);
    }
  };
  require.d(exports, {
    createSplineCurve: function () {
      return o;
    }
  });
}