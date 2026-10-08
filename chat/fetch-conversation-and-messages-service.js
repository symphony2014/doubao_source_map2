// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'fetchConversationAndMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 556407
         */
module.exports = function (module, exports, require) {
  var chatInitialDataFetchers = require("chat-initial-data-fetchers") /*id: 909614*/;
  var chatSingleChainPullService = require("chat-single-chain-pull-service") /*id: 24059*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  let a = async e => {
    try {
      let {
        conversation: a,
        messageList: l
      } = chatInitialDataFetchers.fetchConversationData(e);
      if (!a || !l) {
        return {
          conversationInfo: undefined,
          messageList: undefined
        };
      }
      let [s, u] = await Promise.all([a, l]);
      let {
        get_conv_info_downlink_body: c
      } = s.downlink_body ?? {};
      let {
        conversation_info: d,
        bot_info: h
      } = c ?? {};
      let {
        pull_singe_chain_downlink_body: m
      } = u.downlink_body ?? {};
      let g = chatConversationTransformer.transformConversationBase(d, h);
      let f = chatConversationTransformer.botCategoryToParticipant(h);
      let p = chatSingleChainPullService.normalizePullChainResponse(m);
      return {
        conversationInfo: g,
        botInfo: f,
        messageList: p
      };
    } catch (e) {}
    return {
      conversationInfo: undefined,
      botInfo: undefined,
      messageList: undefined
    };
  };
  let l = e => a(e);
  require.d(exports, {
    fetchConversationAndMessages: function () {
      return l;
    }
  });
}