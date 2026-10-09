// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPptSlideCanvasModule'
// - Resolved require(186183) to 'ai-ppt-slide-canvas-module'
// - Updated imported property 'L' to 'canvasElementId' (module 186183)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 572041
         */
module.exports = function (module, exports, require) {
  var aiPptSlideCanvasModule = require("ai-ppt-slide-canvas-module") /*id: 186183*/;
  let r = e => {
    let {
      targetUrlPluginId: t
    } = e;
    if (t === "PPT_AutoCanvasView") {
      return aiPptSlideCanvasModule.canvasElementId;
    }
  };
  require.r(exports);
  require.d(exports, {
    aiPPTSlideCanvasPluginMatcher: function () {
      return r;
    }
  });
}