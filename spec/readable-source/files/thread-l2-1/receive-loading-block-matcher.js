// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(345208) to 'chat-receive-loading-symbol'
// - Updated imported property 'F' to 'receiveLoadingSymbol' (module 345208)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 242044
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-receive-loading-symbol") /*id: 345208*/.receiveLoadingSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_LOADING
  };
  require.r(exports);
  require.d(exports, {
    ReceiveLoadingBlockContentMatcher: function () {
      return l;
    }
  });
}