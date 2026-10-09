// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'superTaskAiPptPreview'
// - Resolved require(574716) to 'super-task-ai-ppt-preview'
// - Renamed variable 'r' to 'aiPptCanvasPreviewConst'
// - Resolved require(94495) to 'ai-ppt-canvas-preview-const'
// - Updated imported property 'J' to 'superTaskPptPreview' (module 574716)
// - Updated imported property 'g' to 'aiPptCanvasPreview' (module 94495)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 913596
         */
module.exports = function (module, exports, require) {
  var superTaskAiPptPreview = require("super-task-ai-ppt-preview") /*id: 574716*/;
  var aiPptCanvasPreviewConst = require("ai-ppt-canvas-preview-const") /*id: 94495*/;
  let o = e => (e == null ? undefined : e.type) === superTaskAiPptPreview.superTaskPptPreview ? aiPptCanvasPreviewConst.aiPptCanvasPreview : undefined;
  require.r(exports);
  require.d(exports, {
    aiPPTCanvasPluginMatcher: function () {
      return o;
    }
  });
}