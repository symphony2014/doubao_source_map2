// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'setupViewPortForSvg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29501.f9fecd0f.js
         * chunkId: 29501
         * moduleId: 3049
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var r = loggerLevelUtils.setFunctionName((e, t, s, r) => {
    e.attr("class", s);
    let {
      width: c,
      height: o,
      x: h,
      y: u
    } = a(e, t);
    mermaidConfigUtils_1.configureSvgSize(e, o, c, r);
    let y = l(h, u, c, o, t);
    e.attr("viewBox", y);
    loggerLevelUtils.logger.debug(`viewBox configured: ${y} with padding: ${t}`);
  }, "setupViewPortForSVG");
  var a = loggerLevelUtils.setFunctionName((e, t) => {
    var s;
    let i = ((s = e.node()) === null || s === undefined ? undefined : s.getBBox()) || {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    return {
      width: i.width + t * 2,
      height: i.height + t * 2,
      x: i.x,
      y: i.y
    };
  }, "calculateDimensionsWithPadding");
  var l = loggerLevelUtils.setFunctionName((e, t, s, i, n) => `${e - n} ${t - n} ${s} ${i}`, "createViewBox");
  require.d(exports, {
    setupViewPortForSvg: function () {
      return r;
    }
  });
}