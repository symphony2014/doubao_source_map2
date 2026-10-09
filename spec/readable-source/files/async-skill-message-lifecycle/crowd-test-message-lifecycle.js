// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'threadCardEnums'
// - Resolved require(462913) to 'thread-card-enums'
// - Renamed variable 'a' to 'blockMapPersistStore'
// - Resolved require(334702) to 'block-map-persist-store'
// - Renamed variable 'o' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'l' to 'chatMessageServiceModule'
// - Resolved require(374681) to 'chat-message-service-module'
// - Renamed variable 's' to 'chatMessageLinkRetriever'
// - Resolved require(186068) to 'chat-message-link-retriever'
// - Renamed variable 'c' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'u' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'v' to 'crowdTestMessageLifecycle_1'
// - Resolved require(763929) to 'crowd-test-message-lifecycle_1'
// - Updated imported property 'l8' to 'blockMapStore' (module 334702)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'E7' to 'roleType' (module 292449)
// - Updated imported property 'nw' to 'feedbackType' (module 292449)
// - Updated imported property 'pk' to 'getChatMessageService' (module 374681)
// - Updated imported property 'E' to 'getRecentMessages' (module 186068)
// - Updated imported property 'Wc' to 'cardStatus' (module 462913)
// - Updated imported property 'L' to 'messageLifecycle' (module 763929)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 989604
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var threadCardEnums = require("thread-card-enums") /*id: 462913*/;
  var blockMapPersistStore = require("block-map-persist-store") /*id: 334702*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  var chatMessageLinkRetriever = require("chat-message-link-retriever") /*id: 186068*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  function d(e) {
    let i = blockMapPersistStore.blockMapStore.getState().blockMap?.[e];
    if (!i) {
      return;
    }
    let {
      displayStreamIndex: r,
      feedbackStreamIndex: o,
      messages: l
    } = i;
    let s = [];
    if (l != null) {
      l.forEach(e => {
        let r = Number(e == null ? undefined : e.stream_id) - 1;
        if (e.ext?.sub_msg_index) {
          r = Number(e.ext?.sub_msg_index);
        }
        s[r] = s[r] ?? [];
        s[r].push(e);
      });
    }
    return {
      ...i,
      preferStreamIndex: o ?? r ?? 0,
      messageGroups: s
    };
  }
  async function p(e, t = chatMessageTypes.PushMessageStatus.Available, n) {
    let i = d(e);
    if (!i) {
      return;
    }
    let {
      conversationId: r,
      preferStreamIndex: a,
      messageGroups: l
    } = i;
    let s = n ?? a;
    try {
      await chatMessageStoreUpdater.updateChatMessages({
        conversationId: r,
        immerUpdate: e => {
          let {
            draftMessageMap: r,
            draftLocalMessageMap: a
          } = e;
          let o = l[s][0];
          if (!o) {
            return;
          }
          let u = o.ext?.refer_msg_id;
          if (u) {
            let e = r[u] ?? a[u];
            if (e == null ? undefined : e.ext) {
              e.ext.crowd_test_message_group_selected = s.toString();
              e.status = t;
            }
          } else {
            l.forEach((e, n) => {
              e.forEach(e => {
                let u = a[(e == null ? undefined : e.message_id) ?? ""] ?? r[(e == null ? undefined : e.message_id) ?? ""];
                if (n === s) {
                  u.status = t;
                } else {
                  u.status = chatMessageTypes.PushMessageStatus.InVisible;
                }
              });
            });
          }
        }
      });
    } catch {}
  }
  async function f(e) {
    var t;
    let r;
    let a = d(e);
    if (!a) {
      return;
    }
    let {
      conversationId: o,
      feedbackType: s,
      preferStreamIndex: c,
      messageGroups: p
    } = a;
    let f = (t = p[c ?? 0]) === null || t === undefined ? undefined : t.find(e => e == null ? undefined : e.message_id);
    r = messageContentTypeAndStatusChecker.xdd(f) ? {
      conversation_id: o,
      message_id: f == null ? undefined : f.ext?.refer_msg_id,
      reply_id: e,
      feedbackSource: messagingConstants.roleType.System,
      extra: JSON.stringify({
        crowd_test_message_group_selected: c
      }),
      feedbackDetail: {
        feedback_type: s ?? messagingConstants.feedbackType.Better,
        feedback_detail_type: 0
      }
    } : {
      conversation_id: o,
      message_id: f == null ? undefined : f.message_id,
      reply_id: e,
      feedbackSource: messagingConstants.roleType.System,
      feedbackDetail: {
        feedback_type: s ?? messagingConstants.feedbackType.Better,
        feedback_detail_types: [100]
      }
    };
    try {
      await (await chatMessageServiceModule.getChatMessageService()).feedback(r);
    } catch (e) {}
  }
  async function m(e) {
    var t;
    var r;
    var a;
    var o;
    var l;
    var u;
    var d;
    let m = function (e) {
      let t = chatMessageLinkRetriever.getRecentMessages(e, 10);
      for (let e = t.length - 1; e > 0; e--) {
        let n = t[e];
        if (messageContentTypeAndStatusChecker.WK_(n)) {
          return n;
        }
      }
    }(e);
    if ((m == null ? undefined : (t = m.sub_message_group) === null || t === undefined ? undefined : t.messages.every(e => messageContentTypeAndStatusChecker.z_e(e))) && (m == null ? undefined : (a = m.sub_message_group) === null || a === undefined ? undefined : (r = a.messages) === null || r === undefined ? undefined : r[0]?.reply_id)) {
      await p(m == null ? undefined : (l = m.sub_message_group) === null || l === undefined ? undefined : (o = l.messages) === null || o === undefined ? undefined : o[0].reply_id, chatMessageTypes.PushMessageStatus.Available);
      await f(m == null ? undefined : (d = m.sub_message_group) === null || d === undefined ? undefined : (u = d.messages) === null || u === undefined ? undefined : u[0].reply_id);
    }
  }
  var crowdTestMessageLifecycle_1 = require("crowd-test-message-lifecycle_1") /*id: 763929*/;
  class g {
    async beforeMessageSending(e, t) {
      await m(t.conversation_id ?? "");
      return t;
    }
    async onBatchMessageReceivingEnd(e, t) {
      if (t.reply_id && (messageContentTypeAndStatusChecker.Q5B(t) || messageContentTypeAndStatusChecker.xdd(t)) && t.final_status?.message === "Broken") {
        await p(t == null ? undefined : t.reply_id, threadCardEnums.cardStatus.Broken, 0);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = crowdTestMessageLifecycle_1.messageLifecycle;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CrowdTestMessageLifeCyclePlugin: function () {
      return g;
    }
  });
}