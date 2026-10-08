// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'isLocalReplyMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 819927
         */
module.exports = function (module, exports, require) {
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var chatReplyMessageCheck = require("chat-reply-message-check") /*id: 91305*/;
  let o = e => localResourceCheck.isLocal(e) && chatReplyMessageCheck.isReplyMessage(e);
  require.d(exports, {
    isLocalReplyMessage: function () {
      return o;
    }
  });
}