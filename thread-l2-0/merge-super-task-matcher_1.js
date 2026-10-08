// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(993641) to 'merge-super-task-card-symbol'
// - Updated imported property 'N' to 'mergeSuperTaskSymbol' (module 993641)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 951264
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let r = {
    pluginIdentifier: require("merge-super-task-card-symbol") /*id: 993641*/.mergeSuperTaskSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK
  };
  require.r(exports);
  require.d(exports, {
    PluginMatcher: function () {
      return r;
    }
  });
}