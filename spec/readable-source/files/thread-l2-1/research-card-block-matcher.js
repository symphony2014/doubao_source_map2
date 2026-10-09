// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(965802) to 'receive-research-card-symbol'
// - Updated imported property 'h' to 'receiveResearchCard' (module 965802)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 901063
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-research-card-symbol") /*id: 965802*/.receiveResearchCard,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_PROCESS_CARD
  };
  require.r(exports);
  require.d(exports, {
    ReceiveResearchProcessCardBlockContentMatcher: function () {
      return l;
    }
  });
}