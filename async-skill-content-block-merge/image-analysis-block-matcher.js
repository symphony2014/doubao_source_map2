// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(574102) to 'merge-image-analysis-block-symbol'
// - Updated imported property 'y' to 'mergeImageAnalysis' (module 574102)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 238483
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-image-analysis-block-symbol") /*id: 574102*/.mergeImageAnalysis,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_IMAGE_ANALYSIS
  };
  require.r(exports);
  require.d(exports, {
    MergeImageAnalysisBlockPluginMatcher: function () {
      return i;
    }
  });
}