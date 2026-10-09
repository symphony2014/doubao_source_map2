// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'r' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'a' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 's' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'l' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'u' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'p' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'h' to 'threadShareInfoService'
// - Resolved require(190012) to 'thread-share-info-service'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'IO' to 'getBotId' (module 390347)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'gF' to 'selectUserInfoLoading' (module 480327)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'bg' to 'detectPlatform' (module 190012)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'nL' to 'routeChatUrlAction' (module 323118)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52383.5d448ab0.js
         * chunkId: 52383
         * moduleId: 127600
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var threadShareInfoService = require("thread-share-info-service") /*id: 190012*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      chatId: t,
      children: n
    } = e;
    let _ = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId, deepEqualityUtil.deepEqual);
    let f = userInfoStatusSelectors.selectUserInfoLoading();
    let g = useNavigateRuntimeResolver.useNavigateResolver();
    reactCoreLibraryReexport.useEffect(() => {
      if (_ && !f) {
        if (t) {
          teaAnalyticsEventTracker.trackEvent("enter_page");
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "thread_share_landing_page_continue_chat",
            meta: {
              stage: "show",
              shareId: t,
              shareIdType: threadShareInfoService.detectPlatform(t),
              continueToChat: false
            }
          });
          let e = encodeURIComponent(JSON.stringify({
            pluginId: aiActionConstants.aiActionConstants.Share_ContinueChat_CreateConversation,
            payload: {
              shareId: t
            },
            pfTrackParams: {
              startJumpTime: 0
            }
          }));
          g(`${chatRouteConstants.routeChatUrlAction}?action=${e}`, {
            replace: true
          });
        } else {
          g(chatRouteConstants.routeChatRoot);
        }
      }
    }, [_, f]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: n
    });
  };
  require.r(exports);
  require.d(exports, {
    ShareContinueChatComp: function () {
      return _;
    }
  });
}