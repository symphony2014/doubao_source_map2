// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(966614) to 'resolve-artifact-op-plugin-id'
// - Updated imported property 'J' to 'resolveArtifactOpId' (module 966614)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46437.66e7ebe1.js
         * chunkId: 46437
         * moduleId: 567466
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let A = {
    pluginIdentifier: require("resolve-artifact-op-plugin-id") /*id: 966614*/.resolveArtifactOpId,
    matchContentBlock: _ => _ === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP
  };
  require.r(exports);
  require.d(exports, {
    HandleArtifactOpPluginMatcher: function () {
      return A;
    }
  });
}