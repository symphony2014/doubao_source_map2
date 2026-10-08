// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'o' to 'performanceTimeUtil'
// - Resolved require(512870) to 'performance-time-util'
// - Renamed variable 'a' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Updated imported property 'z' to 'getPerformanceNow' (module 512870)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 563187
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let s = (e, t) => {
    let n = reactCoreLibraryReexport.useId();
    let [s] = reactCoreLibraryReexport.useState(() => `${n}_${Math.round(performanceTimeUtil.getPerformanceNow())}`);
    reactCoreLibraryReexport.useEffect(() => {
      let r;
      if (!t) {
        return;
      }
      let l = 0;
      let c = setInterval(() => {
        r = r ?? eventReportingService.createEventReporter({
          eventName: "thread_feed_load",
          meta: {
            enter_key: s,
            create_key: `${n}_${Math.round(performanceTimeUtil.getPerformanceNow())}`
          }
        });
        let t = !!document.querySelector(e);
        if (t || l >= 30) {
          if (c) {
            clearInterval(c);
          }
          if (t) {
            r.success();
          } else {
            r.error({
              reason: "queryTimeout",
              meta: {
                count: l,
                thread_list_status: JSON.stringify({
                  ...chatFeedStoreFactory.useFeedStore.getState().overallListStatus,
                  nextIndex: chatFeedStoreFactory.useFeedStore.getState().overallListStatus.nextIndex ? "1" : "0"
                }),
                thread_list_length: chatFeedStoreFactory.useFeedStore.getState().conversationLinks.length
              }
            });
          }
        }
        l++;
      }, 1000);
      return () => {
        clearInterval(c);
        if (r != null) {
          r.error({
            reason: "quit"
          });
        }
      };
    }, [t]);
  };
  let l = e => {
    let {
      querySelector: t
    } = e;
    s(t, true);
    return null;
  };
  require.r(exports);
  require.d(exports, {
    FeedItemDetactor: function () {
      return l;
    },
    useReportThreadFeedUILoad: function () {
      return s;
    }
  });
}