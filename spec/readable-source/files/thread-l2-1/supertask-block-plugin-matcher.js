// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(108086) to 'super-task-block-plugin-symbol'
// - Updated imported property '_' to 'superTaskBlockSymbol' (module 108086)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 347210
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("super-task-block-plugin-symbol") /*id: 108086*/.superTaskBlockSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK || e === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP
  };
  require.r(exports);
  require.d(exports, {
    HandleProcessingBlockContentChildrenPluginMatcher: function () {
      return l;
    }
  });
}