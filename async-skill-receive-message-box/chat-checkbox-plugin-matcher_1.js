// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Resolved require(836262) to 'share-message-checkbox-symbol'
// - Updated imported property 'o' to 'ShareMessageCheckBox' (module 836262)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 43016
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  let o = {
    pluginIdentifier: require("share-message-checkbox-symbol") /*id: 836262*/.ShareMessageCheckBox,
    matchPlugin(e) {
      let t = messageContentTypeAndStatusChecker.Ioq(e) || messageContentTypeAndStatusChecker.$sc(e);
      return chatMessageShareSelectStore.chatMessageShareSelectStore.getState().isSelectMode && !t;
    }
  };
  require.r(exports);
  require.d(exports, {
    checkBoxReceiveMessageBoxLeftPluginMatcher: function () {
      return o;
    }
  });
}