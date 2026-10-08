// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'isMessageFinished'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 884389
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var messageSendingCheck = require("message-sending-check") /*id: 491797*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatAsyncTaskCheck = require("chat-async-task-check") /*id: 326723*/;
  let u = e => {
    return !checkLocalReplyMessage.isLocalReplyMessage(e) && !chatLoadingMessageCheck.isLoadingMessage(e) && (!localResourceCheck.isLocal(e) || !messageSendingCheck.isSending(e)) && !!(e == null ? undefined : e.is_finish) && e.status !== chatMessageTypes.PushMessageStatus.Streaming && (!chatAsyncTaskCheck.hasAsyncTask(e) || e.async_task?.status !== 1);
  };
  require.d(exports, {
    isMessageFinished: function () {
      return u;
    }
  });
}