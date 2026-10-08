// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(241939) to 'processing-block-content'
// - Updated imported property 'h' to 'blockContentHandler' (module 241939)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 117346
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("processing-block-content") /*id: 241939*/.blockContentHandler,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_PROCESS_CARD
  };
  require.r(exports);
  require.d(exports, {
    HandleProcessingBlockContentChildrenPluginMatcher: function () {
      return i;
    }
  });
}