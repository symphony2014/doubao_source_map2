// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YD' to 'createCubicSplineColor'
// - Renamed export 'hD' to 'createCubicColor'
// - Renamed export 'ZP' to 'interpolateColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 450141
         */
module.exports = function (module, exports, require) {
  var colorFormatConverter_1 = require("color-format-converter_1") /*id: 55571*/;
  var cubicInterpolation = require("cubic-interpolation") /*id: 165595*/;
  var cubicSplineInterpolator = require("cubic-spline-interpolator") /*id: 289649*/;
  var interpolationFunctions = require("interpolation-functions") /*id: 974797*/;
  function a(t) {
    return function (n) {
      var e;
      var r;
      var o = n.length;
      var u = Array(o);
      var a = Array(o);
      var s = Array(o);
      for (e = 0; e < o; ++e) {
        r = colorFormatConverter_1.createColor(n[e]);
        u[e] = r.r || 0;
        a[e] = r.g || 0;
        s[e] = r.b || 0;
      }
      u = t(u);
      a = t(a);
      s = t(s);
      r.opacity = 1;
      return function (t) {
        r.r = u(t);
        r.g = a(t);
        r.b = s(t);
        return r + "";
      };
    };
  }
  exports.interpolateColor = function t(n) {
    var e = interpolationFunctions.powerInterpolate(n);
    function r(t, n) {
      var r = e((t = colorFormatConverter_1.createColor(t)).r, (n = colorFormatConverter_1.createColor(n)).r);
      var o = e(t.g, n.g);
      var a = e(t.b, n.b);
      var s = interpolationFunctions.linearInterpolate(t.opacity, n.opacity);
      return function (n) {
        t.r = r(n);
        t.g = o(n);
        t.b = a(n);
        t.opacity = s(n);
        return t + "";
      };
    }
    r.gamma = t;
    return r;
  }(1);
  var s = a(cubicInterpolation.createInterpolator);
  var c = a(cubicSplineInterpolator.createCubicSpline);
  require.d(exports, {
    createCubicSplineColor: function () {
      return c;
    },
    createCubicColor: function () {
      return s;
    }
  });
}