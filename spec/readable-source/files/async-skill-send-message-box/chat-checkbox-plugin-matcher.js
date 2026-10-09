// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Resolved require(390164) to 'chat-msg-checkbox-symbol'
// - Updated imported property 'Q' to 'chatMsgCheckBoxSym' (module 390164)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 889239
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  let o = {
    pluginIdentifier: require("chat-msg-checkbox-symbol") /*id: 390164*/.chatMsgCheckBoxSym,
    matchPlugin(e) {
      let t = messageContentTypeAndStatusChecker.Ioq(e) || messageContentTypeAndStatusChecker.$sc(e);
      return chatMessageShareSelectStore.chatMessageShareSelectStore.getState().isSelectMode && !t;
    }
  };
  require.r(exports);
  require.d(exports, {
    checkBoxSendMessageBoxLeftPluginMatcher: function () {
      return o;
    }
  });
}