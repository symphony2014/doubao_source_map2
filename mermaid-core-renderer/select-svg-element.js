// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'selectSvgElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 840584
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var l = loggerLevelUtils.setFunctionName(t => {
    let {
      securityLevel: e
    } = mermaidConfigUtils_1.getConfigAlias();
    let r = axisAndZoomUtilities.select("body");
    if (e === "sandbox") {
      let e = axisAndZoomUtilities.select(`#i${t}`).node()?.contentDocument ?? document;
      r = axisAndZoomUtilities.select(e.body);
    }
    return r.select(`#${t}`);
  }, "selectSvgElement");
  require.d(exports, {
    selectSvgElement: function () {
      return l;
    }
  });
}