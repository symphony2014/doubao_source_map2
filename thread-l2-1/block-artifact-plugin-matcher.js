// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'l' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Resolved require(735847) to 'block-artifact-symbol'
// - Updated imported property 'n' to 'blockArtifactSymbol' (module 735847)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property '$A' to 'artifactResourceType' (module 617019)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 275281
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  let r = {
    pluginIdentifier: require("block-artifact-symbol") /*id: 735847*/.blockArtifactSymbol,
    matchContentBlock: (e, t) => e === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && !!(t == null ? undefined : t.resourceType) && [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CodeDevelopMode].includes(t.resourceType)
  };
  require.r(exports);
  require.d(exports, {
    HandleBlockArtifactPluginMatcher: function () {
      return r;
    }
  });
}