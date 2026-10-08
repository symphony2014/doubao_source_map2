// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useGithubTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 212929
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let o = e => {
    let {
      trackParams: t
    } = e;
    let l = reactCoreLibraryReexport.useCallback((e, l) => {
      teaAnalyticsEventTracker.trackEvent(e, {
        ...t,
        ...l
      });
    }, [t]);
    return {
      sendGithubPopoverShowEvent: reactCoreLibraryReexport.useCallback(() => {
        l("github_popover_show");
      }, [l]),
      sendGithubPopoverClickEvent: reactCoreLibraryReexport.useCallback((e, t) => {
        l("github_popover_click", {
          button_name: e,
          repo_name: t
        });
      }, [l])
    };
  };
  require.d(exports, {
    useGithubTracker: function () {
      return o;
    }
  });
}