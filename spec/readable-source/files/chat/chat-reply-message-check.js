// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'isReplyMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 91305
         */
module.exports = function (module, exports, require) {
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var replyToIdGenerator = require("reply-to-id-generator") /*id: 762297*/;
  let o = e => (e == null ? undefined : e.local_message_id) === chatMessagingConstants.mockReplyMessageId || (e == null ? undefined : e.local_message_id) === replyToIdGenerator.generateReplyToId((e == null ? undefined : e.reply_id) || "");
  require.d(exports, {
    isReplyMessage: function () {
      return o;
    }
  });
}