// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(369363) to 'send-image-content-symbol'
// - Updated imported property 'K' to 'sendImageContent' (module 369363)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 949855
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("send-image-content-symbol") /*id: 369363*/.sendImageContent,
    matchPlugin: e => messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.O72(e)
  };
  require.r(exports);
  require.d(exports, {
    sendImageContentMatcher: function () {
      return r;
    }
  });
}