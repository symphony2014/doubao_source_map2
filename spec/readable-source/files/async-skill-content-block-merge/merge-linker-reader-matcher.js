// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(21077) to 'merge-linker-reader-symbol'
// - Updated imported property 'p' to 'mergeLinkerReaderBlock' (module 21077)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 849514
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-linker-reader-symbol") /*id: 21077*/.mergeLinkerReaderBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_LINKER_READER
  };
  require.r(exports);
  require.d(exports, {
    MergeLinkerReaderBlockPluginMatcher: function () {
      return i;
    }
  });
}