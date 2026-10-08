// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(917676) to 'receive-header-text-block-symbol'
// - Updated imported property 'f' to 'headerTextBlockKey' (module 917676)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 801898
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-header-text-block-symbol") /*id: 917676*/.headerTextBlockKey,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_HEADER_TEXT
  };
  require.r(exports);
  require.d(exports, {
    ReceiveHeaderTextBlockContentMatcher: function () {
      return l;
    }
  });
}