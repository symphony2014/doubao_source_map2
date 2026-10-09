// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useOutputPreviewTracking'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 317075
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let s = e => {
    let {
      extraEventParams: t
    } = e;
    let n = reactCoreLibraryReexport.useRef();
    let s = isFunctionUtil_1.isFunction(t) ? t() : t;
    let a = () => {
      return n.current ?? {};
    };
    let l = e => n.current = e;
    return {
      trackShortcutsShow: () => {
        teaAnalyticsEventTracker.trackEvent("output_preview_tool_show", {
          ...s
        });
      },
      trackShortcutsClick: e => {
        l(e);
        teaAnalyticsEventTracker.trackEvent("output_preview_tool_click", {
          ...s,
          ...a()
        });
      },
      trackShortcutsLoadingShow: () => {
        teaAnalyticsEventTracker.trackEvent("start_writing_show", {
          ...s
        });
      },
      trackShortcutsPauseWriting: () => {
        teaAnalyticsEventTracker.trackEvent("pause_writing", {
          ...s,
          ...a()
        });
      },
      getShortCutsClickParams: a,
      setShortCutsClickParams: l,
      trackInputLoadingShow: () => {
        teaAnalyticsEventTracker.trackEvent("start_writing_show", {
          ...s
        });
      },
      trackInputPauseWriting: () => {
        teaAnalyticsEventTracker.trackEvent("pause_writing", {
          ...s,
          button_name_level_one: "chat_enter_bar"
        });
      }
    };
  };
  require.d(exports, {
    useOutputPreviewTracking: function () {
      return s;
    }
  });
}