// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'mapMessageToStatusAndBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 328113
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let i = e => {
    return {
      conversationId: e.conversation_id,
      messageId: e.message_id,
      replyId: e.reply_id,
      ext: e.ext,
      status: {
        isFinished: chatMessageStatusCheck.isMessageFinished(e),
        isBroken: messageContentTypeAndStatusChecker.vlk(e),
        isFailed: messageContentTypeAndStatusChecker.FFC(e),
        isCached: messageContentTypeAndStatusChecker.hT$(e)
      },
      contentBlocks: e.content_blocks_v2 ?? []
    };
  };
  require.d(exports, {
    mapMessageToStatusAndBlocks: function () {
      return i;
    }
  });
}