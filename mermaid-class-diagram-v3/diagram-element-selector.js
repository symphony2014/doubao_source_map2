// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getDiagramElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29501.f9fecd0f.js
         * chunkId: 29501
         * moduleId: 150827
         */
module.exports = function (module, exports, require) {
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var r = loggerLevelUtils.setFunctionName((e, t) => {
    let s;
    if (t === "sandbox") {
      s = axisAndZoomUtilities.select("#i" + e);
    }
    return (t === "sandbox" ? axisAndZoomUtilities.select(s.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body")).select(`[id="${e}"]`);
  }, "getDiagramElement");
  require.d(exports, {
    getDiagramElement: function () {
      return r;
    }
  });
}