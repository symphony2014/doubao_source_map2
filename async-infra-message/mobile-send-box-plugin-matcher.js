// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(204620) to 'mobile-send-box-ref'
// - Updated imported property 'o' to 'mobileSendBoxRef' (module 204620)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 881848
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("mobile-send-box-ref") /*id: 204620*/.mobileSendBoxRef,
    matchPlugin: e => messageContentTypeAndStatusChecker.e$o(e)
  };
  require.r(exports);
  require.d(exports, {
    mobileRefSendMessageBoxPluginMatcher: function () {
      return r;
    }
  });
}