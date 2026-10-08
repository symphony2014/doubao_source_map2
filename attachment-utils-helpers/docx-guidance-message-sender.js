// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'sendDocxMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 859951
         */
module.exports = function (module, exports, require) {
  var chatMessageSender_2 = require("chat-message-sender_2") /*id: 656716*/;
  var docxGuidanceEventEmitter = require("docx-guidance-event-emitter") /*id: 801024*/;
  let r = function (e, t = {}) {
    return new Promise((a, r) => {
      let l = e[0]?.localConversationId;
      let c = e[0]?.conversationId;
      chatMessageSender_2.sendMessage(e, t).then(() => docxGuidanceEventEmitter.guidanceEmitter.on("on_send_message_end", e => {
        if (c === e.conversation_id || l === e.local_conversation_id) {
          a(e);
        }
      })).catch(e => {
        r(e);
      });
    });
  };
  require.d(exports, {
    sendDocxMessage: function () {
      return r;
    }
  });
}