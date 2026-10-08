// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'formatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 906408
         */
module.exports = function (module, exports, require) {
  let l = e => ({
    message: e,
    messageId: e.message_id
  });
  require.d(exports, {
    formatMessage: function () {
      return l;
    }
  });
}