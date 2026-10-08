// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'ChatMountTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55681.af5b0033.js
         * chunkId: 55681
         * moduleId: 617270
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!chatStoreManager.getStore("flowWebLayoutStore").getState().chatCompMountedTime[e]) {
        chatStoreManager.getStore("flowWebLayoutStore").setState(t => {
          let {
            chatCompMountedTime: n
          } = t;
          return {
            chatCompMountedTime: {
              ...n,
              [e]: Math.round(performanceTimeUtil.getPerformanceNow())
            }
          };
        });
      }
    }, []);
  };
  let l = e => {
    let {
      name: t
    } = e;
    s(t);
    return null;
  };
  require.d(exports, {
    ChatMountTracker: function () {
      return l;
    }
  });
}