// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'createAsrHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 938438
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  let l = (e, t) => {
    let {
      current: n
    } = reactCoreLibraryReexport.useRef({
      speak_duration_start: 0,
      content_length: 0,
      enter_method: "click_input_bar"
    });
    return {
      onStartAsr: e => {
        n.speak_duration_start = 0;
        n.content_length = 0;
        n.enter_method = e || "click_input_bar";
      },
      onClickAsrBtn: i => {
        let a = t.current?.asrStatus;
        if (a !== chatStatusConstants.ChatStatus.RECORDING && a !== chatStatusConstants.ChatStatus.PAUSED && a !== chatStatusConstants.ChatStatus.LOADING) {
          n.speak_duration_start = 0;
          n.content_length = 0;
          teaAnalyticsEventTracker.trackEvent("start_speak_input_click", {
            ...e,
            ...i
          });
        }
      },
      onUpdateValue: t => {
        if (!n.speak_duration_start) {
          n.speak_duration_start = performanceTimeUtil.getPerformanceNow();
          teaAnalyticsEventTracker.trackEvent("start_speak_input", {
            ...e,
            enter_method: n.enter_method
          });
        }
        if (typeof t == "string") {
          n.content_length = t.length;
        } else {
          n.content_length = inputToolConverter.extractText(t == null ? undefined : t.data).length;
        }
      },
      onStopAsr: function ({
        reason: t,
        isCancel: i,
        isInWave: r
      } = {}) {
        let s = n.speak_duration_start ? Math.round(performanceTimeUtil.getPerformanceNow() - n.speak_duration_start) : 0;
        if (r) {
          teaAnalyticsEventTracker.trackEvent("speak_wave_area_click", {
            ...e,
            click_from: i ? "cancel" : "send",
            enter_method: n.enter_method
          });
        }
        teaAnalyticsEventTracker.trackEvent("finish_speak_input", {
          ...e,
          content_length: n.content_length,
          speak_duration: s,
          end_method: t,
          success: t !== "interrupt" ? "1" : "0",
          enter_method: n.enter_method
        });
      }
    };
  };
  require.d(exports, {
    createAsrHandler: function () {
      return l;
    }
  });
}