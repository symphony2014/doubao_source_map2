// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'messageMapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 783712
         */
module.exports = function (module, exports, require) {
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let l = e => {
    let n = safeJsonUtils.safeParse(e.ext?.chat_ability, undefined);
    return {
      conversation_id: e.conversationId,
      message_id: e.messageId,
      chat_ability: n,
      reply_id: e.replyId
    };
  };
  require.d(exports, {
    messageMapper: function () {
      return l;
    }
  });
}