// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'aiSpaceMessageNodeStore'
// - Resolved require(939801) to 'ai-space-message-node-store'
// - Resolved require(221606) to 'send-message-action-symbol'
// - Updated imported property 'k' to 'sendMessageAction' (module 221606)
// - Updated imported property 'Y' to 'messageNodeInfoStore' (module 939801)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action-matcher.1e7a3334.js
         * chunkId: 96243
         * moduleId: 86140
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var aiSpaceMessageNodeStore = require("ai-space-message-node-store") /*id: 939801*/;
  let a = {
    area: "main",
    actionType: "aispace",
    pluginIdentifier: require("send-message-action-symbol") /*id: 221606*/.sendMessageAction,
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
    aispaceSendMessageActionButtonPluginMatcher: function () {
      return a;
    }
  });
}