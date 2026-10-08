// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Resolved require(507513) to 'merge-block-artifact-symbol'
// - Updated imported property 'o' to 'mergeBlockArtifact' (module 507513)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property '$A' to 'artifactResourceType' (module 617019)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 446985
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  let o = {
    pluginIdentifier: require("merge-block-artifact-symbol") /*id: 507513*/.mergeBlockArtifact,
    matchContentBlock: (t, e) => t === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && !!(e == null ? undefined : e.resourceType) && [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CodeDevelopMode].includes(e.resourceType)
  };
  require.r(exports);
  require.d(exports, {
    MergeBlockArtifactPluginMatcher: function () {
      return o;
    }
  });
}