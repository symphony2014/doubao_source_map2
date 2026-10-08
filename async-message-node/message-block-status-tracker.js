// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'trackMessageBlockStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 475669
         */
module.exports = function (module, exports, require) {
  var skillContentBlockTracker = require("skill-content-block-tracker") /*id: 837089*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  let o = (e, t) => {
    var n;
    var c;
    var d;
    let u = ((n = e.contentBlocks) === null || n === undefined ? undefined : n.findIndex(e => e.block_id === t.block_id)) === (e.contentBlocks?.length || 0) - 1;
    let f = (c = !!u && e.status?.isBroken) !== null && c !== undefined && c;
    let p = (d = e.status?.isFinished) !== null && d !== undefined && d;
    let {
      is_finish: v,
      block_id: _
    } = t;
    let h = messageContextDefinition.useMessage();
    let m = skillContentBlockTracker.createMessageTracker({
      message: h
    });
    let g = messageContentTypeAndStatusChecker.D8H(h);
    return {
      isBlockFinished: v,
      isLatestBlock: u,
      isBroken: f,
      blockId: _,
      conversationId: e.conversationId,
      inMessageFinish: p,
      isLegacyWriteArtifactMessage: g,
      trackEvent: m
    };
  };
  require.d(exports, {
    trackMessageBlockStatus: function () {
      return o;
    }
  });
}