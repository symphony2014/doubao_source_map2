// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatImageArtifactPreview'
// - Resolved require(888572) to 'chat-image-artifact-preview'
// - Updated imported property 'Y' to 'imgArtifactPreview' (module 888572)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 219875
         */
module.exports = function (module, exports, require) {
  var chatImageArtifactPreview = require("chat-image-artifact-preview") /*id: 888572*/;
  let r = e => {
    let {
      imageEditorProps: t
    } = e;
    if (t) {
      return chatImageArtifactPreview.imgArtifactPreview;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    imageArtifactPreviewCanvasPluginMatcher: function () {
      return r;
    }
  });
}