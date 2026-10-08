// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C7' to 'resolveConversationInfo'
// - Renamed export 'Hd' to 'getMessageLinks'
// - Renamed export 'JZ' to 'calculateMessageIndex'
// - Renamed export 'Jp' to 'checkMessageIdMatch'
// - Renamed export 'K9' to 'getMessageFromLink'
// - Renamed export 'LF' to 'getLocalMessage'
// - Renamed export 'M_' to 'getReplyMessage'
// - Renamed export 'PJ' to 'getMessageById'
// - Renamed export 'PP' to 'findMessageById'
// - Renamed export 'PT' to 'findReplyMessage'
// - Renamed export 'Q$' to 'findMessageLinkById'
// - Renamed export 'Rm' to 'filterReplyLinks'
// - Renamed export 'Sm' to 'getMessageListStatus'
// - Renamed export 'Sv' to 'getAvailableMessage'
// - Renamed export 'W0' to 'findLastMessageLink'
// - Renamed export 'Wz' to 'checkMessageId'
// - Renamed export '_H' to 'getValidMessageCount'
// - Renamed export 'ap' to 'filterReplyMessages'
// - Renamed export 'bS' to 'getReplyMessageById'
// - Renamed export 'ce' to 'getLastMessageInfo'
// - Renamed export 'eH' to 'checkOnboardingMessages'
// - Renamed export 'y_' to 'processMessageList'
// - Renamed export 'zL' to 'getMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 393180
         */
module.exports = function (module, exports, require) {
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  let p = (e, t) => {
    let n = e.messageLinkMap[t] ? m(e, t, e.messageLinkMap[t]) : undefined;
    return {
      lastAvailableMessage: n ? g(e, t, n) : undefined,
      lastAvailableMessageLink: n
    };
  };
  let m = (e, t, n) => {
    for (let i = n.length - 1; i >= 0; i--) {
      let r = n[i];
      let s = n[i - 1];
      let l = g(e, t, r);
      let u = g(e, t, s);
      if (messageContentTypeAndStatusChecker.KQr(l) && messageContentTypeAndStatusChecker.KQr(u)) {
        if (messageContentTypeAndStatusChecker.v08(l)) {
          return s;
        } else {
          return r;
        }
      }
      if (chatMessageUtils_2.isVisibleStatus(l)) {
        return r;
      }
    }
  };
  let g = (e, t, n) => chatMessageUtils_2_1.getMessageGetter(chatMessageUtils_2_1.getMessageListStatus(e, t))(n);
  let _ = (e, t) => {
    let {
      message: n
    } = y(e, t, e => {
      let {
        getMessage: t
      } = e;
      let n = t();
      return !chatMessageStatusCheck.isMessageFinished(n) && !messageContentTypeAndStatusChecker.vlk(n);
    });
    return n;
  };
  let v = (e, t) => {
    let {
      message: n
    } = y(e, t, () => true);
    return n;
  };
  let y = (e, t, n) => {
    let i = chatMessageUtils_2_1.getMessageGetter(chatMessageUtils_2_1.getMessageListStatus(e, t));
    let r = e.messageLinkMap[t];
    let s = messageFilterUtils.processMessageList(r || [], e => n({
      messageLink: e,
      getMessage: () => i(e)
    }));
    return {
      messageLink: s,
      message: s ? i(s) : undefined
    };
  };
  let S = (e, t, n) => {
    let i = messageFilterUtils.getReplyMessages({
      messageLinks: e.messageLinkMap[t],
      replyId: n,
      getMessage: chatMessageUtils_2_1.getMessageGetter(chatMessageUtils_2_1.getMessageListStatus(e, t))
    });
    if (i) {
      return g(e, t, i);
    } else {
      return undefined;
    }
  };
  let b = (e, t, n) => {
    return e.localMessageMap[t]?.[n] || {};
  };
  let E = (e, t) => {
    let n = e.messageLinkMap[t];
    let i = chatMessageUtils_2_1.getMessageGetter({
      localMessageMap: e.localMessageMap[t],
      messageMap: e.messageMap[t]
    });
    let r = messageFilterUtils.processMessageList(n, e => {
      let t = i(e);
      return !!t && chatMessageUtils_2.isVisibleStatus(t) && !!t.reply_id && !messageContentTypeAndStatusChecker.Yns(t);
    });
    if (r) {
      return i(r);
    } else {
      return undefined;
    }
  };
  let w = (e, t, n) => {
    let {
      messageLinks: i,
      resolveConversationId: r
    } = O(e, t);
    let s = m(e, r, i);
    return n === (s == null ? undefined : s.messageId);
  };
  let T = (e, t) => e.messageLinkMap[t] || [];
  let k = (e, t) => e.messageListStatusMap[t] || {};
  let O = (e, t) => {
    let n = k(e, t);
    let i = T(e, t);
    let r = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
    if ((r == null ? undefined : r.conversation_type) === chatCoreConstants.BotTypes.Coco && i.length === 0) {
      return {
        status: k(e, chatMessagingConstants.assistantConvIdConst),
        messageLinks: T(e, chatMessagingConstants.assistantConvIdConst),
        resolveConversationId: chatMessagingConstants.assistantConvIdConst
      };
    } else {
      return {
        status: n,
        messageLinks: i,
        resolveConversationId: t
      };
    }
  };
  let M = (e, t, n) => {
    let {
      messageLink: i
    } = y(e, t, e => {
      let {
        getMessage: t
      } = e;
      let n = t();
      return messageContentTypeAndStatusChecker.Yns(n) && chatMessageUtils_2.isVisibleStatus(n);
    });
    return n === (i == null ? undefined : i.messageId);
  };
  let I = (e, t) => {
    if (!(t == null ? undefined : t.reply_id) || !(t == null ? undefined : t.message_action_bar) || messageContentTypeAndStatusChecker.Yns(t)) {
      return [];
    }
    let n = t.reply_id;
    let i = t.conversation_id || "";
    let r = e.messageLinkMap[i];
    let s = chatMessageUtils_2_1.getMessageGetter({
      messageMap: e.messageMap[i],
      localMessageMap: e.localMessageMap[i]
    });
    return messageFilterUtils.filterReplyLinks({
      messageLinks: r,
      replyId: n,
      getMessage: s
    }).map(e => s(e)).filter(e => (e == null ? undefined : e.stream_id) === t.stream_id);
  };
  let N = (e, t, n) => {
    let r = C(e, t);
    if (r) {
      return Math.max(r, ((n == null ? undefined : n.badge_count) ?? (n == null ? undefined : n.message_index)) || 0);
    } else {
      return (n == null ? undefined : n.badge_count) || 0;
    }
  };
  let C = (e, t) => {
    let n = e.messageLinkMap[t];
    let i = messageFilterUtils.filterValidMessages(n);
    if (!i) {
      return 0;
    }
    let r = g(e, t, i);
    if (r) {
      return Number(r.index || 0);
    } else {
      return 0;
    }
  };
  let A = (e, t, n) => {
    let {
      message: i
    } = y(e, t, e => {
      let {
        messageLink: t
      } = e;
      return t.messageId === n;
    });
    return i;
  };
  let x = (e, t, n) => {
    var i;
    let r = (i = e.messageLinkMap[t]) === null || i === undefined ? undefined : i.find(i => {
      return (i.isLocalMessage ? e.localMessageMap : e.messageMap)[t][i.messageId]?.reply_id === n;
    });
    if (r) {
      return g(e, t, r);
    }
  };
  let L = (e, t, n) => {
    var i;
    if ((i = e.messageLinkMap[t]) === null || i === undefined) {
      return undefined;
    } else {
      return i.find(e => e.messageId === n);
    }
  };
  let P = (e, t, n) => {
    let i = L(e, t, n);
    if (i) {
      return g(e, t, i);
    }
  };
  let D = (e, t) => {
    if (!pathArrayValidation.validatePathArray(e.messageMap, t)) {
      return true;
    }
    {
      let n = e.messageMap[t];
      return !!objectValuesHelper.getObjectValues(n).every(e => messageContentTypeAndStatusChecker.isOnboardingMessage(e));
    }
  };
  let R = (e, t) => {
    let n = t.reply_id;
    if (!t.is_regen || !n || messageContentTypeAndStatusChecker.Yns(t)) {
      return [];
    }
    let i = t.conversation_id || "";
    let r = e.messageLinkMap[i];
    let s = chatMessageUtils_2_1.getMessageGetter({
      messageMap: e.messageMap[i],
      localMessageMap: e.localMessageMap[i]
    });
    return messageFilterUtils.filterReplyLinks({
      messageLinks: r,
      replyId: n,
      getMessage: s
    }).map(e => s(e)).filter(e => (e == null ? undefined : e.stream_id) === t.stream_id || !(e == null ? undefined : e.stream_id) && !t.stream_id);
  };
  require.d(exports, {
    resolveConversationInfo: function () {
      return O;
    },
    getMessageLinks: function () {
      return T;
    },
    calculateMessageIndex: function () {
      return N;
    },
    checkMessageIdMatch: function () {
      return w;
    },
    getMessageFromLink: function () {
      return g;
    },
    getLocalMessage: function () {
      return b;
    },
    getReplyMessage: function () {
      return E;
    },
    getMessageById: function () {
      return P;
    },
    findMessageById: function () {
      return A;
    },
    findReplyMessage: function () {
      return x;
    },
    findMessageLinkById: function () {
      return L;
    },
    filterReplyLinks: function () {
      return I;
    },
    getMessageListStatus: function () {
      return k;
    },
    getAvailableMessage: function () {
      return _;
    },
    findLastMessageLink: function () {
      return m;
    },
    checkMessageId: function () {
      return M;
    },
    getValidMessageCount: function () {
      return C;
    },
    filterReplyMessages: function () {
      return R;
    },
    getReplyMessageById: function () {
      return S;
    },
    getLastMessageInfo: function () {
      return p;
    },
    checkOnboardingMessages: function () {
      return D;
    },
    processMessageList: function () {
      return y;
    },
    getMessage: function () {
      return v;
    }
  });
}