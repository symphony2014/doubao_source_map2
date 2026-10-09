// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(394397) to 'chat-image-generate-block-symbol'
// - Updated imported property 'm' to 'imageGenerateBlock' (module 394397)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 999853
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("chat-image-generate-block-symbol") /*id: 394397*/.imageGenerateBlock,
    matchPlugin: e => !!messageContentTypeAndStatusChecker.dqg(e)
  };
  require.r(exports);
  require.d(exports, {
    CreationBlockMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}