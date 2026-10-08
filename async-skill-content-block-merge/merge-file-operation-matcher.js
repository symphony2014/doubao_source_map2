// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(319298) to 'merge-file-operation-symbol'
// - Updated imported property 'c' to 'mergeFileOpBlock' (module 319298)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 29558
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-file-operation-symbol") /*id: 319298*/.mergeFileOpBlock,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_FILE_OPERATION
  };
  require.r(exports);
  require.d(exports, {
    MergeFileOperationPluginMatcher: function () {
      return i;
    }
  });
}