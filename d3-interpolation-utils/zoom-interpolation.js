// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'interpolateZoom'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 842235
         */
module.exports = function (module, exports, require) {
  function e(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }
  exports.interpolateZoom = function t(n, i, r) {
    function o(t, o) {
      var u;
      var a;
      var s = t[0];
      var c = t[1];
      var h = t[2];
      var f = o[0];
      var l = o[1];
      var _ = o[2];
      var p = f - s;
      var y = l - c;
      var d = p * p + y * y;
      if (d < 1e-12) {
        a = Math.log(_ / h) / n;
        u = function (t) {
          return [s + t * p, c + t * y, h * Math.exp(n * t * a)];
        };
      } else {
        var x = Math.sqrt(d);
        var g = (_ * _ - h * h + r * d) / (h * 2 * i * x);
        var v = (_ * _ - h * h - r * d) / (_ * 2 * i * x);
        var m = Math.log(Math.sqrt(g * g + 1) - g);
        a = (Math.log(Math.sqrt(v * v + 1) - v) - m) / n;
        u = function (t) {
          var r;
          var o;
          var u = t * a;
          var f = e(m);
          var l = h / (i * x) * (f * (((r = Math.exp((r = n * u + m) * 2)) - 1) / (r + 1)) - ((o = Math.exp(o = m)) - 1 / o) / 2);
          return [s + l * p, c + l * y, h * f / e(n * u + m)];
        };
      }
      u.duration = a * 1000 * n / Math.SQRT2;
      return u;
    }
    o.rho = function (n) {
      var e = Math.max(0.001, +n);
      var i = e * e;
      return t(e, i, i * i);
    };
    return o;
  }(Math.SQRT2, 2, 4);
}