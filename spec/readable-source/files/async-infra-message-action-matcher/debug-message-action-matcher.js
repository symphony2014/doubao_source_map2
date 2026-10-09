// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'flowDebugStatus'
// - Resolved require(553601) to 'flow-debug-status'
// - Resolved require(903233) to 'receive-message-action-debug'
// - Updated imported property 'F' to 'messageActionDebug' (module 903233)
// - Updated imported property 'T' to 'isDebugEnabled' (module 553601)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 861565
         */
module.exports = function (module, exports, require) {
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  let r = {
    area: "fold",
    actionType: "debug",
    pluginIdentifier: require("receive-message-action-debug") /*id: 903233*/.messageActionDebug,
    matchPlugin: e => flowDebugStatus.isDebugEnabled()
  };
  require.r(exports);
  require.d(exports, {
    defaultDebugReceiveMessageActionButtonPluginMatcher: function () {
      return r;
    }
  });
}