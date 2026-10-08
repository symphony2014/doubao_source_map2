// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(54911) to 'chat-video-preview-symbol'
// - Updated imported property 'x' to 'videoPreviewBlock' (module 54911)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 957196
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-video-preview-symbol") /*id: 54911*/.videoPreviewBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_VIDEO_READER
  };
  require.r(exports);
  require.d(exports, {
    ReceiveVideoPreviewBlockContentMatcher: function () {
      return l;
    }
  });
}