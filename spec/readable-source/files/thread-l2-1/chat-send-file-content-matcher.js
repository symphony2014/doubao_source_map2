// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(79109) to 'chat-send-file-symbol'
// - Updated imported property 's' to 'sendFileContent' (module 79109)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 583202
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("chat-send-file-symbol") /*id: 79109*/.sendFileContent,
    matchPlugin: e => !!messageContentTypeAndStatusChecker.A8i(e)
  };
  require.r(exports);
  require.d(exports, {
    sendFileContentMatcher: function () {
      return r;
    }
  });
}