// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$n' to 'filterReplyLinks'
// - Renamed export 'Pw' to 'filterValidMessages'
// - Renamed export 'RA' to 'getReplyMessages'
// - Renamed export 'Y1' to 'filterMessageContent'
// - Renamed export 'vn' to 'processMessageList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 883835
         */
module.exports = function (module, exports, require) {
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  let o = (e, t) => moduleReExportWrapper.wrappedModule(e || [], e => t(e));
  let l = function (e = [], t) {
    return o(e, e => {
      var n;
      return !e.isLocalMessage && !!e.messageId && ((n = t == null ? undefined : t(e)) === null || n === undefined || n);
    });
  };
  let u = e => {
    let {
      messageLinks: t = [],
      replyId: n,
      getMessage: i
    } = e;
    return genericFilterUtil.genericFilter(t, e => {
      return i(e)?.reply_id === n;
    });
  };
  let c = e => {
    let {
      messageLinks: t = [],
      replyId: n,
      getMessage: i
    } = e;
    return o(t, e => {
      return i(e)?.reply_id === n;
    });
  };
  let d = e => {
    let {
      messageLinks: t = [],
      getMessage: n
    } = e;
    return moduleReExportWrapper.wrappedModule(t, e => {
      let t = n(e);
      return messageContentTypeAndStatusChecker.Yns(t) && chatMessageUtils_2.isVisibleStatus(t);
    });
  };
  require.d(exports, {
    filterReplyLinks: function () {
      return u;
    },
    filterValidMessages: function () {
      return l;
    },
    getReplyMessages: function () {
      return c;
    },
    filterMessageContent: function () {
      return d;
    },
    processMessageList: function () {
      return o;
    }
  });
}