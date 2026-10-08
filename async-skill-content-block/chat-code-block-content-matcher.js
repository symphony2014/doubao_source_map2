// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(677316) to 'chat-code-block-symbol'
// - Updated imported property 'i' to 'codeBlockContent' (module 677316)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 119510
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-code-block-symbol") /*id: 677316*/.codeBlockContent,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_CODE
  };
  require.r(exports);
  require.d(exports, {
    ReceiveCodeBlockContentMatcher: function () {
      return l;
    }
  });
}