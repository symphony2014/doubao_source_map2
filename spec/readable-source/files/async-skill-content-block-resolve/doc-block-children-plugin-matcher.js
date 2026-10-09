// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(392742) to 'doc-block-children-symbol'
// - Updated imported property 'd' to 'docBlockChildren' (module 392742)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 458544
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("doc-block-children-symbol") /*id: 392742*/.docBlockChildren,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_RESEARCH
  };
  require.r(exports);
  require.d(exports, {
    HandleDocBlockContentChildrenPluginMatcher: function () {
      return i;
    }
  });
}