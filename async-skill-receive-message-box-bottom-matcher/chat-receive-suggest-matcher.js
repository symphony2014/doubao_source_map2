// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(330797) to 'chat-suggest-plugin-symbol'
// - Updated imported property 'n' to 'chatSuggestPluginId' (module 330797)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom-matcher.8807d104.js
         * chunkId: 46777
         * moduleId: 409122
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let i = {
    pluginIdentifier: require("chat-suggest-plugin-symbol") /*id: 330797*/.chatSuggestPluginId,
    matchPlugin: e => messageContentTypeAndStatusChecker.kwD(e)
  };
  require.r(exports);
  require.d(exports, {
    customClickInChatReceiveMessageSuggestPluginMatcher: function () {
      return i;
    }
  });
}