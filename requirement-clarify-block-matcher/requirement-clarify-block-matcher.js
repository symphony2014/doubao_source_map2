// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(993414) to 'requirement-clarify-symbol'
// - Updated imported property 's' to 'clarifyBlockSymbol' (module 993414)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 771535
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("requirement-clarify-symbol") /*id: 993414*/.clarifyBlockSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY
  };
  require.r(exports);
  require.d(exports, {
    RequirementClarifyBlockMatcher: function () {
      return l;
    }
  });
}