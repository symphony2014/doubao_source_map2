// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'mergeAndFilterMessages'
// - Renamed export 'w' to 'applyMessageDefaults'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 439155
         */
module.exports = function (module, exports, require) {
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var skillMessageListUtil = require("skill-message-list-util") /*id: 97107*/;
  var safePropertyCollectionTransform = require("safe-property-collection-transform") /*id: 539057*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var messageSortComparator = require("message-sort-comparator") /*id: 730204*/;
  let c = (e, t, n) => e.filter(r => {
    if (r.isLocalMessage) {
      let o = n(r);
      if (~arrayFindLastIndexUtil.findLastIndex(e, e => {
        if (e === r) {
          return false;
        }
        let n = t(e);
        let i = !e.isLocalMessage;
        return !!i && !!n && ((n == null ? undefined : n.message_id) === (o == null ? undefined : o.message_id) || (n == null ? undefined : n.local_message_id) === (o == null ? undefined : o.local_message_id)) || !!i && !!(o == null ? undefined : o.reply_id) && !!checkLocalReplyMessage.isLocalReplyMessage(o) && (n == null ? undefined : n.reply_id) === o.reply_id && !!chatMessageUtils_2.isVisibleStatus(n);
      })) {
        return false;
      }
    }
    return true;
  });
  let d = (e, t, n, i) => {
    let o = skillMessageListUtil.skillMessageProcessor([...e, ...t], e => e.messageId);
    o.forEach(e => {
      let n = t.find(t => t.messageId === e.messageId);
      if (n == null ? undefined : n.messageKey) {
        e.messageKey = n.messageKey;
      }
    });
    let a = c(o, n, i);
    messageSortComparator.sortMessageList(a, n);
    return a;
  };
  let h = (e, t) => {
    let n = safePropertyCollectionTransform.safePropTransform(t, "messageId");
    return e.map(e => objectDefaultsUtil.defaults(e, n[e.messageId]));
  };
  require.d(exports, {
    mergeAndFilterMessages: function () {
      return d;
    },
    applyMessageDefaults: function () {
      return h;
    }
  });
}