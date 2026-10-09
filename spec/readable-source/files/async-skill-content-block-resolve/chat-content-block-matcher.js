// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(155626) to 'chat-process-card-identifier'
// - Updated imported property 'e' to 'processCardBlockId' (module 155626)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 179205
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-process-card-identifier") /*id: 155626*/.processCardBlockId,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK
  };
  require.r(exports);
  require.d(exports, {
    HandleProcessingBlockContentChildrenPluginMatcher: function () {
      return i;
    }
  });
}