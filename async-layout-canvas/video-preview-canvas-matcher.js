// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'videoPreviewCanvasSymbol'
// - Resolved require(643783) to 'video-preview-canvas-symbol'
// - Updated imported property 'o' to 'videoCanvasSymbol' (module 643783)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 876296
         */
module.exports = function (module, exports, require) {
  var videoPreviewCanvasSymbol = require("video-preview-canvas-symbol") /*id: 643783*/;
  let r = e => {
    let {
      videoCanvasShowProps: t
    } = e;
    if (t) {
      return videoPreviewCanvasSymbol.videoCanvasSymbol;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    videoArtifactPreviewCanvasPluginMatcher: function () {
      return r;
    }
  });
}