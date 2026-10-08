// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bu' to 'getConversationBotInfo'
// - Renamed export 'Kn' to 'getConversationBotId'
// - Renamed export 'QW' to 'getConversationType'
// - Renamed export 'WX' to 'getConversationData'
// - Renamed export 'px' to 'getConversationThreadId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 804460
         */
module.exports = function (module, exports, require) {
  var chatServiceContext_1 = require("chat-service-context_1") /*id: 698136*/;
  let r = function (e, t, n = false) {
    if (!t) {
      return;
    }
    let {
      conversation_type: i
    } = e.conversationMap[t] || {};
    if (i || !n) {
      return i;
    }
    let {
      conversation_type: r
    } = e.localConversationMap[t] || {};
    if (t) {
      return r;
    } else {
      return undefined;
    }
  };
  let o = (e, t) => {
    if (!t) {
      return;
    }
    let n = [...e.conversationLinks, e.mainConversationLink].find(e => (e == null ? undefined : e.conversationId) === t);
    if (n == null) {
      return undefined;
    } else {
      return n.threadId;
    }
  };
  let a = (e, t, n) => {
    if (!t) {
      return {};
    }
    let r = chatServiceContext_1.serviceContext.get("chatBotService", true);
    let o = e.conversationMap[t];
    let a = (o == null ? undefined : o.bot_id) || n;
    return {
      conversation: o,
      botInfo: a ? r == null ? undefined : r.getBot(a) : {}
    };
  };
  let l = (e, t) => t ? e.conversationMap[t] : {};
  let s = (e, t, n) => {
    let {
      botInfo: r,
      conversation: o
    } = a(e, t);
    let l = chatServiceContext_1.serviceContext.get("chatBotService", true);
    let s = (r == null ? undefined : r.id) || (r == null ? undefined : r.bot_id) || (o == null ? undefined : o.bot_id);
    if (s || !n) {
      return s;
    } else if (t) {
      if (l == null) {
        return undefined;
      } else {
        return l.getBotIdFromLocalConversation(t);
      }
    } else {
      return undefined;
    }
  };
  require.d(exports, {
    getConversationBotInfo: function () {
      return a;
    },
    getConversationBotId: function () {
      return s;
    },
    getConversationType: function () {
      return r;
    },
    getConversationData: function () {
      return l;
    },
    getConversationThreadId: function () {
      return o;
    }
  });
}