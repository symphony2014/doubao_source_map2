// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(881676) to 'chat-local-life-block-symbol'
// - Updated imported property 'L' to 'chatLocalLifeSymbol' (module 881676)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 933786
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-local-life-block-symbol") /*id: 881676*/.chatLocalLifeSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_LOCAL_LIFE
  };
  require.r(exports);
  require.d(exports, {
    ReceiveLocalLifeBlockContentMatcher: function () {
      return l;
    }
  });
}