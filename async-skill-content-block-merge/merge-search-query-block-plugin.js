// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(87672) to 'merge-search-query-block-symbol'
// - Updated imported property '$' to 'mergeSearchQueryBlock' (module 87672)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 542349
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-search-query-block-symbol") /*id: 87672*/.mergeSearchQueryBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY
  };
  require.r(exports);
  require.d(exports, {
    MergeSearchQueryBlockPluginMatcher: function () {
      return i;
    }
  });
}