// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LP' to 'generateColorScale'
// - Renamed export 'Q0' to 'lightenColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 571006
         */
module.exports = function (module, exports, require) {
  var colorRenderUtils = require("color-render-utils") /*id: 286955*/;
  var colorManipulationModule = require("color-manipulation-module") /*id: 16252*/;
  function o(t) {
    return Array(11).fill(t, 0, 11).map(function (t, e) {
      var n;
      var i;
      var o;
      var a;
      var s;
      var h;
      if (e === 5) {
        return t;
      } else {
        n = t;
        i = e + 1;
        s = (a = {
          h: (o = colorManipulationModule.Color(n)).hue(),
          s: o.saturationl(),
          l: o.lightness()
        }).l;
        h = 0;
        if (i === 6) {
          h = a.l;
        } else if (i < 6) {
          h = s + (96 - s) / 5 * (6 - i);
        } else if (i > 6) {
          h = s - (s - 16) / 5 * (i - 6);
        }
        return colorManipulationModule.Color({
          h: Math.round(a.h),
          s: a.s,
          l: h
        }).hex();
      }
    });
  }
  function a(t, e = 0.1) {
    return colorRenderUtils.lightenColorValue(t, e);
  }
  require.d(exports, {
    generateColorScale: function () {
      return o;
    },
    lightenColor: function () {
      return a;
    }
  });
}