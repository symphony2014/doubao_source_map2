// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(958754) to 'agent-card-block-symbol'
// - Updated imported property 'F' to 'agentCardBlockSym' (module 958754)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 795739
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("agent-card-block-symbol") /*id: 958754*/.agentCardBlockSym,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_CODE_ASSIST_PROCESS_BLOCK
  };
  require.r(exports);
  require.d(exports, {
    ReceiveCodeAgentProcessCardBlockContentMatcher: function () {
      return l;
    }
  });
}