// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(120755) to 'chat-merge-thinking-symbol'
// - Updated imported property 'J' to 'mergeThinkingSymbol' (module 120755)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 578137
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-merge-thinking-symbol") /*id: 120755*/.mergeThinkingSymbol,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_THINKING
  };
  require.r(exports);
  require.d(exports, {
    MergeThinkingContainerBlockPluginMatcher: function () {
      return i;
    }
  });
}