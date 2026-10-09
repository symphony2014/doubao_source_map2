// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(137882) to 'merge-search-result-block'
// - Updated imported property 'Q' to 'mergeSearchBlock' (module 137882)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 716996
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-search-result-block") /*id: 137882*/.mergeSearchBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT
  };
  require.r(exports);
  require.d(exports, {
    MergeSearchResultBlockPluginMatcher: function () {
      return i;
    }
  });
}