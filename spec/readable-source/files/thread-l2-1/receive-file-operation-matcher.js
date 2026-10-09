// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(732161) to 'receive-file-operation-symbol'
// - Updated imported property 'd' to 'receiveFileOperation' (module 732161)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 447976
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-file-operation-symbol") /*id: 732161*/.receiveFileOperation,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_FILE_OPERATION
  };
  require.r(exports);
  require.d(exports, {
    ReceiveFileOperationContentMatcher: function () {
      return l;
    }
  });
}