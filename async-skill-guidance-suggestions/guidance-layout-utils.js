// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'useGuidanceLayout'
// - Renamed export 'U' to 'guidanceConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 474255
         */
module.exports = function (module, exports, require) {
  var i;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var taskStatusConstants = require("task-status-constants") /*id: 100834*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  (i = {}).OnboardingWithSug = "1";
  let l = i;
  let d = () => {
    let [e, t] = chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t,
        settingStatus: n
      } = e;
      return [n === taskStatusConstants.TaskStatus.Loading, objectPathGetDefault.getObjectPathDefault(t, "ab_config.ab_results.guidance_page_layout_mode")];
    }, deepEqualityUtil.deepEqual);
    return {
      loading: e,
      guidancePageLayoutMode: t
    };
  };
  require.d(exports, {
    useGuidanceLayout: function () {
      return d;
    },
    guidanceConfig: function () {
      return l;
    }
  });
}