// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'extractMessageLogId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 429047
         */
module.exports = function (module, exports, require) {
  let l = e => {
    let {
      messageId: n,
      conversationId: l,
      replyId: i,
      ext: r
    } = e;
    return {
      messageId: n,
      conversationId: l,
      replyId: i,
      logId: (r == null ? undefined : r.log_id) ?? (r == null ? undefined : r.inner_log_id)
    };
  };
  require.d(exports, {
    extractMessageLogId: function () {
      return l;
    }
  });
}