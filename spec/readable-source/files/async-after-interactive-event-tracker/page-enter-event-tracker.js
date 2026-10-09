// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'r' to 'urlParamUtils'
// - Resolved require(919916) to 'url-param-utils'
// - Updated imported property 'DP' to 'getQueryParam' (module 919916)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-event-tracker.8604c016.js
         * chunkId: 38237
         * moduleId: 404417
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let a = () => {
    let t = urlParamUtils.getQueryParam("enter_from");
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("enter_page", {
        is_from_ug: "0",
        enter_from: t
      });
    }, []);
    return null;
  };
  require.r(exports);
  require.d(exports, {
    EventTracker: function () {
      return a;
    }
  });
}