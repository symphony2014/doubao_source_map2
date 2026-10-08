// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(279821) to 'chat-merge-image-symbol'
// - Updated imported property 'E' to 'mergeImageBlock' (module 279821)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 741825
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-merge-image-symbol") /*id: 279821*/.mergeImageBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_IMAGE
  };
  require.r(exports);
  require.d(exports, {
    MergeImageBlockPluginMatcher: function () {
      return i;
    }
  });
}