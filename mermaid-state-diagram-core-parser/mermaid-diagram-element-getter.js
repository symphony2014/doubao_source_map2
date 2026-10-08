// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getDiagramElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 553740
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var i = mermaidConfigUtils.setName((t, e) => {
    let r;
    if (e === "sandbox") {
      r = axisAndZoomUtilities.select("#i" + t);
    }
    return (e === "sandbox" ? axisAndZoomUtilities.select(r.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body")).select(`[id="${t}"]`);
  }, "getDiagramElement");
  require.d(exports, {
    getDiagramElement: function () {
      return i;
    }
  });
}