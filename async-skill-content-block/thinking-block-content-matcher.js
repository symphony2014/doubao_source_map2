// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(597726) to 'chat-thinking-block-symbol'
// - Updated imported property 'F' to 'thinkingBlockSymbol' (module 597726)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 276203
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-thinking-block-symbol") /*id: 597726*/.thinkingBlockSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_THINKING
  };
  require.r(exports);
  require.d(exports, {
    ReceiveThinkingContainerBlockContentMatcher: function () {
      return l;
    }
  });
}