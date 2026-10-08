// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(851983) to 'agent-process-block-symbol'
// - Updated imported property 'V' to 'agentBlockId' (module 851983)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 767008
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("agent-process-block-symbol") /*id: 851983*/.agentBlockId,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK
  };
  require.r(exports);
  require.d(exports, {
    MergeAgentProcessCardPluginMatcher: function () {
      return i;
    }
  });
}