// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useLauncherSettings'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 440854
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var taskStatusConstants = require("task-status-constants") /*id: 100834*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let s = () => {
    let [e, t, r, s] = chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t,
        settingStatus: r
      } = e;
      return [r === taskStatusConstants.TaskStatus.Loading, true, objectPathGetDefault.getObjectPathDefault(t, "ab_config.ab_results.trim_landing_page_skill_names"), false];
    }, deepEqualityUtil_1.isDeepEqual);
    return {
      loading: e,
      trimSkills: t,
      trimSkillNames: r,
      navNewDocName: s
    };
  };
  require.d(exports, {
    useLauncherSettings: function () {
      return s;
    }
  });
}