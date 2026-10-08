// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatMessageActionSymbol_1'
// - Resolved require(662833) to 'chat-message-action-symbol_1'
// - Updated imported property 'w' to 'receiveMessageAction' (module 662833)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 54420
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {};
  var chatMessageActionSymbol_1 = require("chat-message-action-symbol_1") /*id: 662833*/;
  let o = e => messageContentTypeAndStatusChecker.dqg(e) && !messageContentTypeAndStatusChecker.Jgn(e) && messageContentTypeAndStatusChecker.t4S(e) && !r.isHideAction;
  let l = {
    area: "fold",
    actionType: "creation-download",
    pluginIdentifier: chatMessageActionSymbol_1.receiveMessageAction,
    matchPlugin: e => o(e)
  };
  require.r(exports);
  require.d(exports, {
    creationDownloadReceiveMessageActionButtonPluginMatcher: function () {
      return l;
    }
  });
}