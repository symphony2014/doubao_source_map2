// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(780218) to 'ugc-bot-card-symbol'
// - Updated imported property 'a' to 'ugcBotCardSymbol' (module 780218)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 285217
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("ugc-bot-card-symbol") /*id: 780218*/.ugcBotCardSymbol,
    matchPlugin: e => messageContentTypeAndStatusChecker.Z37(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveUGCCozeCardMessageBoxPluginMatcher: function () {
      return r;
    }
  });
}