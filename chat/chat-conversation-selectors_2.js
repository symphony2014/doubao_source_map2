// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IO' to 'getBotId'
// - Renamed export 'N$' to 'getConversationListState'
// - Renamed export 'aG' to 'getConversationState'
// - Renamed export 'dg' to 'getLocalConversation'
// - Renamed export 'jo' to 'getConversation'
// - Renamed export 'kB' to 'getMainConversationLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 390347
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  let o = e => e.mainConversationLink;
  let a = e => {
    var a;
    return chatConversationSelectors_1.getConversationBotId(e, o(e)?.conversationId, true) || ((a = e.samanthaBot) === null || a === undefined ? undefined : a.samanthaBotInfo?.bot_id) || chatConstantId.chatConstantId;
  };
  let l = e => ({
    conversationLinks: e.conversationLinks,
    botConversationIndex: e.botConversationIndex,
    threadListStatus: e.threadListStatus,
    threadFeedStatus: e.threadFeedStatus
  });
  let s = (e, t) => t ? e.localConversationMap[t] : undefined;
  let u = (e, t) => t ? e.conversationMap[t] : undefined;
  let c = e => ({
    conversationLinks: e.conversationLinks,
    conversationListStatus: e.conversationListStatus,
    overallListStatus: e.overallListStatus,
    threadListStatus: e.threadListStatus,
    threadFeedStatus: e.threadFeedStatus
  });
  require.d(exports, {
    getBotId: function () {
      return a;
    },
    getConversationListState: function () {
      return c;
    },
    getConversationState: function () {
      return l;
    },
    getLocalConversation: function () {
      return s;
    },
    getConversation: function () {
      return u;
    },
    getMainConversationLink: function () {
      return o;
    }
  });
}