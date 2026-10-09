// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'interpolateColorOrGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 718716
         */
module.exports = function (module, exports, require) {
  var colorManipulationModule = require("color-manipulation-module") /*id: 16252*/;
  var valueInterpolator = require("value-interpolator") /*id: 274618*/;
  var colorRenderUtils = require("color-render-utils") /*id: 286955*/;
  var linearGradientRenderer = require("linear-gradient-renderer") /*id: 8690*/;
  var radialGradientRenderer = require("radial-gradient-renderer") /*id: 240031*/;
  var conicGradientRenderer = require("conic-gradient-renderer") /*id: 152133*/;
  var l = {
    linearGradient: linearGradientRenderer.LinearGradient,
    radialGradient: radialGradientRenderer.RadialGradient,
    conicGradient: conicGradientRenderer.ConicGradient
  };
  var u = {
    color: c
  };
  function c(t, e, n) {
    if (!t || !e) {
      return e;
    }
    if (typeof t == "string" && typeof e == "string") {
      if (t === "none" || e === "none" || e === "currentColor") {
        return e;
      }
      var a = colorManipulationModule.Color(t).object();
      var s = colorManipulationModule.Color(e).object();
      if (a.alpha === undefined) {
        a.alpha = 1;
      }
      if (s.alpha === undefined) {
        s.alpha = 1;
      }
      var h = valueInterpolator.interpolate(a, s, n);
      h.alpha = parseFloat(h.alpha.toFixed(3));
      return colorManipulationModule.Color(h).toString();
    }
    if (colorRenderUtils.isGradient(t) && colorRenderUtils.isGradient(e) && t.type === e.type) {
      var c = valueInterpolator.interpolate(t.option, e.option, n, u);
      return new l[t.type](c);
    }
    return e;
  }
  require.d(exports, {
    interpolateColorOrGradient: function () {
      return c;
    }
  });
}