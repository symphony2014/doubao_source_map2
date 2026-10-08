// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(359496) to 'requirement-block-merge-id'
// - Updated imported property 'W' to 'blockMergeSymbol' (module 359496)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36037.d600fbf5.js
         * chunkId: 36037
         * moduleId: 561576
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let r = {
    pluginIdentifier: require("requirement-block-merge-id") /*id: 359496*/.blockMergeSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY
  };
  require.r(exports);
  require.d(exports, {
    RequirementClarifyBlockMergePluginMatcher: function () {
      return r;
    }
  });
}