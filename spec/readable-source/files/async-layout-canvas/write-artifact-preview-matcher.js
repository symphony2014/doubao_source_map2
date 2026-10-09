// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'collectionIncludesUtil'
// - Resolved require(517430) to 'collection-includes-util'
// - Renamed variable 'r' to 'artifactLayoutConstants'
// - Resolved require(554108) to 'artifact-layout-constants'
// - Renamed variable 'o' to 'writeArtifactPreviewId'
// - Resolved require(896254) to 'write-artifact-preview-id'
// - Updated imported property 'Z' to 'includes' (module 517430)
// - Updated imported property 'sU' to 'supportedResources' (module 554108)
// - Updated imported property 'E' to 'artifactPreviewId' (module 896254)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 834290
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  let s = e => {
    let {
      type: t
    } = e;
    if (collectionIncludesUtil.includes(artifactLayoutConstants.supportedResources, t)) {
      return writeArtifactPreviewId.artifactPreviewId;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    writeArtifactPreviewCanvasPluginMatcher: function () {
      return s;
    }
  });
}