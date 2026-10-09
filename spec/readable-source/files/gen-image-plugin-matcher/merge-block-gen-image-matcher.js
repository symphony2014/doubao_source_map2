// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(372856) to 'merge-block-gen-image-plugin'
// - Updated imported property 'o' to 'mergeBlockImgPlugin' (module 372856)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2196.6dabce89.js
         * chunkId: 2196
         * moduleId: 303003
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let c = {
    pluginIdentifier: require("merge-block-gen-image-plugin") /*id: 372856*/.mergeBlockImgPlugin,
    matchContentBlock: _ => _ === chatConstantsEnum.messageContentType.BLOCK_GEN_IMAGE
  };
  require.r(exports);
  require.d(exports, {
    MergeBlockGenImagePluginMatcher: function () {
      return c;
    }
  });
}