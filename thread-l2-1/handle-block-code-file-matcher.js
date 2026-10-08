// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(468071) to 'block-code-file-symbol'
// - Updated imported property 'S' to 'blockCodeFileSymbol' (module 468071)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 964737
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("block-code-file-symbol") /*id: 468071*/.blockCodeFileSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_CODE_FILE
  };
  require.r(exports);
  require.d(exports, {
    HandleBlockCodeFilePluginMatcher: function () {
      return l;
    }
  });
}