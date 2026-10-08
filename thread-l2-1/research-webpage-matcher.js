// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(62088) to 'research-block-content-const'
// - Updated imported property 'C' to 'researchBlockType' (module 62088)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 406003
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("research-block-content-const") /*id: 62088*/.researchBlockType,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_WEBPAGE
  };
  require.r(exports);
  require.d(exports, {
    ReceiveResearchWebPageBlockContentMatcher: function () {
      return l;
    }
  });
}