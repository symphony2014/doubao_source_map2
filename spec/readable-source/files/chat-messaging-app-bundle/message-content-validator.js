// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IK' to 'getMessageCount'
// - Renamed export 'Mj' to 'isLegacyBrowser'
// - Renamed export 'Oe' to 'isValidMessageContent'
// - Renamed export 'lm' to 'isDividerOrValidMessage'
// - Renamed export 'qJ' to 'extractMessageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 841656
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let a = (e, t) => {
    var r;
    let i = (r = window) === null || r === undefined ? undefined : r.navigator?.mimeTypes;
    for (let n in i) {
      if ((i == null ? undefined : i[n]?.[e]) === t) {
        return i[n];
      }
    }
    return null;
  };
  let u = () => !!a("type", "application/cenroll.cenroll.version.1") || !!a("type", "application/hwepass2001.installepass2001");
  let c = () => typeof navigator != "undefined" && navigator.userAgent === "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36" && u();
  let d = e => {
    if (e.type !== "divider") {
      if (e.type === "block") {
        return lastElementHelper.getLastElement(e.data);
      } else {
        return e.data;
      }
    }
  };
  let f = e => {
    if (e.type === "divider") {
      return false;
    }
    let t = d(e);
    if (!t) {
      return false;
    }
    let {
      conversationId: n
    } = e;
    let r = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), n, t);
    return !!r && !messageContentTypeAndStatusChecker.fdv(r) && !chatMessageStatusCheck.isMessageFinished(r) && !messageContentTypeAndStatusChecker.FFC(r);
  };
  let v = () => 0;
  let p = e => {
    if (e.type === "divider") {
      return true;
    }
    let {
      conversationId: t
    } = e;
    let n = d(e);
    if (!n) {
      return true;
    }
    let r = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, n);
    return !messageContentTypeAndStatusChecker.fdv(r) && !messageContentTypeAndStatusChecker.N0s(r);
  };
  require.d(exports, {
    getMessageCount: function () {
      return v;
    },
    isLegacyBrowser: function () {
      return c;
    },
    isValidMessageContent: function () {
      return f;
    },
    isDividerOrValidMessage: function () {
      return p;
    },
    extractMessageData: function () {
      return d;
    }
  });
}