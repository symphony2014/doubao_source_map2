// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'trackSkillExitEvent'
// - Renamed export 'P' to 'EventInputTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 466492
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let r = Object.freeze({
    Keyboard: "keyboard",
    Click: "click"
  });
  let o = function ({
    exitScene: e,
    trackParams: t
  } = {}) {
    teaAnalyticsEventTracker.trackEvent("skill_module_close", {
      exit_scene: e,
      ...t
    });
    teaAnalyticsEventTracker.trackEvent("exit_skill", {
      exit_scene: e,
      ...t
    });
  };
  require.d(exports, {
    trackSkillExitEvent: function () {
      return o;
    },
    EventInputTypes: function () {
      return r;
    }
  });
}