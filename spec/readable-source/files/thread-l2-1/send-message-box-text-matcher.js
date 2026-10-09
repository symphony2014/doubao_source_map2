// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(377754) to 'send-message-box-text-symbol'
// - Updated imported property 'T' to 'sendMessageBoxText' (module 377754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 40731
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    pluginIdentifier: require("send-message-box-text-symbol") /*id: 377754*/.sendMessageBoxText,
    matchPlugin: e => messageContentTypeAndStatusChecker.G7Q(e)
  };
  require.r(exports);
  require.d(exports, {
    textSendMessageBoxPluginMatcher: function () {
      return l;
    }
  });
}