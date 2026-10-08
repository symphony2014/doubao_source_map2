// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Iy' to 'getConversationBase'
// - Renamed export 'U$' to 'getSamanthaBot'
// - Renamed export 'W2' to 'getThreadLinks'
// - Renamed export 'dB' to 'getBotConfig'
// - Renamed export 'fT' to 'getConversationMeta'
// - Renamed export 'jw' to 'selectConvLink'
// - Renamed export 'sX' to 'selectConversation'
// - Renamed export 'vf' to 'selectConvDetail'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 783144
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatConversationLinkUtils = require("chat-conversation-link-utils") /*id: 709080*/;
  var chatServiceContext_1 = require("chat-service-context_1") /*id: 698136*/;
  let u = (e, t) => chatFeedStoreFactory.useFeedStore(n => chatConversationCheckers.isSupportedConv(chatConversationSelectors_2.getConversation(n, e), t));
  let h = e => chatFeedStoreFactory.useFeedStore(t => chatConversationSelectors_2.getConversation(t, e), deepEqualityUtil_1.isDeepEqual);
  let f = () => chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getMainConversationLink, deepEqualityUtil_1.isDeepEqual);
  let p = () => chatFeedStoreFactory.useFeedStore(e => e.samanthaBot);
  let m = () => chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getConversationState, deepEqualityUtil_1.isDeepEqual);
  let v = () => {
    let {
      conversationLinks: e,
      botConversationIndex: t,
      ...n
    } = m();
    return {
      ...n,
      threadLinks: chatConversationLinkUtils.getPreviousLinks({
        conversationLinks: e,
        botConversationIndex: t
      })
    };
  };
  let g = () => chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getConversationListState, deepEqualityUtil_1.isDeepEqual);
  let _ = e => chatFeedStoreFactory.useFeedStore(t => chatConversationSelectors_2.getLocalConversation(t, e), deepEqualityUtil_1.isDeepEqual);
  let b = (e, t) => {
    let n = chatServiceContext_1.serviceContext.get("chatBotService", true);
    return chatFeedStoreFactory.useFeedStore(i => {
      let {
        bot_id: a = ""
      } = chatConversationSelectors_2.getConversation(i, e) ?? {};
      if (t === chatConversationTypes.ConversationTypes.Bot) {
        a = e;
      }
      let {
        bot_conf: s
      } = (n == null ? undefined : n.getBot(a)) || {};
      return s;
    }, deepEqualUtil_1.deepEqual);
  };
  require.d(exports, {
    getConversationBase: function () {
      return f;
    },
    getSamanthaBot: function () {
      return p;
    },
    getThreadLinks: function () {
      return v;
    },
    getBotConfig: function () {
      return b;
    },
    getConversationMeta: function () {
      return g;
    },
    selectConvLink: function () {
      return u;
    },
    selectConversation: function () {
      return h;
    },
    selectConvDetail: function () {
      return _;
    }
  });
}