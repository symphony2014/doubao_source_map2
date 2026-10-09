// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(556673) to 'music-generate-symbol_1'
// - Updated imported property 'n' to 'musicGenerateId' (module 556673)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 347563
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("music-generate-symbol_1") /*id: 556673*/.musicGenerateId,
    matchPlugin: e => messageContentTypeAndStatusChecker.vU5(e) || messageContentTypeAndStatusChecker.C_i(e)
  };
  require.r(exports);
  require.d(exports, {
    MusicGenerateMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}