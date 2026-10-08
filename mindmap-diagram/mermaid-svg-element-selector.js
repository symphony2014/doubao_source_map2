// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'selectSvgElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 871430
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var a = mermaidConfigUtils.setName(e => {
    let {
      securityLevel: t
    } = mermaidConfigUtils.getConfigAlias();
    let r = axisAndZoomUtilities.select("body");
    if (t === "sandbox") {
      let t = axisAndZoomUtilities.select(`#i${e}`).node()?.contentDocument ?? document;
      r = axisAndZoomUtilities.select(t.body);
    }
    return r.select(`#${e}`);
  }, "selectSvgElement");
  require.d(exports, {
    selectSvgElement: function () {
      return a;
    }
  });
}