// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(107363) to 'receive-super-task-file-const'
// - Updated imported property 'N' to 'receiveSuperTaskFile' (module 107363)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 209929
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-super-task-file-const") /*id: 107363*/.receiveSuperTaskFile,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_FILE || e === chatConstantsEnum.messageContentType.BLOCK_LINK
  };
  require.r(exports);
  require.d(exports, {
    receiveSuperTaskFileMatcher: function () {
      return l;
    }
  });
}