// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(59518) to 'receive-image-block-symbol'
// - Updated imported property 'x' to 'imageBlockContentKey' (module 59518)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 341100
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-image-block-symbol") /*id: 59518*/.imageBlockContentKey,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_IMAGE
  };
  require.r(exports);
  require.d(exports, {
    ReceiveImageBlockContentMatcher: function () {
      return l;
    }
  });
}