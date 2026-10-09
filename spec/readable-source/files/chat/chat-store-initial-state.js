// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'chatInitialState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 243729
         */
module.exports = function (module, exports, require) {
  let i = {
    conversationListStatus: {
      loading: true,
      failed: false,
      count: 0,
      hasMore: false,
      isReload: false,
      initiated: false
    },
    overallListStatus: {
      loading: true,
      failed: false,
      count: 0,
      hasMore: false,
      isReload: false,
      initiated: false,
      nextIndex: ""
    },
    conversationLinks: [],
    mainConversationLink: undefined,
    botConversationIndex: 0,
    threadListStatus: {
      loading: false,
      failed: false,
      count: 0,
      hasMore: false,
      isReload: false,
      nextIndex: "",
      initiated: false
    },
    threadFeedStatus: {
      loading: false,
      failed: false,
      count: 0,
      hasMore: false,
      isReload: false,
      nextIndex: "",
      initiated: false
    },
    guestCanChat: true,
    chatNotReachLimitMap: {},
    guestReachCreateThreadLimit: true,
    guestReachSendMessageLimit: false,
    guestSendMessageLimit: 0,
    chatCreateInFirstTime: {},
    samanthaBot: {
      samanthaBotInfo: {},
      isLazyCreate: false
    },
    isOverallList: false
  };
  require.d(exports, {
    chatInitialState: function () {
      return i;
    }
  });
}