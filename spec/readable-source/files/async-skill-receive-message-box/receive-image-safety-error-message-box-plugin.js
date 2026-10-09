// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(101978) to 'thread-image-safety-error-symbol'
// - Updated imported property 'C' to 'imageSafetyError' (module 101978)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 593457
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("thread-image-safety-error-symbol") /*id: 101978*/.imageSafetyError,
    matchPlugin: e => messageContentTypeAndStatusChecker.ho6(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveImageSafeErrorMessageBoxPluginMatcher: function () {
      return r;
    }
  });
}