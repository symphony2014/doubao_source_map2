// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'isSkillSendMessageAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action-matcher.1e7a3334.js
         * chunkId: 96243
         * moduleId: 49233
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  let o = e => {
    var t;
    return !messageContentTypeAndStatusChecker.kAo(e) && (e != null && (t = e.content_blocks_v2) !== null && t !== undefined && !!t.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT) || !!e && (messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.A8i(e) || messageContentTypeAndStatusChecker.xop(e) || checkNestedContentType.isNestedContentType(e) || messageContentTypeAndStatusChecker.Sqr(e)) && !messageContentTypeAndStatusChecker.ATT(e) && !messageContentTypeAndStatusChecker.EkH(e) && !messageContentTypeAndStatusChecker.RvM(e));
  };
  require.d(exports, {
    isSkillSendMessageAction: function () {
      return o;
    }
  });
}