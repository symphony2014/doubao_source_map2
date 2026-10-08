// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(463699) to 'chat-merge-life-block-symbol'
// - Updated imported property 'c' to 'mergeLocalLifeSym' (module 463699)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 264111
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("chat-merge-life-block-symbol") /*id: 463699*/.mergeLocalLifeSym,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_LOCAL_LIFE
  };
  require.r(exports);
  require.d(exports, {
    MergeLocalLifeBlockPluginMatcher: function () {
      return i;
    }
  });
}