// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(836571) to 'chat-linker-reader-symbol'
// - Updated imported property 'F' to 'receiveLinkerBlockContent' (module 836571)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 872714
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-linker-reader-symbol") /*id: 836571*/.receiveLinkerBlockContent,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_LINKER_READER
  };
  require.r(exports);
  require.d(exports, {
    ReceiveLinkerReaderBlockContentMatcher: function () {
      return l;
    }
  });
}