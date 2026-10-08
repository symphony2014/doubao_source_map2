// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(675457) to 'receive-research-doc-constant'
// - Updated imported property 'e' to 'receiveResearchDocBlock' (module 675457)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 749112
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-research-doc-constant") /*id: 675457*/.receiveResearchDocBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH
  };
  require.r(exports);
  require.d(exports, {
    ReceiveResearchReportBlockContentMatcher: function () {
      return l;
    }
  });
}