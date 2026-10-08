// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useVideoSkillChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: video-skill-chat-input.c992cca0.js
         * chunkId: 54640
         * moduleId: 855546
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var videoThinkingWrapper = require("video-thinking-wrapper") /*id: 476422*/;
  let a = e => {
    reactCoreLibraryReexport.useEffect(() => {
      videoThinkingWrapper.loadAnimationData();
      videoSkillStore.createVideoSkillStore().getState().initVideoList();
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...e
      });
    }, []);
  };
  require.d(exports, {
    useVideoSkillChat: function () {
      return a;
    }
  });
}