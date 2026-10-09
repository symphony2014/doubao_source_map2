// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'betaCurveGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 233861
         */
module.exports = function (module, exports, require) {
  var bezierCurveGenerator = require("bezier-curve-generator") /*id: 213635*/;
  function r(t, n) {
    this._basis = new bezierCurveGenerator.CurveGenerator(t);
    this._beta = n;
  }
  r.prototype = {
    lineStart: function () {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function () {
      var t = this._x;
      var n = this._y;
      var e = t.length - 1;
      if (e > 0) {
        var i;
        var r = t[0];
        var o = n[0];
        var u = t[e] - r;
        var a = n[e] - o;
        var s = -1;
        while (++s <= e) {
          i = s / e;
          this._basis.point(this._beta * t[s] + (1 - this._beta) * (r + i * u), this._beta * n[s] + (1 - this._beta) * (o + i * a));
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function (t, n) {
      this._x.push(+t);
      this._y.push(+n);
    }
  };
  exports.betaCurveGenerator = function t(n) {
    function e(t) {
      if (n === 1) {
        return new bezierCurveGenerator.CurveGenerator(t);
      } else {
        return new r(t, n);
      }
    }
    e.beta = function (n) {
      return t(+n);
    };
    return e;
  }(0.85);
}