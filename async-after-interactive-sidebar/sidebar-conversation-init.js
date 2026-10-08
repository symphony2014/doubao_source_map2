// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'loadConversationListAction'
// - Resolved require(121268) to 'load-conversation-list-action'
// - Renamed variable 'i' to 'loadGuestThreadFeedService'
// - Resolved require(492515) to 'load-guest-thread-feed-service'
// - Renamed variable 'a' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'r' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Updated imported property 'EL' to 'waitForUserInfoLoaded' (module 480327)
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'W' to 'loadConversationList' (module 121268)
// - Updated imported property 'e' to 'loadGuestThreadFeed' (module 492515)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-sidebar.44a62b07.js
         * chunkId: 42534
         * moduleId: 893998
         */
module.exports = function (module, exports, require) {
  var loadConversationListAction = require("load-conversation-list-action") /*id: 121268*/;
  var loadGuestThreadFeedService = require("load-guest-thread-feed-service") /*id: 492515*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let l = async () => {
    await userInfoStatusSelectors.waitForUserInfoLoaded();
    if (userInfoStatusSelectors.selectUserInfoSuccess()) {
      let {
        overallListStatus: e
      } = chatFeedStoreFactory.useFeedStore.getState();
      await loadConversationListAction.loadConversationList({
        index: e.nextIndex || undefined,
        pcPinQueryType: e.pcPinQueryType || undefined
      });
    } else {
      await loadGuestThreadFeedService.loadGuestThreadFeed({});
    }
  };
  require.r(exports);
  require.d(exports, {
    waitConversationInit: function () {
      return l;
    }
  });
}