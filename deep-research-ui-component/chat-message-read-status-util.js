// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N_' to 'readStatusWithRisk'
// - Renamed export 'wD' to 'getReadStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 354997
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let a = e => {
    let t = e => isNumberUtil.isNumber(e) ? Math.max(0, Math.min(100, e)) : e;
    try {
      var o;
      let i = (e == null ? undefined : e.content_obj?.read_status) || JSON.parse((e == null ? undefined : e.ext?.read_status) ?? "");
      return {
        readRatio: t(i == null ? undefined : i.read_ratio),
        files: (o = (i == null ? undefined : i.Files) || (i == null ? undefined : i.files)) === null || o === undefined ? undefined : o.map(e => ({
          key: e == null ? undefined : e.uri,
          parseSuccess: e == null ? undefined : e.parse_success,
          charCount: e == null ? undefined : e.char_count,
          readRatio: t(e == null ? undefined : e.read_ratio)
        }))
      };
    } catch {
      return;
    }
  };
  let s = e => {
    let {
      message: t
    } = e;
    return a(t);
  };
  let c = e => {
    let {
      messageId: t,
      conversationId: n
    } = e;
    let i = conversationMessageUtils_1.getReplyMessageById(chatMessageStoreFactory.createMessageStore.getState(), n, t);
    let s = messageContentTypeAndStatusChecker.VQ4(i);
    return {
      ...a(i),
      isHitRisk: s
    };
  };
  require.d(exports, {
    readStatusWithRisk: function () {
      return c;
    },
    getReadStatus: function () {
      return s;
    }
  });
}