// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(471043) to 'chat-merge-search-block-symbol'
// - Updated imported property 'b' to 'mergeSearchBlockSym' (module 471043)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 637167
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-merge-search-block-symbol") /*id: 471043*/.mergeSearchBlockSym,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT
  };
  require.r(exports);
  require.d(exports, {
    MergeSearchQueryResultBlockPluginMatcher: function () {
      return i;
    }
  });
}