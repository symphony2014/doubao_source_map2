// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IX' to 'updateConversationMap'
// - Renamed export 'Mv' to 'removeConversationLink'
// - Renamed export '_9' to 'getBotConversationLinks'
// - Renamed export 'fp' to 'setMainConversationLink'
// - Renamed export 'ij' to 'setBotConversationLinks'
// - Renamed export 'oz' to 'insertConversationLink'
// - Renamed export 'wV' to 'appendConversationLinks'
// - Renamed export 'wr' to 'normalizeThreadLinks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 653485
         */
module.exports = function (module, exports, require) {
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var chatConversationConstants = require("chat-conversation-constants") /*id: 730433*/;
  var chatConversationLinkUtils = require("chat-conversation-link-utils") /*id: 709080*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  let h = () => {
    let {
      conversationLinks: e,
      botConversationIndex: t
    } = chatFeedStoreFactory.useFeedStore.getState();
    return e.slice(t);
  };
  let f = e => {
    let {
      conversationLinks: t,
      botConversationIndex: n
    } = chatFeedStoreFactory.useFeedStore.getState();
    chatFeedStoreFactory.useFeedStore.setState({
      conversationLinks: t.slice(0, n).concat(e)
    });
  };
  let m = () => {
    let {
      conversationLinks: e,
      botConversationIndex: t
    } = chatFeedStoreFactory.useFeedStore.getState();
    return e.slice(0, t);
  };
  let v = e => {
    let {
      conversationLinks: t,
      botConversationIndex: n
    } = chatFeedStoreFactory.useFeedStore.getState();
    let r = e.length;
    chatFeedStoreFactory.useFeedStore.setState({
      conversationLinks: e.concat(t.slice(n)),
      botConversationIndex: r
    });
  };
  let p = e => {
    chatFeedStoreFactory.useFeedStore.setState({
      mainConversationLink: e
    });
  };
  let g = async function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    if (t) {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      e.forEach(e => {
        if (e.bot_id && e.bot_disable_tag) {
          let i = {
            bot_id: e == null ? undefined : e.bot_id,
            id: e == null ? undefined : e.bot_id,
            bot_type: e == null ? undefined : e.bot_type,
            disabled_tag: (e == null ? undefined : e.bot_disable_tag) ?? "normal",
            creator_info: (e == null ? undefined : e.bot_creator_info) ?? {}
          };
          if (!(t == null ? undefined : t.getBot(e.bot_id)) && t != null) {
            t.updateBot(i);
          }
        }
      });
    }
    chatFeedStoreFactory.useFeedStore.setState(t => ({
      conversationMap: e.reduce((e, t) => {
        if (t.conversation_id) {
          let l = objectExcludeFilterUtil.filterObjectExclude(t, isUndefinedCheck.isUndefined);
          if (e[l.conversation_id]?.extra && !l.extra) {
            l.extra = e[l.conversation_id].extra;
          }
          e[l.conversation_id] = safePropertyAssignUtil.safePropertyAssign({}, e[l.conversation_id], l);
        }
        return e;
      }, {
        ...t.conversationMap
      }),
      lastMessageIndexMap: e.reduce((e, t) => {
        if (t.conversation_id) {
          e[t.conversation_id] = {
            message_index: Number(t.message_index) || 0,
            read_message_index: Number(t.read_message_index) || 0,
            badge_count: Number(t.badge_count ?? t.message_index) || 0,
            read_badge_count: Number(t.read_badge_count ?? t.read_message_index) || 0
          };
        }
        return e;
      }, {
        ...t.lastMessageIndexMap
      })
    }));
  };
  let _ = (e, t) => {
    let {
      append: n = true,
      ignoreOld: r = false
    } = t;
    let i = m();
    let a = e.map(e => {
      var t;
      return {
        threadId: (e == null ? undefined : e.thread_id_str) ?? (e == null ? undefined : (t = e.thread_id) === null || t === undefined ? undefined : t.toString()),
        isLocalConversation: false,
        conversationId: e.conversation?.conversation_id || "",
        conversationType: e.conversation?.conversation_type
      };
    }).filter(e => e.threadId !== null);
    let l = r ? [] : i;
    let o = l.filter(e => chatConversationLinkUtils.matchThreadKey(e.threadId));
    return chatConversationUtils_1.uniqConversations(n ? [...o, ...l, ...a] : [...o, ...a, ...l]);
  };
  let x = (e, t) => {
    e.conversationLinks.splice(t, 1);
    if (t < e.botConversationIndex) {
      e.botConversationIndex -= 1;
    }
  };
  let b = (e, t) => {
    let {
      conversationId: a,
      originConversationKey: l,
      index: s,
      threadId: c,
      pinOperation: f = false,
      isLocalConversation: v = false,
      isOverallChatItem: p,
      isMainCocoFixed: g = false
    } = t;
    let _ = p || chatFeedStoreFactory.useFeedStore.getState().isOverallList;
    let x = !!c || !!e.conversationLinks.find(e => e.conversationId === a)?.threadId || chatConversationCheckers.isCocoSubConv(e.conversationMap[a]) || chatConversationCheckers.isCocoConversation(e.conversationMap[a]);
    let b = _ ? chatFeedStoreFactory.useFeedStore.getState().conversationLinks : x ? m() : h();
    let w = b.length;
    let y = -1;
    let S = false;
    let C = v ? e.localConversationMap[a]?.conversation_type : e.conversationMap[a]?.conversation_type;
    let N = c;
    let j = w;
    let M = chatConversationConstants.conversationType.Conversation;
    b.forEach((t, n) => {
      let r = t.isLocalConversation ? e.localConversationMap[t.conversationId] : e.conversationMap[t.conversationId];
      let i = g && chatConversationCheckers.isCocoConversation(r) || (r == null ? undefined : r.pinned);
      if (t.conversationId === a) {
        y = n;
        S = i != null && i;
        C = t.conversationType;
        N = t.threadId;
        if (t.isLocalConversation) {
          M = chatConversationConstants.conversationType.LocalConversation;
        }
      }
      if (!i && j === w) {
        j = n;
      }
    });
    if (!s) {
      return;
    }
    if (~y) {
      let t = x || _ ? y : y + e.botConversationIndex;
      e.conversationLinks.splice(t, 1);
      j = j > y ? j - 1 : j;
      if (x) {
        e.botConversationIndex -= 1;
      }
    }
    let k = M === chatConversationConstants.conversationType.Conversation ? e.conversationMap[a] : e.localConversationMap[a];
    if (f) {
      j = S ? j : +!!g;
      if (k) {
        k.pinned = !k.pinned;
        if (k.pinned) {
          k.update_time = Date.now() / 1000;
        }
      }
    } else {
      j = S ? +!!g : j;
      if (k) {
        k.update_time = Date.now() / 1000;
      }
    }
    let T = x || _ ? j : j + e.botConversationIndex;
    e.conversationLinks.splice(T, 0, {
      isLocalConversation: v,
      conversationId: a,
      originConversationKey: l,
      conversationType: C,
      threadId: N == null ? undefined : N.toString()
    });
    if (x) {
      e.botConversationIndex += 1;
    }
  };
  require.d(exports, {
    updateConversationMap: function () {
      return g;
    },
    removeConversationLink: function () {
      return x;
    },
    getBotConversationLinks: function () {
      return h;
    },
    setMainConversationLink: function () {
      return p;
    },
    setBotConversationLinks: function () {
      return v;
    },
    insertConversationLink: function () {
      return b;
    },
    appendConversationLinks: function () {
      return f;
    },
    normalizeThreadLinks: function () {
      return _;
    }
  });
}