// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(879221) to 'requirement-clarify-id-const'
// - Updated imported property 'o' to 'clarifyBlockId' (module 879221)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37404.0c2c82f2.js
         * chunkId: 37404
         * moduleId: 843865
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("requirement-clarify-id-const") /*id: 879221*/.clarifyBlockId,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY
  };
  require.r(exports);
  require.d(exports, {
    RequirementClarifyBlockResolvePluginMatcher: function () {
      return i;
    }
  });
}