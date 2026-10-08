// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'checkMessageStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 378407
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let i = (e, t) => {
    var n;
    var s;
    var c;
    var d;
    var v;
    let f = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1;
    let p = (s = e.status?.isFinished || t.is_finish) === null || s === undefined || s;
    let _ = (c = !!f && e.status?.isBroken) !== null && c !== undefined && c;
    let m = (d = e.status?.isFailed) !== null && d !== undefined && d;
    let h = (v = e.status?.isCached) !== null && v !== undefined && v;
    let g = messageContentTypeAndStatusChecker.JAS(t);
    return {
      messageId: e.messageId,
      isFinished: p,
      isBroken: _,
      isFailed: m,
      isCached: h,
      isNotReadFinish: g
    };
  };
  require.d(exports, {
    checkMessageStatus: function () {
      return i;
    }
  });
}