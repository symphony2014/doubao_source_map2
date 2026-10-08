// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(507898) to 'chat-image-analysis-symbol'
// - Updated imported property '_' to 'receiveImageBlock' (module 507898)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 722133
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-image-analysis-symbol") /*id: 507898*/.receiveImageBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_IMAGE_ANALYSIS
  };
  require.r(exports);
  require.d(exports, {
    ReceiveImageAnalysisBlockMatcher: function () {
      return l;
    }
  });
}