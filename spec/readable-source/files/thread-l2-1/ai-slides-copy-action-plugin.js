// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(576249) to 'ai-slides-action'
// - Updated imported property 'i' to 'aiSlidesAction' (module 576249)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 416445
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let l = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("ai-slides-action") /*id: 576249*/.aiSlidesAction,
    matchPlugin: e => !!messageContentTypeAndStatusChecker.DPh(e) && !!messageContentTypeAndStatusChecker.t4S(e) && !messageContentTypeAndStatusChecker.Jgn(e)
  };
  require.r(exports);
  require.d(exports, {
    aiSlidesCopyReceiveMessageActionButtonPluginMatcher: function () {
      return l;
    }
  });
}