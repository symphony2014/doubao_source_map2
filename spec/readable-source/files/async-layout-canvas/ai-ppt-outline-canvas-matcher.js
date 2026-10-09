// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'superTaskAiPptConstants'
// - Resolved require(384454) to 'super-task-ai-ppt-constants'
// - Renamed variable 'r' to 'aiPptOutlineCanvasConstant'
// - Resolved require(471215) to 'ai-ppt-outline-canvas-constant'
// - Updated imported property 'O' to 'aiPptOutlinePreview' (module 384454)
// - Updated imported property 'c' to 'pptOutlineCanvasId' (module 471215)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 764199
         */
module.exports = function (module, exports, require) {
  var superTaskAiPptConstants = require("super-task-ai-ppt-constants") /*id: 384454*/;
  var aiPptOutlineCanvasConstant = require("ai-ppt-outline-canvas-constant") /*id: 471215*/;
  let o = e => (e == null ? undefined : e.type) === superTaskAiPptConstants.aiPptOutlinePreview ? aiPptOutlineCanvasConstant.pptOutlineCanvasId : undefined;
  require.r(exports);
  require.d(exports, {
    aiPPTOutlineCanvasPluginMatcher: function () {
      return o;
    }
  });
}