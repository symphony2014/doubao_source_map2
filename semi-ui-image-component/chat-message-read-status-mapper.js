// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'mapFileReadStatuses'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 414453
         */
module.exports = function (module, exports, require) {
  var chatMessageReadStatusUtil = require("chat-message-read-status-util") /*id: 354997*/;
  let r = function (e, t) {
    let {
      messageId: n,
      conversationId: r
    } = e;
    let o = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let l = chatMessageReadStatusUtil.readStatusWithRisk({
      messageId: n,
      conversationId: r
    });
    return t.map(e => {
      var t;
      let n = l == null ? undefined : (t = l.files) === null || t === undefined ? undefined : t.find(t => t.key === e);
      return {
        readRatio: n == null ? undefined : n.readRatio,
        parseSuccess: n == null ? undefined : n.parseSuccess,
        charCount: n == null ? undefined : n.charCount,
        showRatioDetailTooltip: o,
        isHitRisk: l == null ? undefined : l.isHitRisk
      };
    });
  };
  require.d(exports, {
    mapFileReadStatuses: function () {
      return r;
    }
  });
}