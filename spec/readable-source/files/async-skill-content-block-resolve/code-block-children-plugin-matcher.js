// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(565052) to 'code-block-content-children-symbol'
// - Updated imported property 'T' to 'codeBlockChildren' (module 565052)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 6315
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("code-block-content-children-symbol") /*id: 565052*/.codeBlockChildren,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH_WEBPAGE
  };
  require.r(exports);
  require.d(exports, {
    HandleCodeBlockContentChildrenPluginMatcher: function () {
      return i;
    }
  });
}