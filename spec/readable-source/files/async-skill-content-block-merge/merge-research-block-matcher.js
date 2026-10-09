// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(421934) to 'merge-research-block-symbol'
// - Updated imported property 'n' to 'researchBlockSymbol' (module 421934)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 314864
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-research-block-symbol") /*id: 421934*/.researchBlockSymbol,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_RESEARCH
  };
  require.r(exports);
  require.d(exports, {
    MergeResearchBlockPluginMatcher: function () {
      return i;
    }
  });
}