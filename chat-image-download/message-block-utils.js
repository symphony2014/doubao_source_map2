// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$5' to 'filterMessages'
// - Renamed export 'Di' to 'isBlockType'
// - Renamed export 'Q8' to 'isLastLocalMessage'
// - Renamed export 'mJ' to 'isDividerType'
// - Renamed export 'n2' to 'useMessageBlocks'
// - Renamed export 'wt' to 'getMessageIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 829688
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let u = e => (e == null ? undefined : e.type) === "divider";
  let p = e => e.type === "block";
  let f = (e, t, n) => t.filter(t => {
    let r = n(t);
    let {
      conversation: o
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(e);
    let a = chatConversationCheckers.isCocoConversation(o) || chatConversationCheckers.isCocoSubConv(o);
    return r && messageContentTypeAndStatusChecker.z_e(r, a);
  });
  let h = e => {
    if (!e) {
      return false;
    }
    if (p(e)) {
      return e.data.at(-1)?.isLocalMessage || false;
    }
    return false;
  };
  let m = e => {
    let t = chatMessageStoreFactory.createMessageStore.getState();
    if (!e) {
      return -1;
    }
    if (p(e)) {
      let r = chatMessageUtils_2_1.getMessageGetter({
        localMessageMap: t.localMessageMap[e.conversationId],
        messageMap: t.messageMap[e.conversationId]
      })(e.data[0]);
      return Number((r == null ? undefined : r.index) ?? -1);
    }
    return -1;
  };
  let v = (e, t) => {
    let r = chatMessageUtils_2_1.getMessageGetter({
      localMessageMap: t.localMessageMap[e],
      messageMap: t.messageMap[e]
    });
    let a = t.messageLinkMap[e] ?? [];
    let l = t => {
      let o = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e]?.last_section_id ?? "";
      if (t) {
        if (t == null) {
          return undefined;
        } else {
          return t.section_id;
        }
      } else {
        return o;
      }
    };
    let c = [];
    let p = [];
    let h = f(e, a, r);
    function m(e) {
      c.push(e);
      p = [];
    }
    for (let t = 0; t < h.length; t++) {
      let n = h[t];
      if (!n) {
        continue;
      }
      let a = n ? r(n) : undefined;
      let s = h[t + 1];
      let d = s ? r(s) : undefined;
      let f = l(a);
      let v = l(d);
      let g = messageContentTypeAndStatusChecker.awc(a);
      let b = messageContentTypeAndStatusChecker.awc(d);
      let y = !!f && !!v && f !== v && !messageContentTypeAndStatusChecker.Kzj(d);
      if (g && b) {
        p.push(n);
        continue;
      }
      if (g && !b) {
        p.push(n);
        m({
          type: "divider",
          data: p,
          dividerType: "encrypt",
          id: `divider_${n.messageKey || n.messageId}`
        });
      } else {
        p.push(n);
        m({
          type: "block",
          data: p,
          isBatch: !!(a == null ? undefined : a.sub_message_group),
          id: `block_${n.messageKey || n.messageId}`,
          conversationId: e
        });
      }
      let _ = lastElementHelper.getLastElement(c);
      if (y && !u(_)) {
        c.push({
          type: "divider",
          id: `divider_${f}`,
          dividerType: "normal",
          data: null
        });
      }
    }
    return c;
  };
  let g = e => chatMessageStoreFactory.createMessageStore(t => v(e, t), deepEqualityUtil.deepEqual);
  require.d(exports, {
    filterMessages: function () {
      return f;
    },
    isBlockType: function () {
      return p;
    },
    isLastLocalMessage: function () {
      return h;
    },
    isDividerType: function () {
      return u;
    },
    useMessageBlocks: function () {
      return g;
    },
    getMessageIndex: function () {
      return m;
    }
  });
}