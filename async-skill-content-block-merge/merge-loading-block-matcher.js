// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(923146) to 'chat-merge-loading-symbol'
// - Updated imported property 'g' to 'mergeLoadingBlock' (module 923146)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 50412
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-merge-loading-symbol") /*id: 923146*/.mergeLoadingBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_LOADING
  };
  require.r(exports);
  require.d(exports, {
    MergeLoadingBlockPluginMatcher: function () {
      return i;
    }
  });
}