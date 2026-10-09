// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(436697) to 'merge-research-block-symbol_1'
// - Updated imported property 'm' to 'mergeResearchSymbol' (module 436697)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 531609
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-research-block-symbol_1") /*id: 436697*/.mergeResearchSymbol,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_PROCESS_CARD
  };
  require.r(exports);
  require.d(exports, {
    MergeResearchProcessCardPluginMatcher: function () {
      return i;
    }
  });
}