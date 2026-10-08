// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'l' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(541770) to 'chat-artifact-content-key'
// - Updated imported property 'd' to 'artifactContentKey' (module 541770)
// - Updated imported property '$A' to 'artifactResourceType' (module 617019)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 187925
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let r = {
    pluginIdentifier: require("chat-artifact-content-key") /*id: 541770*/.artifactContentKey,
    matchContentBlock(e, t) {
      if (!(t == null ? undefined : t.resourceType)) {
        return false;
      }
      let n = [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CanvasPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepWritingOtterPage, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Docx, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_StepDocx];
      return e === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && n.includes(t.resourceType);
    }
  };
  require.r(exports);
  require.d(exports, {
    ArtifactContentBlockMatcher: function () {
      return r;
    }
  });
}