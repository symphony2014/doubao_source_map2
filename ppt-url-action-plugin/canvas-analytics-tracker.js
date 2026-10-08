// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'createCanvasAnalyticsData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60955.e28a9bd4.js
         * chunkId: 60955
         * moduleId: 619081
         */
module.exports = function (module, exports, require) {
  var aiPptSlideCanvasModule = require("ai-ppt-slide-canvas-module") /*id: 186183*/;
  let n = e => {
    let {
      scene: t,
      message: r,
      contentBlock: n,
      isAutoOpen: o = false,
      artifactBlockContent: s,
      driveClickTime: l,
      onCloseCanvas: a
    } = e;
    return {
      scene: t,
      perfStartTime: Date.now(),
      openCanvasTime: Date.now(),
      driveClickTime: l || 0,
      exactPluginIdentifier: aiPptSlideCanvasModule.canvasElementId,
      conversationId: (r == null ? undefined : r.conversation_id) || "",
      messageId: (r == null ? undefined : r.message_id) || "",
      docToken: (s == null ? undefined : s.resource_id) || "",
      docTitle: (s == null ? undefined : s.title) || "",
      artifactVersionId: (s == null ? undefined : s.artifact_version_id) || "",
      onCloseCanvas: a,
      resourceVersion: (s == null ? undefined : s.resource_version) || "",
      isAutoOpen: o != null && o,
      resourceType: s == null ? undefined : s.resource_type,
      artifactMetaId: s == null ? undefined : s.artifact_meta_id,
      blockType: n.block_type,
      blockStatus: s == null ? undefined : s.status
    };
  };
  require.d(exports, {
    createCanvasAnalyticsData: function () {
      return n;
    }
  });
}