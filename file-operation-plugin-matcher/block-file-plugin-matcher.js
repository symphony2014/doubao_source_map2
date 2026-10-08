// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(146169) to 'block-file-operation-plugin-symbol'
// - Updated imported property 'M' to 'blockFilePlugin' (module 146169)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59336.72118c54.js
         * chunkId: 59336
         * moduleId: 683311
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("block-file-operation-plugin-symbol") /*id: 146169*/.blockFilePlugin,
    matchContentBlock: _ => _ === chatConstantsEnum.messageContentType.BLOCK_FILE_OPERATION
  };
  require.r(exports);
  require.d(exports, {
    HandleBlockFileOperationPluginMatcher: function () {
      return i;
    }
  });
}