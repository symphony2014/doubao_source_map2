// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useSkillShowTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 923275
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let s = function (e, {
    isOverflow: t,
    isOverflowPopover: r,
    isDragOverlay: s,
    position: l
  } = {}) {
    let c = skillTypeMappings.getSkillName(e);
    let u = e.toString();
    return reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      if (!s) {
        teaAnalyticsEventTracker.trackEvent("sidebar_skill_show", {
          skill_name: c,
          skill_id: u ?? "",
          show_pos: typeof l == "number" && l >= 0 ? l : undefined,
          show_from: r ? "more_hover" : t ? "more" : "default"
        });
      }
    }), [s, t, r]);
  };
  require.d(exports, {
    useSkillShowTracker: function () {
      return s;
    }
  });
}