// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'debouncedLoadFindFeature'
// - Renamed export 'q' to 'loadFindFeatureConfigs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_find-replace.b0e9d86a.js
         * chunkId: 69648
         * moduleId: 857883
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  function l(e) {
    let t = e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider);
    let r = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (t.getFeatureStatus(docxToolboxConstants_3.toolboxCommands.FIND) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(docxToolboxConstants_3.toolboxCommands.FIND, e => {
        e.forEach(e => {
          if (e.blockSetting) {
            if (r != null) {
              r.addBlockSetting(e.blockSetting);
            }
          }
        });
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_tool_box_block_icon_setting_error", {
          error: e.message
        });
      });
    }
  }
  let a = debounceUtil_1_1.debounce(e => {
    if (e.config.get("editable") && e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider).getFeatureStatus(docxToolboxConstants_3.toolboxCommands.FIND) !== docxEditorCore.EditorInitStatus.LOADED) {
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("toolbox_find_setting_not_loaded_when_trigger");
      l(e);
    }
  }, 300);
  require.d(exports, {
    debouncedLoadFindFeature: function () {
      return a;
    },
    loadFindFeatureConfigs: function () {
      return l;
    }
  });
}