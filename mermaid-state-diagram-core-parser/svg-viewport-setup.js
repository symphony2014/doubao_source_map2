// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'setupSvgViewport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 509839
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var s = mermaidConfigUtils.setName((t, e, r, s) => {
    t.attr("class", r);
    let {
      width: l,
      height: o,
      x: u,
      y: c
    } = i(t, e);
    mermaidConfigUtils.configureSvgSize(t, o, l, s);
    let h = n(u, c, l, o, e);
    t.attr("viewBox", h);
    mermaidConfigUtils.logger.debug(`viewBox configured: ${h} with padding: ${e}`);
  }, "setupViewPortForSVG");
  var i = mermaidConfigUtils.setName((t, e) => {
    var r;
    let a = ((r = t.node()) === null || r === undefined ? undefined : r.getBBox()) || {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    return {
      width: a.width + e * 2,
      height: a.height + e * 2,
      x: a.x,
      y: a.y
    };
  }, "calculateDimensionsWithPadding");
  var n = mermaidConfigUtils.setName((t, e, r, a, s) => `${t - s} ${e - s} ${r} ${a}`, "createViewBox");
  require.d(exports, {
    setupSvgViewport: function () {
      return s;
    }
  });
}