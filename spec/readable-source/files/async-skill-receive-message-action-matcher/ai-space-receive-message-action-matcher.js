// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'aiSpaceMessageNodeStore'
// - Resolved require(939801) to 'ai-space-message-node-store'
// - Resolved require(736142) to 'chat-receive-message-action'
// - Updated imported property 'O' to 'receiveMsgAction' (module 736142)
// - Updated imported property 'Y' to 'messageNodeInfoStore' (module 939801)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 122726
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var aiSpaceMessageNodeStore = require("ai-space-message-node-store") /*id: 939801*/;
  let a = {
    area: "main",
    actionType: "aispace",
    pluginIdentifier: require("chat-receive-message-action") /*id: 736142*/.receiveMsgAction,
    matchPlugin: e => {
      let {
        getMessageNodeInfos: n
      } = aiSpaceMessageNodeStore.messageNodeInfoStore.getState();
      let a = n(e.message_id ?? "");
      return chatMessageStatusCheck.isMessageFinished(e) && !!(a == null ? undefined : a.length);
    }
  };
  require.r(exports);
  require.d(exports, {
    aispaceReceiveMessageActionButtonPluginMatcher: function () {
      return a;
    }
  });
}