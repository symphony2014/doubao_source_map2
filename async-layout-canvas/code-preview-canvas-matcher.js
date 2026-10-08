// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codingCanvasPreviewConst'
// - Resolved require(314125) to 'coding-canvas-preview-const'
// - Updated imported property 'S' to 'codingCanvasPreview' (module 314125)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 700893
         */
module.exports = function (module, exports, require) {
  var codingCanvasPreviewConst = require("coding-canvas-preview-const") /*id: 314125*/;
  let r = e => {
    let {
      isCodeFile: t
    } = e;
    if (t) {
      return codingCanvasPreviewConst.codingCanvasPreview;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    codePreviewCanvasPluginMatcher: function () {
      return r;
    }
  });
}