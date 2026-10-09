// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(111365) to 'merge-super-task-tool-block-symbol'
// - Updated imported property 'O' to 'mergeSuperTaskBlock' (module 111365)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 462992
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let r = {
    pluginIdentifier: require("merge-super-task-tool-block-symbol") /*id: 111365*/.mergeSuperTaskBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK_TOOL || e === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP
  };
  require.r(exports);
  require.d(exports, {
    MatcherPlugin: function () {
      return r;
    }
  });
}