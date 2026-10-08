// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(759638) to 'merge-block-code-plugin'
// - Updated imported property 's' to 'mergeBlockCodeId' (module 759638)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 534197
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-block-code-plugin") /*id: 759638*/.mergeBlockCodeId,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_CODE
  };
  require.r(exports);
  require.d(exports, {
    MergeBlockCodePluginMatcher: function () {
      return i;
    }
  });
}