// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(963925) to 'merge-research-block-symbol_2'
// - Updated imported property 'F' to 'mergeBlockSymbol' (module 963925)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 539846
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-research-block-symbol_2") /*id: 963925*/.mergeBlockSymbol,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_WEBPAGE
  };
  require.r(exports);
  require.d(exports, {
    MergeResearchWebPageBlockPluginMatcher: function () {
      return i;
    }
  });
}