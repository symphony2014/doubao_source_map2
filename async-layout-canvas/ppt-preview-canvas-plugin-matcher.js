// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'pptArtifactPreviewCanvas_1'
// - Resolved require(677148) to 'ppt-artifact-preview-canvas_1'
// - Updated imported property 'q' to 'pptCanvasSymbol' (module 677148)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 45523
         */
module.exports = function (module, exports, require) {
  var pptArtifactPreviewCanvas_1 = require("ppt-artifact-preview-canvas_1") /*id: 677148*/;
  let r = e => {
    let {
      pptShowProps: t
    } = e;
    if (t) {
      return pptArtifactPreviewCanvas_1.pptCanvasSymbol;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    pptArtifactPreviewCanvasPluginMatcher: function () {
      return r;
    }
  });
}