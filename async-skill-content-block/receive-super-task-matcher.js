// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(199471) to 'receive-super-task-content'
// - Updated imported property 't' to 'receiveSuperTaskContent' (module 199471)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 692482
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-super-task-content") /*id: 199471*/.receiveSuperTaskContent,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK
  };
  require.r(exports);
  require.d(exports, {
    receiveMessageBoxMatcher: function () {
      return l;
    }
  });
}